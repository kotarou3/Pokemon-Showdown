var commands = exports.commands = {

    admine: function (target, room, user) {
	    if (!this.canBroadcast()) return;
	    this.sendReplyBox("<img src='http://leagueofillusions.weebly.com/uploads/2/7/3/8/27389937/393663066.png?479'; height=300 width=450><br><center><p><font color=red>I was the reason for your lost.</font></p></center>");
	}
};
