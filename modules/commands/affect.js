module.exports.config = {
	name: "affect",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Réynél",
	description: "meme",
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
  
  let img = await new DIG.Affect().getImage(avatar);
  let attach = new Discord.MessageAttachment(img);
  var path_affect = __dirname + "/cache/affect.png";
  fs.writeFileSync(path_affect, attach.attachment);
  api.sendMessage({body: `"𝗜𝘁 𝘄𝗼𝗻'𝘁 𝗮𝗳𝗳𝗲𝗰𝘁 𝗼𝘂𝗿 𝗰𝗵𝗶𝗹𝗱"\n𝟴 𝘆𝗲𝗮𝗿𝘀 𝗮𝗴𝗼:`, attachment: fs.createReadStream(path_affect)}, event.threadID, () => fs.unlinkSync(path_affect), event.messageID);
}