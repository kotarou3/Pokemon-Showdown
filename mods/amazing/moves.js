exports.BattleMovedex = {
	armthrust: {
		inherit: true,
		basePower: 25
	},
	beatup: {
		inherit: true,
		basePower: 30
	},
	blizzard: {
		inherit: true,
		onModifyMove: function (move) {
			if (this.isWeather('hail')) move.accuracy = true;
		}
	},
	crushclaw: {
		inherit: true,
		breaksProtect: true
	},
	disable: {
		accuracy: 100,
		category: "Status",
		id: "disable",
		isViable: true,
		name: "Disable",
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onHit: function (target, source) {
			if (!target.moves.length) return false;
			var sideCondition = target.side.sideConditions['disable'];
			if (sideCondition) {
				target.side.removeSideCondition('disable');
			}
			target.side.addSideCondition('disable', target);
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (side, target) {
				var moves = target.moves;
				var moveId = moves[this.random(moves.length)];
				if (!moveId) return false;
				var move = this.getMove(moveId);
				this.add('-start', target, 'Disable', move.name);
				this.effectData.move = move.id;
				return;
			},
			onBeforeMovePriority: 7,
			onBeforeMove: function (attacker, defender, move) {
				if (this.effectData.source !== attacker) return;
				if (move.id === this.effectData.move) {
					this.add('cant', attacker, 'Disable', move);
					return false;
				}
			},
			onDisableMove: function (pokemon) {
				if (this.effectData.source !== pokemon) return;
				var moves = pokemon.moveset;
				for (var i = 0; i < moves.length; i++) {
					if (moves[i].id === this.effectData.move) {
						pokemon.disableMove(moves[i].id);
					}
				}
			}
		}
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
	furyswipes: {
		inherit: true,
		accuracy: 100
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
	},
	torment: {
		inherit: true,
		target: "foeSide",
		sideCondition: 'torment',
		effect: {
			duration: 5,
			onStart: function (side) {
				this.add('-sidestart', side, 'Torment');
			},
			onEnd: function (side) {
				this.add('-sideend', side, 'Torment');
			},
			onDisableMove: function (side) {
				if (side.lastMove !== 'struggle') side.disableMove(side.lastMove);
			}
		}
	}
};
