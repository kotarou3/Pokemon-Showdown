'use strict';

exports.BattleScripts = {
	inherit: 'gen1',
	gen: 1,
	init: function () {
		for (let i in this.data.Pokedex) {
			let tier = null;
			let adjustment = 0;

			if (this.data.FormatsData[i]) tier = this.data.FormatsData[i].tier;
			if (!tier && this.data.Pokedex[i].baseSpecies) tier = this.data.FormatsData[toId(this.data.Pokedex[i].baseSpecies)].tier;

			switch (tier) {
			case 'BL':
			case 'UU':
				adjustment = 10;
				break;
			case 'RU':
				adjustment = 20;
				break;
			case 'NU':
			case 'LC':
				adjustment = 30;
			}

			if (adjustment) {
				for (let j in this.data.Pokedex[i].baseStats) {
					this.modData('Pokedex', i).baseStats[j] = this.clampIntRange(this.data.Pokedex[i].baseStats[j] + adjustment, 1, 255);
				}
			}
		}
	}
};
