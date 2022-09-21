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
	None: 0,
	RNG: 1 // set encounter store number of fight 
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
new dungeonMapTile(true, new teleportEntry('Ordeals3', 'OrdealsCastle1F', 2, 2, teleportEntryRequirement.Crown)),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(false, null, 'TNT'),
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
new dungeonMapTile(false, null, 'TAIL'),
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
new dungeonMapTile(true, null, 'WATERORB'),
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
new dungeonMapTile(false, null, 'SLAB'),
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
new dungeonMapTile(true, null, 'EARTHORB'),
new dungeonMapTile(true, new teleportEntry('ExitEarthCave', 'WorldMap', 0x41, 0xBB)),
// Row 2
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true),
new dungeonMapTile(),
new dungeonMapTile(),
new dungeonMapTile(true, new teleportEntry('ExitTitanE', 'WorldMap', 0x2a, 0xae)),
new dungeonMapTile(true, new teleportEntry('ExitTitanW', 'WorldMap', 0x1e, 0xaf)),
new dungeonMapTile(true, null, 'FIREORB'),
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
new dungeonMapTile(false, null, 'RUBY'),
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
new dungeonMapTile(true, new teleportEntry('Bahamut', 'BahamutB2', 0x20, 0x1f)),
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
new dungeonMapTile(false, null, 'FLOATER'),
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
new dungeonMapTile(false, null, 'CROWN'),
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
new dungeonMapTile(true, null, 'AIRORB'),
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

function DungeonInfo(label, mapTileAtlas, tileAtlasImageName, tileAtlasRoomImageName, mapDataName, exitInformation)
{
	this.mapTileAtlas = mapTileAtlas;
	this.tileAtlasImageName = tileAtlasImageName;
	this.tileAtlasRoomImageName = tileAtlasRoomImageName;
	this.mapDataName = mapDataName;
	this.exitInformation = exitInformation;
	this.label = label;
}

DungeonInfo.prototype.storeWarpInformation = function (teleportEntry)
{
	this.warpInformation = teleportEntry;
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
'SkyPalace5F': new DungeonInfo('SkyPalace5F', skyCastleMapTileAtlas, 'tiles_skycastle', 'tiles_skycastleroom', 'SkyPalace5F', new teleportEntry('SkyPalace5FExitTarget', 'WorldMap', 0xC2, 0x3B)),
'FiendsTemple1F': new DungeonInfo('FiendsTemple1F', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTemple1F', new teleportEntry('FiendsTemple1FExitTarget', 'WARP', 0x0, 0x0)),
'FiendsTemple2F': new DungeonInfo('FiendsTemple2F', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTemple2F', new teleportEntry('FiendsTemple2FExitTarget', 'WARP', 0x0, 0x0)),
'FiendsTemple3F': new DungeonInfo('FiendsTemple3F', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTemple3F', new teleportEntry('FiendsTemple3FExitTarget', 'WARP', 0x0, 0x0)),
'FiendsTempleEarth': new DungeonInfo('FiendsTempleEarth', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTempleEarth', new teleportEntry('FiendsTempleEarthExitTarget', 'WARP', 0x0, 0x0)),
'FiendsTempleFire': new DungeonInfo('FiendsTempleFire', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTempleFire', new teleportEntry('FiendsTempleFireExitTarget', 'WARP', 0x0, 0x0)),
'FiendsTempleWater': new DungeonInfo('FiendsTempleWater', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTempleWater', new teleportEntry('FiendsTempleWaterExitTarget', 'WARP', 0x0, 0x0)),
'FiendsTempleAir': new DungeonInfo('FiendsTempleAir', fiendsTempleMapTileAtlas, 'tiles_fiendsrevisited', 'tiles_fiendsrevisitedroom', 'FiendsTempleAir', new teleportEntry('FiendsTempleAirExitTarget', 'WARP', 0x0, 0x0)),
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
	name: 'Overworld',
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

var spriteList = [];

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
    this.x = (player.gridX * map.cells.tsize + player.offsetX) * this.zoom;
    this.y = (player.gridY * map.cells.tsize + player.offsetY - Game.airship.elevation) * this.zoom;
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

function Player(map, startX, startY, width, height, image, spriteWalkFrames) {
    this.gridX = startX;
    this.gridY = startY;
    this.offsetX = 0;
    this.offsetY = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.maxCol;
    this.maxY = map.maxRow;
    this.spriteMap = image;
    this.spriteWalkFrames = spriteWalkFrames;
    this.active = true;
    this.direction = Directions.Down;
	this.key = true; // CHANGE ALL THESE BACK TO FALSE AFTER IMPLEMENTING METHOD TO OBTAIN
    this.canoe = false;
	this.crown = true;
	this.cube = true;
	this.chime = true;
	this.floater = true;
	this.earthOrb = true;
	this.waterOrb = true;
	this.airOrb = true;
	this.fireOrb = true;
	this.queueAirshipBoard = false;
	this.queueAirshipUnboard = false;
	this.mapName = 'Overworld';
	this.getOrbs = function(){return this.earthOrb && this.waterOrb && this.airOrb && this.fireOrb;};
	this.allowMovement = true;
    this.moveMethod = MoveMethod.Walk;
    console.log("Creating Player At: " + this.gridX + "," + this.gridY);
    spriteList.push(this);
}

Player.prototype.teleportPlayer = function (map, gridX, gridY)
{
	this.gridX = gridX;
    this.gridY = gridY;
    this.maxX = map.maxCol;
    this.maxY = map.maxRow;
    this.offsetX = 0;
    this.offsetY = 0;
    this.direction = Directions.Down;
	this.mapName = map.name;
	let tileData = map.getTileData(gridX, gridY);
    this.moveMethod = tileData.canoe == true ? MoveMethod.Canoe : MoveMethod.Walk;
};

Player.prototype.getAnimationFrame = function (frames) {
    let spriteDirectionWalkFrames = this.spriteWalkFrames[this.direction];
    let spriteAnimationState = {startX: 0, width: this.width};
    if(spriteDirectionWalkFrames.length > 0)
    {
        let frameIndex = Math.floor(frames / 15) % spriteDirectionWalkFrames.length;
        let frame = spriteDirectionWalkFrames[frameIndex];
        spriteAnimationState.startX = frame * this.width;
    }
    return spriteAnimationState;
};

Player.prototype.checkTargetTile = function (tileX, tileY)
{
    let tileData = Game.currentMap.getTileData(tileX, tileY);
	if(tileData == null)
		return true;
	if(this.key == false && tileData.room == roomOpening.Lock)
		return true;
    if(this.moveMethod == MoveMethod.Walk && tileData.walk == false)
    {
		if(Game.bridge.active == true && Game.bridge.gridX == tileX && Game.bridge.gridY == tileY)
			return false;
        if(tileData.canoe == true && this.canoe == true)
        {
            this.moveMethod = MoveMethod.Canoe;
            return false;
        }
		else if(Game.currentMap.overworldMap && Game.ship.active == true && Game.ship.gridX == tileX && Game.ship.gridY == tileY)
		{
			return false;
		}
        else
            return true;
    }
    else if(this.moveMethod == MoveMethod.Ship && tileData.ship == false)
    {
        if(tileData.canoe == true && this.canoe == true)
        {
			Game.ship.unboard(this, true);
            return false;
        } // Build out more scenarios to ride boat, etc.
		else if(tileData.dockShip)
		{
			Game.ship.unboard(this, false);
			return false;
		}
        else
            return true;
    }
	else if(this.moveMethod == MoveMethod.Canoe && tileData.canoe == false)
	{
		if(tileData.walk == true)
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
    return false;
};

Player.SPEED = 200; // Raw Pixels Per Second (Unzoomed)
Player.SEASPEED = 240;
Player.AIRSPEED = 320;

Player.prototype.move = function (delta, direction, active) {
	if(this.allowMovement == false)
		return;
    let speed = (this.moveMethod == MoveMethod.Airship ? Player.AIRSPEED : (this.moveMethod == MoveMethod.Ship  ? Player.SEASPEED : Player.SPEED));
	let previousGridX = this.gridX;
	let previousGridY = this.gridY;
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
        if(this.gridY < 0)
            this.gridY += this.maxY;
        else if (this.gridY >= this.maxY)
            this.gridY -= this.maxY;
        let targetTileInaccessible = this.checkTargetTile(this.gridX, this.gridY + polarity);
        // if sprite height or tile height is different, figure out how to use tile height
        if(!active && Math.abs(this.offsetY) > Math.abs(this.height) || targetTileInaccessible)
            this.offsetY = 0;
		if(polarity * this.offsetY > 1)
			Game.checkForRoomFlags(this.gridX, this.gridY + polarity, this.key);
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
        let targetTileInaccessible = this.checkTargetTile(this.gridX + polarity, this.gridY);
        if(!active && Math.abs(this.offsetX) > Math.abs(this.width) || targetTileInaccessible)
            this.offsetX = 0;
		if(polarity * this.offsetX > 1)
			Game.checkForRoomFlags(this.gridX + polarity, this.gridY, this.key);
        this.offsetX = this.offsetX % this.width;
    }
	
	if(this.gridX != previousGridX || this.gridY != previousGridY)
	{
		if(this.moveMethod == MoveMethod.Walk || this.moveMethod == MoveMethod.Canoe)
			Game.checkForTeleport(this.gridX, this.gridY);
		if(Game.currentMap.overworldMap && Game.ship.active == true && Game.ship.gridX == this.gridX && Game.ship.gridY == this.gridY)
			Game.ship.board(this);
		if(this.queueAirshipBoard)
			Game.airship.board(this);
		else if(this.queueAirshipUnboard)
			Game.airship.unboard(this);
	}
};

function Bridge(image)
{
    this.active = false;
    this.spriteMap = image;
    this.gridX = 152;
    this.gridY = 152;
	this.width = 16;
	this.height = 16;
    this.walk = true;
    this.ship = true;
	this.offsetX = 0;
	this.offsetY = 0;
	this.mapName = 'Overworld';
    spriteList.push(this);
}
// Make generic sprite class to put Bridge/Misc under to prevent animation needs?
Bridge.prototype.getAnimationFrame = function (frames) {
    let spriteAnimationState = {startX: 0, width: this.width};
    return spriteAnimationState;
};


function Ship(image, spriteWalkFrames)
{
    this.active = false;
	this.followPlayer = false;
    this.spriteMap = image;
    this.spriteWalkFrames = spriteWalkFrames;
    this.gridX = 0xD2;
    this.gridY = 0x99;
	this.width = 16;
	this.height = 16;
    this.direction = Directions.Right;
	this.offsetX = 0;
	this.offsetY = 0;
	this.mapName = 'Overworld';
    spriteList.push(this);
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
};

Ship.prototype.getAnimationFrame = function (frames) {
    let spriteDirectionWalkFrames = this.spriteWalkFrames[this.direction];
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
	this.followPlayer = false;
    this.spriteMap = image;
    this.spriteWalkFrames = spriteWalkFrames;
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
	this.mapName = 'Overworld';
    spriteList.push(this);
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
    let spriteDirectionWalkFrames = this.spriteWalkFrames[this.direction];
    let spriteAnimationState = {startX: 0, width: this.width};
    if(spriteDirectionWalkFrames.length > 0)
    {
        let frameIndex = (this.elevation > 0 ? Math.floor(frames / (this.takeoff || this.landing ? 6 : 3)) % spriteDirectionWalkFrames.length : 0);
        let frame = spriteDirectionWalkFrames[frameIndex];
        spriteAnimationState.startX = frame * this.width;
    }
    return spriteAnimationState;
};

Game.toggleBridge = function(checkboxElement) {
	this.bridge.active = checkboxElement.checked;
	this._drawSprites(this.currentMap);
};

Game.toggleCanoe = function(checkboxElement) {
	this.player.canoe = checkboxElement.checked;
};

Game.toggleShip = function(checkboxElement) {
	this.ship.active = checkboxElement.checked;
	this._drawSprites(this.currentMap);
};

Game.toggleAirship = function(checkboxElement) {
	this.airship.active = checkboxElement.checked;
	this._drawSprites(this.currentMap);
};

Game.handleWarp = function() 
{
	if(this.currentMap.overworldMap)
		return;
	let teleport = this.currentDungeon.warpInformation;
	let warp = true;
	this.handleTeleport(warp, teleport);	
};
Game.handleExit = function() 
{
	if(this.currentMap.overworldMap)
		return;
	let teleport = this.currentDungeon.exitInformation;
	let warp = false;
	this.handleTeleport(warp, teleport);
};

Game.load = function () {
    return [
		Loader.loadImage('overworld', 'Assets/Overworld.png'),
		Loader.loadImage('fighter', 'Assets/Fighter.png'),
		Loader.loadImage('bridge', 'Assets/Bridge.png'),
		Loader.loadImage('airship', 'Assets/Airship.png'),
		Loader.loadImage('airship_shadow', 'Assets/AirshipShadow.png'),
		Loader.loadImage('ship', 'Assets/Ship.png'),
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
		Loader.loadImage('tiles_skycastlerooms', 'Assets/DungeonTiles/SkyCastleRoom.png'),
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
    ];
};

Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN, Keyboard.action]);
    overworldMap.tileAtlasImage[0] = Loader.getImage('overworld');
    overworldMap.data = Loader.getMapData('overworld');
    console.log("INIT Overworldmap Data Length: " + overworldMap.data.length);
    this.camera = new Camera(0, 0, defaultWidth, defaultHeight, 2);
    this.bridge = new Bridge(Loader.getImage('bridge')); 
    this.ship = new Ship(Loader.getImage('ship'), {[Directions.Down]:[0,1], [Directions.Up]:[3,2], [Directions.Left]:[6,7], [Directions.Right]:[4,5]});
    this.airship = new Airship(Loader.getImage('airship'), Loader.getImage('airship_shadow'), {[Directions.Down]:[3,2], [Directions.Up]:[1,0], [Directions.Left]:[5,4], [Directions.Right]:[7,6]});
    this.player = new Player(overworldMap, 153, 165, 16, 16, Loader.getImage('fighter'), {[Directions.Down]:[0,7], [Directions.Up]:[1,6], [Directions.Left]:[2,3], [Directions.Right]:[5,4]});
    this.frames = 0;
    this.currentMap = overworldMap;
    this.camera.followPlayer(this.currentMap, this.player);
    
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
    // handle camera movement with arrow keys
    let direction = -1;
    let activeMovement = false;
    let incompleteMovement = false;
    if (Keyboard.isDown(Keyboard.LEFT)) { direction = Directions.Left; }
    else if (Keyboard.isDown(Keyboard.RIGHT)) { direction = Directions.Right; }
    else if (Keyboard.isDown(Keyboard.UP)) { direction = Directions.Up; }
    else if (Keyboard.isDown(Keyboard.DOWN)) { direction = Directions.Down; }
	if(Keyboard.isDown(Keyboard.action) && this.player.allowMovement)
		this.handleActionButton();
    
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
        this.camera.followPlayer(this.currentMap, this.player);
        this.hasScrolled = true;
    }
	
	if(this.airship.landing || this.airship.takeoff)
	{
		this.airship.updateElevation (this.player, delta);
        this.camera.followPlayer(this.currentMap, this.player);
        this.hasScrolled = true;
	}
};

Game.handleActionButton = function()
{
	let incompleteMovement = (this.player.offsetX != 0 || this.player.offsetY != 0);
	if(Game.currentMap.overworldMap && this.airship.active == true && this.player.gridX == this.airship.gridX && this.player.gridY == this.airship.gridY && this.player.moveMethod == MoveMethod.Walk)
	{
		if(incompleteMovement && !this.airship.takeoff)
			this.player.queueAirshipBoard = true;
		else if(!incompleteMovement && this.player.queueAirshipBoard == false) // don't force a board if we're queueing a board
			this.airship.board(this.player);
	}
	else if(Game.currentMap.overworldMap && this.airship.active == true && this.player.gridX == this.airship.gridX && this.player.gridY == this.airship.gridY && this.player.moveMethod == MoveMethod.Airship)
	{
		if(incompleteMovement && !this.airship.landing)
			this.player.queueAirshipUnboard = true;
		else if(!incompleteMovement && this.player.queueAirshipUnboard == false) // don't force a board if we're queueing an unboard
			this.airship.unboard(this.player);
	}
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
		if(teleport.requirement == teleportEntryRequirement.Crown && this.player.crown == false)
		{
			console.log('No Crown :(');	
		}
		else if(teleport.requirement == teleportEntryRequirement.Cube && this.player.cube == false)
		{
			console.log('No Cube :(');	
		}
		else if(teleport.requirement == teleportEntryRequirement.Chime && this.player.chime == false)
		{
			console.log('No Chime :(');	
		}
		else if(teleport.requirement == teleportEntryRequirement.Orbs && this.player.getOrbs() == false)
		{
			console.log('Not enough orbs noob');	
		}
		else //teleport
		{
			let warp = teleport.targetMap == 'WARP';
			if(warp)
				teleport = this.currentDungeon.warpInformation;
			this.handleTeleport(warp, teleport, tileX, tileY);
		}
	}
};

Game.handleTeleport = function (warp, teleport, sourceX = 0, sourceY = 0)
{
	if(teleport.targetMap == 'WorldMap')
	{
		this.currentMap = overworldMap;
	}
	else
	{
		let dungeonInfo = dungeons[teleport.targetMap];
		if(!warp)
			dungeonInfo.storeWarpInformation(new teleportEntry('StoredWarp', this.currentMap.overworldMap ? 'WorldMap' : this.currentDungeon.mapDataName, sourceX, sourceY));
		this.currentDungeon = dungeonInfo;
		dungeonMap.tileAtlasImage[0] = Loader.getImage(dungeonInfo.tileAtlasImageName);
		dungeonMap.tileAtlasImage[1] = Loader.getImage(dungeonInfo.tileAtlasRoomImageName);
		dungeonMap.data = Loader.getMapData(dungeonInfo.mapDataName);
		dungeonMap.mapTileAtlas = dungeonInfo.mapTileAtlas;
		dungeonMap.name = dungeonInfo.mapDataName;
		this.currentMap = dungeonMap;
		this._loadCells(dungeonMap);
	}
	this.player.teleportPlayer(this.currentMap, teleport.gridX, teleport.gridY);
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
    
    for (let i = 0; i < spriteList.length ; i++) {
		let sprite = spriteList[i];
		if(sprite.active == true && sprite.mapName == this.currentMap.name)
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
					sprite.spriteMap, // image
					spriteAnimationState.startX, // source x
					0, // source y
					spriteAnimationState.width, // source width
					sprite.height, // source height
					Math.round(x),  // target x
					Math.round(y - (sprite.elevation > 0 ? (sprite.elevation) * this.camera.zoom : 0)), // target y
					sprite.width * this.camera.zoom, // target width
					sprite.height * this.camera.zoom // target height
				);
			}
    	}
    }
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
};
