'use strict';

exports.BattleFormatsData = {
	bulbasaur: {
		randomBattleMoves: ["razorleaf", "sleeppowder", "swordsdance", "bodyslam", "toxic", "leechseed"],
		tier: "LC",
	},
	ivysaur: {
		randomBattleMoves: ["razorleaf", "sleeppowder", "swordsdance", "bodyslam", "toxic", "leechseed"],
		tier: "PU",
	},
	venusaur: {
		randomBattleMoves: ["razorleaf", "sleeppowder", "swordsdance", "bodyslam", "toxic", "leechseed"],
		tier: "RU",
	},
	charmander: {
		randomBattleMoves: ["fireblast", "bodyslam", "swordsdance", "submission", "substitute", "slash", "seismictoss"],
		tier: "LC",
	},
	charmeleon: {
		randomBattleMoves: ["fireblast", "bodyslam", "swordsdance", "submission", "substitute", "slash", "seismictoss"],
		tier: "PU",
	},
	charizard: {
		randomBattleMoves: ["fireblast", "earthquake", "bodyslam", "swordsdance", "hyperbeam"],
		tier: "RU",
	},
	squirtle: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam", "mimic"],
		tier: "LC",
	},
	wartortle: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam", "mimic", "hydropump", "rest"],
		tier: "PU",
	},
	blastoise: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam", "mimic", "hydropump", "rest", "earthquake", "hyperbeam"],
		tier: "NU",
	},
	caterpie: {
		randomBattleMoves:["stringshot", "tackle"],
		tier: "LC",
	},
	metapod: {
		randomBattleMoves:["stringshot", "tackle", "harden"],
		tier: "PU",
	},
	butterfree: {
		randomBattleMoves: ["psychic", "megadrain", "sleeppowder", "stunspore"],
		tier: "PU",
	},
	weedle: {
		randomBattleMoves: ["poisonsting", "stringshot"],
		tier: "LC",
	},
	kakuna: {
		randomBattleMoves: ["poisonsting", "stringshot", "harden"],
		tier: "PU",
	},
	beedrill: {
		randomBattleMoves: ["twineedle", "hyperbeam", "swordsdance", "agility"],
		tier: "PU",
	},
	pidgey: {
		randomBattleMoves: ["agility", "mimic", "mirrormove", "skyattack", "rest", "reflect", "sandattack"],
		essentialMove: "doubleedge",
		tier: "LC",
	},
	pidgeotto: {
		randomBattleMoves: ["agility", "mimic", "mirrormove", "skyattack", "rest", "reflect"],
		essentialMove: "doubleedge",
		tier: "PU",
	},
	pidgeot: {
		randomBattleMoves: ["hyperbeam", "agility", "mimic", "mirrormove", "skyattack", "rest", "reflect"],
		essentialMove: "doubleedge",
		tier: "PU",
	},
	rattata: {
		randomBattleMoves: ["bodyslam", "blizzard", "bubblebeam", "thunderbolt"],
		essentialMove: "superfang",
		tier: "LC",
	},
	raticate: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "blizzard", "bubblebeam"],
		essentialMove: "superfang",
		tier: "UU",
	},
	spearow: {
		randomBattleMoves: ["drillpeck", "doubleedge", "mirrormove", "agility"],
		tier: "LC",
	},
	fearow: {
		randomBattleMoves: ["drillpeck", "doubleedge", "hyperbeam", "mirrormove"],
		eventPokemon: [
			{"generation":1, "level":20, "moves":["growl", "leer", "furyattack", "payday"]},
		],
		tier: "RU",
	},
	ekans: {
		randomBattleMoves: ["glare", "earthquake", "bodyslam", "rockslide"],
		tier: "LC",
	},
	arbok: {
		randomBattleMoves: ["earthquake", "glare", "hyperbeam", "bodyslam", "rockslide"],
		tier: "PU",
	},
	pikachu: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "surf", "bodyslam", "agility", "thunder"],
		eventPokemon: [
			{"generation":1, "level":5, "moves":["surf"]},
			{"generation":1, "level":5, "moves":["fly"]},
			{"generation":1, "level":5, "moves":["thundershock", "growl", "surf"]},
		],
		tier: "LC",
	},
	raichu: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "bodyslam", "agility", "hyperbeam", "thunder"],
		essentialMove: "surf",
		tier: "UU",
	},
	sandshrew: {
		randomBattleMoves: ["swordsdance", "bodyslam", "rockslide", "substitute"],
		essentialMove: "earthquake",
		tier: "LC",
	},
	sandslash: {
		randomBattleMoves: ["swordsdance", "hyperbeam", "bodyslam", "rockslide", "substitute"],
		essentialMove: "earthquake",
		tier: "RU",
	},
	nidoranf: {
		randomBattleMoves: ["bodyslam", "doubleedge", "leer", "rest", "substitute"],
		tier: "LC",
	},
	nidorina: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunder", "thunderbolt", "bubblebeam", "doubleedge", "leer", "rest", "substitute"],
		tier: "PU",
	},
	nidoqueen: {
		randomBattleMoves: ["blizzard", "thunder", "thunderbolt", "bodyslam"],
		essentialMove: "earthquake",
		tier: "NU",
	},
	nidoranm: {
		randomBattleMoves: ["bodyslam", "doubleedge", "leer", "rest", "substitute"],
		tier: "LC",
	},
	nidorino: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunder", "thunderbolt", "bubblebeam", "doubleedge", "leer", "rest", "substitute"],
		tier: "PU",
	},
	nidoking: {
		randomBattleMoves: ["blizzard", "thunder", "thunderbolt", "bodyslam"],
		essentialMove: "earthquake",
		tier: "NU",
	},
	clefairy: {
		randomBattleMoves: ["blizzard", "bodyslam", "thunderwave", "thunderbolt", "counter", "sing", "thunder", "metronome"],
		tier: "LC",
	},
	clefable: {
		randomBattleMoves: ["blizzard", "icebeam", "bodyslam", "hyperbeam", "thunderwave", "thunderbolt", "counter", "sing", "thunder"],
		tier: "RU",
	},
	vulpix: {
		randomBattleMoves: ["bodyslam", "confuseray", "reflect", "toxic"],
		essentialMove: "fireblast",
		tier: "LC",
	},
	ninetales: {
		randomBattleMoves: ["bodyslam", "confuseray", "doubleedge", "hyperbeam", "reflect", "toxic"],
		essentialMove: "fireblast",
		tier: "PU",
	},
	jigglypuff: {
		randomBattleMoves: ["thunderwave", "bodyslam", "doubleedge", "bubblebeam", "sing", "disable", "defensecurl"],
		tier: "LC",
	},
	wigglytuff: {
		randomBattleMoves: ["thunderwave", "bodyslam", "doubleedge", "hyperbeam", "blizzard", "bubblebeam", "sing"],
		tier: "RU",
	},
	zubat: {
		randomBattleMoves: ["screech", "confuseray", "doubleedge", "supersonic", "megadrain", "leechlife", "toxic"],
		tier: "LC",
	},
	golbat: {
		randomBattleMoves: ["screech", "confuseray", "doubleedge", "hyperbeam", "megadrain"],
		tier: "PU",
	},
	oddish: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "doubleedge", "megadrain", "toxic"],
		tier: "LC",
	},
	gloom: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "doubleedge", "megadrain"],
		tier: "PU",
	},
	vileplume: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "bodyslam", "megadrain"],
		tier: "PU",
	},
	paras: {
		randomBattleMoves: ["stunspore", "swordsdance", "spore", "slash", "megadrain", "doubleedge", "growth", "toxic"],
		essentialMove: "bodyslam",
		tier: "LC",
	},
	parasect: {
		randomBattleMoves: ["stunspore", "swordsdance", "spore", "slash", "megadrain", "doubleedge", "growth", "hyperbeam", "toxic"],
		essentialMove: "bodyslam",
		tier: "PU",
	},
	venonat: {
		randomBattleMoves: ["psychic", "megadrain", "sleeppowder", "stunspore", "toxic"],
		tier: "LC",
	},
	venomoth: {
		randomBattleMoves: ["psychic", "megadrain", "sleeppowder", "stunspore"],
		tier: "NU",
	},
	diglett: {
		randomBattleMoves: ["slash", "sandattack", "mimic", "substitute"],
		essentialMove: "earthquake",
		tier: "LC",
	},
	dugtrio: {
		randomBattleMoves: ["slash", "sandattack", "mimic", "substitute"],
		essentialMove: "earthquake",
		tier: "RU",
	},
	meowth: {
		randomBattleMoves: ["bubblebeam", "bodyslam", "screech", "thunderbolt", "payday"],
		essentialMove: "slash",
		tier: "LC",
	},
	persian: {
		randomBattleMoves: ["bubblebeam", "hyperbeam", "bodyslam", "screech", "thunderbolt"],
		essentialMove: "slash",
		tier: "UU",
	},
	psyduck: {
		randomBattleMoves: ["blizzard", "icebeam", "surf", "bodyslam", "rest"],
		essentialMove: "amnesia",
		eventPokemon: [
			{"generation":1, "level":15, "moves":["scratch", "amnesia"]},
		],
		tier: "LC",
	},
	golduck: {
		randomBattleMoves: ["blizzard", "icebeam", "surf", "bodyslam", "rest"],
		essentialMove: "amnesia",
		tier: "RU",
	},
	mankey: {
		randomBattleMoves: ["submission", "rockslide", "bodyslam", "megakick"],
		tier: "LC",
	},
	primeape: {
		randomBattleMoves: ["submission", "rockslide", "bodyslam", "hyperbeam", "megakick"],
		tier: "PU",
	},
	growlithe: {
		randomBattleMoves: ["fireblast", "bodyslam", "mimic", "reflect"],
		tier: "LC",
	},
	arcanine: {
		randomBattleMoves: ["fireblast", "bodyslam", "hyperbeam", "mimic", "reflect"],
		tier: "NU",
	},
	poliwag: {
		randomBattleMoves: ["blizzard", "hypnosis", "surf", "psychic"],
		essentialMove: "amnesia",
		tier: "LC",
	},
	poliwhirl: {
		randomBattleMoves: ["blizzard", "hypnosis", "surf", "psychic"],
		essentialMove: "amnesia",
		tier: "RU",
	},
	poliwrath: {
		randomBattleMoves: ["blizzard", "hypnosis", "surf", "submission"],
		essentialMove: "amnesia",
		tier: "UU",
	},
	abra: {
		randomBattleMoves: ["psychic", "thunderwave", "reflect", "seismictoss"],
		tier: "NU",
	},
	kadabra: {
		randomBattleMoves: ["recover", "thunderwave", "reflect", "seismictoss"],
		essentialMove: "psychic",
		tier: "UU",
	},
	alakazam: {
		randomBattleMoves: ["recover", "thunderwave", "reflect", "seismictoss"],
		essentialMove: "psychic",
		tier: "OU",
	},
	machop: {
		randomBattleMoves: ["bodyslam", "earthquake", "submission", "counter", "doubleedge", "leer", "megakick", "rockslide"],
		tier: "LC",
	},
	machoke: {
		randomBattleMoves: ["bodyslam", "earthquake", "submission", "counter", "doubleedge", "leer", "megakick", "rockslide"],
		tier: "PU",
	},
	machamp: {
		randomBattleMoves: ["bodyslam", "earthquake", "hyperbeam", "submission", "rockslide"],
		tier: "PU",
	},
	bellsprout: {
		randomBattleMoves: ["razorleaf", "swordsdance", "bodyslam", "toxic", "stunspore"],
		essentialMove: "sleeppowder",
		tier: "LC",
	},
	weepinbell: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "bodyslam", "toxic", "stunspore"],
		essentialMove: "razorleaf",
		tier: "PU",
	},
	victreebel: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "bodyslam", "hyperbeam", "stunspore"],
		essentialMove: "razorleaf",
		tier: "UU",
	},
	tentacool: {
		randomBattleMoves: ["swordsdance", "doubleedge", "blizzard", "hydropump", "mimic", "barrier"],
		tier: "LC",
	},
	tentacruel: {
		randomBattleMoves: ["swordsdance", "blizzard", "hyperbeam", "hydropump", "surf"],
		tier: "UU",
	},
	geodude: {
		randomBattleMoves: ["bodyslam", "earthquake", "rockslide", "explosion"],
		tier: "LC",
	},
	graveler: {
		randomBattleMoves: ["bodyslam", "earthquake", "rockslide", "explosion"],
		tier: "PU",
	},
	golem: {
		randomBattleMoves: ["explosion", "bodyslam", "earthquake", "rockslide"],
		tier: "OU",
	},
	ponyta: {
		randomBattleMoves: ["fireblast", "agility", "bodyslam", "growl", "reflect", "substitute", "toxic"],
		tier: "LC",
	},
	rapidash: {
		randomBattleMoves: ["agility", "bodyslam", "growl", "hyperbeam", "reflect", "substitute", "toxic"],
		essentialMove: "fireblast",
		eventPokemon: [
			{"generation":1, "level":40, "moves":["ember", "firespin", "stomp", "payday"]},
		],
		tier: "UU",
	},
	slowpoke: {
		randomBattleMoves: ["amnesia", "surf", "thunderwave", "rest"],
		tier: "NU",
	},
	slowbro: {
		randomBattleMoves: ["amnesia", "surf", "thunderwave", "rest"],
		tier: "OU",
	},
	magnemite: {
		randomBattleMoves: ["thunderwave", "thunder", "thunderbolt", "mimic", "doubleedge"],
		tier: "LC",
	},
	magneton: {
		randomBattleMoves: ["thunderwave", "mimic", "doubleedge", "hyperbeam"],
		essentialMove: "thunderbolt",
		tier: "PU",
	},
	farfetchd: {
		randomBattleMoves: ["sandattack", "substitute", "swordsdance", "bodyslam", "toxic"],
		essentialMove: "slash",
		tier: "PU",
	},
	doduo: {
		randomBattleMoves: ["drillpeck", "bodyslam", "mimic", "doubleedge", "agility", "growl", "reflect"],
		tier: "LC",
	},
	dodrio: {
		randomBattleMoves: ["drillpeck", "bodyslam", "hyperbeam", "mimic"],
		tier: "UU",
	},
	seel: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam", "mimic"],
		tier: "LC",
	},
	dewgong: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam", "mimic"],
		tier: "RU",
	},
	grimer: {
		randomBattleMoves: ["sludge", "bodyslam", "megadrain", "screech"],
		essentialMove: "explosion",
		tier: "LC",
	},
	muk: {
		randomBattleMoves: ["sludge", "bodyslam", "megadrain", "screech"],
		essentialMove: "explosion",
		tier: "PU",
	},
	shellder: {
		randomBattleMoves: ["surf", "blizzard", "icebeam", "explosion", "withdraw", "toxic", "supersonic"],
		tier: "LC",
	},
	cloyster: {
		randomBattleMoves: ["surf", "blizzard", "icebeam", "hyperbeam", "explosion", "toxic"],
		tier: "OU",
	},
	gastly: {
		randomBattleMoves: ["explosion", "thunderbolt", "megadrain", "psychic", "confuseray"],
		essentialMove: "hypnosis",
		tier: "LC",
	},
	haunter: {
		randomBattleMoves: ["explosion", "thunderbolt", "megadrain", "psychic", "confuseray"],
		essentialMove: "hypnosis",
		tier: "NFE",
	},
	gengar: {
		randomBattleMoves: ["explosion", "thunderbolt", "megadrain", "psychic"],
		essentialMove: "hypnosis",
		tier: "OU",
	},
	onix: {
		randomBattleMoves: ["earthquake", "explosion", "rockslide", "toxic"],
		tier: "PU",
	},
	drowzee: {
		randomBattleMoves: ["hypnosis", "psychic", "thunderwave", "counter", "rest"],
		tier: "LC",
	},
	hypno: {
		randomBattleMoves: ["hypnosis", "thunderwave", "counter", "rest"],
		essentialMove: "psychic",
		tier: "UU",
	},
	krabby: {
		randomBattleMoves: ["bodyslam", "crabhammer", "swordsdance", "blizzard"],
		tier: "LC",
	},
	kingler: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "swordsdance", "blizzard"],
		essentialMove: "crabhammer",
		tier: "RU",
	},
	voltorb: {
		randomBattleMoves: ["thunder", "thunderbolt", "thunderwave", "screech", "flash", "reflect"],
		essentialMove: "explosion",
		tier: "LC",
	},
	electrode: {
		randomBattleMoves: ["thunder", "thunderbolt", "thunderwave", "screech", "flash", "reflect"],
		essentialMove: "explosion",
		tier: "PU",
	},
	exeggcute: {
		randomBattleMoves: ["sleeppowder", "explosion", "eggbomb", "megadrain", "stunspore"],
		essentialMove: "psychic",
		tier: "RU",
	},
	exeggutor: {
		randomBattleMoves: ["psychic", "explosion", "eggbomb", "hyperbeam", "megadrain", "stunspore"],
		essentialMove: "sleeppowder",
		tier: "OU",
	},
	cubone: {
		randomBattleMoves: ["earthquake", "blizzard", "bodyslam", "seismictoss"],
		tier: "LC",
	},
	marowak: {
		randomBattleMoves: ["earthquake", "blizzard", "bodyslam", "seismictoss"],
		tier: "PU",
	},
	hitmonlee: {
		randomBattleMoves: ["bodyslam", "counter", "highjumpkick", "mimic", "seismictoss", "substitute"],
		tier: "PU",
	},
	hitmonchan: {
		randomBattleMoves: ["bodyslam", "submission", "seismictoss", "counter"],
		tier: "PU",
	},
	lickitung: {
		randomBattleMoves: ["swordsdance", "earthquake", "hyperbeam", "bodyslam"],
		tier: "PU",
	},
	koffing: {
		randomBattleMoves: ["sludge", "thunder", "thunderbolt", "fireblast"],
		essentialMove: "explosion",
		tier: "LC",
	},
	weezing: {
		randomBattleMoves: ["sludge", "thunder", "thunderbolt", "fireblast"],
		essentialMove: "explosion",
		tier: "PU",
	},
	rhyhorn: {
		randomBattleMoves: ["earthquake", "rockslide", "substitute", "bodyslam"],
		tier: "LC",
	},
	rhydon: {
		randomBattleMoves: ["earthquake", "rockslide", "substitute", "bodyslam"],
		tier: "UU",
	},
	chansey: {
		randomBattleMoves: ["icebeam", "counter", "thunderwave", "thunderbolt", "reflect"],
		essentialMove: "softboiled",
		tier: "OU",
	},
	tangela: {
		randomBattleMoves: ["sleeppowder", "hyperbeam", "stunspore", "megadrain", "growth", "swordsdance", "bodyslam"],
		tier: "NU",
	},
	kangaskhan: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "counter", "earthquake", "surf"],
		tier: "UU",
	},
	horsea: {
		randomBattleMoves: ["smokescreen", "hydropump", "surf", "blizzard", "mimic"],
		tier: "LC",
	},
	seadra: {
		randomBattleMoves: ["smokescreen", "hydropump", "surf", "blizzard", "mimic"],
		tier: "PU",
	},
	goldeen: {
		randomBattleMoves: ["surf", "blizzard", "agility", "doubleedge", "toxic", "supersonic"],
		tier: "LC",
	},
	seaking: {
		randomBattleMoves: ["surf", "blizzard", "hyperbeam", "doubleedge"],
		tier: "PU",
	},
	staryu: {
		randomBattleMoves: ["blizzard", "thunderbolt", "thunderwave", "surf"],
		essentialMove: "recover",
		tier: "NU",
	},
	starmie: {
		randomBattleMoves: ["blizzard", "thunderbolt", "thunderwave", "surf"],
		essentialMove: "recover",
		tier: "OU",
	},
	mrmime: {
		randomBattleMoves: ["psychic", "thunderwave", "thunderbolt", "seismictoss"],
		tier: "RU",
	},
	scyther: {
		randomBattleMoves: ["slash", "swordsdance", "agility", "hyperbeam"],
		tier: "NU",
	},
	jynx: {
		randomBattleMoves: ["lovelykiss", "blizzard", "psychic", "mimic"],
		tier: "OU",
	},
	electabuzz: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "psychic", "seismictoss"],
		tier: "RU",
	},
	magmar: {
		randomBattleMoves: ["confuseray", "fireblast", "bodyslam", "hyperbeam", "mimic"],
		tier: "PU",
	},
	pinsir: {
		randomBattleMoves: ["swordsdance", "hyperbeam", "bodyslam", "submission"],
		tier: "RU",
	},
	tauros: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "earthquake", "blizzard"],
		tier: "OU",
	},
	magikarp: {
		randomBattleMoves: ["splash", "dragonrage"],
		eventPokemon: [
			{"generation":1, "level":5, "moves":["dragonrage"]},
		],
		tier: "LC",
	},
	gyarados: {
		randomBattleMoves: ["blizzard", "surf", "thunderbolt", "bodyslam", "hyperbeam"],
		tier: "UU",
	},
	lapras: {
		randomBattleMoves: ["confuseray", "blizzard", "icebeam", "rest", "thunderbolt", "bodyslam"],
		tier: "OU",
	},
	ditto: {
		randomBattleMoves: ["transform"],
		tier: "PU",
	},
	eevee: {
		randomBattleMoves: ["doubleedge", "growl", "mimic", "reflect", "sandattack", "tailwhip", "toxic"],
		essentialMove: "bodyslam",
		tier: "LC",
	},
	vaporeon: {
		randomBattleMoves: ["rest", "hydropump", "surf", "blizzard", "bodyslam", "mimic"],
		tier: "RU",
	},
	jolteon: {
		randomBattleMoves: ["thunderwave", "pinmissile", "bodyslam", "doublekick", "sandattack"],
		essentialMove: "thunderbolt",
		tier: "OU",
	},
	flareon: {
		randomBattleMoves: ["fireblast", "bodyslam", "hyperbeam", "quickattack"],
		tier: "PU",
	},
	porygon: {
		randomBattleMoves: ["thunderwave", "thunderbolt", "blizzard", "icebeam", "doubleedge", "hyperbeam", "sharpen", "psychic", "agility", "triattack"],
		essentialMove: "recover",
		tier: "NU",
	},
	omanyte: {
		randomBattleMoves: ["hydropump", "surf", "mimic", "rest", "seismictoss"],
		essentialMove: "blizzard",
		tier: "LC",
	},
	omastar: {
		randomBattleMoves: ["hydropump", "surf", "mimic", "rest", "seismictoss"],
		essentialMove: "blizzard",
		tier: "NU",
	},
	kabuto: {
		randomBattleMoves: ["swordsdance", "bodyslam", "surf", "toxic", "harden", "slash"],
		tier: "LC",
	},
	kabutops: {
		randomBattleMoves: ["swordsdance", "bodyslam", "surf", "hyperbeam"],
		tier: "PU",
	},
	aerodactyl: {
		randomBattleMoves: ["skyattack", "reflect", "doubleedge", "hyperbeam"],
		tier: "RU",
	},
	snorlax: {
		randomBattleMoves: ["blizzard", "icebeam", "bodyslam", "thunderbolt", "rest", "selfdestruct", "hyperbeam", "surf", "earthquake"],
		essentialMove: "amnesia",
		tier: "OU",
	},
	articuno: {
		randomBattleMoves: ["blizzard", "rest", "reflect", "icebeam", "mimic"],
		tier: "BL",
	},
	zapdos: {
		randomBattleMoves: ["thunderbolt", "drillpeck", "thunderwave", "agility"],
		tier: "OU",
	},
	moltres: {
		randomBattleMoves: ["agility", "hyperbeam", "reflect", "skyattack", "substitute", "toxic"],
		essentialMove: "fireblast",
		tier: "BL",
	},
	dratini: {
		randomBattleMoves: ["agility", "hyperbeam", "blizzard", "surf", "bodyslam", "icebeam", "substitute", "thunder", "thunderwave", "thunderbolt"],
		tier: "LC",
	},
	dragonair: {
		randomBattleMoves: ["agility", "hyperbeam", "blizzard", "surf", "bodyslam", "icebeam", "substitute", "thunder", "thunderwave", "thunderbolt"],
		tier: "PU",
	},
	dragonite: {
		randomBattleMoves: ["agility", "hyperbeam", "blizzard", "surf", "bodyslam", "icebeam", "substitute", "thunder", "thunderwave", "thunderbolt"],
		tier: "UU",
	},
	mewtwo: {
		randomBattleMoves: ["recover", "blizzard", "thunderbolt", "amnesia", "icebeam", "rest", "barrier", "thunderwave", "bodyslam", "hyperbeam"],
		essentialMove: "psychic",
		tier: "Uber",
	},
	mew: {
		randomBattleMoves: ["thunderwave", "horndrill", "fissure", "softboiled", "thunderbolt", "blizzard", "psychic", "swordsdance", "earthquake", "hyperbeam", "swift", "explosion"],
		eventPokemon: [
			{"generation":1, "level":5, "moves":["pound"]},
		],
		eventOnly: true,
		tier: "Uber",
	},
};
