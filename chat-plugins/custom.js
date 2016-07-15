'use strict';

exports.commands = {
	foro: function () {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"http://ultimatepsim.proboards.com\">Foro de Ultimate Server!</a>");
	},

	genius: function () {
		if (!this.runBroadcast()) return;

		let img = '<center><img src="http://i.imgur.com/Jc7Grp5.png" width="320" height="246"></center><b><center><big><big><big><marquee><blink>Bryan la xupa doblada</blink></marquee></big></big></big></center><b>';

		this.sendReplyBox(img);
	},

	radio: function () {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"https://www.radionomy.com/en/radio/ultimateshowdownradio-/listen/?version=1.1&url=UltimateShowdownRadio-&type=medium&autoplay=false&volume=50&color1=%23000000&color2=%23ffffff&language=en&referer=http%3A%2F%2Fultimateshowdownradio-.playtheradio.com%2F\">Radio de Ultimate Server!</a>");
	},
	youtube: function () {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"https://www.youtube.com/c/UltimateServer\">Canal de Ultimate!</a>");
	},

	facebook: function () {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"https://www.facebook.com/ultimatePS/\">Facebook de Ultimate!</a>");
	},

	twitter: function () {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"https://www.facebook.com/ultimatePS/\">Twitter de Ultimate!</a>");
	},

	clearall: function (target, room, user, connection) {
		if (!this.can('clearall')) return;
		let len = room.log.length,
			users = [];
		while (len--) {
			room.log[len] = '';
		}
		for (let user in room.users) {
			users.push(user);
			Users.get(user).leaveRoom(room, Users.get(user).connections[0]);
		}
		len = users.length;
		setTimeout(function () {
			while (len--) {
				Users.get(users[len]).joinRoom(room, Users.get(users[len]).connections[0]);
			}
		}, 1000);
	},

	roomlist: function (target, room, user) {
		if (!this.can('roomlist')) return;
		let rooms = Object.keys(Rooms.rooms);
		let len = rooms.length;
		let official = ['<b><font color="#1a5e00" size="2">Salas oficiales:</font></b><br><br>'];
		let nonOfficial = ['<hr><b><font color="#000b5e" size="2">Salas no-oficiales:</font></b><br><br>'];
		let privateRoom = ['<hr><b><font color="#5e0019" size="2">Salas privadas:</font></b><br><br>'];
		while (len--) {
			let _room = Rooms.rooms[rooms[(rooms.length - len) - 1]];
			if (_room.type === 'chat') {
				if (_room.isOfficial) {
					official.push(('<a href="/' + _room.title + '" class="ilink">' + _room.title + '</a> |'));
				} else if (_room.isPrivate) {
					privateRoom.push(('<a href="/' + _room.title + '" class="ilink">' + _room.title + '</a> |'));
				} else {
					nonOfficial.push(('<a href="/' + _room.title + '" class="ilink">' + _room.title + '</a> |'));
				}
			}
		}
		this.sendReplyBox(official.join(' ') + nonOfficial.join(' ') + privateRoom.join(' '));
	},

	jara: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox('<center>Lost Seso: A que chica de ps os zumbabais</center><b><big><big><big><marquee><blink>%LloydJara: Irene *Shot*</blink></marquee></big></big></big></b>');
	},

};
