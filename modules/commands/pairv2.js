module.exports.config = {
  name: "pair2",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Réynél",
  description: "pair to someone inside of your group",
  commandCategory: "pair", 
  usages: "[pairv2]", 
  cooldowns: 0,
};
module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        var data = await Currencies.getData(event.senderID);
        var money = data.money
        if(money < 50) api.sendMessage(`ℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗒𝗈𝗎 𝗇𝖾𝖾𝖽 𝟧𝟢 𝖴𝖲𝖣 𝖿𝗈𝗋 𝟣 𝗉𝖺𝗂𝗋𝗂𝗇𝗀, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗎𝗌𝖾 ${global.config.PREFIX}𝖽𝖺𝗂𝗅𝗒 𝗍𝗈 𝗋𝖾𝖼𝗂𝖾𝗏𝖾 𝗆𝗈𝗇𝖾𝗒 𝗈𝗋 𝖺𝗌𝗄 𝖿𝗈𝗋 𝖺𝖽𝗆𝗂𝗇 𝖻𝗈𝗍.`,event.threadID,event.messageID)
        else {
        var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});
        api.changeNickname(`😘👉🔐🔐 ${name} 𝑷𝒓𝒐𝒑𝒆𝒓𝒕𝒚 🔐🔐👈😘`, event.threadID, event.senderID);
        api.changeNickname(`😘👉🔐🔐 ${namee} 𝑷𝒓𝒐𝒑𝒆𝒓𝒕𝒚 🔐🔐👈😘`, event.threadID, id);
        var sex = await data[id].gender;
        var gender = sex == 2 ? "Male🧑" : sex == 1 ? "Female👩‍🦰" : "Trần Đức Bo";
        Currencies.setData(event.senderID, options = {money: money - 50})
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
        var msg = {body: `𝖲𝖾𝗇𝗌𝖾𝗂, 𝖼𝗈𝗆𝗉𝗅𝖾𝗍𝖾𝖽 𝗍𝗁𝖾 𝗉𝖺𝗂𝗋𝗂𝗇𝗀 𝖻𝖺𝗋 𝗂𝗇 𝖾𝗑𝖼𝗁𝖺𝗇𝗀𝖾 𝗒𝗈𝗎 𝗅𝗈𝗌𝗍 𝟧𝟢 𝗎𝗌𝖽\n𝖲𝖾𝗇𝗌𝖾𝗂, 𝗒𝗈𝗎𝗋 𝗉𝖺𝗋𝗍𝗇𝖾𝗋 𝗂𝗌 𝗈𝖿 𝗍𝗁𝖾 𝗌𝖺𝗆𝖾 𝗀𝖾𝗇𝖽𝖾𝗋: ${gender}\n𝖣𝗎𝖺𝗅 𝗋𝖺𝗍𝗂𝗈: ${tle}\n`+namee+" "+"❤️"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
      }
  }