// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [
	// Violet Version
	///////////////////////////////////////////////////////////////////

	{
		name: "Violet Version",
		section: "Violet Version",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber']
	},

	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "PP ORAS Ubers",
		section: "ORAS Singles",
		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Ban Mod', 'Baton Pass Clause', 'Evasion Moves Clause'],
		banlist: ['Red orb', 'Blue orb', 'Salamencite', 'Gengarite', 'Shadow Tag', 'Geomancy']
	},
	{
		name: "PP ORAS Ubers (Geomancy)",
		section: "ORAS Singles",
		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Ban Mod', 'Baton Pass Clause', 'Evasion Moves Clause'],
		banlist: ['Red orb', 'Blue orb', 'Salamencite', 'Gengarite', 'Shadow Tag']
	},
	{
		name: "OU",
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite']
	},
	{
		name: "Custom Game",
		section: "ORAS Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////
	{
		name: "RBYPlus",
		section: "Other Mods",

		mod: 'rbyplus',
		ruleset: ['Pokemon', 'Standard', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Amazing 83",
		section: "Other Mods",

		mod: 'amazing',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Uber', 'UU', 'BL', 'NU', 'NFE']
	},
	{
		name: "Dark Chocolate",
		section: "Other Mods",

		mod: 'darkchocolate',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew']
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
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
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
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod']
	},
	{
		name: "[Gen 3] OU",
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain']
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 2] OU",
		section: "Past Generations",

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	}
];
