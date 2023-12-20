module.exports.config = {
  name: "fbcoverv2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Réynél",
  description: "Create facebook service style cover photo",
  commandCategory: "cover",
  usages: "fbcover",
  cooldowns: 0,
  dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": ""
  }
};
module.exports.run = async function({ api, args, event, permssion }) {
  const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
  if (!args[0]) return api.sendMessage('ℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗉𝗅𝖾𝖺𝗌𝖾 𝖾𝗇𝗍𝖾𝗋 𝗍𝗁𝖾 𝗉𝗋𝗂𝗆𝖺𝗋𝗒 𝗇𝖺𝗆𝖾 (𝖿𝖺𝗄𝖾 𝗇𝖺𝗆𝖾 𝗈𝗋 𝗋𝖾𝖺𝗅)', threadID, messageID)
  else return api.sendMessage(`🔍 | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗒𝗈𝗎 𝖼𝗁𝗈𝗌𝖾 𝗍𝗁𝖾 𝗉𝗋𝗂𝗆𝖺𝗋𝗒 𝗇𝖺𝗆𝖾 𝖺𝗌: ${args.join(" ").toUpperCase()}\n\nℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗄𝗂𝗇𝖽𝗅𝗒 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝖺𝗇𝖽 𝖼𝗁𝗈𝗈𝗌𝖾 𝗒𝗈𝗎𝗋 𝗌𝖾𝖼𝗈𝗇𝖽𝖺𝗋𝗒 𝗇𝖺𝗆𝖾 (𝖿𝖺𝗄𝖾 𝗌𝖾𝖼𝗈𝗇𝖽𝖺𝗋𝗒 𝗇𝖺𝗆𝖾 𝗈𝗋 𝗇𝗈𝗍)`, event.threadID, (err, info) => {
    return global.client.handleReply.push({
      type: "tenphu",
      name: `fbcover`,
      author: senderID,
      tenchinh: args.join(" ").toUpperCase(),
      messageID: info.messageID
    });
  }, event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  module.exports.circle = async (image) => {
    const jimp = require("jimp")
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
  }
  if (handleReply.author != event.senderID) return;
  const { threadID, messageID, senderID, body } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  let pathImg = __dirname + `/cache/${senderID + 20}.png`;
  let pathAva = __dirname + `/cache/${senderID + 30}.png`;
  let pathLine = __dirname + `/cache/${senderID + 40}.png`;
  const path = require("path")
  const Canvas = require("canvas")
  const __root = path.resolve(__dirname, "cache");
  var tenchinh = handleReply.tenchinh;
  //=================CONFIG TEXT=============//
  switch (handleReply.type) {
    case "tenphu": {
      var tenchinh = handleReply.tenchinh;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗒𝗈𝗎 𝗁𝖺𝗏𝖾 𝖼𝗁𝗈𝗌𝖾𝗇 𝖺 𝗌𝗎𝖻-𝗇𝖺𝗆𝖾 ${event.body.toUpperCase()}\n\nℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗄𝗂𝗇𝖽𝗅𝗒 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝖺𝗇𝖽 𝖾𝗇𝗍𝖾𝗋 𝗒𝗈𝗎𝗋 𝗉𝗁𝗈𝗇𝖾 𝗇𝗎𝗆𝖻𝖾𝗋 (𝖿𝖺𝗄𝖾 𝗇𝗎𝗆𝖻𝖾𝗋 𝗈𝗋 𝗋𝖾𝖺𝗅)`, threadID, function(err, info) {
        return global.client.handleReply.push({
          type: "sdt",
          name: `coverfb`,
          author: senderID,
          tenphu: event.body,
          tenchinh: tenchinh,
          messageID: info.messageID
        });
      }, messageID)
    }
    case "sdt": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗒𝗈𝗎 𝗁𝖺𝗏𝖾 𝗌𝖾𝗅𝖾𝖼𝗍𝖾𝖽 𝖲𝖣𝖳 𝖺𝗌: ${event.body.toUpperCase()}\n\nℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗄𝗂𝗇𝖽𝗅𝗒 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗍𝗈 𝖾𝗇𝗍𝖾𝗋 𝗒𝗈𝗎𝗋 𝖾𝗆𝖺𝗂𝗅 (𝖿𝖺𝗄𝖾 𝖾𝗆𝖺𝗂𝗅 𝗈𝗋 𝗇𝗈𝗍)`, threadID, function(err, info) {
        return global.client.handleReply.push({
          type: "email",
          name: `coverfb`,
          author: senderID,
          sdt: event.body,
          tenchinh: handleReply.tenchinh,
          tenphu: handleReply.tenphu,
          messageID: info.messageID
        });
      }, messageID)
    }
    case "email": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗒𝗈𝗎 𝗁𝖺𝗏𝖾 𝗌𝖾𝗅𝖾𝖼𝗍𝖾𝖽 𝖾𝗆𝖺𝗂𝗅 𝖺𝗌: ${event.body.toUpperCase()}\n\nℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗄𝗂𝗇𝖽𝗅𝗒 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗍𝗈 𝖾𝗇𝗍𝖾𝗋 𝗒𝗈𝗎𝗋 𝖺𝖽𝖽𝗋𝖾𝗌𝗌 (𝖿𝖺𝗄𝖾 𝖺𝖽𝖽𝗋𝖾𝗌𝗌 𝗈𝗋 𝗇𝗈𝗍)`, threadID, function(err, info) {
        return global.client.handleReply.push({
          type: "color",
          name: `coverfb`,
          author: senderID,
          sdt: handleReply.sdt,
          tenchinh: handleReply.tenchinh,
          tenphu: handleReply.tenphu,
          email: event.body,
          messageID: info.messageID
        });
      }, messageID)
    }
    case "color": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗒𝗈𝗎 𝗁𝖺𝗏𝖾 𝖼𝗁𝗈𝗌𝖾𝗇 𝗍𝗁𝖾 𝖺𝖽𝖽𝗋𝖾𝗌𝗌 𝖺𝗌: ${event.body.toUpperCase()}\n\nℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗄𝗂𝗇𝖽𝗅𝗒 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗍𝗈 𝖾𝗇𝗍𝖾𝗋 𝗒𝗈𝗎𝗋 𝖻𝖺𝖼𝗄𝗀𝗋𝗈𝗎𝗇𝖽 𝖼𝗈𝗅𝗈𝗋 (𝖾𝗇𝗍𝖾𝗋 𝗇𝗈 𝖺𝗌 𝗍𝗁𝖾 𝖽𝖾𝖿𝖺𝗎𝗅𝗍 𝖼𝗈𝗅𝗈𝗋)`, threadID, function(err, info) {
        return global.client.handleReply.push({
          type: "create",
          name: `coverfb`,
          author: senderID,
          sdt: handleReply.sdt,
          tenchinh: handleReply.tenchinh,
          tenphu: handleReply.tenphu,
          diachi: event.body,
          email: handleReply.email,
          messageID: info.messageID
        });
      }, messageID)
    }
    case "create": {
      var color = event.body
      if (color.toLowerCase() == "no") var color = `#ffffff`
      var address = handleReply.diachi.toUpperCase()
      var name = handleReply.tenchinh.toUpperCase()
      var email = handleReply.email.toUpperCase()
      var subname = handleReply.tenphu.toUpperCase()
      var phoneNumber = handleReply.sdt.toUpperCase()
      api.unsendMessage(handleReply.messageID);
      api.sendMessage(`⏳ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖨'𝗆 𝗂𝗇𝗂𝗍𝗂𝖺𝗅𝗂𝗓𝗂𝗇𝗀 𝗍𝗁𝖾 𝗂𝗆𝖺𝗀𝖾 𝗆𝖺𝗄𝖾𝗋, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...`, threadID, (err, info) => {
        setTimeout(() => {
          api.unsendMessage(info.messageID);
        }, 1000);
      }, messageID);
      //=================CONFIG IMG=============//
      let avtAnime = (
        await axios.get(encodeURI(
          `https://graph.facebook.com/${senderID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`),
          { responseType: "arraybuffer" }
        )
      ).data;
      let background = (
        await axios.get(encodeURI(`https://1.bp.blogspot.com/-ZyXHJE2S3ew/YSdA8Guah-I/AAAAAAAAwtQ/udZEj3sXhQkwh5Qn8jwfjRwesrGoY90cwCNcBGAsYHQ/s0/bg.jpg`), {
          responseType: "arraybuffer",
        })
      ).data;
      let hieuung = (
        await axios.get(encodeURI(`https://1.bp.blogspot.com/-zl3qntcfDhY/YSdEQNehJJI/AAAAAAAAwtY/C17yMRMBjGstL_Cq6STfSYyBy-mwjkdQwCNcBGAsYHQ/s0/mask.png`), {
          responseType: "arraybuffer",
        })
      ).data;
      fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
      fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
      fs.writeFileSync(pathLine, Buffer.from(hieuung, "utf-8"));
      var avatar = await this.circle(pathAva);
      //=================DOWNLOAD FONTS=============//
      if (!fs.existsSync(__dirname + `/cache/UTMAvoBold.ttf`)) {
        let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1DuI-ou9OGEkII7n8odx-A7NIcYz0Xk9o&export=download`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/cache/UTMAvoBold.ttf`, Buffer.from(getfont2, "utf-8"));
      };
      //=================DRAW BANNER=============//
      let baseImage = await loadImage(pathImg);
      let baseAva = await loadImage(avatar);
      let baseLine = await loadImage(pathLine);
      let canvas = createCanvas(baseImage.width, baseImage.height);
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
      Canvas.registerFont(__dirname + `/cache/UTMAvoBold.ttf`, { family: "UTMAvoBold" });
      ctx.strokeStyle = "rgba(255,255,255, 0.2)";
      ctx.lineWidth = 3;
      ctx.font = "100px UTMAvoBold";
      ctx.strokeText(name, 30, 100);
      ctx.strokeText(name, 130, 200);
      ctx.textAlign = "right";
      ctx.strokeText(name, canvas.width - 30, canvas.height - 30);
      ctx.strokeText(name, canvas.width - 130, canvas.height - 130);
      ctx.fillStyle = `#ffffff`
      ctx.font = "55px UTMAvoBold";
      ctx.fillText(name, 680, 270);
      ctx.font = "40px UTMAvoBold";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "right";
      ctx.fillText(subname, 680, 320);
      ctx.font = "23px UTMAvoBold";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "start";
      ctx.fillText(phoneNumber, 1350, 252);
      ctx.fillText(email, 1350, 332);
      ctx.fillText(address, 1350, 410);
      ctx.globalCompositeOperation = "destination-out";
      ctx.drawImage(baseLine, 0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = color
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(baseAva, 824, 180, 285, 285);
      const imageBuffer = canvas.toBuffer();
      fs.writeFileSync(pathImg, imageBuffer);
      return api.sendMessage(
        { body: "✅ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗁𝖾𝗋𝖾’𝗌 𝗒𝗈𝗎𝗋 𝖿𝖻𝖼𝗈𝗏𝖾𝗋𝗏𝟤:", attachment: fs.createReadStream(pathImg) },
        threadID, messageID
      );
    }
  }
          }