exports.BattleMovedex = {
	armthrust: {
		inherit: true,
		basePower: 25
	},
	beatup: {
		inherit: true,
		basePower: 30
	},
	doomdesire: {
		inherit: true,
		accuracy: 100,
		basePower: 160
	},
	furycutter: {
		inherit: true,
		basePower: 40
	},
	leechlife: {
		inherit: true,
		basePower: 60
	},
	pinmissile: {
		inherit: true,
		basePower: 25
	},
	poisonfang: {
		inherit: true,
		accuracy: 85,
		basePower: 0,
		damageCallback: function (pokemon, target) {
			return target.hp / 2;
		},
		secondary: {
			chance: 100,
			status: 'tox'
		}
	},
	rockblast: {
		inherit: true,
		accuracy: 90
	},
	rocktomb: {
		inherit: true,
		accuracy: 100,
		basePower: 80
	},
	steelwing: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		secondary: {
			chance: 30,
			boosts: {
				def: 1
			}
		}
	}
};
	
