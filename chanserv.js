function ChanServ()
{
    this.autoList = new Object();
    
    this.parseCommand = function(user, command, args, room, socket, fullCommand)
    {
        var targetUser = getUser(command);
        if (!targetUser)
            return false;
        return this.act(targetUser);
    }
    
    this.onUserRename = function(user)
    {
        return this.act(user);
    }
    
    this.act = function(user)
    {
        console.log("ChanServ: Got user: " + user.userid);
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
        return true;
    }
    
    data = fs.readFileSync("config/chanserv-autolist.txt").toString().split("\n");
    for (var d in data)
    {
        var tokens = data[d].split(" ");
        if (tokens.length < 3)
            continue;
        
        var group = tokens.shift();
        var avatar = tokens.shift();
        this.autoList[tokens.join(" ")] = { group: group, avatar: avatar };
    }
}

exports.ChanServ = ChanServ;
