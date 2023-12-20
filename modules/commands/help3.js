module.exports.config = {
 name: "help3",
 version: "2.0.0",
 hasPermssion: 0,
 credits: "Réynél",//You Can Change The Gif Or Img If You Want Just Put The Link Of Your Gif Or Img To The Var Link
 description: "commands list",
 commandCategory: "guides",
 usages: "[module name]",
 cooldowns: 1,
 envConfig: {
  autoUnsend: false,
  delayUnsend: 300
 }
};
 
module.exports.languages = {
 "en": {
  "moduleInfo": "─────[ %1 ]──────\n\n𝖴𝗌𝖺𝗀𝖾: %3\n𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗒: %4\n𝖶𝖺𝗂𝗍𝗂𝗇𝗀 𝗍𝗂𝗆𝖾: %5 𝗌𝖾𝖼𝗈𝗇𝖽𝗌(𝗌)\n𝖯𝖾𝗋𝗆𝗂𝗌𝗌𝗂𝗈𝗇: %6\n𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇: %2\n\n𝖬𝗈𝖽𝗎𝗅𝖾 𝖼𝗈𝖽𝖾𝖽 𝖻𝗒 %7",
  "helpList": '𝖳𝗁𝖾𝗋𝖾 𝖺𝗋𝖾 《%1》 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌 𝗈𝗇 𝗍𝗁𝗂𝗌 𝖻𝗈𝗍, 𝖴𝗌𝖾: 《%2𝗁𝖾𝗅𝗉𝟥 𝗇𝖺𝗆𝖾𝖢𝗈𝗆𝗆𝖺𝗇𝖽》 𝗍𝗈 𝗄𝗇𝗈𝗐 𝗁𝗈𝗐 𝗍𝗈 𝗎𝗌𝖾',
  "user": "𝖴𝗌𝖾𝗋",
  "adminGroup": "𝖠𝖽𝗆𝗂𝗇 𝗀𝗋𝗈𝗎𝗉",
  "adminBot": "𝖠𝖽𝗆𝗂𝗇 𝖻𝗈𝗍"
 }
};
 
module.exports.handleEvent = function ({ api, event, getText }) {
 const { commands } = global.client;
 const { threadID, messageID, body } = event;
 
 if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
 const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
 if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
 const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
 const command = commands.get(splitBody[1].toLowerCase());
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
 return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}
 
module.exports. run = function({ api, event, args, getText }) {
  const axios = require("axios");
  const request = require('request');
  const fs = require("fs-extra");
 const { commands } = global.client;
 const { threadID, messageID } = event;
 const command = commands.get((args[0] || "").toLowerCase());
 const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
 const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
if (args[0] == "all") {
    const command = commands.values();
    var group = [], msg = "";
    for (const commandConfig of command) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
    }
    group.forEach(commandGroup => msg += `☂︎ ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} \n${commandGroup.cmds.join(' • ')}\n\n`);
 
    return axios.get('https://loidsenpaihelpapi.miraiandgoat.repl.co').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let admID = "100080098527733";
     
      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");
    let callback = function () {
        api.sendMessage({ body:`𝖢𝗈𝗆𝗆𝖺𝗇𝖽𝗌 𝗅𝗂𝗌𝗍\n\n` + msg + `\n𝖲𝗉𝖺𝗆𝗆𝗂𝗇𝗀 𝗍𝗁𝖾 𝖻𝗈𝗍 𝖺𝗋𝖾 𝗌𝗍𝗋𝗂𝖼𝗍𝗅𝗒 𝗉𝗋𝗈𝗁𝗂𝖻𝗂𝗍𝖾𝖽\n\n𝖳𝗈𝗍𝖺𝗅 𝖢𝗈𝗆𝗆𝖺𝗇𝖽𝗌: ${commands.size}\n\n𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋:\n${firstname}`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
            attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/472.${ext}`);
        if (autoUnsend == false) {
            setTimeout(() => {
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
        }
        else return;
    }, event.messageID);
        }
         request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
     })
      })
};
 if (!command) {
  const arrayInfo = [];
  const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 10;
    let i = 0;
    let msg = "";
   
    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }
 
    arrayInfo.sort((a, b) => a.data - b.data);
   
const first = numberOfOnePage * page - numberOfOnePage;
    i = first;
    const helpView = arrayInfo.slice(first, first + numberOfOnePage);
 
   
    for (let cmds of helpView) msg += `╰┈➤》${cmds}\n`;
   
    const siu = ` 》『𝖯𝗋𝗈𝗃𝖾𝖼𝗍 𝖸𝗎𝗋𝗂 | ${global.config.BOTNAME}』\n𝖯𝖺𝗀𝖾 『${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}』`;
 
    const randomText = [ "𝖤𝗏𝖾𝗇 𝖺 𝗌𝗆𝖺𝗅𝗅 𝖺𝗆𝗈𝗎𝗇𝗍 𝗈𝖿 𝖺𝗅𝖼𝗈𝗁𝗈𝗅 𝗉𝗈𝗎𝗋𝖾𝖽 𝗈𝗇 𝖺 𝗌𝖼𝗈𝗋𝗉𝗂𝗈𝗇 𝗐𝗂𝗅𝗅 𝖽𝗋𝗂𝗏𝖾 𝗂𝗍 𝖼𝗋𝖺𝗓𝗒 𝖺𝗇𝖽 𝗌𝗍𝗂𝗇𝗀 𝗂𝗍𝗌𝖾𝗅𝖿 𝗍𝗈 𝖽𝖾𝖺𝗍𝗁."," 𝖳𝗁𝖾 𝖼𝗋𝗈𝖼𝗈𝖽𝗂𝗅𝖾 𝖼𝖺𝗇'𝗍 𝗌𝗍𝗂𝖼𝗄 𝗂𝗍𝗌 𝗍𝗈𝗇𝗀𝗎𝖾 𝗈𝗎𝗍.","𝖳𝗁𝖾 𝗈𝗅𝖽𝖾𝗌𝗍 𝗄𝗇𝗈𝗐𝗇 𝖺𝗇𝗂𝗆𝖺𝗅 𝗂𝗇 𝗍𝗁𝖾 𝗐𝗈𝗋𝗅𝖽 𝗂𝗌 𝖺 𝟦𝟢𝟧-𝗒𝖾𝖺𝗋-𝗈𝗅𝖽 𝗆𝖺𝗅𝖾, 𝖽𝗂𝗌𝖼𝗈𝗏𝖾𝗋𝖾𝖽 𝗂𝗇 𝟤𝟢𝟢𝟩.","𝖲𝗁𝖺𝗋𝗄𝗌, 𝗅𝗂𝗄𝖾 𝗈𝗍𝗁𝖾𝗋 𝖿𝗂𝗌𝗁, 𝗁𝖺𝗏𝖾 𝗍𝗁𝖾𝗂𝗋 𝗋𝖾𝗉𝗋𝗈𝖽𝗎𝖼𝗍𝗂𝗏𝖾 𝗈𝗋𝗀𝖺𝗇𝗌 𝗅𝗈𝖼𝖺𝗍𝖾𝖽 𝗂𝗇 𝗍𝗁𝖾 𝗋𝗂𝖻𝖼𝖺𝗀𝖾.","𝖳𝗁𝖾 𝖾𝗒𝖾𝗌 𝗈𝖿 𝗍𝗁𝖾 𝗈𝖼𝗍𝗈𝗉𝗎𝗌 𝗁𝖺𝗏𝖾 𝗇𝗈 𝖻𝗅𝗂𝗇𝖽 𝗌𝗉𝗈𝗍𝗌. 𝖮𝗇 𝖺𝗏𝖾𝗋𝖺𝗀𝖾, 𝗍𝗁𝖾 𝖻𝗋𝖺𝗂𝗇 𝗈𝖿 𝖺𝗇 𝗈𝖼𝗍𝗈𝗉𝗎𝗌 𝗁𝖺𝗌 𝟥𝟢𝟢 𝗆𝗂𝗅𝗅𝗂𝗈𝗇 𝗇𝖾𝗎𝗋𝗈𝗇𝗌. 𝖶𝗁𝖾𝗇 𝗎𝗇𝖽𝖾𝗋 𝖾𝗑𝗍𝗋𝖾𝗆𝖾 𝗌𝗍𝗋𝖾𝗌𝗌, 𝗌𝗈𝗆𝖾 𝗈𝖼𝗍𝗈𝗉𝗎𝗌𝖾𝗌 𝖾𝗏𝖾𝗇 𝖾𝖺𝗍 𝗍𝗁𝖾𝗂𝗋 𝗍𝗋𝗎𝗇𝗄𝗌.","𝖠𝗇 𝖾𝗅𝖾𝗉𝗁𝖺𝗇𝗍'𝗌 𝖻𝗋𝖺𝗂𝗇 𝗐𝖾𝗂𝗀𝗁𝗌 𝖺𝖻𝗈𝗎𝗍 𝟨,𝟢𝟢𝟢𝗀, 𝗐𝗁𝗂𝗅𝖾 𝖺 𝖼𝖺𝗍'𝗌 𝖻𝗋𝖺𝗂𝗇 𝗐𝖾𝗂𝗀𝗁𝗌 𝗈𝗇𝗅𝗒 𝖺𝗉𝗉𝗋𝗈𝗑𝗂𝗆𝖺𝗍𝖾𝗅𝗒 𝟥𝟢𝗀.","𝖢𝖺𝗍𝗌 𝖺𝗇𝖽 𝖽𝗈𝗀𝗌 𝗁𝖺𝗏𝖾 𝗍𝗁𝖾 𝖺𝖻𝗂𝗅𝗂𝗍𝗒 𝗍𝗈 𝗁𝖾𝖺𝗋 𝗎𝗅𝗍𝗋𝖺𝗌𝗈𝗎𝗇𝖽.","𝖲𝗁𝖾𝖾𝗉 𝖼𝖺𝗇 𝗌𝗎𝗋𝗏𝗂𝗏𝖾 𝗎𝗉 𝗍𝗈 𝟤 𝗐𝖾𝖾𝗄𝗌 𝗂𝗇 𝖺 𝗌𝗍𝖺𝗍𝖾 𝗈𝖿 𝖻𝖾𝗂𝗇𝗀 𝖻𝗎𝗋𝗂𝖾𝖽 𝗂𝗇 𝗌𝗇𝗈𝗐.","𝖳𝗁𝖾 𝗌𝗆𝖺𝗋𝗍𝖾𝗌𝗍 𝗉𝗂𝗀 𝗂𝗇 𝗍𝗁𝖾 𝗐𝗈𝗋𝗅𝖽 𝗂𝗌 𝗈𝗐𝗇𝖾𝖽 𝖻𝗒 𝖺 𝗆𝖺𝗍𝗁 𝗍𝖾𝖺𝖼𝗁𝖾𝗋 𝗂𝗇 𝖬𝖺𝖽𝗂𝗌𝗈𝗇, 𝖶𝗂𝗌𝖼𝗈𝗇𝗌𝗂𝗇 (𝖴𝖲𝖠). 𝖨𝗍 𝗁𝖺𝗌 𝗍𝗁𝖾 𝖺𝖻𝗂𝗅𝗂𝗍𝗒 𝗍𝗈 𝗆𝖾𝗆𝗈𝗋𝗂𝗓𝖾 𝗐𝗈𝗋𝗄𝗌𝗁𝖾𝖾𝗍𝗌 𝗆𝗎𝗅𝗍𝗂𝗉𝗅𝗒𝗂𝗇𝗀 𝗍𝗈 𝟣𝟤.","𝖲𝗍𝖺𝗍𝗂𝗌𝗍𝗂𝖼𝗌 𝗌𝗁𝗈𝗐 𝗍𝗁𝖺𝗍 𝖾𝖺𝖼𝗁 𝗋𝖺𝗍𝗍𝗅𝖾𝗌𝗇𝖺𝗄𝖾'𝗌 𝗆𝖺𝗍𝗂𝗇𝗀 𝗅𝖺𝗌𝗍𝗌 𝗎𝗉 𝗍𝗈 ... 𝗆𝗈𝗋𝖾 𝗍𝗁𝖺𝗇 𝟤𝟤 𝗁𝗈𝗎𝗋𝗌", "𝖲𝗍𝗎𝖽𝗂𝖾𝗌 𝗁𝖺𝗏𝖾 𝖿𝗈𝗎𝗇𝖽 𝗍𝗁𝖺𝗍 𝖿𝗅𝗂𝖾𝗌 𝖺𝗋𝖾 𝖽𝖾𝖺𝖿.","𝖨𝗇 𝖺 𝗅𝖺𝖼𝗄 𝗈𝖿 𝗐𝖺𝗍𝖾𝗋, 𝗄𝖺𝗇𝗀𝖺𝗋𝗈𝗈𝗌 𝖼𝖺𝗇 𝖾𝗇𝖽𝗎𝗋𝖾 𝗅𝗈𝗇𝗀𝖾𝗋 𝗍𝗁𝖺𝗇 𝖼𝖺𝗆𝖾𝗅𝗌.","","𝖣𝗈𝗀𝗌 𝗁𝖺𝗏𝖾 𝟦 𝗍𝗈𝖾𝗌 𝗈𝗇 𝗍𝗁𝖾𝗂𝗋 𝗁𝗂𝗇𝖽 𝗅𝖾𝗀𝗌 𝖺𝗇𝖽 𝟧 𝗍𝗈𝖾𝗌 𝗈𝗇 𝖾𝖺𝖼𝗁 𝗈𝖿 𝗍𝗁𝖾𝗂𝗋 𝖿𝗋𝗈𝗇𝗍 𝗉𝖺𝗐𝗌.","𝖳𝗁𝖾 𝖺𝗏𝖾𝗋𝖺𝗀𝖾 𝖿𝗅𝗂𝗀𝗁𝗍 𝗌𝗉𝖾𝖾𝖽 𝗈𝖿 𝗁𝗈𝗇𝖾𝗒 𝖻𝖾𝖾𝗌 𝗂𝗌 𝟤𝟦𝗄𝗆/𝗁. 𝖳𝗁𝖾𝗒 𝗇𝖾𝗏𝖾𝗋 𝗌𝗅𝖾𝖾𝗉.","𝖢𝗈𝖼𝗄𝗋𝗈𝖺𝖼𝗁𝖾𝗌 𝖼𝖺𝗇 𝗅𝗂𝗏𝖾 𝗎𝗉 𝗍𝗈 𝟫 𝖽𝖺𝗒𝗌 𝖺𝖿𝗍𝖾𝗋 𝗁𝖺𝗏𝗂𝗇𝗀 𝗍𝗁𝖾𝗂𝗋 𝗁𝖾𝖺𝖽𝗌 𝖼𝗎𝗍 𝗈𝖿𝖿.","𝖨𝖿 𝗒𝗈𝗎 𝗅𝖾𝖺𝗏𝖾 𝖺 𝗀𝗈𝗅𝖽𝖿𝗂𝗌𝗁 𝗂𝗇 𝗍𝗁𝖾 𝖽𝖺𝗋𝗄 𝖿𝗈𝗋 𝖺 𝗅𝗈𝗇𝗀 𝗍𝗂𝗆𝖾, 𝗂𝗍 𝗐𝗂𝗅𝗅 𝖾𝗏𝖾𝗇𝗍𝗎𝖺𝗅𝗅𝗒 𝗍𝗎𝗋𝗇 𝗐𝗁𝗂𝗍𝖾.","𝖳𝗁𝖾 𝖿𝗅𝗒𝗂𝗇𝗀 𝗋𝖾𝖼𝗈𝗋𝖽 𝖿𝗈𝗋 𝖺 𝖼𝗁𝗂𝖼𝗄𝖾𝗇 𝗂𝗌 𝟣𝟥 𝗌𝖾𝖼𝗈𝗇𝖽𝗌.","𝖳𝗁𝖾 𝗆𝗈𝗌𝗊𝗎𝗂𝗍𝗈 𝗍𝗁𝖺𝗍 𝖼𝖺𝗎𝗌𝖾𝗌 𝗍𝗁𝖾 𝗆𝗈𝗌𝗍 𝖽𝖾𝖺𝗍𝗁𝗌 𝗍𝗈 𝗁𝗎𝗆𝖺𝗇𝗌 𝗐𝗈𝗋𝗅𝖽𝗐𝗂𝖽𝖾 𝗂𝗌 𝗍𝗁𝖾 𝗆𝗈𝗌𝗊𝗎𝗂𝗍𝗈.","𝖳𝖳𝗁𝖾 𝗊𝗎𝖺𝖼𝗄 𝗈𝖿 𝖺 𝖽𝗎𝖼𝗄 𝖽𝗈𝖾𝗌𝗇'𝗍 𝗋𝖾𝗌𝗈𝗇𝖺𝗍𝖾, 𝖺𝗇𝖽 𝗇𝗈 𝗈𝗇𝖾 𝗄𝗇𝗈𝗐𝗌 𝗐𝗁𝗒.","𝖲𝖾𝖺 𝗉𝗈𝗇𝖽 𝗁𝖺𝗌 𝗇𝗈 𝖻𝗋𝖺𝗂𝗇. 𝖳𝗁𝖾𝗒 𝖺𝗋𝖾 𝖺𝗅𝗌𝗈 𝖺𝗆𝗈𝗇𝗀 𝗍𝗁𝖾 𝖿𝖾𝗐 𝖺𝗇𝗂𝗆𝖺𝗅𝗌 𝗍𝗁𝖺𝗍 𝖼𝖺𝗇 𝗍𝗎𝗋𝗇 𝗍𝗁𝖾𝗂𝗋 𝗌𝗍𝗈𝗆𝖺𝖼𝗁𝗌 𝗂𝗇𝗌𝗂𝖽𝖾 𝗈𝗎𝗍.","𝖳𝖾𝗋𝗆𝗂𝗍𝖾𝗌 𝖺𝗋𝖾 𝖺𝖼𝗍𝗂𝗏𝖾 𝟤𝟦 𝗁𝗈𝗎𝗋𝗌 𝖺 𝖽𝖺𝗒 𝖺𝗇𝖽 𝗍𝗁𝖾𝗒 𝖽𝗈 𝗇𝗈𝗍 𝗌𝗅𝖾𝖾𝗉. 𝖲𝗍𝗎𝖽𝗂𝖾𝗌 𝗁𝖺𝗏𝖾 𝖺𝗅𝗌𝗈 𝖿𝗈𝗎𝗇𝖽 𝗍𝗁𝖺𝗍 𝗍𝖾𝗋𝗆𝗂𝗍𝖾𝗌 𝗀𝗇𝖺𝗐 𝗐𝗈𝗈𝖽 𝗍𝗐𝗂𝖼𝖾 𝖺𝗌 𝖿𝖺𝗌𝗍 𝗐𝗁𝖾𝗇 𝗅𝗂𝗌𝗍𝖾𝗇𝗂𝗇𝗀 𝗍𝗈 𝗁𝖾𝖺𝗏𝗒 𝗋𝗈𝖼𝗄 𝗆𝗎𝗌𝗂𝖼.","𝖡𝖺𝖻𝗒 𝗀𝗂𝗋𝖺𝖿𝖿𝖾𝗌 𝗎𝗌𝗎𝖺𝗅𝗅𝗒 𝖿𝖺𝗅𝗅 𝖿𝗋𝗈𝗆 𝖺 𝗁𝖾𝗂𝗀𝗁𝗍 𝗈𝖿 𝟣.𝟪 𝗆𝖾𝗍𝖾𝗋𝗌 𝗐𝗁𝖾𝗇 𝗍𝗁𝖾𝗒 𝖺𝗋𝖾 𝖻𝗈𝗋𝗇.", "𝖠 𝗍𝗂𝗀𝖾𝗋 𝗇𝗈𝗍 𝗈𝗇𝗅𝗒 𝗁𝖺𝗌 𝖺 𝗌𝗍𝗋𝗂𝗉𝖾𝖽 𝖼𝗈𝖺𝗍, 𝖻𝗎𝗍 𝗍𝗁𝖾𝗂𝗋 𝗌𝗄𝗂𝗇 𝗂𝗌 𝖺𝗅𝗌𝗈 𝗌𝗍𝗋𝖾𝖺𝗄𝖾𝖽 𝗐𝗂𝗍𝗁 𝗌𝗍𝗋𝗂𝗉𝖾𝗌.."," 𝖵𝗎𝗅𝗍𝗎𝗋𝖾𝗌 𝖿𝗅𝗒 𝗐𝗂𝗍𝗁𝗈𝗎𝗍 𝖿𝗅𝖺𝗉𝗉𝗂𝗇𝗀 𝗍𝗁𝖾𝗂𝗋 𝗐𝗂𝗇𝗀𝗌.","𝖳𝗎𝗋𝗄𝖾𝗒𝗌 𝖼𝖺𝗇 𝗋𝖾𝗉𝗋𝗈𝖽𝗎𝖼𝖾 𝗐𝗂𝗍𝗁𝗈𝗎𝗍 𝗆𝖺𝗍𝗂𝗇𝗀.","𝖯𝖾𝗇𝗀𝗎𝗂𝗇𝗌 𝖺𝗋𝖾 𝗍𝗁𝖾 𝗈𝗇𝗅𝗒 𝖻𝗂𝗋𝖽𝗌 𝗍𝗁𝖺𝗍 𝖼𝖺𝗇 𝗌𝗐𝗂𝗆, 𝖻𝗎𝗍 𝗇𝗈𝗍 𝖿𝗅𝗒. 𝖭𝗈𝗋 𝗁𝖺𝗏𝖾 𝖺𝗇𝗒 𝗉𝖾𝗇𝗀𝗎𝗂𝗇𝗌 𝖻𝖾𝖾𝗇 𝖿𝗈𝗎𝗇𝖽 𝗂𝗇 𝗍𝗁𝖾 𝖠𝗋𝖼𝗍𝗂𝖼."," 𝖳𝗁𝖾 𝗏𝖾𝗇𝗈𝗆 𝗈𝖿 𝗍𝗁𝖾 𝗄𝗂𝗇𝗀 𝖼𝗈𝖻𝗋𝖺 𝗂𝗌 𝗌𝗈 𝗍𝗈𝗑𝗂𝖼 𝗍𝗁𝖺𝗍 𝗃𝗎𝗌𝗍 𝗈𝗇𝖾 𝗀𝗋𝖺𝗆 𝖼𝖺𝗇 𝗄𝗂𝗅𝗅 𝟣𝟧𝟢 𝗉𝖾𝗈𝗉𝗅𝖾.","𝖳𝗁𝖾 𝗏𝖾𝗇𝗈𝗆 𝗈𝖿 𝖺 𝗌𝗆𝖺𝗅𝗅 𝗌𝖼𝗈𝗋𝗉𝗂𝗈𝗇 𝗂𝗌 𝗆𝗎𝖼𝗁 𝗆𝗈𝗋𝖾 𝖽𝖺𝗇𝗀𝖾𝗋𝗈𝗎𝗌 𝗍𝗁𝖺𝗇 𝗍𝗁𝖾 𝗏𝖾𝗇𝗈𝗆 𝗈𝖿 𝖺 𝗅𝖺𝗋𝗀𝖾 𝗌𝖼𝗈𝗋𝗉𝗂𝗈𝗇.","𝖳𝗁𝖾 𝗅𝖾𝗇𝗀𝗍𝗁 𝗈𝖿 𝖺𝗇 𝗈𝗒𝗌𝗍𝖾𝗋'𝗌 𝗉𝖾𝗇𝗂𝗌 𝖼𝖺𝗇 𝖻𝖾 𝗌𝗈 '𝗆𝗈𝗇𝗌𝗍𝗋𝗈𝗎𝗌' 𝗍𝗁𝖺𝗍 𝗂𝗍 𝗂𝗌 𝟤𝟢 𝗍𝗂𝗆𝖾𝗌 𝗂𝗍𝗌 𝖻𝗈𝖽𝗒 𝗌𝗂𝗓𝖾!","𝖱𝖺𝗍'𝗌 𝗁𝖾𝖺𝗋𝗍 𝖻𝖾𝖺𝗍𝗌 𝟨𝟧𝟢 𝗍𝗂𝗆𝖾𝗌 𝗉𝖾𝗋 𝗆𝗂𝗇𝗎𝗍𝖾.","𝖳𝗁𝖾 𝖿𝗅𝖾𝖺 𝖼𝖺𝗇 𝗃𝗎𝗆𝗉 𝟥𝟧𝟢 𝗍𝗂𝗆𝖾𝗌 𝗂𝗍𝗌 𝖻𝗈𝖽𝗒 𝗅𝖾𝗇𝗀𝗍𝗁. 𝖨𝖿 𝗂𝗍 𝖺𝗅𝗌𝗈 𝗉𝗈𝗌𝗌𝖾𝗌𝗌𝖾𝖽 𝗍𝗁𝖺𝗍 𝖺𝖻𝗂𝗅𝗂𝗍𝗒, 𝖺 𝗁𝗎𝗆𝖺𝗇 𝗐𝗈𝗎𝗅𝖽 𝖻𝖾 𝖺𝖻𝗅𝖾 𝗍𝗈 𝗃𝗎𝗆𝗉 𝗍𝗁𝖾 𝗅𝖾𝗇𝗀𝗍𝗁 𝗈𝖿 𝖺 𝖿𝗈𝗈𝗍𝖻𝖺𝗅𝗅 𝖿𝗂𝖾𝗅𝖽 𝗈𝗇𝖼𝖾.","𝖳𝗁𝖾 𝖿𝖺𝗌𝗍𝖾𝗋 𝗍𝗁𝖾 𝗄𝖺𝗇𝗀𝖺𝗋𝗈𝗈 𝗃𝗎𝗆𝗉𝗌, 𝗍𝗁𝖾 𝗅𝖾𝗌𝗌 𝖾𝗇𝖾𝗋𝗀𝗒 𝗂𝗍 𝖼𝗈𝗇𝗌𝗎𝗆𝖾𝗌.","𝖤𝗅𝖾𝗉𝗁𝖺𝗇𝗍𝗌 𝖺𝗋𝖾 𝖺𝗆𝗈𝗇𝗀 𝗍𝗁𝖾 𝖿𝖾𝗐 𝗆𝖺𝗆𝗆𝖺𝗅𝗌 𝗍𝗁𝖺𝗍 𝖼𝖺𝗇'𝗍 𝗃𝗎𝗆𝗉! 𝖨𝗍 𝗐𝖺𝗌 𝖺𝗅𝗌𝗈 𝖽𝗂𝗌𝖼𝗈𝗏𝖾𝗋𝖾𝖽 𝗍𝗁𝖺𝗍 𝖾𝗅𝖾𝗉𝗁𝖺𝗇𝗍𝗌 𝗌𝗍𝗂𝗅𝗅 𝗌𝗍𝖺𝗇𝖽 𝖺𝖿𝗍𝖾𝗋 𝖽𝖾𝖺𝗍𝗁.","𝖲𝗉𝗂𝖽𝖾𝗋𝗌 𝗁𝖺𝗏𝖾 𝗍𝗋𝖺𝗇𝗌𝗉𝖺𝗋𝖾𝗇𝗍 𝖻𝗅𝗈𝗈𝖽."," 𝖲𝗇𝖺𝗂𝗅𝗌 𝖻𝗋𝖾𝖺𝗍𝗁𝖾 𝗐𝗂𝗍𝗁 𝗍𝗁𝖾𝗂𝗋 𝖿𝖾𝖾𝗍.","𝖲𝗈𝗆𝖾 𝗅𝗂𝗈𝗇𝗌 𝗆𝖺𝗍𝖾 𝗆𝗈𝗋𝖾 𝗍𝗁𝖺𝗇 𝟧𝟢 𝗍𝗂𝗆𝖾𝗌 𝖺 𝖽𝖺𝗒.","𝖬𝗈𝗎𝗌𝖾 𝗋𝖾𝗉𝗋𝗈𝖽𝗎𝖼𝖾 𝗌𝗈 𝗊𝗎𝗂𝖼𝗄𝗅𝗒 𝗍𝗁𝖺𝗍 𝗂𝗇 𝗃𝗎𝗌𝗍 𝟣𝟪 𝗆𝗈𝗇𝗍𝗁𝗌, 𝖿𝗋𝗈𝗆 𝗃𝗎𝗌𝗍 𝟤 𝗆𝗂𝖼𝖾, 𝗍𝗁𝖾 𝗆𝗈𝗍𝗁𝖾𝗋 𝖼𝖺𝗇 𝗀𝗂𝗏𝖾 𝖻𝗂𝗋𝗍𝗁 𝗍𝗈 𝟣 𝗆𝗂𝗅𝗅𝗂𝗈𝗇 𝗁𝖾𝗂𝗋𝗌.","𝖧𝖾𝖽𝗀𝖾𝗁𝗈𝗀 𝖿𝗅𝗈𝖺𝗍𝗌 𝗈𝗇 𝗐𝖺𝗍𝖾𝗋.","𝖠𝗅𝖾𝗑 𝗂𝗌 𝗍𝗁𝖾 𝗐𝗈𝗋𝗅𝖽'𝗌 𝖿𝗂𝗋𝗌𝗍 𝖠𝖿𝗋𝗂𝖼𝖺𝗇 𝗀𝗋𝖺𝗒 𝗉𝖺𝗋𝗋𝗈𝗍 𝗍𝗈 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇 𝗂𝗍𝗌 𝗈𝗐𝗇 𝖾𝗑𝗂𝗌𝗍𝖾𝗇𝖼𝖾: 𝖶𝗁𝖺𝗍 𝖼𝗈𝗅𝗈𝗋 𝖺𝗆 𝖨?.","𝖳𝗁𝖾 𝗋𝖾𝖺𝗌𝗈𝗇 𝗐𝗁𝗒 𝖿𝗅𝖺𝗆𝗂𝗇𝗀𝗈𝗌 𝖺𝗋𝖾 𝗉𝗂𝗇𝗄-𝗋𝖾𝖽 𝗂𝗇 𝖼𝗈𝗅𝗈𝗋 𝗂𝗌 𝖻𝖾𝖼𝖺𝗎𝗌𝖾 𝗍𝗁𝖾𝗒 𝖼𝖺𝗇 𝖺𝖻𝗌𝗈𝗋𝖻 𝗉𝗂𝗀𝗆𝖾𝗇𝗍𝗌 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗌𝗁𝖾𝗅𝗅𝗌 𝗈𝖿 𝗌𝗁𝗋𝗂𝗆𝗉 𝖺𝗇𝖽 𝗌𝗁𝗋𝗂𝗆𝗉 𝗍𝗁𝖺𝗍 𝗍𝗁𝖾𝗒 𝖾𝖺𝗍 𝖾𝗏𝖾𝗋𝗒 𝖽𝖺𝗒."," 𝖮𝗐𝗅𝗌 𝖺𝗇𝖽 𝗉𝗂𝗀𝖾𝗈𝗇𝗌 𝖼𝖺𝗇 𝗆𝖾𝗆𝗈𝗋𝗂𝗓𝖾 𝗁𝗎𝗆𝖺𝗇 𝖿𝖺𝖼𝖾𝗌", "𝖢𝗈𝗐𝗌 𝖺𝗋𝖾 𝗆𝗈𝗋𝖾 𝖽𝖺𝗇𝗀𝖾𝗋𝗈𝗎𝗌 𝗍𝗁𝖺𝗇 𝗌𝗁𝖺𝗋𝗄𝗌","𝖳𝗁𝖾 𝗌𝗂𝗇𝗀𝗅𝖾 𝗉𝖺𝗂𝗋 𝗈𝖿 𝗐𝗂𝗇𝗀𝗌 𝗈𝗇 𝗍𝗁𝖾 𝖻𝖺𝖼𝗄 𝖺𝗇𝖽 𝗍𝗁𝖾 𝗋𝖾𝖺𝗋 𝗌𝗍𝖺𝖻𝗂𝗅𝗂𝗓𝖾𝗋 𝗁𝖾𝗅𝗉 𝗍𝗁𝖾 𝖿𝗅𝗂𝖾𝗌 𝗍𝗈 𝖿𝗅𝗒 𝖼𝗈𝗇𝗍𝗂𝗇𝗎𝗈𝗎𝗌𝗅𝗒, 𝖻𝗎𝗍 𝗍𝗁𝖾𝗂𝗋 𝗅𝗂𝖿𝖾𝗌𝗉𝖺𝗇 𝗂𝗌 𝗇𝗈𝗍 𝗆𝗈𝗋𝖾 𝗍𝗁𝖺𝗇 𝟣𝟦 𝖽𝖺𝗒𝗌.","𝖶𝗂𝗍𝗁 𝖺 𝗉𝖺𝗂𝗋 𝗈𝖿 𝖾𝗇𝖽𝗅𝖾𝗌𝗌𝗅𝗒 𝗅𝗈𝗇𝗀 𝗅𝖾𝗀𝗌 𝗍𝗁𝖺𝗍 𝖼𝖺𝗇 𝖻𝖾 𝗎𝗉 𝗍𝗈 𝟣.𝟧 𝗆 𝗁𝗂𝗀𝗁 𝖺𝗇𝖽 𝗐𝖾𝗂𝗀𝗁 𝟤𝟢-𝟤𝟧 𝗄𝗀, 𝗍𝗁𝖾 𝗈𝗌𝗍𝗋𝗂𝖼𝗁 𝖼𝖺𝗇 𝗋𝗎𝗇 𝖿𝖺𝗌𝗍𝖾𝗋 𝗍𝗁𝖺𝗇 𝖺 𝗁𝗈𝗋𝗌𝖾. 𝖨𝗇 𝖺𝖽𝖽𝗂𝗍𝗂𝗈𝗇, 𝗆𝖺𝗅𝖾 𝗈𝗌𝗍𝗋𝗂𝖼𝗁𝖾𝗌 𝖼𝖺𝗇 𝗋𝗈𝖺𝗋 𝗅𝗂𝗄𝖾 𝖺 𝗅𝗂𝗈𝗇.","𝖪𝖺𝗇𝗀𝖺𝗋𝗈𝗈𝗌 𝗎𝗌𝖾 𝗍𝗁𝖾𝗂𝗋 𝗍𝖺𝗂𝗅𝗌 𝖿𝗈𝗋 𝖻𝖺𝗅𝖺𝗇𝖼𝖾, 𝗌𝗈 𝗂𝖿 𝗒𝗈𝗎 𝗅𝗂𝖿𝗍 𝖺 𝖪𝖺𝗇𝗀𝖺𝗋𝗈𝗈'𝗌 𝗍𝖺𝗂𝗅 𝗈𝖿𝖿 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗇𝖽, 𝗂𝗍 𝗐𝗈𝗇'𝗍 𝖻𝖾 𝖺𝖻𝗅𝖾 𝗍𝗈 𝗃𝗎𝗆𝗉 𝖺𝗇𝖽 𝗌𝗍𝖺𝗇𝖽.","𝖳𝗂𝗀𝖾𝗋𝗌 𝗇𝗈𝗍 𝗈𝗇𝗅𝗒 𝗁𝖺𝗏𝖾 𝗌𝗍𝗋𝗂𝗉𝖾𝗌 𝗈𝗇 𝗍𝗁𝖾𝗂𝗋 𝖻𝖺𝖼𝗄𝗌 𝖻𝗎𝗍 𝖺𝗅𝗌𝗈 𝗉𝗋𝗂𝗇𝗍𝖾𝖽 𝗈𝗇 𝗍𝗁𝖾𝗂𝗋 𝗌𝗄𝗂𝗇. 𝖤𝖺𝖼𝗁 𝗂𝗇𝖽𝗂𝗏𝗂𝖽𝗎𝖺𝗅 𝗍𝗂𝗀𝖾𝗋 𝗂𝗌 𝖻𝗈𝗋𝗇 𝗐𝗂𝗍𝗁 𝗂𝗍𝗌 𝗈𝗐𝗇 𝗎𝗇𝗂𝗊𝗎𝖾 𝗌𝗍𝗋𝗂𝗉𝖾.","𝖨𝖿 𝗒𝗈𝗎 𝖺𝗋𝖾 𝖻𝖾𝗂𝗇𝗀 𝖺𝗍𝗍𝖺𝖼𝗄𝖾𝖽 𝖻𝗒 𝖺 𝖼𝗋𝗈𝖼𝗈𝖽𝗂𝗅𝖾, 𝖽𝗈 𝗇𝗈𝗍 𝗍𝗋𝗒 𝗍𝗈 𝗀𝖾𝗍 𝗋𝗂𝖽 𝗈𝖿 𝗍𝗁𝖾𝗂𝗋 𝗌𝗁𝖺𝗋𝗉 𝗍𝖾𝖾𝗍𝗁 𝖻𝗒 𝗉𝗎𝗌𝗁𝗂𝗇𝗀 𝗍𝗁𝖾𝗆 𝖺𝗐𝖺𝗒. 𝖩𝗎𝗌𝗍 𝗉𝗈𝗄𝖾 𝗍𝗁𝖾 𝖼𝗋𝗈𝖼𝗈𝖽𝗂𝗅𝖾 𝗂𝗇 𝗍𝗁𝖾 𝖾𝗒𝖾, 𝗍𝗁𝖺𝗍'𝗌 𝗍𝗁𝖾𝗂𝗋 𝗐𝖾𝖺𝗄𝗇𝖾𝗌𝗌.","𝖥𝗅𝖾𝖺𝗌 𝖼𝖺𝗇 𝗃𝗎𝗆𝗉 𝗎𝗉 𝗍𝗈 𝟤𝟢𝟢 𝗍𝗂𝗆𝖾𝗌 𝗍𝗁𝖾𝗂𝗋 𝗁𝖾𝗂𝗀𝗁𝗍. 𝖳𝗁𝗂𝗌 𝗂𝗌 𝖾𝗊𝗎𝗂𝗏𝖺𝗅𝖾𝗇𝗍 𝗍𝗈 𝖺 𝗆𝖺𝗇 𝗃𝗎𝗆𝗉𝗂𝗇𝗀 𝗈𝗇 𝗍𝗁𝖾 𝖤𝗆𝗉𝗂𝗋𝖾 𝖲𝗍𝖺𝗍𝖾 𝖡𝗎𝗂𝗅𝖽𝗂𝗇𝗀 𝗂𝗇 𝖭𝖾𝗐 𝖸𝗈𝗋𝗄.","𝖠 𝖼𝖺𝗍 𝗁𝖺𝗌 𝗎𝗉 𝗍𝗈 𝟥𝟤 𝗆𝗎𝗌𝖼𝗅𝖾𝗌 𝗂𝗇 𝗍𝗁𝖾 𝖾𝖺𝗋. 𝖳𝗁𝖺𝗍 𝗆𝖺𝗄𝖾𝗌 𝗍𝗁𝖾𝗆 𝗁𝖺𝗏𝖾 𝗌𝗎𝗉𝖾𝗋𝗂𝗈𝗋 𝗁𝖾𝖺𝗋𝗂𝗇𝗀 𝖺𝖻𝗂𝗅𝗂𝗍𝗒","𝖪𝗈𝖺𝗅𝖺𝗌 𝗁𝖺𝗏𝖾 𝖺 𝗍𝖺𝗌𝗍𝖾 𝗍𝗁𝖺𝗍 𝖽𝗈𝖾𝗌 𝗇𝗈𝗍 𝖼𝗁𝖺𝗇𝗀𝖾 𝗍𝗁𝗋𝗈𝗎𝗀𝗁𝗈𝗎𝗍 𝗅𝗂𝖿𝖾, 𝗍𝗁𝖾𝗒 𝖾𝖺𝗍 𝖺𝗅𝗆𝗈𝗌𝗍 𝗇𝗈𝗍𝗁𝗂𝗇𝗀 𝖻𝗎𝗍.. 𝗅𝖾𝖺𝗏𝖾𝗌 𝗈𝖿 𝗍𝗁𝖾 𝖾𝗎𝖼𝖺𝗅𝗒𝗉𝗍𝗎𝗌 𝗍𝗋𝖾𝖾.","𝖳𝗁𝖾 𝖻𝖾𝖺𝗏𝖾𝗋'𝗌 𝗍𝖾𝖾𝗍𝗁 𝖽𝗈 𝗇𝗈𝗍 𝗌𝗍𝗈𝗉 𝗀𝗋𝗈𝗐𝗂𝗇𝗀 𝗍𝗁𝗋𝗈𝗎𝗀𝗁𝗈𝗎𝗍 𝗂𝗍𝗌 𝗅𝗂𝖿𝖾. 𝖨𝖿 𝗒𝗈𝗎 𝖽𝗈 𝗇𝗈𝗍 𝗐𝖺𝗇𝗍 𝗍𝗁𝖾 𝗍𝖾𝖾𝗍𝗁 𝗍𝗈 𝖻𝖾 𝗍𝗈𝗈 𝗅𝗈𝗇𝗀 𝖺𝗇𝖽 𝖽𝗂𝖿𝖿𝗂𝖼𝗎𝗅𝗍 𝗍𝗈 𝖼𝗈𝗇𝗍𝗋𝗈𝗅, 𝗍𝗁𝖾 𝖻𝖾𝖺𝗏𝖾𝗋 𝗆𝗎𝗌𝗍 𝖾𝖺𝗍 𝗁𝖺𝗋𝖽 𝖿𝗈𝗈𝖽𝗌 𝗍𝗈 𝗐𝖾𝖺𝗋 𝗍𝗁𝖾𝗆 𝖽𝗈𝗐𝗇.","𝖠𝗇𝗂𝗆𝖺𝗅𝗌 𝗅𝗂𝗏𝗂𝗇𝗀 𝗂𝗇 𝖼𝗈𝖺𝗌𝗍𝖺𝗅 𝖼𝗅𝗂𝖿𝖿𝗌 𝗈𝗋 𝖾𝗌𝗍𝗎𝖺𝗋𝗂𝖾𝗌 𝗁𝖺𝗏𝖾 𝖾𝗑𝗍𝗋𝖾𝗆𝖾𝗅𝗒 𝗐𝖾𝗂𝗋𝖽 𝖺𝖻𝗂𝗅𝗂𝗍𝗂𝖾𝗌. 𝖮𝗒𝗌𝗍𝖾𝗋𝗌 𝖼𝖺𝗇 𝖼𝗁𝖺𝗇𝗀𝖾 𝗌𝖾𝗑 𝗍𝗈 𝗆𝖺𝗍𝖼𝗁 𝗍𝗁𝖾 𝗆𝖺𝗍𝗂𝗇𝗀 𝗆𝖾𝗍𝗁𝗈𝖽.","𝖡𝗎𝗍𝗍𝖾𝗋𝖿𝗅𝗂𝖾𝗌 𝗁𝖺𝗏𝖾 𝖾𝗒𝖾𝗌 𝗐𝗂𝗍𝗁 𝗍𝗁𝗈𝗎𝗌𝖺𝗇𝖽𝗌 𝗈𝖿 𝗅𝖾𝗇𝗌𝖾𝗌 𝗌𝗂𝗆𝗂𝗅𝖺𝗋 𝗍𝗈 𝗍𝗁𝗈𝗌𝖾 𝗈𝗇 𝖼𝖺𝗆𝖾𝗋𝖺𝗌, 𝖻𝗎𝗍 𝗍𝗁𝖾𝗒 𝖼𝖺𝗇 𝗈𝗇𝗅𝗒 𝗌𝖾𝖾 𝗋𝖾𝖽, 𝗀𝗋𝖾𝖾𝗇, 𝖺𝗇𝖽 𝗒𝖾𝗅𝗅𝗈𝗐..","𝖣𝗈𝗇'𝗍 𝗍𝗋𝗒 𝗍𝗁𝗂𝗌 𝖺𝗍 𝗁𝗈𝗆𝖾, 𝗍𝗁𝖾 𝗍𝗋𝗎𝗍𝗁 𝗂𝗌 𝗍𝗁𝖺𝗍 𝗂𝖿 𝖺 𝗌𝗇𝖺𝗂𝗅 𝗅𝗈𝗌𝖾𝗌 𝖺𝗇 𝖾𝗒𝖾, 𝗂𝗍 𝖼𝖺𝗇 𝗋𝖾𝖼𝗈𝗏𝖾𝗋.","𝖦𝗂𝗋𝖺𝖿𝖿𝖾𝗌 𝖽𝗈 𝗇𝗈𝗍 𝗁𝖺𝗏𝖾 𝗏𝗈𝖼𝖺𝗅 𝖼𝗈𝗋𝖽𝗌 𝗅𝗂𝗄𝖾 𝗈𝗍𝗁𝖾𝗋 𝖺𝗇𝗂𝗆𝖺𝗅𝗌 𝗈𝖿 𝗍𝗁𝖾 𝗌𝖺𝗆𝖾 𝖿𝖺𝗆𝗂𝗅𝗒, 𝗍𝗁𝖾𝗂𝗋 𝗍𝗈𝗇𝗀𝗎𝖾𝗌 𝖺𝗋𝖾 𝖻𝗅𝗎𝖾-𝖻𝗅𝖺𝖼𝗄.","𝖣𝗈𝗀 𝗇𝗈𝗌𝖾 𝗉𝗋𝗂𝗇𝗍𝗌 𝖺𝗋𝖾 𝗅𝗂𝗄𝖾 𝗁𝗎𝗆𝖺𝗇 𝖿𝗂𝗇𝗀𝖾𝗋𝗉𝗋𝗂𝗇𝗍𝗌 𝖺𝗇𝖽 𝖼𝖺𝗇 𝖻𝖾 𝗎𝗌𝖾𝖽 𝗍𝗈 𝗂𝖽𝖾𝗇𝗍𝗂𝖿𝗒 𝖽𝗂𝖿𝖿𝖾𝗋𝖾𝗇𝗍 𝖽𝗈𝗀𝗌.",];
 const text = `\n━━━━━━━━━━━━━━━━\n\n╰┈➤𝟤𝟢𝟤𝟥 ${global.config.BOTNAME} 𝖡𝗈𝗍 | 𝖯𝗋𝗈𝗃𝖾𝖼𝗍 𝖸𝗎𝗋𝗂\n\n❈:𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖫𝖾𝗇𝗀𝗍𝗁: ${arrayInfo.length}\n✥:𝖡𝗈𝗍 𝖭𝖺𝗆𝖾: ${global.config.BOTNAME}\n❅:𝖯𝗋𝖾𝖿𝗂𝗑: ${global.config.PREFIX}`;
    var link = [
"https://i.imgur.com/PfioSJP.gif","https://i.imgur.com/6PArjh2.gif", "https://i.imgur.com/sclek83.gif", "https://i.imgur.com/c7jER2a.gif", "https://i.imgur.com/PAvBbgQ.gif", "https://i.imgur.com/YgMRrJW.gif", "https://i.imgur.com/IpuGKQ9.gif", "https://i.imgur.com/oHDlwaL.gif", "https://i.imgur.com/JlRBMeS.gif", "https://i.imgur.com/zQqhgM4.gif", "https://i.imgur.com/hrJJLu3.gif",
    ]
     var callback = () => api.sendMessage({ body: siu + "\n\n" + msg  + text, attachment: fs.createReadStream(__dirname + "/cache/loidbutter.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/loidbutter.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => callback());
 }
const leiamname = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);
 
  var link = [
"https://i.imgur.com/6PArjh2.gif",
  ]
    var callback = () => api.sendMessage({ body: leiamname, attachment: fs.createReadStream(__dirname + "/cache/loidbutter.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/loidbutter.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => callback());
};