//
// Asset loader
//
const defaultWidth = 960;
const defaultHeight = 640;
const controllerWidth = 612;
const controllerHeight = 252;

const encounterChanceTable = [
0x1F, 0xA6, 0xDE, 0xBA, 0xCC, 0x12, 0x7D, 0x74, 0x1B, 0xF3, 0xB4, 0x88, 0xF8, 0x52, 0xF4, 0x07, 
0x90, 0xAB, 0xB3, 0xBD, 0xAA, 0x55, 0x28, 0xBC, 0x8A, 0x6D, 0x0E, 0xC4, 0x83, 0xA9, 0x3B, 0x76, 
0x20, 0x7C, 0x09, 0x92, 0xFD, 0x4A, 0xA8, 0xF0, 0x61, 0xE3, 0xF2, 0x69, 0x6C, 0xBB, 0x38, 0xC3, 
0xAE, 0xB7, 0x43, 0x84, 0x78, 0x23, 0x7B, 0x9B, 0x2D, 0xDB, 0x3E, 0x91, 0xCF, 0x02, 0x2A, 0xB6, 
0x86, 0xEE, 0x9C, 0x8E, 0xB8, 0x6F, 0x1A, 0x57, 0x05, 0xE9, 0x73, 0x31, 0xD2, 0xD9, 0x1D, 0xFB, 
0x94, 0x9D, 0xB1, 0x0A, 0x3A, 0x11, 0x5A, 0x47, 0x95, 0x2C, 0x44, 0xE0, 0x6A, 0x8C, 0x5B, 0x7A, 
0xA7, 0x5D, 0x36, 0x70, 0xE5, 0xC7, 0x49, 0xDC, 0x68, 0x97, 0xD8, 0x66, 0xA3, 0x0F, 0xB0, 0x9F, 
0x03, 0xD6, 0x77, 0x16, 0x13, 0x30, 0x25, 0x3C, 0x10, 0x17, 0xAD, 0x98, 0x6B, 0x2F, 0xD7, 0xA1, 
0xFF, 0xA4, 0xEB, 0x51, 0xFE, 0x27, 0x8D, 0x93, 0xD5, 0x3D, 0xF6, 0x08, 0x75, 0xE1, 0xA5, 0x46, 
0x63, 0xF5, 0x4D, 0xDA, 0x32, 0xAF, 0x40, 0x37, 0xD3, 0xC0, 0x89, 0x67, 0x06, 0x21, 0x6E, 0x81, 
0xB5, 0xA0, 0x4F, 0x0C, 0x2E, 0xE7, 0x1C, 0x58, 0x85, 0xE8, 0x59, 0xCE, 0x35, 0xCB, 0x1E, 0xC6, 
0x2B, 0x9A, 0xE6, 0xDD, 0xF1, 0xEC, 0x96, 0xCA, 0xAC, 0x00, 0x50, 0xC9, 0x4C, 0xFC, 0x14, 0x7E, 
0x56, 0x80, 0xD0, 0x79, 0xBF, 0x29, 0x87, 0x48, 0x24, 0x19, 0xC5, 0x22, 0x71, 0x7F, 0x72, 0x0D, 
0xCD, 0x8F, 0xBE, 0x3F, 0x9E, 0x34, 0xED, 0x53, 0x54, 0x04, 0x62, 0xA2, 0xC2, 0x41, 0x5E, 0x82, 
0x4B, 0x26, 0x5C, 0x42, 0x65, 0x99, 0x4E, 0x60, 0x8B, 0xF7, 0x0B, 0x33, 0xDF, 0xD1, 0x64, 0xC8, 
0xC1, 0x01, 0xEF, 0xF9, 0xFA, 0xE4, 0x5F, 0x18, 0xB9, 0xB2, 0x39, 0xD4, 0x15, 0xE2, 0xEA, 0x45, 
];

const encounterGroupTable = [
3, 4, 3, 6, 2, 2, 7, 5, 3, 5, 5, 1, 6, 2, 5, 1,
2, 4, 5, 7, 4, 2, 4, 7, 1, 4, 2, 1, 1, 4, 6, 6,
3, 7, 1, 2, 7, 1, 4, 5, 3, 3, 5, 4, 4, 6, 6, 1,
4, 6, 1, 1, 6, 3, 6, 3, 4, 3, 7, 2, 2, 1, 4, 6,
1, 4, 3, 2, 6, 4, 3, 2, 1, 4, 5, 5, 2, 3, 3, 6,
2, 3, 5, 1, 6, 2, 3, 1, 2, 4, 1, 3, 4, 2, 3, 6,
4, 3, 6, 5, 4, 1, 1, 3, 4, 2, 3, 4, 3, 2, 5, 3,
1, 2, 6, 2, 2, 5, 4, 7, 2, 2, 4, 3, 4, 4, 2, 3,
8, 4, 4, 2, 7, 4, 2, 2, 2, 7, 6, 1, 5, 3, 4, 1,
3, 5, 2, 3, 5, 4, 1, 6, 2, 1, 1, 4, 1, 3, 4, 1,
5, 3, 2, 2, 4, 4, 3, 3, 1, 4, 3, 2, 5, 1, 3, 1,
4, 3, 4, 3, 5, 4, 2, 1, 4, 1, 2, 1, 2, 7, 2, 7,
2, 1, 2, 6, 8, 4, 1, 1, 4, 3, 1, 3, 5, 8, 5, 2,
2, 2, 7, 8, 3, 5, 4, 2, 2, 1, 3, 3, 1, 1, 3, 1,
1, 4, 3, 1, 4, 3, 2, 3, 1, 6, 1, 5, 3, 2, 4, 1,
1, 1, 4, 6, 6, 4, 3, 3, 6, 5, 6, 2, 2, 3, 4, 1
];

const worldMapTileFight = {
	None: -1,
	Fight: -2,
	FightRiver: -3,
	FightOcean: -4
};	

const teleportEntryRequirement = {
	None: 0,
	Crown: 1,
	Cube: 2,
	Chime: 3,
	Orbs: 4
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
};

const KeyItem = {
	LUTE: 0,
	CROWN: 1,
	CRYSTAL: 2,
	HERB: 3,
	KEY: 4,
	TNT: 5,
	RUBY: 6,
	SLAB: 7,
	ADAMANT: 8, 
	ROD: 9,
	FLOATER: 10,
	CHIME: 11,
	TAIL: 12,
	CUBE: 13,
	BOTTLE: 14,
	OXYALE: 15,
	CANOE: 16,
	EARTHORB: 17,
	FIREORB: 18,
	WATERORB: 19,
	AIRORB: 20
};

const KeyItemStrings = [
	'LUTE',
	'CROWN',
	'CRYSTAL',
	'HERB',
	'KEY',
	'TNT',
	'RUBY',
	'SLAB',
	'ADAMANT', 
	'ROD',
	'FLOATER',
	'CHIME',
	'TAIL',
	'CUBE',
	'BOTTLE',
	'OXYALE',
	'CANOE',
	'EARTHORB',
	'FIREORB',
	'WATERORB',
	'AIRORB'
];

const KeyItemCount = 21;

const EventTrigger = {
	PRINCESS: 0,
	BRIDGE: 1,
	PIRATES: 2,
	SPAWNSHIP: 3,
	CANAL: 4,
	TRANSLATE: 5,
	AIRSHIP: 6,
	CLASSCHANGE: 7,
	CUREELF: 8,
	EXCALIBER: 9
};

const EventStrings = [
	'PRINCESS',
	'BRIDGE',
	'PIRATES',
	'SPAWNSHIP',
	'CANAL',
	'TRANSLATE',
	'AIRSHIP',
	'CLASSCHANGE',
	'CUREELF',
	'EXCALIBER'
];

const EventTriggerCount = 10;

const ResetType = {
	Path: 1,
	Soft: 2,
	Hard: 3
};

const EventType = {
	Fight: 1,
	Item: 2,
	Event: 3,
	Reset: 4
};

function teleportEntry(name, targetMap, x, y, requirement = teleportEntryRequirement.None, roomState = null){
	this.name = name;
	this.targetMap = targetMap;
	this.gridX = x;
	this.gridY = y;
	this.requirement = requirement;
	this.roomState = roomState;
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
	this.room = 0;
	this.loot = null;
}

var worldMapTileAtlas = [
// Row 1
new worldMapTile(true, false, false, null, worldMapTileFight.Fight, true),
new worldMapTile(true, false, false, new teleportEntry('ConeriaCastle', 'ConeriaCastle1F', 12, 35)),
new worldMapTile(true, false, false, new teleportEntry('ConeriaCastle', 'ConeriaCastle1F', 12, 35)),
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
new worldMapTile(true, false, false, new teleportEntry('EarthCave', 'EarthCaveB1', 23, 24)),
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
new worldMapTile(true, false, false, new teleportEntry('MirageTower', 'MirageTower1F', 17, 31, teleportEntryRequirement.Chime)),
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
new worldMapTile(true, false, false, new teleportEntry('IceCave', 'IceCaveB1', 7, 1)),
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
new worldMapTile(true, false, false, new teleportEntry('OrdealsCastle', 'OrdealsCastle1F', 12, 21)),
new worldMapTile(true, false, false, new teleportEntry('OrdealsCastle', 'OrdealsCastle1F', 12, 21)),
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
new worldMapTile(true, false, false, new teleportEntry('Coneria', 'Coneria', 16, 23)),
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
new worldMapTile(true, false, false, null, worldMapTileFight.None, true),
new worldMapTile(true, false, false, new teleportEntry('FiendsTemple', 'FiendsTemple', 20, 30)),
new worldMapTile(true, false, false, new teleportEntry('FiendsTemple', 'FiendsTemple', 20, 30)),
new worldMapTile(true, false, false, null, worldMapTileFight.None, true),
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
new worldMapTile(true, false, false, new teleportEntry('Volcano1', 'VolcanoB1', 27, 15)),
new worldMapTile(true, false, false, new teleportEntry('Volcano2', 'VolcanoB1', 27, 15)),
new worldMapTile(true, false, false, new teleportEntry('Cardia1', 'Cardia', 12, 15)),
new worldMapTile(true, false, false, new teleportEntry('Cardia2', 'Cardia', 19, 36)),
new worldMapTile(true, false, false, new teleportEntry('Cardia3', 'Cardia', 43, 29)),
new worldMapTile(true, false, false, new teleportEntry('Cardia4', 'Cardia', 58, 55)),
new worldMapTile(true, false, false, new teleportEntry('Cardia5', 'Cardia', 30, 18)),
new worldMapTile(),
new worldMapTile(true, false, false, new teleportEntry('Bahamut', 'BahamutB1', 2, 2)),
new worldMapTile(true, false, false, new teleportEntry('Leifen', 'Leifen', 19, 23)),
new worldMapTile(true, false, false, new teleportEntry('MarshCave', 'MarshCaveB1', 21, 27)),
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

const dungeonMapTileFight = {
	None: -1,
	RNG: -2 // set encounter store number of fight 
};

const roomOpening = {
	None: 0,
	Open: 1,
	Close: 2,
	Lock: 3
};

function dungeonMapTile(walk = false, teleport = null, loot = null, fight = dungeonMapTileFight.None, shop = null, room = roomOpening.None){
	this.fight = fight;
	this.walk = walk;
	this.loot = loot;
	this.teleport = teleport;
	this.shop = shop;
	this.room = room;
	this.canoe = false;
	this.ship = false;
	this.landAirship = false;
	this.dockShip = false;
	this.caravan = false;
	this.raiseAirship = false;
}

var townMapTileAtlas = [
// Row 1
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 2
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ConeriaWEP'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ProvokaWEP'),
// Row 3
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ElflandWEP'),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'MelmondWEP'),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 4
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'CrescentWEP'),
new dungeonMapTile(true),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'GaiaWEP'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'WEP1'),
// Row 5
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'WEP2'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'WEP3'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'WEP4'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ConeriaARM'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ProvokaARM'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ElflandARM'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'MelmondARM'),
new dungeonMapTile(true, new teleportEntry('TownWarp', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('SeaShrine', 'SeaShrineB3', 21, 42)),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'CrescentARM'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'GaiaARM'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ARM1'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ARM2'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ARM3'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ARM4'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ConeriaWHT'),
// Row 6
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ProvokaWHT'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ElflandWHT'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'MelmondWHT'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'CrescentWHT'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'Elfland2WHT'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'GaiaWHT'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'Gaia2WHT'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'OnracWHT'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'LeifinWHT'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ConeriaBLK'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ProvokaBLK'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ElflandBLK'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'MelmondBLK'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'CrescentBLK'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'Elfland2BLK'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'GaiaBLK'),
// Row 7
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'Gaia2BLK'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'OnracBLK'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'LeifinBLK'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ConeriaCNC'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ElflandCNC'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'CrescentCNC'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'GaiaCNC'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'OnracCNC'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ProvokaCNC'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'CNC1'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'CNC2'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'CNC3'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'CNC4'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ConeriaINN'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ProvokaINN'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ElflandINN'),
// Row 8
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'MelmondINN'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'CrescentINN'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'GaiaINN'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'OnracINN'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'INN1'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'INN2'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'INN3'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ConeriaITM'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ProvokaITM'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ElflandITM'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'CrescentITM'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'GaiaITM'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'OnracITM'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ITM1'),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, 'ITM2'),
new dungeonMapTile(),
];

var castleMapTileAtlas = [
// Row 1
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
// Row 2
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 3
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 4
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Open),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true, new teleportEntry('CastleWarp', 'WARP', 0, 0)),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Lock),
new dungeonMapTile(),
new dungeonMapTile(true, new teleportEntry('ExitConeria', 'WorldMap', 153, 159)),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 5
new dungeonMapTile(true, new teleportEntry('ExitOrdeals', 'WorldMap', 130, 45)),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true, new teleportEntry('Coneria1', 'ConeriaCastle2F', 12, 18)),
new dungeonMapTile(true, new teleportEntry('Ordeals2', 'OrdealsCastle3F', 22, 22)),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true, new teleportEntry('CastleWarpStairs', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('Coneria2', 'ConeriaCastle1F', 12, 18)),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true, new teleportEntry('Ordeals4', 'OrdealsCastle2F', 14, 12)),
new dungeonMapTile(true, new teleportEntry('Ordeals5', 'OrdealsCastle2F', 12, 9)),
new dungeonMapTile(true, new teleportEntry('Ordeals6', 'OrdealsCastle2F', 12, 16)),
new dungeonMapTile(true, new teleportEntry('Ordeals7', 'OrdealsCastle2F', 10, 12)),
// Row 6
new dungeonMapTile(true, new teleportEntry('Ordeals8', 'OrdealsCastle2F', 1, 20)),
new dungeonMapTile(true, new teleportEntry('Ordeals9', 'OrdealsCastle2F', 6, 5)),
new dungeonMapTile(true, new teleportEntry('Ordeals10', 'OrdealsCastle2F', 4, 4)),
new dungeonMapTile(true, new teleportEntry('Ordeals11', 'OrdealsCastle2F', 8, 4)),
new dungeonMapTile(true, new teleportEntry('Ordeals12', 'OrdealsCastle2F', 14, 20)),
new dungeonMapTile(true, new teleportEntry('Ordeals13', 'OrdealsCastle2F', 23, 22)),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true, null, null, 29),
new dungeonMapTile(true, null, null, 24),
new dungeonMapTile(true, null, null, 63),
new dungeonMapTile(true, null, null, 79),
new dungeonMapTile(true, null, null, 75),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(true, null, null, 0),//???
// Row 7
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(true, new teleportEntry('Ordeals1', 'OrdealsCastle2F', 12, 12, teleportEntryRequirement.Crown)),
new dungeonMapTile(true, new teleportEntry('Ordeals3', 'OrdealsCastle1F', 2, 2, teleportEntryRequirement.Crown)),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(false, null, KeyItem.TNT),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 8
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(false, null, KeyItem.TAIL),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
];

var shrineMapTileAtlas = [
// Row 1
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true, new teleportEntry('ExitSeaShrine', 'WorldMap', 0x3e, 0x38)),
// Row 2
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, KeyItem.WATERORB),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 3
new dungeonMapTile(true, null, null, 0x10),
new dungeonMapTile(true, null, null, 0x44),
new dungeonMapTile(true, null, null, 0x45),
new dungeonMapTile(true, null, null, 0x49),
new dungeonMapTile(true, null, null, 0x4A),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 4
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Open),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Lock),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 5
new dungeonMapTile(true, new teleportEntry('TimeWarp', 'FiendsTemple1F', 0x14, 0x11)),
new dungeonMapTile(true, new teleportEntry('ShrineWarp', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('Shrine2Warp', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('SeaShrine2', 'SeaShrineB2', 0x2d, 0x8)),
new dungeonMapTile(true, new teleportEntry('SeaShrine3', 'SeaShrineB1', 0xc, 0x1a)),
new dungeonMapTile(true, new teleportEntry('SeaShrine5', 'SeaShrineB3', 0x2f, 0x27)),
new dungeonMapTile(true, new teleportEntry('SeaShrine6', 'SeaShrineB2', 0x36, 0x29)),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true, new teleportEntry('SeaShrine9', 'SeaShrineB5', 0x32, 0x30)),
new dungeonMapTile(true, new teleportEntry('SeaShrine4', 'SeaShrineB4', 0x3D, 0x31)),
new dungeonMapTile(true, new teleportEntry('Shrine3Warp', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('SeaShrine7', 'SeaShrineB3', 0x30, 0xa)),
new dungeonMapTile(true, new teleportEntry('SeaShrine8', 'SeaShrineB4', 0x2d, 0x14)),
// Row 6
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true, null, null, 0x04),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(true, null, null, 0x10),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 7
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 8
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(false, null, KeyItem.SLAB),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
];

var earthCaveMapTileAtlas = [
// Row 1
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true, null, KeyItem.EARTHORB),
new dungeonMapTile(true, new teleportEntry('ExitEarthCave', 'WorldMap', 0x41, 0xBB)),
// Row 2
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, new teleportEntry('ExitTitanE', 'WorldMap', 0x2a, 0xae)),
new dungeonMapTile(true, new teleportEntry('ExitTitanW', 'WorldMap', 0x1e, 0xaf)),
new dungeonMapTile(true, null, KeyItem.FIREORB),
new dungeonMapTile(true, new teleportEntry('EarthCaveWarp', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('Volcano4', 'VolcanoB3', 0x2e, 0x17)),
new dungeonMapTile(true),
new dungeonMapTile(true, null, null, 0x1e),
new dungeonMapTile(true, null, null, 0x1f),
new dungeonMapTile(true, null, null, 0x21),
new dungeonMapTile(true, null, null, 0x6e),
new dungeonMapTile(true, new teleportEntry('ExitVolcano', 'WorldMap', 0xbc, 0xcd)),
// Row 3
new dungeonMapTile(true),//Use ROD???
new dungeonMapTile(true, null, null, 0x6f),
new dungeonMapTile(true, null, null, 0x27),
new dungeonMapTile(true, null, null, 0x28),
new dungeonMapTile(true, new teleportEntry('EarthCave', 'EarthCaveB2', 0xa, 0x9)),
new dungeonMapTile(true, new teleportEntry('EarthCave2', 'EarthCaveB3', 0x1b, 0x2d)),
new dungeonMapTile(true, new teleportEntry('EarthCave3', 'EarthCaveB4', 0x3d, 0x21)),
new dungeonMapTile(true, new teleportEntry('EarthCave4', 'EarthCaveB5', 0x19, 0x35)),
new dungeonMapTile(true, new teleportEntry('Volcano', 'VolcanoB2', 0x1e, 0x20)),
new dungeonMapTile(true, new teleportEntry('Volcano2', 'VolcanoB3', 0x12, 0x2)),
new dungeonMapTile(true, new teleportEntry('Volcano3', 'VolcanoB4', 0x3, 0x17)),
new dungeonMapTile(true, new teleportEntry('Volcano5', 'VolcanoB4', 0x23, 0x6)),
new dungeonMapTile(true, new teleportEntry('Volcano6', 'VolcanoB5', 0x20, 0x1f)),
new dungeonMapTile(true, new teleportEntry('EarthCaveWarp2', 'WARP', 0, 0)),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(true, null, null, 0x29),
// Row 4
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Open),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Lock),
new dungeonMapTile(),
new dungeonMapTile(true),//lava
new dungeonMapTile(),
new dungeonMapTile(),
// Row 5
new dungeonMapTile(true, null, null, 0x2a),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 6
new dungeonMapTile(),
new dungeonMapTile(false, null, KeyItem.RUBY),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 7
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 8
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
];

var iceCaveMapTileAtlas = [
// Row 1
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 2
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, new teleportEntry('IceCaveWarp', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('IceCave3', 'IceCaveB2', 0x37, 0x5)),
new dungeonMapTile(true, new teleportEntry('IceCave5', 'IceCaveB1', 0x6, 0x14)),
new dungeonMapTile(true, new teleportEntry('ExitIceCave', 'WorldMap', 0xc5, 0xb7)),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 3
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true, new teleportEntry('IceCaveWarp2', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('IceCave', 'IceCaveB2', 0x1e, 0x2)),
new dungeonMapTile(true, new teleportEntry('IceCave2', 'IceCaveB3', 0x3, 0x2)),
new dungeonMapTile(true, new teleportEntry('IceCave6', 'IceCaveB3', 0x3b, 0x21)),
new dungeonMapTile(true, new teleportEntry('Bahamut', 'BahamutB2', 0x17, 0x37)),
new dungeonMapTile(true, new teleportEntry('IceCave4', 'IceCaveB3', 0x27, 0x6)),
new dungeonMapTile(true, new teleportEntry('IceCave7', 'IceCaveB2', 0x33, 0xb)),
new dungeonMapTile(true),
// Row 4
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Open),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),//freezeburn
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Lock),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 5
new dungeonMapTile(true, null, null, 0x2c),
new dungeonMapTile(true, null, null, 0x2d),
new dungeonMapTile(true, null, null, 0x2e),
new dungeonMapTile(true, null, null, 0x2f),
new dungeonMapTile(true, null, null, 0x30),
new dungeonMapTile(true, null, null, 0x69),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(true, null, null, 0x00),
new dungeonMapTile(true, null, null, 0x4a),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 6
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(false, null, KeyItem.FLOATER),
// Row 7
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 8
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
];

var towerMapTileAtlas = [
// Row 1
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true, new teleportEntry('TowerWarp', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('MarshCave2', 'MarshCaveB2', 0x22, 0x25)),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 2
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, 0x1c),
new dungeonMapTile(true, null, null, 0x1c),
new dungeonMapTile(true, null, null, 0x15),
new dungeonMapTile(true, null, null, 0x4e),
new dungeonMapTile(true, null, null, 0x50),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 3
new dungeonMapTile(true, new teleportEntry('MarshCave', 'MarshCaveB2', 0x12, 0x10)),
new dungeonMapTile(true),
new dungeonMapTile(true, new teleportEntry('MarshCave3', 'MarshCaveB3', 0x5, 0x6)),
new dungeonMapTile(true, new teleportEntry('TowerWarp2', 'WARP', 0, 0)),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true, new teleportEntry('TowerWarp3', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('MirageTower', 'MirageTower2F', 0x10, 0x1f)),
new dungeonMapTile(true, new teleportEntry('MirageTower2', 'MirageTower3F', 0x8, 0x1)),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true, new teleportEntry('SkyPalace', 'SkyPalace1F', 0x13, 0x15, teleportEntryRequirement.Cube)),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(true, null, null, 0x00),
new dungeonMapTile(true, null, null, 0x00),
// Row 4
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Open),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Lock),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 5
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(false, null, KeyItem.CROWN),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 6
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 7
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 8
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
];

var skyCastleMapTileAtlas = [
// Row 1
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true, new teleportEntry('ExitSkyCastle', 'WorldMap', 0xC2, 0x3B)),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true, null, KeyItem.AIRORB),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 2
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),//text f9? some text about looking down on stuff
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 3
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 4
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Open),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Lock),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 5
new dungeonMapTile(true, new teleportEntry('SkyWarp', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('SkyPalace2', 'SkyPalace2F', 0x13, 0x4)),
new dungeonMapTile(true, new teleportEntry('SkyPalace3', 'SkyPalace3F', 0x18, 0x17)),
new dungeonMapTile(true, new teleportEntry('SkyPalace4', 'SkyPalace4F', 0x3, 0x3)),
new dungeonMapTile(true, new teleportEntry('SkyPalace5', 'SkyPalace5F', 0x7, 0x36)),
new dungeonMapTile(true, new teleportEntry('SkyWarp2', 'WARP', 0, 0)),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 6
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 7
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 8
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
];

var fiendsTempleMapTileAtlas = [
// Row 1
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true, new teleportEntry('FiendsWarp', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('FiendsTemple4', 'FiendsTemple2F', 0x14, 0x12)),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
// Row 2
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 3
new dungeonMapTile(true), // Use LUTE
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true), // Earth Icon: Too bad fiends aren't inside rooms or could use these?  Copy-paste them onto fiend fight tile graphic?
new dungeonMapTile(true), // Water Icon
new dungeonMapTile(true), // Fire Icon
new dungeonMapTile(true), // Wind Icon
// Row 4
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Open),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Close),
new dungeonMapTile(true, null, null, dungeonMapTileFight.None, null, roomOpening.Lock),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 5
new dungeonMapTile(true, new teleportEntry('FiendsWarp2', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('FiendsWarp3', 'WARP', 0, 0)),
new dungeonMapTile(true, new teleportEntry('FiendsTemple2', 'FiendsTemple2F', 0x10, 0xF)),
new dungeonMapTile(true, new teleportEntry('FiendsTemple3', 'FiendsTemple3F', 0x1, 0x1)),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, new teleportEntry('FiendsTemple10', 'FiendsTempleChaos', 0xF, 0x7)),
new dungeonMapTile(true, new teleportEntry('FiendsTemple9', 'FiendsTempleAir', 0x1, 0x4)),
new dungeonMapTile(true, new teleportEntry('FiendsTemple8', 'FiendsTempleWater', 0x1, 0x1)),
new dungeonMapTile(true, new teleportEntry('FiendsTemple', 'FiendsTempleEarth', 0x8, 0x1B)),
new dungeonMapTile(true, new teleportEntry('FiendsWarp4', 'WARP', 0, 0)),
// Row 6
new dungeonMapTile(true, new teleportEntry('FiendsTemple4', 'FiendsTemple2F', 0x14, 0x12)),
new dungeonMapTile(true, new teleportEntry('FiendsTemple5', 'FiendsTemple1F', 0x28, 0x1)),
new dungeonMapTile(true, new teleportEntry('FiendsTemple6', 'FiendsTempleEarth', 0x3, 0x20)),
new dungeonMapTile(true, new teleportEntry('FiendsTemple7', 'FiendsTempleFire', 0xD, 0x15)),
new dungeonMapTile(true),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(true, null, null, 0x46),
new dungeonMapTile(true, null, null, 0x73),
new dungeonMapTile(true, null, null, 0x74),
new dungeonMapTile(true, null, null, 0x75),
new dungeonMapTile(true, null, null, 0x76),
new dungeonMapTile(true, null, null, 0x00),
new dungeonMapTile(true, null, null, dungeonMapTileFight.RNG),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
// Row 7
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
// Row 8
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
new dungeonMapTile(true),
];

function DungeonInfo(label, mapTileAtlas, tileAtlasImageName, tileAtlasRoomImageName, mapDataName, exitInformation, encounterThreshold = 8)
{
	this.mapTileAtlas = mapTileAtlas;
	this.tileAtlasImageName = tileAtlasImageName;
	this.tileAtlasRoomImageName = tileAtlasRoomImageName;
	this.mapDataName = mapDataName;
	this.exitInformation = exitInformation;
	this.label = label;
	this.warpInformation = [];
	this.encounterThreshold = encounterThreshold;
}

DungeonInfo.prototype.storeWarpInformation = function (teleportEntry, roomState = null)
{
	this.warpInformation.push(teleportEntry);
	this.warpRoomState = roomState;
}

const dungeonNames = [
'Coneria',
'Provoka',
'Elfland',
'Melmond',
'CrescentLake',
'Gaia',
'Onrac',
'Leifen',
'ConeriaCastle1F',
'ElflandCastle',
'NorthwestCastle',
'OrdealsCastle1F',
'FiendsTemple',
'EarthCaveB1',
'VolcanoB1',
'IceCaveB1',
'Cardia',
'BahamutB1',
'Waterfall',
'DwarfCave',
'MatoyaCave',
'SardaCave',
'MarshCaveB1',
'MirageTower1F',
'ConeriaCastle2F',
'OrdealsCastle2F',
'OrdealsCastle3F',
'MarshCaveB2',
'MarshCaveB3',
'EarthCaveB2',
'EarthCaveB3',
'EarthCaveB4',
'EarthCaveB5',
'VolcanoB2',
'VolcanoB3',
'VolcanoB4',
'VolcanoB5',
'IceCaveB2',
'IceCaveB3',
'BahamutB2',
'MirageTower2F',
'MirageTower3F',
'SeaShrineB5',
'SeaShrineB4',
'SeaShrineB3',
'SeaShrineB2',
'SeaShrineB1',
'SkyPalace1F',
'SkyPalace2F',
'SkyPalace3F',
'SkyPalace4F',
'SkyPalace5F',
'FiendsTemple1F',
'FiendsTemple2F',
'FiendsTemple3F',
'FiendsTempleEarth',
'FiendsTempleFire',
'FiendsTempleWater',
'FiendsTempleAir',
'FiendsTempleChaos',
'TitanTunnel',
'WorldMap'
];



var dungeons = {
'Coneria': new DungeonInfo('Coneria', townMapTileAtlas, 'tiles_town', 'tiles_townroom', 'Coneria', new teleportEntry('ConeriaExitTarget', 'WorldMap', 0x97, 0xA2)),
'Provoka': new DungeonInfo('Provoka', townMapTileAtlas, 'tiles_town', 'tiles_townroom', 'Provoka', new teleportEntry('ProvokaExitTarget', 'WARP', 0x0, 0x0)),
'Elfland': new DungeonInfo('Elfland', townMapTileAtlas, 'tiles_town', 'tiles_townroom', 'Elfland', new teleportEntry('ElflandExitTarget', 'WARP', 0x0, 0x0)),
'Melmond': new DungeonInfo('Melmond', townMapTileAtlas, 'tiles_town', 'tiles_townroom', 'Melmond', new teleportEntry('MelmondExitTarget', 'WARP', 0x0, 0x0)),
'CrescentLake': new DungeonInfo('CrescentLake', townMapTileAtlas, 'tiles_town', 'tiles_townroom', 'CrescentLake', new teleportEntry('CrescentLakeExitTarget', 'WARP', 0x0, 0x0)),
'Gaia': new DungeonInfo('Gaia', townMapTileAtlas, 'tiles_town', 'tiles_townroom', 'Gaia', new teleportEntry('GaiaExitTarget', 'WARP', 0x0, 0x0)),
'Onrac': new DungeonInfo('Onrac', townMapTileAtlas, 'tiles_town', 'tiles_townroom', 'Onrac', new teleportEntry('OnracExitTarget', 'WARP', 0x0, 0x0)),
'Leifen': new DungeonInfo('Leifen', townMapTileAtlas, 'tiles_town', 'tiles_townroom', 'Leifen', new teleportEntry('LeifenExitTarget', 'WARP', 0x0, 0x0)),
'ConeriaCastle1F': new DungeonInfo('ConeriaCastle1F', castleMapTileAtlas, 'tiles_castle', 'tiles_castleroom', 'ConeriaCastle1F', new teleportEntry('ConeriaCastle1FExitTarget', 'WorldMap', 0x99, 0x9F)),
'ElflandCastle': new DungeonInfo('ElflandCastle', castleMapTileAtlas, 'tiles_castle', 'tiles_castleroom', 'ElflandCastle', new teleportEntry('ElflandCastleExitTarget', 'WARP', 0x0, 0x0)),
'NorthwestCastle': new DungeonInfo('NorthwestCastle', castleMapTileAtlas, 'tiles_castle', 'tiles_castleroom', 'NorthwestCastle', new teleportEntry('NorthwestCastleExitTarget', 'WARP', 0x0, 0x0)),
'OrdealsCastle1F': new DungeonInfo('OrdealsCastle1F', castleMapTileAtlas, 'tiles_castle', 'tiles_castleroom', 'OrdealsCastle1F', new teleportEntry('OrdealsCastle1FExitTarget', 'WorldMap', 130, 45)),
'FiendsTemple': new DungeonInfo('FiendsTemple', shrineMapTileAtlas, 'tiles_fiendstemple', 'tiles_fiendstempleroom', 'FiendsTemple', new teleportEntry('FiendsTempleExitTarget', 'WARP', 0x0, 0x0)),
'EarthCaveB1': new DungeonInfo('EarthCaveB1', earthCaveMapTileAtlas, 'tiles_earth1', 'tiles_earth1room', 'EarthCaveB1', new teleportEntry('EarthCaveB1ExitTarget', 'WorldMap', 0x41, 0xBB)),
'VolcanoB1': new DungeonInfo('VolcanoB1', earthCaveMapTileAtlas, 'tiles_volcano1', 'tiles_volcano1room', 'VolcanoB1', new teleportEntry('VolcanoB1ExitTarget', 'WorldMap', 0xBC, 0xCD)),
'IceCaveB1': new DungeonInfo('IceCaveB1', iceCaveMapTileAtlas, 'tiles_icecave', 'tiles_icecaveroom', 'IceCaveB1', new teleportEntry('IceCaveB1ExitTarget', 'WorldMap', 0xC5, 0xB7)),
'Cardia': new DungeonInfo('Cardia', iceCaveMapTileAtlas, 'tiles_cardia', 'tiles_cardiaroom', 'Cardia', new teleportEntry('CardiaExitTarget', 'WARP', 0x0, 0x0)),
'BahamutB1': new DungeonInfo('BahamutB1', iceCaveMapTileAtlas, 'tiles_cardia', 'tiles_cardiaroom', 'BahamutB1', new teleportEntry('BahamutB1ExitTarget', 'WARP', 0x0, 0x0)),
'Waterfall': new DungeonInfo('Waterfall', iceCaveMapTileAtlas, 'tiles_waterfall', 'tiles_waterfallroom', 'Waterfall', new teleportEntry('WaterfallExitTarget', 'WARP', 0x0, 0x0)),
'DwarfCave': new DungeonInfo('DwarfCave', iceCaveMapTileAtlas, 'tiles_dwarf', 'tiles_dwarfroom', 'DwarfCave', new teleportEntry('DwarfCaveExitTarget', 'WARP', 0x0, 0x0)),
'MatoyaCave': new DungeonInfo('MatoyaCave', iceCaveMapTileAtlas, 'tiles_matoya', 'tiles_matoyaroom', 'MatoyaCave', new teleportEntry('MatoyaCaveExitTarget', 'WARP', 0x0, 0x0)),
'SardaCave': new DungeonInfo('SardaCave', iceCaveMapTileAtlas, 'tiles_sarda', 'tiles_sardaroom', 'SardaCave', new teleportEntry('SardaCaveExitTarget', 'WARP', 0x0, 0x0)),
'MarshCaveB1': new DungeonInfo('MarshCaveB1', towerMapTileAtlas, 'tiles_marsh1', 'tiles_marsh1room', 'MarshCaveB1', new teleportEntry('MarshCaveB1ExitTarget', 'WARP', 0x0, 0x0)),
'MirageTower1F': new DungeonInfo('MirageTower1F', towerMapTileAtlas, 'tiles_mirage1', 'tiles_mirage1room', 'MirageTower1F', new teleportEntry('MirageTower1FExitTarget', 'WorldMap', 0xC2, 0x3B)),
'ConeriaCastle2F': new DungeonInfo('ConeriaCastle2F', castleMapTileAtlas, 'tiles_castle', 'tiles_castleroom', 'ConeriaCastle2F', new teleportEntry('ConeriaCastle2FExitTarget', 'WorldMap', 0x99, 0x9F)),
'OrdealsCastle2F': new DungeonInfo('OrdealsCastle2F', castleMapTileAtlas, 'tiles_castle', 'tiles_castleroom', 'OrdealsCastle2F', new teleportEntry('OrdealsCastle2FExitTarget', 'WorldMap', 130, 45)),
'OrdealsCastle3F': new DungeonInfo('OrdealsCastle3F', castleMapTileAtlas, 'tiles_castle', 'tiles_castleroom', 'OrdealsCastle3F', new teleportEntry('OrdealsCastle3FExitTarget', 'WorldMap', 130, 45)),
'MarshCaveB2': new DungeonInfo('MarshCaveB2', towerMapTileAtlas, 'tiles_marsh1', 'tiles_marsh1room', 'MarshCaveB2', new teleportEntry('MarshCaveB2ExitTarget', 'WARP', 0x0, 0x0)),
'MarshCaveB3': new DungeonInfo('MarshCaveB3', towerMapTileAtlas, 'tiles_marsh2', 'tiles_marsh2room', 'MarshCaveB3', new teleportEntry('MarshCaveB3ExitTarget', 'WARP', 0x0, 0x0)),
'EarthCaveB2': new DungeonInfo('EarthCaveB2', earthCaveMapTileAtlas, 'tiles_earth1', 'tiles_earth1room', 'EarthCaveB2', new teleportEntry('EarthCaveB2ExitTarget', 'WorldMap', 0x41, 0xBB)),
'EarthCaveB3': new DungeonInfo('EarthCaveB3', earthCaveMapTileAtlas, 'tiles_earth1', 'tiles_earth1room', 'EarthCaveB3', new teleportEntry('EarthCaveB3ExitTarget', 'WorldMap', 0x41, 0xBB)),
'EarthCaveB4': new DungeonInfo('EarthCaveB4', earthCaveMapTileAtlas, 'tiles_earth2', 'tiles_earth2room', 'EarthCaveB4', new teleportEntry('EarthCaveB4ExitTarget', 'WorldMap', 0x41, 0xBB)),
'EarthCaveB5': new DungeonInfo('EarthCaveB5', earthCaveMapTileAtlas, 'tiles_earth2', 'tiles_earth2room', 'EarthCaveB5', new teleportEntry('EarthCaveB5ExitTarget', 'WorldMap', 0x41, 0xBB)),
'VolcanoB2': new DungeonInfo('VolcanoB2', earthCaveMapTileAtlas, 'tiles_volcano1', 'tiles_volcano1room', 'VolcanoB2', new teleportEntry('VolcanoB2ExitTarget', 'WorldMap', 0xBC, 0xCD)),
'VolcanoB3': new DungeonInfo('VolcanoB3', earthCaveMapTileAtlas, 'tiles_volcano2', 'tiles_volcano2room', 'VolcanoB3', new teleportEntry('VolcanoB3ExitTarget', 'WorldMap', 0xBC, 0xCD)),
'VolcanoB4': new DungeonInfo('VolcanoB4', earthCaveMapTileAtlas, 'tiles_volcano2', 'tiles_volcano2room', 'VolcanoB4', new teleportEntry('VolcanoB4ExitTarget', 'WorldMap', 0xBC, 0xCD)),
'VolcanoB5': new DungeonInfo('VolcanoB5', earthCaveMapTileAtlas, 'tiles_volcano2', 'tiles_volcano2room', 'VolcanoB5', new teleportEntry('VolcanoB5ExitTarget', 'WorldMap', 0xBC, 0xCD)),
'IceCaveB2': new DungeonInfo('IceCaveB2', iceCaveMapTileAtlas, 'tiles_icecave', 'tiles_icecaveroom', 'IceCaveB2', new teleportEntry('IceCaveB2ExitTarget', 'WorldMap', 0xC5, 0xB7)),
'IceCaveB3': new DungeonInfo('IceCaveB3', iceCaveMapTileAtlas, 'tiles_icecave', 'tiles_icecaveroom', 'IceCaveB3', new teleportEntry('IceCaveB3ExitTarget', 'WorldMap', 0xC5, 0xB7)),
'BahamutB2': new DungeonInfo('BahamutB2', iceCaveMapTileAtlas, 'tiles_bahamut', 'tiles_bahamutroom', 'BahamutB2', new teleportEntry('BahamutB2ExitTarget', 'WARP', 0x0, 0x0)),
'MirageTower2F': new DungeonInfo('MirageTower2F', towerMapTileAtlas, 'tiles_mirage1', 'tiles_mirage1room', 'MirageTower2F', new teleportEntry('MirageTower2FExitTarget', 'WorldMap', 0xC2, 0x3B)),
'MirageTower3F': new DungeonInfo('MirageTower3F', towerMapTileAtlas, 'tiles_mirage2', 'tiles_mirage2room', 'MirageTower3F', new teleportEntry('MirageTower3FExitTarget', 'WorldMap', 0xC2, 0x3B)),
'SeaShrineB5': new DungeonInfo('SeaShrineB5', shrineMapTileAtlas, 'tiles_seashrine2', 'tiles_seashrine2room', 'SeaShrineB5', new teleportEntry('SeaShrineB5ExitTarget', 'WorldMap', 0x3E, 0x38)),
'SeaShrineB4': new DungeonInfo('SeaShrineB4', shrineMapTileAtlas, 'tiles_seashrine2', 'tiles_seashrine2room', 'SeaShrineB4', new teleportEntry('SeaShrineB4ExitTarget', 'WorldMap', 0x3E, 0x38)),
'SeaShrineB3': new DungeonInfo('SeaShrineB3', shrineMapTileAtlas, 'tiles_seashrine2', 'tiles_seashrine2room', 'SeaShrineB3', new teleportEntry('SeaShrineB3ExitTarget', 'WorldMap', 0x3E, 0x38)),
'SeaShrineB2': new DungeonInfo('SeaShrineB2', shrineMapTileAtlas, 'tiles_seashrine1', 'tiles_seashrine1room', 'SeaShrineB2', new teleportEntry('SeaShrineB2ExitTarget', 'WorldMap', 0x3E, 0x38)),
'SeaShrineB1': new DungeonInfo('SeaShrineB1', shrineMapTileAtlas, 'tiles_seashrine1', 'tiles_seashrine1room', 'SeaShrineB1', new teleportEntry('SeaShrineB1ExitTarget', 'WorldMap', 0x3E, 0x38)),
'SkyPalace1F': new DungeonInfo('SkyPalace1F', skyCastleMapTileAtlas, 'tiles_skycastle', 'tiles_skycastleroom', 'SkyPalace1F', new teleportEntry('SkyPalace1FExitTarget', 'WorldMap', 0xC2, 0x3B)),
'SkyPalace2F': new DungeonInfo('SkyPalace2F', skyCastleMapTileAtlas, 'tiles_skycastle', 'tiles_skycastleroom', 'SkyPalace2F', new teleportEntry('SkyPalace2FExitTarget', 'WorldMap', 0xC2, 0x3B)),
'SkyPalace3F': new DungeonInfo('SkyPalace3F', skyCastleMapTileAtlas, 'tiles_skycastle', 'tiles_skycastleroom', 'SkyPalace3F', new teleportEntry('SkyPalace3FExitTarget', 'WorldMap', 0xC2, 0x3B)),
'SkyPalace4F': new DungeonInfo('SkyPalace4F', skyCastleMapTileAtlas, 'tiles_skycastle', 'tiles_skycastleroom', 'SkyPalace4F', new teleportEntry('SkyPalace4FExitTarget', 'WorldMap', 0xC2, 0x3B)),
'SkyPalace5F': new DungeonInfo('SkyPalace5F', skyCastleMapTileAtlas, 'tiles_skycastle', 'tiles_skycastleroom', 'SkyPalace5F', new teleportEntry('SkyPalace5FExitTarget', 'WorldMap', 0xC2, 0x3B), 24),
'FiendsTemple1F': new DungeonInfo('FiendsTemple1F', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTemple1F', new teleportEntry('FiendsTemple1FExitTarget', 'WARP', 0x0, 0x0)),
'FiendsTemple2F': new DungeonInfo('FiendsTemple2F', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTemple2F', new teleportEntry('FiendsTemple2FExitTarget', 'WARP', 0x0, 0x0)),
'FiendsTemple3F': new DungeonInfo('FiendsTemple3F', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTemple3F', new teleportEntry('FiendsTemple3FExitTarget', 'WARP', 0x0, 0x0)),
'FiendsTempleEarth': new DungeonInfo('FiendsTempleEarth', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTempleEarth', new teleportEntry('FiendsTempleEarthExitTarget', 'WARP', 0x0, 0x0), 9),
'FiendsTempleFire': new DungeonInfo('FiendsTempleFire', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTempleFire', new teleportEntry('FiendsTempleFireExitTarget', 'WARP', 0x0, 0x0), 10),
'FiendsTempleWater': new DungeonInfo('FiendsTempleWater', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTempleWater', new teleportEntry('FiendsTempleWaterExitTarget', 'WARP', 0x0, 0x0), 11),
'FiendsTempleAir': new DungeonInfo('FiendsTempleAir', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTempleAir', new teleportEntry('FiendsTempleAirExitTarget', 'WARP', 0x0, 0x0), 12),
'FiendsTempleChaos': new DungeonInfo('FiendsTempleChaos', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTempleChaos', new teleportEntry('FiendsTempleChaosExitTarget', 'WARP', 0x0, 0x0)),
'TitanTunnel': new DungeonInfo('TitanTunnel', earthCaveMapTileAtlas, 'tiles_titan', 'tiles_titanroom', 'TitanTunnel', new teleportEntry('TitanTunnelExitTarget', 'WorldMap', 0x2A, 0xAE)),
};

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
Keyboard.action = 88;
Keyboard.altAction = 70;

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
	
	this.controller.update(delta);
	this.controller.render();
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
    bitmapData: {},
    bitmapDataRooms: {}
};

var dungeonMap = {
    cols: 2,
    rows: 2,
    tsize: 512,
    cells: dungeonCells,
	maxCol: 2 * dungeonCells.cols,
	maxRow: 2 * dungeonCells.rows,
    data: null,
    mapTileAtlas: null,
	tileAtlasImage: [],
	loadRooms: true,
	showRooms: false,
	overworldMap: false,
	name: null,
	encounterThreshold: 8,
    getTile: function (mapX, mapY, col, row) {
        return this.data[mapY * this.cells.rows * this.maxCol + row * this.maxCol + mapX * this.cells.cols + col];
    },
    getTileData: function (gridX, gridY) {
		if(gridX >= this.maxCol)
			gridX -= this.maxCol;
		else if(gridX < 0)
			gridX += this.maxCol;
		if(gridY >= this.maxRow)
			gridY -= this.maxRow;
		else if(gridY < 0)
			gridY += this.maxRow;
        return this.mapTileAtlas[this.data[gridY * this.cells.cols * this.cols + gridX]];
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
	maxCol: 8 * overworldCells.cols,
	maxRow: 8 * overworldCells.rows,
    data: null,
    mapTileAtlas: worldMapTileAtlas,
	tileAtlasImage: [],
	loadRooms: false,
	showRooms: false,
	overworldMap: true,
	name: 'WorldMap',
	encounterThreshold: 10,
    getTile: function (mapX, mapY, col, row) {
        return this.data[mapY * this.cells.rows * this.maxCol + row * this.maxCol + mapX * this.cells.cols + col];
    },
    getTileData: function (gridX, gridY) {
		if(gridX >= this.maxCol)
			gridX -= this.maxCol;
		else if(gridX < 0)
			gridX += this.maxCol;
		if(gridY >= this.maxRow)
			gridY -= this.maxRow;
		else if(gridY < 0)
			gridY += this.maxRow;
        return this.mapTileAtlas[this.data[gridY * this.cells.cols * this.cols + gridX]];
    }
};

var spriteNames = [];
var spriteNameMap = {};
var spriteMapList = {};

function Camera(startX, startY, width, height, zoom) {
    this.x = startX * zoom;
    this.y = startY * zoom;
    this.width = width;
    this.height = height;
    //this.maxX = map.cols * map.tsize * zoom - width;
    //this.maxY = map.rows * map.tsize * zoom - height;
    this.zoom = zoom;
    console.log("Moving Camera to: " + this.x + "," + this.y);
}

Camera.prototype.followPlayer = function (map, player) {
    this.x = (player.gridX * map.cells.tsize + player.offsetX + map.cells.tsize / 2) * this.zoom;
    this.y = (player.gridY * map.cells.tsize + player.offsetY - Game.airship.elevation + map.cells.tsize / 2) * this.zoom;
};

function Sprite(name, mapName, startX, startY, room, imageName, fight, item, eventTrigger, selfDestruct, needKeyItem = null, needEventTrigger = null)
{
	this.name = name;
    this.active = true;
	this.followPlayer = false;
    this.spriteMap = Loader.getImage(imageName);
	this.getSpriteMap = function(){return this.spriteMap;};
    this.gridX = startX;
    this.gridY = startY;
	this.fight = fight;
	this.item = item;
	this.selfDestruct = selfDestruct;
	this.eventTrigger = eventTrigger;
	this.needKeyItem = needKeyItem;
	this.needEventTrigger = needEventTrigger;
	this.width = 16;
	this.height = 16;
    this.direction = Directions.Down;
	this.offsetX = 0;
	this.offsetY = 0;
	this.mapName = mapName;
	this.room = room;
	this.triggered = false;
	this.collision = true;
    spriteNameMap[name] = this;
	spriteNames.push(name);
	spriteMapList[mapName].push(this);
}

Sprite.prototype.playerInteraction = function (player)
{
	result = {fight: null, item: null, eventTrigger: null, success: false};
	if(this.needKeyItem != null && (this.needKeyItem == -255 ? player.getOrbs() == true : player.keyItems[this.needKeyItem] != true))
	{
		result.item = this.needKeyItem;
	}
	else if(this.needEventTrigger != null && player.eventsTriggered[this.needEventTrigger] != true)
	{
		result.eventTrigger = this.needEventTrigger;
	}
	else
		result.success = true
	
	if(!result.success)
		return result;
	
	result.fight = this.fight;
	result.item = this.item;
	result.eventTrigger = this.eventTrigger;
	if(this.selfDestruct)
		this.active = false;
	this.triggered = true;
	return result;
};

Sprite.prototype.getAnimationFrame = function (frames) {
    return {startX: 0, width: this.width};
};

function Player(map, startX, startY, width, height, image, canoeImage, spriteWalkFrames, canoeSpriteFrames) {
    this.gridX = startX;
    this.gridY = startY;
    this.offsetX = 0;
    this.offsetY = 0;
	this.gridOffsetY = 3;
	this.getgridOffsetY = function(){return (this.drawCanoe ? 0 : this.gridOffsetY);};
    this.width = width;
    this.height = height;
    this.maxX = map.maxCol;
    this.maxY = map.maxRow;
    this.characterSpriteMap = image;
	this.characterSpriteFrames = spriteWalkFrames;
	this.canoeSpriteMap = canoeImage;
	this.canoeSpriteFrames = canoeSpriteFrames;
	this.getSpriteMap = function(){return (this.drawCanoe ? this.canoeSpriteMap : this.characterSpriteMap);};
    this.getSpriteWalkFrames = function(){return (this.drawCanoe ? this.canoeSpriteFrames : this.characterSpriteFrames);};
    this.active = true;
    this.direction = Directions.Right;
	this.keyItems = new Array(KeyItemCount).fill(false);
	this.eventsTriggered = new Array(EventTriggerCount).fill(false);
	this.queueAirshipBoard = false;
	this.queueAirshipUnboard = false;
	this.drawCanoe = false;
	this.enteringRiver = false;
	this.ignoreEncounter = false;
	this.mapName = 'WorldMap';
	this.getOrbs = function(){return this.keyItems[KeyItem.EARTHORB] && this.keyItems[KeyItem.WATERORB] && this.keyItems[KeyItem.AIRORB] && this.keyItems[KeyItem.FIREORB];};
	this.allowMovement = true;
	this.teleporting = false;
    this.moveMethod = MoveMethod.Walk;
	this.room = 'Ignore';
	this.actionCooldown = 0;
	this.movementCooldown = 0;
	this.collision = false;
    console.log("Creating Player At: " + this.gridX + "," + this.gridY);
	spriteMapList['WorldMap'].push(this);
}

Player.prototype.teleportPlayer = function (map, gridX, gridY, moveMethod)
{
	this.gridX = gridX;
    this.gridY = gridY;
    this.maxX = map.maxCol;
    this.maxY = map.maxRow;
    this.offsetX = 0;
    this.offsetY = 0;
    this.direction = (map.overworldMap ?  Directions.Right : Directions.Down);
	this.mapName = map.name;
	let tileData = map.getTileData(gridX, gridY);
    this.moveMethod = moveMethod;
	this.drawCanoe = tileData.canoe;
};

Player.prototype.getAnimationFrame = function (frames) {
    let spriteDirectionWalkFrames = this.getSpriteWalkFrames()[this.direction];
    let spriteAnimationState = {startX: 0, width: this.width};
    if(spriteDirectionWalkFrames.length > 0)
    {
        let frameIndex = Math.floor(frames / 15) % spriteDirectionWalkFrames.length;
        let frame = spriteDirectionWalkFrames[frameIndex];
        spriteAnimationState.startX = frame * this.width;
    }
    return spriteAnimationState;
};

Player.prototype.checkTargetTile = function (tileX, tileY, active)
{
    let tileData = Game.currentMap.getTileData(tileX, tileY);
	if(tileData == null || this.movementCooldown > 0)
		return true;
	if(this.keyItems[KeyItem.KEY] == false && tileData.room == roomOpening.Lock)
		return true;
    if(this.moveMethod == MoveMethod.Walk && tileData.walk == false)
    {
		if(Game.bridge.active == true && Game.bridge.gridX == tileX && Game.bridge.gridY == tileY)
			return false;
        if(active && tileData.canoe == true && this.keyItems[KeyItem.CANOE] == true)
        { // Need special treatment entering/leaving river tile itself, (doesn't count to encounters, don't display canoe unless sitting or moving fully inside river)
            this.moveMethod = MoveMethod.Canoe;
            return false;
        }
		else if(Game.currentMap.overworldMap && Game.ship.active == true && Game.ship.gridX == tileX && Game.ship.gridY == tileY)
		{
			return false;
		}
		else if(Game.currentMap.overworldMap && Game.canal.active == true && Game.canal.gridX == tileX && Game.canal.gridY == tileY)
		{
			return false;
		}
        else
            return true;
    }
    else if(this.moveMethod == MoveMethod.Ship && tileData.ship == false)
    {
        if(active && tileData.canoe == true && this.keyItems[KeyItem.CANOE] == true)
        {
			Game.ship.unboard(this, true);
            return false;
        } // Build out more scenarios to ride boat, etc.
		else if(active && tileData.dockShip)
		{
			Game.ship.unboard(this, false);
			return false;
		}
        else
            return true;
    }
	else if(this.moveMethod == MoveMethod.Canoe && tileData.canoe == false)
	{
		if(active && tileData.walk == true)
		{
			this.moveMethod = MoveMethod.Walk;
			return false;
		}
		else if(Game.currentMap.overworldMap && Game.ship.active == true && Game.ship.gridX == tileX && Game.ship.gridY == tileY)
		{
			return false;
		}
		else
			return true;
	}
	else if(this.moveMethod == MoveMethod.Walk && !Game.currentMap.overworldMap)
	{
		for(let i = 0; i < spriteMapList[Game.currentMap.name].length; i++)
		{
			let sprite = spriteMapList[Game.currentMap.name][i];
			if(sprite.active && sprite.collision == true && sprite.gridX == tileX && sprite.gridY == tileY)
			{
				return true;
			}
		}
		return false;
	}
	else if(this.moveMethod == MoveMethod.Ship && Game.currentMap.overworldMap && Game.canal.active == true && Game.canal.gridX == tileX && Game.canal.gridY == tileY)
		return true;
    return false;
};

Player.SPEED = 300; // Raw Pixels Per Second (Unzoomed)
Player.SEASPEED = 450;
Player.AIRSPEED = 750;

Player.prototype.move = function (delta, direction, active, keyHeld) {
	if(this.allowMovement == false || this.movementCooldown > 0)
		return;
    let speed = (this.moveMethod == MoveMethod.Airship ? Player.AIRSPEED * Math.min(Game.movementSpeedFactor * 1.4, 1) : (this.moveMethod == MoveMethod.Ship  ? Player.SEASPEED * Math.min(Game.movementSpeedFactor * 1.4, 1) : Player.SPEED * Game.movementSpeedFactor));
	let previousGridX = this.gridX;
	let previousGridY = this.gridY;
    if(active)
        this.direction = direction;
    else
        direction = this.direction;
    let polarity = (direction == Directions.Down || direction == Directions.Right) ? 1 : -1
	let movingChecks = false;
    if(direction == Directions.Down || direction == Directions.Up)
    {
        let motion = polarity * speed * delta;
        this.offsetY += motion;
        this.gridY += polarity * Math.floor(Math.abs(this.offsetY / this.height));
        if(this.gridY < 0)
            this.gridY += this.maxY;
        else if (this.gridY >= this.maxY)
            this.gridY -= this.maxY;
        let targetTileInaccessible = this.checkTargetTile(this.gridX, this.gridY + polarity, active);
        // if sprite height or tile height is different, figure out how to use tile height
        if(!active && Math.abs(this.offsetY) > Math.abs(this.height) || targetTileInaccessible)
            this.offsetY = 0;
		if(polarity * this.offsetY > 1)
		{
			Game.checkForRoomFlags(this.gridX, this.gridY + polarity, this.keyItems[KeyItem.KEY]);
			movingChecks = true;
		}
        this.offsetY = this.offsetY % this.height;
    }
    else if(direction == Directions.Left || direction == Directions.Right)
    {
        let motion = polarity * speed * delta;
        this.offsetX += motion;
        this.gridX += polarity * Math.floor(Math.abs(this.offsetX / this.width));
        if(this.gridX < 0)
            this.gridX += this.maxX;
        else if (this.gridX >= this.maxX)
            this.gridX -= this.maxX;
        let targetTileInaccessible = this.checkTargetTile(this.gridX + polarity, this.gridY, active);
        if(!active && Math.abs(this.offsetX) > Math.abs(this.width) || targetTileInaccessible)
            this.offsetX = 0;
		if(polarity * this.offsetX > 1)
		{
			Game.checkForRoomFlags(this.gridX + polarity, this.gridY, this.keyItems[KeyItem.KEY]);
			movingChecks = true;
		}
        this.offsetX = this.offsetX % this.width;
    }
	
	if(movingChecks)
	{
		if(this.moveMethod == MoveMethod.Canoe && !this.drawCanoe)
		{
			this.enteringRiver = true;
			this.ignoreEncounter = true;
		}
		else if(this.moveMethod == MoveMethod.Walk && this.drawCanoe)
		{
			this.drawCanoe = false;
			this.ignoreEncounter = true;
		}
	}
	
	if(this.gridX != previousGridX || this.gridY != previousGridY)
	{
		if(this.moveMethod == MoveMethod.Walk || this.moveMethod == MoveMethod.Canoe)
			Game.checkForTeleport(this.gridX, this.gridY);
		if(!Game.ship.unboardThisFrame && (this.moveMethod == MoveMethod.Walk || this.moveMethod == MoveMethod.Canoe) && Game.currentMap.overworldMap && Game.ship.active == true && Game.ship.gridX == this.gridX && Game.ship.gridY == this.gridY)
		{
			Game.ship.board(this);
			this.ignoreEncounter = true;
		}
		if(this.queueAirshipBoard)
			Game.airship.board(this);
		else if(!keyHeld && this.queueAirshipUnboard)
			Game.airship.unboard(this);
		if(this.enteringRiver)
		{
			this.drawCanoe = true;
			this.enteringRiver = false;
		}
		if((this.moveMethod == MoveMethod.Walk || this.moveMethod == MoveMethod.Canoe) && Game.currentMap.overworldMap && Game.ship.active == true && Game.ship.gridX == previousGridX && Game.ship.gridY == previousGridY)
			this.ignoreEncounter = true;
		
		let tileData = Game.currentMap.getTileData(this.gridX, this.gridY);
		if(!this.ignoreEncounter)
		{
			if(this.moveMethod == MoveMethod.Walk && tileData.fight == worldMapTileFight.Fight)
				Game.incrementStepCounter();
			else if(this.moveMethod == MoveMethod.Canoe && tileData.fight == worldMapTileFight.FightRiver)
				Game.incrementStepCounter();
			else if((this.moveMethod == MoveMethod.Ship || Game.ship.unboardThisFrame) && tileData.fight == worldMapTileFight.FightOcean)
				Game.incrementStepCounter();
			else if(!Game.currentMap.overworldMap && this.moveMethod == MoveMethod.Walk && tileData.fight > dungeonMapTileFight.None)
			{
				this.movementCooldown = 0.5;
				this.offsetX = 0;
				this.offsetY = 0;
				Game.processFight(tileData.fight, true);
			}
		}
		this.ignoreEncounter = false;
		Game.ship.unboardThisFrame = false;
		
		if(tileData.raiseAirship && !this.eventsTriggered[EventTrigger.AIRSHIP] && this.keyItems[KeyItem.FLOATER])
			Game.processEventTrigger(EventTrigger.AIRSHIP, true);
		if(tileData.loot != null && !this.keyItems[tileData.loot])
			Game.processItem(tileData.loot, true);
		if(this.moveMethod == MoveMethod.Walk && tileData.caravan && !this.keyItems[KeyItem.BOTTLE])
			Game.processItem(KeyItem.BOTTLE, true);
		
		Game.logPathLocation(this.gridX, this.gridY);
	}
};

function Bridge(image)
{
    this.active = false;
	this.name = 'Bridge';
    this.spriteMap = image;
	this.getSpriteMap = function(){return this.spriteMap;};
    this.gridX = 152;
    this.gridY = 152;
	this.width = 16;
	this.height = 16;
    this.walk = true;
    this.ship = true;
	this.offsetX = 0;
	this.offsetY = 0;
	this.mapName = 'WorldMap';
	this.room = false;
	this.collision = false;
    spriteNameMap[this.name] = this;
	spriteNames.push(this.name);
	spriteMapList['WorldMap'].push(this);
}
// Make generic sprite class to put Bridge/Misc under to prevent animation needs?
Bridge.prototype.getAnimationFrame = function (frames) {
    let spriteAnimationState = {startX: 0, width: this.width};
    return spriteAnimationState;
};

function Canal(image)
{
    this.active = true;
	this.name = 'Canal';
    this.spriteMap = image;
	this.getSpriteMap = function(){return this.spriteMap;};
    this.gridX = 0x66;
    this.gridY = 0xa4;
	this.width = 16;
	this.height = 16;
    this.walk = true;
    this.ship = false;
	this.offsetX = 0;
	this.offsetY = 0;
	this.mapName = 'WorldMap';
	this.room = false;
	this.collision = false;
    spriteNameMap[this.name] = this;
	spriteNames.push(this.name);
	spriteMapList['WorldMap'].push(this);
}
// Make generic sprite class to put Bridge/Misc under to prevent animation needs?
Canal.prototype.getAnimationFrame = function (frames) {
    let spriteAnimationState = {startX: 0, width: this.width};
    return spriteAnimationState;
};


function Ship(image, spriteWalkFrames)
{
    this.active = false;
	this.name = 'Ship';
	this.followPlayer = false;
    this.spriteMap = image;
    this.spriteWalkFrames = spriteWalkFrames;
	this.getSpriteMap = function(){return this.spriteMap;};
    this.getSpriteWalkFrames = function(){return this.spriteWalkFrames;};
    this.gridX = 0xD2;
    this.gridY = 0x99;
	this.width = 16;
	this.height = 16;
    this.direction = Directions.Right;
	this.offsetX = 0;
	this.offsetY = 0;
	this.mapName = 'WorldMap';
	this.room = false;
	this.unboardThisFrame = false;
	this.collision = false;
    spriteNameMap[this.name] = this;
	spriteNames.push(this.name);
	spriteMapList['WorldMap'].push(this);
}

Ship.prototype.board = function(player)
{
	this.direction = player.direction;
	player.active = false;
	player.moveMethod = MoveMethod.Ship;
	this.followPlayer = true;
	this.offsetX = 0;
	this.offsetY = 0;
    this.gridX = player.gridX;
    this.gridY = player.gridY;
};

Ship.prototype.unboard = function(player, river)
{
	this.direction = Directions.Right;
	player.active = true;
	player.moveMethod = (river ? MoveMethod.Canoe : MoveMethod.Walk);
	this.followPlayer = false;
	this.offsetX = 0;
	this.offsetY = 0;
    this.gridX = player.gridX;
    this.gridY = player.gridY;
	this.unboardThisFrame = true;
};

Ship.prototype.getAnimationFrame = function (frames) {
    let spriteDirectionWalkFrames = this.getSpriteWalkFrames()[this.direction];
    let spriteAnimationState = {startX: 0, width: this.width};
    if(spriteDirectionWalkFrames.length > 0)
    {
        let frameIndex = (Game.player.moveMethod == MoveMethod.Ship ? Math.floor(frames / 30) % spriteDirectionWalkFrames.length : 0);
        let frame = spriteDirectionWalkFrames[frameIndex];
        spriteAnimationState.startX = frame * this.width;
    }
    return spriteAnimationState;
};

function Airship(image, image2, spriteWalkFrames)
{
    this.active = false;
	this.name = 'Airship';
	this.followPlayer = false;
    this.spriteMap = image;
    this.spriteWalkFrames = spriteWalkFrames;
	this.getSpriteMap = function(){return this.spriteMap;};
    this.getSpriteWalkFrames = function(){return this.spriteWalkFrames;};
    this.gridX = 0xDD;
    this.gridY = 0xED;
	this.width = 16;
	this.height = 16;
    this.direction = Directions.Right;
	this.elevation = 0;
	this.maxElevation = 32;
	this.shadowImage = image2;
	this.landing = false;
	this.takeoff = false;
	this.offsetX = 0;
	this.offsetY = 0;
	this.mapName = 'WorldMap';
	this.room = false;
	this.collision = false;
    spriteNameMap[this.name] = this;
	spriteNames.push(this.name);
	spriteMapList['WorldMap'].push(this);
}

Airship.prototype.board = function(player)
{
	this.direction = Directions.Right;
	player.direction = Directions.Right;
	player.active = false;
	player.allowMovement = false;
	this.followPlayer = true;
	this.takeoff = true;
	this.landing = false;
	this.offsetX = 0;
	this.offsetY = 0;
    this.gridX = player.gridX;
    this.gridY = player.gridY;
	player.offsetX = 0;
	player.offsetY = 0;
	player.queueAirshipBoard = false;
};

Airship.prototype.unboard = function(player)
{
	this.direction = Directions.Right;
	player.direction = Directions.Right;
	player.allowMovement = false;
	this.landing = true;
	this.takeoff = false;
	this.offsetX = 0;
	this.offsetY = 0;
    this.gridX = player.gridX;
    this.gridY = player.gridY;
	player.offsetX = 0;
	player.offsetY = 0;
	player.queueAirshipUnboard = false;
};

Airship.prototype.updateElevation = function(player, delta)
{
	if(this.landing)
	{
		this.elevation = Math.max(this.elevation - delta * 32, 0);
		let tileData = Game.currentMap.getTileData(this.gridX, this.gridY);
		if((tileData == null || tileData.landAirship == false) && this.elevation < 8)
			this.board(player);
		if(this.elevation == 0)
		{
			player.allowMovement = true;
			player.moveMethod = MoveMethod.Walk;
			player.active = true;
			this.followPlayer = false;
			this.landing = false;
		}
	}
	else if(this.takeoff)
	{
		this.elevation = Math.min(this.elevation + delta * 32, this.maxElevation);
		if(this.elevation == this.maxElevation)
		{
			player.allowMovement = true;
			player.moveMethod = MoveMethod.Airship;
			this.takeoff = false;
		}
	}
};

Airship.prototype.getAnimationFrame = function (frames) {
    let spriteDirectionWalkFrames = this.getSpriteWalkFrames()[this.direction];
    let spriteAnimationState = {startX: 0, width: this.width};
    if(spriteDirectionWalkFrames.length > 0)
    {
        let frameIndex = (this.elevation > 0 ? Math.floor(frames / (this.takeoff || this.landing ? 6 : 3)) % spriteDirectionWalkFrames.length : 0);
        let frame = spriteDirectionWalkFrames[frameIndex];
        spriteAnimationState.startX = frame * this.width;
    }
    return spriteAnimationState;
};

function touchButtonBox(keyPress, x, y, x2, y2)
{
	this.keyPress = keyPress;
	this.x = x;
	this.y = y;
	this.x2 = x2;
	this.y2 = y2;
}

function Controller(controllerImage, effectImage)
{
	this.canvas = document.getElementById('controller');
	this.context = this.canvas.getContext('2d');
	this.controllerImage = controllerImage;
	this.effectImage = effectImage;
    this.controllerCanvas = document.createElement('canvas');
    this.controllerCanvas.width = defaultWidth;
    this.controllerCanvas.height = defaultHeight;
	this.controllerCanvas.getContext('2d').drawImage(this.controllerImage,0,0);
    this.effectsCanvas = document.createElement('canvas');
    this.effectsCanvas.width = defaultWidth;
    this.effectsCanvas.height = defaultHeight;
	this.activeTouchedButtons = {[Keyboard.LEFT]: false, 
								 [Keyboard.RIGHT]: false,
								 [Keyboard.UP]: false,
								 [Keyboard.DOWN]: false,
								 [Keyboard.action]: false,
								};
	this.activeTouchEvents = [];
	this.touchButtonBoxes = [
		new touchButtonBox(Keyboard.LEFT, 45, 130, 85, 170), 
		new touchButtonBox(Keyboard.RIGHT, 120, 130, 160, 170), 
		new touchButtonBox(Keyboard.UP, 80, 90, 120, 130), 
		new touchButtonBox(Keyboard.DOWN, 80, 165, 120, 205), 
		new touchButtonBox(Keyboard.action, 474, 144, 544, 213), 
	];
	document.addEventListener("touchstart", this.touchHandler);
	document.addEventListener("touchmove", this.touchHandler);
	document.addEventListener("touchcancel", this.touchHandler);
	document.addEventListener("touchend", this.touchHandler);
}

Controller.prototype.touchHandler = function(e)
{
	Game.controller.activeTouchedButtons = {[Keyboard.LEFT]: false, 
								 [Keyboard.RIGHT]: false,
								 [Keyboard.UP]: false,
								 [Keyboard.DOWN]: false,
								 [Keyboard.action]: false,
								};
	Game.controller.activeTouchEvents = [];
	if(e.touches)
	{
		document.getElementById('touchTest').innerHTML = ('pageX: ' + e.touches[0].pageX + ', pageY: ' + e.touches[0].pageY + ', offsetX: ' + Game.controller.canvas.offsetLeft + ', offsetY: ' + Game.controller.canvas.offsetTop);
		for(let i = 0; i < e.touches.length; i++)
		{
			let touch = e.touches[i];
			let relX = touch.pageX - Game.controller.canvas.offsetLeft;
			let relY = touch.pageY - Game.controller.canvas.offsetTop;
			for(let j = 0; j < Game.controller.touchButtonBoxes.length; j++)
			{
				let touchButtonBox = Game.controller.touchButtonBoxes[j];
				if(touchButtonBox.x - touch.radiusX / 2 < relX && relX < touchButtonBox.x2 + touch.radiusX / 2 &&
				   touchButtonBox.y - touch.radiusY / 2 < relY && relY < touchButtonBox.y2 + touch.radiusY / 2)
				{
					Game.controller.activeTouchedButtons[touchButtonBox.keyPress] = true;
					Game.controller.activeTouchEvents.push(touch);
				}
			}
		}
	}
};


Controller.prototype.isDown = function (keyCode) {
    if (!keyCode in this.activeTouchedButtons) {
        throw new Error('Keycode ' + keyCode + ' is not being listened to');
    }
    return this.activeTouchedButtons[keyCode];
};


Controller.prototype.update = function(delta)
{
	let context = this.effectsCanvas.getContext('2d');
	context.clearRect(0, 0, defaultWidth, defaultHeight);
	if(this.activeTouchEvents.length > 0)
	{
		for(let i = 0; i < this.activeTouchEvents.length; i++)
		{
			let touch = this.activeTouchEvents[i];
			let relX = touch.pageX - this.canvas.offsetLeft;
			let relY = touch.pageY - this.canvas.offsetTop;
			context.globalAlpha = touch.force;
			context.drawImage(this.effectImage,
							 relX - 50,
							 relY - 50);
		}
	}
	
};

Controller.prototype.render = function()
{
	// draw the map layers into game context
    this.context.drawImage(this.controllerCanvas, 0, 0);
    this.context.drawImage(this.effectsCanvas, 0, 0);
};

/*
const ResetType = {
	Path: 1,
	Soft: 2,
	Hard: 3
};

const EventType = {
	Fight: 1,
	Item: 2,
	Event: 3
	Reset: 4 
};*/

MapSaveData = function(mapName, room)
{
	this.name = mapName;
	this.room = room;
}

PlayerSaveData = function(gridX, gridY, moveMethod, keyItems, eventsTriggered)
{
	this.gridX = gridX;
	this.gridY = gridY;
	this.moveMethod = moveMethod;
	this.keyItems = [];
	this.eventsTriggered = [];
	for(let i = 0; i < keyItems.length; i++)
		this.keyItems[i] = keyItems[i];
	for(let i = 0; i < eventsTriggered.length; i++)
		this.eventsTriggered[i] = eventsTriggered[i];
}

SpriteSaveDatum = function(name, active, gridX, gridY, triggered, followPlayer)
{
	this.name = name;
	this.active = active;
	this.gridX = gridX;
	this.gridY = gridY;
	this.triggered = triggered;
	this.followPlayer = followPlayer;
}

SpriteSaveData = function()
{
	this.spriteDataMap = {};
	for(let i = 0; i < spriteNames.length; i++)
	{
		let sprite = spriteNameMap[spriteNames[i]];
		this.spriteDataMap[sprite.name] = new SpriteSaveDatum(sprite.name, sprite.active, sprite.gridX, sprite.gridY, sprite.triggered, sprite.followPlayer);
	}
}

GameSaveData = function(stepCounter1, stepCounter2, encounterGroup, encounterChance, encounterThreshold, encounterNumber)
{
	this.stepCounter1 = stepCounter1;
	this.stepCounter2 = stepCounter2;
	this.encounterGroup = encounterGroup;
	this.encounterChance = encounterChance;
	this.encounterThreshold = encounterThreshold;
	this.encounterNumber = encounterNumber;
}

Checkpoint = function(mapSaveData, playerSaveData, spriteSaveData, gameSaveData)
{
	this.mapSaveData = mapSaveData;
	this.playerSaveData = playerSaveData;
	this.spriteSaveData = spriteSaveData;
	this.gameSaveData = gameSaveData;
}

Checkpoint.prototype.loadCheckpoint = function(player, resetType)
{
	player.keyItems = this.playerSaveData.keyItems;
	player.eventsTriggered = this.playerSaveData.eventsTriggered;
	let teleport = new teleportEntry('CheckPointWarp' + resetType, this.mapSaveData.name, this.playerSaveData.gridX, this.playerSaveData.gridY, teleportEntryRequirement.None, this.mapSaveData.room, this.playerSaveData.moveMethod);
	Game.startTeleport(true, teleport, player.gridX, player.gridY, this.playerSaveData.moveMethod);
	
	for(let i = 0; i < spriteNames.length; i++)
	{
		let sprite = spriteNameMap[spriteNames[i]];
		let savedSprite = this.spriteDataMap[sprite.name];
		sprite.name = savedSprite.name;
		sprite.active = savedSprite.active;
		sprite.gridX = savedSprite.gridX;
		sprite.gridY = savedSprite.gridY
		sprite.triggered = savedSprite.triggered
		sprite.followPlayer = savedSprite.followPlayer;
	}
	
	if(resetType == ResetType.Path)
	{
		Game.stepCounter1 = this.stepCounter1;
		Game.stepCounter2 = this.stepCounter2;
		Game.encounterGroup = this.encounterGroup;
		Game.encounterChance = this.encounterChance;
		Game.encounterThreshold = this.encounterThreshold;
		Game.encounterNumber = this.encounterNumber;
		document.getElementById('encounterInformation').innerHTML = 
		('step1: ' + Game.stepCounter1 + 
		 '<br/>step2: ' + Game.stepCounter2 + 
		 '<br/>encounterGroup: ' + Game.encounterGroup + 
		 '<br/>chance: ' + Game.encounterChance + 
		 '<br/>threshold: ' + Game.encounterThreshold + 
		 '<br/>encounterNumber: ' + Game.encounterNumber
		);
		Game.currentTileLocationEvents = [];
		Game.currentPathLocations = [new PathLocation(this.playerSaveData.gridX, this.playerSaveData.gridY)];
	}
	else if(resetType == ResetType.Hard)
	{
		Game.stepCounter1 = 0xFF;
		Game.stepCounter2 = 0xFF;
		Game.encounterChance = 0x45;
		Game.encounterNumber = 0;
		Game.encounterGroup = 0;
		Game.encounterThreshold = (Game.player.moveMethod == MoveMethod.Ship ? 3 : Game.currentMap.encounterThreshold);
		document.getElementById('encounterInformation').innerHTML = 
		('step1: ' + Game.stepCounter1 + 
		 '<br/>step2: ' + Game.stepCounter2 + 
		 '<br/>encounterGroup: ' + Game.encounterGroup + 
		 '<br/>chance: ' + Game.encounterChance + 
		 '<br/>threshold: ' + Game.encounterThreshold + 
		 '<br/>encounterNumber: ' + Game.encounterNumber
		);
		Game.currentPathLocations.push(new LocationEvent(EventType.Reset, ResetType.Hard));
	}
	else
		Game.currentPathLocations.push(new LocationEvent(EventType.Reset, ResetType.Soft));
};

StepPath = function(map, checkpoint)
{
	this.pathLocations = [];
	this.map = map;
	this.checkpoint = checkpoint;
	this.stepCount = 0;
}

PathLocation = function(gridX, gridY, locationEvents)
{
	this.gridX = gridX;
	this.gridY = gridY;
	this.locationEvents = locationEvents;
}

LocationEvent = function(eventType, eventIndex)
{
	this.eventType = eventType;
	this.eventIndex = eventIndex;
}

Game.createCheckpoint = function(player)
{
	let checkpoint = new Checkpoint(new MapSaveData(this.currentMap.name, this.currentMap.showRooms),
									new PlayerSaveData(player.gridX, player.gridY, player.moveMethod, player.keyItems, player.eventsTriggered), 
									new SpriteSaveData(), 
									new GameSaveData(this.stepCounter1, this.stepCounter2, this.encounterGroup, this.encounterChance, this.encounterThreshold, this.encounterNumber));
	return checkpoint;
};

Game.logPathLocation = function (gridX, gridY)
{
	Game.currentPathLocations.push(new PathLocation(gridX, gridY, Game.currentTileLocationEvents));
	Game.currentTileLocationEvents = [];
};

Game.handlePathReset = function() 
{
	this.currentStepPath.checkpoint.loadCheckpoint(this.player, ResetType.Path);
};

Game.handleSoftReset = function() 
{
	this.saveCheckpoint.loadCheckpoint(this.player, ResetType.Soft);
};

Game.handleHardReset = function() 
{
	this.saveCheckpoint.loadCheckpoint(this.player, ResetType.Hard);
};

Game.handleSave = function() 
{
	this.saveCheckpoint = Game.createCheckpoint(this.player);
};

Game.toggleBridge = function(checkboxElement) {
	this.bridge.active = checkboxElement.checked;
	this.player.eventsTriggered[EventTrigger.BRIDGE] = checkboxElement.checked;
	this._drawSprites(this.currentMap);
};

Game.toggleCanoe = function(checkboxElement) {
	this.player.keyItems[KeyIte.CANOE] = checkboxElement.checked;
};

Game.toggleShip = function(checkboxElement) {
	this.ship.active = checkboxElement.checked;
	this.player.eventsTriggered[EventTrigger.PIRATES] = checkboxElement.checked;
	this._drawSprites(this.currentMap);
};

Game.toggleAirship = function(checkboxElement) {
	this.airship.active = checkboxElement.checked;
	this.player.eventsTriggered[EventTrigger.AIRSHIP] = checkboxElement.checked;
	this._drawSprites(this.currentMap);
};

Game.handleMovementSpeedChange = function(sliderElement)
{
	this.movementSpeedFactor = sliderElement.value / 100;
};

Game.handleWarp = function() 
{
	if(this.currentMap.overworldMap)
		return;
	let teleport = this.currentDungeon.warpInformation.pop();
	let warp = true;
	this.startTeleport(warp, teleport);
};
Game.handleExit = function() 
{
	if(this.currentMap.overworldMap)
		return;
	let teleport = this.currentDungeon.exitInformation;
	let warp = true;
	let recursions = 0;
	if(teleport.targetMap == 'WARP')
		teleport = this.currentDungeon.warpInformation.pop();
	while(teleport.targetMap != 'WorldMap' && recursions++ < 20)
		teleport = dungeons[teleport.targetMap].warpInformation.pop();
	if(teleport.targetMap != 'WorldMap') // failed exit
		return;
	this.startTeleport(warp, teleport);
};

Game.startTeleport = function(warp, teleport, tileX = 0, tileY = 0, moveMethod = MoveMethod.Walk)
{
	this.teleportParams = {warp: warp, teleport: teleport, tileX: tileX, tileY: tileY, moveMethod: moveMethod};
	this.player.teleporting = true;
	this.player.allowMovement = false;
	this.teleportDuration = 0;	
};

Game.midTeleport = function(warp, teleport, tileX, tileY, moveMethod = MoveMethod.Walk)
{
	this.handleTeleport(warp, teleport, tileX, tileY, moveMethod);
    this.camera.followPlayer(this.currentMap, this.player);
	this._drawTransition(1);
	this.teleportMidpoint = true;
	this._drawMap(this.currentMap);
    this._drawSprites(this.currentMap);	
};

Game.completeTeleport = function()
{
	this.player.teleporting = false;
	this.player.allowMovement = true;
	this.teleportMidpoint = false;
};

Game.load = function () {
    return [
		Loader.loadImage('overworld', 'Assets/Overworld.png'),
		Loader.loadImage('fighter', 'Assets/Fighter.png'),
		Loader.loadImage('canoe', 'Assets/Canoe.png'),
		Loader.loadImage('bridge', 'Assets/Bridge.png'),
		Loader.loadImage('canal', 'Assets/Canal.png'),
		Loader.loadImage('airship', 'Assets/Airship.png'),
		Loader.loadImage('airship_shadow', 'Assets/AirshipShadow.png'),
		Loader.loadImage('ship', 'Assets/Ship.png'),
		Loader.loadImage('controller', 'Assets/NesController.png'),
		Loader.loadImage('controllerTouch', 'Assets/ControllerTouch.png'),
		Loader.loadImage('tiles_bahamut', 'Assets/DungeonTiles/Bahamut2.png'),
		Loader.loadImage('tiles_bahamutroom', 'Assets/DungeonTiles/Bahamut2Room.png'),
		Loader.loadImage('tiles_cardia', 'Assets/DungeonTiles/Cardia.png'),
		Loader.loadImage('tiles_cardiaroom', 'Assets/DungeonTiles/CardiaRoom.png'),
		Loader.loadImage('tiles_castle', 'Assets/DungeonTiles/Castle.png'),
		Loader.loadImage('tiles_castleroom', 'Assets/DungeonTiles/CastleRoom.png'),
		Loader.loadImage('tiles_dwarf', 'Assets/DungeonTiles/Dwarf.png'),
		Loader.loadImage('tiles_dwarfroom', 'Assets/DungeonTiles/DwarfRoom.png'),
		Loader.loadImage('tiles_earth1', 'Assets/DungeonTiles/Earth1.png'),
		Loader.loadImage('tiles_earth1room', 'Assets/DungeonTiles/Earth1Room.png'),
		Loader.loadImage('tiles_earth2', 'Assets/DungeonTiles/Earth2.png'),
		Loader.loadImage('tiles_earth2room', 'Assets/DungeonTiles/Earth2Room.png'),
		Loader.loadImage('tiles_fiendsrevisited', 'Assets/DungeonTiles/FiendsRevisted.png'),
		Loader.loadImage('tiles_fiendsrevisitedroom', 'Assets/DungeonTiles/FiendsRevistedRoom.png'),
		Loader.loadImage('tiles_fiendstemple', 'Assets/DungeonTiles/FiendsTemple.png'),
		Loader.loadImage('tiles_fiendstempleroom', 'Assets/DungeonTiles/FiendsTempleRoom.png'),
		Loader.loadImage('tiles_icecave', 'Assets/DungeonTiles/IceCave.png'),
		Loader.loadImage('tiles_icecaveroom', 'Assets/DungeonTiles/IceCaveRoom.png'),
		Loader.loadImage('tiles_marsh1', 'Assets/DungeonTiles/Marsh1.png'),
		Loader.loadImage('tiles_marsh1room', 'Assets/DungeonTiles/Marsh1Room.png'),
		Loader.loadImage('tiles_marsh2', 'Assets/DungeonTiles/Marsh2.png'),
		Loader.loadImage('tiles_marsh2room', 'Assets/DungeonTiles/Marsh2Room.png'),
		Loader.loadImage('tiles_matoya', 'Assets/DungeonTiles/Matoya.png'),
		Loader.loadImage('tiles_matoyaroom', 'Assets/DungeonTiles/MatoyaRoom.png'),
		Loader.loadImage('tiles_mirage1', 'Assets/DungeonTiles/Mirage1.png'),
		Loader.loadImage('tiles_mirage1room', 'Assets/DungeonTiles/Mirage1Rooms.png'),
		Loader.loadImage('tiles_mirage2', 'Assets/DungeonTiles/Mirage2.png'),
		Loader.loadImage('tiles_mirage2room', 'Assets/DungeonTiles/Mirage2Rooms.png'),
		Loader.loadImage('tiles_sarda', 'Assets/DungeonTiles/Sarda.png'),
		Loader.loadImage('tiles_sardaroom', 'Assets/DungeonTiles/SardaRoom.png'),
		Loader.loadImage('tiles_seashrine1', 'Assets/DungeonTiles/SeaShrine1.png'),
		Loader.loadImage('tiles_seashrine1room', 'Assets/DungeonTiles/SeaShrine1Room.png'),
		Loader.loadImage('tiles_seashrine2', 'Assets/DungeonTiles/SeaShrine2.png'),
		Loader.loadImage('tiles_seashrine2room', 'Assets/DungeonTiles/SeaShrine2Room.png'),
		Loader.loadImage('tiles_skycastle', 'Assets/DungeonTiles/SkyCastle.png'),
		Loader.loadImage('tiles_skycastleroom', 'Assets/DungeonTiles/SkyCastleRoom.png'),
		Loader.loadImage('tiles_titan', 'Assets/DungeonTiles/Titan.png'),
		Loader.loadImage('tiles_titanroom', 'Assets/DungeonTiles/TitanRoom.png'),
		Loader.loadImage('tiles_town', 'Assets/DungeonTiles/Town.png'),
		Loader.loadImage('tiles_townroom', 'Assets/DungeonTiles/Town.png'),
		Loader.loadImage('tiles_volcano1', 'Assets/DungeonTiles/Volcano1.png'),
		Loader.loadImage('tiles_volcano1room', 'Assets/DungeonTiles/Volcano1Room.png'),
		Loader.loadImage('tiles_volcano2', 'Assets/DungeonTiles/Volcano2.png'),
		Loader.loadImage('tiles_volcano2room', 'Assets/DungeonTiles/Volcano2Room.png'),
		Loader.loadImage('tiles_waterfall', 'Assets/DungeonTiles/Waterfall.png'),
		Loader.loadImage('tiles_waterfallroom', 'Assets/DungeonTiles/WaterfallRoom.png'),
		Loader.loadMapData('overworld', 'Assets/Overworld%20Map.ffm'),
		Loader.loadMapData('BahamutB1', 'Assets/Bahamut%27s%20Room%20B1%20Map.ffh'),
		Loader.loadMapData('BahamutB2', 'Assets/Bahamut%27s%20Room%20B2%20Map.ffh'),
		Loader.loadMapData('Cardia', 'Assets/Cardia%20Map.ffh'),
		Loader.loadMapData('OrdealsCastle2F', 'Assets/Castle%20of%20Ordeal%202F%20Map.ffh'),
		Loader.loadMapData('OrdealsCastle3F', 'Assets/Castle%20of%20Ordeal%203F%20Map.ffh'),
		Loader.loadMapData('OrdealsCastle1F', 'Assets/Castle%20of%20Ordeals%201F%20Map.ffh'),
		Loader.loadMapData('ConeriaCastle1F', 'Assets/Coneria%20Castle%201F%20Map.ffh'),
		Loader.loadMapData('ConeriaCastle2F', 'Assets/Coneria%20Castle%202F%20Map.ffh'),
		Loader.loadMapData('Coneria', 'Assets/Coneria%20Map.ffh'),
		Loader.loadMapData('CrescentLake', 'Assets/Cresent%20Lake%20Map.ffh'),
		Loader.loadMapData('DwarfCave', 'Assets/Dwarf%20Cave%20Map.ffh'),
		Loader.loadMapData('EarthCaveB1', 'Assets/Earth%20Cave%20B1%20Map.ffh'),
		Loader.loadMapData('EarthCaveB2', 'Assets/Earth%20Cave%20B2%20Map.ffh'),
		Loader.loadMapData('EarthCaveB3', 'Assets/Earth%20Cave%20B3%20Map.ffh'),
		Loader.loadMapData('EarthCaveB4', 'Assets/Earth%20Cave%20B4%20Map.ffh'),
		Loader.loadMapData('EarthCaveB5', 'Assets/Earth%20Cave%20B5%20Map.ffh'),
		Loader.loadMapData('ElflandCastle', 'Assets/Elfland%20Castle%20Map.ffh'),
		Loader.loadMapData('Elfland', 'Assets/Elfland%20Map.ffh'),
		Loader.loadMapData('Gaia', 'Assets/Gaia%20Map.ffh'),
		Loader.loadMapData('VolcanoB1', 'Assets/Gurgu%20Volcano%20B1%20Map.ffh'),
		Loader.loadMapData('VolcanoB2', 'Assets/Gurgu%20Volcano%20B2%20Map.ffh'),
		Loader.loadMapData('VolcanoB3', 'Assets/Gurgu%20Volcano%20B3%20Map.ffh'),
		Loader.loadMapData('VolcanoB4', 'Assets/Gurgu%20Volcano%20B4%20Map.ffh'),
		Loader.loadMapData('VolcanoB5', 'Assets/Gurgu%20Volcano%20B5%20Map.ffh'),
		Loader.loadMapData('IceCaveB1', 'Assets/Ice%20Cave%20B1%20Map.ffh'),
		Loader.loadMapData('IceCaveB2', 'Assets/Ice%20Cave%20B2%20Map.ffh'),
		Loader.loadMapData('IceCaveB3', 'Assets/Ice%20Cave%20B3%20Map.ffh'),
		Loader.loadMapData('Leifen', 'Assets/Leifen%20Map.ffh'),
		Loader.loadMapData('MarshCaveB1', 'Assets/Marsh%20Cave%20B1%20Map.ffh'),
		Loader.loadMapData('MarshCaveB2', 'Assets/Marsh%20Cave%20B2%20Map.ffh'),
		Loader.loadMapData('MarshCaveB3', 'Assets/Marsh%20Cave%20B3%20Map.ffh'),
		Loader.loadMapData('MatoyaCave', 'Assets/Matoya%27s%20Cave%20Map.ffh'),
		Loader.loadMapData('Melmond', 'Assets/Melmond%20Map.ffh'),
		Loader.loadMapData('MirageTower1F', 'Assets/Mirage%20Tower%201F%20Map.ffh'),
		Loader.loadMapData('MirageTower2F', 'Assets/Mirage%20Tower%202F%20Map.ffh'),
		Loader.loadMapData('MirageTower3F', 'Assets/Mirage%20Tower%203F%20Map.ffh'),
		Loader.loadMapData('NorthwestCastle', 'Assets/Northwest%20Castle%20Map.ffh'),
		Loader.loadMapData('Onrac', 'Assets/Onrac%20Map.ffh'),
		Loader.loadMapData('Provoka', 'Assets/Provoka%20Map.ffh'),
		Loader.loadMapData('SardaCave', 'Assets/Sarda%27s%20Cave%20Map.ffh'),
		Loader.loadMapData('SeaShrineB1', 'Assets/Sea%20Shrine%20B1%20Map.ffh'),
		Loader.loadMapData('SeaShrineB2', 'Assets/Sea%20Shrine%20B2%20Map.ffh'),
		Loader.loadMapData('SeaShrineB3', 'Assets/Sea%20Shrine%20B3%20Map.ffh'),
		Loader.loadMapData('SeaShrineB4', 'Assets/Sea%20Shrine%20B4%20Map.ffh'),
		Loader.loadMapData('SeaShrineB5', 'Assets/Sea%20Shrine%20B5%20Map.ffh'),
		Loader.loadMapData('SkyPalace1F', 'Assets/Sky%20Palace%201F%20Map.ffh'),
		Loader.loadMapData('SkyPalace2F', 'Assets/Sky%20Palace%202F%20Map.ffh'),
		Loader.loadMapData('SkyPalace3F', 'Assets/Sky%20Palace%203F%20Map.ffh'),
		Loader.loadMapData('SkyPalace4F', 'Assets/Sky%20Palace%204F%20Map.ffh'),
		Loader.loadMapData('SkyPalace5F', 'Assets/Sky%20Palace%205F%20Map.ffh'),
		Loader.loadMapData('FiendsTemple3F', 'Assets/Temple%20Fiends%203F%20Map.ffh'),
		Loader.loadMapData('FiendsTempleAir', 'Assets/Temple%20Fiends-Air%20Map.ffh'),
		Loader.loadMapData('FiendsTempleChaos', 'Assets/Temple%20Fiends-Chaos%20Map.ffh'),
		Loader.loadMapData('FiendsTempleEarth', 'Assets/Temple%20Fiends-Earth%20Map.ffh'),
		Loader.loadMapData('FiendsTempleFire', 'Assets/Temple%20Fiends-Fire%20Map.ffh'),
		Loader.loadMapData('FiendsTempleWater', 'Assets/Temple%20Fiends-Water%20Map.ffh'),
		Loader.loadMapData('FiendsTemple1F', 'Assets/Temple%20of%20Fiends%201F%20Map.ffh'),
		Loader.loadMapData('FiendsTemple2F', 'Assets/Temple%20of%20Fiends%202F%20Map.ffh'),
		Loader.loadMapData('FiendsTemple', 'Assets/Temple%20of%20Fiends%20Map.ffh'),
		Loader.loadMapData('TitanTunnel', 'Assets/Titan%27s%20Tunnel%20Map.ffh'),
		Loader.loadMapData('Waterfall', 'Assets/Waterfall%20Map.ffh'),
		Loader.loadImage('garland', 'Assets/garland.png'),
		Loader.loadImage('princess', 'Assets/princess.png'),
		Loader.loadImage('king', 'Assets/king.png'),
		Loader.loadImage('dwarf', 'Assets/dwarf.png'),
		Loader.loadImage('robot', 'Assets/robot.png'),
		Loader.loadImage('sage', 'Assets/sage.png'),
		Loader.loadImage('bikke', 'Assets/bikke.png'),
		Loader.loadImage('femaleelf', 'Assets/femaleelf.png'),
		Loader.loadImage('elfprince', 'Assets/elfprince.png'),
		Loader.loadImage('matoya', 'Assets/matoya.png'),
		Loader.loadImage('sarda', 'Assets/sarda.png'),
		Loader.loadImage('vampire', 'Assets/vampire.png'),
		Loader.loadImage('plate', 'Assets/plate.png'),
		Loader.loadImage('fiendplate', 'Assets/fiendplate.png'),
		Loader.loadImage('fairy', 'Assets/fairy.png'),
		Loader.loadImage('scholar', 'Assets/scholar.png'),
		Loader.loadImage('chimeguy', 'Assets/chimeguy.png'),
		Loader.loadImage('titan', 'Assets/titan.png'),
		Loader.loadImage('astos', 'Assets/astos.png'),
		Loader.loadImage('bahamut', 'Assets/bahamut.png'),
		Loader.loadImage('woman', 'Assets/woman.png'),
		Loader.loadImage('earthorb', 'Assets/earthorb.png'),
		Loader.loadImage('waterorb', 'Assets/waterorb.png'),
		Loader.loadImage('fireorb', 'Assets/fireorb.png'),
		Loader.loadImage('airorb', 'Assets/airorb.png'),
		Loader.loadImage('blackorb', 'Assets/blackorb.png'),
    ];
};

Game.loadSprites = function() {
    this.ship = new Ship(Loader.getImage('ship'), {[Directions.Down]:[0,1], [Directions.Up]:[3,2], [Directions.Left]:[6,7], [Directions.Right]:[4,5]});
    this.bridge = new Bridge(Loader.getImage('bridge')); 
    this.canal = new Canal(Loader.getImage('canal')); 
    this.airship = new Airship(Loader.getImage('airship'), Loader.getImage('airship_shadow'), {[Directions.Down]:[3,2], [Directions.Up]:[1,0], [Directions.Left]:[5,4], [Directions.Right]:[7,6]});
    this.player = new Player(overworldMap, 153, 165, 16, 16, Loader.getImage('fighter'), Loader.getImage('canoe'), {[Directions.Down]:[0,7], [Directions.Up]:[1,6], [Directions.Left]:[2,3], [Directions.Right]:[5,4]}, {[Directions.Down]:[0,1], [Directions.Up]:[0,1], [Directions.Left]:[4,5], [Directions.Right]:[2,3]});
    new Sprite('Garland', 'FiendsTemple', 0x14, 0x15, true, 'garland', 0x7f, null, null, true);
	new Sprite('Kidnapped Princess', 'FiendsTemple', 0x14, 0x12, true, 'princess', null, null, EventTrigger.PRINCESS, true);
	new Sprite('Black Orb', 'FiendsTemple', 0x14, 0x11, true, 'blackorb', null, null, null, true, -255);
	new Sprite('King of Coneria', 'ConeriaCastle2F', 0xC, 0x4, true, 'king', null, null, EventTrigger.BRIDGE, false, null, EventTrigger.PRINCESS);
	new Sprite('Bikke', 'Provoka', 0x5, 0x7, false, 'bikke', 0x7e, null, EventTrigger.PIRATES, true);
	new Sprite('Astos', 'NorthwestCastle', 0x10, 0x6, true, 'astos', 0x7d, KeyItem.CRYSTAL, null, true, KeyItem.CROWN);
	new Sprite('Matoya', 'MatoyaCave', 0x8, 0x1, true, 'matoya', null, KeyItem.HERB, null, false, KeyItem.CRYSTAL);
	new Sprite('Elf Doctor', 'ElflandCastle', 0x9, 0x5, true, 'femaleelf', null, null, EventTrigger.CUREELF, false, KeyItem.HERB);
	new Sprite('Elf Prince', 'ElflandCastle', 0x8, 0x6, true, 'elfprince', null, KeyItem.KEY, null, false, null, EventTrigger.CUREELF);
	new Sprite('Nerrick', 'DwarfCave', 0x10, 0x2d, false, 'dwarf', null, null, EventTrigger.CANAL, true, KeyItem.TNT);
	new Sprite('Dwarf Blacksmith', 'DwarfCave', 0x7, 0x2, true, 'dwarf', null, null, EventTrigger.EXCALIBER, false, KeyItem.ADAMANT);
	new Sprite('Vampire', 'EarthCaveB3', 0x1A, 0x26, true, 'vampire', 0x7c, null, null, true);
	new Sprite('Titan', 'TitanTunnel', 0x8, 0x7, false, 'titan', null, null, null, true, KeyItem.RUBY);
	new Sprite('Sarda', 'SardaCave', 0x2, 0x2, true, 'sarda', null, KeyItem.ROD, null, false);
	new Sprite('Earth Plate', 'EarthCaveB3', 0x1A, 0x1B, false, 'plate', null, null, null, true, KeyItem.ROD);
	new Sprite('Orb of the Earth', 'EarthCaveB5', 0xC, 0x2A, true, 'earthorb', 0x7a, null, null, true);
	new Sprite('Orb of Water', 'SeaShrineB5', 0xC, 0x8, true, 'waterorb', 0x78, null, null, true);
	new Sprite('Orb of Fire', 'VolcanoB5', 0x7, 0x37, true, 'fireorb', 0x79, null, null, true);
	new Sprite('Orb of Wind', 'SkyPalace5F', 0x7, 0x5, true, 'airorb', 0x77, null, null, true);
	new Sprite('Canoe Sage', 'CrescentLake', 0x2A, 0xA, false, 'sage', null, KeyItem.CANOE, null, false, KeyItem.EARTHORB);
	new Sprite('Waterfall Robot', 'Waterfall', 0x11, 0x36, true, 'robot', null, KeyItem.CUBE, null, true);
	new Sprite('Bahamut', 'BahamutB2', 0x15, 0x3, true, 'bahamut', null, null, EventTrigger.CLASSCHANGE, false, KeyItem.TAIL);
	new Sprite('Submarine Engineer', 'Onrac', 0x2D, 0x1E, false, 'woman', null, null, null, true, KeyItem.OXYALE);
	new Sprite('Dr. Unne', 'Melmond', 0x1A, 0x1, false, 'scholar', null, null, EventTrigger.TRANSLATE, false, KeyItem.SLAB);
	new Sprite('Chime Guy', 'Leifen', 0x18, 0x15, false, 'chimeguy', null, KeyItem.CHIME, null, false, null, EventTrigger.TRANSLATE);
	new Sprite('Fiends Plate', 'FiendsTemple3F', 0x14, 0x10, true, 'fiendplate', null, null, null, true, KeyItem.LUTE);
	new Sprite('Chaos', 'FiendsTempleChaos', 0xF, 0x11, true, 'garland', 0x7b, null, null, true);
	new Sprite('Fairy', 'Gaia', 0x31, 0x13, false, 'fairy', null, KeyItem.OXYALE, null, true, KeyItem.BOTTLE).active = false;
	new Sprite('Rescued Princess', 'ConeriaCastle2F', 0xB, 0x5, true, 'princess', null, KeyItem.LUTE, null, false).active = false;
	new Sprite('Bikke2', 'Provoka', 0x5, 0x7, false, 'bikke', null, null, EventTrigger.SPAWNSHIP, true).active = false;
	this.controller = new Controller(Loader.getImage('controller'), Loader.getImage('controllerTouch'));
};

Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN, Keyboard.action, Keyboard.altAction]);
    overworldMap.tileAtlasImage[0] = Loader.getImage('overworld');
    overworldMap.data = Loader.getMapData('overworld');
    this.camera = new Camera(0, 0, defaultWidth, defaultHeight, 2);
	for(let i = 0; i < dungeonNames.length; i++)
		spriteMapList[dungeonNames[i]] = [];
	this.loadSprites();
	this.frames = 0;
	this.movementSpeedFactor = 0.5;
	this.teleportDuration = 0;
	this.teleportMaxDuration = 0.8;
	this.teleportMidpoint = false;
	this.stepCounter1 = 0xFF;
	this.stepCounter2 = 0xFF;
	this.encounterChance = 0x45;
	this.encounterNumber = 0;
	this.encounterGroup = 0;
    this.currentMap = overworldMap;
    this.camera.followPlayer(this.currentMap, this.player);
	this.stepPaths = [];
	this.currentStepPath = new StepPath(this.currentMap, Game.createCheckpoint(this.player));
	this.saveCheckpoint = Game.createCheckpoint(this.player);
	this.currentPathLocations = [new PathLocation(0x99, 0xA5)];
	this.currentTileLocationEvents = [];
    
    // create a canvas
    this.layerCanvas = document.createElement('canvas');
    this.layerCanvas.width = defaultWidth;
    this.layerCanvas.height = defaultHeight;
    this.spriteCanvas = document.createElement('canvas');
    this.spriteCanvas.width = defaultWidth;
    this.spriteCanvas.height = defaultHeight;

    // initial draw of the map
    console.log("Intial Map Loading...");
    this._loadCells(this.currentMap);
    console.log("Intial Map Load Complete");
    this._drawMap(this.currentMap);
    console.log("Intial Map Draw Complete");
    this._drawSprites(this.currentMap);
    console.log("Intial Sprite Draw Complete");
};

Game.update = function (delta) {
    this.hasScrolled = false;
    this.frames = this.frames + delta * 60;
	this.player.actionCooldown -= delta;
	this.player.movementCooldown -= delta;
    // handle camera movement with arrow keys
    let direction = -1;
    let activeMovement = false;
    let incompleteMovement = false;
	let keyHeld = false;
    if (Keyboard.isDown(Keyboard.LEFT) || this.controller.isDown(Keyboard.LEFT)) { direction = Directions.Left; }
    else if (Keyboard.isDown(Keyboard.RIGHT) || this.controller.isDown(Keyboard.RIGHT)) { direction = Directions.Right; }
    else if (Keyboard.isDown(Keyboard.UP) || this.controller.isDown(Keyboard.UP)) { direction = Directions.Up; }
    else if (Keyboard.isDown(Keyboard.DOWN) || this.controller.isDown(Keyboard.DOWN)) { direction = Directions.Down; }
    
    if (direction != -1)
	{
        activeMovement = true;
		keyHeld = true;
	}
    
    if(this.player.offsetX != 0 || this.player.offsetY != 0)
    {
        incompleteMovement = true;
        if(this.player.direction != direction)
            activeMovement = false;
    }
	
	if((Keyboard.isDown(Keyboard.action) || Keyboard.isDown(Keyboard.altAction) || this.controller.isDown(Keyboard.action)) && this.player.allowMovement && this.player.actionCooldown < 0)
	{
		this.player.actionCooldown = 0.25;
		this.handleActionButton(incompleteMovement, activeMovement);
	}
    
    if (activeMovement == true || incompleteMovement == true) {
        this.player.move(delta, direction, activeMovement, keyHeld);
        this.camera.followPlayer(this.currentMap, this.player);
        this.hasScrolled = true;
    }
	
	if(this.airship.landing || this.airship.takeoff)
	{
		this.airship.updateElevation (this.player, delta);
        this.camera.followPlayer(this.currentMap, this.player);
        this.hasScrolled = true;
	}
	
	if(this.player.teleporting)
	{
		this.teleportDuration += delta;
		if(!this.teleportMidpoint && this.teleportDuration >= this.teleportMaxDuration / 2)
		{
			this.midTeleport(this.teleportParams.warp, this.teleportParams.teleport, this.teleportParams.tileX, this.teleportParams.tileY, this.teleportParams.moveMethod);
		}
		else if(this.teleportMidpoint && this.teleportDuration >= this.teleportMaxDuration)
		{
			this.completeTeleport();
		}
	}
};

Game.processFight = function (fightNumber, success)
{
	Game.currentPathLocations.push(new LocationEvent(EventType.Fight, fightNumber));
	document.getElementById('messageLog').innerHTML += '<br/>Fight: ' + fightNumber;
};

Game.processItem = function (itemNumber, success)
{
	if(success)
	{
		this.player.keyItems[itemNumber] = true;
		Game.currentPathLocations.push(new LocationEvent(EventType.Item, itemNumber));
		document.getElementById('messageLog').innerHTML += '<br/>Item come to hand: ' + KeyItemStrings[itemNumber];
		if(itemNumber == KeyItem.BOTTLE)
			spriteNameMap['Fairy'].active = true;
	}
	else
	{
		document.getElementById('messageLog').innerHTML += '<br/>You need: ' + KeyItemStrings[itemNumber];
	}
};

Game.processEventTrigger = function (eventNumber, success)
{
	if(success)
	{
		this.player.eventsTriggered[eventNumber] = true;
		Game.currentPathLocations.push(new LocationEvent(EventType.Event, eventNumber));
		if(eventNumber == EventTrigger.PRINCESS)
		{
			// clear exit info for later
			this.currentDungeon.warpInformation.pop();
			let teleport = new teleportEntry('PrincessWarp', 'ConeriaCastle2F', 0xC, 0x7, teleportEntryRequirement.None, true);
			let dungeonInfo = dungeons[teleport.targetMap];
			dungeonInfo.storeWarpInformation(new teleportEntry('StoredWarp', 'ConeriaCastle1F', 0xC, 0x12, teleportEntryRequirement.None, false));
			spriteNameMap['Rescued Princess'].active = true;
			this.startTeleport(true, teleport);
		}
		else if(eventNumber == EventTrigger.CANAL)
		{
			this.canal.active = false;
		}
		else if(eventNumber == EventTrigger.BRIDGE)
		{
			this.bridge.active = true;
		}
		else if(eventNumber == EventTrigger.PIRATES)
		{
			spriteNameMap['Bikke2'].active = true;
		}
		else if(eventNumber == EventTrigger.SPAWNSHIP)
		{
			this.ship.active = true;
		}
		else if(eventNumber == EventTrigger.AIRSHIP)
		{
			this.airship.active = true;
		}
		document.getElementById('messageLog').innerHTML += '<br/>Event Triggered: ' + EventStrings[eventNumber];
	}
	else
	{
		document.getElementById('messageLog').innerHTML += '<br/>Missing Requirement: ' + EventStrings[eventNumber];
	}
};

Game.handleActionButton = function(incompleteMovement, activeMovement)
{
	let targetX = this.player.gridX;
	let targetY = this.player.gridY;
	
	if(!this.currentMap.overworldMap)
	{
		let interactX = (this.player.direction == Directions.Left ? targetX - 1 : (this.player.direction == Directions.Right ? targetX + 1 : targetX));
		let interactY = (this.player.direction == Directions.Up ? targetY - 1 : (this.player.direction == Directions.Down ? targetY + 1 : targetY));
		let tileData = this.currentMap.getTileData(interactX, interactY);
		if(tileData.loot != null && !this.player.keyItems[tileData.loot])
			this.processItem(tileData.loot, true);
		for(let i = 0; i < spriteMapList[this.currentMap.name].length; i++)
		{
			let sprite = spriteMapList[this.currentMap.name][i];
			if(sprite.active && sprite.triggered == false && sprite.gridX == interactX && sprite.gridY == interactY)
			{
				let results = sprite.playerInteraction(this.player);
				if(results.fight != null)
					this.processFight(results.fight, results.success);
				if(results.item != null)
					this.processItem(results.item, results.success);
				if(results.eventTrigger != null)
					this.processEventTrigger(results.eventTrigger, results.success);
				if(results.success)
					this._drawSprites(this.currentMap);
				break;
			}
		}
	}
	if(incompleteMovement)
	{
		if(this.player.offsetX > 0)
			targetX++;
		else if(this.player.offsetX < 0)
			targetX--;
		if(this.player.offsetY > 0)
			targetY++;
		else if(this.player.offsetY < 0)
			targetY--;
			
	}
	if(this.currentMap.overworldMap && this.airship.active == true && targetX == this.airship.gridX && targetY == this.airship.gridY && this.player.moveMethod == MoveMethod.Walk)
	{
		if(incompleteMovement && !this.airship.takeoff)
			this.player.queueAirshipBoard = true;
		else if(!incompleteMovement && this.player.queueAirshipBoard == false) // don't force a board if we're queueing a board
			this.airship.board(this.player);
	}
	else if(this.player.moveMethod == MoveMethod.Airship)
	{
		if(incompleteMovement && !this.airship.landing)
			this.player.queueAirshipUnboard = true;
		else if(!incompleteMovement && this.player.queueAirshipUnboard == false) // don't force a unboard if we're queueing an unboard
			this.airship.unboard(this.player);
	}
	
};

Game.incrementStepCounter = function()
{
	if(this.stepCounter2 < 0x80)
		this.stepCounter1++;
	else
		this.stepCounter1--;
	if(this.stepCounter1 < 0)
		this.stepCounter1 += 0x100;
	else if(this.stepCounter1 > 0xFF)
		this.stepCounter1 -= 0x100;
	if(this.stepCounter1 == 0)
		this.stepCounter2 += 0xA0;
	if(this.stepCounter2 > 0xFF)
		this.stepCounter2 -= 0x100;
	this.encounterChance = encounterChanceTable[this.stepCounter1];
	this.encounterThreshold = (this.player.moveMethod == MoveMethod.Ship ? 3 : this.currentMap.encounterThreshold);
	if(this.encounterChance < this.encounterThreshold)
	{
		this.encounterGroup = encounterGroupTable[this.encounterNumber];
		this.player.movementCooldown = 0.5;
		this.player.offsetX = 0;
		this.player.offsetY = 0;			   
		this.encounterNumber++;
		if(this.encounterNumber > 255)
			this.encounterNumber -= 256;
	}
	document.getElementById('encounterInformation').innerHTML = 
		('step1: ' + this.stepCounter1 + 
		 '<br/>step2: ' + this.stepCounter2 + 
		 '<br/>encounterGroup: ' + this.encounterGroup + 
		 '<br/>chance: ' + this.encounterChance + 
		 '<br/>threshold: ' + this.encounterThreshold + 
		 '<br/>encounterNumber: ' + this.encounterNumber
		);
};

Game.checkForRoomFlags = function (tileX, tileY, key)
{
	let tileData = this.currentMap.getTileData(tileX, tileY);
	if(tileData == null)
		return;
	let roomFlag = tileData.room;
	if(roomFlag == roomOpening.Open || (key && roomFlag == roomOpening.Lock))
		this.currentMap.showRooms = true;
	else if(roomFlag == roomOpening.Close)
		this.currentMap.showRooms = false;
};

Game.checkForTeleport = function (tileX, tileY)
{
	let tileData = this.currentMap.getTileData(tileX, tileY);
	if(tileData == null)
		return;
	let teleport = tileData.teleport;
	if(teleport != null)
	{
		if(teleport.requirement == teleportEntryRequirement.Crown && this.player.keyItems[KeyItem.CROWN] == false)
		{
			document.getElementById('messageLog').innerHTML += '<br/>No Crown :(';	
		}
		else if(teleport.requirement == teleportEntryRequirement.Cube && this.player.keyItems[KeyItem.CUBE] == false)
		{
			document.getElementById('messageLog').innerHTML += '<br/>No Cube :(';	
		}
		else if(teleport.requirement == teleportEntryRequirement.Chime && this.player.keyItems[KeyItem.CHIME] == false)
		{
			document.getElementById('messageLog').innerHTML += '<br/>No Chime :(';	
		}
		else if(teleport.requirement == teleportEntryRequirement.Orbs && this.player.getOrbs() == false)
		{
			document.getElementById('messageLog').innerHTML += '<br/>Not enough orbs noob';
		}
		else //teleport
		{
			let warp = teleport.targetMap == 'WARP';
			if(warp)
				teleport = this.currentDungeon.warpInformation.pop();
			this.startTeleport(warp, teleport, tileX, tileY, this.player.moveMethod);
		}
	}
};

Game.handleTeleport = function (warp, teleport, sourceX = 0, sourceY = 0, moveMethod = MoveMethod.Walk)
{
	if(teleport.targetMap == 'WorldMap')
	{
		this.currentMap = overworldMap;
		dungeonMap.showRooms = false;
	}
	else
	{
		let dungeonInfo = dungeons[teleport.targetMap];
		if(!warp)
			dungeonInfo.storeWarpInformation(new teleportEntry('StoredWarp', this.currentMap.overworldMap ? 'WorldMap' : this.currentDungeon.mapDataName, sourceX, sourceY, teleportEntryRequirement.None, (this.currentMap.overworldMap ? null : this.currentMap.showRooms), this.player.moveMethod));
		else
			dungeonMap.showRooms = teleport.roomState;
		this.currentDungeon = dungeonInfo;
		dungeonMap.tileAtlasImage[0] = Loader.getImage(dungeonInfo.tileAtlasImageName);
		dungeonMap.tileAtlasImage[1] = Loader.getImage(dungeonInfo.tileAtlasRoomImageName);
		dungeonMap.data = Loader.getMapData(dungeonInfo.mapDataName);
		dungeonMap.mapTileAtlas = dungeonInfo.mapTileAtlas;
		dungeonMap.name = dungeonInfo.mapDataName;
		dungeonMap.encounterThreshold = dungeonInfo.encounterThreshold;
		this.currentMap = dungeonMap;
		this._loadCells(dungeonMap);
	}
	this.player.teleportPlayer(this.currentMap, teleport.gridX, teleport.gridY, moveMethod);
	
	if(teleport.name != 'CheckPointWarp' + ResetType.Path)
	{
		Game.currentStepPath.pathLocations = Game.currentPathLocations;
		Game.stepPaths.push(Game.currentStepPath);
		Game.currentStepPath = new StepPath(this.currentMap, Game.createCheckpoint(this.player));
		Game.currentPathLocations.push(new PathLocation(teleport.gridX, teleport.gridY));
		Game.currentTileLocationEvents = [];
	}
};

Game._loadCells = function (map) {
	console.log(map.loadRooms);
	for(let mapVariants = 0; mapVariants < (map.loadRooms ? 2 : 1); mapVariants++)
	{
		console.log(mapVariants);
		console.log(map.tileAtlasImage[mapVariants]);
		for(let mapX = 0; mapX < map.cols; mapX++){
			for(let mapY = 0; mapY < map.rows; mapY++){
				let mapIndex = mapX + mapY * map.cols + map.cols * map.rows * mapVariants;
				let cellCanvas = document.createElement('canvas');
				cellCanvas.width = map.cells.cols * map.cells.tsize;
				cellCanvas.height = map.cells.rows * map.cells.tsize;
				let context = cellCanvas.getContext('2d')
				let cellCanvasRooms;
				for (let c = 0; c <= map.cells.cols; c++) {
					for (let r = 0; r <= map.cells.rows; r++) {
						let tile = map.getTile(mapX, mapY, c, r);
						let x = c * map.cells.tsize;
						let y = r * map.cells.tsize;
						let tileRow = Math.floor(tile / 16);
						let tileCol = tile % 16;
						context.drawImage(
							map.tileAtlasImage[mapVariants],// image
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
            let mapIndex = (c < 0 ? c + map.cols : c >= map.cols ? c - map.cols : c) + (r < 0 ? r + map.rows : r >= map.rows ? r - map.rows : r) * map.cols + (map.loadRooms && map.showRooms ? map.rows * map.cols: 0);
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
    
	// possibly redo this to use only spriteMapList for performance
	// will have to change how ship/canal/bridge/etc. sprites work vs. other ones that have collision/other events.
    for (let i = 0; i < spriteMapList[map.name].length + 1; i++) {
		let sprite = (i == spriteMapList[map.name].length ? this.player : spriteMapList[map.name][i]); 
		if(sprite.active == true && (sprite.room == 'Ignore' || this.currentMap.showRooms == sprite.room))
    	{
			if(sprite.followPlayer)
			{
				sprite.gridX = Game.player.gridX;
				sprite.gridY = Game.player.gridY;
				sprite.offsetX = Game.player.offsetX;
				sprite.offsetY = Game.player.offsetY;
				sprite.direction = (sprite.landing || sprite.takeoff ? Directions.Right : Game.player.direction);
			}
			let spriteAnimationState = sprite.getAnimationFrame(this.frames);
			let x = (sprite.gridX - startCol) * displayTsize + offsetX + sprite.offsetX * this.camera.zoom;
			let y = (sprite.gridY - startRow) * displayTsize + offsetY + sprite.offsetY * this.camera.zoom;
			if(x < defaultWidth && x + spriteAnimationState.width > 0 && y < defaultHeight && y + sprite.height > 0)
			{
				if(sprite.elevation > 0)
				{
					context.drawImage(
					sprite.shadowImage, // image
					0, // source x
					0, // source y
					12, // source width
					3, // source height
					Math.round(x + 4),  // target x
					Math.round(y + sprite.height / 2 * this.camera.zoom), // target y
					12 * this.camera.zoom, // target width
					3 * this.camera.zoom // target height
					);
				}
				context.drawImage(
					sprite.getSpriteMap(), // image
					spriteAnimationState.startX, // source x
					0, // source y
					spriteAnimationState.width, // source width
					sprite.height, // source height
					Math.round(x),  // target x
					Math.round(y - (sprite.getgridOffsetY != undefined ? sprite.getgridOffsetY() * this.camera.zoom : 0) - (sprite.elevation > 0 ? sprite.elevation * this.camera.zoom : 0)), // target y
					sprite.width * this.camera.zoom, // target width
					sprite.height * this.camera.zoom // target height
				);
			}
    	}
    }
};

Game._drawTransition = function(percentComplete)
{
	let transitionHeight = defaultHeight / 2 * percentComplete;
	this.ctx.fillStyle = 'black';
	this.ctx.fillRect(0, 0, defaultWidth, transitionHeight);
	this.ctx.fillRect(0, defaultHeight - transitionHeight, defaultWidth, transitionHeight);
};

Game.render = function () {
    // re-draw map if there has been scroll
    if (this.hasScrolled) {
        this._drawMap(this.currentMap);
        this._drawSprites(this.currentMap);
    }
	// keep animating airship
	else if(this.player.moveMethod == MoveMethod.Airship)
        this._drawSprites(this.currentMap);
		

    // draw the map layers into game context
    this.ctx.drawImage(this.layerCanvas, 0, 0);
    this.ctx.drawImage(this.spriteCanvas, 0, 0);
	if(this.player.teleporting)
	{
		this._drawTransition(1 - Math.abs(this.teleportMaxDuration / 2 - this.teleportDuration) / (this.teleportMaxDuration / 2));
	}
};
