module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Réynél",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "auto-resp",
  usages: "[just tag the admin haha]",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100080098527733") {
    var aid = ["100080098527733"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝖲𝖾𝗇𝗌𝖾𝗂, 𝗄𝗂𝗇𝖽𝗅𝗒 𝖽𝗈𝗇'𝗍 𝗆𝖾𝗇𝗍𝗂𝗈𝗇 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋. 🙂", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗂𝗌 𝖼𝗎𝗋𝗋𝖾𝗇𝗍𝗅𝗒 𝖻𝗎𝗌𝗒, 𝗄𝗂𝗇𝖽𝗅𝗒 𝗐𝖺𝗂𝗍 𝗁𝗂𝗆.", "𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗂𝗌 𝖻𝗎𝗌𝗒~~","𝖲𝖾𝗇𝗌𝖾𝗂, 𝖽𝗈 𝗒𝗈𝗎 𝗅𝗂𝗄𝖾 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗍𝗁𝖺𝗍'𝗌 𝗐𝗁𝗒 𝗒𝗈𝗎'𝗋𝖾 𝗍𝖺𝗀𝗀𝗂𝗇𝗀 𝗁𝗂𝗆?","𝖲𝖾𝗇𝗌𝖾𝗂, 𝖺𝗇𝗈𝗍𝗁𝖾𝗋 𝗆𝖾𝗇𝗍𝗂𝗈𝗇 𝗂𝗇 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝖺𝗇𝖽 𝖨 𝗐𝗂𝗅𝗅 𝗉𝗎𝗇𝖼𝗁 𝗒𝗈𝗎 𝗂𝗇 𝗍𝗁𝖾 𝖿𝖺𝖼𝖾. 🙂","𝖤𝗑𝖼𝗎𝗌𝖾 𝗆𝖾 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗂𝗌 𝗍𝖺𝗄𝗂𝗇𝗀 𝗌𝗈𝗆𝖾 𝗋𝖾𝗌𝗍 𝖺𝗍 𝗍𝗁𝗂𝗌 𝗍𝗂𝗆𝖾.","𝖲𝖾𝗇𝗌𝖾𝗂, 𝖽𝗈𝗇'𝗍 𝗆𝖾𝗇𝗍𝗂𝗈𝗇 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝖺𝗀𝖺𝗂𝗇, 𝗁𝖾'𝗌 𝖻𝗎𝗌𝗒.","𝖧𝖾𝗒 𝗍𝗁𝖾𝗋𝖾 𝗌𝖾𝗇𝗌𝖾𝗂, 𝗉𝖺𝗍𝗂𝖾𝗇𝗍𝗅𝗒 𝗐𝖺𝗂𝗍 𝗁𝗂𝗆 𝗈𝗄𝖺𝗒?","𝖨 𝗌𝖺𝗂𝖽 𝗌𝗍𝗈𝗉 𝗆𝖾𝗇𝗍𝗂𝗈𝗇𝗂𝗇𝗀 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋. 🙂","𝖨 𝗁𝗈𝗉𝖾 𝗒𝗈𝗎 𝖼𝖺𝗇 𝗐𝖺𝗂𝗍 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗌𝖾𝗇𝗌𝖾𝗂. 🙂","𝖲𝖾𝗇𝗌𝖾𝗂, 𝗆𝖺𝗒𝖻𝖾 𝗅𝖺𝗍𝖾𝗋, 𝗐𝗁𝖾𝗇 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝖺𝗋𝖾 𝖽𝗈𝗇𝖾 𝖽𝗈𝗂𝗇𝗀 𝗁𝗂𝗌 𝗈𝗐𝗇 𝗐𝗈𝗋𝗄𝗌.","𝖴𝗁𝗆 𝗌𝖾𝗇𝗌𝖾𝗂, 𝗐𝖺𝗂𝗍 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗈𝗄𝖺𝗒, 𝗌𝗍𝗈𝗉 𝗍𝖺𝗀𝗀𝗂𝗇𝗀 𝗁𝗂𝗆.","𝖲𝖾𝗇𝗌𝖾𝗂, 𝗌𝗂𝗍 𝖻𝖺𝖼𝗄 𝖺𝗇𝖽 𝗋𝖾𝗅𝖺𝗑, 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗂𝗌 𝗌𝗍𝗂𝗅𝗅 𝖻𝗎𝗌𝗒 𝗋𝗂𝗀𝗁𝗍 𝗇𝗈𝗐.","𝖲𝖾𝗇𝗌𝖾𝗂, 𝖽𝗈𝗇'𝗍 𝗒𝗈𝗎 𝗄𝗇𝗈𝗐 𝗁𝗈𝗐 𝗍𝗈 𝗐𝖺𝗂𝗍? 𝖻𝗋𝗎𝗁𝗁.","𝖲𝖾𝗇𝗌𝖾𝗂, 𝗌𝗍𝗈𝗉 𝗆𝖾𝗇𝗍𝗂𝗈𝗇𝗂𝗇𝗀 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗈𝗋 𝗒𝗈𝗎 𝗅𝗂𝗄𝖾 𝗁𝗂𝗆 𝗍𝗁𝖺𝗍𝗌 𝗐𝗁𝗒 𝗒𝗈𝗎'𝗋𝖾 𝗆𝖾𝗇𝗍𝗂𝗈𝗇𝗂𝗇𝗀 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗁𝗎𝗁?"];
      api.setMessageReaction("👁‍🗨", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}