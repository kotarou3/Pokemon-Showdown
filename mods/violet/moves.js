'use strict';

/**
 * A lot of Gen 1 moves have to be updated due to different mechanics.
 * Some moves have had major changes, such as Bite's typing.
 */
exports.BattleMovedex = {
	acid: {
		inherit: true,
		basePower: 70,
		secondary: {
			chance: 50,
			boosts: {
				def: -1
			}
		}
	},
	aurorabeam: {
		inherit: true,
		secondary: {
			chance: 10,
			boosts: {
				atk: -1
			}
		}
	},
	bind: {
		inherit: true,
		type: "Bug",
		basePower: 40,
		accuracy: 75,
		pp: 5,
		ignoreImmunity: true,
		volatileStatus: 'partiallytrapped',
		self: {
			volatileStatus: 'partialtrappinglock'
		},
		onBeforeMove: function (pokemon, target, move) {
			// Removes must recharge volatile even if it misses
			target.removeVolatile('mustrecharge');
		},
		onHit: function (target, source) {
			/**
			 * The duration of the partially trapped must be always renewed to 2
			 * so target doesn't move on trapper switch out as happens in gen 1.
			 * However, this won't happen if there's no switch and the trapper is
			 * about to end its partial trapping.
			 **/
			if (target.volatiles['partiallytrapped']) {
				if (source.volatiles['partialtrappinglock'] && source.volatiles['partialtrappinglock'].duration > 1) {
					target.volatiles['partiallytrapped'].duration = 2;
				}
			}
		}
	},
	clamp: {
		inherit: true,
		basePower: 70,
		accuracy: 75,
		pp: 5,
		noPPBoosts: true,
		volatileStatus: 'partiallytrapped',
		self: {
			volatileStatus: 'partialtrappinglock'
		},
		onBeforeMove: function (pokemon, target, move) {
			// Removes must recharge volatile even if it misses
			target.removeVolatile('mustrecharge');
		},
		onHit: function (target, source) {
			/**
			 * The duration of the partially trapped must be always renewed to 2
			 * so target doesn't move on trapper switch out as happens in gen 1.
			 * However, this won't happen if there's no switch and the trapper is
			 * about to end its partial trapping.
			 **/
			if (target.volatiles['partiallytrapped']) {
				if (source.volatiles['partialtrappinglock'] && source.volatiles['partialtrappinglock'].duration > 1) {
					target.volatiles['partiallytrapped'].duration = 2;
				}
			}
		}
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
	dreameater: {
		inherit: true,
		category: "Physical",
		basePower: 200,
		drain: [1, 1],
		type: "Ghost",
		onTryHit: function (target) {
			if (target.status !== 'psn' && target.status !== 'tox' && target.status !== 'slp') {
				this.add('-immune', target, '[msg]');
				return null;
			}
		}
	},
	firespin: {
		inherit: true,
		pp: 5,
		accuracy: 70,
		basePower: 30,
		volatileStatus: 'partiallytrapped',
		self: {
			volatileStatus: 'partialtrappinglock'
		},
		onBeforeMove: function (pokemon, target, move) {
			// Removes must recharge volatile even if it misses
			target.removeVolatile('mustrecharge');
		},
		onHit: function (target, source) {
			/**
			 * The duration of the partially trapped must be always renewed to 2
			 * so target doesn't move on trapper switch out as happens in gen 1.
			 * However, this won't happen if there's no switch and the trapper is
			 * about to end its partial trapping.
			 **/
			if (target.volatiles['partiallytrapped']) {
				if (source.volatiles['partialtrappinglock'] && source.volatiles['partialtrappinglock'].duration > 1) {
					target.volatiles['partiallytrapped'].duration = 2;
				}
			}
		}
	},
	gust: {
		inherit: true,
		basePower: 80,
		secondary: {
			chance: 30,
			boosts: {
				atk: -1
			}
		}
	},
	haze: {
		inherit: true,
		desc: "Eliminates any stat stage changes and status from all active Pokemon.",
		shortDesc: "Eliminates all stat changes and status.",
		onHit: function (target, source) {
			this.add('-clearallboost');
			for (var i = 0; i < this.sides.length; i++) {
				for (var j = 0; j < this.sides[i].active.length; j++) {
					var pokemon = this.sides[i].active[j];
					pokemon.clearBoosts();

					if (pokemon !== source) {
						// Clears the status from the opponent
						pokemon.clearStatus();
					}
					if (pokemon.status === 'tox') {
						pokemon.setStatus('psn');
					}
					var volatiles = Object.keys(pokemon.volatiles);
					for (var n = 0; n < volatiles.length; n++) {
						var id = volatiles[n];
						if (id === 'residualdmg') {
							pokemon.volatiles[id].counter = 0;
						} else {
							pokemon.removeVolatile(id);
							this.add('-end', pokemon, id);
						}
					}
				}
			}
		},
		target: "self"
	},
	karatechop: {
		inherit: true,
		type: "Fighting",
		critRatio: 2
	},
	leechlife: {
		inherit: true,
		basePower: 60,
		drain: [1, 1]
	},
	megadrain: {
		inherit: true,
		drain: [1, 1]
	},
	mimic: {
		inherit: true,
		desc: "This move is replaced by a random move on target's moveset. The copied move has the maximum PP for that move. Ignores a target's Substitute.",
		shortDesc: "A random target's move replaces this one.",
		onHit: function (target, source) {
			var moveslot = source.moves.indexOf('mimic');
			if (moveslot < 0) return false;
			var moves = target.moves;
			var move = moves[this.random(moves.length)];
			if (!move) return false;
			move = this.getMove(move);
			var mimicMove = {
				move: move.name,
				id: move.id,
				pp: source.moveset[moveslot].pp,
				maxpp: move.pp * 8 / 5,
				target: move.target,
				disabled: false,
				used: false,
				virtual: true
			};
			source.moveset[moveslot] = mimicMove;
			source.baseMoveset[moveslot] = mimicMove;
			source.moves[moveslot] = toId(move.name);
			this.add('-start', source, 'Mimic', move.name);
		}
	},
	petaldance: {
		inherit: true,
		basePower: 120
	},
	poisonsting: {
		inherit: true,
		basePower: 95,
		pp: 10,
		secondary: {
			chance: 30,
			status: 'psn'
		}
	},
	recover: {
		inherit: true,
		pp: 10
	},
	rest: {
		inherit: true,
		onHit: function (target) {
			// Fails if the difference between
			// max HP and current HP is 0, 255, or 511
			if (target.hp >= target.maxhp ||
			target.hp === (target.maxhp - 255) ||
			target.hp === (target.maxhp - 511)) return false;
			if (!target.setStatus('slp')) return false;
			target.statusData.time = 2;
			target.statusData.startTime = 2;
			this.heal(target.maxhp); // Aeshetic only as the healing happens after you fall asleep in-game
			this.add('-status', target, 'slp', '[from] move: Rest');
		}
	},
	rockslide: {
		inherit: true,
		basePower: 85,
		desc: "Deals damage to a foe.",
		shortDesc: "Deals damage.",
		secondary: false,
		target: "normal"
	},
	skyattack: {
		inherit: true,
		secondary: false,
		critRatio: 1,
		onTry: function (attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			this.boost({def:1}, attacker, attacker, this.getMove('skyattack'));
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				this.add('-anim', attacker, move.name, defender);
				attacker.removeVolatile(move.id);
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		}
	},
	softboiled: {
		inherit: true
	},
	solarbeam: {
		inherit: true,
		basePower: 100,
		onTry: function (attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			this.boost({spa:1}, attacker, attacker, this.getMove('solarbeam'));
			this.boost({spd:1}, attacker, attacker, this.getMove('solarbeam'));
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				this.add('-anim', attacker, move.name, defender);
				attacker.removeVolatile(move.id);
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		}
	},
	submission: {
		inherit: true,
		basePower: 100,
		accuracy: 100
	},
	thrash: {
		inherit: true,
		basePower: 100,
		type: "Dragon",
		category: "Special"
	},
	thunder: {
		inherit: true,
		secondary: {
			chance: 10,
			status: 'par'
		}
	},
	thunderwave: {
		inherit: true,
		accuracy: 100,
		onTryHit: function (target) {
			if (target.hasType('Ground')) {
				this.add('-immune', target, '[msg]');
				return null;
			}
		}
	},
	toxic: {
		inherit: true,
		accuracy: 100
	},
	triattack: {
		inherit: true,
		type: "Ghost"
	},
	twineedle: {
		inherit: true,
		basePower: 40
	},
	vicegrip: {
		inherit: true,
		type: "Bug",
		critRatio: 2
	},
	wrap: {
		inherit: true,
		basePower: 40,
		pp: 5,
		accuracy: 85,
		ignoreImmunity: true,
		volatileStatus: 'partiallytrapped',
		self: {
			volatileStatus: 'partialtrappinglock'
		},
		onBeforeMove: function (pokemon, target, move) {
			// Removes must recharge volatile even if it misses
			target.removeVolatile('mustrecharge');
		},
		onHit: function (target, source) {
			/**
			 * The duration of the partially trapped must be always renewed to 2
			 * so target doesn't move on trapper switch out as happens in gen 1.
			 * However, this won't happen if there's no switch and the trapper is
			 * about to end its partial trapping.
			 **/
			if (target.volatiles['partiallytrapped']) {
				if (source.volatiles['partialtrappinglock'] && source.volatiles['partialtrappinglock'].duration > 1) {
					target.volatiles['partiallytrapped'].duration = 2;
				}
			}
		}
	}
};
