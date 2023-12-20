module.exports.config = {
	name: "trash",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Réynél",
	description: "Pretend you thought it was trash the person you mention or yourself",
	commandCategory: "mentions",
	usages: "[mention or blank]",
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
  
  let img = await new DIG.Trash().getImage(avatar);
  let attach = new Discord.MessageAttachment(img);
  var path_trash = __dirname + "/cache/trash.png";
  fs.writeFileSync(path_trash, attach.attachment);
  api.sendMessage({body: "𝖨 𝗍𝗁𝗈𝗎𝗀𝗁𝗍 𝗒𝗈𝗎'𝗋𝖾 𝗎𝗌𝖾𝗅𝖾𝗌𝗌 𝗅𝗂𝗄𝖾 𝖺 𝗀𝖺𝗋𝖻𝖺𝗀𝖾, 𝗌𝗈𝗋𝗋𝗒 𝗆𝗒 𝖻𝖺𝖽.", attachment: fs.createReadStream(path_trash)}, event.threadID, () => fs.unlinkSync(path_trash), event.messageID);
}