module.exports.config = {
  name: "help12",
  version: "1.0.2",
  hasPermission: 0,
  credits: "Réynél",
  description: "( Help list )",
  commandCategory: "guides",
  usages: "[ Name module ]",
  cooldowns: 1,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 20
  }
};

module.exports.languages = {
  en: {
    moduleInfo: "{0} - {1}\n🎓 | 𝗨𝘀𝗮𝗴𝗲: {2}\n🎭 | 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆: {3}\n⏳ | 𝗖𝗼𝗼𝗹𝗱𝗼𝘄𝗻𝘀: {4} 𝗌𝖾𝖼𝗈𝗇𝖽𝗌\n👑 | 𝗣𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻: {5}\nℹ️ | 𝗖𝗿𝗲𝗱𝗶𝘁𝘀: {6}",
    user: "𝖴𝗌𝖾𝗋",
    adminGroup: "𝖠𝖽𝗆𝗂𝗇 (𝖦𝗋𝗈𝗎𝗉)",
    adminBot: "𝖠𝖽𝗆𝗂𝗇 (𝖡𝗈𝗍)"
  }
};

module.exports.handleEvent = function ({ api, event, getText }) {
  
};

module.exports.run = function ({ api, event, args, getText }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const command = commands.get((args[0] || "").toLowerCase());
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const { autoUnsend, delayUnsend } = global.configModule[module.exports.config.name];
  const prefix = threadSetting.hasOwnProperty("PREFIX")
    ? threadSetting.PREFIX
    : global.config.PREFIX;

  if (!command) {
    const arrayInfo = [];
    const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 10;
    let i = 0;
    let msg = "╔═════━━❖♡❖━━═════╗\n";

    for (const [name, value] of commands) {
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);

    const startSlice = numberOfOnePage * page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);

    for (const item of returnArray) msg += `  ╰➤ ${++i} ≫ ${formatFont(item)}\n`; 

    const text = `╚═════━━❖♡❖━━═════╝\n╭─────────────╮\n 𝑷𝑨𝑮𝑬   (${page}/${Math.ceil(
      arrayInfo.length / numberOfOnePage
    )})\n╰──────────────╯\n𝑻𝒚𝒑𝒆: °${prefix}𝑯𝒆𝒍𝒑𝟣𝟤\n𝑻𝒐𝒕𝒂𝒍 𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒔: ( ${
      arrayInfo.length
    } ) `;
    return api.sendMessage(
      msg + text,
      threadID,
      async (error, info) => {
        if (autoUnsend) {
          await new Promise((resolve) => setTimeout(resolve, delayUnsend * 10000));
          return api.unsendMessage(info.messageID);
        } else return;
      }
    );
  } else {
    return api.sendMessage(
      getText(
        "moduleInfo",
        command.config.name,
        command.config.description,
        `${prefix}${command.config.name} ${
          command.config.usages ? command.config.usages : ""
        }`,
        command.config.commandCategory,
        command.config.cooldowns,
        command.config.hasPermission === 0
          ? getText("user")
          : command.config.hasPermission === 1
          ? getText("adminGroup")
          : getText("adminBot"),
        command.config.credits
      ),
      threadID,
      messageID
    );
  }
};

function formatFont(_0x20b098) {
  const _0x4187f1 = {
    a: '𝖺', b: '𝖻', c: '𝖼', d: '𝖽', e: '𝖾', f: '𝖿', g: '𝗀', h: '𝗁', i: '𝗂', j: '𝗃',
    k: '𝗄', l: '𝗅', m: '𝗆', n: '𝗇', o: '𝗈', p: '𝗉', q: '𝗊', r: '𝗋', s: '𝗌', t: '𝗍',
    u: '𝗎', v: '𝗏', w: '𝗐', x: '𝗑', y: '𝗒', z: '𝗓',
  };

  let result = '';
  for (const char of _0x20b098) {
    if (_0x4187f1[char]) {
      result += _0x4187f1[char];
    } else {
      result += char;
    }
  }

  return result;
    }