'use strict';

const clanDataFile = './config/clans.json';
const warLogDataFile = './config/warlog.json';

let fs = require('fs');
let elo = require('elo-rank')();

if (!fs.existsSync(clanDataFile)) {
	fs.writeFileSync(clanDataFile, '{}');
}

if (!fs.existsSync(warLogDataFile)) {
	fs.writeFileSync(warLogDataFile, '{}');
}

let clans = JSON.parse(fs.readFileSync(clanDataFile).toString());
let warLog = JSON.parse(fs.readFileSync(warLogDataFile).toString());
let closedRooms = {};

exports.clans = clans;
exports.warLog = warLog;
exports.closedRooms = closedRooms;

function writeClanData() {
	fs.writeFileSync(clanDataFile, JSON.stringify(clans));
}

function writeWarLogData() {
	fs.writeFileSync(warLogDataFile, JSON.stringify(warLog));
}

function getAvaliableFormats() {
	let formats = {};
	formats[0] = "ou";
	return formats;
}

exports.getWarFormatName = function (format) {
	switch (toId(format)) {
	case 'ou': return 'OU';
	case 'ubers': return 'Ubers';
	case 'uu': return 'UU';
	case 'ru': return 'RU';
	case 'nu': return 'NU';
	case 'lc': return 'LC';
	case 'vgc2014': return 'VGC 2014';
	case 'smogondoubles': return 'Smogon Doubles';
	case 'gen5ou': return '[Gen 5] OU';
	case 'gen4ou': return '[Gen 4] OU';
	case 'gen3ou': return '[Gen 3] OU';
	case 'gen2ou': return '[Gen 2] OU';
	case 'gen1ou': return '[Gen 1] OU';
	}
	return false;
};

exports.getClans = function () {
	return Object.keys(clans).map(function (c) { return clans[c].name; });
};

exports.resetClansRank = function () {
	for (let i in clans) {
		clans[i].rating = 1000;
	}
	writeClanData();
};

exports.getClansList = function (order) {
	let clanIds = {};
	let returnData = {};
	let clansList = Object.keys(clans).sort().join(",");
	clanIds = clansList.split(',');
	if (toId(order) === 'puntos' || toId(order) === 'rank') {
		let actualRank = -1;
		let actualclanId = false;
		for (let j in clanIds) {
			for (let f in clanIds) {
				if (clans[clanIds[f]].rating > actualRank && !returnData[clanIds[f]]) {
					actualRank = clans[clanIds[f]].rating;
					actualclanId = clanIds[f];
				}
			}
			if (actualclanId) {
				returnData[actualclanId] = 1;
				actualclanId = false;
				actualRank = -1;
			}
		}
		return returnData;
	} else if (toId(order) === 'members' || toId(order) === 'miembros') {
		let actualMembers = -1;
		let actualclanId = false;
		for (let j in clanIds) {
			for (let f in clanIds) {
				if (exports.getMembers(clanIds[f]).length > actualMembers && !returnData[clanIds[f]]) {
					actualMembers = exports.getMembers(clanIds[f]).length;
					actualclanId = clanIds[f];
				}
			}
			if (actualclanId) {
				returnData[actualclanId] = 1;
				actualclanId = false;
				actualMembers = -1;
			}
		}
		return returnData;
	} else {
		for (let g in clanIds) {
			returnData[clanIds[g]] = 1;
		}
		return returnData;
	}
};

exports.getClanName = function (clan) {
	let clanId = toId(clan);
	return clans[clanId] ? clans[clanId].name : "";
};

exports.getRating = function (clan) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;
	let gxeClan;
	if (clans[clanId].wins > 10) {
		gxeClan = clans[clanId].wins * 100 / (clans[clanId].wins + clans[clanId].losses);
	} else {
		gxeClan = 0;
	}
	return {
		wins: clans[clanId].wins,
		losses: clans[clanId].losses,
		draws: clans[clanId].draws,
		rating: clans[clanId].rating,
		gxe: gxeClan,
		gxeint: Math.floor(gxeClan),
		ratingName: exports.ratingToName(clans[clanId].rating),
	};
};

exports.getProfile = function (clan) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;
	let gxeClan;
	if (clans[clanId].wins > 10) {
		gxeClan = clans[clanId].wins * 100 / (clans[clanId].wins + clans[clanId].losses);
	} else {
		gxeClan = 0;
	}
	return {
		wins: clans[clanId].wins,
		losses: clans[clanId].losses,
		draws: clans[clanId].draws,
		rating: clans[clanId].rating,
		gxe: gxeClan,
		gxeint: Math.floor(gxeClan),
		ratingName: exports.ratingToName(clans[clanId].rating),
		compname: clans[clanId].compname,
		logo: clans[clanId].logo,
		lema: clans[clanId].lema,
		sala: clans[clanId].sala,
		medals: clans[clanId].medals,
	};
};

exports.getElementalData = function (clan) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;
	let gxeClan;
	if (clans[clanId].wins > 10) {
		gxeClan = clans[clanId].wins * 100 / (clans[clanId].wins + clans[clanId].losses);
	} else {
		gxeClan = 0;
	}
	return {
		wins: clans[clanId].wins,
		losses: clans[clanId].losses,
		draws: clans[clanId].draws,
		rating: clans[clanId].rating,
		gxe: gxeClan,
		gxeint: Math.floor(gxeClan),
		compname: clans[clanId].compname,
		ratingName: exports.ratingToName(clans[clanId].rating),
		sala: clans[clanId].sala,
	};
};

exports.ratingToName = function (rating) {
	if (rating > 1500) {
		return "Gold";
	} else if (rating > 1200) {
		return "Silver";
	} else {
		return "Bronze";
	}
};

exports.createClan = function (name) {
	let id = toId(name);
	if (clans[id]) return false;

	clans[id] = {
		name: name,
		members: {},
		wins: 0,
		losses: 0,
		draws: 0,
		rating: 1000,
		//otros datos de clanes
		compname: name,
		leaders: {},
		oficials: {},
		invitations: {},
		logo: "",
		lema: "Lema del clan",
		sala: "none",
		medals: {},
	};
	writeClanData();

	return true;
};

exports.deleteClan = function (name) {
	let id = toId(name);
	if (!clans[id]) return false;

	delete clans[id];
	if (warLog[id]) delete warLog[id];
	writeClanData();

	return true;
};

exports.getMembers = function (clan) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;

	return Object.keys(clans[clanId].members);
};

exports.getInvitations = function (clan) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;

	return Object.keys(clans[clanId].invitations);
};

//colors
function hsl2rgb(h, s, l) {
	let m1, m2, hue;
	let r, g, b;
	s /= 100;
	l /= 100;
	if (s === 0) {
		r = g = b = (l * 255);
	} else {
		if (l <= 0.5) {
			m2 = l * (s + 1);
		} else {
			m2 = l + s - l * s;
		}
		m1 = l * 2 - m2;
		hue = h / 360;
		r = HueToRgb(m1, m2, hue + 1 / 3);
		g = HueToRgb(m1, m2, hue);
		b = HueToRgb(m1, m2, hue - 1 / 3);
	}
	return {r: r, g: g, b: b};
}

function HueToRgb(m1, m2, hue) {
	let v;
	if (hue < 0) {
		hue += 1;
	} else if (hue > 1) {
		hue -= 1;
	}

	if (6 * hue < 1) {
		v = m1 + (m2 - m1) * hue * 6;
	} else if (2 * hue < 1) {
		v = m2;
	} else if (3 * hue < 2) {
		v = m1 + (m2 - m1) * (2 / 3 - hue) * 6;
	} else {
		v = m1;
	}

	return 255 * v;
}

function componentToHex(c) {
	let hex = c.toString(16);
	return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

exports.MD5 = f => require('crypto').createHash('md5').update(f).digest('hex');

function hashColor(name) {
	let hash;
	hash = exports.MD5(name);
	let H = parseInt(hash.substr(4, 4), 16) % 360;
	let S = parseInt(hash.substr(0, 4), 16) % 50 + 50;
	let L = parseInt(hash.substr(8, 4), 16) % 20 + 25;
	let rgb = hsl2rgb(H, S, L);
	return rgbToHex(Math.floor(rgb.r), Math.floor(rgb.g), Math.floor(rgb.b));
}
//end colors
exports.getUserDiv = function (user) {
	let userId = toId(user);
	let userk = Users.getExact(userId);
	if (!userk) {
		return '<font color="' + hashColor(userId) + '"><strong>' + userId + '</strong></font>';
	} else {
		return '<font color="' + hashColor(userId) + '"><strong>' + userk.name + '</strong></font>';
	}
};

exports.getAuthMembers = function (clan, authLevel) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;
	let returnMembers = {};
	let returnCode = "";
	let totalMembers = 0;
	let auxlet = 0;
	for (let c in clans[clanId].members) {
		if (exports.authMember(clanId, c) === authLevel || authLevel === "all") {
			returnMembers[c] = 1;
			totalMembers += 1;
		}
	}
	for (let m in returnMembers) {
		auxlet += 1;
		returnCode += exports.getUserDiv(m);
		if (auxlet < totalMembers) {
			returnCode += ", ";
		}
	}
	return returnCode;
};

exports.authMember = function (clan, member) {
	let clanId = toId(clan);
	if (!clans[clanId]) return 0;
	let userid = toId(member);
	if (clans[clanId].leaders[userid]) return 3;
	if (clans[clanId].oficials[userid] && clans[clanId].oficials[userid] === 2) return 2;
	if (clans[clanId].oficials[userid]) return 1;
	return 0;
};

exports.getOficials = function (clan) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;

	return Object.keys(clans[clanId].oficials);
};

exports.getLeaders = function (clan) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;

	return Object.keys(clans[clanId].leaders);
};

exports.findClanFromMember = function (user) {
	let userId = toId(user);
	for (let c in clans) {
		if (clans[c].members[userId]) {
			return clans[c].name;
		}
	}
	return false;
};

exports.findClanFromRoom = function (room) {
	let roomId = toId(room);
	for (let c in clans) {
		if (toId(clans[c].sala) === roomId) {
			return clans[c].name;
		}
	}
	return false;
};

exports.setRanking = function (clan, dato) {
	dato = parseInt(dato);
	let clanId = toId(clan);
	if (!clans[clanId]) return false;
	if (dato > 0) {
		clans[clanId].rating = dato;
	} else {
		clans[clanId].rating = 0;
	}
	writeClanData();
	return true;
};

exports.setGxe = function (clan, wx, lx, tx) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;
	if (wx > 0) {
		clans[clanId].wins = parseInt(wx);
	} else {
		clans[clanId].wins = 0;
	}
	if (lx > 0) {
		clans[clanId].losses = parseInt(lx);
	} else {
		clans[clanId].losses = 0;
	}
	if (tx > 0) {
		clans[clanId].draws = parseInt(tx);
	} else {
		clans[clanId].draws = 0;
	}
	writeClanData();
	return true;
};

exports.setCompname = function (clan, clanTitle) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;
	if (clanTitle.length > 80) return false;
	clans[clanId].compname = clanTitle;
	writeClanData();
	return true;
};

exports.setLema = function (clan, text) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;
	if (text.length > 80) return false;
	clans[clanId].lema = text;
	writeClanData();
	return true;
};

exports.setLogo = function (clan, text) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;
	if (text.length > 200) return false;
	clans[clanId].logo = text;
	writeClanData();
	return true;
};

exports.setSala = function (clan, text) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;
	if (text.length > 80) return false;
	clans[clanId].sala = text;
	writeClanData();
	return true;
};

exports.clearInvitations = function (clan) {
	let clanId = toId(clan);
	if (!clans[clanId]) return false;
	clans[clanId].invitations = {};
	writeClanData();
	return true;
};

exports.addMedal = function (clan, medalName, medalImage, desc) {
	let clanId = toId(clan);
	let medalId = toId(medalName);
	if (medalName.length > 80) return false;
	if (desc.length > 80) return false;
	if (!clans[clanId]) return false;
	if (!clans[clanId].medals[medalId]) {
		clans[clanId].medals[medalId] = {
			name: medalName,
			logo: medalImage,
			desc: desc,
		};
	} else {
		return false;
	}
	writeClanData();

	return true;
};

exports.deleteMedal = function (clan, medalName) {
	let clanId = toId(clan);
	let medalId = toId(medalName);
	if (!clans[clanId]) return false;
	if (!clans[clanId].medals[medalId]) return false;
	delete clans[clanId].medals[medalId];
	writeClanData();

	return true;
};

exports.addMember = function (clan, user) {
	let clanId = toId(clan);
	let userId = toId(user);
	if (!clans[clanId] || exports.findClanFromMember(user)) return false;

	clans[clanId].members[userId] = 1;
	writeClanData();

	return true;
};

exports.addLeader = function (user) {
	let userId = toId(user);
	let clanUser = exports.findClanFromMember(user);
	if (!clanUser) return false;
	let clanId = toId(clanUser);
	if (clans[clanId].leaders[userId]) return false;
	if (clans[clanId].oficials[userId]) {
		delete clans[clanId].oficials[userId];
	}
	clans[clanId].leaders[userId] = 1;
	writeClanData();

	return true;
};

exports.deleteLeader = function (user) {
	let userId = toId(user);
	let clanUser = exports.findClanFromMember(user);
	if (!clanUser) return false;
	let clanId = toId(clanUser);
	if (!clans[clanId].leaders[userId]) return false;
	delete clans[clanId].leaders[userId];
	writeClanData();

	return true;
};

exports.addOficial = function (user) {
	let userId = toId(user);
	let clanUser = exports.findClanFromMember(user);
	if (!clanUser) return false;
	let clanId = toId(clanUser);
	if (clans[clanId].oficials[userId]) return false;
	if (clans[clanId].leaders[userId]) {
		delete clans[clanId].leaders[userId];
	}
	clans[clanId].oficials[userId] = 1;
	writeClanData();

	return true;
};

exports.addSubLeader = function (user) {
	let userId = toId(user);
	let clanUser = exports.findClanFromMember(user);
	if (!clanUser) return false;
	let clanId = toId(clanUser);
	if (clans[clanId].oficials[userId] && clans[clanId].oficials[userId] === 2) return false;
	if (clans[clanId].leaders[userId]) {
		delete clans[clanId].leaders[userId];
	}
	clans[clanId].oficials[userId] = 2;
	writeClanData();

	return true;
};

exports.deleteOficial = function (user) {
	let userId = toId(user);
	let clanUser = exports.findClanFromMember(user);
	if (!clanUser) return false;
	let clanId = toId(clanUser);
	if (!clans[clanId].oficials[userId]) return false;
	delete clans[clanId].oficials[userId];
	writeClanData();

	return true;
};

exports.addInvite = function (clan, user) {
	let clanId = toId(clan);
	let userId = toId(user);
	if (!clans[clanId] || exports.findClanFromMember(user)) return false;
	if (clans[clanId].invitations[userId]) return false;

	clans[clanId].invitations[userId] = 1;
	writeClanData();

	return true;
};

exports.aceptInvite = function (clan, user) {
	let clanId = toId(clan);
	let userId = toId(user);
	if (!clans[clanId] || exports.findClanFromMember(user)) return false;
	if (!clans[clanId].invitations[userId]) return false;
	clans[clanId].members[userId] = 1;
	delete clans[clanId].invitations[userId];
	writeClanData();

	return true;
};

exports.removeMember = function (clan, user) {
	let clanId = toId(clan);
	let userId = toId(user);
	if (!clans[clanId] || !clans[clanId].members[userId]) return false;
	if (clans[clanId].oficials[userId]) {
		delete clans[clanId].oficials[userId];
	}
	if (clans[clanId].leaders[userId]) {
		delete clans[clanId].leaders[userId];
	}
	delete clans[clanId].members[userId];
	writeClanData();

	return true;
};
//warsystem

exports.getWarLogTable = function (clan) {
	let exportsTable = '<table border="1" cellspacing="0" cellpadding="3" target="_blank"><tbody><tr target="_blank"><th target="_blank">Fecha</th><th target="_blank">Tier</th><th target="_blank">Rival</th><th target="_blank">Tipo</th><th target="_blank">Resultado</th><th target="_blank">Matchups</th><th target="_blank">Puntos</th><th target="_blank">Rondas</th></tr>';
	let warLogId = toId(clan);
	if (!warLog[warLogId]) return '<b>A&uacute;n no se ha registrado ninguna War.</b>';
	let nWars = warLog[warLogId].nWarsRegistered;
	let resultName = '';
	let styleName = '';
	for (let t = 0; t < nWars; ++t) {
		exportsTable += '<tr>';
		resultName = '<font color="green">Victoria</font>';
		if (warLog[warLogId].warData[nWars - t - 1].scoreB > warLog[warLogId].warData[nWars - t - 1].scoreA) resultName = '<font color="red">Derrota</font>';
		if (warLog[warLogId].warData[nWars - t - 1].scoreB === warLog[warLogId].warData[nWars - t - 1].scoreA) resultName = '<font color="orange">Empate</font>';
		styleName = toId(warLog[warLogId].warData[nWars - t - 1].warStyle);
		if (styleName === "standard") styleName = "Standard";
		if (styleName === "total") styleName = "Total";
		if (styleName === "lineups") styleName = "Cl&aacute;sica";
		exportsTable += '<td align="center">' + warLog[warLogId].warData[nWars - t - 1].dateWar + '</td><td align="center">' +
		exports.getWarFormatName(warLog[warLogId].warData[nWars - t - 1].warFormat) + '</td><td align="center">' +
		exports.getClanName(warLog[warLogId].warData[nWars - t - 1].against) + '</td><td align="center">' + styleName + '</td>' +
		'<td align="center">' + resultName + '</td><td align="center">' + warLog[warLogId].warData[nWars - t - 1].scoreA + ' - ' +
		warLog[warLogId].warData[nWars - t - 1].scoreB + '</td><td align="center">' + warLog[warLogId].warData[nWars - t - 1].addPoints +
		'</td><td align="center">Ronda ' + warLog[warLogId].warData[nWars - t - 1].warRound + '</td>';

		exportsTable += '</tr>';
	}
	exportsTable += '</tbody></table>';
	return exportsTable;
};

exports.logWarData = function (clanA, clanB, scoreA, scoreB, warStyle, warFormat, addPoints, warRound) {
	let warId = toId(clanA);
	let f = new Date();
	let dateWar = f.getDate() + '-' + f.getMonth() + ' ' + f.getHours() + 'h';
	if (!warLog[warId]) {
		warLog[warId] = {
			nWarsRegistered: 0,
			warData: {},
		};
	}
	if (warLog[warId].nWarsRegistered < 10) {
		warLog[warId].warData[warLog[warId].nWarsRegistered] = {
			dateWar: dateWar,
			against: clanB,
			scoreA: scoreA,
			scoreB: scoreB,
			warStyle: warStyle,
			warFormat: warFormat,
			warRound: warRound,
			addPoints: addPoints,
		};
		++warLog[warId].nWarsRegistered;
	} else {
		let warDataAux = {};
		for (let t = 1; t < 10; ++t) {
			warDataAux[t - 1] = warLog[warId].warData[t];
		}
		warDataAux[9] = {
			dateWar: dateWar,
			against: clanB,
			scoreA: scoreA,
			scoreB: scoreB,
			warStyle: warStyle,
			warFormat: warFormat,
			warRound: warRound,
			addPoints: addPoints,
		};
		warLog[warId].warData = warDataAux;
	}
	writeWarLogData();
	return true;
};

exports.setWarResult = function (clanA, clanB, scoreA, scoreB, warStyle, warSize) {
	let clanAId = toId(clanA);
	let clanBId = toId(clanB);
	let result = 0;
	if (!clans[clanAId] || !clans[clanBId]) return false;
	let multip = 128;
	let addPoints = {};
	if (toId(warStyle) === "total") multip = 256;
	if (toId(warStyle) === "lineups") multip = 180;
	multip = Math.abs(multip * (Math.floor(scoreB - scoreA)));
	let oldScoreA = clans[clanAId].rating;
	let oldScoreB = clans[clanBId].rating;
	clans[clanAId].rating = parseInt(clans[clanAId].rating);
	clans[clanBId].rating = parseInt(clans[clanBId].rating); // no decimal ratings
	let clanAExpectedResult;
	let clanBExpectedResult;
	elo.setKFactor(multip);
	if (scoreA > scoreB) {
		++clans[clanAId].wins;
		++clans[clanBId].losses;
		result = 1;
		clanAExpectedResult = elo.getExpected(clans[clanAId].rating, clans[clanBId].rating);
		clans[clanAId].rating = elo.updateRating(clanAExpectedResult, result, clans[clanAId].rating);
		clanBExpectedResult = elo.getExpected(clans[clanBId].rating, clans[clanAId].rating);
		clans[clanBId].rating = elo.updateRating(clanBExpectedResult, 1 - result, clans[clanBId].rating);
	} else if (scoreB > scoreA) {
		++clans[clanAId].losses;
		++clans[clanBId].wins;
		result = 0;
		clanAExpectedResult = elo.getExpected(clans[clanAId].rating, clans[clanBId].rating);
		clans[clanAId].rating = elo.updateRating(clanAExpectedResult, result, clans[clanAId].rating);
		clanBExpectedResult = elo.getExpected(clans[clanBId].rating, clans[clanAId].rating);
		clans[clanBId].rating = elo.updateRating(clanBExpectedResult, 1 - result, clans[clanBId].rating);
	} else {
		addPoints['A'] = 0;
		addPoints['B'] = 0;
		++clans[clanAId].draws;
		++clans[clanBId].draws;
		multip = 0;
	}
	if (clans[clanAId].rating < 1000) {
		clans[clanAId].rating = 1000;
	}
	if (clans[clanBId].rating < 1000) {
		clans[clanBId].rating = 1000;
	}
	writeClanData();
	addPoints['A'] = clans[clanAId].rating - oldScoreA;
	addPoints['B'] = clans[clanBId].rating - oldScoreB;
	return addPoints;
};

exports.isRoomClosed = function (room, user) {
	let roomId = toId(room);
	if (!closedRooms[roomId]) return false;
	let clan = exports.findClanFromMember(user);
	if (!clan) return true;
	let clanId = toId(clan);
	if (!clans[clanId]) return true;
	if (closedRooms[roomId] === clanId) return false;
	return true;
};

exports.closeRoom = function (room, clan) {
	let clanId = toId(clan);
	let roomId = toId(room);
	if (!clans[clanId]) return false;
	if (toId(clans[clanId].sala) !== roomId) return false;
	if (closedRooms[roomId]) return false;
	closedRooms[roomId] = clanId;
	return true;
};

exports.openRoom = function (room, clan) {
	let clanId = toId(clan);
	let roomId = toId(room);
	if (!clans[clanId]) return false;
	if (toId(clans[clanId].sala) !== roomId) return false;
	if (!closedRooms[roomId]) return false;
	delete closedRooms[roomId];
	return true;
};

exports.resetWarLog = function () {
	warLog = {};
	exports.warLog = warLog;
	writeWarLogData();
};
