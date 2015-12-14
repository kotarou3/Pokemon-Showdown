'use strict';

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
		}
	},
	barrage: {
		inherit: true,
		type: "Grass",
		basePower: 200,
		selfdestruct: true,
		multihit: false,
		category: "Special"
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
		accuracy: 70,
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
	},
	boneclub: {
		inherit: true,
		type: "Ghost",
		priority: 1,
		basePower: 60
	},
	bonemerang: {
		inherit: true,
		type: "Ghost",
		basePower: 60
	},
	bubble: {
		inherit: true,
		basePower: 80,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch'
		}
	},
	bubblebeam: {
		inherit: true,
		basePower: 150,
		self: {
			volatileStatus: 'mustrecharge'
		}
	},
	clamp: {
		inherit: true,
		basePower: 15,
		accuracy: 70,
		noPPBoosts: false
	},
	cometpunch: {
		inherit: true,
		type: "Fighting",
		multihit: false,
		basePower: 80,
		priority: 1
	},
	confusion: {
		inherit: true,
		basePower: 120,
		accuracy: 85
	},
	constrict: {
		inherit: true,
		category: "Status",
		status: 'par',
		accuracy: 90
	},
	crabhammer: {
		inherit: true,
		basePower: 90,
		accuracy: 100
	},
	cut: {
		inherit: true,
		critRatio: 2,
		type: "Bug",
		basePower: 55
	},
	defensecurl: {
		inherit: true,
		heal: [1, 2],
		pp: 5
	},
	dig: {
		inherit: true,
		basePower: 150,
		accuracy: 85
	},
	dizzypunch: {
		inherit: true,
		basePower: 150,
		accuracy: 75,
		secondary: {
			chance: 10,
			volatileStatus: 'confusion'
		}
	},
	doublekick: {
		inherit: true,
		basePower: 50
	},
	doubleteam: {
		inherit: true,
		secondary: false,
		volatileStatus: 'confusion'
	},
	doubleedge: {
		inherit: true,
		basePower: 120
	},
	doubleslap: {
		inherit: true,
		type: "Psychic",
		basePower: 60,
		multihit: 2,
		category: "Special"
	},
	dragonrage: {
		inherit: true,
		basePower: 120,
		damage: 0,
		pp: 5
	},
	dreameater: {
		inherit: true,
		category: "Special",
		basePower: 250,
		type: "Psychic",
		drain: [1, 2],
		onTryHit: function (target) {
			if (target.status !== 'slp') {
				this.add('-immune', target, '[msg]');
				return null;
			}
		}
	},
	drillpeck: {
		inherit: true,
		basePower: 90
	},
	eggbomb: {
		inherit: true,
		basePower: 100,
		type: "Fire",
		pp: 5,
		category: "Special",
		secondary: {
			chance: 30,
			status: 'brn'
		}
	},
	ember: {
		inherit: true,
		basePower: 90,
		secondary: {
			chance: 30,
			boosts: {
				spa: -1,
				spd: -1
			}
		}
	},
	explosion: {
		inherit: true,
		basePower: 100,
		type: "Rock"
	},
	firepunch: {
		inherit: true,
		basePower: 100,
		pp: 5
	},
	firespin: {
		inherit: true,
		basePower: 15,
		pp: 10
	},
	fissure: {
		inherit: true,
		accuracy: 20
	},
	fly: {
		inherit: true,
		basePower: 150,
		accuracy: 85
	},
	focusenergy: {
		inherit: true,
		basePower: 180,
		category: "Physical",
		type: "Bug",
		isTwoTurnMove: true,
		onTry: function (attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (this.isWeather(['sunnyday', 'desolateland']) || !this.runEvent('ChargeMove', attacker, defender, move)) {
				this.add('-anim', attacker, move.name, defender);
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		}
	},
	furyattack: {
		inherit: true,
		basePower: 35,
		accuracy: 95
	},
	furyswipes: {
		inherit: true,
		basePower: 35,
		accuracy: 95,
		type: "Fighting"
	},
	glare: {
		inherit: true,
		accuracy: 100
	},
	growl: {
		inherit: true,
		boosts: {
			atk: -2
		}
	},
	guillotine: {
		inherit: true,
		ohko: false,
		type: "Bug",
		basePower: 120,
		accuracy: 75,
		pp: 5,
		secondary: {
			chance: 30,
			status: 'par'
		}
	},
	gust: {
		inherit: true,
		basePower: 150,
		pp: 5,
		secondary: {
			chance: 30,
			volatileStatus: 100
		}
	},
	harden: {
		inherit: true,
		boosts: {
			atk: 1
		}
	},
	headbutt: {
		inherit: true,
		basePower: 100,
		type: "Psychic"
	},
	highjumpkick: {
		inherit: true,
		basePower: 150,
		accuracy: 85,
		onTry: function (attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				this.add('-anim', attacker, move.name, defender);
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		}
	},
	hornattack: {
		inherit: true,
		type: "Ground",
		multihit: [2, 5],
		basePower: 35,
		accuracy: 95
	},
	horndrill: {
		inherit: true,
		accuracy: 20
	},
	hydropump: {
		inherit: true,
		accuracy: 85
	},
	hyperfang: {
		inherit: true,
		type: "Ghost",
		basePower: 80,
		accuracy: 100,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch'
		}
	},
	hypnosis: {
		inherit: true,
		accuracy: 65
	},
	icepunch: {
		inherit: true,
		basePower: 100,
		pp: 5
	},
	jumpkick: {
		inherit: true,
		basePower: 150,
		accuracy: 95,
		recoil: [25, 100],
		pp: 5
	},
	kinesis: {
		inherit: true,
		accuracy: 90,
		boosts: false,
		status: 'par'
	},
	leechlife: {
		inherit: true,
		basePower: 100,
		drain: [1, 2]
	},
	leechseed: {
		inherit: true,
		accuracy: 100
	},
	lick: {
		inherit: true,
		basePower: 85
	},
	lowkick: {
		inherit: true,
		basePower: 80,
		accuracy: 75
	},
	meditate: {
		inherit: true,
		boosts: {
			atk: 2
		}
	},
	megadrain: {
		inherit: true,
		basePower: 60,
		drain: [1, 2]
	},
	megakick: {
		inherit: true,
		basePower: 120,
		accuracy: 90,
		drain: [1, 2]
	},
	megapunch: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
		drain: [1, 2]
	},
	mimic: {
		inherit: true,
		onHit: function (target, source) {
			var disallowedMoves = {mimic:1, struggle:1};
			if (source.transformed) return false;
			var moveslot = source.moves.indexOf('mimic');
			if (moveslot < 0) return false;
			var moves = target.moves;
			moves = moves.randomize();
			var move = false;
			for (var i = 0; i < moves.length; i++) {
				if (!(moves[i] in disallowedMoves)) {
					move = moves[i];
					break;
				}
			}
			if (!move) return false;
			move = this.getMove(move);
			source.moveset[moveslot] = {
				move: move.name,
				id: move.id,
				pp: move.pp,
				maxpp: move.pp,
				target: move.target,
				disabled: false,
				used: false
			};
			source.moves[moveslot] = toId(move.name);
			this.add('-start', source, 'Mimic', move.name);
		}
	},
	minimize: {
		inherit: true,
		boosts: {
			def: 1
		}
	},
	mist: {
		inherit: true,
		category: "Special",
		type: "Ice",
		basePower: 60,
		priority: 1,
		pp: 5
	},
	nightshade: {
		inherit: true,
		damage: 0,
		pp: 5,
		ignoreImmunity: false,
		category: "Physical",
		basePower: 120,
		accuracy: 80,
		secondary: {
			chance: 30,
			status: 'brn'
		}
	},
	payday: {
		inherit: true,
		basePower: 180,
		pp: 1,
		noPPBoosts: true
	},
	peck: {
		inherit: true,
		basePower: 60,
		priority: 1
	},
	petaldance: {
		inherit: true,
		basePower: 140
	},
	pinmissile: {
		inherit: true,
		basePower: 35,
		accuracy: 100
	},
	poisongas: {
		inherit: true,
		basePower: 0,
		ohko: true,
		accuracy: 20
	},
	poisonsting: {
		inherit: true,
		secondary: false,
		basePower: 35,
		multihit: [2, 5]
	},
	poisonpowder: {
		inherit: true,
		accuracy: 100
	},
	pound: {
		inherit: true,
		basePower: 140,
		self: {
			volatileStatus: 'lockedmove'
		}
	},
	psybeam: {
		inherit: true,
		basePower: 130,
		secondary: false,
		onTry: function (attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				this.add('-anim', attacker, move.name, defender);
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		}
	},
	psywave: {
		inherit: true,
		accuracy: 100,
		damage: 0,
		boosts: {
			atk: -1
		}
	},
	quickattack: {
		inherit: true,
		pp: 5,
		basePower: 80
	},
	rage: {
		inherit: true,
		self: false,
		effect: false,
		type: "Dragon",
		category: "Special",
		basePower: 85
	},
	razorwind: {
		inherit: true,
		type: "Bug",
		basePower: 95,
		onTry: true
	},
	recover: {
		inherit: true,
		pp: 15
	},
	roar: {
		inherit: true,
		basePower: 120,
		accuracy: 90,
		pp: 5,
		secondary: {
			chance: 30,
			boosts: {
				def: -1
			}
		}
	},
	rockslide: {
		inherit: true,
		basePower: 120,
		accuracy: 85,
		pp: 5
	},
	rockthrow: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
		pp: 10
	},
	rollingkick: {
		inherit: true,
		basePower: 80,
		accuracy: 100,
		pp: 5
	},
	scratch: {
		inherit: true,
		basePower: 85,
		secondary: {
			chance: 30,
			status: 'brn'
		}
	},
	selfdestruct: {
		inherit: true,
		basePower: 125
	},
	sharpen: {
		inherit: true,
		boosts: {
			atk: 2
		}
	},
	sing: {
		inherit: true,
		accuracy: 90
	},
	skullbash: {
		inherit: true,
		basePower: 180
	},
	skyattack: {
		inherit: true,
		basePower: 180,
		onTry: function (attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				this.add('-anim', attacker, move.name, defender);
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		}
	},
	slam: {
		inherit: true,
		basePower: 85,
		accuracy: 100,
		type: "Fighting",
		secondary: {
			chance: 30,
			status: 'par'
		}
	},
	sludge: {
		inherit: true,
		basePower: 150,
		accuracy: 85,
		secondary: {
			chance: 40,
			status: 'psn'
		}
	},
	smog: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
		secondary: false,
		selfdestruct: true
	},
	smokescreen: {
		inherit: true,
		type: "Fire",
		basePower: 150,
		accuracy: 75,
		pp: 5,
		boosts: false,
		secondary: {
			chance: 10,
			volatileStatus: 'confusion'
		}
	},
	solarbeam: {
		inherit: true,
		basePower: 180,
		onTry: function (attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (this.isWeather(['sunnyday', 'desolateland']) || !this.runEvent('ChargeMove', attacker, defender, move)) {
				this.add('-anim', attacker, move.name, defender);
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		}
	},
	sonicboom: {
		inherit: true,
		damage: 0,
		basePower: 200,
		type: "Electric",
		category: "Special",
		selfdestruct: true
	},
	spikecannon: {
		inherit: true,
		type: "Water",
		category: "Special",
		basePower: 30,
		accuracy: 95
	},
	splash: {
		inherit: true,
		type: "Water",
		basePower: 140,
		pp: 5,
		self: {
			volatileStatus: 'lockedmove'
		}
	},
	stomp: {
		inherit: true,
		type: "Ground",
		basePower: 80
	},
	strength: {
		inherit: true,
		type: "Fighting",
		basePower: 140,
		pp: 5,
		self: {
			volatileStatus: 'lockedmoved'
		}
	},
	stringshot: {
		inherit: true,
		type: "Bug",
		basePower: 100,
		boosts: false,
		secondary: {
			chance: 30,
			boosts: {
				spe: -1
			}
		}
	},
	struggle: {
		inherit: true,
		type: "Dragon",
		category: "Special"
	},
	stunspore: {
		inherit: true,
		accuracy: 90,
		pp: 5
	},
	submission: {
		inherit: true,
		basePower: 120,
		pp: 5
	},
	superfang: {
		inherit: true,
		accuracy: 100,
		pp: 5
	},
	supersonic: {
		inherit: true,
		category: "Physical",
		basePower: 100,
		accuracy: 100,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch'
		}
	},
	surf: {
		inherit: true,
		accuracy: true
	},
	swift: {
		inherit: true,
		basePower: 95
	},
	tackle: {
		inherit: true,
		type: "Electric",
		category: "Special",
		basePower: 120,
		recoil: [25, 100],
		pp: 5
	},
	tailwhip: {
		inherit: true,
		category: "Physical",
		type: "Ghost",
		basePower: 100
	},
	takedown: {
		inherit: true,
		type: "Ground",
		basePower: 120,
		accuracy: 100
	},
	teleport: {
		inherit: true,
		category: "Special",
		type: "Electric",
		basePower: 150,
		accuracy: 85,
		effect: {
			duration: 2,
			onLockMove: 'teleport',
			onAccuracy: function (accuracy, target, source, move) {
				if (move.id === 'swift') return true;
				this.add('-message', 'The foe ' + target.name + ' can\'t be hit while flying!');
				return null;
			},
			onDamage: function (damage, target, source, move) {
				if (!move || move.effectType !== 'Move') return;
				if (!source || source.side === target.side) return;
				if (move.id === 'gust' || move.id === 'thunder') {
					this.add('-message', 'The foe ' + target.name + ' can\'t be hit while flying!');
					return null;
				}
			}
		}
	},
	thrash: {
		inherit: true,
		basePower: 140,
		accuracy: 90,
		pp: 5
	},
	thunder: {
		inherit: true,
		accuracy: 75,
		secondary: {
			chance: 30,
			status: 'par'
		}
	},
	thunderpunch: {
		inherit: true,
		basePower: 100,
		pp: 5
	},
	thundershock: {
		inherit: true,
		basePower: 90,
		secondary: {
			chance: 30,
			boosts: {
				spa: -1,
				spd: -1
			}
		}
	},
	triattack: {
		inherit: true,
		type: "Psychic",
		basePower: 0,
		volatileStatus: 'leechseed',
		onHit: function () {},
		effect: {
			onStart: function (target) {
				this.add('-start', target, 'move: Leech Seed');
				if (!target.volatiles['residualdmg']) target.addVolatile('residualdmg');
				if (!target.volatiles['residualdmg'].counter) target.volatiles['residualdmg'].counter = 0;
				target.volatiles['residualdmg'].counter++;
			},
			onAfterMoveSelfPriority: 1,
			onAfterMoveSelf: function (pokemon) {
				var leecher = pokemon.side.foe.active[pokemon.volatiles['leechseed'].sourcePosition];
				if (!leecher || leecher.fainted || leecher.hp <= 0) {
					this.debug('Nothing to leech into');
					return;
				}
				// We check if leeched Pokémon has Toxic to increase leeched damage.
				var toxicCounter = 1;
				if (pokemon.volatiles['residualdmg']) {
					if (pokemon.status === 'tox') pokemon.volatiles['residualdmg'].counter++;
					toxicCounter = pokemon.volatiles['residualdmg'].counter;
				}
				var toLeech = this.clampIntRange(Math.floor(pokemon.maxhp / 16), 1) * toxicCounter;
				var damage = this.damage(toLeech, pokemon, leecher);
				if (damage) this.heal(damage, leecher, pokemon);
			}
		},
		onTryHit: function (target) {
			if (target.hasType('Psychic')) {
				this.add('-immune', target, '[msg]');
				return null;
			}
		}
	},
	twineedle: {
		inherit: true,
		basePower: 75,
		accuracy: 75,
		pp: 5
	},
	vicegrip: {
		inherit: true,
		critRatio: 1,
		basePower: 95,
		secondary: {
			chance: 10,
			status: 'par'
		}
	},
	vinewhip: {
		inherit: true,
		basePower: 85,
		secondary: {
			chance: 30,
			status: 'par'
		}
	},
	watergun: {
		inherit: true,
		basePower: 90,
		secondary: {
			chance: 30,
			boosts: {
				spa: -1,
				spd: -1
			}
		}
	},
	waterfall: {
		inherit: true,
		basePower: 150,
		accuracy: 85,
		effect: {
			duration: 2,
			onLockMove: 'waterfall',
			onAccuracy: function (accuracy, target, source, move) {
				if (move.id === 'swift') return true;
				this.add('-message', 'The foe ' + target.name + ' can\'t be hit while flying!');
				return null;
			},
			onDamage: function (damage, target, source, move) {
				if (!move || move.effectType !== 'Move') return;
				if (!source || source.side === target.side) return;
				if (move.id === 'gust' || move.id === 'thunder') {
					this.add('-message', 'The foe ' + target.name + ' can\'t be hit while flying!');
					return null;
				}
			}
		}
	},
	whirlwind: {
		inherit: true,
		type: "Flying",
		basePower: 15,
		accuracy: 70,
		affectedByImmunities: false,
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
	wingattack: {
		inherit: true,
		basePower: 55,
		critRatio: 2
	},
	withdraw: {
		inherit: true,
		boosts: {
			spa: 1,
			spd: 1
		}
	},
	wrap: {
		inherit: true,
		basePower: 15,
		accuracy: 70
	}
};
