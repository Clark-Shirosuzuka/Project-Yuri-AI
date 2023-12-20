module.exports.config = {
	name: "facepalm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Réynél",
	description: "facepalm",
	commandCategory: "mentions",
	usages: "[blank or mention]",
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
  
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  
  let img = await new DIG.Facepalm().getImage(avatar);
  let attach = new Discord.MessageAttachment(img);
  var path_facepalm = __dirname + "/cache/facepalm.png";
  fs.writeFileSync(path_facepalm, attach.attachment);
  api.sendMessage({body: "𝗬𝗼𝘂'𝗿𝗲 𝗴𝗲𝘁𝘁𝗶𝗻𝗴 𝘁𝗵𝗿𝗼𝘂𝗴𝗵 𝗺𝘆 𝗻𝗲𝗿𝘃𝗲𝘀", attachment: fs.createReadStream(path_facepalm)}, event.threadID, () => fs.unlinkSync(path_facepalm), event.messageID);
}