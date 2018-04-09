const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var request = require('request');
const fs = require("fs");

client.on('ready', () => {
	console.log(`[Start] ${new Date()}`); //Hora a la que se inicio el server
	config.status = "off";
	fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
	client.user.setActivity('Fortnite ESP')
	console.log("Bot iniciado correctamente!");
});

client.on("guildMemberAdd", member => {
	member.send("Bienvenidos al servidor de Fortnite ESP!\n Para poder acceder a los canales de texto y de voz, es necesario que tengas en el Discord el mismo nombre que en Fortnite, para ello utiliza *!name nombre de fortnite tiene que ser exactamente tú nombre de Fortnite. Una vez hayas puesto de apodo tu nombre de Fortnite, escribe en el chat de texto el siguiente comando * !rankme * y ya podrás entrar al Discord");

});


client.on("message", (message) => {
	process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
	if (!message.content.startsWith(config.prefix) || message.author.bot) return; //Comprueba que el autor no es el bot	
		if(config.status == "off"){
		if (message.content.startsWith(config.prefix + "rankme")) { //ROLE
			console.log("Rankme");
			let nombre = message.member.displayName;
			let atributes = message.content.split(config.prefix + "rankme ")[1];
			var playerName = atributes;
			if (message.member.displayName == null || undefined){
				let nombre = message.member.nickname;
			}
			if (atributes == nombre) {
				console.log("ART MAS NOMRE");
				process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
				var options = {
					method: "GET",
					url: `https://fortnite.y3n.co/v2/player/${playerName}`,
					strictSSL: false,
					headers: {
						'User-Agent': 'nodejs request',
						'X-Key': "I0hTZZRfChQTGZwlSmlM"
					}

				}
                                process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
				request(options, (error, response, body) => {
					console.log(response.statusCode);
					if (!error && response.statusCode == 200) {
						var stats = JSON.parse(body);
						console.log(`robi62 k/d: ${stats.br.stats.pc.all.kpd}`);
						console.log(stats);

						if (stats.br.stats.pc.all.kpd >= 0.0) {
							objetivo = "1"
						}
						if (stats.br.stats.pc.all.kpd >= 0.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 0.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 0.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 0.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 0.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 0.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 0.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.pc.all.kpd >= 0.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.kpd >= 0.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.kpd >= 0.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.kpd >= 1.0) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						if (stats.br.stats.pc.all.kpd >= 1.0) {
							objetivo = "2"
						}
						if (stats.br.stats.pc.all.kpd >= 1.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 1.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 1.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 1.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 1.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 1.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 1.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.pc.all.kpd >= 1.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.kpd >= 1.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.kpd >= 1.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.kpd >= 2.0) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						if (stats.br.stats.pc.all.kpd >= 2.0) {
							objetivo = "3"
						}
						if (stats.br.stats.pc.all.kpd >= 2.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 2.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 2.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 2.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 2.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 2.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 2.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.pc.all.kpd >= 2.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.kpd >= 2.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.kpd >= 2.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.kpd >= 3.0) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						if (stats.br.stats.pc.all.kpd >= 3.0) {objetivo = "4"}
						if (stats.br.stats.pc.all.kpd >= 3.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 3.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 3.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 3.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 3.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 3.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 3.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■-----------]"
						}
						if (stats.br.stats.pc.all.kpd >= 3.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.kpd >= 3.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.kpd >= 3.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.kpd >= 4.0) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}


						if (stats.br.stats.pc.all.kpd >= 4.0) {
							objetivo = "5"
						}
						if (stats.br.stats.pc.all.kpd >= 4.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 4.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 4.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 4.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 4.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 4.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 4.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.pc.all.kpd >= 4.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.kpd >= 4.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.kpd >= 4.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.kpd >= 5.0) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}
						
						
						if (stats.br.stats.pc.all.kpd >= 5.0) {
							objetivo = "6"
						}
						if (stats.br.stats.pc.all.kpd >= 5.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 5.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 5.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 5.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 5.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 5.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.kpd >= 5.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.pc.all.kpd >= 5.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.kpd >= 5.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.kpd >= 5.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.kpd >= 6.0) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}




						if (stats.br.stats.pc.matchesPlayed >= 0) {
							objetivoP = "50"
						}
						if (stats.br.stats.pc.matchesPlayed >= 0) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 5) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 10) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 15) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 20) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 25) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 30) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 35) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 40) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 45) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 50) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						if (stats.br.stats.pc.all.matchesPlayed >= 50) {
							objetivoP = "250"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 50) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 70) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 90) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 110) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 130) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 150) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 170) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 190) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 210) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 230) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 250) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						if (stats.br.stats.pc.all.matchesPlayed >= 250) {
							objetivoP = "500"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 250) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 275) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 300) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 325) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 350) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 375) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 400) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 425) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 450) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 475) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 500) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						if (stats.br.stats.pc.all.matchesPlayed >= 500) {
							objetivoP = "750"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 500) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 525) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 550) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 575) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 600) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 625) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 650) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 675) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 700) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 725) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 750) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}


						if (stats.br.stats.pc.all.matchesPlayed >= 750) {
							objetivoP = "1000"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 750) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 775) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 800) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 825) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 850) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 875) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 900) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 925) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 950) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 975) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1000) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						
						
						
						
						if (stats.br.stats.pc.all.matchesPlayed >= 1000) {
							objetivoP = "1500"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1000) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1050) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1100) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1150) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1200) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1250) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1300) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1350) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1400) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1450) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.pc.all.matchesPlayed >= 1500) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}




						KD = Math.round(stats.br.stats.pc.all.kpd * 100) / 100;

						if (KD > 0 && stats.br.stats.pc.all.matchesPlayed > 50) {
							let role = message.guild.roles.find("name", "Novato");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}
						if (KD > 1 && stats.br.stats.pc.all.matchesPlayed > 250) {
							let role = message.guild.roles.find("name", "Experimentado");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}
						else{
							let role = message.guild.roles.find("name", "Experimentado");
							let member = message.member;
							member.removeRole(role).catch(console.error);
						}
						if (KD > 2 && stats.br.stats.pc.all.matchesPlayed > 500) {
							let role = message.guild.roles.find("name", "Semi-profesional");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}
						else{
							let role = message.guild.roles.find("name", "Semi-profesional");
							let member = message.member;
							member.removeRole(role).catch(console.error);
						}
						if (KD > 3 && stats.br.stats.pc.all.matchesPlayed > 750) {
							let role = message.guild.roles.find("name", "Profesional");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}
						else{
							let role = message.guild.roles.find("name", "Profesional");
							let member = message.member;
							member.removeRole(role).catch(console.error);
						}
						if (KD > 4 && stats.br.stats.pc.all.matchesPlayed > 1000) {
							let role = message.guild.roles.find("name", "Experto");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}else{
							let role = message.guild.roles.find("name", "Experto");
							let member = message.member;
							member.removeRole(role).catch(console.error);
						}
						if (KD > 5 && stats.br.stats.pc.all.matchesPlayed > 1500) {
							let role = message.guild.roles.find("name", "Hacker");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}else{
							let role = message.guild.roles.find("name", "Hacker");
							let member = message.member;
							member.removeRole(role).catch(console.error);
						}

						message.channel.send({
							embed: {
								color: 3447003,
								author: {
									name: client.user.username,
									icon_url: client.user.avatarURL
								},
								title: "Fortnite ESP Stats",
								description: "Progreso para " + playerName,
								fields: [{
										name: "K/D " + KD + " - K/D " + objetivo,
										value: progressbarKD
									},
									{
										name: "Partidas jugadas: " + stats.br.stats.pc.all.matchesPlayed + " - " + objetivoP,
										value: progressbarP
									},
								],
								timestamp: new Date(),
								footer: {
									icon_url: client.user.avatarURL,
									text: "© Fortnite ESP"
								}
							}
						});
					}
				})
			} else {
				message.channel.send("¡Usuario no reconocido! \n Recuerda que tienes que tener el apodo del Discord igual al que tienes en Fortnite, incluidas las mismas mayúsculas usa !name para cambiar tu apodo. Usa el comando * !rankme (nombre de fortnite) * o si eres de ps4 * !rankme_ps4 (nombre de fortnite) *");
			}
		}
		if (message.content.startsWith(config.prefix + "rankme_ps4")) { //ROLE
			let atributes = message.content.split(config.prefix + "rankme_ps4 ")[1];
			console.log(atributes);
			var playerName = atributes;
			if (atributes == message.member.displayName) {
				console.log(playerName);
				var options = {
					method: "GET",
					url: `https://fortnite.y3n.co/v2/player/${playerName}`,
					headers: {
						'User-Agent': 'nodejs request',
						'X-Key': "I0hTZZRfChQTGZwlSmlM"
					}

				}

				request(options, (error, response, body) => {
					if (!error && response.statusCode == 200) {
						var stats = JSON.parse(body);


						if (stats.br.stats.ps4.all.kpd >= 0.0) {
							objetivo = "1"
						}
						if (stats.br.stats.ps4.all.kpd >= 0.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 0.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 0.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 0.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 0.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 0.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 0.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 0.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 0.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.kpd >= 0.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.ps4.all.kpd >= 1.0) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						if (stats.br.stats.ps4.all.kpd >= 1.0) {
							objetivo = "2"
						}
						if (stats.br.stats.ps4.all.kpd >= 1.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 1.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 1.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 1.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 1.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 1.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 1.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 1.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 1.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.kpd >= 1.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.ps4.all.kpd >= 2.0) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						if (stats.br.stats.ps4.all.kpd >= 2.0) {
							objetivo = "3"
						}
						if (stats.br.stats.ps4.all.kpd >= 2.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 2.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 2.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 2.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 2.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 2.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 2.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 2.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 2.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.kpd >= 2.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}

						if (stats.br.stats.ps4.all.kpd >= 3.0) {
							objetivo = "4"
						}
						if (stats.br.stats.ps4.all.kpd >= 3.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 3.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 3.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 3.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 3.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 3.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 3.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 3.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 3.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.kpd >= 3.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.ps4.all.kpd >= 4.0) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}


						if (stats.br.stats.ps4.all.kpd >= 4.0) {
							objetivo = "5"
						}
						if (stats.br.stats.ps4.all.kpd >= 4.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 4.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 4.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 4.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 4.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 4.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 4.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 4.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 4.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.kpd >= 4.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.ps4.all.kpd >= 5.0) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}
						
						
						
						if (stats.br.stats.ps4.all.kpd >= 5.0) {
							objetivo = "6"
						}
						if (stats.br.stats.ps4.all.kpd >= 5.0) {
							progressbarKD = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 5.1) {
							progressbarKD = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 5.2) {
							progressbarKD = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 5.3) {
							progressbarKD = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 5.4) {
							progressbarKD = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 5.5) {
							progressbarKD = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 5.6) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 5.7) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.kpd >= 5.8) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.kpd >= 5.9) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.ps4.all.kpd >= 6.0) {
							progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}




						if (stats.br.stats.ps4.matchesPlayed >= 0) {
							objetivoP = "50"
						}
						if (stats.br.stats.ps4.matchesPlayed >= 0) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 5) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 10) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 15) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 20) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 25) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 30) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 35) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 40) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 45) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 50) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						if (stats.br.stats.ps4.all.matchesPlayed >= 50) {
							objetivoP = "250"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 50) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 70) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 90) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 110) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 130) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 150) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 170) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 190) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 210) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 230) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 250) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						if (stats.br.stats.ps4.all.matchesPlayed >= 250) {
							objetivoP = "500"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 250) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 275) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 300) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 325) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 350) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 375) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 400) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 425) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 450) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 475) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 500) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						if (stats.br.stats.ps4.all.matchesPlayed >= 500) {
							objetivoP = "750"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 500) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 525) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 550) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 575) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 600) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 625) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 650) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 675) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 700) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 725) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 750) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}


						if (stats.br.stats.ps4.all.matchesPlayed >= 750) {
							objetivoP = "1000"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 750) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 775) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 800) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 825) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 850) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 875) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 900) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 925) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 950) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 975) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1000) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}

						
						
						if (stats.br.stats.ps4.all.matchesPlayed >= 1000) {
							objetivoP = "1500"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1000) {
							progressbarP = "[---------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1050) {
							progressbarP = "[■■■------------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1100) {
							progressbarP = "[■■■■■■---------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1150) {
							progressbarP = "[■■■■■■■■-------------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1200) {
							progressbarP = "[■■■■■■■■■■■----------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1250) {
							progressbarP = "[■■■■■■■■■■■■■■-------------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1300) {
							progressbarP = "[■■■■■■■■■■■■■■■■■----------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1350) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■-------]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1400) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■-----]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1450) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■---]"
						}
						if (stats.br.stats.ps4.all.matchesPlayed >= 1500) {
							progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■]"
						}




						KD = Math.round(stats.br.stats.ps4.all.kpd * 100) / 100;

						if (KD > 0 && stats.br.stats.ps4.all.matchesPlayed > 50) {
							let role = message.guild.roles.find("name", "Novato");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}
						if (KD > 1 && stats.br.stats.ps4.all.matchesPlayed > 250) {
							let role = message.guild.roles.find("name", "Experimentado");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}
						else{
							let role = message.guild.roles.find("name", "Experimentado");
							let member = message.member;
							member.removeRole(role).catch(console.error);
						}
						if (KD > 2 && stats.br.stats.ps4.all.matchesPlayed > 500) {
							let role = message.guild.roles.find("name", "Semi-profesional");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}
						else{
							let role = message.guild.roles.find("name", "Semi-profesional");
							let member = message.member;
							member.removeRole(role).catch(console.error);
						}
						if (KD > 3 && stats.br.stats.ps4.all.matchesPlayed > 750) {
							let role = message.guild.roles.find("name", "Profesional");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}
						else{
							let role = message.guild.roles.find("name", "Profesional");
							let member = message.member;
							member.removeRole(role).catch(console.error);
						}
						if (KD > 4 && stats.br.stats.ps4.all.matchesPlayed > 1000) {
							let role = message.guild.roles.find("name", "Experto");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}else{
							let role = message.guild.roles.find("name", "Experto");
							let member = message.member;
							member.removeRole(role).catch(console.error);
						}
						if (KD > 5 && stats.br.stats.ps4.all.matchesPlayed > 1500) {
							let role = message.guild.roles.find("name", "Hacker");
							let member = message.member;
							member.addRole(role).catch(console.error);
						}else{
							let role = message.guild.roles.find("name", "Hacker");
							let member = message.member;
							member.removeRole(role).catch(console.error);
						}

						message.channel.send({
							embed: {
								color: 3447003,
								author: {
									name: client.user.username,
									icon_url: client.user.avatarURL
								},
								title: "Fortnite ESP Stats",
								description: "Progreso para " + playerName,
								fields: [{
										name: "K/D " + KD + " - K/D " + objetivo,
										value: progressbarKD
									},
									{
										name: "Partidas jugadas: " + stats.br.stats.ps4.all.matchesPlayed + " - " + objetivoP,
										value: progressbarP
									},
								],
								timestamp: new Date(),
								footer: {
									icon_url: client.user.avatarURL,
									text: "© Fortnite ESP"
								}
							}
						});
					}
				})
			} else {
				message.channel.send("¡Usuario no reconocido! \n Recuerda que tienes que tener el apodo del Discord igual al que tienes en Fortnite, incluidas las mismas mayúsculas usa !name para cambiar tu apodo. Usa el comando * !rankme (nombre de fortnite) * o si eres de ps4 * !rankme_ps4 (nombre de fortnite) *");
				}
		}
		
		
	if (message.content.startsWith(config.prefix + "name")) { //Cambia apodo
		let apodofinal = message.content.split(config.prefix + "name")[1];
		if (apodofinal != null){
       		console.log(apodofinal)
       		message.member.setNickname(apodofinal);
			message.channel.send("Apodo cambiado a " + apodofinal);
			}
        }
	}
	if(message.author.id !== config.ownerID) return;
	console.log("SE HA EJECUTADO ROLEHAS");
	if(message.content.startsWith(config.prefix + "mnt")) { //Modo mantenimiento
		console.log("SE HA EJECUTADO MNT");
		let atr = message.content.split(" ").slice(1, 2)[0];
		if(atr == "on"){
			config.status = atr;
			fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
			client.user.setActivity('Mantenimiento!')
			client.user.setStatus("dnd");
			client.channels.get("424542755159801856").send(':no_entry_sign: Bot en mantenimiento :no_entry_sign:');
		}
		else if(atr == "off"){
			config.status = atr;
			fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
			client.user.setActivity('Fortnite ESP')
			client.user.setStatus("Online");
			client.channels.get("424542755159801856").send(':white_check_mark: Bot fuera de mantenimiento :white_check_mark:');	
		}
	}
	if (message.content.startsWith(config.prefix + "prefix")) { //Cambiar el prefijo
		// Pide el prefix i la palabra prefix 
		let newPrefix = message.content.split(" ").slice(1, 2)[0];
		// cambia el config
		config.prefix = newPrefix;
		console.log("Prefix cambiado a " + config.prefix);

		// guarda el archivo
		fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
		message.channel.send("Prefix cambiado a " + config.prefix);
	}

	//AUTO MOD (FASE DE PRUEBAS)
	if (message.content.startsWith(config.prefix + "joinc")) { //Cambia apodo
		let channel = client.channels.get('416912841191194634');
		channel.join().catch(console.error);
		}

	if (message.content.startsWith(config.prefix + "leavec")) { //Cambia apodo
		let channel = client.channels.get('416912841191194634');
		channel.leave();
			
			}
	if (message.content.startsWith(config.prefix + "move")) { //Cambia apodo
		let user = message.mentions.members.first();
		let channel = client.channels.get('416912841191194634');
		user.setVoiceChannel(channel);
	}


});
client.login(process.env.BOT_TOKEN); //Login del token
