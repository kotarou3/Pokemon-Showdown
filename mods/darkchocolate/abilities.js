'use strict';

exports.BattleAbilities = {
	"roughskin": {
		inherit: true,
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.maxhp / 4, source, target);
			}
		},
	},
	"solidrock": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Solid Rock neutralize');
				return this.chainModify(0.50);
			}
		},
	},
};
