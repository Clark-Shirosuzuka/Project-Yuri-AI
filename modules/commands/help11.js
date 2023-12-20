module.exports.config = {
  name: "help11",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Clark", //  PUTANG INA MO WAG MONG PAPALITAN TONG CREDITS WAG KANG KUPAL GAGO..
  description: "Guide for new users",
  commandCategory: "guides",
  usages: "[help11] [module name]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

  const mathSansBold = {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜",
  J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥",
  S: "𝗦", T: "𝗧", U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭", a: "𝗔", b: "𝗕", c: "𝗖", d: "𝗗", e: "𝗘", f: "𝗙", g: "𝗚", h: "𝗛", i: "𝗜",
  j: "𝗝", k: "𝗞", l: "𝗟", m: "𝗠", n: "𝗡", o: "𝗢", p: "𝗣", q: "𝗤", r: "𝗥",
  s: "𝗦", t: "𝗧", u: "𝗨", v: "𝗩", w: "𝗪", x: "𝗫", y: "𝗬", z: "𝗭"
};

module.exports.handleEvent = function ({ api, event, getText }) {
  const { commands } = global.client;
  const { threadID, messageID, body } = event;

  if (!body || typeof body == "undefined" || body.indexOf("commands") != 0) return;
  const splitBody = body.slice(body.indexOf("commands")).trim().split(/\s+/);
  if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const command = commands.get(splitBody[1].toLowerCase());
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermission == 0) ? getText("user") : (command.config.hasPermission == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};

module.exports.run = async function ({ api, event, args }) {
  const uid = event.senderID;
  const userName = (await api.getUserInfo(uid))[uid].name;

  const { commands } = global.client;
  const { threadID, messageID } = event;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

  const categories = new Set();
  const categorizedCommands = new Map();

  for (const [name, value] of commands) {
    const categoryName = value.config.commandCategory;
    if (!categories.has(categoryName)) {
      categories.add(categoryName);
      categorizedCommands.set(categoryName, []);
    }
    categorizedCommands.get(categoryName).push(`│ ✧ ${value.config.name}`);
  }

  let msg = `𝖧𝖾𝗒 𝗌𝖾𝗇𝗌𝖾𝗂 ${userName}, 𝗍𝗁𝖾𝗌𝖾 𝖺𝗋𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌 𝗍𝗁𝖺𝗍 𝗆𝖺𝗒 𝗁𝖾𝗅𝗉 𝗒𝗈𝗎:\n`;

  for (const categoryName of categories) {
    const categoryNameSansBold = categoryName.split("").map(c => mathSansBold[c] || c).join("");
    msg += `╭─❍「 ${categoryNameSansBold} 」\n`;
    msg += categorizedCommands.get(categoryName).join("\n");
    msg += "\n╰───────────⟡\n";
  }

  const randomQuotes = [
  "𝖮𝖼𝗍𝗈𝗉𝗎𝗌𝖾𝗌 𝗁𝖺𝗏𝖾 𝗍𝗁𝗋𝖾𝖾 𝗁𝖾𝖺𝗋𝗍𝗌: 𝗍𝗐𝗈 𝗉𝗎𝗆𝗉 𝖻𝗅𝗈𝗈𝖽 𝗍𝗈 𝗍𝗁𝖾 𝗀𝗂𝗅𝗅𝗌, 𝖺𝗇𝖽 𝗈𝗇𝖾 𝗉𝗎𝗆𝗉𝗌 𝗂𝗍 𝗍𝗈 𝗍𝗁𝖾 𝗋𝖾𝗌𝗍 𝗈𝖿 𝗍𝗁𝖾 𝖻𝗈𝖽𝗒.",
    "𝖧𝗈𝗇𝖾𝗒 𝗇𝖾𝗏𝖾𝗋 𝗌𝗉𝗈𝗂𝗅𝗌; 𝖺𝗋𝖼𝗁𝖺𝖾𝗈𝗅𝗈𝗀𝗂𝗌𝗍𝗌 𝗁𝖺𝗏𝖾 𝖿𝗈𝗎𝗇𝖽 𝗉𝗈𝗍𝗌 𝗈𝖿 𝗁𝗈𝗇𝖾𝗒 𝗂𝗇 𝖺𝗇𝖼𝗂𝖾𝗇𝗍 𝖤𝗀𝗒𝗉𝗍𝗂𝖺𝗇 𝗍𝗈𝗆𝖻𝗌 𝗍𝗁𝖺𝗍 𝖺𝗋𝖾 𝗈𝗏𝖾𝗋 𝟥,𝟢𝟢𝟢 𝗒𝖾𝖺𝗋𝗌 𝗈𝗅𝖽.",
    "𝖳𝗁𝖾 𝗐𝗈𝗋𝗅𝖽'𝗌 𝗈𝗅𝖽𝖾𝗌𝗍 𝗄𝗇𝗈𝗐𝗇 𝗋𝖾𝖼𝗂𝗉𝖾 𝗂𝗌 𝖿𝗈𝗋 𝖻𝖾𝖾𝗋.",
    "𝖡𝖺𝗇𝖺𝗇𝖺𝗌 𝖺𝗋𝖾 𝖻𝖾𝗋𝗋𝗂𝖾𝗌, 𝖻𝗎𝗍 𝗌𝗍𝗋𝖺𝗐𝖻𝖾𝗋𝗋𝗂𝖾𝗌 𝖺𝗋𝖾 𝗇𝗈𝗍.",
    "𝖢𝗈𝗐𝗌 𝗁𝖺𝗏𝖾 𝖻𝖾𝗌𝗍 𝖿𝗋𝗂𝖾𝗇𝖽𝗌 𝖺𝗇𝖽 𝖼𝖺𝗇 𝖻𝖾𝖼𝗈𝗆𝖾 𝗌𝗍𝗋𝖾𝗌𝗌𝖾𝖽 𝗐𝗁𝖾𝗇 𝗍𝗁𝖾𝗒 𝖺𝗋𝖾 𝗌𝖾𝗉𝖺𝗋𝖺𝗍𝖾𝖽.",
    "𝖳𝗁𝖾 𝗌𝗁𝗈𝗋𝗍𝖾𝗌𝗍 𝗐𝖺𝗋 𝗂𝗇 𝗁𝗂𝗌𝗍𝗈𝗋𝗒 𝗐𝖺𝗌 𝖻𝖾𝗍𝗐𝖾𝖾𝗇 𝖡𝗋𝗂𝗍𝖺𝗂𝗇 𝖺𝗇𝖽 𝖹𝖺𝗇𝗓𝗂𝖻𝖺𝗋 𝗈𝗇 𝖠𝗎𝗀𝗎𝗌𝗍 𝟤𝟩, 𝟣𝟪𝟫𝟨; 𝖹𝖺𝗇𝗓𝗂𝖻𝖺𝗋 𝗌𝗎𝗋𝗋𝖾𝗇𝖽𝖾𝗋𝖾𝖽 𝖺𝖿𝗍𝖾𝗋 𝟥𝟪 𝗆𝗂𝗇𝗎𝗍𝖾𝗌.",
    "𝖳𝗁𝖾 𝖺𝗏𝖾𝗋𝖺𝗀𝖾 𝗉𝖾𝗋𝗌𝗈𝗇 𝗐𝖺𝗅𝗄𝗌 𝗍𝗁𝖾 𝖾𝗊𝗎𝗂𝗏𝖺𝗅𝖾𝗇𝗍 𝗈𝖿 𝗍𝗁𝗋𝖾𝖾 𝗍𝗂𝗆𝖾𝗌 𝖺𝗋𝗈𝗎𝗇𝖽 𝗍𝗁𝖾 𝗐𝗈𝗋𝗅𝖽 𝗂𝗇 𝖺 𝗅𝗂𝖿𝖾𝗍𝗂𝗆𝖾.",
    "𝖯𝗈𝗅𝖺𝗋 𝖻𝖾𝖺𝗋𝗌 𝖺𝗋𝖾 𝗅𝖾𝖿𝗍-𝗁𝖺𝗇𝖽𝖾𝖽.",
    "𝖳𝗁𝖾 𝗎𝗇𝗂𝖼𝗈𝗋𝗇 𝗂𝗌 𝖲𝖼𝗈𝗍𝗅𝖺𝗇𝖽'𝗌 𝗇𝖺𝗍𝗂𝗈𝗇𝖺𝗅 𝖺𝗇𝗂𝗆𝖺𝗅.",
    "𝖠 𝗀𝗋𝗈𝗎𝗉 𝗈𝖿 𝖿𝗅𝖺𝗆𝗂𝗇𝗀𝗈𝗌 𝗂𝗌 𝖼𝖺𝗅𝗅𝖾𝖽 𝖺 '𝖿𝗅𝖺𝗆𝖻𝗈𝗒𝖺𝗇𝖼𝖾'.",
    "𝖳𝗁𝖾𝗋𝖾 𝖺𝗋𝖾 𝗆𝗈𝗋𝖾 𝗉𝗈𝗌𝗌𝗂𝖻𝗅𝖾 𝗂𝗍𝖾𝗋𝖺𝗍𝗂𝗈𝗇𝗌 𝗈𝖿 𝖺 𝗀𝖺𝗆𝖾 𝗈𝖿 𝖼𝗁𝖾𝗌𝗌 𝗍𝗁𝖺𝗇 𝗍𝗁𝖾𝗋𝖾 𝖺𝗋𝖾 𝖺𝗍𝗈𝗆𝗌 𝗂𝗇 𝗍𝗁𝖾 𝗄𝗇𝗈𝗐𝗇 𝗎𝗇𝗂𝗏𝖾𝗋𝗌𝖾.",
    "𝖳𝗁𝖾 𝗌𝗆𝖾𝗅𝗅 𝗈𝖿 𝖿𝗋𝖾𝗌𝗁𝗅𝗒-𝖼𝗎𝗍 𝗀𝗋𝖺𝗌𝗌 𝗂𝗌 𝖺𝖼𝗍𝗎𝖺𝗅𝗅𝗒 𝖺 𝗉𝗅𝖺𝗇𝗍 𝖽𝗂𝗌𝗍𝗋𝖾𝗌𝗌 𝖼𝖺𝗅𝗅.",
    "𝖠 𝖽𝖺𝗒 𝗈𝗇 𝖵𝖾𝗇𝗎𝗌 𝗂𝗌 𝗅𝗈𝗇𝗀𝖾𝗋 𝗍𝗁𝖺𝗇 𝗂𝗍𝗌 𝗒𝖾𝖺𝗋.",
    "𝖧𝗈𝗇𝖾𝗒𝖻𝖾𝖾𝗌 𝖼𝖺𝗇 𝗋𝖾𝖼𝗈𝗀𝗇𝗂𝗓𝖾 𝗁𝗎𝗆𝖺𝗇 𝖿𝖺𝖼𝖾𝗌.",
    "𝖶𝗈𝗆𝖻𝖺𝗍 𝗉𝗈𝗈𝗉 𝗂𝗌 𝖼𝗎𝖻𝖾-𝗌𝗁𝖺𝗉𝖾𝖽.",
    "𝖳𝗁𝖾 𝖿𝗂𝗋𝗌𝗍 𝗈𝗋𝖺𝗇𝗀𝖾𝗌 𝗐𝖾𝗋𝖾𝗇'𝗍 𝗈𝗋𝖺𝗇𝗀𝖾.",
    "𝖳𝗁𝖾 𝗅𝗈𝗇𝗀𝖾𝗌𝗍 𝗍𝗂𝗆𝖾 𝖻𝖾𝗍𝗐𝖾𝖾𝗇 𝗍𝗐𝗈 𝗍𝗐𝗂𝗇𝗌 𝖻𝖾𝗂𝗇𝗀 𝖻𝗈𝗋𝗇 𝗂𝗌 𝟪𝟩 𝖽𝖺𝗒𝗌.",
    "𝖠 𝖻𝗈𝗅𝗍 𝗈𝖿 𝗅𝗂𝗀𝗁𝗍𝗇𝗂𝗇𝗀 𝗂𝗌 𝗌𝗂𝗑 𝗍𝗂𝗆𝖾𝗌 𝗁𝗈𝗍𝗍𝖾𝗋 𝗍𝗁𝖺𝗇 𝗍𝗁𝖾 𝗌𝗎𝗇.",
    "𝖠 𝖻𝖺𝖻𝗒 𝗉𝗎𝖿𝖿𝗂𝗇 𝗂𝗌 𝖼𝖺𝗅𝗅𝖾𝖽 𝖺 𝗉𝗎𝖿𝖿𝗅𝗂𝗇𝗀.",
    "𝖠 𝗃𝗂𝖿𝖿𝗒 𝗂𝗌 𝖺𝗇 𝖺𝖼𝗍𝗎𝖺𝗅 𝗎𝗇𝗂𝗍 𝗈𝖿 𝗍𝗂𝗆𝖾: 𝟣/𝟣𝟢𝟢𝗍𝗁 𝗈𝖿 𝖺 𝗌𝖾𝖼𝗈𝗇𝖽.",
    "𝖳𝗁𝖾 𝗐𝗈𝗋𝖽 '𝗇𝖾𝗋𝖽' 𝗐𝖺𝗌 𝖿𝗂𝗋𝗌𝗍 𝖼𝗈𝗂𝗇𝖾𝖽 𝖻𝗒 𝖣𝗋. 𝖲𝖾𝗎𝗌𝗌 𝗂𝗇 '𝖨𝖿 𝖨 𝖱𝖺𝗇 𝗍𝗁𝖾 𝖹𝗈𝗈'.",
    "𝖳𝗁𝖾𝗋𝖾'𝗌 𝖺 𝗌𝗉𝖾𝖼𝗂𝖾𝗌 𝗈𝖿 𝗃𝖾𝗅𝗅𝗒𝖿𝗂𝗌𝗁 𝗍𝗁𝖺𝗍 𝗂𝗌 𝖻𝗂𝗈𝗅𝗈𝗀𝗂𝖼𝖺𝗅𝗅𝗒 𝗂𝗆𝗆𝗈𝗋𝗍𝖺𝗅.",
    "𝖳𝗁𝖾 𝖤𝗂𝖿𝖿𝖾𝗅 𝖳𝗈𝗐𝖾𝗋 𝖼𝖺𝗇 𝖻𝖾 𝟨 𝗂𝗇𝖼𝗁𝖾𝗌 𝗍𝖺𝗅𝗅𝖾𝗋 𝖽𝗎𝗋𝗂𝗇𝗀 𝗍𝗁𝖾 𝗌𝗎𝗆𝗆𝖾𝗋 𝖽𝗎𝖾 𝗍𝗈 𝗍𝗁𝖾 𝖾𝗑𝗉𝖺𝗇𝗌𝗂𝗈𝗇 𝗈𝖿 𝗍𝗁𝖾 𝗂𝗋𝗈𝗇.",
    "𝖳𝗁𝖾 𝖤𝖺𝗋𝗍𝗁 𝗂𝗌 𝗇𝗈𝗍 𝖺 𝗉𝖾𝗋𝖿𝖾𝖼𝗍 𝗌𝗉𝗁𝖾𝗋𝖾; 𝗂𝗍'𝗌 𝗌𝗅𝗂𝗀𝗁𝗍𝗅𝗒 𝖿𝗅𝖺𝗍𝗍𝖾𝗇𝖾𝖽 𝖺𝗍 𝗍𝗁𝖾 𝗉𝗈𝗅𝖾𝗌 𝖺𝗇𝖽 𝖻𝗎𝗅𝗀𝗂𝗇𝗀 𝖺𝗍 𝗍𝗁𝖾 𝖾𝗊𝗎𝖺𝗍𝗈𝗋.",
    "𝖠 𝗁𝗎𝗆𝗆𝗂𝗇𝗀𝖻𝗂𝗋𝖽 𝗐𝖾𝗂𝗀𝗁𝗌 𝗅𝖾𝗌𝗌 𝗍𝗁𝖺𝗇 𝖺 𝗉𝖾𝗇𝗇𝗒.",
    "𝖪𝗈𝖺𝗅𝖺𝗌 𝗁𝖺𝗏𝖾 𝖿𝗂𝗇𝗀𝖾𝗋𝗉𝗋𝗂𝗇𝗍𝗌 𝗍𝗁𝖺𝗍 𝖺𝗋𝖾 𝗇𝖾𝖺𝗋𝗅𝗒 𝗂𝖽𝖾𝗇𝗍𝗂𝖼𝖺𝗅 𝗍𝗈 𝗁𝗎𝗆𝖺𝗇𝗌'.",
    "𝖳𝗁𝖾𝗋𝖾'𝗌 𝖺 𝗍𝗈𝗐𝗇 𝗂𝗇 𝖭𝗈𝗋𝗐𝖺𝗒 𝗐𝗁𝖾𝗋𝖾 𝗍𝗁𝖾 𝗌𝗎𝗇 𝖽𝗈𝖾𝗌𝗇'𝗍 𝗋𝗂𝗌𝖾 𝖿𝗈𝗋 𝗌𝖾𝗏𝖾𝗋𝖺𝗅 𝗐𝖾𝖾𝗄𝗌 𝗂𝗇 𝗍𝗁𝖾 𝗐𝗂𝗇𝗍𝖾𝗋, 𝖺𝗇𝖽 𝗂𝗍 𝖽𝗈𝖾𝗌𝗇'𝗍 𝗌𝖾𝗍 𝖿𝗈𝗋 𝗌𝖾𝗏𝖾𝗋𝖺𝗅 𝗐𝖾𝖾𝗄𝗌 𝗂𝗇 𝗍𝗁𝖾 𝗌𝗎𝗆𝗆𝖾𝗋.",
    "𝖠 𝗀𝗋𝗈𝗎𝗉 𝗈𝖿 𝗈𝗐𝗅𝗌 𝗂𝗌 𝖼𝖺𝗅𝗅𝖾𝖽 𝖺 𝗉𝖺𝗋𝗅𝗂𝖺𝗆𝖾𝗇𝗍.",
    "𝖳𝗁𝖾 𝖿𝗂𝗇𝗀𝖾𝗋𝗉𝗋𝗂𝗇𝗍𝗌 𝗈𝖿 𝖺 𝗄𝗈𝖺𝗅𝖺 𝖺𝗋𝖾 𝗌𝗈 𝗂𝗇𝖽𝗂𝗌𝗍𝗂𝗇𝗀𝗎𝗂𝗌𝗁𝖺𝖻𝗅𝖾 𝖿𝗋𝗈𝗆 𝗁𝗎𝗆𝖺𝗇𝗌' 𝗍𝗁𝖺𝗍 𝗍𝗁𝖾𝗒 𝗁𝖺𝗏𝖾 𝗈𝗇 𝗈𝖼𝖼𝖺𝗌𝗂𝗈𝗇 𝖻𝖾𝖾𝗇 𝖼𝗈𝗇𝖿𝗎𝗌𝖾𝖽 𝖺𝗍 𝖺 𝖼𝗋𝗂𝗆𝖾 𝗌𝖼𝖾𝗇𝖾.",
    "𝖳𝗁𝖾 𝖧𝖺𝗐𝖺𝗂𝗂𝖺𝗇 𝖺𝗅𝗉𝗁𝖺𝖻𝖾𝗍 𝗁𝖺𝗌 𝗈𝗇𝗅𝗒 𝟣𝟥 𝗅𝖾𝗍𝗍𝖾𝗋𝗌.",
    "𝖳𝗁𝖾 𝖺𝗏𝖾𝗋𝖺𝗀𝖾 𝗉𝖾𝗋𝗌𝗈𝗇 𝗌𝗉𝖾𝗇𝖽𝗌 𝗌𝗂𝗑 𝗆𝗈𝗇𝗍𝗁𝗌 𝗈𝖿 𝗍𝗁𝖾𝗂𝗋 𝗅𝗂𝖿𝖾 𝗐𝖺𝗂𝗍𝗂𝗇𝗀 𝖿𝗈𝗋 𝗋𝖾𝖽 𝗅𝗂𝗀𝗁𝗍𝗌 𝗍𝗈 𝗍𝗎𝗋𝗇 𝗀𝗋𝖾𝖾𝗇.",
    "𝖠 𝗇𝖾𝗐𝖻𝗈𝗋𝗇 𝗄𝖺𝗇𝗀𝖺𝗋𝗈𝗈 𝗂𝗌 𝖺𝖻𝗈𝗎𝗍 𝟣 𝗂𝗇𝖼𝗁 𝗅𝗈𝗇𝗀.",
    "𝖳𝗁𝖾 𝗈𝗅𝖽𝖾𝗌𝗍 𝗄𝗇𝗈𝗐𝗇 𝗅𝗂𝗏𝗂𝗇𝗀 𝗍𝗋𝖾𝖾 𝗂𝗌 𝗈𝗏𝖾𝗋 𝟧,𝟢𝟢𝟢 𝗒𝖾𝖺𝗋𝗌 𝗈𝗅𝖽.",
    "𝖢𝗈𝖼𝖺-𝖢𝗈𝗅𝖺 𝗐𝗈𝗎𝗅𝖽 𝖻𝖾 𝗀𝗋𝖾𝖾𝗇 𝗂𝖿 𝖼𝗈𝗅𝗈𝗋𝗂𝗇𝗀 𝗐𝖺𝗌𝗇'𝗍 𝖺𝖽𝖽𝖾𝖽 𝗍𝗈 𝗂𝗍.",
    "𝖠 𝖽𝖺𝗒 𝗈𝗇 𝖬𝖺𝗋𝗌 𝗂𝗌 𝖺𝖻𝗈𝗎𝗍 𝟤𝟦.𝟨 𝗁𝗈𝗎𝗋𝗌 𝗅𝗈𝗇𝗀.",
    "𝖳𝗁𝖾 𝖦𝗋𝖾𝖺𝗍 𝖶𝖺𝗅𝗅 𝗈𝖿 𝖢𝗁𝗂𝗇𝖺 𝗂𝗌 𝗇𝗈𝗍 𝗏𝗂𝗌𝗂𝖻𝗅𝖾 𝖿𝗋𝗈𝗆 𝗌𝗉𝖺𝖼𝖾 𝗐𝗂𝗍𝗁𝗈𝗎𝗍 𝖺𝗂𝖽.",
    "𝖠 𝗀𝗋𝗈𝗎𝗉 𝗈𝖿 𝖼𝗋𝗈𝗐𝗌 𝗂𝗌 𝖼𝖺𝗅𝗅𝖾𝖽 𝖺 𝗆𝗎𝗋𝖽𝖾𝗋.",
    "𝖳𝗁𝖾𝗋𝖾'𝗌 𝖺 𝗉𝗅𝖺𝖼𝖾 𝗂𝗇 𝖥𝗋𝖺𝗇𝖼𝖾 𝗐𝗁𝖾𝗋𝖾 𝗒𝗈𝗎 𝖼𝖺𝗇 𝗐𝗂𝗍𝗇𝖾𝗌𝗌 𝖺𝗇 𝗈𝗉𝗍𝗂𝖼𝖺𝗅 𝗂𝗅𝗅𝗎𝗌𝗂𝗈𝗇 𝗍𝗁𝖺𝗍 𝗆𝖺𝗄𝖾𝗌 𝗒𝗈𝗎 𝖺𝗉𝗉𝖾𝖺𝗋 𝗍𝗈 𝗀𝗋𝗈𝗐 𝖺𝗇𝖽 𝗌𝗁𝗋𝗂𝗇𝗄 𝖺𝗌 𝗒𝗈𝗎 𝗐𝖺𝗅𝗄 𝖽𝗈𝗐𝗇 𝖺 𝗁𝗂𝗅𝗅.",
    "𝖳𝗁𝖾 𝗐𝗈𝗋𝗅𝖽'𝗌 𝗅𝖺𝗋𝗀𝖾𝗌𝗍 𝖽𝖾𝗌𝖾𝗋𝗍 𝗂𝗌 𝖠𝗇𝗍𝖺𝗋𝖼𝗍𝗂𝖼𝖺, 𝗇𝗈𝗍 𝗍𝗁𝖾 𝖲𝖺𝗁𝖺𝗋𝖺.",
    "𝖠 𝖻𝗅𝗎𝖾 𝗐𝗁𝖺𝗅𝖾'𝗌 𝗁𝖾𝖺𝗋𝗍 𝗂𝗌 𝗌𝗈 𝖻𝗂𝗀 𝗍𝗁𝖺𝗍 𝖺 𝗁𝗎𝗆𝖺𝗇 𝖼𝗈𝗎𝗅𝖽 𝗌𝗐𝗂𝗆 𝗍𝗁𝗋𝗈𝗎𝗀𝗁 𝗂𝗍𝗌 𝖺𝗋𝗍𝖾𝗋𝗂𝖾𝗌.",
    "𝖳𝗁𝖾 𝗅𝗈𝗇𝗀𝖾𝗌𝗍 𝗐𝗈𝗋𝖽 𝗂𝗇 𝗍𝗁𝖾 𝖤𝗇𝗀𝗅𝗂𝗌𝗁 𝗅𝖺𝗇𝗀𝗎𝖺𝗀𝖾 𝗐𝗂𝗍𝗁𝗈𝗎𝗍 𝖺 𝗏𝗈𝗐𝖾𝗅 𝗂𝗌 '𝗋𝗁𝗒𝗍𝗁𝗆𝗌'.",
    "𝖯𝗈𝗅𝖺𝗋 𝖻𝖾𝖺𝗋𝗌' 𝖿𝗎𝗋 𝗂𝗌 𝗇𝗈𝗍 𝗐𝗁𝗂𝗍𝖾; 𝗂𝗍'𝗌 𝖺𝖼𝗍𝗎𝖺𝗅𝗅𝗒 𝗍𝗋𝖺𝗇𝗌𝗉𝖺𝗋𝖾𝗇𝗍.",
    "𝖳𝗁𝖾 𝖾𝗅𝖾𝖼𝗍𝗋𝗂𝖼 𝖼𝗁𝖺𝗂𝗋 𝗐𝖺𝗌 𝗂𝗇𝗏𝖾𝗇𝗍𝖾𝖽 𝖻𝗒 𝖺 𝖽𝖾𝗇𝗍𝗂𝗌𝗍.",
    "𝖠𝗇 𝗈𝗌𝗍𝗋𝗂𝖼𝗁'𝗌 𝖾𝗒𝖾 𝗂𝗌 𝖻𝗂𝗀𝗀𝖾𝗋 𝗍𝗁𝖺𝗇 𝗂𝗍𝗌 𝖻𝗋𝖺𝗂𝗇.",
    "𝖶𝗈𝗆𝖻𝖺𝗍 𝗉𝗈𝗈𝗉 𝗂𝗌 𝖼𝗎𝖻𝖾-𝗌𝗁𝖺𝗉𝖾𝖽."
  ];

  const randomQuote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];

  msg += `├─────☾⋆\n│ » 𝗧𝗼𝘁𝗮𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀: [ ${commands.size} ]\n│「 ☾⋆ 𝗣𝗥𝗘𝗙𝗜𝗫:   ${global.config.PREFIX} 」\n╰──────────⧕\n\n𝗥𝗔𝗡𝗗𝗢𝗠 𝗙𝗔𝗖𝗧: ${randomQuote}\n\n𝗢𝘄𝗻𝗲𝗿: ${global.config.BOTOWNER}`;
  

  return api.sendMessage(msg, threadID, async (error, info) => {
    if (autoUnsend) {
      await new Promise(resolve => setTimeout(resolve, delayUnsend * 60000));
      return api.unsendMessage(info.messageID);
    } else return;
  });
};
  