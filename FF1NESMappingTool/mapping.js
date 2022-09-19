//
// Asset loader
//
const defaultWidth = 960;
const defaultHeight = 640;

const worldMapTileFight = {
	None: 0,
	Fight: 1,
	FightRiver: 2,
	FightOcean: 3
};	

const teleportEntryRequirement = {
	None: 0,
	Crown: 1,
	Cube: 2,
	Chime: 3,
	Orbs: 4
};

function teleportEntry(name, targetMap, x, y, requirement = teleportEntryRequirement.None){
	this.name = name;
	this.targetMap = targetMap;
	this.gridX = x;
	this.gridY = y;
	this.requirement = requirement;
}

function worldMapTile(walk = false, ship = false, canoe = false, teleport = null, fight = worldMapTileFight.None, landAirship = false, dockShip = false, caravan = false, raiseAirship = false){
	this.fight = fight;
	this.walk = walk;
	this.canoe = canoe;
	this.ship = ship;
	this.landAirship = landAirship;
	this.dockShip = dockShip;
	this.caravan = caravan;
	this.teleport = teleport;
	this.raiseAirship = raiseAirship;
}

var worldMapTileAtlas = [
// Row 1
new worldMapTile(true, false, false, null, worldMapTileFight.Fight, true),
new worldMapTile(true, false, false, new teleportEntry('CorneriaCastle', 'CorneriaCastle', 12, 35)),
new worldMapTile(true, false, false, new teleportEntry('CorneriaCastle', 'CorneriaCastle', 12, 35)),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(false, true, false, null, worldMapTileFight.FightOcean),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(true, false, false, new teleportEntry('EarthCave', 'EarthCave', 23, 24)),
new worldMapTile(true, false, false, null, worldMapTileFight.None, false, true),
// Row 2
new worldMapTile(),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(false, true, false, null, worldMapTileFight.FightOcean),
new worldMapTile(false, true, false, null, worldMapTileFight.FightOcean),
new worldMapTile(false, true, false, null, worldMapTileFight.FightOcean),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(true, false, false, new teleportEntry('ElflandCastle', 'ElflandCastle', 16, 31)),
new worldMapTile(true, false, false, new teleportEntry('ElflandCastle', 'ElflandCastle', 16, 31)),
new worldMapTile(true, false, false, new teleportEntry('MirageTower', 'MirageTower', 17, 31, teleportEntryRequirement.Chime)),
new worldMapTile(true),
new worldMapTile(true, false, false, null, worldMapTileFight.None, false, true),
// Row 3
new worldMapTile(),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(false, true, false, null, worldMapTileFight.FightOcean),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, new teleportEntry('NorthwestCastle', 'NorthwestCastle', 22, 24)),
new worldMapTile(true, false, false, new teleportEntry('NorthwestCastle', 'NorthwestCastle', 22, 24)),
new worldMapTile(true, false, false, new teleportEntry('IceCave', 'IceCave', 7, 1)),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(true, false, false, new teleportEntry('DwarfCave', 'DwarfCave', 22, 11)),
// Row 4
new worldMapTile(),
new worldMapTile(),
new worldMapTile(true, false, false, new teleportEntry('MatoyaCave', 'MatoyaCave', 15, 11)),
new worldMapTile(),
new worldMapTile(true, false, false, new teleportEntry('TitanTunnelE', 'TitanTunnel', 11, 14)),
new worldMapTile(true, false, false, new teleportEntry('TitanTunnelW', 'TitanTunnel', 5, 3)),
new worldMapTile(true, false, false, null, worldMapTileFight.None, true, false, true),
new worldMapTile(true, false, false, null, worldMapTileFight.None, false, false, false, true),
new worldMapTile(true, false, false, new teleportEntry('OrdealsCastle', 'OrdealsCastle', 12, 21)),
new worldMapTile(true, false, false, new teleportEntry('OrdealsCastle', 'OrdealsCastle', 12, 21)),
new worldMapTile(true, false, false, new teleportEntry('SardaCave', 'SardaCave', 18, 13)),
new worldMapTile(true),
new worldMapTile(),
new worldMapTile(true),
new worldMapTile(),
new worldMapTile(true),
// Row 5
new worldMapTile(false, false, true, null, worldMapTileFight.FightRiver),
new worldMapTile(false, false, true, null, worldMapTileFight.FightRiver),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(false, false, true, null, worldMapTileFight.FightRiver),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(false, false, true, new teleportEntry('Waterfall', 'Waterfall', 57, 56)),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(true, false, false, new teleportEntry('Corneria', 'Corneria', 16, 23)),
new worldMapTile(true, false, false, new teleportEntry('Provoka', 'Provoka', 19, 32)),
new worldMapTile(),
new worldMapTile(true, false, false, new teleportEntry('Elfland', 'Elfland', 41, 22)),
new worldMapTile(true, false, false, new teleportEntry('Melmond', 'Melmond', 1, 16)),
new worldMapTile(true, false, false, new teleportEntry('CrescentLake', 'CrescentLake', 11, 23)),
new worldMapTile(),
// Row 6
new worldMapTile(false, false, true, null, worldMapTileFight.FightRiver),
new worldMapTile(false, false, true, null, worldMapTileFight.FightRiver),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight, true),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight, true),
new worldMapTile(true, false, false, new teleportEntry('FiendsTemple', 'FiendsTemple', 20, 30)),
new worldMapTile(true, false, false, new teleportEntry('FiendsTemple', 'FiendsTemple', 20, 30)),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight, true),
new worldMapTile(true, false, false, new teleportEntry('Gaia', 'Gaia', 61, 61)),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(true, false, false, new teleportEntry('Onrac', 'Onrac', 1, 12)),
new worldMapTile(),
new worldMapTile(),
// Row 7
new worldMapTile(true, false, false, null, worldMapTileFight.Fight, true),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight, true),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, new teleportEntry('GurguVolcano', 'GurguVolcano', 27, 15)),
new worldMapTile(true, false, false, new teleportEntry('GurguVolcano', 'GurguVolcano', 27, 15)),
new worldMapTile(true, false, false, new teleportEntry('Cardia1', 'Cardia', 12, 15)),
new worldMapTile(true, false, false, new teleportEntry('Cardia2', 'Cardia', 19, 36)),
new worldMapTile(true, false, false, new teleportEntry('Cardia3', 'Cardia', 43, 29)),
new worldMapTile(true, false, false, new teleportEntry('Cardia4', 'Cardia', 58, 55)),
new worldMapTile(true, false, false, new teleportEntry('Cardia5', 'Cardia', 30, 18)),
new worldMapTile(),
new worldMapTile(true, false, false, new teleportEntry('Bahamut', 'Bahamut', 2, 2)),
new worldMapTile(true, false, false, new teleportEntry('Leifen', 'Leifen', 19, 23)),
new worldMapTile(true, false, false, new teleportEntry('MarshCave', 'MarshCave', 21, 27)),
new worldMapTile(),
// Row 8
new worldMapTile(true, false, false, null, worldMapTileFight.Fight, true),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight, true),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true, false, false, null, worldMapTileFight.Fight),
new worldMapTile(true),
new worldMapTile(true),
new worldMapTile(true, false, false, null, worldMapTileFight.None, true),
new worldMapTile(true, false, false, null, worldMapTileFight.None, false, true),
new worldMapTile(true, false, false, null, worldMapTileFight.None, false, true),
new worldMapTile(true, false, false, null, worldMapTileFight.None, false, true),
new worldMapTile(true, false, false, null, worldMapTileFight.None, false, true),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(),
new worldMapTile(),
];

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
    delta = Math.min(delta, 0.05); // maximum delta of 50 ms
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
    },
    getTileData: function (gridX, gridY) {
        return worldMapTileAtlas[this.data[gridY * this.cells.cols * this.cols + gridX]];
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

Camera.prototype.followPlayer = function (map, player) {
    this.x = (player.gridX * map.cells.tsize + player.offsetX) * this.zoom;
    this.y = (player.gridY * map.cells.tsize + player.offsetY) * this.zoom;
};

const Directions = {
    Down: 0,
    Up: 1,
    Left: 2,
    Right: 3
};

const MoveMethod = {
    Walk: 0,
    Ship: 1,
    Canoe: 2,
    Airship: 3
}

function Player(map, startX, startY, width, height, image, spriteWalkFrames) {
    this.gridX = startX;
    this.gridY = startY;
    this.offsetX = 0;
    this.offsetY = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.cells.cols;
    this.maxY = map.rows * map.cells.rows;
    this.spriteMap = image;
    this.spriteWalkFrames = spriteWalkFrames;
    this.active = true;
    this.direction = Directions.Down;
    this.frame = 0;
    this.canoe = false;
    this.ship = false;
    this.airship = false;
    this.moveMethod = MoveMethod.Walk;
    console.log("Creating Player At: " + this.gridX + "," + this.gridY);
    spriteList.push(this);
}

Player.prototype.getAnimationFrame = function (frames) {
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
        let frameIndex = Math.floor(frames / 15) % spriteDirectionWalkFrames.length;
        let frame = spriteDirectionWalkFrames[frameIndex];
        spriteAnimationState.startX = frame * this.width;
    }
    return spriteAnimationState;
}

Player.prototype.checkTargetTile = function (tileX, tileY)
{
    let tileData = Game.currentMap.getTileData(tileX, tileY);
    if(this.moveMethod == MoveMethod.Walk && tileData.walk == false)
    {
		if(Game.bridge.active == true && Game.bridge.gridX == tileX && Game.bridge.gridY == tileY)
			return true;
        if(tileData.canoe == true && this.canoe == true)
        {
            this.moveMethod = MoveMethod.Canoe;
            return false;
        } // Build out more scenarios to ride boat, etc.
        else
            return true;
    }
    else if(this.moveMethod == MoveMethod.Ship && tileData.ship == false)
    {
        if(tileData.canoe == true && this.canoe == true)
        {
            this.moveMethod = MoveMethod.Canoe;
            return false;
        } // Build out more scenarios to ride boat, etc.
        else
            return true;
    }
    return false;
}

Player.SPEED = 320; // Raw Pixels Per Second (Unzoomed)
Player.SEASPEED = 96;
Player.AIRSPEED = 128;

Player.prototype.move = function (delta, direction, active) {
    // move camera
    let speed = this.airship ? Player.AIRSPEED : this.ship ? Player.SEASPEED : Player.SPEED;
    if(active)
        this.direction = direction;
    else
        direction = this.direction;
    let polarity = (direction == Directions.Down || direction == Directions.Right) ? 1 : -1;
    if(direction == Directions.Down || direction == Directions.Up)
    {
        let motion = polarity * speed * delta;
        this.offsetY += motion;
        this.gridY += polarity * Math.floor(Math.abs(this.offsetY / this.height));
        let targetTileInaccessible = this.checkTargetTile(this.gridX, this.gridY + polarity);
        // if sprite height or tile height is different, figure out how to use tile height
        if(!active && Math.abs(this.offsetY) > Math.abs(this.height) || targetTileInaccessible)
            this.offsetY = 0;
        this.offsetY = this.offsetY % this.height;
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
        let targetTileInaccessible = this.checkTargetTile(this.gridX + polarity, this.gridY);
        if(!active && Math.abs(this.offsetX) > Math.abs(this.width) || targetTileInaccessible)
            this.offsetX = 0;
        this.offsetX = this.offsetX % this.width;
        if(this.gridX < 0)
            this.gridX += this.maxX;
        else if (this.gridX >= this.maxX)
            this.gridX -= this.maxX;
    }
};

function Bridge(image)
{
    this.active = false;
    this.spriteMap = image;
    this.gridX = 153;
    this.gridY = 152;
    this.walk = true;
    this.ship = true;
	this.offsetX = 0;
	this.offsetY = 0;
    spriteList.push(this);
}
// Make generic sprite class to put Bridge/Misc under to prevent animation needs?
Bridge.prototype.getAnimationFrame = function (frames) {
    let spriteAnimationState = {startX: 0, width: this.width};
    return spriteAnimationState;
}

Game.toggleBridge = function() {
	this.bridge.active = !this.bridge.active;
}

Game.load = function () {
    return [
        Loader.loadImage('overworld', 'Assets/Overworld.png'),
        Loader.loadImage('fighter', 'Assets/Fighter.png'),
        Loader.loadImage('bridge', 'Assets/Bridge.png'),
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
    this.player = new Player(overworldMap, 153, 165, 16, 16, Loader.getImage('fighter'), {down:[0,7], up:[1,6], left:[2,3], right:[5,4]});
    this.bridge = new Bridge(Loader.getImage('bridge'));
    this.frames = 0;
    this.currentMap = overworldMap;
    
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
    this._drawSprites(overworldMap);
    console.log("Intial Sprite Draw Complete");
};

Game.update = function (delta) {
    this.hasScrolled = false;
    this.frames = this.frames + delta * 60;
    // handle camera movement with arrow keys
    let direction = -1;
    let activeMovement = false;
    let incompleteMovement = false;
    if (Keyboard.isDown(Keyboard.LEFT)) { direction = Directions.Left; }
    else if (Keyboard.isDown(Keyboard.RIGHT)) { direction = Directions.Right; }
    else if (Keyboard.isDown(Keyboard.UP)) { direction = Directions.Up; }
    else if (Keyboard.isDown(Keyboard.DOWN)) { direction = Directions.Down; }
    
    if (direction != -1)
        activeMovement = true;
    
    if(this.player.offsetX != 0 || this.player.offsetY != 0)
    {
        incompleteMovement = true;
        if(this.player.direction != direction)
            activeMovement = false;
    }
    
    if (activeMovement == true || incompleteMovement == true) {
        this.player.move(delta, direction, activeMovement);
        this.camera.followPlayer(overworldMap, this.player);
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
    let startCol = Math.floor((this.camera.x - this.camera.width / 2) / displayTsize);
    let endCol = startCol + (this.camera.width * this.camera.zoom) / displayTsize;
    let startRow = Math.floor((this.camera.y - this.camera.height / 2) / displayTsize);
    let endRow = startRow + (this.camera.height * this.camera.zoom) / displayTsize;
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
    let startCol = Math.floor((this.camera.x - this.camera.width / 2) / displayTsize);
    let endCol = startCol + (this.camera.width) / displayTsize;
    let startRow = Math.floor((this.camera.y - this.camera.height / 2) / displayTsize);
    let endRow = startRow + (this.camera.height) / displayTsize;
    let offsetX = -this.camera.x + this.camera.width / 2 + startCol * displayTsize;
    let offsetY = -this.camera.y + this.camera.height / 2 + startRow * displayTsize;
    
    for (let i = 0; i < spriteList.length; i++) {
		let sprite = spriteList[i];
		if(sprite.active == true)
	    {
			let spriteAnimationState = sprite.getAnimationFrame(this.frames);
			let x = (sprite.gridX - startCol) * displayTsize + offsetX + sprite.offsetX * this.camera.zoom;
			let y = (sprite.gridY - startRow) * displayTsize + offsetY + sprite.offsetY * this.camera.zoom;
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
