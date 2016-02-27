'use strict';

exports.BattleAbilities = {
	"cloudnine": {
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Cloud Nine');
			this.setWeather('');
		},
		id: "cloudnine",
		name: "Cloud Nine",
		rating: 3,
		num: 13,
	},
	"roughskin": {
		inherit: true,
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(damage / 4, source, target);
			}
		},
	},
	"forecast": {
		inherit: true,
		onUpdate: function (pokemon) {
			if (pokemon.baseTemplate.species !== 'Altaria' || pokemon.transformed) return;
			let forme = null;
			switch (this.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				if (pokemon.template.speciesid !== 'altariasunray') forme = 'Altaria-Sunray';
				break;
			case 'raindance':
			case 'primordialsea':
				if (pokemon.template.speciesid !== 'altarianimbus') forme = 'Altaria-Nimbus';
				break;
			case 'hail':
				if (pokemon.template.speciesid !== 'altariaflurry') forme = 'Altaria-Flurry';
				break;
			case 'sandstorm':
				if (pokemon.template.speciesid !== 'altariadustbowl') forme = 'Altaria-Dustbowl';
				break;
			default:
				if (pokemon.template.speciesid !== 'altaria') forme = 'Altaria';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme);
				this.add('-formechange', pokemon, forme, '[msg]');
			}
		},
	},
};
