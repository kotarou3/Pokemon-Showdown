'use strict';

exports.BattleMovedex = {
	stealthrock: {
		inherit: true,
		effect: {
			onStart: function (side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onSwitchIn: function (pokemon) {
				let typeMod = this.getEffectiveness('Rock', pokemon);
				let factor = 8;
				if (typeMod === 1) factor = 6;
				if (typeMod >= 2) factor = 4;
				if (typeMod === -1) factor = 16;
				if (typeMod <= -2) factor = 32;
				this.damage(pokemon.maxhp / factor);
			},
		},
	},
};
