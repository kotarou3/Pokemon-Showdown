var port = 18000;
// The commit message template. Possible variables are:
//    {repoName}: Name of the repository
//    {repoUrl}: URL for the repository
//    {name}: Name of the person that commited the commit
//    {ref}: The reference for the branch (eg. ref/heads/master)
//    {branch}: The name of the branch
//    {url}: The URL for the commit
//    {revision}: The revision SHA hash
//    {shortRevision}: The first seven characters of {revision}
//    {message}: The entire commit message with spaces replacing newlines
//    {shortMessage}: The first line of the commit message
//    {files}: A comma-delimated list of the files modified. Added files are prefixed with a '+' while deleted files are prefixed with a '-'.
var messageTemplate = '<strong style="color:hsl(165,65%,42%);">Commit:</strong><!-- <a href="{repoUrl}" target="_blank"><strong>{repoName}:</strong></a>--> <span style="color:#008000;">{name}</span> <span style="color:#ff8040;">{branch}</span> <a href="{url}" target="_blank">r<b>{shortRevision}</b></a> / {files} - <em>{message}</em>';

var server = require('http').createServer(function(request) {
	// No response is needed

	// Make sure it's coming from the right place
	if (request.method !== "POST") return;
	switch (request.socket.remoteAddress) {
		case "207.97.227.253" :
		case "50.57.128.197" :
		case "108.171.174.178" :
			break;

		default:
			return;
	}

	// Start receiving the data and parsing it
	request.setEncoding('utf8');
	var data = '';
	request.on('data', function(buffer){data += buffer;});
	request.on('end', function() {
		// Extract the parameters from the data
		var paramsRaw = data.split('&');
		var params = new Object();
		for (var p = 0; p < paramsRaw.length; ++p) {
			var tmp = paramsRaw[p].split('=');
			params[tmp[0]] = decodeURIComponent(tmp[1]).replace(/\+/g, ' ');
		}
		if (!params['payload']) return;
		var payload = JSON.parse(params['payload']);

		// Parse and output the payload
		for (var c = 0; c < payload.commits.length; ++c) {
			var message = messageTemplate
							  .replace(/{repoName}/g, payload.repository.name)
							  .replace(/{repoUrl}/g, payload.repository.url)
							  .replace(/{name}/g, payload.commits[c].author.name)
							  .replace(/{url}/g, payload.commits[c].url)
							  .replace(/{ref}/g, payload.ref)
							  .replace(/{shortRevision}/g, payload.commits[c].id.substr(0, 7))
							  .replace(/{revision}/g, payload.commits[c].id)
							  .replace(/{shortMessage}/g, payload.commits[c].message.split('\n')[0]);

			// Fix up the long description for merges
			var messageLines = payload.commits[c].message.replace(/\n+/g, '\n').split('\n');
			if (messageLines[0].substr(0, 5) === "Merge" && messageLines[1]) {
				messageLines[0] += ":";
			}
			message = message.replace(/{message}/g, messageLines.join(' '));

			// Get the branch
			var refParts = payload.ref.split('/');
			message = message.replace(/{branch}/g, refParts[refParts.length - 1]);

			// Get the modified files
			var modifiedFiles = payload.commits[c].modified.join(", ");;
			var addedFiles = payload.commits[c].added.join(", +");
			var removedFiles = payload.commits[c].removed.join(", -");
			if (addedFiles) addedFiles = "+" + addedFiles;
			if (removedFiles) removedFiles = "-" + removedFiles;

			var files = modifiedFiles;
			if (files && addedFiles) files += ", ";
			files += addedFiles;
			if (files && removedFiles) files += ", ";
			files += removedFiles;
			message = message.replace(/{files}/g, files);

			rooms.lobby.addRaw(message);
		}
	});
});

exports.start = function() { server.listen(port); }
exports.stop = function() { server.close(); }
