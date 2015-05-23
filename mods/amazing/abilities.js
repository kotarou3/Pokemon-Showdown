exports.BattleAbilities = {
	"roughskin": {
		inherit: true,
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.maxhp / 4, source, target);
			}
		}
	}
};
