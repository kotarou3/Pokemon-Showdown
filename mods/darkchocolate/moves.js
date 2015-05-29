exports.BattleMovedex = {
	stealthrock: {
		inherit: true,
		effect: {
				onStart: function (side) {
					this.add('-sidestart', side, 'move: Stealth Rock');
				},
				onSwitchIn: function (pokemon) {
					var typeMod = this.getEffectiveness('Rock', pokemon);
					var factor = 8;
					if (typeMod === 1) factor = 6;
					if (typeMod >= 2) factor = 4;
					if (typeMod === -1) factor = 16;
					if (typeMod <= -2) factor = 32;
					var damage = this.damage(pokemon.maxhp / factor);
				}
			}
	}
};
