'use strict';

exports.commands = {
	foro: function () {
		if (!this.canBroadcast()) return;
		this.sendReplyBox("<a href=\"http://ultimatepsim.proboards.com\">Foro de Ultimate Server!</a>");
	},

	genius: function () {
		if (!this.canBroadcast()) return;

		let img = '<center><img src="http://i.imgur.com/Jc7Grp5.png" width="320" height="246"></center><b><center><big><big><big><marquee><blink>Bryan la xupa doblada</blink></marquee></big></big></big></center><b>';

		this.sendReplyBox(img);
	},

	radio: function () {
		if (!this.canBroadcast()) return;
		this.sendReplyBox("<a href=\"https://www.radionomy.com/en/radio/ultimateshowdownradio-/listen/?version=1.1&url=UltimateShowdownRadio-&type=medium&autoplay=false&volume=50&color1=%23000000&color2=%23ffffff&language=en&referer=http%3A%2F%2Fultimateshowdownradio-.playtheradio.com%2F\">Radio de Ultimate Server!</a>");
	},
	youtube: function () {
		if (!this.canBroadcast()) return;
		this.sendReplyBox("<a href=\"https://www.youtube.com/c/UltimateServer\">Canal de Ultimate!</a>");
	},

	facebook: function () {
		if (!this.canBroadcast()) return;
		this.sendReplyBox("<a href=\"https://www.facebook.com/ultimatePS/\">Facebook de Ultimate!</a>");
	},

	twitter: function () {
		if (!this.canBroadcast()) return;
		this.sendReplyBox("<a href=\"https://www.facebook.com/ultimatePS/\">Twitter de Ultimate!</a>");
	},

	jara: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center>Lost Seso: A que chica de ps os zumbabais</center><b><big><big><big><marquee><blink>%LloydJara: Irene *Shot*</blink></marquee></big></big></big></b>');
	},

};
