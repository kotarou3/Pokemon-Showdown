// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [
	// Violet Version
	///////////////////////////////////////////////////////////////////
	{
		name: "Violet Version",
		section: "Violet Version",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'
		]
	},
	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Battle",
		section: "XY Singles",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Unrated Random Battle",
		section: "XY Singles",

		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "OU",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite']
	},
	{
		name: "Ubers",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', 'Team Preview'],
		banlist: []
	},
	{
		name: "UU",
		section: "XY Singles",

		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Heracronite', 'Gardevoirite', 'Medichamite', 'Metagrossite', 'Salamencite', 'Drizzle', 'Drought', 'Shadow Tag']
	},
	{
		name: "RU",
		section: "XY Singles",

		ruleset: ['UU'],
		banlist: ['UU', 'BL2']
	},
	{
		name: "NU",
		section: "XY Singles",

		ruleset: ['RU'],
		banlist: ['RU', 'BL3']
	},
	{
		name: "LC",
		section: "XY Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom', 'Swagger', 'LC Uber', 'Gligar']
	},
	/*{
		name: "CAP Plasmanta Playtest",
		section: "XY Singles",

		ruleset: ['CAP Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Soul Dew',
			'Tomohawk', 'Necturna', 'Mollux', 'Aurumoth', 'Malaconda', 'Cawmodore', 'Volkraken', 'Syclant', 'Revenankh', 'Pyroak', 'Fidgit', 'Stratagem', 'Arghonaut', 'Kitsunoh', 'Cyclohm', 'Colossoil', 'Krilowatt', 'Voodoom'
		]
	},*/
	{
		name: "Battle Spot Singles",
		section: "XY Singles",

		onBegin: function () {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: [], // The necessary bans are in Standard GBU
		validateTeam: function (team, format) {
			if (team.length < 3) return ['You must bring at least three Pokémon.'];
		}
	},
	{
		name: "Custom Game",
		section: "XY Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Doubles Battle",
		section: "XY Doubles",

		gameType: 'doubles',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Smogon Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
		banlist: ['Soul Dew', 'Dark Void',
			'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin',
			'Arceus', 'Reshiram', 'Zekrom', 'Kyurem-White', 'Xerneas', 'Yveltal'
		]
	},
	{
		name: "Smogon Doubles Ubers",
		section: "XY Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void']
	},
	{
		name: "Smogon Doubles UU",
		section: "XY Doubles",

		gameType: 'doubles',
		ruleset: ['Smogon Doubles'],
		banlist: ['Abomasnow', 'Aegislash', 'Amoonguss', 'Aromatisse', 'Azumarill', 'Bisharp', 'Breloom', 'Chandelure', 'Charizard', 'Conkeldurr',
			'Cresselia', 'Diancie', 'Dragonite', 'Dusclops', 'Excadrill', 'Ferrothorn', 'Garchomp', 'Gardevoir', 'Gengar', 'Greninja',
			'Gyarados', 'Heatran', 'Hitmontop', 'Hydreigon', 'Jellicent', 'Kangaskhan', 'Keldeo', 'Kyurem-Black', 'Landorus-Therian', 'Latios',
			'Ludicolo', 'Mamoswine', 'Manectric', 'Mawile', 'Politoed', 'Rhyperior', 'Rotom-Heat', 'Rotom-Wash', 'Sableye', 'Salamence',
			'Scizor', 'Scrafty', 'Shaymin-Sky', 'Sylveon', 'Talonflame', 'Terrakion', 'Thundurus', 'Thundurus-Therian', 'Togekiss', 'Tyranitar',
			'Venusaur', 'Weavile', 'Whimsicott', 'Zapdos'
		]
	},
	{
		name: "Battle Spot Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		validateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least four Pokémon.'];
		}
	},
	{
		name: "Battle Spot Special 7",
		section: "XY Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		validateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least four Pokémon.'];
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		banlist: ['Abomasnow', 'Accelgor', 'Aegislash', 'Aerodactyl', 'Aipom', 'Alomomola', 'Amaura', 'Ambipom', 'Amoonguss', 'Ampharos',
			'Arbok', 'Arcanine', 'Arceus', 'Archen', 'Archeops', 'Ariados', 'Aromatisse', 'Articuno', 'Audino', 'Aurorus',
			'Avalugg', 'Axew', 'Azelf', 'Barbaracle', 'Basculin', 'Basculin-Blue-Striped', 'Bastiodon', 'Bayleef', 'Beartic', 'Beedrill',
			'Beheeyem', 'Bellsprout', 'Bergmite', 'Bibarel', 'Bidoof', 'Binacle', 'Bisharp', 'Blastoise', 'Blissey', 'Blitzle',
			'Boldore', 'Bonsly', 'Bouffalant', 'Braixen', 'Braviary', 'Bronzong', 'Bronzor', 'Buizel', 'Bulbasaur', 'Buneary',
			'Bunnelby', 'Burmy', 'Butterfree', 'Carbink', 'Carnivine', 'Carracosta', 'Caterpie', 'Celebi', 'Chandelure', 'Chansey',
			'Charizard', 'Charmander', 'Charmeleon', 'Chatot', 'Cherrim', 'Cherubi', 'Chesnaught', 'Chespin', 'Chikorita', 'Chimchar',
			'Cinccino', 'Clauncher', 'Clawitzer', 'Clefable', 'Clefairy', 'Cleffa', 'Cloyster', 'Cobalion', 'Cofagrigus', 'Combee',
			'Conkeldurr', 'Cottonee', 'Cranidos', 'Cresselia', 'Croagunk', 'Croconaw', 'Crustle', 'Cryogonal', 'Cubchoo', 'Cubone',
			'Cyndaquil', 'Darkrai', 'Darmanitan', 'Darumaka', 'Dedenne', 'Deerling', 'Deino', 'Delibird', 'Delphox', 'Deoxys',
			'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dewgong', 'Dewott', 'Dialga', 'Diancie', 'Diggersby', 'Diglett', 'Ditto',
			'Doublade', 'Dragalge', 'Dragonair', 'Dragonite', 'Drapion', 'Dratini', 'Drifblim', 'Drifloon', 'Drilbur', 'Drowzee',
			'Druddigon', 'Ducklett', 'Dugtrio', 'Dunsparce', 'Duosion', 'Durant', 'Dwebble', 'Eelektrik', 'Eelektross', 'Eevee',
			'Ekans', 'Electabuzz', 'Electivire', 'Elekid', 'Elgyem', 'Emboar', 'Emolga', 'Empoleon', 'Entei', 'Escavalier',
			'Espeon', 'Espurr', 'Excadrill', 'Exeggcute', 'Exeggutor', "Farfetch'd", 'Fearow', 'Fennekin', 'Feraligatr', 'Ferroseed',
			'Ferrothorn', 'Finneon', 'Flaaffy', 'Flabebe', 'Flareon', 'Fletchinder', 'Fletchling', 'Floatzel', 'Floette', 'Florges',
			'Foongus', 'Forretress', 'Fraxure', 'Frillish', 'Froakie', 'Frogadier', 'Furfrou', 'Furret', 'Gabite', 'Galvantula',
			'Garbodor', 'Garchomp', 'Gastly', 'Gastrodon', 'Genesect', 'Gengar', 'Gible', 'Gigalith', 'Giratina', 'Giratina',
			'Giratina-Origin', 'Glaceon', 'Glameow', 'Gligar', 'Gliscor', 'Gogoat', 'Golett', 'Golurk', 'Goodra', 'Goomy',
			'Gothita', 'Gothitelle', 'Gothorita', 'Gourgeist', 'Gourgeist-Large', 'Gourgeist-Small', 'Gourgeist-Super', 'Granbull', 'Greninja', 'Grotle',
			'Groudon', 'Growlithe', 'Gurdurr', 'Happiny', 'Haunter', 'Hawlucha', 'Haxorus', 'Heatmor', 'Heatran', 'Heliolisk',
			'Helioptile', 'Herdier', 'Hippopotas', 'Hippowdon', 'Hitmonchan', 'Hitmonlee', 'Hitmontop', 'Ho-Oh', 'Honchkrow', 'Honedge',
			'Hoothoot', 'Hoppip', 'Houndoom', 'Houndour', 'Hydreigon', 'Hypno', 'Infernape', 'Inkay', 'Ivysaur', 'Jellicent',
			'Jirachi', 'Jolteon', 'Joltik', 'Jumpluff', 'Jynx', 'Kabuto', 'Kabutops', 'Kakuna', 'Kangaskhan', 'Karrablast',
			'Keldeo', 'Keldeo-Resolute', 'Kingler', 'Klang', 'Klefki', 'Klink', 'Klinklang', 'Krabby', 'Kricketot', 'Kricketune',
			'Krokorok', 'Krookodile', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Lampent', 'Landorus', 'Landorus-Therian', 'Lapras',
			'Larvesta', 'Larvitar', 'Leafeon', 'Leavanny', 'Ledian', 'Ledyba', 'Lickilicky', 'Lickitung', 'Liepard', 'Lilligant',
			'Lillipup', 'Litleo', 'Litwick', 'Lopunny', 'Lucario', 'Lugia', 'Lumineon', 'Luxio', 'Luxray', 'Magby',
			'Magmar', 'Magmortar', 'Malamar', 'Mamoswine', 'Manaphy', 'Mandibuzz', 'Mankey', 'Mantine', 'Mantyke', 'Maractus',
			'Mareep', 'Marowak', 'Meganium', 'Meloetta', 'Meowstic', 'Meowstic-F', 'Meowth', 'Mesprit', 'Metapod', 'Mew',
			'Mewtwo', 'Mienfoo', 'Mienshao', 'Miltank', 'Mime Jr.', 'Minccino', 'Misdreavus', 'Mismagius', 'Moltres', 'Monferno',
			'Mothim', 'Mr. Mime', 'Munchlax', 'Munna', 'Murkrow', 'Musharna', 'Nidoking', 'Nidoqueen', 'Nidoran-F', 'Nidoran-M',
			'Nidorina', 'Nidorino', 'Noctowl', 'Noibat', 'Noivern', 'Octillery', 'Omanyte', 'Omastar', 'Onix', 'Oshawott',
			'Pachirisu', 'Palkia', 'Palpitoad', 'Pancham', 'Pangoro', 'Panpour', 'Pansage', 'Pansear', 'Paras', 'Parasect',
			'Patrat', 'Pawniard', 'Persian', 'Petilil', 'Phantump', 'Phione', 'Pidgeot', 'Pidgeotto', 'Pidgey', 'Pidove',
			'Pignite', 'Piloswine', 'Pineco', 'Piplup', 'Politoed', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Ponyta', 'Porygon',
			'Porygon-Z', 'Porygon2', 'Primeape', 'Prinplup', 'Pumpkaboo', 'Pumpkaboo-Large', 'Pumpkaboo-Small', 'Pumpkaboo-Super', 'Pupitar', 'Purrloin',
			'Purugly', 'Pyroar', 'Quagsire', 'Quilava', 'Quilladin', 'Qwilfish', 'Raikou', 'Rampardos', 'Rapidash', 'Raticate',
			'Rattata', 'Rayquaza', 'Regigigas', 'Remoraid', 'Reshiram', 'Reuniclus', 'Riolu', 'Roggenrola', 'Rotom', 'Rotom-Fan',
			'Rotom-Frost', 'Rotom-Heat', 'Rotom-Mow', 'Rotom-Wash', 'Rufflet', 'Samurott', 'Sandile', 'Sawk', 'Sawsbuck', 'Scatterbug',
			'Scizor', 'Scolipede', 'Scrafty', 'Scraggy', 'Scyther', 'Seel', 'Seismitoad', 'Sentret', 'Serperior', 'Servine',
			'Sewaddle', 'Shaymin', 'Shaymin-Sky', 'Shellder', 'Shellos', 'Shelmet', 'Shieldon', 'Shinx', 'Shuckle', 'Sigilyph',
			'Simipour', 'Simisage', 'Simisear', 'Skiddo', 'Skiploom', 'Skorupi', 'Skrelp', 'Skuntank', 'Sliggoo', 'Slowbro',
			'Slowking', 'Slowpoke', 'Slurpuff', 'Smeargle', 'Smoochum', 'Sneasel', 'Snivy', 'Snorlax', 'Snover', 'Snubbull',
			'Solosis', 'Spearow', 'Spewpa', 'Spinarak', 'Spiritomb', 'Spritzee', 'Squirtle', 'Stantler', 'Staraptor', 'Staravia',
			'Starly', 'Steelix', 'Stoutland', 'Stunfisk', 'Stunky', 'Sudowoodo', 'Suicune', 'Sunflora', 'Sunkern', 'Swadloon',
			'Swanna', 'Swinub', 'Swirlix', 'Swoobat', 'Sylveon', 'Talonflame', 'Tangela', 'Tangrowth', 'Tauros', 'Teddiursa',
			'Tepig', 'Terrakion', 'Throh', 'Thundurus', 'Thundurus-Therian', 'Timburr', 'Tirtouga', 'Togekiss', 'Togepi', 'Togetic',
			'Tornadus', 'Tornadus-Therian', 'Torterra', 'Totodile', 'Toxicroak', 'Tranquill', 'Trevenant', 'Trubbish', 'Turtwig', 'Tympole',
			'Tynamo', 'Typhlosion', 'Tyranitar', 'Tyrantrum', 'Tyrogue', 'Tyrunt', 'Umbreon', 'Unfezant', 'Unown', 'Ursaring',
			'Uxie', 'Vanillish', 'Vanillite', 'Vanilluxe', 'Vaporeon', 'Venipede', 'Venomoth', 'Venonat', 'Venusaur', 'Vespiquen',
			'Victini', 'Victreebel', 'Virizion', 'Vivillon', 'Volcarona', 'Vullaby', 'Wartortle', 'Watchog', 'Weavile', 'Weedle',
			'Weepinbell', 'Whimsicott', 'Whirlipede', 'Woobat', 'Wooper', 'Wormadam', 'Wormadam-Sandy', 'Wormadam-Trash', 'Xerneas', 'Yamask',
			'Yanma', 'Yanmega', 'Yveltal', 'Zapdos', 'Zebstrika', 'Zekrom', 'Zoroark', 'Zorua', 'Zweilous', 'Zygarde',
			'Soul Dew'
		],
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "VGC 2014",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC', 'Kalos Pokedex'],
		requirePentagon: true,
		banlist: [], // The necessary bans are in Standard GBU
		validateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least four Pokémon.'];
		}
	},
	{
		name: "Doubles Challenge Cup",
		section: 'XY Doubles',

		gameType: 'doubles',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Doubles Custom Game",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// XY Triples
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Triples Battle",
		section: "XY Triples",

		gameType: 'triples',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Smogon Triples",
		section: "XY Triples",

		gameType: 'triples',
		ruleset: ['Pokemon', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Xerneas', 'Yveltal', 'Zekrom',
			'Soul Dew', 'Dark Void', 'Perish Song'
		]
	},
	{
		name: "Battle Spot Triples",
		section: "XY Triples",

		gameType: 'triples',
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		validateTeam: function (team, format) {
			if (team.length < 6) return ['You must have six Pokémon.'];
		}
	},
	{
		name: "Triples Challenge Cup",
		section: "XY Triples",

		gameType: 'triples',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Triples Custom Game",
		section: "XY Triples",

		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] OU",
		section: "BW2 Singles",
		column: 2,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "[Gen 5] Ubers",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "[Gen 5] UU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Snow Warning']
	},
	{
		name: "[Gen 5] RU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
	},
	{
		name: "[Gen 5] NU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist']
	},
	{
		name: "[Gen 5] LC",
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Scyther', 'Sneasel', 'Tangela']
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',
		validateSet: function (set) {
			if (!set.level || set.level >= 50) set.forcedLevel = 50;
			return [];
		},
		onBegin: function () {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Smogon Doubles",
		section: 'BW2 Doubles',
		column: 2,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew', 'Sky Drop',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus',
			'Reshiram',
			'Zekrom',
			'Kyurem-White'
		]
	},
	{
		name: "[Gen 5] GBU Doubles",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] OU",
		section: "Past Generations",
		column: 2,

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 4] Ubers",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus']
	},
	{
		name: "[Gen 4] UU",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL']
	},
	{
		name: "[Gen 4] LC",
		section: "Past Generations",

		mod: 'gen4',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['Berry Juice', 'DeepSeaTooth', 'Dragon Rage', 'Sonic Boom', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma']
	},
	{
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: []
	},
	{
		name: "[Gen 3] OU (beta)",
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain']
	},
	{
		name: "[Gen 3] Ubers (beta)",
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Wobbuffet + Leftovers']
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "[Gen 2] OU (beta)",
		section: "Past Generations",

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber',
			'Hypnosis + Perish Song + Mean Look',
			'Hypnosis + Perish Song + Spider Web',
			'Lovely Kiss + Perish Song + Mean Look',
			'Lovely Kiss + Perish Song + Spider Web',
			'Sing + Perish Song + Mean Look',
			'Sing + Perish Song + Spider Web',
			'Sleep Powder + Perish Song + Mean Look',
			'Sleep Powder + Perish Song + Spider Web',
			'Spore + Perish Song + Mean Look',
			'Spore + Perish Song + Spider Web'
		]
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	}

];
