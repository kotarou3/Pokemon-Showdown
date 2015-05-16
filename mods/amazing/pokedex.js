exports.BattlePokedex = {
	weezing: {
		inherit: true,
		baseStats: {hp:45,atk:100,def:150,spa:95,spd:90,spe:70}
	},
	ampharos: {
		inherit: true,
		types: ["Electric","Fighting"]
	},
	octillery: {
		inherit: true,
		types: ["Water","Fire"],
		baseStats: {hp:75,atk:115,def:75,spa:115,spd:75,spe:45}
	},
	dusclops: {
		inherit: true,
		baseStats: {hp:10,atk:70,def:180,spa:60,spd:180,spe:25}
	},
	camerupt: {
		inherit: true,
		abilities: {0:"Water Absorb"}
	},
	cacturne: {
		inherit: true,
		baseStats: {hp:110,atk:115,def:60,spa:115,spd:60,spe:55},
		abilities: {0:"Rough Skin"}
	},
	volbeat: {
		inherit: true,
		types: ["Bug","Electric"]
	}
};
