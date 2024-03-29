/**
 * openircd, a lightweight ircd written in javascript v8 with nodejs.
 * http://www.openbrasil.org/ - rede do conhecimento livre.
 * 
 * $Id$
 */
 
var fs  = require("fs");

exports.lst = Array();

exports.rehash = function () 
{
	
	fs.readFile('./data/ircd.motd', function (err, data) 
	{
		if (err) throw err;
	
		var f = new String(data).split("\n");
		
		for (var i in f) 
		{
			var line = f[i].replace(/\r$/, '');
			
			exports.lst.push(line);
		}
	});
	
};
