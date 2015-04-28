exports.BattleMovedex = {
	absorb: {
		inherit: true,
		basePower: 60,
		type: "Water"
	},
	acid: {
		inherit: true,
		basePower: 95,
		secondary: {
			chance: 30,
			boosts: {
				def: -1
			}
		}
	},
	acidarmor: {
		inherit: true,
		pp: 20
	},
	agility: {
		inherit: true,
		pp: 20
	},
	aurorabeam: {
		inherit: true,
		basePower: 90,
		secondary: {
			chance: 30,
			boosts: {
				spd: -1,
				spa: -1
			}
	},
	barrage: {
		inherit: true,
		type: "Grass",
		basePower: 200,
		selfdestruct: true
	},
	barrier: {
		inherit: true,
		pp: 20
	},
	bide: {
		inherit: true,
		pp: 15
	},
	bind: {
		inherit: true,
		basePower: 15,
		type: "Rock"
	},
	bite: {
		inherit: true,
		basePower: 80,
		secondary: {
			chance: 30,
			volatilestatus: 'flinch'
		}
	},
	blizzard: {
		inherit: true,
		accuracy: 80
	}
};
