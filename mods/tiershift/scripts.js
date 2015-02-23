exports.BattleScripts = {
	init: function () {
		for (var i in this.data.Pokedex) {
			if (!this.data.FormatsData[i]) continue;
			var tier = this.data.FormatsData[i].tier;
			var adjustment = 0;

			if (!tier && this.data.Pokedex[i].baseSpecies) {
				// mega evolutions get the same stat boost as their base forme
				tier = this.data.FormatsData[toId(this.data.Pokedex[i].baseSpecies)].tier;
			}
			switch (tier) {
			case 'BL':
			case 'UU':
				adjustment = 5;
				break;
			case 'BL2':
			case 'RU':
				adjustment = 10;
				break;
			case 'BL3':
			case 'NU':
			case 'BL4':
			case 'PU':
			case 'NFE':
			case 'LC Uber':
			case 'LC':
				adjustment = 15;
			}

			if (adjustment) {
				for (var j in this.data.Pokedex[i].baseStats) {
					this.modData('Pokedex', i).baseStats[j] = this.clampIntRange(this.data.Pokedex[i].baseStats[j] + adjustment, 1, 255);
				}
			}
		}
	}
};
