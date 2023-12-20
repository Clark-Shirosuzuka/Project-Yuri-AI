module.exports.config = {
  name: "petmonsters",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Réynél",
  description: "Sun bears are alone together :))",
  commandCategory: "games",
  usages: "[-r/-s/-l/-p]",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":""
    }
};
/*==================== MESSAGE ======================*/
module.exports.run = ({ event, api, args, client, utils }) => {
    if (!args[0]) {
        api.sendMessage(`ℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗄𝗂𝗇𝖽𝗅𝗒 𝖾𝗇𝗍𝖾𝗋 𝗍𝖺𝗀𝗌: -𝖱/-𝖲/-𝖫/-𝖯`, event.threadID);
    } else {
        switch(args[0]) {
            case "-r": {
            return api.sendMessage(
                "🌟 | 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝗌𝗂𝗀𝗇𝖾𝖽 𝗎𝗉 𝗌𝖾𝗇𝗌𝖾𝗂!\n𝖸𝗈𝗎 𝖺𝗋𝖾 𝗇𝗈𝗐 𝗈𝖿𝖿𝗂𝖼𝗂𝖺𝗅𝗅𝗒 𝖻𝖾𝖼𝖺𝗆𝖾 𝖺 𝖼𝗈𝖺𝖼𝗁."
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-r"
                });
            }, event.messageID);
        }
        case "-s": {
            return api.sendMessage(
                "❁*°*•̩̩͙✩•̩̩͙*˚ ⟬🅡🅒🅑⟭ ˚*•̩̩͙✩•̩̩͙*˚*❁\n╓𝗦𝗛𝗢𝗣 𝗣𝗘𝗧𝗠𝗢𝗡𝗦𝗧𝗘𝗥𝗦╖\n\n1. 𝖥𝗈𝗈𝖽\n2. 𝖶𝖾𝖺𝗉𝗈𝗇𝗌\n3. 𝖠𝗋𝗆𝗈𝗋\n4. 𝖯𝖾𝗍\n╙┈┈┈♔◦☓◦☙◦♔◦☙◦☓◦♔┈┈┈╜\n‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊ ♡ °̩̥˚̩̩̥͙°̩̥ ·͙*̩̩͙˚̩̥̩̥*̩̩̥͙·̩̩̥͙*̩̩̥͙˚̩̥̩̥*̩̩͙‧͙ °̩̥˚̩̩̥͙°̩̥ ♡ ‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-s"
                });
            }, event.messageID);
        }
        case "-l": {
            return api.sendMessage(
                "❁*°*•̩̩͙✩•̩̩͙*˚ ⟬🅡🅒🅑⟭ ˚*•̩̩͙✩•̩̩͙*˚*❁\n‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊ ♡ °̩̥˚̩̩̥͙°̩̥ ·͙*̩̩͙˚̩̥̩̥*̩̩̥͙·̩̩̥͙*̩̩̥͙˚̩̥̩̥*̩̩͙‧͙ °̩̥˚̩̩̥͙°̩̥ ♡ ‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊\n\n1.𝖯𝖾𝗍 𝖿𝗂𝗋𝖾 𝗌𝗒𝗌𝗍𝖾𝗆\n2. 𝖯𝖾𝗍 𝗐𝖺𝗍𝖾𝗋 𝗌𝗒𝗌𝗍𝖾𝗆\n3. 𝖯𝖾𝗍 𝖾𝖺𝗋𝗍𝗁 𝗌𝗒𝗌𝗍𝖾𝗆\n4. 𝖯𝖾𝗍 𝗌𝗒𝗌𝗍𝖾𝗆\n5. 𝖯𝖾𝗍 𝗅𝗂𝗀𝗁𝗍 𝗌𝗒𝗌𝗍𝖾𝗆\n6. 𝖯𝖾𝗍 𝗌𝗁𝗈𝗐𝖾𝗋 𝗌𝗒𝗌𝗍𝖾𝗆\n⫸＊*•̩̩͙✩•̩̩͙*˚  ˚*•̩̩͙✩•̩̩͙*˚ ˚*•̩̩͙✩•̩̩͙*˚＊⫷\n‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊ ♡ °̩̥˚̩̩̥͙°̩̥ ·͙*̩̩͙˚̩̥̩̥*̩̩̥͙·̩̩̥͙*̩̩̥͙˚̩̥̩̥*̩̩͙‧͙ °̩̥˚̩̩̥͙°̩̥ ♡ ‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-l"
                });
            }, event.messageID);
        }
        case "-p": {
            return api.sendMessage(
                "ℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖼𝗈𝗆𝗂𝗇𝗀 𝗌𝗈𝗈𝗇..."
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-p"
                });
            }, event.messageID);
        }
            default:
            return utils.throwError("petmonsters", event.threadID, event.messageID); break;
        }
    }
};
/*====================== REPLY =========================*/
module.exports.handleReply = async function({ api, event, handleReply, client }) {
  switch(handleReply.type) {
    case "-s":
      switch(event.body) {
        case "1":
        return api.sendMessage(
                "❁*°*•̩̩͙✩•̩̩͙*˚ ⟬🅡🅒🅑⟭ ˚*•̩̩͙✩•̩̩͙*˚*❁\n╓┈♔◦☓◦☙𝗙𝗢𝗢𝗗☙◦☓◦♔┈╖\n\n1. 𝖥𝗂𝗌𝗁(𝟣𝟢𝟢$)\n𝖣𝗋𝗈𝗉 ❤ 𝗍𝗈 𝖻𝗎𝗒.\n\n2. 𝖢𝗈𝗎𝗇𝗍𝗋𝗒(𝟣𝟢𝟢$)\n𝖣𝗋𝗈𝗉 👍 𝗍𝗈 𝖻𝗎𝗒.\n\n3. 𝖥𝗋𝗎𝗂𝗍(𝟣𝟢𝟢$)\n𝖣𝗋𝗈𝗉 😢 𝗍𝗈 𝖻𝗎𝗒.\n\n╙┈┈┈♔◦☓◦☙◦♔◦☙◦☓◦♔┈┈┈╜\n‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊ ♡ °̩̥˚̩̩̥͙°̩̥ ·͙*̩̩͙˚̩̥̩̥*̩̩̥͙·̩̩̥͙*̩̩̥͙˚̩̥̩̥*̩̩͙‧͙ °̩̥˚̩̩̥͙°̩̥ ♡ ‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "FOOD"
                });
            }, event.messageID);
        case "2":
          return api.sendMessage(
                "❁*°*•̩̩͙✩•̩̩͙*˚ ⟬🅡🅒🅑⟭ ˚*•̩̩͙✩•̩̩͙*˚*❁\n╓┈♔◦☙𝗪𝗘𝗔𝗣𝗢𝗡𝗦☙◦♔┈╖\n\n1. 𝖲𝗐𝗈𝗋𝖽\n2. 𝖦𝗎𝗇𝗌\n3. 𝖲𝗁𝗂𝖾𝗅𝖽\n\n╙┈┈┈♔◦☓◦☙◦♔◦☙◦☓◦♔┈┈┈╜\n‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊ ♡ °̩̥˚̩̩̥͙°̩̥ ·͙*̩̩͙˚̩̥̩̥*̩̩̥͙·̩̩̥͙*̩̩̥͙˚̩̥̩̥*̩̩͙‧͙ °̩̥˚̩̩̥͙°̩̥ ♡ ‧̍̊·̊‧̥°̩̥˚̩̩̥͙°̩̥‧̥·̊‧̍̊"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "WEAPONS"
                });
            }, event.messageID);
          case "3":
          return api.sendMessage(
                "❁*°*•̩̩͙✩•̩̩͙*˚ ⟬🅡🅒🅑⟭ ˚*•̩̩͙✩•̩̩͙*˚*❁\n ╓┈♔☓☙𝗔𝗥𝗠𝗢𝗥☙☓♔┈╖\n\n1. 𝖫𝖾𝖺𝗍𝗁𝖾𝗋 𝖺𝗋𝗆𝗈𝗋\n2. 𝖢𝗈𝗆𝗂𝗇𝗀 𝗌𝗈𝗈𝗇...\n\n╙┈♔◦☓◦☙◦♔•♔◦☙◦☓◦♔┈╜"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "ARMOR"
                });
            }, event.messageID);
          case "4":
          return api.sendMessage("ℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖼𝗈𝗆𝗂𝗇𝗀 𝗌𝗈𝗈𝗇...",  event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "PET"
                });
            }, event.messageID);
                  }
      case "-l":
      switch(event.body) {
        case "1":
        return api.sendMessage("🌟 | 𝗡𝗮𝗺𝗲: 𝗍𝗁𝗋𝖾𝖾 𝗍𝗈𝗉 𝖽𝗈𝗀\n𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝗼𝗻: 𝖿𝗂𝗋𝖾\n𝗕𝗹𝗼𝗼𝗱: 𝟣𝟤𝟢\n𝗔𝘁𝘁𝗮𝗰𝗸: 𝟣𝟤𝟢\n𝗦𝗽𝗲𝗰𝗶𝗮𝗹 𝗦𝗸𝗶𝗹𝗹: 𝖻𝗋𝖾𝖺𝗍𝗁𝖾 𝗈𝗎𝗍 𝖿𝗂𝗋𝖾.", event.threadID); break;
        case "2":
          return api.sendMessage("🌟 | 𝗡𝗮𝗺𝗲: 𝗍𝗁𝗋𝖾𝖾-𝗍𝖺𝗂𝗅𝖾𝖽 𝖼𝗋𝗈𝖼𝗈𝖽𝗂𝗅𝖾\n𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝗼𝗻: 𝗐𝖺𝗍𝖾𝗋\n𝗕𝗹𝗼𝗼𝗱: 𝟣𝟤𝟢\n𝗔𝘁𝘁𝗮𝗰𝗸: 𝟣𝟤𝟢\n𝗦𝗽𝗲𝗰𝗶𝗮𝗹 𝗦𝗸𝗶𝗹𝗹: 𝗌𝗉𝗂𝗍 𝗈𝗎𝗍 𝗐𝖺𝗍𝖾𝗋", event.threadID); break;
          case "3":
          return api.sendMessage("🌟 | 𝗡𝗮𝗺𝗲: 𝖻𝖾𝖺𝗋 𝖽𝗈𝗀\n𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝗼𝗻: 𝗌𝗈𝗂𝗅\n𝗕𝗹𝗼𝗼𝗱: 𝟣𝟤𝟢\n𝗔𝘁𝘁𝗮𝗰𝗸: 𝟣𝟤𝟢\n𝗦𝗽𝗲𝗰𝗶𝗮𝗹 𝗦𝗸𝗶𝗹𝗹: 𝖾𝖺𝗋𝗍𝗁𝗊𝗎𝖺𝗄𝖾", event.threadID); break;
          case "4":
          return api.sendMessage("🌟 | 𝗡𝗮𝗺𝗲: 𝗀𝗂𝖺𝗇𝗍 𝗌𝗇𝖺𝗄𝖾\n𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝗼𝗻: 𝗀𝗋𝖺𝗌𝗌\n𝗕𝗹𝗼𝗼𝗱: 𝟣𝟤𝟢\n𝗔𝘁𝘁𝗮𝗰𝗸: 𝟣𝟤𝟢\n𝗦𝗽𝗲𝗰𝗶𝗮𝗹 𝗦𝗸𝗶𝗹𝗹: 𝗍𝗂𝖾𝖽 𝗎𝗉 𝗍𝗁𝖾 𝗏𝗂𝖼𝗍𝗂𝗆", event.threadID); break;
          case "5":
          return api.sendMessage("🌟 | 𝗡𝗮𝗺𝗲: 𝗍𝗁𝗋𝖾𝖾 𝗁𝖾𝖺𝖽𝖾𝖽 𝖽𝗋𝖺𝗀𝗈𝗇\n𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝗼𝗻: 𝗅𝗂𝗀𝗁𝗍\n𝗕𝗹𝗼𝗼𝗱: 𝟣𝟤𝟢\n𝗔𝘁𝘁𝗮𝗰𝗸: 𝟣𝟤𝟢\n𝗦𝗽𝗲𝗰𝗶𝗮𝗹 𝗦𝗸𝗶𝗹𝗹: 𝗌𝗁𝗈𝗐𝗐 𝗈𝖿𝖿 𝗌𝗈𝗆𝖾𝗍𝗁𝗂𝗇𝗀 𝗐𝗁𝗂𝗍𝖾 𝖺𝗇𝖽 𝗐𝗁𝗂𝗍𝖾", event.threadID); break;
          case "6":
          return api.sendMessage("🌟 | 𝗡𝗮𝗺𝗲: 𝖽𝖾𝗏𝗂𝗅\n𝗧𝘆𝗽𝗲: 𝖽𝖺𝗋𝗄𝗇𝖾𝗌𝗌\n𝗕𝗹𝗼𝗼𝗱: 𝟣𝟤𝟢\n𝗔𝘁𝘁𝗮𝗰𝗸: 𝟣𝟤𝟢\n𝗦𝗽𝗲𝗰𝗶𝗮𝗹 𝗦𝗸𝗶𝗹𝗹: 𝖽𝖺𝗋𝗄𝗇𝖾𝗌𝗌 𝖼𝗈𝗏𝖾𝗋𝗌, 𝖻𝗅𝗂𝗇𝖽 𝗍𝗁𝖾 𝗈𝗉𝗉𝗈𝗇𝖾𝗇𝗍𝗌 𝖾𝗒𝖾𝗌", event.threadID); break;
      }
  }
}