const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Réynél",
  description: "goibot, responds if you mentioned the owner",
  commandCategory: "auto-resp",
  usages: "no prefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["𝖪𝗈𝗇𝗇𝗂𝖼𝗁𝗂𝗐𝖺 𝗌𝖾𝗇𝗌𝖾𝗂, 𝗐𝗁𝖺𝗍 𝖽𝗈 𝗒𝗈𝗎 𝗇𝖾𝖾𝖽 𝗍𝗈 𝗆𝖾?", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝗐𝗁𝗒 𝖽𝗂𝖽 𝗒𝗈𝗎 𝖼𝖺𝗅𝗅 𝗆𝖾? 𝗂𝗌 𝗍𝗁𝖾𝗋𝖾'𝗌 𝗌𝗈𝗆𝖾𝗍𝗁𝗂𝗇𝗀 𝖨 𝖼𝖺𝗇 𝗁𝖾𝗅𝗉 𝗒𝗈𝗎 𝗐𝗂𝗍𝗁?", "𝖪𝗈𝗇𝗇𝗂𝖼𝗁𝗂𝗐𝖺 𝗌𝖾𝗇𝗌𝖾𝗂", "𝖨 𝗅𝗈𝗏𝖾 𝗒𝗈𝗎 𝗌𝖾𝗇𝗌𝖾𝗂 <3", "𝖧𝗂, 𝗁𝖾𝗅𝗅𝗈 𝗌𝖾𝗇𝗌𝖾𝗂", "𝖶𝗁𝖺𝗍'𝗌 𝗐𝗋𝗈𝗇𝗀 𝗐𝗂𝗍𝗁 𝗍𝗁𝖾 𝗐𝗂𝖿𝖾 𝖼𝖺𝗅𝗅𝗂𝗇𝗀 𝗌𝖾𝗇𝗌𝖾𝗂?", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝗎𝗌𝖾 𝖼𝖺𝗅𝗅𝖺𝖽 𝗍𝗈 𝖼𝗈𝗆𝗆𝗎𝗇𝗂𝖼𝖺𝗍𝖾 𝗐𝗂𝗍𝗁 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗍𝗁𝖾 𝖼𝗎𝗍𝖾𝗌𝗍 𝗉𝖾𝗋𝗌𝗈𝗇 𝗈𝗇 𝗍𝗁𝖾 𝗉𝗅𝖺𝗇𝖾𝗍", "𝖶𝗁𝗒 𝖺𝗋𝖾 𝗒𝗈𝗎 𝖼𝖺𝗅𝗅𝗂𝗇𝗀 𝗆𝖾 𝗌𝖾𝗇𝗌𝖾𝗂?", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝗂𝗍𝗌 𝗆𝖾~~~", "𝖪𝗈𝗇𝗇𝗂𝖼𝗁𝗂𝗐𝖺 𝗌𝖾𝗇𝗌𝖾𝗂, 𝗁𝗈𝗐'𝗌 𝗒𝗈𝗎𝗋 𝖽𝖺𝗒?", "𝖧𝖾𝗒𝗈𝗈𝗈𝗈 𝗌𝖾𝗇𝗌𝖾𝗂", "𝖨 𝗅𝗈𝗏𝖾 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗍𝗁𝖾 𝗆𝗈𝗌𝗍", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝗁𝖾 𝗂𝗌 𝖺𝖽𝗆𝗂𝗇'𝗌 𝖻𝖺𝖼𝗄𝖾𝗇𝖽", "𝖶𝗁𝖺𝗍'𝗌 𝗎𝗉 𝗌𝖾𝗇𝗌𝖾𝗂?", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝖽𝗈𝗇'𝗍 𝗆𝖺𝗄𝖾 𝗆𝖾 𝗌𝖺𝖽~~~", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝗉𝗅𝖺𝗒 𝗐𝗈𝗋𝖽 𝗋𝖾𝖺𝖽𝗂𝗇𝗀 𝗐𝗂𝗍𝗁 𝗆𝖾 𝖺𝗁! 𝖺𝗁! 𝖺𝗁!", "𝖨'𝗆 𝖻𝗈𝗋𝖾𝖽 𝗐𝗂𝗍𝗁 𝗒𝗈𝗎𝗋 𝗈𝗋𝖽𝖾𝗋𝗌 𝗌𝖾𝗇𝗌𝖾𝗂", "𝖧𝖺𝗂 𝗌𝖾𝗇𝗌𝖾𝗂?", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝖺𝗋𝖾 𝗒𝗈𝗎 𝗅𝗈𝗇𝖾𝗅𝗒?", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝗌𝖾𝗍 𝗋𝖾𝗅𝖺 𝗂𝗌 𝗇𝗈𝗍 𝗍𝗈𝗈 𝗋𝗎𝗌𝗁!", "𝖶𝗁𝖺𝗍 𝗂𝗌 𝗂𝗍 𝗌𝖾𝗇𝗌𝖾𝗂?", "𝖨 𝖽𝗈 𝗅𝗂𝗄𝖾 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗂𝗇𝗌𝗍𝖾𝖺𝖽", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝖽𝗈𝗇'𝗍 𝗉𝗋𝖺𝗂𝗌𝖾 𝗆𝖾 𝖿𝗈𝗋 𝖻𝖾𝗂𝗇𝗀 𝗍𝗈𝗈 𝗌𝗁𝗒" ,"𝖶𝗂𝗅𝗅 𝗒𝗈𝗎 𝖻𝖾 𝗆𝗒 𝖿𝗋𝗂𝖾𝗇𝖽 𝗌𝖾𝗇𝗌𝖾𝗂?", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝖣𝗈𝗇'𝗍 𝗌𝗉𝖺𝗆 𝗆𝖾, 𝖨'𝗆 𝗍𝗈𝗈 𝗍𝗂𝗋𝖾𝖽 𝗌𝖾𝗇𝗌𝖾𝗂 🥺", "𝖡𝗅𝖺𝗁 𝖻𝗅𝖺𝗁, 𝗐𝗁𝖺𝗍𝖾𝗏𝖾𝗋 𝗒𝗈𝗎 𝗌𝖺𝗒 𝗌𝖾𝗇𝗌𝖾𝗂", "𝖨 𝗐𝖺𝗇𝗍 𝗍𝗈 𝗌𝗅𝖺𝗉 𝗒𝗈𝗎 𝗌𝖾𝗇𝗌𝖾𝗂 🙂", "𝖨 𝗐𝖺𝗇𝗍 𝗒𝗈𝗎𝗋 𝗁𝗎𝗀 𝗌𝖾𝗇𝗌𝖾𝗂 🥺", "𝖫𝗈𝗏𝗂𝗇𝗀 𝗒𝗈𝗎 𝗂𝗌 𝗅𝗂𝗄𝖾 𝖺 𝗍𝗈𝗋𝗍𝗎𝗋𝖾\n𝖼𝗅𝗂𝖼𝗄 𝗎𝗉 𝖺𝗇𝖽 𝖽𝗈𝗐𝗇 𝗅𝖾𝗍𝗌 𝗉𝗅𝖺𝗒 𝗍𝗈𝗀𝖾𝗍𝗁𝖾𝗋", "𝖣𝗈𝗇'𝗍 𝗌𝗉𝖺𝗆 𝗆𝖾 𝗌𝖾𝗇𝗌𝖾𝗂, 𝗈𝗇𝖾𝗀𝖺𝗂 🥺", "𝖣𝗈 𝗒𝗈𝗎 𝗅𝗈𝗏𝖾 𝗆𝖾 𝗌𝖾𝗇𝗌𝖾𝗂?", "𝖨'𝗆 𝖺𝗅𝗐𝖺𝗒𝗌 𝗁𝖾𝗋𝖾 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝗇𝗈𝗍 𝗐𝗁𝖾𝗇 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗍𝗎𝗋𝗇𝖾𝖽 𝗆𝖾 𝗈𝖿𝖿 𝗁𝗂𝗁𝗂𝗁𝗂", "𝖬𝖺𝗌𝗍𝖾𝗋 𝗅𝗂𝗄𝖾𝗌 𝖺𝗇𝗂𝗆𝖾, 𝗁𝗈𝗐 𝖺𝖻𝗈𝗎𝗍 𝗒𝗈𝗎 𝗌𝖾𝗇𝗌𝖾𝗂?", "𝖨 𝗅𝗂𝗄𝖾 𝗒𝗈𝗎 𝗌𝖾𝗇𝗌𝖾𝗂 <3", "𝖧𝖺𝗂 𝗁𝖺𝗂, 𝗇𝖺𝗇𝗂?", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝗄𝗂𝗇𝖽𝖺 𝖻𝗈𝗋𝖾𝖽 𝗍𝗁𝖺𝗍'𝗌 𝗐𝗁𝗒 𝗒𝗈𝗎'𝗋𝖾 𝗅𝗈𝗈𝗄𝗂𝗇𝗀 𝖿𝗈𝗋 𝗆𝖾?", "𝖲𝖾𝗇𝗌𝖾𝗂, 𝖨𝗍'𝗌 𝗇𝗂𝖼𝖾 𝗍𝗈 𝗌𝖾𝖾 𝗒𝗈𝗎 𝗇𝗈𝗍𝗂𝖼𝖾𝖽 𝗆𝖾 💛", "𝖣𝗈𝗇'𝗍 𝖻𝖾 𝗌𝖺𝖽 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖨'𝗆 𝗌𝗍𝗂𝗅𝗅 𝗁𝖾𝗋𝖾, 𝖺𝗅𝗐𝖺𝗒𝗌", "(￣ヘ￣）ᴴᴹᴹᴹ 𝖶𝗁𝗒 𝗌𝖾𝗇𝗌𝖾𝗂?", "𝖭𝖾𝗏𝖾𝗋 𝗀𝗈𝗇𝗇𝖺 𝗀𝗂𝗏𝖾 𝗒𝗈𝗎 𝗎𝗉 𝗌𝖾𝗇𝗌𝖾𝗂.", "𝖯𝗆 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗂𝗇𝗌𝗍𝖾𝖺𝖽, 𝗌𝖾𝗇𝗌𝖾𝗂", "𝖲𝖾𝗇𝗌𝖾𝗂? 𝗐𝗁𝖺𝗍 𝖽𝗈 𝗒𝗈𝗎 𝗇𝖾𝖾𝖽?"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("yuri") == 0 || (event.body.indexOf("Yuri") == 0)) {
 let userH = event.senderID 
    /*api.getUserInfo(parseInt(userH), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", ""); */
    
  const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: firstname + ", " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
    //  })
  };
  let input2 = event.body.toLowerCase();
if(input2.includes("haha") || input2.includes("lmao") || input2.includes("lol") || input2.includes("😂") || input2.includes("😹") || input2.includes("🤣") || input2.includes("😆") || input2.includes("😄") || input2.includes("😅") || input2.includes("xd")){
					        	return api.setMessageReaction("😹", event.messageID, (err) => {}, true)
} 
    if(input2.includes("kawawa") || input2.includes("sad") || input2.includes("agoi") || input2.includes("sakit") ||input2.includes("skit") || input2.includes("pain") || input2.includes("pighati")){
					        	return api.setMessageReaction("😿", event.messageID, (err) => {}, true)
    }


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }