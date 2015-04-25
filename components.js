 * Components
 * Created by CreaturePhil - https://github.com/CreaturePhil
 *
 * These are custom commands for the server. This is put in a seperate file
 * from commands.js and config/commands.js to not interfere with them.
 * In addition, it is easier to manage when put in a seperate file.
 * Most of these commands depend on core.js.
 *
 * Command categories: General, Staff, Server Management
 *
 * @license MIT license
 */
 
const messages = [
	"ran into NoivernX60.",
	"danced with yunG!",
	"used Explosion!",
	"was killed by Jube the Zombie Hampster!",
	"was eaten by Delta!",
	"was sucker punched by Vernypoo!",
	"has left the server.",
	"got lost in Japan!",
	"left for their sex buddy!",
	"couldn't handle the hotness of Flare!",
	"was hit by a Magikarp!",
	"was secretly a scrub!",
	"got scared and left the server!",
	"went into Zubats Roost without a repel!",
	"got eaten by a bunch of sharks!",
	"ventured too deep into the forest without an escape rope",
	"turned into a scrub...",
	"woke up an angry Feebas!",
	"was forced to be yunGs slave!!",
	"was used as sharpedo bait!",
	"peered through the hole on Shedinja's back",
	"received judgment from the almighty Magikarp!",
	"used Final Gambit and missed!",
	"went into grass without any Rapemons!",
	"is an idiot guys. just, leave it be. it is a scrub. ok? ok!",
	"took a focus punch from Parental Bond Squirtle!",
	"got lost in the illusion of Zorua.",
	"ate a voltorb!",
	"lost a battle because of forcewin!",
	"fell into a ekans pit!",
  "is blasting off again (L Chevy got this)", // bought by L Chevy 12
];

exports.commands = {
	d: 'poof',
	cpoof: 'poof',
	poof: function (target, room, user) {
		if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
		if (target && !this.can('broadcast')) return false;
		if (room.id !== 'lobby') return false;
		var message = target || messages[Math.floor(Math.random() * messages.length)];
		if (message.indexOf('{{user}}') < 0)
			message = '{{user}} ' + message;
		message = message.replace(/{{user}}/g, user.name);
		if (!this.canTalk(message)) return false;

		var colour = '#' + [1, 1, 1].map(function () {
			var part = Math.floor(Math.random() * 0xaa);
			return (part < 0x10 ? '0' : '') + part.toString(16);
		}).join('');

		room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
		user.lastPoof = Date.now();
		user.lastPoofMessage = message;
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

