module.exports.config = {
	name: "setallbox",
  version: "1.0.9",
	hasPermssion: 1,
	credits: "Réynél",
	description: "Change something of group",
	commandCategory: "group",
	usages: "[emoji/avt/Bname/name/QTV/rcolor] [args]",
	cooldowns: 5,
	dependencies: {"request":"",
                 "fs-extra":""},
};

module.exports.run = async function({ api, event, args, Threads }) {
	const request = require("request");
	const fs = require("fs-extra");
	if (args[0] == "emoji") {
		if (!args[1]) {
			var emoji = "😀,😃,😄,😁,😆,😅,😂,🤣,😊,😇,🙂,🙃,😉,😌,😍,🥰,😘,😗,😙,😚,😋,😛,😝,😜,🤪,🤨,🧐,🤓,😎,🤩,🥳,😏,😒,😞,😔,😟,😕,🙁,☹️,😣,😖,😫,😩,🥺,😢,😭,😤,😠,😡,🤬,🤯,😳,🥵,🥶,😱,😨,😰,😥,😓,🤗,🤔,🤭,🤫,🤥,😶,😐,😑,😬,🙄,😯,😦,😧,😮,😲,🥱,😴,🤤,😪,😵,🤐,🥴,🤢,🤮,🤧,😷,🤒,🤕,🤠,🤑,😈,👿,👹,💀,👺,👻,🤡,💩,☠️,👽,👾,🤖,🎃,😺,😸,😹,😻,😼,😽,🙀,😿,😾,🤲,👐,🙌,👏,🤝,👍,👎,👊,✊,🤛,🤜,✌️,🤟,🤘,👌,🤏,👈,👉,👆,👇,☝️,✋,🤚,🖐️,🖖,👋,🤙,💪,🖕,✍️,🙏,🦾,🦿,🦶,🦵,💄,💋,👄,🦷,👅,👂,🦻,👃,👣,👁️,👀,🧠,🗣️,👤,👥,👶,👧,🧒,👦,👩,🧑,👨,👩‍🦱,👨‍🦱,👩‍🦰,👨‍🦰,👱‍♀️,👱‍♂️,👩‍🦳,👨‍🦳,👩‍🦲,👨‍🦲,🧔,👵,🧓,👴,👲,👳‍♀️,👳‍♂️,🧕,👮‍♀️,👮‍♂️,👷‍♀️,👷‍♂️,💂‍♀️,💂‍♂️,🕵️‍♀️,🕵️‍♂️,👩‍⚕️,👨‍⚕️,👩‍🌾,👨‍🌾,👩‍🍳,👨‍🍳,👩‍🎓,👨‍🎓,👩‍🎤,👨‍🎤,👩‍🏫,👨‍🏫,👩‍🏭,👨‍🏭,👩‍💻,👨‍💻,👩‍💼,👨‍💼,👩‍🔧,👨‍🔧,👩‍🔬,👨‍🔬,👩‍🎨,👨‍🎨,👩‍🚒,👨‍🚒,👩‍✈️,👨‍✈️,👩‍🚀,👨‍🚀,👩‍⚖️,👨‍⚖️,👰,🤵,👸,🤴,🦸‍♀️,🦸‍♂️,🦹‍♀️,🦹‍♂️,🤶,🎅,🧙‍♀️,🧙‍♂️,🧝‍♀️,🧝‍♂️,🧛‍♀️,🧟‍♀️,🧛‍♂️,🧟‍♂️,🧞‍♀️,🧞‍♂️,🧜‍♀️,🧜‍♂️,🧚‍♀️,🧚‍♂️,👼,🤰,🤱,🙇‍♀️,🙇‍♂️,💁‍♀️,💁‍♂️,🙅‍♀️,🙅‍♂️,🙆‍♀️,🙆‍♂️,🙋‍♀️,🙋‍♂️,🤦‍♀️,🤦‍♂️,🤷‍♀️,🤷‍♂️,🧏‍♀️,🧏‍♂️,🙎‍♀️,🙎‍♂️,🙍‍♀️,🙍‍♂️,💇‍♀️,💇‍♂️,💆‍♀️,💆‍♂️,🧖‍♀️,🧖‍♂️,💅,🤳,💃,🕺,👯‍♂️,👯‍♂️,🕴️,🚶‍♀️,🚶‍♂️,🧍‍♀️,🧍‍♂️,🧎‍♀️,🧎‍♂️,👩‍🦯,👨‍🦯,👩‍🦼,👨‍🦼,👩‍🦽,🏃‍♀️,🏃‍♂️,👫,👭,👬,💑,👩‍❤️‍👩,👨‍❤️‍👨,💏,👩‍❤️‍💋‍👩,👨‍❤️‍💋‍👨,👨‍👩‍👦,👨‍👩‍👧,👨‍👩‍👧‍👦,👨‍👩‍👦‍👦,👨‍👩‍👧‍👨‍👩‍👧‍👧,👩‍👩‍👦,👩‍👩‍👧,👩‍👩‍👧‍👦,👩‍👩‍👦‍👦,👩‍👩‍👧‍👧,👨‍👨‍👦,👨‍👨‍👧,👨‍👨‍👧‍👦,👨‍👨‍👦‍👦,👨‍👨‍👧‍👧,👩‍👦,👩‍👧,👩‍👧‍👦,👩‍👦‍👦,👩‍👧‍👧,👨‍👦,👨‍👧,👨‍👧‍👦,👨‍👦‍👦,👨‍👧‍👧,🧶,🧵,🧥,🥼,👚,👕,👖,👔,👗,🩱,👙,🩳,🩲,👘,👞,🦺,🥿,👠,👡,👢,🩰,👞,👟,🥾,🧦,🧤,🧣,🎩,🧢,👒,🎓,⛑️,👑,💍,👝,👛,👜,💼,🎒,🧳,👓,🕶️,🌂,🥽,🐶,🐱,🐭,🐹,🐰,🦊,🐻,🐼,🐨,🐯,🦁,🐮,🐷,🐽,🐽,🐸,🐵,🙈,🙉,🙊,🐒,🐔,🐧,🐦,🐤,🐣,🐥,🦆,🦅,🦉,🦇,🐺,🐗,🐴,🦄,🐝,🐛,🦋,🐌,🐞,🐜,🦟,🦗,🕷️,🕸️,🦂,🐢,🐍,🦎,🦖,🦕,🐙,🦑,🦐,🦞,🦀,🦪,🐡,🐠,🐟,🐬,🐳,🐋,🦈,🐊,🐅,🐆,🦓,🦍,🦧,🦥,🐘,🦛,🦏,🐪,🐫,🦒,🦘,🐃,🐂,🐄,🐎,🐖,🐏,🐑,🦙,🐐,🦌,🐕,🦮,🐕‍🦺,🐩,🐈,🐓,🦃,🦚,🦜,🦩,🦢,🕊️,🐇,🦝,🦨,🦡,🦦,🐁,🐀,🐿️,🦔,🐾,🐉,🐲,🌵,🎄,🌲,🌳,🌴,🌱,🌿,☘️,🍀,🎍,🎋,🍃,🍂,🍁,🍄,🐚,🌾,💐,🌷,🌹,🥀,🌺,🌸,🌼,🌻,🌞,🌝,🌛,🌜,🌚,🌕,🌖,🌗,🌘,🌑,🌒,🌓,🌔,🌙,🌎,🌍,🌏,🪐,💫,⭐,🌟,✨,⚡,☄️,💥,🔥,🌪️,🌈,☀️,🌤️,⛅,🌥️,☁️,🌦️,🌧️,⛈️,🌩️,🌨️,❄️,☃️,⛄,🌬️,💨,💧,💦,☔,☂️,🌊,🌫️,🍏,🍎,🍐,🍊,🍋,🍌,🍉,🍇,🍓,🍈,🍒,🍑,🥭,🍍,🥥,🥝,🍅,🍆,🥑,🥦,🥬,🥒,🌶️,🌽,🥕,🥔,🧅,🧄,🍠,🥐,🥯,🍞,🥖,🥨,🧀,🧈,🥚,🍳,🥞,🧇,🥓,🥩,🍗,🍖,🦴,🌭,🍔,🍟,🍕,🥪,🧆,🥙,🌮,🌯,🥗,🥘,🥫,🍝,🍜,🍲,🍛,🍣,🍱,🥟,🍤,🍙,🍚,🍘,🍥,🥠,🥮,🍢,🍡,🍧,🍨,🍦,🥧,🧁,🍰,🎂,🍮,🍭,🍬,🍫,🍿,🍩,🍪,🌰,🥜,🍯,🥛,🍼,☕,🍵,🧉,🥤,🧃,🍶,🍺,🍻,🥂,🍷,🥃,🍸,🍹,🍾,🧊,🥄,🍴,🥡,🥡,🥢,🧂,⚽,🏀,🏈,⚾,🥎,🎾,🏉,🏐,🥏,🎱,🏓,🏸,🏒,🏑,🥍,🏏,🥅,⛳,🏹,🎣,🤿,🥊,🥋,🎽,🛹,🛷,⛸️,🥌,🎿,⛷️,🏂,🏋️‍♀️,🏋️‍♂️,🤼‍♀️,🤼‍♂️,🤸‍♀️,🤸‍♂️,⛹️‍♀️,⛹️‍♂️,🤺,🤾‍♀️,🤾‍♂️,🏌️‍♀️,🏌️‍♂️,🏇,🧘‍♀️,🧘‍♂️,🏄‍♂️,🏊‍♀️,🏊‍♂️,🤽‍♀️,🤽‍♂️,🚣‍♀️,🚣‍♂️,🧗‍♀️,🧗‍♂️,🚵‍♀️,🚵‍♂️,🚴‍♀️,🚴‍♂️,🏆,🥇,🥈,🥉,🏅,🎖️,🏵️,🎗️,🎫,🎟️,🎪,🤹‍♀️,🤹‍♂️,🎭,🎨,🎬,🎤,🎧,🎼,🎹,🥁,🎷,🎺,🎸,🪕,🎻,🎲,♟️,🪀,🎯,🎳,🎮,🎰,🪁,🧩,🚗,🚕,🚙,🚌,🚎,🏎️,🚓,🚑,🚒,🚐,🚚,🚛,🚜,🛴,🦽,🦼,🚲,🛵,🛺,🏍️,🚨,🚔,🚍,🚘,🚖,🚡,🚠,🚟,🚃,🚋,🚞,🚝,🚄,🚅,🚈,🚂,🚆,🚇,🚊,🚉,✈️,🛫,🛬,🛩️,💺,🪂,🛰️,🚀,🛸,🚁,🛶,⛵,🚤,🛥️,🛳️,⛴️,🚢,⚓,⛽,🚧,🚦,🚥,🚏,🗺️,🗿,🗽,🗼,🏰,🏯,🏟️,🎡,🎢,🎠,⛲,⛱️,🏖️,🏝️,🏜️,🌋,⛰️,🏔️,🗻,🏕️,⛺,🏠,🏡,🏘️,🏚️,🏗️,🏢,🏭,🏬,🏣,🏤,🏥,🏦,🏨,🏪,🏫,🏩,💒,🏛️,⛪,🕌,🛕,🕍,🕋,⛩️,🛤️,🛣️,🗾,🎑,🏞️,🌅,🌄,🌠,🎇,🎆,🌇,🌆,🏙️,🌃,🌌,🌉,🌁,⌚,📱,📲,💻,⌨️,🖥️,🖨️,🖱️,🖲️,🕹️,🗜️,💽,💾,💿,📀,📼,📷,📸,📹,🎥,📽️,🎞️,📞,☎️,📟,📠,📺,📻,🎙️,🎚️,🎛️,🧭,⏱️,⏲️,⏰,🕰️,⌛,⏳,📡,🔋,🔌,💡,🔦,🕯️,🪔,🧯,🛢️,💸,💵,💴,💶,💷,💰,💳,💎,⚖️,🦯,🧰,🔧,🔨,⚒️,🛠️,⛏️,🪓,🔩,⚙️,🧱,⛓️,🧲,🔫,💣,🧨,🔪,🗡️,⚔️,🛡️,🚬,⚰️,⚱️,🏺,🔮,📿,🧿,💈,⚗️,🔭,🔬,🕳️,🩹,💊,🩸,💉,🩺,🧬,🦠,🧫,🧪,🌡️,🧹,🧺,🧻,🚽,🚰,🚿,🛁,🛀,🧼,🧽,🪒,🧴,🛎️,🔑,🗝️,🚪,🪑,🛋️,🛏️,🛌,🧸,🖼️,🛍️,🛒,🎁,🎈,🎏,🎀,📩,📨,📧,💌,📥,📤,📦,🎊,✉️,🎉,🧧,🎎,🎐,🏮,🏷️,📪,📫,📬,📭,📮,📯,📜,📃,📄,📑,🧾,📊,📈,📉,🗒️,🗓️,📆,📅,🗑️,📇,🗃️,🗳️,🗄️,📋,📁,🗂️,📂,🗞️,📰,📓,📔,📒,📕,📗,📘,📙,📚,📖,🔖,🧷,🔗,📎,🖇️,📐,📏,🧮,📍,📌,✂️,🖊️,🖋️,✒️,🖌️,🖍️,📝,✏️,🔍,🔎,🔏,🔐,🔒,🔓,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,💔,❣️,💕,💞,💓,💗,💖,💘,💝,💟,☮️,✝️,☪️,🕉️,☸️,✡️,🔯,🕎,☯️,☦️,🛐,⛎,♈,♉,♊,♋,♌,♍,♎,♏,♐,♑,♒,♓,🆔,⚛️,🉑,☢️,☣️,📴,📳,🈶,🈚,🈸,🈺,🈷️,✴️,🆚,💮,🉐,㊙️,㊗️,🈴,🈵,🈹,🈲,🅰️,🅱️,🆎,🆑,🅾️,🆘,❌,⭕,🛑,⛔,📛,🚫,💯,💢,♨️,🚷,🚳,🚱,🔞,📵,🚭,❗,❕,❓,❔,‼️,⁉️,🔅,🔆,〽️,⚠️,🚸,🔱,⚜️,🔰,♻️,✅,🈯,💹,❇️,✳️,❎,🌐,💠,Ⓜ️,🌀,💤,🏧,🚾,♿,🅿️,🈳,🈂️,🛂,🛃,🛄,🛅,🚹,🚺,🚼,🚻,🚮,🎦,📶,🈁,🔣,ℹ️,🔤,🔡,🔠,🆖,🆗,🆙,🆒,🆕,🆓,0️⃣,1️⃣,2️⃣,3️⃣,4️⃣,5️⃣,6️⃣,7️⃣,8️⃣,9️⃣,🔟,🔢,#️⃣,*️⃣,⏏️,▶️,⏸️,⏺️,⏭️,⏮️,⏩,⏪,⏫,⏬,◀️,🔼,🔽,➡️,⬅️,⬆️,⬇️,↗️,↘️,↙️,↖️,↕️,↪️,↪️,↩️,⤴️,⤵️,🔀,🔁,🔄,🔂,🔃,↔️,🎵,🎶,\➕,➖,✖️,➗,♾️,💲,👁️‍🗨️,💱,®️,™️,©️,🔚,➰,🔙,〰️,🔛,🔜,🔝,➿,✔️,☑️,🔘,⚪,⚫,🔴,🟠,🟡,🟢,🔵,🟣,🟤,🔺,🔻,🔸,🔹,🔶,🔷,🔳,🔲,▪️,▫️,◾,◽,◼️,◻️,⬛,⬜,🟥,🟧,🟨,🟩,🟪,🟦,🟫,🔈,🔇,🔉,🔊,🔔,🔕,📣,📢,💬,💭,🗯️,♠️,♣️,♥️,♦️,🃏,🎴,🀄,🕐,🕑,🕒,🕓,🕔,🕕,🕖,🕘,🕘,🕙,🕚,🕗,🕛,🕜,🕝,🕞,🕟,🕠,🕡,🕦,🕢,🕥,🕤,🕣,🕧".split(",");
			var random = emoji[Math.floor(Math.random() * emoji.length)];                        
			api.changeThreadEmoji(`${random}`, event.threadID)
			return;
		} else try {
			api.changeThreadEmoji(args[1], event.threadID)
		} catch (e) {
			api.sendMessage(`${e.name}: ${e.message}`, event.threadID, event.messageID);
		}
	}
	 
	if (args[0] == "Bname") {
		var name = args.slice(1,args.length).join(" ");
		api.setTitle(`${name}`, event.threadID)
	}

	if (args[0] == "rcolor") {
		var color = ['196241301102133','169463077092846','2442142322678320', '234137870477637', '980963458735625','175615189761153','2136751179887052', '2058653964378557','2129984390566328','174636906462322','1928399724138152','417639218648241','930060997172551','164535220883264','370940413392601','205488546921017','809305022860427'];
		return api.changeThreadColor(color[Math.floor(Math.random() * color.length)], event.threadID, (err) => {
			if (err) return api.sendMessage('❎ | 𝖦𝗈𝗆𝖾𝗇 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖻𝗎𝗍 𝗍𝗁𝖾𝗋𝖾 𝗐𝖺𝗌 𝖺𝗇 𝗎𝗇𝗐𝖺𝗇𝗍𝖾𝖽 𝖾𝗋𝗋𝗈𝗋 𝗍𝗁𝖺𝗍 𝗁𝖺𝗉𝗉𝖾𝗇𝖾𝖽', event.threadID, event.messageID)});
	}
	
	if (args[0] == "name") {
		const name = args.slice(1,args.length).join(" ");
		const mention = Object.keys(event.mentions)[0];
		if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
		if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
	 }
	 
	if (args[0] == "avt") {
		if (event.type != "message_reply") return api.sendMessage("ℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗄𝗂𝗇𝖽𝗅𝗒 𝗋𝖾𝗉𝗅𝗒 𝟣 𝗉𝗁𝗈𝗍𝗈",event.threadID,event.messageID);
		(event.messageReply.attachments[0] != "") ? (event.messageReply.attachments[0].type == "photo") ? request(event.messageReply.attachments[0].url).pipe(fs.createWriteStream(__dirname + `/cache/picture.png`)).on("close",()=> api.changeGroupImage(fs.createReadStream(__dirname + `/cache/picture.png`),event.threadID, () => fs.unlinkSync(__dirname + `/cache/picture.png`))) : api.sendMessage("ℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝖺𝗋𝖾 𝗒𝗈𝗎 𝗌𝖾𝗋𝗂𝗈𝗎𝗌𝗅𝗒 𝖼𝗈𝗇𝗌𝗂𝖽𝖾𝗋𝖾𝖽? 𝗐𝗁𝖺𝗍 𝗐𝗈𝗎𝗅𝖽 𝗒𝗈𝗎 𝗋𝖾𝗉𝗅𝗒?",event.threadID,event.messageID) : ""
	}
  
  	if (args[0] == "poll") {
   		var content = args.join(" ");
    		var title = content.slice(4, content.indexOf(" => "));
    		var options = content.substring(content.indexOf(" => ") + 4)
    		var option = options.split(" | ");
    		var object = {};
    		if (option.length == 1 && option[0].includes(' |')) option[0] = option[0].replace(' |', '');
    		for (var i = 0; i < option.length; i++) object[option[i]] = false;
    		return api.createPoll(title, event.threadID, object, (err) => (err) ? api.sendMessage("❎ | 𝖦𝗈𝗆𝖾𝗇 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾𝗋𝖾 𝖺𝗋𝖾 𝖾𝗋𝗋𝗈𝗋𝗌 𝗍𝗁𝖺𝗍 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽, 𝗎𝗌𝖾 𝗍𝗁𝖾 𝗉𝗈𝗅𝗅 𝗎𝗇𝖽𝖾𝗋 𝖿𝗈𝗋𝗆𝖺𝗍 [<𝗇𝖺𝗆𝖾 𝗈𝖿 𝗉𝖺𝗇𝗊𝗎𝖾𝗍> => <𝖼𝗈𝗆𝗆𝖾𝗇𝗍𝗌 𝟣> | <𝖼𝗈𝗆𝗆𝖾𝗇𝗍𝗌 𝖭 + 𝟣>]", event.threadID, event.messageID) : '');
  	}
  
  	if (args[0] == "QTV") {
		try {
			const mention = Object.keys(event.mentions)[0];
			if (!mention) {
				var data = (event.type == "message_reply") ? event.messageReply.senderID : args[1];   
				const threadAdmins = await Threads.getInfo(event.threadID);
        			const find_ = threadAdmins.adminIDs.find(el => el.id== event.senderID);
				const find = threadAdmins.adminIDs.find(el => el.id == data);
				(!find_) ? api.sendMessage("❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗇𝗈𝗍 𝖺𝗇 𝖺𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝗍𝗈𝗋",event.threadID,event.messageID) : (!find) ? api.changeAdminStatus(event.threadID,data,true) : api.changeAdminStatus(event.threadID,data,false);
			}
			else {
				const threadAdmins = await Threads.getInfo(event.threadID);
      	const find_ = threadAdmins.adminIDs.find(el => el.id == event.senderID);
				const find = threadAdmins.adminIDs.find(el => el.id == mention);
				(!find_) ? api.sendMessage("❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗇𝗈𝗍 𝖺𝗇 𝖺𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝗍𝗈𝗋",event.threadID,event.messageID) : (!find) ? api.changeAdminStatus(event.threadID,mention,true) : api.changeAdminStatus(event.threadID,mention,false);
			}
		}
		catch (e) {
			return api.sendMessage("❎ | 𝖦𝗈𝗆𝖾𝗇 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾𝗋𝖾 𝖺𝗋𝖾 𝖾𝗋𝗋𝗈𝗋𝗌 𝗍𝗁𝖺𝗍 𝗁𝖺𝗉𝗉𝖾𝗇",event.threadID,event.messageID);
		}
 	}
}
