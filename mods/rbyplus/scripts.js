exports.BattleScripts = {
	inherit: 'gen1',
	gen: 1,
	init: function () {
		this.modData('Learnsets', 'venusaur').learnset.takedown = [];
		this.modData('Learnsets', 'charmander').learnset.cut = [];
		this.modData('Learnsets', 'charmeleon').learnset.cut = [];
		this.modData('Learnsets', 'charizard').learnset.cut = [];
	}
};
