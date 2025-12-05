const Formation = {
	small: 0,
	large: 1,
	mix: 2,
	fiend: 3,
	chaos: 4,
};

const Target = {
	Enemies: 1,
	Enemy: 2,
	Self: 4,
	Party: 8,
	Ally: 16
}

const partyTargetList = [
	0x80,
	0x81,
	0x82,
	0x83
]

const enemyTargetList = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8
]

const StatusEffect = {
	dead: 0x01,
	stone: 0x02, 
	poison: 0x04, 
	dark: 0x08,
	stop: 0x10,
	sleep: 0x20,
	mute: 0x40,
	conf: 0x80,
}

const Command = {
	Fight: 0,
	Magic: 1,
	Drink: 2,
	Item: 3,
	Run: 4,
	Ability: 5
}

const EncounterState = {
	Normal: 0,
	FirstStrike: 1,
	Ambushed: 2
}

const Action = {
	None: 0,
	UnknownCommand: 1,
	Encounter: 2,
	ChangeGold: 3,
	EquipWeapon: 4,
	UnequipWeapon: 5,
	EquipArmor: 6,
	UnequipArmor: 7,
	Heal: 8,
	Burn: 9,
	TimeTarget: 10
}

const EncounterAction = {
	Fight: 0,
	Bane: 1,
	Flee: 2
}

const randomNumbers = [
	0xAE,0xD0,0x38,0x8A,0xED,0x60,0xDB,0x72,0x5C,0x59,0x27,0xD8,0x0A,0x4A,0xF4,0x34,
	0x08,0xA9,0xC3,0x96,0x56,0x3B,0xF1,0x55,0xF8,0x6B,0x31,0xEF,0x6D,0x28,0xAC,0x41,
	0x68,0x1E,0x2A,0xC1,0xE5,0x8F,0x50,0xF5,0x3E,0x7B,0xB7,0x4C,0x14,0x39,0x12,0xCD,
	0xB2,0x62,0x8B,0x82,0x3C,0xBA,0x63,0x85,0x3A,0x17,0xB8,0x2E,0xB5,0xBE,0x20,0xCB,
	0x46,0x51,0x2C,0xCF,0x03,0x78,0x53,0x97,0x06,0x69,0xEB,0x77,0x86,0xE6,0xEA,0x74,
	0x0C,0x21,0xE2,0x40,0xD4,0x5A,0x3D,0xC7,0x2B,0x94,0xD5,0x8C,0x44,0xFD,0xEE,0xD2,
	0x43,0x00,0xBB,0xFA,0xC6,0x1D,0x98,0xA0,0xD3,0x54,0x5F,0x5E,0xDC,0xA8,0x00,0xAF,
	0x93,0xA1,0xE1,0x6C,0x04,0xDE,0xB6,0xD7,0x36,0x16,0xC5,0xC8,0xC4,0xE4,0x0F,0x02,
	0xAB,0xE8,0x33,0x99,0x73,0x11,0x6A,0x09,0x67,0xF3,0xFF,0xA2,0xDF,0x32,0x0E,0x1F,
	0x0D,0x90,0x25,0x64,0x75,0xB3,0x65,0x2F,0xC9,0xB0,0xDA,0x5D,0x9F,0xEC,0x29,0xCE,
	0xE3,0xF0,0x91,0x7A,0x58,0x45,0x24,0x1C,0x47,0xA4,0x89,0x18,0x2D,0xCC,0xBD,0x6F,
	0x80,0xF6,0x81,0x22,0xE9,0x07,0x70,0xFB,0xDD,0xAD,0x35,0xA6,0x61,0xB4,0xA3,0xFE,
	0xB1,0x30,0x4B,0x15,0x48,0x6E,0x4F,0x5B,0x13,0x9C,0x83,0x92,0x01,0xC2,0x19,0x7F,
	0x1A,0x1B,0x71,0xB9,0x3F,0x4E,0x9B,0xBF,0x9E,0x87,0x0B,0x10,0x57,0xF2,0x26,0x79,
	0x9A,0x05,0xC0,0xE0,0xF7,0x4D,0x7D,0xCA,0x52,0x9D,0xF9,0xBC,0xAA,0xFC,0x8D,0x7E,
	0xD1,0xA5,0x42,0xE7,0xD6,0x76,0xA7,0x84,0x8E,0x66,0x7C,0x23,0x88,0x37,0x49,0xD9
];

const targetTable = {
	1: [15, 18, 19, 20, 23, 25, 28, 31, 36, 37, 38, 40, 43, 48, 49, 51, 52, 54, 56, 59, 61, 62, 64, 68, 72, 75, 77, 78, 79, 83, 85, 88, 90, 91, 92, 94, 95, 96, 99, 100, 101, 103, 104, 105, 109, 110, 112, 113, 114, 115, 118, 119, 120, 123, 124, 125, 126, 129, 130, 132, 138, 139, 140, 141, 146, 150, 153, 154, 155, 157, 158, 160, 161, 162, 163, 170, 171, 174, 175, 177, 178, 179, 181, 184, 185, 186, 188, 190, 191, 192, 193, 202, 203, 204, 206, 212, 215, 216, 217, 218, 222, 225, 227, 228, 229, 232, 234, 235, 236, 237, 238, 239, 241, 242, 244, 245, 247, 248, 249, 253, 0, 1, 2, 4, 5, 7, 12],
	2: [14, 21, 24, 26, 29, 32, 33, 39, 42, 44, 50, 55, 65, 66, 70, 71, 74, 76, 80, 84, 86, 93, 97, 106, 107, 108, 116, 133, 135, 137, 148, 149, 151, 156, 164, 165, 166, 169, 176, 183, 189, 195, 197, 198, 199, 200, 208, 211, 214, 221, 224, 230, 231, 233, 240, 243, 246, 250, 251, 255, 6, 8, 9, 10],
	3: [16, 22, 27, 30, 35, 41, 46, 53, 57, 60, 67, 82, 87, 89, 121, 131, 142, 147, 152, 159, 167, 173, 180, 187, 194, 213, 223, 252, 254, 3, 11],
	4: [17, 34, 45, 47, 58, 63, 69, 73, 81, 98, 102, 111, 117, 122, 127, 128, 134, 136, 143, 144, 145, 168, 172, 182, 196, 201, 205, 207, 209, 210, 219, 220, 226, 13]
}

const formationRNGPrimaryIncrement = {
	[Formation.small]: 54,
	[Formation.large]: 72,
	[Formation.mix]: 72,
	[Formation.fiend]: 180,
	[Formation.chaos]: 180,
};

const formationRNGSecondaryIncrement = {
	[Formation.small]: 54,
	[Formation.large]: 72,
	[Formation.mix]: 135,
	[Formation.fiend]: 180,
	[Formation.chaos]: 180,
};

// HoldA on fiends in laters turns adds 3 if a direction button isn't pressed, could be useful
const formationRNGHoldA = {
	[Formation.small]: 6,
	[Formation.large]: 6,
	[Formation.mix]: 6,
	[Formation.fiend]: 1,
	[Formation.chaos]: 1,
};

const formationTargetOrder = {
	[Formation.small]: [1, 0, 2, 4, 3, 5, 7, 6, 8],
	[Formation.large]: [0, 1, 2, 3],
	[Formation.mix]: [0, 1, 3, 2, 4, 6, 5, 7],
	[Formation.fiend]: [0],
	[Formation.chaos]: [0],
}

function WeaponInfo(name, hit, attack, crit, spell)
{
	this.name = name;
	this.hit = hit;
	this.attack = attack;
	this.crit = crit;
	this.spell = spell;
}

const Slot = {
    Armor: 0,
    Shield: 1,
    Helmet: 2,
    Glove: 3,
};

function ArmorInfo(name, evade, absorb, resistances, spell, slot)
{
	this.name = name;
	this.evade = evade;
	this.absorb = absorb;
	this.resistances = resistances;
	this.spell = spell;
	this.slot = slot;
}

const weapons = {
	'WoodenNunchucks': new WeaponInfo('Wooden Nunchucks', 0x00, 0x0c, 0x01, 0x00),
	'SmallKnife': new WeaponInfo('Small Knife', 0x0a, 0x05, 0x02, 0x00),
	'WoodenStaff': new WeaponInfo('Wooden Staff', 0x00, 0x06, 0x03, 0x00),
	'Rapier': new WeaponInfo('Rapier', 0x05, 0x09, 0x04, 0x00),
	'IronHammer': new WeaponInfo('Iron Hammer', 0x00, 0x09, 0x05, 0x00),
	'ShortSword': new WeaponInfo('Short Sword', 0x0a, 0x0f, 0x06, 0x00),
	'HandAxe': new WeaponInfo('Hand Axe', 0x05, 0x10, 0x07, 0x00),
	'Scimtar': new WeaponInfo('Scimtar', 0x0a, 0x0a, 0x08, 0x00),
	'IronNunchucks': new WeaponInfo('Iron Nunchucks', 0x00, 0x10, 0x09, 0x00),
	'LargeKnife': new WeaponInfo('Large Knife', 0x0a, 0x07, 0x0a, 0x00),
	'IronStaff': new WeaponInfo('Iron Staff', 0x00, 0x0e, 0x0b, 0x00),
	'Sabre': new WeaponInfo('Sabre', 0x05, 0x0d, 0x0c, 0x00),
	'LongSword': new WeaponInfo('Long Sword', 0x0a, 0x14, 0x0d, 0x00),
	'GreatAxe': new WeaponInfo('Great Axe', 0x05, 0x16, 0x0e, 0x00),
	'Falchon': new WeaponInfo('Falchon', 0x0a, 0x0f, 0x0f, 0x00),
	'SilverKnife': new WeaponInfo('Silver Knife', 0x0f, 0x0a, 0x10, 0x00),
	'SilverSword': new WeaponInfo('Silver Sword', 0x0f, 0x17, 0x11, 0x00),
	'SilverHammer': new WeaponInfo('Silver Hammer', 0x05, 0x0c, 0x12, 0x00),
	'SilverAxe': new WeaponInfo('Silver Axe', 0x0a, 0x19, 0x13, 0x00),
	'FlameSword': new WeaponInfo('Flame Sword', 0x14, 0x1a, 0x14, 0x00),
	'IceSword': new WeaponInfo('Ice Sword', 0x19, 0x1d, 0x15, 0x00),
	'DragonSword': new WeaponInfo('Dragon Sword', 0x0f, 0x13, 0x16, 0x00),
	'GiantSword': new WeaponInfo('Giant Sword', 0x14, 0x15, 0x17, 0x00),
	'SunSword': new WeaponInfo('Sun Sword', 0x1e, 0x20, 0x18, 0x00),
	'CoralSword': new WeaponInfo('Coral Sword', 0x0f, 0x13, 0x19, 0x00),
	'WereSword': new WeaponInfo('Were Sword', 0x0f, 0x12, 0x1a, 0x00),
	'RuneSword': new WeaponInfo('Rune Sword', 0x0f, 0x12, 0x1b, 0x00),
	'PowerStaff': new WeaponInfo('Power Staff', 0x00, 0x0c, 0x1c, 0x00),
	'LightAxe': new WeaponInfo('Light Axe', 0x0f, 0x1c, 0x1d, 0x12),
	'HealStaff': new WeaponInfo('Heal Staff', 0x00, 0x06, 0x1e, 0x14),
	'MageStaff ': new WeaponInfo('Mage Staff ', 0x0a, 0x0c, 0x1f, 0x15),
	'Defense': new WeaponInfo('Defense', 0x23, 0x1e, 0x20, 0x04),
	'WizardStaff': new WeaponInfo('Wizard Staff', 0x0f, 0x0f, 0x21, 0x1f),
	'Vorpal': new WeaponInfo('Vorpal', 0x19, 0x18, 0x22, 0x00),
	'CatClaw': new WeaponInfo('CatClaw', 0x23, 0x16, 0x23, 0x00),
	'ThorsHammer': new WeaponInfo('Thor\'s Hammer', 0x0f, 0x12, 0x24, 0x17),
	'BaneSword': new WeaponInfo('Bane Sword', 0x14, 0x16, 0x25, 0x26),
	'Katana': new WeaponInfo('Katana', 0x23, 0x21, 0x26, 0x00),
	'XCalbur': new WeaponInfo('XCalbur', 0x23, 0x2d, 0x27, 0x00),
	'Masmune': new WeaponInfo('Masmune', 0x32, 0x38, 0x28, 0x00),
};

const armor = {
	'Cloth': new ArmorInfo('Cloth', 0x02, 0x01, 0x00, 0x00, 0x00),
	'WoodenArmor': new ArmorInfo('Wooden Armor', 0x08, 0x04, 0x00, 0x00, 0x00),
	'ChainArmor': new ArmorInfo('Chain Armor', 0x0f, 0x0f, 0x00, 0x00, 0x00),
	'IronArmor': new ArmorInfo('Iron Armor', 0x17, 0x18, 0x00, 0x00, 0x00),
	'SteelArmor': new ArmorInfo('Steel Armor', 0x21, 0x22, 0x00, 0x00, 0x00),
	'SilverArmor': new ArmorInfo('Silver Armor', 0x08, 0x12, 0x00, 0x00, 0x00),
	'FlameArmor': new ArmorInfo('Flame Armor', 0x0a, 0x22, 0x20, 0x00, 0x00),
	'IceArmor': new ArmorInfo('Ice Armor', 0x0a, 0x22, 0x10, 0x00, 0x00),
	'OpalArmor': new ArmorInfo('Opal Armor', 0x0a, 0x2a, 0x40, 0x00, 0x00),
	'DragonArmor': new ArmorInfo('Dragon Armor', 0x0a, 0x2a, 0x70, 0x00, 0x00),
	'CopperBracelet': new ArmorInfo('Copper Bracelet', 0x01, 0x04, 0x00, 0x00, 0x00),
	'SilverBracelet': new ArmorInfo('Silver Bracelet', 0x01, 0x0f, 0x00, 0x00, 0x00),
	'GoldBracelet': new ArmorInfo('Gold Bracelet', 0x01, 0x18, 0x00, 0x00, 0x00),
	'OpalBracelet': new ArmorInfo('Opal Bracelet', 0x01, 0x22, 0x00, 0x00, 0x00),
	'WhiteShirt': new ArmorInfo('White Shirt', 0x02, 0x18, 0x18, 0x2c, 0x00),
	'BlackShirt': new ArmorInfo('Black Shirt', 0x02, 0x18, 0x24, 0x20, 0x00),
	'WoodenShield': new ArmorInfo('Wooden Shield', 0x00, 0x02, 0x00, 0x00, 0x01),
	'IronShield': new ArmorInfo('Iron Shield', 0x00, 0x04, 0x00, 0x00, 0x01),
	'SilverShield': new ArmorInfo('Silver Shield', 0x00, 0x08, 0x00, 0x00, 0x01),
	'FlameShield': new ArmorInfo('Flame Shield', 0x00, 0x0c, 0x20, 0x00, 0x01),
	'IceShield': new ArmorInfo('Ice Shield', 0x00, 0x0c, 0x10, 0x00, 0x01),
	'OpalShield': new ArmorInfo('Opal Shield', 0x00, 0x10, 0x40, 0x00, 0x01),
	'AegisShield': new ArmorInfo('Aegis Shield', 0x00, 0x10, 0x02, 0x00, 0x01),
	'Buckler': new ArmorInfo('Buckler', 0x00, 0x02, 0x00, 0x00, 0x01),
	'ProCape': new ArmorInfo('ProCape', 0x02, 0x08, 0x00, 0x00, 0x01),
	'Cap': new ArmorInfo('Cap', 0x01, 0x01, 0x00, 0x00, 0x02),
	'WoodenHelmet': new ArmorInfo('Wooden Helmet', 0x03, 0x03, 0x00, 0x00, 0x02),
	'IronHelmet': new ArmorInfo('Iron Helmet', 0x05, 0x05, 0x00, 0x00, 0x02),
	'SilverHelmet': new ArmorInfo('Silver Helmet', 0x03, 0x06, 0x00, 0x00, 0x02),
	'OpalHelmet': new ArmorInfo('Opal Helmet', 0x03, 0x08, 0x00, 0x00, 0x02),
	'HealHelmet': new ArmorInfo('Heal Helmet', 0x03, 0x06, 0x00, 0x14, 0x02),
	'Ribbon': new ArmorInfo('Ribbon', 0x01, 0x01, 0xff, 0x00, 0x02),
	'Gloves': new ArmorInfo('Gloves', 0x01, 0x01, 0x00, 0x00, 0x03),
	'CopperGauntlet': new ArmorInfo('Copper Gauntlet', 0x03, 0x02, 0x00, 0x00, 0x03),
	'IronGauntlet': new ArmorInfo('Iron Gauntlet', 0x05, 0x04, 0x00, 0x00, 0x03),
	'SilverGauntlet': new ArmorInfo('Silver Gauntlet', 0x03, 0x06, 0x00, 0x00, 0x03),
	'ZeusGauntlet': new ArmorInfo('Zeus Gauntlet', 0x03, 0x06, 0x00, 0x17, 0x03),
	'PowerGauntlet': new ArmorInfo('Power Gauntlet', 0x03, 0x06, 0x00, 0x37, 0x03),
	'OpalGauntlet': new ArmorInfo('Opal Gauntlet', 0x03, 0x08, 0x00, 0x00, 0x03),
	'ProRing': new ArmorInfo('ProRing', 0x01, 0x08, 0x08, 0x00, 0x03),
};

function attackResult(message, damage, status)
{
	this.Result = message;
	this.Damage = damage;
	this.Status = status;
}

attackResult.prototype.toString  = function attackResultToString()
{
	return this.Result + ' for ' + this.Damage + (this.Status ? '(Status)' : ''); 
}

const SpellNames = [
	'NONE',
	'CURE',
	'HARM',
	'FOG',
	'RUSE',
	'FIRE',
	'SLEP',
	'LOCK',
	'LIT',
	'LAMP',
	'MUTE',
	'ALIT',
	'INVS',
	'ICE',
	'DARK',
	'TMPR',
	'SLOW',
	'CUR2',
	'HRM2',
	'AFIR',
	'HEAL',
	'FIR2',
	'HOLD',
	'LIT2',
	'LOK2',
	'PURE',
	'FEAR',
	'AICE',
	'AMUT',
	'SLP2',
	'FAST',
	'CONF',
	'ICE2',
	'CUR3',
	'LIFE',
	'HRM3',
	'HEL2',
	'FIR3',
	'BANE',
	'WARP',
	'SLO2',
	'SOFT',
	'EXIT',
	'FOG2',
	'INV2',
	'LIT3',
	'RUB',
	'QAKE',
	'STUN',
	'CUR4',
	'HRM4',
	'ARUB',
	'HEL3',
	'ICE3',
	'BRAK',
	'SABR',
	'BLND',
	'LIF2',
	'FADE',
	'WALL',
	'XFER',
	'NUKE',
	'STOP',
	'ZAP!',
	'XXXX',
	'HEAL Potion',
	'PURE Potion',
];

const AbilityNames = [
	'FROST',
	'HEAT',
	'GLANCE',
	'GAZE',
	'FLASH',
	'SCORCH',
	'CRACK',
	'SQUINT',
	'STARE',
	'GLARE',
	'BLIZZARD',
	'BLAZE',
	'INFERNO',
	'CREMATE',
	'POISON',
	'TRANCE',
	'POISON2',
	'THUNDER',
	'TOXIC',
	'SNORTING',
	'NUCLEAR',
	'INK',
	'STINGER',
	'DAZZLE',
	'SWIRL',
	'TORNADO',
];

function SpellInfo(name, hit, strength, element, target, effect)
{
	this.name = name;
	this.hit = hit;
	this.strength = strength;
	this.element = element;
	this.target = target;
	this.effect = effect;
}

const spells = {
	'CURE': new SpellInfo('CURE', 0x00, 0x10, 0x00, 0x10, 0x07),
	'HARM': new SpellInfo('HARM', 0x18, 0x14, 0x00, 0x01, 0x02),
	'FOG': new SpellInfo('FOG', 0x00, 0x08, 0x00, 0x10, 0x09),
	'RUSE': new SpellInfo('RUSE', 0x00, 0x50, 0x00, 0x04, 0x10),
	'FIRE': new SpellInfo('FIRE', 0x18, 0x0a, 0x10, 0x02, 0x01),
	'SLEP': new SpellInfo('SLEP', 0x18, 0x20, 0x01, 0x01, 0x03),
	'LOCK': new SpellInfo('LOCK', 0x40, 0x14, 0x00, 0x02, 0x0e),
	'LIT': new SpellInfo('LIT', 0x18, 0x0a, 0x40, 0x02, 0x01),
	'LAMP': new SpellInfo('LAMP', 0x00, 0x08, 0x00, 0x10, 0x08),
	'MUTE': new SpellInfo('MUTE', 0x40, 0x40, 0x01, 0x01, 0x03),
	'ALIT': new SpellInfo('ALIT', 0x00, 0x40, 0x00, 0x08, 0x0a),
	'INVS': new SpellInfo('INVS', 0x00, 0x28, 0x00, 0x10, 0x10),
	'ICE': new SpellInfo('ICE', 0x18, 0x14, 0x20, 0x02, 0x01),
	'DARK': new SpellInfo('DARK', 0x18, 0x08, 0x01, 0x01, 0x03),
	'TMPR': new SpellInfo('TMPR', 0x00, 0x0e, 0x00, 0x10, 0x0d),
	'SLOW': new SpellInfo('SLOW', 0x40, 0x00, 0x01, 0x01, 0x04),
	'CUR2': new SpellInfo('CUR2', 0x00, 0x21, 0x00, 0x10, 0x07),
	'HRM2': new SpellInfo('HRM2', 0x18, 0x28, 0x00, 0x01, 0x02),
	'AFIR': new SpellInfo('AFIR', 0x00, 0x10, 0x00, 0x08, 0x0a),
	'HEAL': new SpellInfo('HEAL', 0x00, 0x0c, 0x00, 0x08, 0x07),
	'FIR2': new SpellInfo('FIR2', 0x18, 0x1e, 0x10, 0x01, 0x01),
	'HOLD': new SpellInfo('HOLD', 0x40, 0x10, 0x01, 0x02, 0x03),
	'LIT2': new SpellInfo('LIT2', 0x18, 0x1e, 0x40, 0x01, 0x01),
	'LOK2': new SpellInfo('LOK2', 0x40, 0x14, 0x00, 0x01, 0x10),
	'PURE': new SpellInfo('PURE', 0x00, 0x04, 0x00, 0x10, 0x08),
	'FEAR': new SpellInfo('FEAR', 0x18, 0x28, 0x01, 0x01, 0x05),
	'AICE': new SpellInfo('AICE', 0x00, 0x20, 0x00, 0x08, 0x0a),
	'AMUT': new SpellInfo('AMUT', 0x00, 0x40, 0x00, 0x10, 0x08),
	'SLP2': new SpellInfo('SLP2', 0x40, 0x20, 0x00, 0x02, 0x03),
	'FAST': new SpellInfo('FAST', 0x00, 0x00, 0x00, 0x10, 0x0c),
	'CONF': new SpellInfo('CONF', 0x40, 0x80, 0x01, 0x01, 0x03),
	'ICE2': new SpellInfo('ICE2', 0x18, 0x28, 0x20, 0x01, 0x01),
	'CUR3': new SpellInfo('CUR3', 0x00, 0x42, 0x00, 0x10, 0x07),
	'LIFE': new SpellInfo('LIFE', 0xff, 0x00, 0x00, 0x10, 0x00),
	'HRM3': new SpellInfo('HRM3', 0x18, 0x3c, 0x00, 0x01, 0x02),
	'HEL2': new SpellInfo('HEL2', 0x00, 0x30, 0x00, 0x08, 0x07),
	'FIR3': new SpellInfo('FIR3', 0x18, 0x32, 0x10, 0x01, 0x01),
	'BANE': new SpellInfo('BANE', 0x28, 0x01, 0x02, 0x01, 0x03),
	'WARP': new SpellInfo('WARP', 0xff, 0x00, 0x00, 0x08, 0x00),
	'SLO2': new SpellInfo('SLO2', 0x40, 0x00, 0x00, 0x02, 0x04),
	'SOFT': new SpellInfo('SOFT', 0xff, 0x00, 0x00, 0x10, 0x00),
	'EXIT': new SpellInfo('EXIT', 0xff, 0x00, 0x00, 0x08, 0x00),
	'FOG2': new SpellInfo('FOG2', 0x00, 0x0c, 0x00, 0x08, 0x09),
	'INV2': new SpellInfo('INV2', 0x00, 0x28, 0x00, 0x08, 0x10),
	'LIT3': new SpellInfo('LIT3', 0x18, 0x3c, 0x40, 0x01, 0x01),
	'RUB': new SpellInfo('RUB', 0x18, 0x01, 0x08, 0x02, 0x03),
	'QAKE': new SpellInfo('QAKE', 0x28, 0x01, 0x80, 0x01, 0x03),
	'STUN': new SpellInfo('STUN', 0x00, 0x10, 0x01, 0x02, 0x12),
	'CUR4': new SpellInfo('CUR4', 0x00, 0x00, 0x00, 0x10, 0x0f),
	'HRM4': new SpellInfo('HRM4', 0x30, 0x50, 0x00, 0x01, 0x02),
	'ARUB': new SpellInfo('ARUB', 0x00, 0x89, 0x00, 0x08, 0x0a),
	'HEL3': new SpellInfo('HEL3', 0x30, 0x30, 0x00, 0x08, 0x07),
	'ICE3': new SpellInfo('ICE3', 0x18, 0x46, 0x20, 0x01, 0x01),
	'BRAK': new SpellInfo('BRAK', 0x40, 0x02, 0x02, 0x02, 0x03),
	'SABR': new SpellInfo('SABR', 0x00, 0x10, 0x00, 0x04, 0x0d),
	'BLND': new SpellInfo('BLND', 0x00, 0x08, 0x01, 0x02, 0x12),
	'LIF2': new SpellInfo('LIF2', 0xff, 0x00, 0x00, 0x10, 0x00),
	'FADE': new SpellInfo('FADE', 0x6b, 0x50, 0x00, 0x01, 0x01),
	'WALL': new SpellInfo('WALL', 0x00, 0xff, 0x00, 0x10, 0x0a),
	'XFER': new SpellInfo('XFER', 0x6b, 0x00, 0x00, 0x02, 0x11),
	'NUKE': new SpellInfo('NUKE', 0x6b, 0x64, 0x00, 0x01, 0x01),
	'STOP': new SpellInfo('STOP', 0x30, 0x10, 0x04, 0x01, 0x03),
	'ZAP!': new SpellInfo('ZAP!', 0x20, 0x01, 0x04, 0x01, 0x03),
	'XXXX': new SpellInfo('XXXX', 0x00, 0x01, 0x08, 0x02, 0x12),
	'HEAL Potion': new SpellInfo('HEAL Potion', 0x00, 0x10, 0x00, 0x10, 0x07),
	'PURE Potion': new SpellInfo('PURE Potion', 0x00, 0x04, 0x00, 0x10, 0x08),
	'FROST': new SpellInfo('FROST', 0x20, 0x18, 0x20, 0x01, 0x01),
	'HEAT': new SpellInfo('HEAT', 0x20, 0x0c, 0x10, 0x01, 0x01),
	'GLANCE': new SpellInfo('GLANCE', 0x05, 0x02, 0x02, 0x02, 0x03),
	'GAZE': new SpellInfo('GAZE', 0x00, 0x10, 0x01, 0x02, 0x03),
	'FLASH': new SpellInfo('FLASH', 0x18, 0x08, 0x01, 0x01, 0x03),
	'SCORCH': new SpellInfo('SCORCH', 0x20, 0x07, 0x10, 0x01, 0x01),
	'CRACK': new SpellInfo('CRACK', 0x10, 0x01, 0x80, 0x01, 0x03),
	'SQUINT': new SpellInfo('SQUINT', 0x00, 0x01, 0x08, 0x02, 0x03),
	'STARE': new SpellInfo('STARE', 0x18, 0x11, 0x00, 0x02, 0x01),
	'GLARE': new SpellInfo('GLARE', 0x10, 0x01, 0x04, 0x02, 0x03),
	'BLIZZARD': new SpellInfo('BLIZZARD', 0x20, 0x32, 0x20, 0x01, 0x01),
	'BLAZE': new SpellInfo('BLAZE', 0x20, 0x40, 0x10, 0x01, 0x01),
	'INFERNO': new SpellInfo('INFERNO', 0x20, 0x60, 0x10, 0x01, 0x01),
	'CREMATE': new SpellInfo('CREMATE', 0x20, 0x18, 0x10, 0x01, 0x01),
	'POISON': new SpellInfo('POISON', 0x05, 0x02, 0x02, 0x01, 0x03),
	'TRANCE': new SpellInfo('TRANCE', 0x00, 0x10, 0x00, 0x01, 0x03),
	'POISON2': new SpellInfo('POISON', 0x20, 0x44, 0x02, 0x01, 0x01),
	'THUNDER': new SpellInfo('THUNDER', 0x20, 0x4c, 0x40, 0x01, 0x01),
	'TOXIC': new SpellInfo('TOXIC', 0x00, 0x01, 0x08, 0x01, 0x03),
	'SNORTING': new SpellInfo('SNORTING', 0x18, 0x08, 0x01, 0x02, 0x03),
	'NUCLEAR': new SpellInfo('NUCLEAR', 0x30, 0x50, 0x00, 0x01, 0x01),
	'INK': new SpellInfo('INK', 0x18, 0x08, 0x01, 0x01, 0x03),
	'STINGER': new SpellInfo('STINGER', 0x00, 0x04, 0x02, 0x01, 0x03),
	'DAZZLE': new SpellInfo('DAZZLE', 0x20, 0x10, 0x01, 0x02, 0x03),
	'SWIRL': new SpellInfo('SWIRL', 0x20, 0x40, 0x00, 0x01, 0x01),
	'TORNADO': new SpellInfo('TORNADO', 0x20, 0x40, 0x00, 0x01, 0x01),
};

function MonsterAI(magicChance, abilityChance, magicList, abilityList)
{
	this.magicChance = magicChance;
	this.abilityChance = abilityChance;
	this.magicList = magicList;
	this.abilityList = abilityList;
}

const monsterAI = [
	new MonsterAI(0x00, 0x20, [], [0x00, 0x00, 0x00, 0x00]),
	new MonsterAI(0x00, 0x20, [], [0x01, 0x01, 0x01, 0x01]),
	new MonsterAI(0x00, 0x40, [], [0x02, 0x02, 0x02, 0x02]),
	new MonsterAI(0x00, 0x80, [], [0x03, 0x03, 0x03, 0x03]),
	new MonsterAI(0x00, 0x40, [], [0x03, 0x04, 0x03, 0x04]),
	new MonsterAI(0x00, 0x40, [], [0x05, 0x05, 0x05, 0x05]),
	new MonsterAI(0x40, 0x00, [0x03, 0x0d, 0x05, 0x15, 0x1f], []),
	new MonsterAI(0x00, 0x40, [], [0x06, 0x06, 0x06, 0x06]),
	new MonsterAI(0x50, 0x50, [0x3f, 0x35, 0x2d, 0x16, 0x15, 0x09, 0x0f, 0x05], [0x02, 0x07, 0x03, 0x08]),
	new MonsterAI(0x40, 0x40, [0x3d, 0x3e, 0x3b, 0x35, 0x2d, 0x15, 0x09, 0x0f], [0x09, 0x09, 0x09, 0x09]),
	new MonsterAI(0x60, 0x00, [0x14, 0x0f, 0x0d, 0x05, 0x04, 0x07, 0x00, 0x05], []),
	new MonsterAI(0x00, 0x20, [], [0x17, 0x17, 0x17, 0x17]),
	new MonsterAI(0x20, 0x20, [0x12, 0x09, 0x1f, 0x1f, 0x16, 0x16, 0x14, 0x14], [0x17, 0x17, 0x17, 0x17]),
	new MonsterAI(0x40, 0x00, [0x14, 0x15, 0x04, 0x04], []),
	new MonsterAI(0x00, 0x40, [], [0x0a, 0x0a, 0x0a]),
	new MonsterAI(0x00, 0x40, [], [0x0b, 0x0b, 0x0b]),
	new MonsterAI(0x00, 0x20, [], [0x07, 0x07, 0x07, 0x07]),
	new MonsterAI(0x00, 0x40, [], [0x0d, 0x0d]),
	new MonsterAI(0x60, 0x00, [0x16, 0x15, 0x0f, 0x0d, 0x07, 0x06, 0x05, 0x07], []),
	new MonsterAI(0x60, 0x00, [0x03, 0x09, 0x0f, 0x0d, 0x05, 0x04, 0x07, 0x13], []),
	new MonsterAI(0x00, 0x40, [], [0x0d, 0x0d, 0x0d]),
	new MonsterAI(0x00, 0x40, [], [0x0d, 0x0e, 0x0d, 0x0e]),
	new MonsterAI(0x00, 0x40, [], [0x0f, 0x0f, 0x0f, 0x0f]),
	new MonsterAI(0x00, 0x40, [], [0x10, 0x10, 0x10]),
	new MonsterAI(0x00, 0x40, [], [0x11, 0x11, 0x11]),
	new MonsterAI(0x20, 0x00, [0x1d], []),
	new MonsterAI(0x30, 0x00, [0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f], []),
	new MonsterAI(0x00, 0x10, [], [0x12, 0x12, 0x12, 0x12]),
	new MonsterAI(0x20, 0x00, [0x3b, 0x3c, 0x3b, 0x3f, 0x37], []),
	new MonsterAI(0x40, 0x00, [0x2d, 0x2c, 0x24, 0x25, 0x27, 0x24, 0x2f, 0x2c], []),
	new MonsterAI(0x30, 0x00, [0x3a, 0x3b, 0x33, 0x2a, 0x2b, 0x30, 0x23, 0x20], []),
	new MonsterAI(0x00, 0x20, [], [0x13, 0x13, 0x13, 0x13]),
	new MonsterAI(0x00, 0x20, [], [0x14, 0x14, 0x14, 0x14]),
	new MonsterAI(0x00, 0x40, [], [0x16, 0x16, 0x16, 0x16]),
	new MonsterAI(0x60, 0x00, [0x1f, 0x1c, 0x1d, 0x16, 0x15, 0x14, 0x0f, 0x05], []),
	new MonsterAI(0x60, 0x00, [0x3c, 0x3d, 0x3e, 0x3f, 0x3c, 0x3d, 0x3e, 0x3f], []),
	new MonsterAI(0x30, 0x00, [0x14, 0x0d, 0x14, 0x0d, 0x14, 0x15, 0x14, 0x15], []),
	new MonsterAI(0x30, 0x00, [0x24, 0x2d, 0x24, 0x2d, 0x24, 0x2f, 0x24, 0x2f], []),
	new MonsterAI(0x00, 0x20, [], [0x15, 0x15, 0x15, 0x15]),
	new MonsterAI(0x30, 0x20, [0x16, 0x16, 0x16, 0x16, 0x16, 0x16, 0x16, 0x16], [0x15, 0x15, 0x15, 0x15]),
	new MonsterAI(0x00, 0x40, [], [0x11, 0x10, 0x0a, 0x0b]),
	new MonsterAI(0x40, 0x40, [0x25, 0x1f, 0x16, 0x14, 0x25, 0x1f, 0x16, 0x14], [0x11, 0x10, 0x0a, 0x0b]),
	new MonsterAI(0x40, 0x40, [0x34, 0x2c, 0x27, 0x30, 0x24, 0x1f, 0x1d, 0x3c], [0x06, 0x0c, 0x18, 0x19]),
	new MonsterAI(0x60, 0x00, [0x2d, 0x27, 0x1d, 0x14, 0x16, 0x0f, 0x0d, 0x05], []),
];

function EnemyInfo(name, exp, gold, hp, morale, ai, evade, absorb, hits, hit, attack, crit, unknown, attackEffects, category, mdef, weaknesses, resistances, size)
{
	this.name = name;
	this.hp = hp;
	this.gold = gold;
	this.exp = exp;
	this.attack = attack;
	this.crit = crit;
	this.hits = hits;
	this.hit = hit;
	this.absorb = absorb;
	this.evade = evade;
	this.mdef = mdef;
	this.morale = morale;
	this.size = size;
	this.attackEffects = attackEffects;
	this.category = category;
	this.weaknesses = weaknesses;
	this.resistances = resistances;
	this.ai = ai;
}

// since enemy info is static, no need to create new instance
EnemyInfo.prototype.saveInstance = function ()
{
	return this;
};

const enemies = {
	'Imp': new EnemyInfo('Imp', 0x0006, 0x0006, 0x0008, 0x6a, 0xff, 0x06, 0x04, 0x01, 0x02, 0x04, 0x01, 0x00, 0x00, 0x04, 0x10, 0x00, 0x00, Formation.small), 
	'GrImp': new EnemyInfo('GrImp', 0x0012, 0x0012, 0x0010, 0x78, 0xff, 0x09, 0x06, 0x01, 0x04, 0x08, 0x01, 0x00, 0x00, 0x04, 0x17, 0x00, 0x00, Formation.small), 
	'Wolf': new EnemyInfo('Wolf', 0x0018, 0x0006, 0x0014, 0x69, 0xff, 0x24, 0x00, 0x01, 0x05, 0x08, 0x01, 0x00, 0x00, 0x00, 0x1c, 0x00, 0x00, Formation.small), 
	'GrWolf': new EnemyInfo('GrWolf', 0x005d, 0x0016, 0x0048, 0x6c, 0xff, 0x36, 0x00, 0x01, 0x12, 0x0e, 0x01, 0x00, 0x00, 0x00, 0x2e, 0x00, 0x00, Formation.small), 
	'WrWolf': new EnemyInfo('WrWolf', 0x0087, 0x0043, 0x0044, 0x78, 0xff, 0x2a, 0x06, 0x01, 0x11, 0x0e, 0x01, 0x02, 0x04, 0x91, 0x2d, 0x00, 0x00, Formation.small), 
	'FrWolf': new EnemyInfo('FrWolf', 0x0192, 0x00c8, 0x005c, 0xc8, 0x00, 0x36, 0x00, 0x01, 0x17, 0x19, 0x01, 0x00, 0x00, 0x00, 0x37, 0x10, 0x20, Formation.small), 
	'Iguana': new EnemyInfo('Iguana', 0x0099, 0x0032, 0x005c, 0x86, 0xff, 0x18, 0x0c, 0x01, 0x17, 0x12, 0x0a, 0x00, 0x00, 0x02, 0x37, 0x00, 0x00, Formation.small), 
	'Agama': new EnemyInfo('Agama', 0x09a8, 0x04b0, 0x0128, 0xc8, 0x01, 0x24, 0x12, 0x02, 0x4a, 0x1f, 0x01, 0x00, 0x00, 0x02, 0x8f, 0x20, 0x10, Formation.large), 
	'Sauria': new EnemyInfo('Sauria', 0x07b9, 0x0292, 0x00c4, 0xc8, 0x02, 0x18, 0x14, 0x01, 0x36, 0x1e, 0x01, 0x00, 0x00, 0x02, 0x5b, 0x00, 0x00, Formation.large), 
	'Giant': new EnemyInfo('Giant', 0x036f, 0x036f, 0x00f0, 0x88, 0xff, 0x30, 0x0c, 0x01, 0x3c, 0x26, 0x01, 0x00, 0x00, 0x04, 0x78, 0x00, 0x00, Formation.large), 
	'FrGiant': new EnemyInfo('FrGiant', 0x06d8, 0x06d8, 0x0150, 0xc8, 0xff, 0x30, 0x10, 0x01, 0x4e, 0x3c, 0x01, 0x00, 0x00, 0x04, 0x96, 0x10, 0x20, Formation.large), 
	'R.Giant': new EnemyInfo('R.Giant', 0x05e2, 0x05e2, 0x012c, 0xc8, 0xff, 0x30, 0x14, 0x01, 0x53, 0x49, 0x01, 0x00, 0x00, 0x04, 0x87, 0x20, 0x10, Formation.large), 
	'Sahag': new EnemyInfo('Sahag', 0x001e, 0x001e, 0x001c, 0x6e, 0xff, 0x48, 0x04, 0x01, 0x07, 0x0a, 0x01, 0x00, 0x00, 0x20, 0x1c, 0x40, 0x90, Formation.small), 
	'R.Sahag': new EnemyInfo('R.Sahag', 0x0069, 0x0069, 0x0040, 0x8e, 0xff, 0x4e, 0x08, 0x01, 0x10, 0x0f, 0x01, 0x00, 0x00, 0x20, 0x2e, 0x40, 0x90, Formation.small), 
	'WzSahag': new EnemyInfo('WzSahag', 0x0372, 0x0372, 0x00cc, 0xc8, 0xff, 0x60, 0x14, 0x01, 0x33, 0x2f, 0x01, 0x00, 0x00, 0x20, 0x65, 0x40, 0x90, Formation.small), 
	'Pirate': new EnemyInfo('Pirate', 0x0028, 0x0028, 0x0006, 0xff, 0xff, 0x0c, 0x00, 0x01, 0x02, 0x08, 0x01, 0x00, 0x00, 0x00, 0x0f, 0x00, 0x00, Formation.small), 
	'Kyzoku': new EnemyInfo('Kyzoku', 0x003c, 0x0078, 0x0032, 0x6a, 0xff, 0x18, 0x06, 0x01, 0x0d, 0x0e, 0x01, 0x00, 0x00, 0x00, 0x25, 0x00, 0x80, Formation.small), 
	'Shark': new EnemyInfo('Shark', 0x010b, 0x0042, 0x0078, 0x79, 0xff, 0x48, 0x00, 0x01, 0x1e, 0x16, 0x01, 0x00, 0x00, 0x20, 0x46, 0x40, 0x90, Formation.large), 
	'GrShark': new EnemyInfo('GrShark', 0x0939, 0x0258, 0x0158, 0xc8, 0xff, 0x48, 0x08, 0x01, 0x56, 0x32, 0x01, 0x00, 0x00, 0x20, 0xaa, 0x40, 0x90, Formation.large), 
	'OddEye': new EnemyInfo('OddEye', 0x002a, 0x000a, 0x000a, 0x6e, 0x03, 0x54, 0x00, 0x01, 0x02, 0x04, 0x01, 0x00, 0x00, 0x00, 0x0e, 0x40, 0x90, Formation.large), 
	'BigEye': new EnemyInfo('BigEye', 0x0e07, 0x0e07, 0x0130, 0xc8, 0x04, 0x18, 0x10, 0x02, 0x4c, 0x1e, 0x01, 0x00, 0x00, 0x20, 0x9c, 0x40, 0x90, Formation.large), 
	'Bone': new EnemyInfo('Bone', 0x0009, 0x0003, 0x000a, 0x7c, 0xff, 0x0c, 0x00, 0x01, 0x02, 0x0a, 0x01, 0x00, 0x00, 0x08, 0x11, 0x10, 0x2b, Formation.small), 
	'R.Bone': new EnemyInfo('R.Bone', 0x017a, 0x017a, 0x0090, 0x9c, 0xff, 0x2a, 0x0c, 0x01, 0x24, 0x1a, 0x01, 0x00, 0x00, 0x08, 0x4c, 0x10, 0x2b, Formation.small), 
	'Creep': new EnemyInfo('Creep', 0x003f, 0x000f, 0x0038, 0x68, 0xff, 0x18, 0x08, 0x01, 0x0e, 0x11, 0x01, 0x00, 0x00, 0x00, 0x28, 0x10, 0x00, Formation.small), 
	'Crawl': new EnemyInfo('Crawl', 0x00ba, 0x00c8, 0x0054, 0x6a, 0xff, 0x2a, 0x08, 0x08, 0x15, 0x01, 0x01, 0x01, 0x10, 0x00, 0x33, 0x00, 0x00, Formation.small), 
	'Hyena': new EnemyInfo('Hyena', 0x0120, 0x0048, 0x0078, 0x7a, 0xff, 0x30, 0x04, 0x01, 0x1e, 0x16, 0x01, 0x00, 0x00, 0x00, 0x4c, 0x00, 0x00, Formation.large), 
	'Cerebus': new EnemyInfo('Cerebus', 0x049e, 0x0258, 0x00c0, 0x92, 0x05, 0x30, 0x08, 0x01, 0x30, 0x1e, 0x01, 0x00, 0x00, 0x00, 0x67, 0x20, 0x10, Formation.large), 
	'Ogre': new EnemyInfo('Ogre', 0x00c3, 0x00c3, 0x0064, 0x74, 0xff, 0x12, 0x0a, 0x01, 0x19, 0x12, 0x01, 0x00, 0x00, 0x04, 0x41, 0x00, 0x00, Formation.large), 
	'GrOgre': new EnemyInfo('GrOgre', 0x011a, 0x012c, 0x0084, 0x7e, 0xff, 0x1e, 0x0e, 0x01, 0x21, 0x17, 0x01, 0x00, 0x00, 0x04, 0x47, 0x00, 0x00, Formation.large), 
	'WzOgre': new EnemyInfo('WzOgre', 0x02d3, 0x02d3, 0x0090, 0x86, 0x06, 0x36, 0x0a, 0x01, 0x24, 0x17, 0x01, 0x00, 0x00, 0xc4, 0x50, 0x00, 0x80, Formation.large), 
	'Asp': new EnemyInfo('Asp', 0x007b, 0x0032, 0x0038, 0x6b, 0xff, 0x1e, 0x06, 0x01, 0x0e, 0x06, 0x01, 0x02, 0x04, 0x02, 0x2e, 0x00, 0x00, Formation.small), 
	'Cobra': new EnemyInfo('Cobra', 0x00a5, 0x0032, 0x0050, 0x6e, 0xff, 0x24, 0x0a, 0x01, 0x14, 0x16, 0x1f, 0x00, 0x00, 0x02, 0x38, 0x00, 0x00, Formation.small), 
	'SeaSnake': new EnemyInfo('SeaSnake', 0x03bd, 0x0258, 0x00e0, 0xc8, 0xff, 0x30, 0x0c, 0x01, 0x38, 0x23, 0x00, 0x00, 0x00, 0x22, 0x74, 0x40, 0x90, Formation.small), 
	'Scorpion': new EnemyInfo('Scorpion', 0x00e1, 0x0046, 0x0054, 0x70, 0xff, 0x36, 0x0a, 0x02, 0x15, 0x16, 0x01, 0x02, 0x04, 0x00, 0x37, 0x00, 0x00, Formation.small), 
	'Lobster': new EnemyInfo('Lobster', 0x027f, 0x012c, 0x0094, 0xc8, 0xff, 0x3c, 0x12, 0x03, 0x25, 0x23, 0x01, 0x02, 0x04, 0x20, 0x55, 0x40, 0x90, Formation.small), 
	'Bull': new EnemyInfo('Bull', 0x01e9, 0x01e9, 0x00a4, 0x7c, 0xff, 0x30, 0x04, 0x02, 0x29, 0x16, 0x01, 0x00, 0x00, 0x00, 0x5f, 0x00, 0x00, Formation.large), 
	'ZomBull': new EnemyInfo('ZomBull', 0x041a, 0x041a, 0x00e0, 0x88, 0xff, 0x24, 0x0e, 0x01, 0x38, 0x28, 0x01, 0x00, 0x00, 0x08, 0x74, 0x10, 0x2b, Formation.large), 
	'Troll': new EnemyInfo('Troll', 0x026d, 0x026d, 0x00b8, 0x88, 0xff, 0x30, 0x0c, 0x03, 0x2e, 0x18, 0x01, 0x00, 0x00, 0x80, 0x64, 0x10, 0x00, Formation.large), 
	'SeaTroll': new EnemyInfo('SeaTroll', 0x0354, 0x0354, 0x00d8, 0xc8, 0xff, 0x30, 0x14, 0x01, 0x36, 0x28, 0x01, 0x00, 0x00, 0xa0, 0x6e, 0x40, 0x80, Formation.large), 
	'Shadow': new EnemyInfo('Shadow', 0x005a, 0x002d, 0x0032, 0x7c, 0xff, 0x24, 0x00, 0x01, 0x0d, 0x0a, 0x01, 0x01, 0x08, 0x09, 0x25, 0x10, 0xab, Formation.small), 
	'Image': new EnemyInfo('Image', 0x00e7, 0x00e7, 0x0056, 0xa0, 0xff, 0x5a, 0x04, 0x01, 0x16, 0x16, 0x01, 0x01, 0x10, 0x09, 0x34, 0x10, 0xab, Formation.small), 
	'Wraith': new EnemyInfo('Wraith', 0x01b0, 0x01b0, 0x0072, 0xa0, 0xff, 0x6c, 0x0c, 0x01, 0x1d, 0x28, 0x01, 0x01, 0x10, 0x09, 0x43, 0x10, 0xab, Formation.small), 
	'Ghost': new EnemyInfo('Ghost', 0x03de, 0x03de, 0x00b4, 0xb8, 0xff, 0x24, 0x1e, 0x01, 0x2d, 0x5d, 0x01, 0x01, 0x10, 0x09, 0x55, 0x10, 0xab, Formation.small), 
	'Zombie': new EnemyInfo('Zombie', 0x0018, 0x000c, 0x0014, 0x78, 0xff, 0x06, 0x00, 0x01, 0x05, 0x0a, 0x01, 0x00, 0x00, 0x08, 0x19, 0x10, 0xab, Formation.small), 
	'Ghoul': new EnemyInfo('Ghoul', 0x005d, 0x0032, 0x0030, 0x7c, 0xff, 0x0c, 0x06, 0x03, 0x0c, 0x08, 0x01, 0x01, 0x10, 0x08, 0x24, 0x10, 0x2b, Formation.small), 
	'Geist': new EnemyInfo('Geist', 0x0075, 0x0075, 0x0038, 0xa0, 0xff, 0x2e, 0x0a, 0x03, 0x0e, 0x08, 0x01, 0x01, 0x10, 0x08, 0x28, 0x10, 0x2b, Formation.small), 
	'Specter': new EnemyInfo('Specter', 0x0096, 0x0096, 0x0034, 0xa0, 0xff, 0x2a, 0x0c, 0x01, 0x0d, 0x14, 0x01, 0x01, 0x10, 0x08, 0x2d, 0x10, 0x2b, Formation.small), 
	'Worm': new EnemyInfo('Worm', 0x10f8, 0x03e8, 0x01c0, 0xc8, 0xff, 0x24, 0x0a, 0x01, 0x70, 0x41, 0x0a, 0x00, 0x00, 0x00, 0xc8, 0x00, 0x80, Formation.large), 
	'Sand W': new EnemyInfo('Sand W', 0x0a7b, 0x0384, 0x00c8, 0x7c, 0x07, 0x3e, 0x0e, 0x01, 0x32, 0x2e, 0x01, 0x00, 0x00, 0x00, 0x67, 0x00, 0x80, Formation.large), 
	'Grey W': new EnemyInfo('Grey W', 0x0687, 0x0190, 0x0118, 0xc8, 0xff, 0x04, 0x1f, 0x01, 0x46, 0x32, 0x01, 0x00, 0x00, 0x00, 0x8f, 0x20, 0x90, Formation.large), 
	'Eye': new EnemyInfo('Eye', 0x0c99, 0x0c99, 0x00a2, 0xc8, 0x08, 0x0c, 0x1e, 0x01, 0x2a, 0x1e, 0x01, 0x00, 0x00, 0x40, 0x5c, 0x00, 0x80, Formation.large), 
	'Phantom': new EnemyInfo('Phantom', 0x0001, 0x0001, 0x0168, 0xc8, 0x09, 0x18, 0x3c, 0x01, 0x96, 0x78, 0x28, 0x01, 0x10, 0x89, 0xa0, 0x10, 0xab, Formation.large), 
	'Medusa': new EnemyInfo('Medusa', 0x02bb, 0x02bb, 0x0044, 0x96, 0x02, 0x24, 0x0a, 0x01, 0x11, 0x14, 0x01, 0x02, 0x04, 0x00, 0x37, 0x00, 0x00, Formation.small), 
	'GrMedusa': new EnemyInfo('GrMedusa', 0x04c2, 0x04c2, 0x0060, 0xc8, 0x02, 0x48, 0x0c, 0x0a, 0x18, 0x0b, 0x01, 0x01, 0x10, 0x01, 0x46, 0x10, 0xa0, Formation.small), 
	'Catman': new EnemyInfo('Catman', 0x030c, 0x030c, 0x00a0, 0x94, 0xff, 0x30, 0x10, 0x02, 0x28, 0x1e, 0x01, 0x02, 0x04, 0x91, 0x5d, 0x00, 0x00, Formation.small), 
	'Mancat': new EnemyInfo('Mancat', 0x025b, 0x0320, 0x006e, 0x96, 0x0a, 0x3c, 0x1e, 0x03, 0x1c, 0x14, 0x01, 0x00, 0x00, 0x40, 0x3e, 0x00, 0xfb, Formation.small), 
	'Pede': new EnemyInfo('Pede', 0x04aa, 0x012c, 0x00de, 0x6f, 0xff, 0x30, 0x14, 0x01, 0x38, 0x27, 0x01, 0x02, 0x04, 0x00, 0x74, 0x00, 0x00, Formation.large), 
	'GrPede': new EnemyInfo('GrPede', 0x08c4, 0x03e8, 0x0140, 0xb0, 0xff, 0x30, 0x18, 0x01, 0x50, 0x49, 0x01, 0x00, 0x00, 0x00, 0xb9, 0x00, 0x30, Formation.large), 
	'Tiger': new EnemyInfo('Tiger', 0x01b6, 0x006c, 0x0084, 0x74, 0xff, 0x30, 0x08, 0x02, 0x21, 0x16, 0x19, 0x00, 0x00, 0x00, 0x55, 0x00, 0x00, Formation.large), 
	'Saber T': new EnemyInfo('Saber T', 0x034b, 0x01f4, 0x00c8, 0xb4, 0xff, 0x2a, 0x08, 0x02, 0x32, 0x18, 0x46, 0x00, 0x00, 0x00, 0x6a, 0x00, 0x00, Formation.large), 
	'Vampire': new EnemyInfo('Vampire', 0x04b0, 0x07d0, 0x009c, 0xc8, 0x0b, 0x48, 0x18, 0x01, 0x27, 0x4c, 0x01, 0x01, 0x10, 0x89, 0x4b, 0x10, 0xab, Formation.small), 
	'WzVamp': new EnemyInfo('WzVamp', 0x0951, 0x0bb8, 0x012c, 0xc8, 0x0c, 0x48, 0x1c, 0x01, 0x2a, 0x5a, 0x01, 0x01, 0x10, 0xc9, 0x54, 0x10, 0xab, Formation.small), 
	'Gargoyle': new EnemyInfo('Gargoyle', 0x0084, 0x0050, 0x0050, 0x84, 0xff, 0x2d, 0x08, 0x04, 0x14, 0x0c, 0x01, 0x00, 0x00, 0x01, 0x35, 0x00, 0x80, Formation.small), 
	'R.Goyle': new EnemyInfo('R.Goyle', 0x0183, 0x0183, 0x005e, 0x86, 0x0d, 0x48, 0x20, 0x04, 0x18, 0x0a, 0x01, 0x02, 0x00, 0x01, 0x7f, 0x00, 0xb0, Formation.small), 
	'Earth': new EnemyInfo('Earth', 0x0600, 0x0300, 0x0120, 0xc8, 0xff, 0x12, 0x14, 0x01, 0x48, 0x42, 0x01, 0x00, 0x00, 0x01, 0x82, 0x10, 0xeb, Formation.large), 
	'Fire': new EnemyInfo('Fire', 0x0654, 0x0320, 0x0114, 0xc8, 0xff, 0x2a, 0x14, 0x01, 0x45, 0x32, 0x01, 0x00, 0x00, 0x01, 0x82, 0x20, 0x9b, Formation.large), 
	'Frost D': new EnemyInfo('Frost D', 0x06a5, 0x07d0, 0x00c8, 0xc8, 0x0e, 0x78, 0x08, 0x01, 0x32, 0x35, 0x01, 0x00, 0x00, 0x02, 0xc4, 0x50, 0xa2, Formation.large), 
	'Red D': new EnemyInfo('Red D', 0x0b58, 0x0fa0, 0x00f8, 0xc8, 0x0f, 0x60, 0x1e, 0x01, 0x3e, 0x4b, 0x01, 0x00, 0x00, 0x02, 0xc8, 0x22, 0x90, Formation.large), 
	'ZombieD': new EnemyInfo('ZombieD', 0x091b, 0x03e7, 0x010c, 0xc8, 0xff, 0x18, 0x1e, 0x01, 0x43, 0x38, 0x01, 0x01, 0x10, 0x0a, 0x87, 0x10, 0xab, Formation.large), 
	'Scum': new EnemyInfo('Scum', 0x0054, 0x0014, 0x0018, 0x7c, 0xff, 0x00, 0xff, 0x01, 0x01, 0x01, 0x01, 0x02, 0x04, 0x00, 0x24, 0x30, 0xcb, Formation.small), 
	'Muck': new EnemyInfo('Muck', 0x00ff, 0x0046, 0x004c, 0x98, 0xff, 0x04, 0x07, 0x01, 0x13, 0x1e, 0x01, 0x00, 0x00, 0x00, 0x37, 0x40, 0xbb, Formation.small), 
	'Ooze': new EnemyInfo('Ooze', 0x00fc, 0x0046, 0x004c, 0x90, 0xff, 0x06, 0x06, 0x01, 0x13, 0x20, 0x01, 0x00, 0x00, 0x00, 0x37, 0x30, 0xcb, Formation.small), 
	'Slime': new EnemyInfo('Slime', 0x044d, 0x0384, 0x009c, 0xc8, 0xff, 0x18, 0xff, 0x01, 0x27, 0x31, 0x01, 0x02, 0x04, 0x00, 0x55, 0x10, 0xeb, Formation.small), 
	'Spider': new EnemyInfo('Spider', 0x001e, 0x0008, 0x001c, 0x6d, 0xff, 0x1e, 0x00, 0x01, 0x07, 0x0a, 0x01, 0x00, 0x00, 0x00, 0x1c, 0x00, 0x00, Formation.small), 
	'Arachnid': new EnemyInfo('Arachnid', 0x008d, 0x0032, 0x0040, 0x6f, 0xff, 0x18, 0x0c, 0x01, 0x10, 0x05, 0x01, 0x02, 0x04, 0x00, 0x2e, 0x00, 0x00, Formation.small), 
	'Manticor': new EnemyInfo('Manticor', 0x0525, 0x028a, 0x00a4, 0x96, 0x21, 0x48, 0x08, 0x02, 0x29, 0x16, 0x01, 0x00, 0x00, 0x00, 0x5f, 0x00, 0x80, Formation.large), 
	'Sphinx': new EnemyInfo('Sphinx', 0x0488, 0x0488, 0x00e4, 0x84, 0xff, 0x78, 0x0c, 0x03, 0x39, 0x17, 0x01, 0x00, 0x00, 0x00, 0x73, 0x00, 0x80, Formation.large), 
	'R.Ankylo': new EnemyInfo('R.Ankylo', 0x0594, 0x012c, 0x0100, 0x92, 0xff, 0x38, 0x26, 0x03, 0x40, 0x3c, 0x01, 0x00, 0x00, 0x00, 0x82, 0x00, 0x00, Formation.large), 
	'Ankylo': new EnemyInfo('Ankylo', 0x0a32, 0x0001, 0x0160, 0x90, 0xff, 0x30, 0x30, 0x01, 0x58, 0x62, 0x01, 0x00, 0x00, 0x00, 0x9c, 0x00, 0x00, Formation.large), 
	'Mummy': new EnemyInfo('Mummy', 0x012c, 0x012c, 0x0050, 0xac, 0xff, 0x18, 0x14, 0x01, 0x14, 0x1e, 0x01, 0x01, 0x20, 0x08, 0x3c, 0x10, 0x2b, Formation.small), 
	'WzMummy': new EnemyInfo('WzMummy', 0x03d8, 0x03e8, 0x00bc, 0x94, 0xff, 0x18, 0x18, 0x01, 0x2f, 0x2b, 0x01, 0x02, 0x20, 0x08, 0x5f, 0x10, 0x2b, Formation.small), 
	'Coctrice': new EnemyInfo('Coctrice', 0x00ba, 0x00c8, 0x0032, 0x7c, 0xff, 0x48, 0x04, 0x01, 0x0a, 0x01, 0x01, 0x02, 0x02, 0x00, 0x2f, 0x00, 0x80, Formation.small), 
	'Perilisk': new EnemyInfo('Perilisk', 0x01a7, 0x01f4, 0x002c, 0x7c, 0x10, 0x48, 0x04, 0x01, 0x0b, 0x14, 0x01, 0x00, 0x00, 0x00, 0x2d, 0x20, 0x90, Formation.small), 
	'Wyvern': new EnemyInfo('Wyvern', 0x0495, 0x0032, 0x00d4, 0x96, 0xff, 0x60, 0x0c, 0x01, 0x35, 0x1e, 0x01, 0x02, 0x04, 0x02, 0x73, 0x00, 0x80, Formation.large), 
	'Wyrm': new EnemyInfo('Wyrm', 0x04c2, 0x01f6, 0x0104, 0x96, 0xff, 0x3c, 0x16, 0x01, 0x41, 0x28, 0x01, 0x00, 0x00, 0x02, 0x83, 0x00, 0x80, Formation.large), 
	'Tyro': new EnemyInfo('Tyro', 0x0d3b, 0x01f6, 0x01e0, 0x90, 0xff, 0x3c, 0x0a, 0x01, 0x85, 0x41, 0x01, 0x00, 0x00, 0x02, 0xc8, 0x00, 0x00, Formation.large), 
	'T Rex': new EnemyInfo('T Rex', 0x1c20, 0x0258, 0x0258, 0x96, 0xff, 0x3c, 0x0a, 0x01, 0x90, 0x73, 0x1e, 0x00, 0x00, 0x02, 0xc8, 0x00, 0x00, Formation.large), 
	'Caribe': new EnemyInfo('Caribe', 0x00f0, 0x0014, 0x005c, 0x8a, 0xff, 0x48, 0x00, 0x01, 0x17, 0x16, 0x01, 0x00, 0x00, 0x00, 0x44, 0x40, 0x90, Formation.small), 
	'R.Caribe': new EnemyInfo('R.Caribe', 0x0222, 0x002e, 0x00ac, 0x8e, 0xff, 0x48, 0x14, 0x01, 0x2b, 0x25, 0x01, 0x00, 0x00, 0x00, 0x53, 0x00, 0x00, Formation.small), 
	'Gator': new EnemyInfo('Gator', 0x0330, 0x0384, 0x00b8, 0x8a, 0xff, 0x30, 0x10, 0x02, 0x2e, 0x2a, 0x01, 0x00, 0x00, 0x00, 0x67, 0x40, 0x90, Formation.small), 
	'FrGator': new EnemyInfo('FrGator', 0x0762, 0x07d0, 0x0120, 0x8e, 0xff, 0x30, 0x14, 0x02, 0x48, 0x38, 0x01, 0x00, 0x00, 0x02, 0x8f, 0x40, 0x90, Formation.small), 
	'Ocho': new EnemyInfo('Ocho', 0x04c8, 0x0066, 0x00d0, 0xb0, 0xff, 0x18, 0x18, 0x03, 0x34, 0x14, 0x01, 0x02, 0x04, 0x00, 0x74, 0x40, 0x90, Formation.large), 
	'Naocho': new EnemyInfo('Naocho', 0x0c75, 0x01f4, 0x0158, 0xc8, 0xff, 0x18, 0x20, 0x03, 0x56, 0x23, 0x01, 0x02, 0x04, 0x00, 0xaa, 0x00, 0x00, Formation.large), 
	'Hydra': new EnemyInfo('Hydra', 0x0393, 0x0096, 0x00d4, 0x8a, 0xff, 0x24, 0x0e, 0x03, 0x35, 0x1e, 0x01, 0x00, 0x00, 0x02, 0x74, 0x00, 0x00, Formation.large), 
	'R.Hydra': new EnemyInfo('R.Hydra', 0x04bf, 0x0190, 0x00b6, 0x98, 0x11, 0x24, 0x0e, 0x03, 0x2e, 0x14, 0x01, 0x00, 0x00, 0x02, 0x67, 0x20, 0x10, Formation.large), 
	'Guard': new EnemyInfo('Guard', 0x04c8, 0x0190, 0x00c8, 0xc8, 0xff, 0x48, 0x28, 0x02, 0x32, 0x19, 0x01, 0x01, 0x10, 0x00, 0x6e, 0x40, 0x0b, Formation.small), 
	'Sentry': new EnemyInfo('Sentry', 0x0fa0, 0x07d0, 0x0190, 0x96, 0xff, 0x60, 0x30, 0x01, 0x5a, 0x66, 0x01, 0x00, 0x00, 0x00, 0xa0, 0x40, 0xbb, Formation.small), 
	'Water': new EnemyInfo('Water', 0x07aa, 0x0320, 0x012c, 0xc8, 0xff, 0x48, 0x14, 0x01, 0x44, 0x45, 0x01, 0x00, 0x00, 0x01, 0x82, 0x20, 0x9b, Formation.small), 
	'Air': new EnemyInfo('Air', 0x064e, 0x0327, 0x0166, 0xc8, 0xff, 0x90, 0x04, 0x01, 0x3e, 0x35, 0x01, 0x00, 0x00, 0x01, 0x82, 0x00, 0x8b, Formation.small), 
	'Naga': new EnemyInfo('Naga', 0x0933, 0x0933, 0x0164, 0xc8, 0x12, 0x48, 0x08, 0x01, 0x47, 0x09, 0x01, 0x02, 0x04, 0x60, 0x74, 0x40, 0x90, Formation.large), 
	'GrNaga': new EnemyInfo('GrNaga', 0x0da1, 0x0fa0, 0x01a4, 0x9a, 0x13, 0x30, 0x10, 0x01, 0x58, 0x07, 0x01, 0x02, 0x04, 0x40, 0x8f, 0x00, 0x00, Formation.large), 
	'Chimera': new EnemyInfo('Chimera', 0x0810, 0x09c4, 0x012c, 0xc8, 0x14, 0x48, 0x14, 0x04, 0x3c, 0x1e, 0x01, 0x00, 0x00, 0x02, 0x82, 0x20, 0x90, Formation.large), 
	'Jimera': new EnemyInfo('Jimera', 0x11e8, 0x1388, 0x015e, 0xc8, 0x15, 0x3c, 0x12, 0x04, 0x46, 0x28, 0x01, 0x00, 0x00, 0x02, 0x8f, 0x20, 0x90, Formation.large), 
	'Wizard': new EnemyInfo('Wizard', 0x0114, 0x012c, 0x0054, 0x7e, 0xff, 0x42, 0x10, 0x02, 0x15, 0x1e, 0x01, 0x00, 0x00, 0x21, 0x62, 0x00, 0x33, Formation.small), 
	'Sorcerer': new EnemyInfo('Sorcerer', 0x0336, 0x03e7, 0x0070, 0x82, 0x16, 0x30, 0x0c, 0x03, 0x1c, 0x01, 0x01, 0x00, 0x01, 0x00, 0xbb, 0x00, 0x00, Formation.small), 
	'Garland': new EnemyInfo('Garland', 0x0082, 0x00fa, 0x006a, 0xff, 0xff, 0x0c, 0x0a, 0x01, 0x1b, 0x0f, 0x01, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, Formation.small), 
	'Gas D': new EnemyInfo('Gas D', 0x0fe4, 0x1388, 0x0160, 0xc8, 0x17, 0x60, 0x10, 0x01, 0x44, 0x48, 0x01, 0x00, 0x00, 0x02, 0xc8, 0x20, 0x80, Formation.large), 
	'Blue D': new EnemyInfo('Blue D', 0x0cca, 0x07d0, 0x01c6, 0xc8, 0x18, 0x60, 0x14, 0x01, 0x56, 0x5c, 0x01, 0x00, 0x00, 0x02, 0xc8, 0x10, 0xc0, Formation.large), 
	'MudGol': new EnemyInfo('MudGol', 0x04e9, 0x0320, 0x00b0, 0xc8, 0x19, 0x1c, 0x07, 0x01, 0x2c, 0x40, 0x01, 0x02, 0x04, 0x41, 0x5d, 0x00, 0x7b, Formation.large), 
	'RockGol': new EnemyInfo('RockGol', 0x0951, 0x03e8, 0x00c8, 0xc8, 0x1a, 0x18, 0x10, 0x01, 0x32, 0x46, 0x01, 0x00, 0x00, 0x41, 0x6e, 0x00, 0xfb, Formation.large), 
	'IronGol': new EnemyInfo('IronGol', 0x1a3d, 0x0bb8, 0x0130, 0xc8, 0x1b, 0x18, 0x64, 0x01, 0x4c, 0x5d, 0x01, 0x00, 0x00, 0x01, 0x8f, 0x00, 0xbb, Formation.large), 
	'BadMan': new EnemyInfo('BadMan', 0x04ef, 0x0708, 0x0104, 0xc8, 0xff, 0x24, 0x26, 0x02, 0x41, 0x2c, 0x01, 0x00, 0x00, 0x00, 0x87, 0x00, 0x00, Formation.small), 
	'EvilMan': new EnemyInfo('EvilMan', 0x0a8c, 0x0bb8, 0x00be, 0xc8, 0x1c, 0x2a, 0x20, 0x01, 0x30, 0x37, 0x01, 0x00, 0x00, 0x41, 0xad, 0x00, 0x0b, Formation.small), 
	'Astos': new EnemyInfo('Astos', 0x08ca, 0x07d0, 0x00a8, 0xff, 0x2b, 0x4e, 0x28, 0x01, 0x2a, 0x1a, 0x01, 0x00, 0x00, 0x00, 0xaa, 0x00, 0x00, Formation.small), 
	'Mage': new EnemyInfo('Mage', 0x0447, 0x0447, 0x0069, 0xc8, 0x1d, 0x4e, 0x28, 0x01, 0x1b, 0x1a, 0x01, 0x00, 0x00, 0x40, 0xaa, 0x00, 0x00, Formation.small), 
	'Fighter': new EnemyInfo('Fighter', 0x0d5c, 0x0d5c, 0x00c8, 0x9e, 0x1e, 0x5a, 0x26, 0x01, 0x2d, 0x28, 0x01, 0x00, 0x00, 0x40, 0xba, 0x00, 0x00, Formation.small), 
	'Madpony': new EnemyInfo('Madpony', 0x003f, 0x000f, 0x0040, 0x6a, 0xff, 0x16, 0x02, 0x02, 0x10, 0x0a, 0x01, 0x00, 0x00, 0x00, 0x28, 0x00, 0x00, Formation.large), 
	'Nitemare': new EnemyInfo('Nitemare', 0x04f8, 0x02bc, 0x00c8, 0xc8, 0x1f, 0x84, 0x18, 0x03, 0x32, 0x1e, 0x01, 0x00, 0x00, 0x01, 0x64, 0x20, 0x9b, Formation.large), 
	'WarMech': new EnemyInfo('WarMech', 0x7d00, 0x7d00, 0x03e8, 0xc8, 0x20, 0x60, 0x50, 0x02, 0xc8, 0x80, 0x01, 0x00, 0x00, 0x80, 0xc8, 0x00, 0xfb, Formation.large), 
	'Lich': new EnemyInfo('Lich', 0x0898, 0x0bb8, 0x0190, 0xff, 0x22, 0x18, 0x28, 0x01, 0x31, 0x28, 0x01, 0x01, 0x10, 0x49, 0x78, 0x10, 0x2b, Formation.fiend), 
	'Lich2': new EnemyInfo('Lich2', 0x07d0, 0x0001, 0x01f4, 0xff, 0x23, 0x30, 0x32, 0x01, 0x40, 0x32, 0x01, 0x01, 0x10, 0x49, 0x8c, 0x00, 0x2b, Formation.fiend), 
	'Kary': new EnemyInfo('Kary', 0x09ab, 0x0bb8, 0x0258, 0xff, 0x24, 0x30, 0x32, 0x06, 0x3f, 0x28, 0x01, 0x00, 0x00, 0x41, 0xb7, 0x01, 0x72, Formation.fiend), 
	'Kary2': new EnemyInfo('Kary2', 0x07d0, 0x0001, 0x02bc, 0xff, 0x25, 0x3c, 0x3c, 0x06, 0x3f, 0x3c, 0x01, 0x00, 0x00, 0x41, 0xb7, 0x00, 0x72, Formation.fiend), 
	'Kraken': new EnemyInfo('Kraken', 0x1095, 0x1388, 0x0320, 0xff, 0x26, 0x54, 0x3c, 0x08, 0x5a, 0x32, 0x01, 0x00, 0x00, 0x20, 0xa0, 0x40, 0x90, Formation.fiend), 
	'Kraken2': new EnemyInfo('Kraken2', 0x07d0, 0x0001, 0x0384, 0xff, 0x27, 0x62, 0x46, 0x08, 0x72, 0x46, 0x01, 0x00, 0x00, 0x20, 0xc8, 0x00, 0x90, Formation.fiend), 
	'Tiamat': new EnemyInfo('Tiamat', 0x1578, 0x1770, 0x03e8, 0xff, 0x28, 0x48, 0x50, 0x04, 0x50, 0x31, 0x01, 0x00, 0x00, 0x02, 0xc8, 0x02, 0xf0, Formation.fiend), 
	'Tiamat2': new EnemyInfo('Tiamat2', 0x07d0, 0x0001, 0x044c, 0xff, 0x29, 0x5a, 0x5a, 0x04, 0x55, 0x4b, 0x01, 0x00, 0x00, 0x42, 0xc8, 0x00, 0xf0, Formation.fiend), 
	'CHAOS': new EnemyInfo('CHAOS', 0x0000, 0x0000, 0x07d0, 0xff, 0x2a, 0x64, 0x64, 0x02, 0xc8, 0x64, 0x01, 0x01, 0x10, 0x00, 0xc8, 0x00, 0xff, Formation.chaos), 
};

function EncounterSlot(enemy = enemies.Imp, minimum = 0, maximum = 0)
{
	this.enemy = enemy;
	this.minimum = minimum;
	this.maximum = maximum;
}

function EncounterInfo(formation, runnable, surprise, slot1 = new EncounterSlot(), slot2 = new EncounterSlot(), slot3 = new EncounterSlot(), slot4 = new EncounterSlot())
{
	this.formation = formation;
	this.runnable = runnable;
	this.surprise = surprise;
	this.slot1 = slot1;
	this.slot2 = slot2;
	this.slot3 = slot3;
	this.slot4 = slot4;
}

EncounterInfo.prototype.getSlotInfo = function(slot)
{
	let encounterSlot = this[slot];
	return (encounterSlot.minimum == encounterSlot.maximum ? encounterSlot.minimum : encounterSlot.minimum + '-' + encounterSlot.maximum) + ' ' + encounterSlot.enemy.name + '(' + encounterSlot.enemy.hp + ' hp)';
};

const encounters = {
	0x00: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Imp, 3, 5)),
	0x80: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Imp, 3, 6), new EncounterSlot(enemies.GrImp, 0, 4)),
	0x01: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Bone, 2, 4)),
	0x81: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Bone, 3, 5), new EncounterSlot(enemies.Crawl, 0, 2)),
	0x02: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.GrImp, 1, 3), new EncounterSlot(enemies.Wolf, 0, 2), new EncounterSlot(enemies.GrWolf, 0, 2), new EncounterSlot(enemies.Imp, 0, 2)),
	0x82: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.GrImp, 1, 3)),
	0x03: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Wolf, 1, 2)),
	0x83: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Wolf, 4, 6), new EncounterSlot(enemies.GrWolf, 0, 1)),
	0x04: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Zombie, 2, 4)),
	0x84: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Zombie, 2, 3), new EncounterSlot(enemies.Ghoul, 2, 4)),
	0x05: new EncounterInfo(Formation.small, true, 55, new EncounterSlot(enemies.Spider, 1, 2)),
	0x85: new EncounterInfo(Formation.small, true, 55, new EncounterSlot(enemies.Scum, 2, 4)),
	0x06: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Madpony, 1, 1)),
	0x86: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Madpony, 2, 4)),
	0x07: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Creep, 1, 2)),
	0x87: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Creep, 1, 3), new EncounterSlot(enemies.Ogre, 1, 1)),
	0x08: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Ghoul, 1, 1)),
	0x88: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Ghoul, 2, 5), new EncounterSlot(enemies.Geist, 0, 4)),
	0x09: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Iguana, 1, 1)),
	0x89: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Giant, 1, 3), new EncounterSlot(enemies.Iguana, 0, 2)),
	0x0A: new EncounterInfo(Formation.small, true, 90, new EncounterSlot(enemies.Shadow, 2, 4)),
	0x8A: new EncounterInfo(Formation.small, true, 90, new EncounterSlot(enemies.Shadow, 3, 7)),
	0x0B: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.GrWolf, 2, 5), new EncounterSlot(enemies.Wolf, 0, 3)),
	0x8B: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.GrWolf, 4, 8)),
	0x0C: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Ogre, 1, 2)),
	0x8C: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Ogre, 1, 3), new EncounterSlot(enemies.Hyena, 0, 2)),
	0x0D: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Asp, 1, 2)),
	0x8D: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Asp, 3, 7)),
	0x0E: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.GrImp, 0, 5), new EncounterSlot(enemies.WrWolf, 1, 3), new EncounterSlot(enemies.Giant, 0, 2)),
	0x8E: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.GrImp, 2, 5), new EncounterSlot(enemies.WrWolf, 0, 2)),
	0x0F: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Geist, 1, 4)),
	0x8F: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Specter, 2, 5), new EncounterSlot(enemies.Geist, 2, 5)),
	0x10: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Gargoyle, 2, 3)),
	0x90: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Gargoyle, 3, 8)),
	0x11: new EncounterInfo(Formation.small, true, 33, new EncounterSlot(enemies.WrWolf, 3, 6)),
	0x91: new EncounterInfo(Formation.small, true, 33, new EncounterSlot(enemies.WrWolf, 2, 5), new EncounterSlot(enemies.GrWolf, 0, 5)),
	0x12: new EncounterInfo(Formation.small, true, 55, new EncounterSlot(enemies.Arachnid, 1, 4)),
	0x92: new EncounterInfo(Formation.small, true, 55, new EncounterSlot(enemies.Ooze, 2, 5), new EncounterSlot(enemies.Arachnid, 0, 5)),
	0x13: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.GrOgre, 1, 1), new EncounterSlot(enemies.Ogre, 1, 2)),
	0x93: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.GrOgre, 1, 4), new EncounterSlot(enemies.Ogre, 0, 2)),
	0x14: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Arachnid, 1, 2)),
	0x94: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Arachnid, 4, 8)),
	0x15: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Cobra, 2, 6)),
	0x95: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Cobra, 2, 6), new EncounterSlot(enemies.Scorpion, 0, 4)),
	0x16: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Coctrice, 2, 6)),
	0x96: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Coctrice, 2, 6), new EncounterSlot(enemies.Mummy, 1, 5)),
	0x17: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Pede, 1, 4)),
	0x97: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Pede, 1, 6)),
	0x18: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Image, 2, 6)),
	0x98: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Image, 2, 6), new EncounterSlot(enemies.Wraith, 0, 4)),
	0x19: new EncounterInfo(Formation.large, true, 27, new EncounterSlot(enemies.Tiger, 1, 3)),
	0x99: new EncounterInfo(Formation.large, true, 27, new EncounterSlot(enemies['Saber T'], 1, 3), new EncounterSlot(enemies.Tiger, 0, 2)),
	0x1A: new EncounterInfo(Formation.mix, true, 27, new EncounterSlot(enemies.Scorpion, 2, 4)),
	0x9A: new EncounterInfo(Formation.mix, true, 27, new EncounterSlot(enemies.Scorpion, 2, 6), new EncounterSlot(enemies.Bull, 1, 2)),
	0x1B: new EncounterInfo(Formation.large, true, 27, new EncounterSlot(enemies.Troll, 1, 2), new EncounterSlot(enemies.Bull, 0, 1)),
	0x9B: new EncounterInfo(Formation.large, true, 27, new EncounterSlot(enemies.Troll, 1, 2), new EncounterSlot(enemies.Bull, 0, 2)),
	0x1C: new EncounterInfo(Formation.small, false, 33, new EncounterSlot(enemies.Wizard, 2, 4)),
	0x9C: new EncounterInfo(Formation.small, false, 33, new EncounterSlot(enemies.Wizard, 3, 7)),
	0x1D: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Mummy, 2, 5)),
	0x9D: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Mummy, 3, 7), new EncounterSlot(enemies.WzMummy, 1, 1)),
	0x1E: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Giant, 1, 2)),
	0x9E: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Giant, 2, 4)),
	0x1F: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Giant, 1, 2), new EncounterSlot(enemies.Iguana, 0, 3)),
	0x9F: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Giant, 1, 4), new EncounterSlot(enemies.Iguana, 1, 1)),
	0x20: new EncounterInfo(Formation.mix, true, 27, new EncounterSlot(enemies.Hydra, 1, 2)),
	0xA0: new EncounterInfo(Formation.mix, true, 27, new EncounterSlot(enemies.Hydra, 1, 4), new EncounterSlot(enemies.Gator, 0, 3)),
	0x21: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.Earth, 1, 1)),
	0xA1: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.Earth, 2, 4)),
	0x22: new EncounterInfo(Formation.large, false, 55, new EncounterSlot(enemies.Cerebus, 0, 1), new EncounterSlot(enemies.WzOgre, 1, 2)),
	0xA2: new EncounterInfo(Formation.large, false, 55, new EncounterSlot(enemies.Cerebus, 1, 3), new EncounterSlot(enemies.WzOgre, 0, 2)),
	0x23: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Perilisk, 2, 5)),
	0xA3: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Perilisk, 4, 8)),
	0x24: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['R.Hydra'], 1, 1)),
	0xA4: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['R.Hydra'], 4, 4)),
	0x25: new EncounterInfo(Formation.mix, true, 33, new EncounterSlot(enemies.Ocho, 1, 3)),
	0xA5: new EncounterInfo(Formation.mix, true, 33, new EncounterSlot(enemies.Ocho, 1, 1), new EncounterSlot(enemies.Caribe, 0, 2)),
	0x26: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['R.Giant'], 1, 2)),
	0xA6: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['R.Giant'], 1, 1), new EncounterSlot(enemies.Agama, 1, 3)),
	0x27: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.Fire, 1, 2)),
	0xA7: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.Fire, 3, 4)),
	0x28: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['Grey W'], 1, 1)),
	0xA8: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['Grey W'], 2, 4)),
	0x29: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Agama, 1, 1)),
	0xA9: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Agama, 2, 4)),
	0x2A: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['Red D'], 1, 1)),
	0xAA: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['Red D'], 2, 4)),
	0x2B: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies['R.Bone'], 1, 1), new EncounterSlot(enemies.Bone, 2, 4), new EncounterSlot(enemies.Crawl, 1, 1)),
	0xAB: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies['R.Bone'], 3, 6)),
	0x2C: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Wraith, 1, 5), new EncounterSlot(enemies.Image, 0, 3), new EncounterSlot(enemies.Specter, 0, 3), new EncounterSlot(enemies.Geist, 0, 3)),
	0xAC: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Wraith, 2, 6)),
	0x2D: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.FrWolf, 3, 7)),
	0xAD: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.FrWolf, 4, 7)),
	0x2E: new EncounterInfo(Formation.mix, false, 4, new EncounterSlot(enemies.FrGiant, 1, 1), new EncounterSlot(enemies.FrWolf, 0, 2)),
	0xAE: new EncounterInfo(Formation.mix, false, 4, new EncounterSlot(enemies.FrGiant, 2, 2), new EncounterSlot(enemies.FrWolf, 2, 6)),
	0x2F: new EncounterInfo(Formation.small, true, 75, new EncounterSlot(enemies.Mage, 1, 4)),
	0xAF: new EncounterInfo(Formation.small, true, 75, new EncounterSlot(enemies.Mage, 2, 3), new EncounterSlot(enemies.Fighter, 1, 1)),
	0x30: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['Frost D'], 1, 2)),
	0xB0: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['Frost D'], 3, 4)),
	0x31: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.GrPede, 1, 1)),
	0xB1: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.GrPede, 1, 2)),
	0x32: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.ZomBull, 1, 3)),
	0xB2: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.ZomBull, 1, 4), new EncounterSlot(enemies.Troll, 0, 2)),
	0x33: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Mancat, 3, 5)),
	0xB3: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Mancat, 3, 7), new EncounterSlot(enemies.Medusa, 0, 5)),
	0x34: new EncounterInfo(Formation.mix, true, 27, new EncounterSlot(enemies.Medusa, 2, 5)),
	0xB4: new EncounterInfo(Formation.mix, true, 27, new EncounterSlot(enemies.Medusa, 3, 6), new EncounterSlot(enemies['Saber T'], 1, 2)),
	0x35: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Sorcerer, 2, 5)),
	0xB5: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Sorcerer, 1, 6), new EncounterSlot(enemies.MudGol, 1, 2)),
	0x36: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Manticor, 1, 3)),
	0xB6: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Manticor, 3, 4)),
	0x37: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Wyrm, 1, 3)),
	0xB7: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Wyrm, 1, 3)),
	0x38: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['R.Ankylo'], 1, 3)),
	0xB8: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['R.Ankylo'], 1, 4)),
	0x39: new EncounterInfo(Formation.mix, true, 27, new EncounterSlot(enemies.Catman, 2, 4)),
	0xB9: new EncounterInfo(Formation.mix, true, 27, new EncounterSlot(enemies.Catman, 3, 6), new EncounterSlot(enemies['Saber T'], 1, 2)),
	0x3A: new EncounterInfo(Formation.large, true, 27, new EncounterSlot(enemies.Sauria, 1, 2)),
	0xBA: new EncounterInfo(Formation.large, true, 27, new EncounterSlot(enemies.Sauria, 2, 4)),
	0x3B: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Chimera, 1, 3)),
	0xBB: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Chimera, 3, 4)),
	0x3C: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['Sand W'], 1, 1)),
	0xBC: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['Sand W'], 1, 2)),
	0x3D: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Tyro, 1, 1)),
	0xBD: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Tyro, 1, 1), new EncounterSlot(enemies.Wyvern, 0, 1)),
	0x3E: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies['T Rex'], 1, 1)),
	0xBE: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Wyvern, 1, 3), new EncounterSlot(enemies.Wyrm, 0, 5)),
	0x3F: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.MudGol, 1, 3)),
	0xBF: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.MudGol, 1, 4), new EncounterSlot(enemies.RockGol, 1, 3)),
	0x40: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.GrMedusa, 1, 4)),
	0xC0: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.GrMedusa, 4, 7)),
	0x41: new EncounterInfo(Formation.large, true, 33, new EncounterSlot(enemies.Naocho, 1, 1)),
	0xC1: new EncounterInfo(Formation.large, true, 33, new EncounterSlot(enemies.Naocho, 1, 2)),
	0x42: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.SeaTroll, 1, 2), new EncounterSlot(enemies.Lobster, 1, 3)),
	0xC2: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.SeaTroll, 1, 2), new EncounterSlot(enemies.Lobster, 1, 4)),
	0x43: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Lobster, 2, 6)),
	0xC3: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Lobster, 3, 7)),
	0x44: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Lobster, 1, 6), new EncounterSlot(enemies.SeaSnake, 2, 5), new EncounterSlot(enemies.SeaTroll, 2, 2)),
	0xC4: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Lobster, 1, 5), new EncounterSlot(enemies.SeaSnake, 0, 3)),
	0x45: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.WzSahag, 0, 1), new EncounterSlot(enemies.GrShark, 1, 2)),
	0xC5: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.WzSahag, 3, 6), new EncounterSlot(enemies.GrShark, 2, 2)),
	0x46: new EncounterInfo(Formation.mix, false, 4, new EncounterSlot(enemies.Phantom, 1, 1)),
	0xC6: new EncounterInfo(Formation.mix, false, 4, new EncounterSlot(enemies.Ghost, 2, 5)),
	0x47: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Naga, 1, 1), new EncounterSlot(enemies.Water, 0, 1)),
	0xC7: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Naga, 1, 2), new EncounterSlot(enemies.Water, 3, 6)),
	0x48: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.GrShark, 1, 1), new EncounterSlot(enemies.BigEye, 0, 1)),
	0xC8: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.GrShark, 1, 2), new EncounterSlot(enemies.BigEye, 1, 2)),
	0x49: new EncounterInfo(Formation.small, false, 4, new EncounterSlot(enemies.Water, 1, 3)),
	0xC9: new EncounterInfo(Formation.small, false, 4, new EncounterSlot(enemies.Water, 3, 6)),
	0x4A: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.WzMummy, 1, 5), new EncounterSlot(enemies.Mummy, 0, 8), new EncounterSlot(enemies.Coctrice, 0, 8), new EncounterSlot(enemies.Perilisk, 0, 8)),
	0xCA: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.WzMummy, 1, 2), new EncounterSlot(enemies.Mummy, 1, 6)),
	0x4B: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.ZombieD, 1, 2)),
	0xCB: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.ZombieD, 2, 4)),
	0x4C: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Guard, 2, 5)),
	0xCC: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Guard, 0, 1), new EncounterSlot(enemies.Sentry, 1, 1)),
	0x4D: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.BadMan, 2, 5)),
	0xCD: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.BadMan, 5, 9)),
	0x4E: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies['Blue D'], 1, 1)),
	0xCE: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies['Blue D'], 2, 3)),
	0x4F: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Nitemare, 1, 3)),
	0xCF: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Nitemare, 1, 2), new EncounterSlot(enemies.BadMan, 1, 2)),
	0x50: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Slime, 3, 6)),
	0xD0: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Slime, 4, 8)),
	0x51: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Air, 2, 4)),
	0xD1: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Air, 3, 6)),
	0x52: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.GrNaga, 1, 1), new EncounterSlot(enemies.Air, 0, 1)),
	0xD2: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.GrNaga, 0, 1), new EncounterSlot(enemies.Air, 1, 3)),
	0x53: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.WzVamp, 1, 3)),
	0xD3: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.WzVamp, 1, 3), new EncounterSlot(enemies.ZombieD, 1, 2)),
	0x54: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.EvilMan, 1, 1), new EncounterSlot(enemies.Nitemare, 1, 2)),
	0xD4: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.EvilMan, 1, 2), new EncounterSlot(enemies.Nitemare, 1, 2)),
	0x55: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Chimera, 1, 2), new EncounterSlot(enemies.Jimera, 1, 2)),
	0xD5: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Chimera, 1, 1)),
	0x56: new EncounterInfo(Formation.mix, true, 75, new EncounterSlot(enemies.WarMech, 1, 1)),
	0xD6: new EncounterInfo(Formation.mix, true, 75, new EncounterSlot(enemies.Fighter, 1, 2)),
	0x57: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.Worm, 1, 2)),
	0xD7: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.Worm, 3, 4)),
	0x58: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.RockGol, 1, 2)),
	0xD8: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.RockGol, 2, 4)),
	0x59: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies['Gas D'], 1, 1)),
	0xD9: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies['Gas D'], 2, 4)),
	0x5A: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.GrShark, 1, 2), new EncounterSlot(enemies.Shark, 0, 1)),
	0xDA: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.GrShark, 1, 2), new EncounterSlot(enemies.Shark, 0, 1)),
	0x5B: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Sahag, 0, 6), new EncounterSlot(enemies.OddEye, 1, 2)),
	0xDB: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Sahag, 3, 7), new EncounterSlot(enemies['R.Sahag'], 0, 2)),
	0x5C: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Kyzoku, 1, 5)),
	0xDC: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Shark, 1, 1)),
	0x5D: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Shark, 1, 2), new EncounterSlot(enemies.Sahag, 0, 2)),
	0xDD: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Sahag, 4, 6)),
	0x5E: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Shark, 1, 1), new EncounterSlot(enemies['R.Sahag'], 0, 1)),
	0xDE: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.Shark, 1, 2), new EncounterSlot(enemies['R.Sahag'], 0, 3)),
	0x5F: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Caribe, 2, 6)),
	0xDF: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Caribe, 3, 8)),
	0x60: new EncounterInfo(Formation.large, true, 33, new EncounterSlot(enemies.Hydra, 1, 2), new EncounterSlot(enemies.Ocho, 0, 2)),
	0xE0: new EncounterInfo(Formation.large, true, 33, new EncounterSlot(enemies.Hydra, 1, 1), new EncounterSlot(enemies.Ocho, 0, 1)),
	0x61: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.SeaTroll, 1, 2), new EncounterSlot(enemies.SeaSnake, 0, 2), new EncounterSlot(enemies.Lobster, 0, 2)),
	0xE1: new EncounterInfo(Formation.mix, true, 4, new EncounterSlot(enemies.SeaTroll, 1, 1), new EncounterSlot(enemies.SeaSnake, 0, 3)),
	0x62: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.FrGator, 1, 2), new EncounterSlot(enemies['R.Caribe'], 0, 3)),
	0xE2: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.FrGator, 1, 1), new EncounterSlot(enemies['R.Caribe'], 1, 4)),
	0x63: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Troll, 1, 2)),
	0xE3: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Troll, 2, 4)),
	0x64: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Bull, 1, 2)),
	0xE4: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Bull, 2, 4)),
	0x65: new EncounterInfo(Formation.mix, true, 30, new EncounterSlot(enemies.Caribe, 0, 2), new EncounterSlot(enemies.Gator, 0, 2), new EncounterSlot(enemies.Ocho, 1, 1)),
	0xE5: new EncounterInfo(Formation.mix, true, 30, new EncounterSlot(enemies.Caribe, 2, 4), new EncounterSlot(enemies.Gator, 0, 2)),
	0x66: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Arachnid, 1, 2), new EncounterSlot(enemies.Spider, 0, 2)),
	0xE6: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Arachnid, 3, 6), new EncounterSlot(enemies.Spider, 0, 2)),
	0x67: new EncounterInfo(Formation.mix, true, 27, new EncounterSlot(enemies.Catman, 1, 3), new EncounterSlot(enemies['Saber T'], 0, 2)),
	0xE7: new EncounterInfo(Formation.mix, true, 27, new EncounterSlot(enemies.Catman, 4, 7)),
	0x68: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Vampire, 2, 5)),
	0xE8: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.WzVamp, 1, 1), new EncounterSlot(enemies.Vampire, 3, 6)),
	0x69: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.Eye, 1, 1)),
	0xE9: new EncounterInfo(Formation.large, false, 4, new EncounterSlot(enemies.Eye, 2, 3)),
	0x6A: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies['R.Goyle'], 2, 5)),
	0xEA: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies['R.Goyle'], 3, 7)),
	0x6B: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Muck, 1, 3)),
	0xEB: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Muck, 4, 7)),
	0x6C: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Sorcerer, 1, 3)),
	0xEC: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.Sorcerer, 3, 7)),
	0x6D: new EncounterInfo(Formation.large, true, 55, new EncounterSlot(enemies.Cerebus, 1, 2)),
	0xED: new EncounterInfo(Formation.large, true, 55, new EncounterSlot(enemies.Cerebus, 3, 4)),
	0x6E: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.WzOgre, 1, 1), new EncounterSlot(enemies.GrOgre, 1, 1), new EncounterSlot(enemies.Hyena, 0, 7)),
	0xEE: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.WzOgre, 1, 3), new EncounterSlot(enemies.GrOgre, 0, 2)),
	0x6F: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Sphinx, 1, 2)),
	0xEF: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Sphinx, 1, 4)),
	0x70: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Wyvern, 1, 3)),
	0xF0: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Wyvern, 1, 4)),
	0x71: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Ankylo, 1, 1)),
	0xF1: new EncounterInfo(Formation.large, true, 4, new EncounterSlot(enemies.Ankylo, 1, 2)),
	0x72: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.SeaSnake, 2, 4)),
	0xF2: new EncounterInfo(Formation.small, true, 4, new EncounterSlot(enemies.SeaSnake, 3, 6)),
	0x73: new EncounterInfo(Formation.fiend, false, 4, new EncounterSlot(enemies.Lich2, 1, 1)),
	0x74: new EncounterInfo(Formation.fiend, false, 4, new EncounterSlot(enemies.Kary2, 1, 1)),
	0x75: new EncounterInfo(Formation.fiend, false, 4, new EncounterSlot(enemies.Kraken2, 1, 1)),
	0x76: new EncounterInfo(Formation.fiend, false, 4, new EncounterSlot(enemies.Tiamat2, 1, 1)),
	0x77: new EncounterInfo(Formation.fiend, false, 4, new EncounterSlot(enemies.Tiamat, 1, 1)),
	0x78: new EncounterInfo(Formation.fiend, false, 4, new EncounterSlot(enemies.Kraken, 1, 1)),
	0x79: new EncounterInfo(Formation.fiend, false, 4, new EncounterSlot(enemies.Kary, 1, 1)),
	0x7A: new EncounterInfo(Formation.fiend, false, 4, new EncounterSlot(enemies.Lich, 1, 1)),
	0x7B: new EncounterInfo(Formation.chaos, false, 4, new EncounterSlot(enemies.CHAOS, 1, 1)),
	0x7C: new EncounterInfo(Formation.mix, false, 4, new EncounterSlot(enemies.Vampire, 1, 1)),
	0x7D: new EncounterInfo(Formation.mix, false, 4, new EncounterSlot(enemies.Astos, 1, 1)),
	0x7E: new EncounterInfo(Formation.small, false, 4, new EncounterSlot(enemies.Pirate, 9, 9)),
	0xFE: new EncounterInfo(Formation.small, false, 4, new EncounterSlot(enemies.WzSahag, 1, 2), new EncounterSlot(enemies['R.Sahag'], 8, 8)),
	0x7F: new EncounterInfo(Formation.mix, false, 4, new EncounterSlot(enemies.Garland, 1, 1)),
	0xFF: new EncounterInfo(Formation.mix, false, 4, new EncounterSlot(enemies.IronGol, 1, 2))
};

function ClassInfo(name, index, hp, str, agi, int, vit, luck, evade, hit, hitGain, attack, mdef, mdefGain, levelUpTable)
{
	this.name = name;
	this.index = index;
	this.hp = hp;
	this.str = str;
	this.agi = agi;
	this.int = int;
	this.vit = vit;
	this.luck = luck;
	this.evade = evade;
	this.hit = hit;
	this.hitGain = hitGain;
	this.attack = attack;
	this.mdef = mdef;
	this.mdefGain = mdefGain;
	this.levelUpTable = levelUpTable;
}

const characterClasses={
'fighter': new ClassInfo('Fighter', 0, 35, 20, 5, 1, 10, 5, 53, 10, 3, 10, 15, 3,
       [0x3a00, 0x3b00, 0x3d00, 0x3a00, 0x3b00,
		0x3d00, 0x3a00, 0x3b00, 0x3d00, 0x3a00,
		0x1b00, 0x3d00, 0x3a00, 0x1b07, 0x3d00,
		0x3a07, 0x1b00, 0x3d07, 0x3a00, 0x1307,
		0x3d00, 0x3a07, 0x1300, 0x1d07, 0x3a00,
		0x1307, 0x1d00, 0x3a07, 0x1300, 0x1d07,
		0x3200, 0x1907, 0x1600, 0x3907, 0x1200,
		0x1d07, 0x3200, 0x1907, 0x1600, 0x3807,
		0x1000, 0x1c07, 0x3000, 0x1807, 0x1000,
		0x3807, 0x1000, 0x1807, 0x3000]),
'thief': new ClassInfo('Thief', 1, 30, 5, 10, 5, 5, 15, 58, 5, 2, 2, 15, 2,
	   [0x3900, 0x3700, 0x3900, 0x3500, 0x1b00,
		0x3500, 0x1900, 0x3300, 0x1d00, 0x2100,
		0x1b00, 0x3500, 0x0900, 0x330f, 0x1d00,
		0x090f, 0x3300, 0x1d0f, 0x0900, 0x330f,
		0x1d00, 0x090f, 0x3300, 0x1d0f, 0x0900,
		0x330f, 0x1d00, 0x090f, 0x2300, 0x1d0f,
		0x0900, 0x3b0f, 0x1d00, 0x090f, 0x1b00,
		0x3d0f, 0x0900, 0x1b0f, 0x1d00, 0x290f,
		0x1300, 0x0d0f, 0x1100, 0x0b0f, 0x3500,
		0x090f, 0x1300, 0x0d0f, 0x1100]),
'monk': new ClassInfo('Black Belt', 2, 33, 5, 5, 5, 20, 5, 53, 5, 3, 2, 10, 4,
	   [0x2b00, 0x1700, 0x2a00, 0x1700, 0x0b00,
		0x3600, 0x0b00, 0x1700, 0x2a00, 0x1700,
		0x0b00, 0x3600, 0x0b00, 0x1700, 0x2a00,
		0x3700, 0x0b00, 0x3600, 0x0b00, 0x1700,
		0x2a00, 0x1700, 0x0b00, 0x3600, 0x0b00,
		0x1700, 0x2a00, 0x1700, 0x0b00, 0x3600,
		0x2b00, 0x1700, 0x2a00, 0x1700, 0x0b00,
		0x3600, 0x0b00, 0x1700, 0x2a00, 0x1700,
		0x0b00, 0x3600, 0x0a00, 0x1700, 0x2a00,
		0x3600, 0x0b00, 0x3600, 0x0a00]),
'redmage': new ClassInfo('Red Mage', 3, 30, 10, 10, 10, 5, 5, 58, 7, 2, 5, 20, 2,
	   [0x3303, 0x0e02, 0x3301, 0x0e02, 0x3304,
		0x0c05, 0x3302, 0x2c04, 0x3109, 0x0608,
		0x3904, 0x070a, 0x3001, 0x0f10, 0x311c,
		0x2602, 0x1810, 0x0708, 0x1124, 0x0e31,
		0x1001, 0x0720, 0x190a, 0x0410, 0x1260,
		0x2d44, 0x1102, 0x0660, 0x1818, 0x0580,
		0x13c4, 0x0c20, 0x1080, 0x0751, 0x1980,
		0x2408, 0x1240, 0x0d80, 0x1120, 0x0602,
		0x1810, 0x0580, 0x1340, 0x0c04, 0x1020,
		0x2780, 0x1908, 0x0440, 0x1210]),
'whitemage': new ClassInfo('White Mage', 4, 28, 5, 5, 15, 10, 5, 53, 5, 1, 2, 20, 2,
	   [0x3d03, 0x1e02, 0x3501, 0x0e06, 0x2504,
		0x1601, 0x2d0c, 0x060a, 0x3501, 0x0e0c,
		0x2510, 0x1612, 0x2d09, 0x0614, 0x1520,
		0x2e22, 0x0518, 0x1621, 0x2d44, 0x0640,
		0x1430, 0x0d48, 0x2603, 0x14a0, 0x0dc0,
		0x0614, 0x3482, 0x0d48, 0x06a0, 0x1004,
		0x2910, 0x0280, 0x1040, 0x0908, 0x0220,
		0x3080, 0x0902, 0x0240, 0x1010, 0x0980,
		0x2220, 0x1004, 0x0940, 0x0280, 0x1008,
		0x2910, 0x0220, 0x1040, 0x0980]),
'blackmage': new ClassInfo('Black Mage', 5, 25, 1, 10, 20, 1, 10, 58, 5, 1, 1, 20, 2,
	   [0x2403, 0x0e02, 0x3501, 0x0606, 0x2d04,
		0x1601, 0x250c, 0x0e0a, 0x1501, 0x240c,
		0x0e10, 0x1412, 0x2509, 0x0c14, 0x1620,
		0x0422, 0x2d18, 0x1421, 0x0644, 0x0c40,
		0x3530, 0x0448, 0x0e03, 0x14a0, 0x25c0,
		0x0c14, 0x1682, 0x0448, 0x2da0, 0x1404,
		0x0610, 0x0c80, 0x1540, 0x2408, 0x0e20,
		0x1480, 0x0502, 0x0c40, 0x1610, 0x2480,
		0x0520, 0x0404, 0x0640, 0x0480, 0x0508,
		0x0410, 0x0620, 0x0440, 0x0580])
};

const EXPTable = [
	40,
	196,
	547,
	1171,
	2146,
	3550,
	5461,
	7957,
	11116,
	15016,
	19735,
	25351,
	31942,
	39586,
	48361,
	58345,
	69617,
	82253,
	96332,
	111932,
	129131,
	148008,
	168639,
	191103,
	215479,
	241843,
	270275,
	300851,
	333651,
	366450,
	399250,
	432049,
	464849,
	497648,
	530448,
	563247,
	596047,
	628846,
	661646,
	694445,
	727245,
	760044,
	792844,
	825643,
	858443,
	891242,
	924042,
	956841,
	989641
];


function PlayerInfo(name, characterClass, classChanged, level, exp, hp, str, agi, int, vit, luck, evade, absorb, hits, hit, attack, crit, mdef, weaknesses, resistances, weapon, armor, shield, helmet, glove)
{
	this.name = name;
	this.characterClass = characterClass;
	this.classChanged = classChanged;
	this.level = level;
	this.exp = exp;
	this.hp = hp;
	this.str = str;
	this.agi = agi;
	this.int = int;
	this.vit = vit;
	this.luck = luck;
	this.attack = attack;
	this.crit = crit;
	this.hits = hits;
	this.hit = hit;
	this.absorb = absorb;
	this.evade = evade;
	this.mdef = mdef;
	this.weaknesses = weaknesses;
	this.resistances = resistances;
	this.weapon = weapon;
	this.armor = [armor, shield, helmet, glove];
}

// create snapshot of player stats at the current point
PlayerInfo.prototype.saveInstance = function ()
{
	return new PlayerInfo(this.name, this.characterClass, this.classChanged, this.level, this.exp, this.hp, this.str, this.agi, this.int, this.vit, this.luck, this.evade, this.absorb, this.hits, this.hit, this.attack, this.crit, this.mdef, this.weaknesses, this.resistances, this.weapon, this.armor[Slot.Armor], this.armor[Slot.Shield], this.armor[Slot.Helmet], this.armor[Slot.Glove]);
};

PlayerInfo.prototype.updateSwings = function()
{
	this.hits = Math.floor(1 + this.hit / 32);
}

PlayerInfo.prototype.updateResistances = function()
{
	this.resistances = (this.armor[Slot.Armor]?.resistances ?? 0) & (this.armor[Slot.Helmet]?.resistances ?? 0) & (this.armor[Slot.Gloves]?.resistances ?? 0) & (this.armor[Slot.Shield]?.resistances ?? 0);
}

PlayerInfo.prototype.unequipWeapon = function()
{
	this.attack -= this.weapon.attack; // put something in here for black belts (and black mage issues)?
	this.hit -= this.weapon.hit;
	this.weapon = null; 
	this.crit = 0;
	this.updateSwings();
}

PlayerInfo.prototype.unequipArmor = function(slot)
{
	this.absorb -= this.armor[slot].absorb;
	this.evade += this.armor[slot].evade;
	this.armor[slot] = null;
	this.updateResistances();
}

PlayerInfo.prototype.equipWeapon = function(weapon)
{
	if(this.weapon != null)
		this.unequipWeapon();
	this.weapon = weapon;
	this.attack += weapon.attack;
	this.hit += weapon.hit;
	this.crit = weapon.crit;
	this.updateSwings();
}

PlayerInfo.prototype.equipArmor = function(armor)
{
	if(this.armor[armor.slot] != null)
		this.unequipArmor(armor.slot);
	this.absorb += armor.absorb;
	this.evade -= armor.evade;
	this.armor[armor.slot] = armor;
	this.updateResistances();
}

PlayerInfo.prototype.levelUp = function (battleState)
{
	let levelResult = {};
	let levelStats = this.characterClass.levelUpTable[this.level++ - 1];
	
	let baseHPGain = Math.floor(this.vit / 4) + 1;
    if((levelStats & 0x2000) != 0)
        baseHPGain += battleState.getRandomNumber(20, 25);
	
    this.hp += baseHPGain;
    if(this.hp > 999)
        this.hp = 999;
 
    if ((levelStats & 0x1000) != 0 || battleState.getRandomNumber() % 4)
		if(++this.str % 2 == 0) // put in some checks for black belt and black mage to make this right or not
			this.attack++; 
	
    if ((levelStats & 0x0800) != 0 || battleState.getRandomNumber() % 4)
	{
		this.agi++;
		if(++this.evade > 99)
			this.evade = 99;
	}
	
	if ((levelStats & 0x0400) != 0 || battleState.getRandomNumber() % 4)
		this.int++;
	if ((levelStats & 0x0200) != 0 || battleState.getRandomNumber() % 4)
		this.vit++;
	if ((levelStats & 0x0100) != 0 || battleState.getRandomNumber() % 4)
		this.luck++;
	
	this.hit += this.characterClass.hitGain;
	if(this.hit > 200)
		this.hit = 200;
	this.updateSwings();
	this.mdef += this.characterClass.mdefGain;
}

function BattleCharacter(characterData, currentHp = characterData.hp, hitMultiplier = 1, abilityIndex = 0, magicIndex = 0, status = 0, absorb = characterData.absorb, evade = characterData.evade, morale = characterData.morale, resistances = characterData.resistances)
{
	this.characterData = characterData;
	this.currentHp = currentHp;
	this.hitMultiplier = hitMultiplier;
	this.status = status;
	this.absorb = absorb;
	this.evade = evade;
	this.morale = morale;
	this.resistances = resistances;
	this.abilityIndex = abilityIndex;
	this.magicIndex = magicIndex;
	this.ai = monsterAI[characterData.ai] ?? new MonsterAI(0x00, 0x00, [], []);
	this.magicSize = this.ai?.magicList?.length ?? 0;
	this.abilitySize = this.ai?.abilityList?.length ?? 0;
}

BattleCharacter.prototype.saveInstance = function(refreshDefense = false)
{
	return refreshDefense ? new BattleCharacter(this.characterData.saveInstance(), this.currentHp, this.hitMultiplier, this.abilityIndex, this.magicIndex, this.status, this.characterData.absorb, this.characterData.evade, this.morale, this.characterData.resistances) : new BattleCharacter(this.characterData.saveInstance(), this.currentHp, this.hitMultiplier, this.abilityIndex, this.magicIndex, this.status, this.absorb, this.evade, this.morale, this.resistances);
};

BattleCharacter.prototype.getNextSpellId = function()
{
	if(this.ai.magicChance == 0)
		return;
	let index = this.magicIndex++;
	if(this.magicIndex >= this.magicSize)
		this.magicIndex = 0;
	return this.ai.magicList[index];
};

BattleCharacter.prototype.getNextAbilityId = function()
{
	if(this.ai.abilityChance == 0)
		return;
	let index = this.abilityIndex++;
	if(this.abilityIndex >= this.abilitySize)
		this.abilityIndex = 0;
	return this.ai.abilityList[index];
};

BattleCharacter.prototype.heal = function(amount)
{
	if(amount == -1)
		this.currentHp = this.characterData.hp;
	else
		this.currentHp = Math.min(this.currentHp + amount, this.characterData.hp);
}

BattleCharacter.prototype.burn = function(amount)
{
	this.currentHp = Math.max(this.currentHp - amount, 1);
}

BattleCharacter.prototype.canAct = function()
{
	return !(this.status & (StatusEffect.dead | StatusEffect.stone | StatusEffect.stop | StatusEffect.sleep) || this.currentHp <= 0);
};

BattleCharacter.prototype.canTarget = function()
{
	return !(this.status & (StatusEffect.dead | StatusEffect.stone) || this.currentHp <= 0);
};

function PlayerCommand(battleState, command, info = null, targetType = 0, target = null)
{
	this.command = command;
	this.info = info;
	if((command == Command.Fight || targetType == Target.Enemy) && target == null)
	{
		target = battleState.getFirstTarget();
		targetType = Target.Enemy;
	}
	this.targetType = targetType;
	this.target = target;
}

var battleStates = [];
var delayStates = [0];

// used to store the state of characters each round in battle, also track changes between battles
function BattleState(index, randomNumberIndex, gold, battleCharacters, startTime = 0, encounterIndex = 0, formation = Formation.small, turn = 0)
{
	this.index = index;
	this.randomNumberIndex = randomNumberIndex;
	this.gold = gold;
	this.battleCharacters = battleCharacters;
	this.encounterIndex = encounterIndex;
	this.formation = formation;
	this.encounterState = EncounterState.Normal;
	this.turn = turn;
	this.startTime = startTime;
	this.estimatedTime = 0;
	this.damageTaken = 0;
	this.damageDealt = 0;
	this.battleComplete = false;
	this.partyWipe = false;
	this.abortPath = false;
	this.badTurn = false;
}
// TODO: CONSIDER WHERE/HOW TO TRACK WHAT RNG VALUES HAVE BEEN TESTED FROM A CERTAIN START POINT
// current design: initial state pre battle stored
// turn 1 of battle created from initial state + newEncounter call
// turn 1 ran from starting rng seed
// if turn 1 didn't result in party wipe, turn 1 results are kept
// if encounter is continuing, newTurn stores turn and creates next turn
// otherwise, next functions for equipping/healing are ran on current data, then next newEncounter call
// but, how to track if every turn result would be a party wipe (or other failure condition due to time, i.e. undead stunlock over many turns)
// 
// ALSO other design thing I just thought of, comparing options with or w/o healing for speed, etc.

BattleState.prototype.incrementRandomIndex = function(value)
{
	this.randomNumberIndex += value;
	while(this.randomNumberIndex > 255)
		this.randomNumberIndex -= 256;
}

BattleState.prototype.getRandomNumber = function(minimum = 0, maximum = -1)
{
	let value = randomNumbers[this.randomNumberIndex];
	this.incrementRandomIndex(1);
	if(maximum == -1)
		return value;
	return minimum + ((value * (1 + maximum - minimum)) >> 8);
}

BattleState.prototype.getTurnOrder = function()
{
	let turnOrderArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0x80, 0x81, 0x82, 0x83];
	for(let i = 0; i < 17; i++)
	{
		let firstTarget = this.getRandomNumber(0,12);
		let secondTarget = this.getRandomNumber(0,12);
		if(firstTarget == secondTarget)
			continue;
		let firstValue = turnOrderArray[firstTarget];
		turnOrderArray[firstTarget] = turnOrderArray[secondTarget];
		turnOrderArray[secondTarget] = firstValue;
	}
	return turnOrderArray;
}

BattleState.prototype.getTarget = function()
{
	let targetable1 = this.battleCharacters[0x80]?.canTarget() ?? false;
	let targetable2 = this.battleCharacters[0x81]?.canTarget() ?? false;
	let targetable3 = this.battleCharacters[0x82]?.canTarget() ?? false;
	let targetable4 = this.battleCharacters[0x83]?.canTarget() ?? false;
	if(!targetable1 && !targetable2 && !targetable3 && !targetable4)
		return 0;
	let target = 0;
	while(target == 0)
	{
		let roll = this.getRandomNumber(0,255);
		if(roll >= 128)
		{
			if(targetable1)
				target = 0x80;
		}
		else if(roll >= 64)
		{
			if(targetable2)
				target = 0x81;
		}
		else if(roll > 32)
		{
			if(targetable3)
				target = 0x82;
		}
		else
		{
			if(targetable4)
				target = 0x83;
		}
	}
	return target;
}

BattleState.prototype.getEnemyTarget = function()
{
	let targetsAvailable = false;
	for(let i = 0; i < 9; i++)
		if(this.battleCharacters[i]?.canTarget() ?? false)
			targetsAvailable = true;
	if(targetsAvailable == false)
		return -1;
    let target = -1;
    while(target == -1 || !(this.battleCharacters[target]?.canTarget() ?? false))
        target = this.getRandomNumber(0,8);
    return target;
}

BattleState.prototype.rollAttacks = function(swings, hit, damage, critThreshold, evasion, absorb, status, statusThreshold, characterStatus, targetStatus)
{
	let returnArray = [];
	let rollStatus = false;
	if(statusThreshold < 0)
		statusThreshold = 0;
	let stunSleep = (targetStatus & (StatusEffect.stop | StatusEffect.sleep)) > 0;
	let characterDark = (characterStatus & StatusEffect.dark) > 0;
	let targetDark = (targetStatus & StatusEffect.dark) > 0;
	
	let hitThreshold = Math.max(Math.min(168 - (characterDark ? 40 : 0) + (targetDark ? 40 : 0) + (stunSleep ? 0 : hit), 255) - (stunSleep ? 0 : evasion), 0);
	if (stunSleep)
		damage += Math.floor(damage / 4);
	
	for(let swing = 0; swing < swings; swing++)
	{
		let attackRoll = this.getRandomNumber(0, 200);
		if(attackRoll == 200)
		{
			returnArray[swing] = new attackResult('Miss', 0, false);
			continue;
		}
		let damageRoll = this.getRandomNumber(damage, damage * 2);
		let statusRoll = 255;
		if(status && !rollStatus && attackRoll <= hitThreshold)
			rollStatus = true;
		if(rollStatus)
			statusRoll = this.getRandomNumber(0, 200);
		
		if(attackRoll <= critThreshold && attackRoll <= hitThreshold)
			returnArray[swing] = new attackResult('Crit!', Math.max(damageRoll - absorb, 1) + damageRoll, statusRoll <= statusThreshold);
		else if(attackRoll <= hitThreshold)
			returnArray[swing] = new attackResult('Hit', Math.max(damageRoll - absorb, 1), statusRoll <= statusThreshold);
		else
			returnArray[swing] = new attackResult('Miss', 0, statusRoll <= statusThreshold);
	}
	return returnArray;
}

BattleState.prototype.getFirstTarget = function()
{
	let target = -1;
	let canTarget = false;
	for(target of formationTargetOrder[this.formation])
	{
		canTarget = this.battleCharacters[target]?.canTarget() ?? false;
		if(canTarget)
			break;
	}
	if(canTarget)
		return target;
	return -1;
}


BattleState.prototype.newTurn = function(playerAction)
{
	battleStates[this.index] = this;
	let battleCharacters = {};
	for(let i = 0; i < 9; i++)
		battleCharacters[i] = this.battleCharacters[i]?.saveInstance() ?? null;
	for(let i = 0x80; i < 0x84; i++)
		battleCharacters[i] = this.battleCharacters[i]?.saveInstance() ?? null;
	let battleState = new BattleState(1 + this.index, this.randomNumberIndex, this.gold, battleCharacters, this.startTime + this.estimatedTime, this.encounterIndex, this.formation, this.turn + 1);
	let command;
	if(playerAction == EncounterAction.Fight)
		command = new PlayerCommand(battleState, Command.Fight);
	else if(playerAction == EncounterAction.Flee)
		command = new PlayerCommand(battleState, Command.Flee);
	else if(playerAction == EncounterAction.Bane)
		command = new PlayerCommand(battleState, Command.Item, weapons['BaneSword']);
	battleState.playerCommands = {0x80: command, 0x81: null, 0x82: null, 0x83: null};
	return battleState;
};

BattleState.prototype.loadEnemySlot = function(formation, slot, enemyCounts, formation2Extras = false)
{
	let standardFormation = (formation == Formation.small || formation == Formation.large);
	let largeEnemy = slot.enemy.size == Formation.large;
	if(!formation2Extras)
		enemyCounts[2] += slot.minimum;
	if(standardFormation || (largeEnemy && enemyCounts[1] < 2) || (!largeEnemy && enemyCounts[0] < 6))
	{
		let enemyCount = this.getRandomNumber(slot.minimum, slot.maximum);
		if(enemyCount > 0 && !formation2Extras)
		{
			if(largeEnemy)
			{
				enemyCount = Math.min(enemyCounts[1] + enemyCount, standardFormation ? 4 : 2) - enemyCounts[1];
				for(let i = 0; i < enemyCount; i++)
					this.battleCharacters[i + enemyCounts[1]] = new BattleCharacter(slot.enemy);
				enemyCounts[1] += enemyCount;
			}
			else
			{
				enemyCount = Math.min(enemyCounts[0] + enemyCount, standardFormation ? 9 : 6) - enemyCounts[0];
				for(let i = 0; i < enemyCount; i++)
					this.battleCharacters[i + enemyCounts[0] + (standardFormation ? 0 : 2)] = new BattleCharacter(slot.enemy);
				enemyCounts[0] += enemyCount;
			}
		}
	}
	return enemyCounts;
}

BattleState.prototype.newEncounter = function(encounterIndex, playerAction, futureCheck = false)
{
	if(!futureCheck)
		battleStates[this.index] = this;
	let battleCharacters = {};
	for(let i = 0x80; i < 0x84; i++)
		battleCharacters[i] = this.battleCharacters[i]?.saveInstance(true) ?? null;
	
	let encounter = encounters[encounterIndex];
	// Generate enemies
	let formation2 = encounterIndex >= 0x80;
	let enemyCounts = [0, 0, 0]; // small/large enemy count
	let battleState = new BattleState(1 + this.index, this.randomNumberIndex, this.gold, battleCharacters, this.startTime + this.estimatedTime, encounterIndex, this.formation);
	
	if(encounter.formation == Formation.fiend || encounter.formation == Formation.chaos)
	{
		battleState.battleCharacters[0] = new BattleCharacter(encounter.slot1.enemy);
	}
	else
	{
		enemyCounts = battleState.loadEnemySlot(encounter.formation, encounter.slot1, enemyCounts);
		enemyCounts = battleState.loadEnemySlot(encounter.formation, encounter.slot2, enemyCounts);
		enemyCounts = battleState.loadEnemySlot(encounter.formation, encounter.slot3, enemyCounts, formation2);
		enemyCounts = battleState.loadEnemySlot(encounter.formation, encounter.slot4, enemyCounts, formation2);
	}
	
	// Surprise check
	if(encounter.runnable)
	{
		let surpriseAdjustment = Math.floor((battleCharacters[0x80].characterData.agi + battleCharacters[0x80].characterData.luck) / 8);
		let surpriseRoll = surpriseAdjustment + battleState.getRandomNumber(surpriseAdjustment, 100);
		surpriseRoll = Math.max(surpriseRoll - encounter.surprise, 0);

		if (surpriseRoll < 11)
			battleState.encounterState = EncounterState.Ambushed;
		else if (surpriseRoll > 89)
			battleState.encounterState = EncounterState.FirstStrike;
	}
	
	battleState.minimumEnemies = enemyCounts[2];
	
	let command;
	if(playerAction == EncounterAction.Fight)
		command = new PlayerCommand(battleState, Command.Fight);
	else if(playerAction == EncounterAction.Flee)
		command = new PlayerCommand(battleState, Command.Flee);
	else if(playerAction == EncounterAction.Bane)
		command = new PlayerCommand(battleState, Command.Item, weapons['BaneSword']);
	battleState.playerCommands = {0x80: command, 0x81: null, 0x82: null, 0x83: null};
	return battleState;
};

BattleState.prototype.checkPartyDead = function()
{
	for (let i = 0x80; i < 0x84; i++)
		if (this.battleCharacters[i] != null && this.battleCharacters[i].canTarget())
			return false;
	this.partyWipe = true;
	return true;
};

BattleState.prototype.checkEnemyDead = function()
{
	let exp = 0;
	let gold = 0;
	for (let i = 0; i < 9; i++)
		if (this.battleCharacters[i] != null && this.battleCharacters[i].canTarget())
			return false;
	this.battleComplete = true;
	
	for (let i = 0; i < 9; i++)
	{
		if(this.battleCharacters[i] != null)
		{
			exp += this.battleCharacters[i].characterData.exp;
			gold += this.battleCharacters[i].characterData.gold;
		}
	}
	
	let aliveHeros = 0;
    for (let i = 0x80; i < 0x84; i++)
		if (this.battleCharacters[i] != null && this.battleCharacters[i].canTarget())
			aliveHeros++;

    exp /= aliveHeros;
    if (exp == 0)
        exp = 1;
 
    for (let i = 0x80; i < 0x84; i++)
	{
		let character = this.battleCharacters[i];
		if (character != null && character.canTarget())
        {
            character.characterData.exp += exp;
            if (character.characterData.exp >= EXPTable[character.characterData.level - 1])
                character.characterData.levelUp(this);
            character.status &= (StatusEffect.poison | StatusEffect.dead | StatusEffect.stone);
			character.resistances = character.characterData.resistances;
        }
	}
    this.gold += gold;
	
	// TODO: reorder party based on status 
	
	return true;
};

BattleState.prototype.runTurn = function(delay)
{
	let missCount = 0;
	let critCount = 0;
	for (let i = 0x80; i < 0x84; i++)
	{
		if (this.battleCharacters[i] != null && (this.battleCharacters[i].status & StatusEffect.poison))
		{
			this.battleCharacters[i].currentHp -= 2;
			if (this.battleCharacters[i].currentHp <= 0)
				status = StatusEffect.dead;
		}
	}
	
	if(this.checkPartyDead())
	{ // if we died to poison at start of turn, no point rolling through 256 seeds
		this.abortPath = true;
		return 2;
	}
	
	this.incrementRandomIndex(delay);
	
	for (let i = 0x80; i < 0x84; i++)
	{
		if (this.battleCharacters[i] != null && this.battleCharacters[i].canTarget())
		{
			this.incrementRandomIndex(formationRNGHoldA[this.formation]);
			this.estimatedTime += 50;
		}
	}
	
	let averageDamageThreshold = 0;
	let targetCharacter = this.battleCharacters[0x80];
	for (let i = 0; i < 9; i++)
	{
		let character = this.battleCharacters[i];
		if (character != null && character.currentHp > 0 && (character.category & 0x80))
			character.currentHp = Math.min(character.currentHp + 3, character.characterData.hp);
		if (character != null && character.canAct())
			averageDamageThreshold += Math.max(character.characterData.hits * character.hitMultiplier * (character.characterData.attack * 1.5 - targetCharacter.absorb), 1);
	}
	
	let turnOrder = this.getTurnOrder();
	for(let j = 0; j < turnOrder.length; j++)
	{
		let characterIndex = turnOrder[j];
		let character = this.battleCharacters[characterIndex];
		if(character == null)
			continue;
		if (characterIndex > 127 && (character.status & (StatusEffect.stop | StatusEffect.sleep | StatusEffect.conf)) > 0)
        {   
			this.estimatedTime += 80;
            if ((character.status & (StatusEffect.stop | StatusEffect.conf)) > 0)
            {
                let roll = this.getRandomNumber();
                if (roll % 4 == 0)
                    character.status &= ~0x90;
            }
            else if ((character.status & StatusEffect.sleep) > 0)
            {
                let roll = this.getRandomNumber(0, 80);
                if (roll < character.characterData.hp)
                    character.status &= ~0x20;
            }
			continue;
		}
		if(!character.canAct())
			continue;
		if(characterIndex > 127 && this.encounterState != EncounterState.Ambushed) // player character
		{
			
			let playerCommand = this.playerCommands[characterIndex];
			if(playerCommand.command == Command.Fight)
			{
				let targetIndex = playerCommand.target;
				let targetCharacter = this.battleCharacters[targetIndex];
				this.incrementRandomIndex(targetIndex < 2 ? formationRNGPrimaryIncrement[this.formation] : formationRNGSecondaryIncrement[this.formation]);
				
				if(targetCharacter == null || !targetCharacter.canTarget())
				{
					this.estimatedTime += 114;
					continue;
				}
				
				let hitCount = character.characterData.hits;
				hitCount *= character.hitMultiplier;
				// later include "slow/fast" here, but out of scope?
				if (hitCount < 1)
					hitCount = 1;
				
				let result = this.rollAttacks(hitCount, character.characterData.hit, character.characterData.attack, character.characterData.crit,
										 targetCharacter.evade, targetCharacter.absorb, false, 100 - targetCharacter.characterData.mdef,
										 character.status, targetCharacter.status);
				let damageSum = 0;
				let applyStatus = false;
				let hasCrit = false;
				result.forEach(element => {
				damageSum += element.Damage;
				if(element.Status)
					applyStatus = true;
				if(element.Result == 'Miss')
					missCount++;
				else if (element.Result == 'Crit!')
				{
					critCount++;
					hasCrit = true;
				}
				});
				
				targetCharacter.currentHp -= damageSum;
				if (targetCharacter.currentHp <= 0)
				{
					targetCharacter.currentHp = 0;
					targetCharacter.status |= StatusEffect.dead;
				}
				
				this.estimatedTime += 150;
				this.damageDealt += damageSum;
			}
			else if(playerCommand.command == Command.Flee)
			{
				// for complete simulation will need to calculate all the bugged values and stuff.
				// just assuming solo character, so slot 3 == StatusEffect.dead
				// also put in a runnable check to fail, but if you route to flee from and unrunnable, that's on you when it fails
				if(this.encounterState == EncounterState.FirstStrike || character.luck > this.getRandomNumber(0, 16))
				{
					this.battleComplete = true;
					return;
				}
			}
			else if(playerCommand.command == Command.Magic || playerCommand.command == Command.Item)
			{
				let spellInfo = (playerCommand.command == Command.Item ? spells[SpellNames[playerCommand.info.spell]] : playerCommand.info);
				
				if (spellInfo.effect == 3 || spellInfo.effect == 4)
				{
					// status skills
					let target;
					
					if (spellInfo.target == Target.Enemy)
						target = playerCommand.target;

					for (let targetOption of enemyTargetList)
					{
						if (target != null && target != targetOption)
							continue;
						let targetCharacter = this.battleCharacters[targetOption];
						if (targetCharacter == null || !targetCharacter.canTarget())
							continue;
						let resistant = (targetCharacter.resistances & spellInfo.element) > 0;
						this.incrementRandomIndex(1);
						
						// probably need to later add in the if weak thing?
						// later weakness calculations go here
						
						let attackRoll = this.getRandomNumber(0, 200);
						
						if(attackRoll != 200 && attackRoll <= Math.max(resistant ? 0 : 148 + spellInfo.hit - targetCharacter.characterData.mdef, 1))
						{
							if(spellInfo.effect == 3)
							{
								if (!(targetCharacter.status & spellInfo.strength))
								{
									targetCharacter.status |= spellInfo.strength;
									if((targetCharacter.status & (StatusEffect.dead | StatusEffect.stone)) > 0)
										targetCharacter.currentHp = 0;
								}
							}
							else // spellInfo.effect == 4
							{
								targetCharacter.hitMultiplier = Math.max(targetCharacter.hitMultiplier - 1, 0);
							}
						}
					}
				}
			}
			
			if(this.checkEnemyDead())
				return;
		}
		else if (characterIndex < 9 && this.encounterState != EncounterState.FirstStrike) // monster
		{
			let morale = character.morale - 2 * this.battleCharacters[0x80].characterData.level + this.getRandomNumber(0, 50);
			if (morale < 80) // enemy runs
			{
				this.battleCharacters[characterIndex] = null;
				if(this.checkEnemyDead())
					return;
				continue;
			}
			
			let enemyCommand = Command.Fight;
			if(character.ai.magicChance > 0 && this.getRandomNumber(0, 128) < character.ai.magicChance)
				enemyCommand = Command.Magic;
			else if(character.ai.abilityChance > 0 && this.getRandomNumber(0, 128) < character.ai.abilityChance)
				enemyCommand = Command.Ability;
			
			if (enemyCommand == Command.Fight)
			{
				let targetIndex = this.getTarget();
				let targetCharacter = this.battleCharacters[targetIndex];
				this.incrementRandomIndex(12);

				let hitCount = character.characterData.hits;
				hitCount *= character.hitMultiplier;
				// later include "slow/fast" here, but out of scope?
				if (hitCount < 1)
					hitCount = 1;
				
				let statusThreshold = (character.characterData.weaknesses & targetCharacter.resistances) > 0 ? 0 : 100 - targetCharacter.characterData.mdef;
				let result = this.rollAttacks(hitCount, character.characterData.hit, character.characterData.attack, character.characterData.crit,
										 targetCharacter.evade, targetCharacter.absorb, character.characterData.attackEffects > 0, statusThreshold,
										 character.status, targetCharacter.status);
				let damageSum = 0;
				let applyStatus = false;
				let hasCrit = false;
				result.forEach(element => {
				damageSum += element.Damage;
				if(element.Status)
					applyStatus = true;
				if(element.Result == 'Miss')
					missCount++;
				else if (element.Result == 'Crit!')
				{
					critCount++;
					hasCrit = true;
				}
				});
				
				if(applyStatus)
					targetCharacter.status |= character.characterData.attackEffects;
				
				targetCharacter.currentHp -= damageSum;
				if (targetCharacter.currentHp <= 0)
				{
					targetCharacter.currentHp = 0;
					targetCharacter.status |= StatusEffect.dead;
				}
				this.damageTaken += damageSum;
				this.estimatedTime += 90;
			}
			else if (enemyCommand == Command.Magic || enemyCommand == Command.Ability)
			{
				// add mute check when more functionality is added
				
				let spellInfo;
				if (enemyCommand == Command.Magic) 
					spellInfo = spells[SpellNames[character.getNextSpellId()]];
				else
					spellInfo = spells[AbilityNames[character.getNextAbilityId()]];
				
				if (spellInfo.effect == 1)
				{
					// damage skills
					let target;
					
					if (spellInfo.target == Target.Enemy)
						target = this.getTarget();

					for (let targetOption of partyTargetList)
					{
						let damage = spellInfo.strength;
						if (target != null && target != targetOption)
							continue;
						let targetCharacter = this.battleCharacters[targetOption];
						if (targetCharacter == null || !targetCharacter.canTarget())
							continue;
						let resistant = (targetCharacter.resistances & spellInfo.element) > 0;
						if (resistant)
							damage /= 2;
						let damageRoll = this.getRandomNumber(damage, 2 * damage);
						
						// probably need to later add in the if weak thing?
						// later weakness calculations go here
						
						let attackRoll = this.getRandomNumber(0, 200);
						if(attackRoll != 200 && attackRoll <= Math.max(resistant ? 0 : 148 + spellInfo.hit - targetCharacter.characterData.mdef, 1))
							damageRoll *= 2;
						
						targetCharacter.currentHp -= damageRoll;
						if (targetCharacter.currentHp <= 0)
						{
							targetCharacter.currentHp = 0;
							targetCharacter.status |= StatusEffect.dead;
						}
						
						this.damageTaken += damageRoll;
						this.estimatedTime += 70;
					}
				}
				else if (spellInfo.effect == 3 || spellInfo.effect == 4)
				{
					// status skills
					let target;
					
					if (spellInfo.target == Target.Enemy)
						target = this.getTarget();

					for (let targetOption of partyTargetList)
					{
						if (target != null && target != targetOption)
							continue;
						let targetCharacter = this.battleCharacters[targetOption];
						if (targetCharacter == null || !targetCharacter.canTarget())
							continue;
						let resistant = (targetCharacter.resistances & spellInfo.element) > 0;
						this.incrementRandomIndex(1);
						
						// probably need to later add in the if weak thing?
						// later weakness calculations go here
						
						let attackRoll = this.getRandomNumber(0, 200);
						if(attackRoll != 200 && attackRoll <= Math.max(resistant ? 0 : 148 + spellInfo.hit - targetCharacter.characterData.mdef, 1))
						{
							if(spellInfo.effect == 3)
							{
								if (!(targetCharacter.status & spellInfo.strength))
								{
									targetCharacter.status |= spellInfo.strength;
									if((targetCharacter.status & (StatusEffect.dead | StatusEffect.stone)) > 0)
										targetCharacter.currentHp = 0;
								}
							}
							else // spellInfo.effect == 4
							{
								targetCharacter.hitMultiplier = Math.max(targetCharacter.hitMultiplier - 1, 0);
							}
						}
						
						this.estimatedTime += 70;
					}
				}
				else if (spellInfo.effect == 0xf)
				{
					character.currentHp = character.characterData.hp;
					character.status = 0;
				}
				else if (spellInfo.effect == 0x10)
				{
					character.evade += spellInfo.strength;
					if(character.evade > 255)
						character.evade = 255;
					
					this.incrementRandomIndex(characterIndex < 2 ? formationRNGPrimaryIncrement[this.formation] : formationRNGSecondaryIncrement[this.formation]);
				}
				else if (spellInfo.effect == 0xc)
				{
					// status skills
					let target;
					
					if (spellInfo.target == Target.Ally)
						target = this.getEnemyTarget();
					
					for (let targetOption of partyTargetList)
					{
						if (target != null && target != targetOption)
							continue;
						let targetCharacter = this.battleCharacters[targetOption];
						if (targetCharacter == null || !targetCharacter.canTarget())
							continue;
						
						targetCharacter.hitMultiplier = Math.min(targetCharacter.hitMultiplier + 1, 2);
						
						this.incrementRandomIndex(targetOption < 2 ? formationRNGPrimaryIncrement[this.formation] : formationRNGSecondaryIncrement[this.formation]);
					}


				}
				else if (spellInfo.effect == 0x12)
				{
					// status skills
					let target;
					
					if (spellInfo.target == Target.Enemy)
						target = this.getTarget();

					for (let targetOption of partyTargetList)
					{
						if (target != null && target != targetOption)
							continue;
						let targetCharacter = this.battleCharacters[targetOption];
						if (targetCharacter == null || !targetCharacter.canTarget())
							continue;
						let resistant = (targetCharacter.resistances & spellInfo.element) > 0;
						
						// probably need to later add in the if weak thing?
						// later weakness calculations go here
						if (targetCharacter.currentHp < 300 && !(targetCharacter.resistance & spellInfo.element))
						{
							targetCharacter.currentHp.hp = 0;
							targetCharacter.status |= StatusEffect.dead;
						}
						this.estimatedTime += 70;
					}
				}
			}
			if(this.checkPartyDead())
				return;
		}
	}
	// failsafe if somehow the enemies are missing, idk
	if(this.checkEnemyDead())
		return;
	if(this.damageTaken > averageDamageThreshold * 2)
		this.badTurn = true;
	if(this.damageTaken == 0 && this.damageDealt == 0 && this.turn > 1) // idk figure out something better to track average damage or something
		this.badTurn = true;
	if(this.battleCharacters[0x80].status > 0) // poison could be acceptable, or secondary characters dying pre garland, but /shrug
		this.badTurn = true;
	return;
};

BattleState.prototype.improvedEndState = function(redoBattleEndState, redoBattleNextState)
{
	let battleStartState = this.newEncounter(redoBattleNextState.encounterIndex, EncounterAction.Fight, true);
	let sumHp = 0;
	let oldSumHp = 0;
	let sumEnemyHp = 0;
	let oldSumEnemyHp = 0;
	let sumEnemies = 0;
	let oldSumEnemies = 0;
	
	for (let i = 0x80; i < 0x84; i++)
	{
		let character = battleStartState.battleCharacters[i];
		let characterOld = redoBattleEndState.battleCharacters[i];
		let characterNew = redoBattleNextState.battleCharacters[i];
		if (character != null && character.canAct())
		{
			if(characterNew.currentHp > characterOld.currentHp) // heals
			{
				if(characterNew.currentHp == characterNew.characterData.hp)
					character.currentHp = character.characterData.hp;
				else
					character.currentHp += Math.min(characterNew.currentHp - characterOld.currentHp, character.characterData.hp);
			}
			if(characterNew.currentHp < characterOld.currentHp) // damage tiles
			{
				if(characterNew.currentHp == 1)
					character.currentHp = 1;
				else
					character.currentHp -= Math.max(characterNew.currentHp - characterOld.currentHp, 1);
			}
			sumHp += character.currentHp;
			oldSumHp += characterOld.currentHp;
		}
	}
	
	for (let i = 0; i < 9; i++)
	{
		let character = battleStartState.battleCharacters[i];
		if (character != null && character.canAct())
		{
			sumEnemyHp += character.currentHp;
			sumEnemies += 1;
		}
		let characterOld = redoBattleNextState.battleCharacters[i];
		if (characterOld != null && characterOld.canAct())
		{
			oldSumEnemyHp += characterOld.currentHp;
			oldSumEnemies += 1;
		}
	}
	
	//TODO: maybe create some kind of point system for time vs. risk, etc. of conditions combined?
	if(sumEnemies < oldSumEnemies)
		return true;
	if(sumEnemyHp < oldSumEnemyHp)
		return true;
	if(sumEnemies == battleStartState.minimumEnemies && sumHp > oldSumHp)
		return true;
	if(sumEnemies == oldSumEnemies && ((battleStartState.encounterState == EncounterState.FirstStrike && redoBattleNextState != EncounterState.FirstStrike) || (battleStartState.encounterState != EncounterState.Ambushed && redoBattleNextState == EncounterState.Ambushed)))
		return true;
	//if(this.startTime + this.estimatedTime < redoBattleEndState.startTime + redoBattleEndState.estimatedTime)
	//	return true;
	return false;
};

var iterationAbortCount = 0;

function runBattle(currentState, encounter, encounterAction, redoBattleEndState, redoBattleNextState, currentTargetTime)
{
	let battleStartState = currentState.newEncounter(encounter, encounterAction);
	battleStartState.startState = true;
	delayStates[battleStartState.index] = 0;
	let delayCommands = [];
	let damageTakenStates = [];
	let damageDealtStates = [];
	let estimatedTimeStates = [];
	let estimatedTimeTotalStates = [battleStartState.startTime];
	let priorBattleState = battleStartState;
	let battleState = battleStartState.newTurn(encounterAction);
	let currentIterationCount = 0;
	let redoBattle = redoBattleEndState != null;
	let delay = redoBattle ? (delayStates[battleState.index] ?? 0) : 0;
	
	do 
	{
		currentIterationCount++;
		battleState.runTurn(delay);
		
		if(battleState.battleComplete && redoBattle && !battleState.improvedEndState(redoBattleEndState, redoBattleNextState))
		{
			battleState.battleComplete = false;
			battleState.badTurn = true;
		}
		if(currentTargetTime != null && battleState.startTime + battleState.estimatedTime >= currentTargetTime)
			battleState.badTurn = true;
		if(battleState.partyWipe || battleState.badTurn) 
		{
			delay++;
			if(battleState.abortPath || delay == 256 || battleState.encounterState == EncounterState.Ambushed)
			{
				priorBattleState = battleStates[battleState.index - 2];
				battleState = battleStates[battleState.index - 1];
				delay = delayStates[battleState.index];
				if(battleState.index == battleStartState.index)
					return battleStartState;
			}
			battleState = priorBattleState.newTurn(encounterAction);
			battleState.estimatedTime += (delay < 6 ? delay * 41 : 50 * Math.floor(delay / 3) + 41 * (delay % 3));
		}
		else if(!battleState.battleComplete)
		{
			delayStates[battleState.index] = delay; // need some kind of detection for pointless RNG loop
			delayCommands[battleState.turn - 1] = delay;
			damageTakenStates[battleState.turn - 1] = battleState.damageTaken;
			damageDealtStates[battleState.turn - 1] = battleState.damageDealt;
			estimatedTimeStates[battleState.turn - 1] = battleState.estimatedTime;
			estimatedTimeTotalStates[battleState.turn - 1] = battleState.startTime + battleState.estimatedTime;
			priorBattleState = battleState;
			battleState = priorBattleState.newTurn(encounterAction);
			delay = redoBattle ? (delayStates[battleState.index] ?? 0) : 0
			battleState.estimatedTime += (delay < 6 ? delay * 41 : 50 * Math.floor(delay / 3) + 41 * (delay % 3));
		}
		if(currentIterationCount > 500) // something has probably gone wrong, abort path.  TODO: add better culling to prevent useless turns from eating time/count
		{
			iterationAbortCount++;
			return battleStartState;
		}
	} while(!battleState.battleComplete);
	
	delayStates[battleState.index] = delay;
	delayCommands[battleState.turn - 1] = delay;
	damageTakenStates[battleState.turn - 1] = battleState.damageTaken;
	damageDealtStates[battleState.turn - 1] = battleState.damageDealt;
	estimatedTimeStates[battleState.turn - 1] = battleState.estimatedTime;
	estimatedTimeTotalStates[battleState.turn - 1] = battleState.startTime + battleState.estimatedTime;
	
	battleState.encounterSummary = {encounter: encounter, characters: battleStartState.battleCharacters, delay: delayCommands, dealt: damageDealtStates, taken: damageTakenStates, time: estimatedTimeStates, totalTime: estimatedTimeTotalStates};
	return battleState;
}

function RouteAction(actionString)
{
	if(actionString == null)
	{
		this.action = Action.None;
	}
	else
	{
		let splitAction = actionString.split(/[ \t]+/);
		switch(splitAction[0])
		{
			case 'Encounter':
				this.action = Action.Encounter;
				this.encounterIndex = (parseInt(splitAction[1]) || 0);
				let encounterAction = splitAction[2];
				if (encounterAction == 'Bane')
					this.encounterAction = EncounterAction.Bane;
				else if (encounterAction == 'Flee')
					this.encounterAction = EncounterAction.Flee;
				else
					this.encounterAction = EncounterAction.Fight;
				break;
			case 'ChangeGold':
				this.action = Action.ChangeGold;
				this.amount = (parseInt(splitAction[1]) || 0);
				break;
			case 'EquipWeapon':
				this.action = Action.EquipWeapon;
				this.weapon = weapons[(splitAction[1] ?? 'Rapier')];
				this.characterSlot = (parseInt(splitAction[2]) || 0x80);
				break;
			case 'UnequipWeapon':
				this.action = Action.UnequipWeapon;
				this.characterSlot = (parseInt(splitAction[1]) || 0x80);
				break;
			case 'EquipArmor':
				this.action = Action.EquipArmor;
				this.armor = armor[(splitAction[1] ?? 'Cloth')];
				this.characterSlot = (parseInt(splitAction[2]) || 0x80);
				break;
			case 'UnequipArmor':
				this.action = Action.UnequipArmor;
				this.slot = (parseInt(splitAction[1]) || armor[splitAction[1]]?.slot || 0);
				this.characterSlot = (parseInt(splitAction[2]) || 0x80);
				break;
			case 'Heal': // might need a heal all or parameter for that
				this.action = Action.Heal;
				this.amount = (parseInt(splitAction[1]) || -1);
				this.characterSlot = (parseInt(splitAction[2]) || 0x80);
				break;
			case 'Burn': // should hit all but I don't care atm
				this.action = Action.Burn;
				this.amount = (parseInt(splitAction[1]) || -1);
				this.characterSlot = (parseInt(splitAction[2]) || 0x80);
				break;
			case 'TimeTarget':
				this.action = Action.TimeTarget;
				this.amount = (parseInt(splitAction[1]) || 999999);
				break;
			default:
				this.action = Action.UnknownCommand;
				this.inputString = actionString;
		}
	}
}

var route = [
new RouteAction('Encounter 0x02'),
new RouteAction('Encounter 0x83'),
new RouteAction('Encounter 0x07'),
new RouteAction('EquipWeapon ShortSword'),
new RouteAction('Encounter 0x7E'), // pirates
new RouteAction('TimeTarget'),
new RouteAction('Heal'),
new RouteAction('Encounter 0xDC'),
new RouteAction('Encounter 0x5D'),
new RouteAction('TimeTarget'),
new RouteAction('Heal'),
new RouteAction('Encounter 0x87'),
new RouteAction('Encounter 0x87'),
new RouteAction('Encounter 0x87'),
new RouteAction('Encounter 0x0b'),
new RouteAction('Encounter 0x0a'),
new RouteAction('Encounter 0x66'),
new RouteAction('Encounter 0x85'),
new RouteAction('Encounter 0x66'),
new RouteAction('EquipArmor IronArmor'),
new RouteAction('Encounter 0x1C'),
new RouteAction('Encounter 0x85'),
new RouteAction('Encounter 0x10'),
new RouteAction('Encounter 0x6B'),
new RouteAction('Encounter 0x81'),
new RouteAction('Encounter 0x6B'),
new RouteAction('Encounter 0x0F'),
new RouteAction('Encounter 0x0D'),
new RouteAction('Encounter 0x7D'),
new RouteAction('Encounter 0x0C'),
new RouteAction('Encounter 0x12'),
new RouteAction('Encounter 0x8E'),
new RouteAction('Encounter 0x0C'),
new RouteAction('Encounter 0x5D'),
new RouteAction('Encounter 0x01'),
new RouteAction('Encounter 0x0C'),
new RouteAction('Encounter 0x82'),
new RouteAction('Encounter 0x5C'),
new RouteAction('Encounter 0x5C'),
new RouteAction('TimeTarget'),
new RouteAction('Heal'),
new RouteAction('EquipWeapon SilverSword'),
new RouteAction('Encounter 0x5E'),
new RouteAction('Encounter 0x5C'),
new RouteAction('Encounter 0x0C'),
new RouteAction('Encounter 0x87'),
new RouteAction('Encounter 0x12'),
new RouteAction('Encounter 0xDC'),
new RouteAction('Encounter 0xDC'),
new RouteAction('Encounter 0x88'),
new RouteAction('Encounter 0x8A'),
new RouteAction('Encounter 0x90'),
new RouteAction('Encounter 0x8D'),
new RouteAction('Encounter 0x93'),
new RouteAction('Encounter 0x1C'),
new RouteAction('Encounter 0x93'),
new RouteAction('Encounter 0x16'),
new RouteAction('Encounter 0x8F'),
new RouteAction('Encounter 0x7C'),
new RouteAction('Encounter 0x1C'),
new RouteAction('Encounter 0x93'),
new RouteAction('Encounter 0x91'),
new RouteAction('Encounter 0x93'),
new RouteAction('Encounter 0x91'),
new RouteAction('Encounter 0x91'),
new RouteAction('Encounter 0x15'),
new RouteAction('Encounter 0x13'),
new RouteAction('Encounter 0x13'),
new RouteAction('Encounter 0x19'),
new RouteAction('Encounter 0x13'),
new RouteAction('Encounter 0x13'),
new RouteAction('Encounter 0x8C'),
new RouteAction('Encounter 0x88'),
new RouteAction('Encounter 0x19'),
new RouteAction('Encounter 0x8A'),
new RouteAction('Encounter 0x13'),
new RouteAction('TimeTarget'),
new RouteAction('Heal 120'),
new RouteAction('Encounter 0x15'),
new RouteAction('Encounter 0x64'),
new RouteAction('Encounter 0x93'),
new RouteAction('Encounter 0x91'),
new RouteAction('Encounter 0x1C'),
new RouteAction('Encounter 0x8F'),
new RouteAction('Encounter 0x93'),
new RouteAction('Encounter 0x1C'),
new RouteAction('Encounter 0x0E'),
new RouteAction('Encounter 0x63'),
new RouteAction('Encounter 0x18'),
new RouteAction('Encounter 0x63'),
new RouteAction('Encounter 0x1D'),
new RouteAction('Encounter 0x63'),
new RouteAction('Encounter 0x7A'),
new RouteAction('Encounter 0x8C'),
new RouteAction('Encounter 0x8A'),
new RouteAction('Encounter 0x88'),
new RouteAction('Encounter 0x5B'),
new RouteAction('Encounter 0x5C'),
new RouteAction('Encounter 0x1E'),
new RouteAction('Encounter 0x63'),
new RouteAction('TimeTarget'),
new RouteAction('Heal'),
new RouteAction('EquipArmor SilverGauntlet'),
new RouteAction('EquipArmor SilverHelmet'),
new RouteAction('Encounter 0x20'),
new RouteAction('Encounter 0x1E'),
new RouteAction('Encounter 0x20'),
new RouteAction('Encounter 0x5F'),
new RouteAction('Encounter 0xA5'),
new RouteAction('Encounter 0x20'),
new RouteAction('Encounter 0x9C'),
new RouteAction('Encounter 0x9C'),
new RouteAction('Encounter 0x2C'),
new RouteAction('Encounter 0x98'),
new RouteAction('Encounter 0x2F'),
new RouteAction('Encounter 0x2C'), // trap undead tile // Ice spikes?
new RouteAction('Encounter 0x2E'),
new RouteAction('Burn 6'),
new RouteAction('Encounter 0x6C'),
new RouteAction('Encounter 0x2C'),
new RouteAction('Encounter 0x69'),
new RouteAction('Encounter 0x2C'), // trap undead tile 
new RouteAction('Burn 6'),
new RouteAction('Encounter 0x2F'),
new RouteAction('Encounter 0x2F'),
new RouteAction('Encounter 0x6C'),
new RouteAction('Encounter 0x96'),
new RouteAction('Encounter 0x0F'),
new RouteAction('Encounter 0x5F'),
new RouteAction('Encounter 0x5F'),
new RouteAction('Encounter 0x20'),
new RouteAction('Encounter 0xDE'),
new RouteAction('TimeTarget'),
new RouteAction('Heal'),
new RouteAction('Encounter 0x1E'),
new RouteAction('Burn 48'),
new RouteAction('Encounter 0xDE'), // LAVA 403 -> 355
new RouteAction('Burn 167'),
new RouteAction('Encounter 0x24'), // 355 -> 188
new RouteAction('EquipWeapon IceSword'),
new RouteAction('EquipArmor IceShield'),
new RouteAction('UnequipArmor SilverGauntlet'),
new RouteAction('Burn 29'),
new RouteAction('Encounter 0x24'), // 185 -> 156
new RouteAction('Burn 45'),
new RouteAction('Encounter 0x29'), // 147 -> 102
new RouteAction('Encounter 0x79'),
new RouteAction('Encounter 0x26'),
new RouteAction('TimeTarget'),
new RouteAction('ChangeGold -50000'), // bottle, need to get other chests in here 
new RouteAction('Heal'),
new RouteAction('EquipArmor ProRing'),
new RouteAction('Encounter 0xA0'),
new RouteAction('Encounter 0x72'),
new RouteAction('Encounter 0x72'),
new RouteAction('Encounter 0x49'),
new RouteAction('Encounter 0x48'),
new RouteAction('EquipArmor OpalBracelet'),
new RouteAction('Encounter 0x5A'),
new RouteAction('Encounter 0xDA'),
new RouteAction('Encounter 0x47'),
new RouteAction('Encounter 0x5A'),
new RouteAction('Encounter 0xE1'),
new RouteAction('Encounter 0x47'),
new RouteAction('Encounter 0xDA'),
new RouteAction('Encounter 0xC4'),
new RouteAction('Encounter 0x48'),
new RouteAction('Encounter 0x49'),
new RouteAction('Encounter 0xC2'),
new RouteAction('Encounter 0xC4'),
new RouteAction('Encounter 0x78'),
new RouteAction('Encounter 0x60'),
new RouteAction('Encounter 0xA0'),
new RouteAction('Encounter 0xA0'),
new RouteAction('Encounter 0x4F'),
new RouteAction('Encounter 0x3F'),
new RouteAction('Encounter 0x4F'),
new RouteAction('Encounter 0x4F'),
new RouteAction('Encounter 0x4A'), // waterfall trap tile
new RouteAction('Encounter 0x4A'), // waterfall trap tile
new RouteAction('Encounter 0x3F'),
new RouteAction('Encounter 0x4F'),
new RouteAction('Encounter 0xCA'),
new RouteAction('Encounter 0x4F'),
new RouteAction('Encounter 0x3F'),
new RouteAction('Encounter 0xA0'),
new RouteAction('Encounter 0x41'),
new RouteAction('Encounter 0x41'),
new RouteAction('TimeTarget'),
new RouteAction('Heal'),
new RouteAction('Encounter 0x82'),
new RouteAction('Encounter 0x82'),
new RouteAction('Encounter 0x82'),
new RouteAction('Encounter 0x9E'),
new RouteAction('Encounter 0x82'),
new RouteAction('Encounter 0x8D'),
new RouteAction('Encounter 0x88'),
new RouteAction('Encounter 0x3B'),
new RouteAction('Encounter 0x4C'),
new RouteAction('Encounter 0x3B'),
new RouteAction('Encounter 0x68'),
new RouteAction('EquipWeapon SunSword'),
new RouteAction('Encounter 0x4C'),
new RouteAction('Encounter 0x4A'),
new RouteAction('Encounter 0x4E'),
new RouteAction('Encounter 0x69'),
new RouteAction('Encounter 0x54'),
new RouteAction('Encounter 0x4D'),
new RouteAction('Encounter 0x69'),
new RouteAction('Encounter 0xB3'),
new RouteAction('Encounter 0x51'),
new RouteAction('Encounter 0xC1'),
new RouteAction('Encounter 0x51'),
new RouteAction('Encounter 0xC1'),
new RouteAction('Encounter 0x77 Bane'),
new RouteAction('Encounter 0xBD'),
new RouteAction('TimeTarget'),
new RouteAction('Heal'),
new RouteAction('Encounter 0x02'),
new RouteAction('Encounter 0x57'),
new RouteAction('Encounter 0xAF'),
new RouteAction('Encounter 0x46'),
new RouteAction('Encounter 0xCB'),
new RouteAction('Encounter 0x57'),
new RouteAction('Encounter 0x57'),
new RouteAction('Encounter 0xA1'),
new RouteAction('Encounter 0xBA'),
new RouteAction('Encounter 0x73'),
new RouteAction('Encounter 0xA6'),
new RouteAction('Encounter 0xA8'),
new RouteAction('Encounter 0xA8'),
new RouteAction('Encounter 0xA6'),
new RouteAction('Encounter 0xA6'),
new RouteAction('Encounter 0x74'),
new RouteAction('Encounter 0xC9'),
new RouteAction('Encounter 0xC9'),
new RouteAction('Encounter 0x75 Bane'),
new RouteAction('Encounter 0xD4'),
new RouteAction('Encounter 0x76 Bane'),
new RouteAction('Encounter 0x7B Bane'),
new RouteAction('TimeTarget'),
];

//PlayerInfo(name, characterClass, classChanged, level, exp, hp, str, agi, int, vit, luck, evade, absorb, hits, hit, attack, crit, mdef, weaknesses, resistances, weapon, armor, shield, helmet, glove)

let testCharacters = {
	0: null,
	1: null,
	2: null,
	3: null,
	4: null,
	5: null,
	6: null,
	7: null,
	8: null,
	0x80: new BattleCharacter(new PlayerInfo('CCCC', characterClasses['fighter'], false, 2, 138, 61, 21, 6, 1, 11, 5, 39, 15, 1, 18, 19, 4, 18, 0, 0, weapons['Rapier'], armor['ChainArmor'], null, null, null), 35),
	0x81: null,
	0x82: null,
	0x83: null,
}


async function runRoute()
{
	let startingState = new BattleState(0, 193, 630, testCharacters);
	let startingBattleStates = [];
	let endingBattleStates = [];
	let endingBattleSummaries = [];
	let encounterIndexes = [];
	let highestIndex = 0;
	let encounterCount = 0;
	let currentState = startingState;
	let currentIterationCount = 0;
	let redoBattle = false;
	let targetTime;
	
	for(let i = 0; i < route.length; i++)
	{
		let currentAction = route[i];
		if(i > highestIndex)
			highestIndex = i;
		currentIterationCount++;
		switch(currentAction.action)
		{
			case Action.Encounter:
				if(i == highestIndex)
					encounterIndexes[encounterCount] = i;
				startingBattleStates[encounterCount] = currentState;
				let endOfBattleState = await runBattle(currentState, currentAction.encounterIndex, currentAction.encounterAction, redoBattle ? endingBattleStates[encounterCount] : null, redoBattle ? startingBattleStates[encounterCount + 1] : null, targetTime);
				targetTime = null;
				if(endOfBattleState.startState) // if the battle failed, go backwards to the previous battle
				{
					startingBattleStates[encounterCount] = currentState;
					if(encounterCount > 0) 
						i = encounterIndexes[--encounterCount] - 1; // go back 1 further so that we hit the right spot
					
					for(let indexBack = 2; currentState.index - indexBack >= 0 && ++delayStates[currentState.index - indexBack] == 256; indexBack++)
						delayStates[currentState.index - indexBack] = 0;
					
					currentState = startingBattleStates[encounterCount];
					redoBattle = true;
				}
				else
				{
					endingBattleStates[encounterCount] = endOfBattleState;
					endingBattleSummaries[encounterCount] = endOfBattleState.encounterSummary;
					currentState = endOfBattleState;
					redoBattle = false;
					encounterCount++;
				}
				break;
			case Action.ChangeGold:
				currentState.gold += currentAction.amount;
				break;
			case Action.EquipWeapon:
				currentState.battleCharacters[currentAction.characterSlot].characterData.equipWeapon(currentAction.weapon);
				break;
			case Action.UnequipWeapon:
				currentState.battleCharacters[currentAction.characterSlot].characterData.unequipWeapon();
				break;
			case Action.EquipArmor:
				currentState.battleCharacters[currentAction.characterSlot].characterData.equipArmor(currentAction.armor);
				break;
			case Action.UnequipArmor:
				currentState.battleCharacters[currentAction.characterSlot].characterData.unequipArmor(currentAction.slot);
				break;
			case Action.Heal: // might need a heal all or parameter for that
				currentState.battleCharacters[currentAction.characterSlot].heal(currentAction.amount);
				break;
			case Action.Burn: // should hit all characters alive
				currentState.battleCharacters[currentAction.characterSlot].burn(currentAction.amount);
				break;
			case Action.TimeTarget: 
				targetTime = currentAction.amount;
				if(i == highestIndex)
					console.log('index ' + i + ': ' + (currentState.startTime + currentState.estimatedTime));
				break;
			default:
				console.log('UnknownCommand: ' + currentAction.inputString);
		}
		if(currentIterationCount > 50000) // something has probably gone wrong, abort everything
		{
			console.log('Too many route steps - Please stop and fix your route');
			break;
		}
	}
	console.log('Completed');
	console.log(endingBattleSummaries);
	console.log(iterationAbortCount);
}
