/*Kay so this shop isn't exactly the best shop, so you might wanna go ahead and edit stuff, whoever's using this.
I might make a new shop soon enough, so yeah~
-Siiilver*/

var fs = require('fs');

var Core = {
	write: function (fileName, item, value, options, subItem) {
		fileName = 'config/' + fileName + '.json';
		if (!fs.existsSync(fileName)) fs.writeFileSync(fileName, '{}');
		var file = JSON.parse(fs.readFileSync(fileName));
		if (subItem) {
			if (!file[item]) file[item] = {};
			if (!options || !file[item].subItem) file[item][subItem] = value;
			else if (options === '+') file[item][subItem] += value;
			else if (options === '-') file[item][subItem] -= value;
			else file[item][subItem] = value;
		} else {
			if (!options || !file[item]) file[item] = value;
			else if (options === '+') file[item] += value;
			else if (options === '-') file[item] -= value;
			else file[item] = value;
		}
		fs.writeFileSync(fileName, JSON.stringify(file, null, 1));
	},
	read: function (fileName, item, subItem) {
		fileName = 'config/' + fileName + '.json';
		if (!fs.existsSync(fileName)) return;
		var file = JSON.parse(fs.readFileSync(fileName));
		if (subItem) {
			if (file[item]) return file[item][subItem];
		}
		return file[item] || 0;
	}
};

function addLog (message) {
	if (!global.moneyLog) global.moneyLog = '';
	var d = new Date();
	global.moneyLog += '<small>[' + d.format('{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {tt}') + ']</small> ';
	global.moneyLog += message + '<br/>';
}

exports.commands = {
	
	buckslog: 'moneylog',
	moneylog: function (target, room, user) {
		if (!this.can('lock')) return false;
		this.popupReply('|html|<center><u>Transaction Log (Time Zone:)</u></center><br/>' + global.moneyLog);
	},
	
	atm: 'wallet',
	money: 'wallet', 
	cash: 'wallet', 
	bucks: 'wallet',
	purse: 'wallet', 
	wallet: function (target, room, user) {
		if (!this.canBroadcast()) return;
		var User;
		if (!toId(target)) User = user.name;
		else User = Users.get(target) ? Users.get(target).name : target;
		var money = Number(Core.read('money', toId(User))) || 'no';
		this.sendReplyBox(User + ' has ' + money + ' bucks.');
	},

	shop: function(target, room, user) {
        if (!this.canBroadcast()) return;
        if (this.broadcasting) return this.sendReplyBox('<center><b>Click <button name = "send" value = "/shop">here</button> to enter our shop!');
        var status = (!global.shopclosed) ? '<b>Shop status: <font color = "green">Open</font></b><br />To buy an item, type in /buy [item] in the chat, or simply click on one of the buttons.' : '<b>Shop status: <font color = "red">Closed</font></b>';
        this.sendReplyBox('<center><h3><b><u>Sora Shop</u></b></h3><table border = "1" cellspacing = "0" cellpadding = "4"><tr><th>Item</th><th>Description</th><th>Price</th><th></th></tr>' +
            '<tr><td>Symbol</td><td>Buys a symbol to be placed in front of your username.</td><td>5</td><td><button name = "send", value = "/buy symbol"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Avatar</td><td>Buys a custom avatar.</td><td>25</td><td><button name = "send", value = "/buy avatar"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Card</td><td>Buys a trainer card.</td><td>40</td><td><button name = "send", value = "/buy card"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Fix</td><td>Buys the ability to edit your custom avatar or trainer card</td><td>10</td><td><button name = "send", value = "/buy fix"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Room</td><td>Buys a chatroom for you to own (with reason).</td><td>100</td><td><button name = "send", value = "/buy room"><b>Buy!</b></button></td></tr>' +
            '<tr><td>POTD</td><td>Buys the ability to set the Pokémon of the Day. Not purchasable if there is already a POTD for the day.</td><td>5</td><td><button name = "send", value = "/buy potd"><b>Buy!</b></button></td></tr>' +
            '</table><br />' + status + '</center>');
	},

	closeshop: function(target, room, user) {
        if (!this.can('hotpatch')) return false;
        if (global.shopclosed) return this.sendReply('The shop is already closed.');
        global.shopclosed = true;
		addLog(user.name + ' closed the shop.');
        this.sendReply('The shop is now closed.');
    },

    openshop: function(target, room, user) {
        if (!this.can('hotpatch')) return false;
        if (!global.shopclosed) return this.sendReply('The shop is already open.');
        global.shopclosed = false;
		addLog(user.name + ' opened the shop.');
        this.sendReply('The shop is now open.');
    },
    
    give: 'award',
    givebucks: 'award',
    givebucks: 'award',
    gb: 'award',
    award: function(target, room, user, connection, cmd) {
        if (!this.can('hotpatch')) return false;
        if (!target) return this.sendReply('The correct syntax is /' + cmd + ' [user], [amount]');
        target = this.splitTarget(target);
        var targetUser = this.targetUser;
        if (!targetUser) return this.sendReply('User \'' + this.targetUsername + '\' not found.');
        if (!target) return this.sendReply('You need to mention the number of bucks you want to give ' + targetUser.name);
        if (isNaN(target)) return this.sendReply(target + " is not a valid number.");
        if (target < 1) return this.sendReply('You cannot give ' + targetUser.name + ' anything less than 1 buck!');
        Core.write('money', targetUser.userid, Number(target), '+');
        var amt = (Number(target) == 1) ? 'buck' : 'bucks';
        var bucks = (Core.read('money', targetUser.userid) == 1) ? 'buck' : 'bucks';
        targetUser.send('|popup|' + user.name + ' has given you ' + target + ' ' + bucks + '. You now have ' + Core.read('money', targetUser.userid) + ' ' + amt + '.');
        addLog(user.name + ' has given ' + targetUser.name + ' ' + target + ' ' + bucks + '. This user now has ' + Core.read('money', targetUser.userid) + ' ' + amt + '.');
		return this.sendReply(targetUser.name + ' was given ' + Number(target) + ' ' + bucks + '. This user now has ' + Core.read('money', targetUser.userid) + ' ' + amt + '.');
    },
    
    removebucks: 'remove',
    rb: 'remove',
    tb: 'remove',
    takebucks: 'remove',
    take: 'remove',
    remove: function(target, room, user, connection, cmd) {
        if (!this.can('hotpatch')) return false;
        if (!target) return this.sendReply('/'+ cmd + ' [user], [amount] - Gives the specified user the specified number of bucks.');
        target = this.splitTarget(target);
        var targetUser = this.targetUser;
		if (!targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
		if (!toId(target)) return this.sendReply('You need to specify the number of bucks you want to remove from ' + targetUser.name);
		if (isNaN(target)) return this.sendReply(target + " isn't a valid number.");
		if (Core.read('money', targetUser.userid) < target) return this.sendReply('You can\'t take away more than what ' + targetUser.name + ' already has!');
        Core.write('money', targetUser.userid, Number(target), '-');
        var amt = (Core.read('money', targetUser.userid) == 1) ? 'buck' : 'bucks';
		var bucks = (target == 1) ? 'buck' : 'bucks';
        targetUser.send('|popup|'+ user.name + ' has taken away ' + target + ' ' + bucks +' from you. You now have ' + Core.read('money', targetUser.userid) + ' '+amt+'.');
        addLog(user.name + ' has taken away ' + target + ' ' + bucks + ' from '+targetUser.name+'. This user now has ' + Core.read('money', targetUser.userid) + ' '+amt+'.');
		return this.sendReply('You have taken away '+ target + ' ' + bucks + ' from ' + targetUser.name + '. This user now has ' + Core.read('money', targetUser.userid) + ' ' + amt + '.');
    },
	
	transfermoney: 'transferbucks',
	transferbucks: function (target, room, user, connection, cmd) {
		if (!this.can('hotpatch')) return false;
        if (!target) return this.sendReply('/'+ cmd + ' [user], [amount] - Transfers the specified number of bucks to the specified user.');
        target = this.splitTarget(target);
        var targetUser = this.targetUser;
		if (!targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
		if (targetUser.userid === user.userid) return this.sendReply('You can\'t transfer bucks to yourself!');
		if (!toId(target)) return this.sendReply('You need to specify the number of bucks you want to transfer to ' + targetUser.name);
		if (isNaN(target)) return this.sendReply(target + " isn't a valid number.");
		if (Core.read('money', user.userid) < target) return this.sendReply('You can\'t give ' + targetUser.name + ' more than what you have!');
        Core.write('money', targetUser.userid, Number(target), '+');
        Core.write('money', user.userid, Number(target), '-');
        var amt = (Core.read('money', targetUser.userid) == 1) ? 'buck' : 'bucks';
        var userAmt = (Core.read('money', user.userid) == 1) ? 'buck' : 'bucks';
		var bucks = (target == 1) ? 'buck' : 'bucks';
        targetUser.send('|popup|' + user.name + ' has transferred ' + target + ' ' + bucks +' to you. You now have ' + Core.read('money', targetUser.userid) + ' ' + amt + '.');
        addLog(user.name + ' has transferred ' + target + ' ' + bucks + ' to '+ targetUser.name +'. This user now has ' + Core.read('money', targetUser.userid) + ' ' + amt + '. ' + user.name + ' has ' + Core.read('money', user.userid) + ' ' + userAmt + ' left.');
		return this.sendReply('You have transferred '+ target + ' ' + bucks + ' to ' + targetUser.name + '. You have ' + Core.read('money', user.userid) + ' ' + userAmt + ' left.');
    },
    
    buy: function(target, room, user) {
        if (global.shopclosed === true) return this.sendReply("The shop is closed for now. Wait until it re-opens shortly.");
        target = toId(target);

        if (target === 'symbol') {
            if (user.hassymbol || user.needssymbol) return this.sendReply("You've already bought a custom symbol!");
            if (user.locked) return this.sendReply("You cannot buy this while you're locked.");
            var price = 5;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to buy a symbol.");

            room.add(user.name + ' bought a custom symbol!');
            this.sendReply("You have bought a custom symbol. The symbol will wear off once you remain offline for more than an hour, or once the server restarts.");
            this.sendReply("Type /customsymbol [symbol] into the chat to add a symbol next to your name!");
            this.sendReply("If you get bored of your symbol or something, you can use /removesymbol to remove it.");
            user.needssymbol = true;

        } else if (target === 'avatar') {
            if (user.hasavatar === true) return this.sendReply("You have already bought a custom avatar. Use /customavatar [URL] to set it.");
	    	if (!Number(user.avatar)) return this.sendReply('You already have a custom avatar!');
            var price = 25;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to buy a custom avatar.");

            room.add(user.name + ' bought a custom avatar!');
            this.sendReply("You have bought a custom avatar. PM the image to an admin.");
            user.boughtAvatar = true;
            for (var i in Users.users) {
            	if (Users.users[i].can('hotpatch')) Users.users[i].send('|pm|~Server-Kun [Do Not Reply]|' + Users.users[i].userid + '|'+user.name+' has bought a trainer card.')
            }

        } else if (target === 'room') {
            var price = 80;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to buy a symbol.");

            room.add(user.name + ' bought a chatroom!');
            this.sendReply("You have bought a chatroom for you to own.");
            this.sendReply("PM an admin to create your room and make you the roomowner.");
            for (var i in Users.users) {
            	if (Users.users[i].can('hotpatch')) Users.users[i].send('|pm|~Server-PM|' + Users.users[i].userid + '|' + user.name + ' has bought a chatroom.')
            }

        } else if (target === 'card') {
            var price = 40;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to buy a Trainer Card.");

            room.add(user.name + ' bought a trainer card!');
            this.sendReply("You have bought a trainer card. PM an admin to add it.");
            for (var i in Users.users) {
            	if (Users.users[i].can('hotpatch')) Users.users[i].send('|pm|~Server-PM|' + Users.users[i].userid + '|'+user.name+' has bought a trainer card.')
            }

        } else if (target === 'fix') {
            var price = 10;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to buy a fix.");
            room.add(user.name + ' bought a trainer card/avatar fix!');
            this.sendReply("You have bought a fix for your trainer card or avatar.");
            this.sendReply("PM the changes to an admin. You may only fix either your TC or avatar at a time.");

        } else if (target === 'potd') {
            if (Config.potd) return this.sendReply('The Pokémon of the Day has already been set.');
            var price = 5;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to set the POTD.");

            room.add(user.name + ' bought the ability to set the POTD!');
            this.sendReply("You have bought the ability to set the POTD of the day.");
            this.sendReply("Use /setpotd [pokémon] to set the Pokémon of the day.");
            user.setpotd = true;
        } else {
            return this.sendReply("That item isn't in the shop.");
        }
        Core.write("money", user.userid, price, '-');
		addLog(user.name + ' bought a ' + target + ' from the shop.');
    },
    
    setpotd: function(target, room, user) {
        if (!user.setpotd) return this.sendReply("You need to buy the ability to set the Pokemon of the Day!");
        if (user.alreadysetpotd) return this.sendReply("You've already set the POTD!");

        Config.potd = target;
        Simulator.SimulatorProcess.eval('Config.potd = \'' + toId(target) + '\'');
        if (!target) return this.sendRepply("You need to choose a Pokémon to set as the POTD.");
        if (Rooms.lobby) Rooms.lobby.addRaw('<div class="broadcast-blue"><b>The Pokémon of the Day is now ' + target + '!</b><br />This Pokemon will be guaranteed to show up in random battles.</div>');
        this.logModCommand('The Pokemon of the Day was changed to ' + target + ' by ' + user.name + '.');
        user.setpotd = false;
        user.alreadysetpotd = true;
    },
    
    customsymbol: 'cs',
    cs: function(target, room, user) {
        if (user.hassymbol && !this.can('hotpatch')) return this.sendReply("You've already added a symbol to your name!");
        if (!user.needssymbol && !this.can('hotpatch')) return this.sendReply('You need to buy a custom symbol from the shop first!');
        target = target.trim();
        if (!target) return this.sendReply('You need to specify a symbol!');
        if (target.length > 1) return this.sendReply('The symbol can only be one character long.');
        var notallowed = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '~', '#', '+', '%', '@', '&', '★'];
        for (var i = 0; i < notallowed.length; i++) {
            if (target.indexOf(notallowed[i]) !== -1) return this.sendReply('For reasons, ' + target + ' cannot be used as a custom symbol.');
        }
        user.getIdentity = function (roomid) {
            if (this.locked) {
				return '‽' + this.name;
			}
			if (roomid) {
				var room = Rooms.rooms[roomid];
				if (room.isMuted(this)) {
					return '!' + this.name;
				}
				if (room && room.auth) {
					if (room.auth[this.userid]) {
						return room.auth[this.userid] + this.name;
					}
					if (room.isPrivate === true) return ' ' + this.name;
				}
			}
			return target + this.name;
        };
        user.updateIdentity();
        this.sendReply('You have successfuly changed your symbol to ' + target + '!');
        user.hassymbol = true;
        user.needssymbol = false;
    },
	
	resetsymbol: 'removesymbol',
	deletesymbol: 'removesymbol',
	removesymbol: function (target, room, user) {
		if (user.getIdentity()[0] in Config.groups) return this.sendReply('You don\'t have a custom symbol!');
		user.getIdentity = Users.User.prototype.getIdentity;
		user.updateIdentity();
		this.sendReply('Your custom symbol has been removed.');
	},
