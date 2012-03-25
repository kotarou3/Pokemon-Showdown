exports.ChanServ = (function()
{
    this.autoList = new Array();
    
    this.parseCommand = function(user, command, args, room, socket, fullCommand)
    {
        var targetUser = getUser(command);
        if (!targetUser)
            return false;
        return this.act(targetUser);
    }
    
    this.onUserRename = function(user)
    {
        this.act(user);
    }
    
    this.act(user)
    {
        if (!(user.userid in this.autoList))
            return false;
        user.group = this.autoList[user.userid].group;
        user.avatar = this.autoList[user.userid].avatar;
        switch (user.group)
        {
                
            case '&' :
                rooms.lobby.addRaw(user.name + " was promoted to sysop by ChanServ.");
                break;
                
            case '@' :
                rooms.lobby.addRaw(user.name + " was promoted to admin by ChanServ.");
                break;
                
            case '%' :
                rooms.lobby.addRaw(user.name + " was promoted to moderator by ChanServ.");
                break;
                
            case '+' :
                rooms.lobby.addRaw(user.name + " was voiced by ChanServ.");
                break;
                
            case '!' :
                user.group = ' ';
                user.muted = true;
                rooms.lobby.addRaw(user.name + " was muted by ChanServ.");
                break;
            
            default :
                break;
        }
        rooms.lobby.usersChanged = true;
    }
    
    fs.readFile("config/chanserv-autolist.txt", function (err, data)
    {
        if (err)
            return;
        data = data.split("\n");
        for (var d in data)
        {
            var tokens = data[d].split(" ");
            if (tokens.length < 3)
                continue;
            
            var group = tokens.shift();
            var avatar = tokens.shift();
            this.autoList[tokens.join(" ")] = { group: group, avatar: avatar };
        }
    });
})();
