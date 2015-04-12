exports.BattleMovedex = {
	"stealthrock": {
		inherit: true,
		effect: {
			onStart: function (side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onSwitchIn: function (pokemon) {
				if (!pokemon.runImmunity('Rock')) return;
				var typeMod = this.getEffectiveness('Rock', pokemon);
				var factor = 8;
				var side = pokemon.side;
				if (typeMod === 1) factor = 4;
				if (typeMod >= 2) factor = 2;
				if (typeMod === -1) factor = 16;
				if (typeMod <= -2) factor = 32;
				var damage = this.damage(pokemon.maxhp / factor);
			}
		}
	},
	"stickyweb": {
		inherit: true,
		effect: {
			onStart: function (side) {
				this.add('-sidestart', side, 'move: Sticky Web');
			},
			onSwitchIn: function (pokemon) {
				if (!pokemon.runImmunity('Ground')) return;
				if (!pokemon.runImmunity('Bug')) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				this.boost({spe: -1}, pokemon, pokemon.side.foe.active[0], this.getMove('stickyweb'));
			}
		}
	}
};
