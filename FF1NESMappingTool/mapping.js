//
// Asset loader
//
const defaultWidth = 960;
const defaultHeight = 640;

var Loader = {
    images: {},
    mapData: {}
};

Loader.loadImage = function (key, src) {
    var img = new Image();

    var d = new Promise(function (resolve, reject) {
        img.onload = function () {
            this.images[key] = img;
            resolve(img);
        }.bind(this);

        img.onerror = function () {
            reject('Could not load image: ' + src);
        };
    }.bind(this));

    img.src = src;
    return d;
};

Loader.getImage = function (key) {
    return (key in this.images) ? this.images[key] : null;
};

Loader.loadMapData = function (key, src) {
    var d = new Promise(function (resolve, reject) {
        this.mapData[key] = [];
        fetch(src)
        .then(response => checkStatus(response) && response.arrayBuffer())
        .then(buffer => {
            this.mapData[key] = new Uint8Array(buffer);
            console.log("Overworld Data Retrieved: " + this.mapData[key].length + " array length.");
            console.log("First entry: " + this.mapData[key][0]);
            resolve();
        })
        .catch(err => reject(err + ' Could not load map data: ' + src)); // Never forget the final catch!
    }.bind(this));

    return d;
};

Loader.getMapData = function (key) {
    return (key in this.mapData) ? this.mapData[key] : null;
};

function checkStatus(response) {
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} - ${response.statusText}`);
  }
  return response;
}

//
// Keyboard handler
//

var Keyboard = {};

Keyboard.LEFT = 37;
Keyboard.RIGHT = 39;
Keyboard.UP = 38;
Keyboard.DOWN = 40;

Keyboard._keys = {};

Keyboard.listenForEvents = function (keys) {
    window.addEventListener('keydown', this._onKeyDown.bind(this));
    window.addEventListener('keyup', this._onKeyUp.bind(this));

    keys.forEach(function (key) {
        this._keys[key] = false;
    }.bind(this));
}

Keyboard._onKeyDown = function (event) {
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = true;
    }
};

Keyboard._onKeyUp = function (event) {
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = false;
    }
};

Keyboard.isDown = function (keyCode) {
    if (!keyCode in this._keys) {
        throw new Error('Keycode ' + keyCode + ' is not being listened to');
    }
    return this._keys[keyCode];
};

//
// Game object
//

var Game = {};

Game.run = function (context) {
    this.ctx = context;
    this._previousElapsed = 0;

    var p = this.load();
    Promise.all(p).then(function (loaded) {
        this.init();
        window.requestAnimationFrame(this.tick);
    }.bind(this));
};

Game.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, defaultWidth, defaultHeight);

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    this.update(delta);
    this.render();
}.bind(Game);

// override these methods to create the demo
Game.init = function () {};
Game.update = function (delta) {};
Game.render = function () {};

//
// start up function
//
      
window.onload = function () {
    var context = document.getElementById('mapping').getContext('2d');
    Game.run(context);
};


var dungeonCells = {cols: 32,
    rows: 32,
    tsize: 16,
    bitmapData: {}
};

var dungeonMap = {
    cols: 2,
    rows: 2,
    tsize: 512,
    cells: dungeonCells,
    data: null,
    getTile: function (mapX, mapY, col, row) {
        return this.data[mapY * this.cells.rows * this.cells.cols * this.cols + row * this.cells.cols * this.cols + mapX * this.cells.cols + col];
    }
};

var overworldCells = {cols: 32,
    rows: 32,
    tsize: 16,
    bitmapData: {}
};

var overworldMap = {
    cols: 8,
    rows: 8,
    tsize: 512,
    cells: overworldCells,
    data: null,
    tileAtlas: null,
    getTile: function (mapX, mapY, col, row) {
        return this.data[mapY * this.cells.rows * this.cells.cols * this.cols + row * this.cells.cols * this.cols + mapX * this.cells.cols + col];
    }
};

var spriteList = [];

function Camera(map, startX, startY, width, height, zoom) {
    this.x = startX * zoom;
    this.y = startY * zoom;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize * zoom - width;
    this.maxY = map.rows * map.tsize * zoom - height;
    this.zoom = zoom;
    console.log("Moving Camera to: " + this.x + "," + this.y);
}

Camera.SPEED = 1024; // pixels per second

Camera.prototype.move = function (delta, dirx, diry) {
    // move camera
    this.x += dirx * Camera.SPEED * delta;
    this.y += diry * Camera.SPEED * delta;
    // clamp values
    if(this.x < 0)
        this.x += this.maxX;
    else if (this.x > this.maxX)
        this.x -= this.maxX;
    if(this.y < 0)
        this.y += this.maxY;
    else if (this.y > this.maxY)
        this.y -= this.maxY;
};

const Directions = {
    Down: 0,
    Up: 1,
    Left: 2,
    Right: 3
};

function Player(map, startX, startY, width, height, image, spriteWalkFrames) {
    this.gridX = startX;
    this.gridY = startY;
    this.offsetX = 0;
    this.offsetY = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize;
    this.maxY = map.rows * map.tsize;
    this.spriteMap = image;
    this.spriteWalkFrames = spriteWalkFrames;
    this.active = true;
    this.direction = Directions.Down;
    this.frame = 0;
    this.canoe = false;
    this.ship = false;
    this.airship = false;
    console.log("Creating Player At: " + this.x + "," + this.y);
    spriteList.push(this);
}

Player.prototype.getAnimationFrame = function (map) {
    let spriteDirectionWalkFrames = [];
    let spriteAnimationState = {startX: 0, width: this.width};
    let offset = 0;
    switch(this.direction)
    {
        case Directions.Down:
            spriteDirectionWalkFrames = this.spriteWalkFrames['down'];
            offset = this.offsetY;
            break;
        case Directions.Up:
            spriteDirectionWalkFrames = this.spriteWalkFrames['up'];
            offset = this.offsetY;
            break;
        case Directions.Left:
            spriteDirectionWalkFrames = this.spriteWalkFrames['left'];
            offset = this.offsetX;
            break;
        case Directions.Right:
            spriteDirectionWalkFrames = this.spriteWalkFrames['right'];
            offset = this.offsetX;
            break;
    }
    if(spriteDirectionWalkFrames.length > 0)
    {
        let frameIndex = Math.floor(Math.abs(offset / map.cells.tsize) * spriteDirectionWalkFrames.length);
        let frame = spriteDirectionWalkFrames[frameIndex];
        if (frame < 1)
        {
            spriteAnimationState.startX = (1 - frame) * this.width;
            spriteAnimationState.width = -this.width;
        }
        else
            spriteAnimationState.startX = (frame - 1);
    }
    return spriteAnimationState;
}

Player.SPEED = 4; // Tiles per second
Player.SEASPEED = 6;
Player.AIRSPEED = 8;

Player.prototype.move = function (delta, direction) {
    // move camera
    let speed = this.airship ? Player.AIRSPEED : this.ship ? Player.SEASPEED : Player.SPEED;
    this.direction = direction;
    let polarity = (direction == Directions.Down || direction == Directions.Right) ? 1 : -1;
    if(direction == Directions.Down || direction == Directions.Up)
    {
        let motion = polarity * speed * delta;
        this.offsetY += motion;
        this.gridY += polarity * Math.floor(Math.abs(this.offsetY / this.height));
        this.offsetY += this.offsetY % this.height;
        if(this.gridY < 0)
            this.gridY += this.maxY;
        else if (this.gridY >= this.maxY)
            this.gridY -= this.maxY;
    }
    else if(direction == Directions.Left || direction == Directions.Right)
    {
        let motion = polarity * speed * delta;
        this.offsetX += motion;
        this.gridX += polarity * Math.floor(Math.abs(this.offsetX / this.width));
        this.offsetX += this.offsetX % this.width;
        if(this.gridX < 0)
            this.gridX += this.maxX;
        else if (this.gridX >= this.maxX)
            this.gridX -= this.maxX;
    }
};

Game.load = function () {
    return [
        Loader.loadImage('overworld', 'Assets/Overworld.png'),
        Loader.loadImage('fighter', 'Assets/Fighter.png'),
        Loader.loadMapData('overworld', 'Assets/Overworld%20Map.ffm'),
    ];
};

Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    overworldMap.tileAtlas = Loader.getImage('overworld');
    overworldMap.data = Loader.getMapData('overworld');
    console.log("INIT Overworldmap Data Length: " + overworldMap.data.length);
    this.camera = new Camera(overworldMap, 153 * overworldMap.cells.tsize, 165 * overworldMap.cells.tsize, defaultWidth, defaultHeight, 2);
    this.player = new Player(overworldMap, 153, 165, 16, 16, Loader.getImage('fighter'), {down:[1,-1], up:[2,-2], left:[3,4], right:[-3,-4]});
    
    // create a canvas
    this.layerCanvas = document.createElement('canvas');
    this.layerCanvas.width = defaultWidth;
    this.layerCanvas.height = defaultHeight;
    this.spriteCanvas = document.createElement('canvas');
    this.spriteCanvas.width = defaultWidth;
    this.spriteCanvas.height = defaultHeight;

    // initial draw of the map
    console.log("Intial Map Loading...");
    this._loadCells(overworldMap);
    console.log("Intial Map Load Complete");
    this._drawMap(overworldMap);
    console.log("Intial Map Draw Complete");
};

Game.update = function (delta) {
    this.hasScrolled = false;
    // handle camera movement with arrow keys
    let direction = -1;
    if (Keyboard.isDown(Keyboard.LEFT)) { direction = Directions.Left; }
    else if (Keyboard.isDown(Keyboard.RIGHT)) { direction = Directions.Right; }
    else if (Keyboard.isDown(Keyboard.UP)) { direction = Directions.Up; }
    else if (Keyboard.isDown(Keyboard.DOWN)) { direction = Directions.Down; }
    
    if (direction != -1) {
        this.player.move(delta, direction);
        this.hasScrolled = true;
    }
};

Game._loadCells = function (map) {
    /*let displayTsize = map.tsize * this.camera.zoom;
    let centerCol = Math.floor((this.camera.width / 2 + this.camera.x) / displayTsize);
    let centerRow = Math.floor((this.camera.height / 2 + this.camera.y) / displayTsize);
    
    for(let mapX = centerCol - 2; mapX < centerCol + 3; mapX++){
        for(let mapY = centerRow - 2; mapY < centerRow + 3; mapY++){*/
    for(let mapX = 0; mapX < map.cols; mapX++){
        for(let mapY = 0; mapY < map.rows; mapY++){
            //let mapIndex = Math.floor(mapX < 0 ? map.cols - 1 : mapX) + Math.floor((mapY < 0 ? map.rows - 1 : mapY) * map.cols);
            let mapIndex = mapX + mapY * map.cols;
            if(map.cells.bitmapData[mapIndex] == null)
            {
                let cellCanvas = document.createElement('canvas');
                cellCanvas.width = map.cells.cols * map.cells.tsize;
                cellCanvas.height = map.cells.rows * map.cells.tsize;
                let context = cellCanvas.getContext('2d')
                for (let c = 0; c <= map.cells.cols; c++) {
                    for (let r = 0; r <= map.cells.rows; r++) {
                        let tile = map.getTile(mapX, mapY, c, r);
                        let x = c * map.cells.tsize;
                        let y = r * map.cells.tsize;
                        let tileRow = Math.floor(tile / 16);
                        let tileCol = tile % 16;
                        context.drawImage(
                            map.tileAtlas, // image
                            tileCol * map.cells.tsize, // source x
                            tileRow * map.cells.tsize, // source y
                            map.cells.tsize, // source width
                            map.cells.tsize, // source height
                            x,  // target x
                            y, // target y
                            map.cells.tsize, // target width
                            map.cells.tsize // target height
                        );
                    }
                }
                map.cells.bitmapData[mapIndex] = cellCanvas;
            }
        }
    }
};

Game._drawMap = function (map) {
    let context = this.layerCanvas.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.clearRect(0, 0, defaultWidth, defaultHeight);
    let displayTsize = map.tsize * this.camera.zoom;
    let startCol = Math.floor((this.camera.x - this.camera.width) / displayTsize);
    let endCol = startCol + (this.camera.width + this.camera.x) / displayTsize;
    let startRow = Math.floor((this.camera.y - this.camera.height) / displayTsize);
    let endRow = startRow + (this.camera.height + this.camera.y) / displayTsize;
    let offsetX = -this.camera.x + this.camera.width / 2 + startCol * displayTsize;
    let offsetY = -this.camera.y + this.camera.height / 2 + startRow * displayTsize;
    
    for (let c = startCol; c <= endCol; c++) {
        for (let r = startRow; r <= endRow; r++) {
            let x = (c - startCol) * displayTsize + offsetX;
            let y = (r - startRow) * displayTsize + offsetY;
            let mapIndex = (c < 0 ? c + map.cols : c >= map.cols ? c - map.cols : c) + (r < 0 ? r + map.rows : r >= map.rows ? r - map.rows : r) * map.cols;
            context.drawImage(
                map.cells.bitmapData[mapIndex], // image
                0, // source x
                0, // source y
                map.tsize, // source width
                map.tsize, // source height
                Math.round(x),  // target x
                Math.round(y), // target y
                displayTsize, // target width
                displayTsize // target height
            );
        }
    }
};

Game._drawSprites = function (map) {
    let context = this.spriteCanvas.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.clearRect(0, 0, defaultWidth, defaultHeight);
    let displayTsize = map.cells.tsize * this.camera.zoom;
    let startCol = Math.floor((this.camera.x - this.camera.width) / displayTsize);
    let endCol = startCol + (this.camera.width + this.camera.x) / displayTsize;
    let startRow = Math.floor((this.camera.y - this.camera.height) / displayTsize);
    let endRow = startRow + (this.camera.height + this.camera.y) / displayTsize;
    let offsetX = -this.camera.x + this.camera.width / 2 + startCol * displayTsize;
    let offsetY = -this.camera.y + this.camera.height / 2 + startRow * displayTsize;
    
    for (let i = 0; i < spriteList.length; i++) {
        let sprite = spriteList[i];
        let spriteAnimationState = sprite.getAnimationFrame(map);
        let x = (sprite.gridX - startCol) * displayTsize + offsetX;
        let y = (sprite.gridY - startRow) * displayTsize + offsetY;
        context.drawImage(
            sprite.spriteMap, // image
            spriteAnimationState.startX, // source x
            0, // source y
            spriteAnimationState.width, // source width
            sprite.height, // source height
            Math.round(x),  // target x
            Math.round(y), // target y
            sprite.width * this.camera.zoom, // target width
            sprite.height * this.camera.zoom // target height
        );
    }
};

Game.render = function () {
    // re-draw map if there has been scroll
    if (this.hasScrolled) {
        this._drawMap(overworldMap);
        this._drawSprites(overworldMap);
    }

    // draw the map layers into game context
    this.ctx.drawImage(this.layerCanvas, 0, 0);
    this.ctx.drawImage(this.spriteCanvas, 0, 0);
};
