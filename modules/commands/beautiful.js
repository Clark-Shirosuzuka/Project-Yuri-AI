module.exports.config = {
	name: "beautiful",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Réynél",
	description: "beautiful",
	commandCategory: "mentions",
	usages: "[@mention]",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
   let { senderID, threadID, messageID } = event;
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var currency = args.toString().replace(/,/g,  '  ')
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  
  let img = await new DIG.Beautiful().getImage(avatar);
  let attach = new Discord.MessageAttachment(img);
  var path_wanted = __dirname + "/cache/beauti.png";
  fs.writeFileSync(path_wanted, attach.attachment);
  api.sendMessage({body: "𝗬𝗼𝘂 𝗹𝗼𝗼𝗸 𝘀𝗼 𝗯𝗲𝗮𝘂𝘁𝗶𝗳𝘂𝗹", attachment: fs.createReadStream(path_wanted)}, event.threadID, () => fs.unlinkSync(path_wanted), event.messageID);
}