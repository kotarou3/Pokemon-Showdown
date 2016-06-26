'use strict';

// The bind address and port - the address and port the server listens under
//   for incoming connections
exports.bindaddress = '0.0.0.0';
exports.port = 8000;

// The server id - the id specified in the server registration.
//   This should be set properly especially when there are more than one
//   pokemon showdown server running from the same IP
exports.serverid = '';

// The server token - a token used for ladder requests to identify the server.
//   Usually this isn't needed since the server id is usually enough, but can
//   be used when the servers incoming IP doesn't match its outgoing
exports.servertoken = '';

// proxyip - proxy IPs with trusted X-Forwarded-For headers
//   This can be either false (meaning not to trust any proxies) or an array
//   of strings. Each string should be either an IP address or a subnet given
//   in CIDR notation. You should usually leave this as `false` unless you
//   know what you are doing.
exports.proxyip = false;

// Pokemon of the Day - put a pokemon's name here to make it Pokemon of the Day
//   The PotD will always be in the #2 slot (not #1 so it won't be a lead)
//   in every Random Battle team.
exports.potd = '';

// crash guard - write errors to log file instead of crashing
//   This is normally not recommended - if Node wants to crash, the
//   server needs to be restarted
//   However, most people want the server to stay online even if there is a
//   crash, so this option is provided
exports.crashguard = true;

// login server data - don't forget the http:// and the trailing slash
//   This is the URL of the user database and ladder.
//   Don't change this setting - there aren't any other login servers right now
exports.loginserver = {
	uri: 'http://play.pokemonshowdown.com/',
	keyAlgorithm: 'RSA-SHA1',
	publicKeyId: 2,
	publicKey: '-----BEGIN RSA PUBLIC KEY-----\n' +
		'MIICCgKCAgEAtFldA2rTCsPgqsp1odoH9vwhf5+QGIlOJO7STyY73W2+io33cV7t\n' +
		'ReNuzs75YBkZ3pWoDn2be0eb2UqO8dM3xN419FdHNORQ897K9ogoeSbLNQwyA7XB\n' +
		'N/wpAg9NpNu00wce2zi3/+4M/2H+9vlv2/POOj1epi6cD5hjVnAuKsuoGaDcByg2\n' +
		'EOullPh/00TkEkcyYtaBknZpED0lt/4ekw16mjHKcbo9uFiw+tu5vv7DXOkfciW+\n' +
		'9ApyYbNksC/TbDIvJ2RjzR9G33CPE+8J+XbS7U1jPvdFragCenz+B3AiGcPZwT66\n' +
		'dvHAOYRus/w5ELswOVX/HvHUb/GRrh4blXWUDn4KpjqtlwqY4H2oa+h9tEENCk8T\n' +
		'BWmv3gzGBM5QcehNsyEi9+1RUAmknqJW0QOC+kifbjbo/qtlzzlSvtbr4MwghCFe\n' +
		'1EfezeNAtqwvICznq8ebsGETyPSqI7fSbpmVULkKbebSDw6kqDnQso3iLjSX9K9C\n' +
		'0rwxwalCs/YzgX9Eq4jdx6yAHd7FNGEx4iu8qM78c7GKCisygZxF8kd0B7V7a5UO\n' +
		'wdlWIlTxJ2dfCnnJBFEt/wDsL54q8KmGbzOTvRq5uz/tMvs6ycgLVgA9r1xmVU+1\n' +
		'6lMr2wdSzyG7l3X3q1XyQ/CT5IP4unFs5HKpG31skxlfXv5a7KW5AfsCAwEAAQ==\n' +
		'-----END RSA PUBLIC KEY-----\n',
};

// tokenexpiry - how long the server will deem a user login token from the login
//   server to be valid for.
//   Defaults to 25 hours to account for servers with inaccurate time.
exports.tokenexpiry = 25 * 60 * 60;

// crashguardemail - if the server has been running for more than an hour
//   and crashes, send an email using these settings, rather than locking down
//   the server. Uncomment this definition if you want to use this feature;
//   otherwise, all crashes will lock down the server.
/**exports.crashguardemail = {
	options: {
		host: 'mail.example.com',
		port: 465,
		secure: true,
		auth: {
			user: 'example@domain.com',
			pass: 'password'
		}
	},
	from: 'crashlogger@example.com',
	to: 'admin@example.com',
	subject: "Pokemon Showdown has crashed!"
};**/

// basic name filter - removes characters used for impersonation
//   The basic name filter removes Unicode characters that can be used for impersonation,
//   like the upside-down exclamation mark (looks like an i), the Greek omicron (looks
//   like an o), etc. Disable only if you need one of the alphabets it disables, such as
//   Greek or Cyrillic.
exports.disablebasicnamefilter = false;

// report joins and leaves - shows messages like "<USERNAME> joined"
//   Join and leave messages are small and consolidated, so there will never
//   be more than one line of messages.
//   If this setting is set to `true`, it will override the client-side
//   /hidejoins configuration for users.
//   This feature can lag larger servers - turn this off if your server is
//   getting more than 80 or so users.
exports.reportjoins = true;

// report joins and leaves periodically - sends silent join and leave messages in batches
//   This setting will only be effective if `reportjoins` is set to false, and users will
//   only be able to see the messages if they have the /showjoins client-side setting enabled.
//   Set this to a positive amount of milliseconds if you want to enable this feature.
exports.reportjoinsperiod = 0;

// report battles - shows messages like "OU battle started" in the lobby
//   This feature can lag larger servers - turn this off if your server is
//   getting more than 160 or so users.
exports.reportbattles = true;

// report joins and leaves in battle - shows messages like "<USERNAME> joined" in battle
//   Set this to false on large tournament servers where battles get a lot of joins and leaves.
//   Note that the feature of turning this off is deprecated.
exports.reportbattlejoins = true;

// whitelist - prevent users below a certain group from doing things
//   For the modchat settings, false will allow any user to participate, while a string
//   with a group symbol will restrict it to that group and above. The string
//   'autoconfirmed' is also supported for modchat.chat and modchat.battle, to restrict
//   chat to autoconfirmed users.
//   This is usually intended to be used as a whitelist feature - set these to '+' and
//   voice every user you want whitelisted on the server.
exports.modchat = {
	// chat modchat - default minimum group for speaking in chatrooms; changeable with /modchat
	chat: false,
	// battle modchat - default minimum group for speaking in battles; changeable with /modchat
	battle: false,
	// pm modchat - minimum group for PMing other users, challenging other users, and laddering
	pm: false,
};

// forced timer - force the timer on for all battles
//   Players will be unable to turn it off.
//   This setting can also be turned on with the command /forcetimer.
exports.forcetimer = false;

// automatically save a replay when battles end
exports.autosavereplays = false;

// backdoor - allows Pokemon Showdown system operators to provide technical
//            support for your server
//   This backdoor gives system operators (such as Zarel) console admin
//   access to your server, which allow them to provide tech support. This
//   can be useful in a variety of situations: if an attacker attacks your
//   server and you are not online, if you need help setting up your server,
//   etc. If you do not trust Pokemon Showdown with admin access, you should
//   disable this feature.
exports.backdoor = true;

// quietconsole - reduces some console spew like room creation and banned users
//   trying to connect
exports.quietconsole = false;

// List of IPs and user IDs with dev console (>> and >>>) access.
// The console is incredibly powerful because it allows the execution of
// arbitrary commands on the local computer (as the user running the
// server). If an account with the console permission were compromised,
// it could possibly be used to take over the server computer. As such,
// you should only specify a small range of trusted IPs and users here,
// or none at all. By default, only localhost can use the dev console.
// In addition to connecting from a valid IP, a user must *also* have
// the `console` permission in order to use the dev console.
// Setting this to an empty array ([]) will disable the dev console.
exports.consoleips = ['127.0.0.1'];

// Whether to watch the config file for changes. If this is enabled,
// then the config.js file will be reloaded when it is changed.
// This can be used to change some settings using a text editor on
// the server.
exports.watchconfig = true;

// logchat - whether to log chat rooms.
exports.logchat = false;

// logchallenges - whether to log challenge battles. Useful for tournament servers.
exports.logchallenges = false;

// loguserstats - how often (in milliseconds) to write user stats to the
// lobby log. This has no effect if `logchat` is disabled.
exports.loguserstats = 1000 * 60 * 10; // 10 minutes

// logladderip - whether to log rated battle's player's IPs
exports.logladderip = false;

// workers - the number of processes to use for receiving connections
// validatorprocesses - the number of processes to use for validating teams
// simulatorprocesses - the number of processes to use for handling battles
// You should leave all of these at 1 unless your server has a very large
// amount of traffic (i.e. hundreds of concurrent battles).
exports.workers = 1;
exports.validatorprocesses = 1;
exports.simulatorprocesses = 1;

// inactiveuserthreshold - how long a user must be inactive before being pruned
// from the `users` array. The default is 1 hour.
exports.inactiveuserthreshold = 1000 * 60 * 60;

// Custom avatars.
// This allows you to specify custom avatar images for users on your server.
// Place custom avatar files under the /config/avatars/ directory.
// Users must be specified as userids -- that is, you must make the name all
// lowercase and remove non-alphanumeric characters.
//
// Your server *must* be registered in order for your custom avatars to be
// displayed in the client.
exports.customavatars = {
	//'userid': 'customavatar.png'
};

exports.tournaments = {
	// whether tournament battles are rated by default
	defaultRated: false,
	// default player cap. 0 to disable
	defaultPlayerCap: 0,
	// a room to receive tournament announcements
	room: 'tournaments',
	// tournament announcements are only allowed from these rooms
	announcements: [/* roomids */],
};

// appealurl - specify a URL containing information on how users can appeal
// disciplinary actions on your section. You can also leave this blank, in
// which case users won't be given any information on how to appeal.
exports.appealurl = '';

// replsocketprefix - the prefix for the repl sockets to be listening on
// replsocketmode - the file mode bits to use for the repl sockets
exports.replsocketprefix = './logs/repl/';
exports.replsocketmode = 0o600;

// permissions and groups:
//   Each entry in `grouplist' is a seperate group. Some of the members are "special"
//     while the rest is just a normal permission.
//   The order of the groups determines their ranking.
//   The special members are as follows:
//     - symbol: Specifies the symbol of the group (as shown in front of the username)
//     - id: Specifies an id for the group.
//     - name: Specifies the human-readable name for the group.
//     - description: Specifies the description for the group.
//     - root: If this is true, the group can do anything.
//     - inherit: The group uses the group specified's permissions if it cannot
//                  find the permission in the current group. Never make the graph
//                  produced using this member have any cycles, or the server won't run.
//     - jurisdiction: The default jurisdiction for targeted permissions where one isn't
//                       explictly specified. "Targeted permissions" are permissions
//                       that might affect another user, such as `ban' or `promote'.
//                       's' is a special group where it means the user itself only
//                       and 'u' is another special group where it means all groups
//                       lower in rank than the current group.
//     - roomonly: forces the group to be a per-room moderation rank only.
//     - globalonly: forces the group to be a global rank only.
//   All the possible permissions are as follows:
//     - alts: Ability to check alts.
//     - announce: /announce command.
//     - ban: Banning and unbanning.
//     - broadcast: Broadcast informational commands.
//     - bypassall: Bypass all limitations.
//     - bypassblocks: Bypass blocks such as your challenge being blocked.
//     - console: Developer console (also requires IP or userid in the `consoleIps` array).
//     - declare: /declare command and the ability to change room descriptions and intros.
//     - disableladder: /disableladder and /enable ladder commands.
//     - editroom: Set modjoin/privacy only for battles/groupchats
//     - forcepromote: Ability to promote a user even if they're offline and unauthed.
//     - forcerename: /forcerename command.
//     - forcewin: /forcewin and /forcetie command.
//     - game: Make games.
//     - gamemanagement: Enable/disable games and minigames.
//     - gdeclare: /gdeclare and /cdeclare commands.
//     - hotpatch: /hotpatch, /updateserver, /crashfixed and /refreshpage commands.
//     - ignorelimits: Ignore limits such as chat message length.
//     - ip: Ability to check IPs.
//     - joinbattle: Ability to join an existing battle as a player.
//     - kick: /kickbattle command.
//     - lock: Locking (ipmute) and unlocking.
//     - lockdown: /lockdown, /endlockdown and /kill commands.
//     - makeroom: Create/delete chatrooms, and set modjoin/roomdesc/privacy
//     - minigame: make minigames (hangman, polls, etc.).
//     - modchat: Set modchat to the second lowest ranked group.
//     - modchatall: Set modchat to all available groups.
//     - modlog: View the moderator logs.
//     - mute: Muting and unmuting.
//     - potd: Set the Pokemon of the Day.
//     - privateroom: /privateroom and /modjoin commands.
//     - promote: Global promoting and demoting. Will only work if both to and from groups are in jurisdiction.
//     - rangeban: /ipban command.
//     - rawpacket: Ability to add a raw packet into the room's packet log (/a).
//     - redirect: /redir command.
//     - roompromote: Room counterpart to the global `promote` permission.
//     - timer: Ability to forcibly start and stop the inactive timer in battle rooms with the /timer command.
//     - tournaments: Creating tournaments (/tour new, settype etc.)
//     - tournamentsmanagement: Enable/disable tournaments.
//     - tournamentsmoderation: /tour dq, autodq, end etc.
//     - warn: /warn command.
exports.grouplist = [
	{
		symbol: '~',
		id: 'admin',
		name: "Administrator",
		description: "They can do anything, like change what this message says",
		globalonly: true,
		root: true,
	},
	{
		symbol: '&',
		id: 'leader',
		name: "Leader",
		description: "The above, and they can promote to moderator and force ties",
		globalonly: true,
		inherit: '@',
		jurisdiction: '@u',
		declare: true,
		disableladder: true,
		editroom: true,
		forcewin: true,
		gamemanagement: true,
		makeroom: true,
		modchatall: true,
		potd: true,
		promote: 'u',
		rangeban: true,
		tournamentsmanagement: true,
	},
	{
		symbol: '#',
		id: 'owner',
		name: "Room Owner",
		description: "They are leaders of the room and can almost totally control it",
		roomonly: true,
		inherit: '@',
		jurisdiction: 'u',
		declare: true,
		editroom: true,
		gamemanagement: true,
		modchatall: true,
		roompromote: 'u',
		tournamentsmanagement: true,
	},
	{
		symbol: '\u2605',
		id: 'player',
		name: "Player",
		description: "They are the players currently battling, and can promote room voices",
		battleonly: true,
		roomonly: true,
		inherit: '+',
		editroom: true,
		joinbattle: true,
		modchat: true,
		roompromote: '\u2605u',
	},
	{
		symbol: '@',
		id: 'mod',
		name: "Moderator",
		description: "The above, and they can ban users",
		inherit: '%',
		jurisdiction: 'u',
		alts: '@u',
		ban: true,
		forcerename: true,
		game: true,
		ip: true,
		modchat: true,
		roompromote: '+ ',
		tournaments: true,
	},
	{
		symbol: '%',
		id: 'driver',
		name: "Driver",
		description: "The above, and they can mute. Global % can also lock users and check for alts",
		inherit: '+',
		jurisdiction: 'u',
		alts: '%u',
		announce: true,
		bypassblocks: 'u%@&~',
		forcerename: true,
		jeopardy: true,
		joinbattle: true,
		kick: true,
		lock: true,
		minigame: true,
		modlog: true,
		mute: '\u2605u',
		receiveauthmessages: true,
		redirect: '\u2605u',
		timer: true,
		tournamentsmoderation: true,
		warn: '\u2605u',
	},
	{
		symbol: '+',
		id: 'voice',
		name: "Voice",
		description: "They can use ! commands like !groups, and talk during moderated chat",
		inherit: ' ',
		alts: 's',
		broadcast: true,
	},
	{
		symbol: ' ',
		ip: 's',
	},
];
