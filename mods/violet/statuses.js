'use strict';

exports.BattleStatuses = {
	partialtrappinglock: {
		durationCallback: function () {
			let duration = [2, 3][this.random(2)];
			return duration;
		},
		onResidual: function (target) {
			if (target.lastMove === 'struggle' || target.status === 'slp') {
				delete target.volatiles['partialtrappinglock'];
			}
		},
		onStart: function (target, source, effect) {
			this.effectData.move = effect.id;
		},
		onDisableMove: function (pokemon) {
			if (!pokemon.hasMove(this.effectData.move)) {
				return;
			}
			let moves = pokemon.moveset;
			for (let i = 0; i < moves.length; i++) {
				if (moves[i].id !== this.effectData.move) {
					pokemon.disableMove(moves[i].id);
				}
			}
		},
	},
	lockedmove: {
		// Outrage, Thrash, Petal Dance...
		inherit: true,
		durationCallback: function () {
			return this.random(2, 3);
		},
	},
};
