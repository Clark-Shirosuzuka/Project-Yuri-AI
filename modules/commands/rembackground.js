const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "removebg",
  version: "2.7",
  hasPermission: 0,
  credits: "Réynél",
  description: "( 𝙍𝙚𝙢𝙤𝙫𝙚 𝘽𝙖𝙘𝙠𝙜𝙧𝙤𝙪𝙣𝙙 𝙋𝙝𝙤𝙩𝙤 )",
  commandCategory: "tools",
  usages: "[reply to photo]",
  cooldown: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("removebg") === 0 || event.body.indexOf("Removebg") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();

  try {
    const response = await axios.get("https://hazeyy-apis-combine.kyrinwu.repl.co");
    if (response.data.hasOwnProperty("error")) {
      return api.sendMessage(response.data.error, event.threadID, event.messageID);
    }

    let pathie = __dirname + `/cache/removed_bg.jpg`;
    const { threadID, messageID } = event;

    let photoUrl = event.messageReply ? event.messageReply.attachments[0].url : args.join(" ");

    if (!photoUrl) {
      api.sendMessage("📸 | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝖺 𝗉𝗁𝗈𝗍𝗈 𝗍𝗈 𝗉𝗋𝗈𝖼𝖾𝗌𝗌 𝖺𝗇𝖽 𝗋𝖾𝗆𝗈𝗏𝖾 𝖻𝖺𝖼𝗄𝗀𝗋𝗈𝗎𝗇𝖽𝗌.", threadID, messageID);
      return;
    }

    api.sendMessage("🕟 | 𝖱𝖾𝗆𝗈𝗏𝗂𝗇𝗀 𝖡𝖺𝖼𝗄𝗀𝗋𝗈𝗎𝗇𝖽 𝗌𝖾𝗇𝗌𝖾𝗂, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...", threadID, async () => {
      try {
        const response = await axios.get(`https://hazeyy-apis-combine.kyrinwu.repl.co/api/try/removebg?url=${encodeURIComponent(photoUrl)}`);
        const processedImageURL = response.data.image_data;

        const img = (await axios.get(processedImageURL, { responseType: "arraybuffer" })).data;

        fs.writeFileSync(pathie, Buffer.from(img, 'binary'));

        api.sendMessage({
          body: "✅ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖧𝖾𝗋𝖾'𝗌 𝗒𝗈𝗎𝗋 𝗂𝗆𝖺𝗀𝖾 𝗐𝗂𝗍𝗁𝗈𝗎𝗍 𝖻𝖺𝖼𝗄𝗀𝗋𝗈𝗎𝗇𝖽:",
          attachment: fs.createReadStream(pathie)
        }, threadID, () => fs.unlinkSync(pathie), messageID);
      } catch (error) {
        api.sendMessage(`❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝗂𝗇𝗀 𝗂𝗆𝖺𝗀𝖾: ${error}`, threadID, messageID);
      }
    });
  } catch (error) {
    api.sendMessage(`❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝗂𝗇𝗀 𝗂𝗆𝖺𝗀𝖾: ${error.message}`, event.threadID, event.messageID);
  }
};

module.exports.run = async function ({ api, event }) {};