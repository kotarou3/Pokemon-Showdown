const messages = [
	"visited James's bedroom and never returned!",
	"was crushed by Onix!",
	"became Rowan's slave!",
	"became Broken Hope's love slave!",
	"felt Gamebreaker's wrath!",
	"died of a broken heart.",
	"was hit by Magikarp's Revenge!",
	"got scared and left the server!",
	"got eaten by a bunch of piranhas!",
	"is blasting off again!",
	"A large spider descended from the sky and picked up {{user}}.",
	"was Volt Tackled by Pikachu!",
	"got their sausage smoked by Heatran!",
	"was forced to give Zarel an oil massage!",
	"took an arrow to the knee... and then one to the face.",
	"peered through the hole on Shedinja's back",
	"received judgment from the almighty Arceus!",
	"used Final Gambit and missed!",
	"{{user}} killed them. {{user}} killed them all.",
	"pissed off AI Kuroha!",
	"was actually a 12 year and was banned for COPPA.",
	"got lost in the illusion of reality.",
	"was unfortunate and didn't get a cool message.",
	"Nickoop@ accidently kicked {{user}} from the server!",
	"was knocked out cold by Frage!",
	"died making love to Nosepass!",
	"was glomped to death by Blaze!",
	"tried to take Soph's bagels!",
	"played Pokemon Green!",
	"insulted Suicune in front of Hope!",
	"was hit by a wrecking ball!",
	"was hit by a train!",
	"was splashed by a Magikarp!",
	"said Nick x Niku!",
	"tried to take Gasper from Hazeel!",
	"was impaled by Blade!",
	"got taken to Dante's rape dungeon!",
	"took a Wood Hammer to the face!",
	"sucked 37 dicks... in a row!",
	"got trapped in Corsola's Cage!",
	"was secretly Lonk from Pennsylvania!",
	"was mistaken for a girl by Hazeel!",
	"tried to genderbend, but failed!",
	"insulted eels in front of Nick!",
	"poof'd in front of Frage!",
	"was secretly Petch from Texas!",
	"was finished!",
	"got turnip'd by Gamebreaker!"
];

exports.commands = {
	d: 'poof',
	cpoof: 'poof',
	poof: function (target, room, user) {
		if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
		if (target && !this.can('broadcast')) return false;
		if (room.id !== 'lobby') return false;
		var message = target || messages[Math.floor(Math.random() * messages.length)];
		if (message.indexOf('{{user}}') < 0) {
			message = '{{user}} ' + message;
		}
		message = message.replace(/{{user}}/g, user.name);
		if (!this.canTalk(message)) return false;

		var colour = '#' + [1, 1, 1].map(function () {
			var part = Math.floor(Math.random() * 0xaa);
			return (part < 0x10 ? '0' : '') + part.toString(16);
		}).join('');

		room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
		user.disconnectAll();
	},

	poofoff: 'nopoof',
	nopoof: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = true;
		return this.sendReply("Poof is now disabled.");
	},

	poofon: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = false;
		return this.sendReply("Poof is now enabled.");
	}
};
