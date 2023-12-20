const axios = require('axios');

module.exports.config = {
  name: "mbti",
  version: "1.0.0",
  credits: "Réynél",
  description: "Get description and traits for a specific MBTI personality type",
  commandCategory: "information",
  usages: "[personality type]",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
  const baseURL = "https://mbti.august-api.repl.co";
  const personalityType = args[0]?.toUpperCase();

  if (!personalityType) {
    return api.sendMessage("𝖳𝗁𝖾𝗋𝖾 𝖺𝗋𝖾 𝟣𝟨 𝖽𝗂𝗌𝗍𝗂𝗇𝖼𝗍 𝗉𝖾𝗋𝗌𝗈𝗇𝖺𝗅𝗂𝗍𝗒 𝗍𝗒𝗉𝖾𝗌 𝖿𝗈𝗋𝗆 𝗐𝗁𝗂𝖼𝗁 𝖼𝗈𝗇𝗌𝗂𝗌𝗍 𝗈𝖿 𝖽𝗂𝖿𝖿𝖾𝗋𝖾𝗇𝗍 𝖼𝗁𝖺𝗋𝖺𝖼𝗍𝖾𝗋𝗂𝗌𝗍𝗂𝖼𝗌 𝗎𝗇𝗂𝗊𝗎𝖾 𝗍𝗈 𝗍𝗁𝖺𝗍 𝗍𝗒𝗉𝖾. 𝖶𝗁𝖺𝗍 𝗂𝗌 𝗒𝗈𝗎𝗋 𝗍𝗒𝗉𝖾?\n\n𝗘𝗦𝗧𝗣: 𝖨 𝗉𝗋𝖾𝖿𝖾𝗋 𝗍𝗈 𝗁𝖺𝗏𝖾 𝖺 𝗌𝗍𝗋𝗎𝖼𝗍𝗎𝗋𝖾𝖽 𝖺𝗇𝖽 𝗉𝗅𝖺𝗇𝗇𝖾𝖽 𝖺𝗉𝗉𝗋𝗈𝖺𝖼𝗁 𝗍𝗈 𝗅𝗂𝖿𝖾. 𝖨 𝖺𝗆 𝗈𝗋𝗀𝖺𝗇𝗂𝗓𝖾𝖽 𝖺𝗇𝖽 𝖾𝖿𝖿𝗂𝖼𝗂𝖾𝗇𝗍 𝗂𝗇 𝗆𝗒 𝗍𝖺𝗌𝗄𝗌, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝖺𝖼𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝖺𝖽𝗏𝖾𝗇𝗍𝗎𝗋𝖾.\n\n𝗜𝗦𝗙𝗣: 𝖨 𝗉𝗋𝖾𝖿𝖾𝗋 𝖺 𝗆𝗈𝗋𝖾 𝗌𝗉𝗈𝗇𝗍𝖺𝗇𝖾𝗈𝗎𝗌 𝖺𝗇𝖽 𝖿𝗅𝖾𝗑𝗂𝖻𝗅𝖾 𝖺𝗉𝗉𝗋𝗈𝖺𝖼𝗁 𝗍𝗈 𝗅𝗂𝖿𝖾. 𝖨 𝖺𝗆 𝗈𝗉𝖾𝗇-𝗆𝗂𝗇𝖽𝖾𝖽 𝖺𝗇𝖽 𝖺𝖽𝖺𝗉𝗍𝖺𝖻𝗅𝖾 𝗍𝗈 𝖼𝗁𝖺𝗇𝗀𝖾, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝗂𝗍𝗒 𝖺𝗇𝖽 𝗌𝖾𝗅𝖿-𝖾𝗑𝗉𝗋𝖾𝗌𝗌𝗂𝗈𝗇.\n\n𝗜𝗦𝗙𝗝: 𝖨 𝗉𝗋𝖾𝖿𝖾𝗋 𝗍𝗈 𝗁𝖺𝗏𝖾 𝖺 𝗌𝗍𝗋𝗎𝖼𝗍𝗎𝗋𝖾𝖽 𝖺𝗇𝖽 𝗉𝗅𝖺𝗇𝗇𝖾𝖽 𝖺𝗉𝗉𝗋𝗈𝖺𝖼𝗁 𝗍𝗈 𝗅𝗂𝖿𝖾. 𝖨 𝖺𝗆 𝗈𝗋𝗀𝖺𝗇𝗂𝗓𝖾𝖽 𝖺𝗇𝖽 𝖾𝖿𝖿𝗂𝖼𝗂𝖾𝗇𝗍 𝗂𝗇 𝗆𝗒 𝗍𝖺𝗌𝗄𝗌, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝗌𝗍𝖺𝖻𝗂𝗅𝗂𝗍𝗒 𝖺𝗇𝖽 𝗌𝖾𝖼𝗎𝗋𝗂𝗍𝗒.\n\n𝗜𝗡𝗙𝗝: 𝖨 𝗉𝗋𝖾𝖿𝖾𝗋 𝖺 𝗆𝗈𝗋𝖾 𝗌𝗉𝗈𝗇𝗍𝖺𝗇𝖾𝗈𝗎𝗌 𝖺𝗇𝖽 𝖿𝗅𝖾𝗑𝗂𝖻𝗅𝖾 𝖺𝗉𝗉𝗋𝗈𝖺𝖼𝗁 𝗍𝗈 𝗅𝗂𝖿𝖾. 𝖨 𝖺𝗆 𝗈𝗉𝖾𝗇-𝗆𝗂𝗇𝖽𝖾𝖽 𝖺𝗇𝖽 𝖺𝖽𝖺𝗉𝗍𝖺𝖻𝗅𝖾 𝗍𝗈 𝖼𝗁𝖺𝗇𝗀𝖾, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝗂𝗍𝗒 𝖺𝗇𝖽 𝗈𝗋𝗂𝗀𝗂𝗇𝖺𝗅𝗂𝗍𝗒.\n\n𝗜𝗡𝗧𝗣: 𝖨 𝖺𝗆 𝗉𝗋𝗂𝗆𝖺𝗋𝗂𝗅𝗒 𝖿𝗈𝖼𝗎𝗌𝖾𝖽 𝗈𝗇 𝖿𝖺𝖼𝗍𝗌 𝖺𝗇𝖽 𝖽𝖺𝗍𝖺. 𝖨 𝗉𝗋𝖾𝖿𝖾𝗋 𝗍𝗈 𝗅𝖾𝖺𝗋𝗇 𝗍𝗁𝗋𝗈𝗎𝗀𝗁 𝗆𝗒 𝗌𝖾𝗇𝗌𝖾𝗌 𝖺𝗇𝖽 𝖺𝗆 𝖼𝗈𝗆𝖿𝗈𝗋𝗍𝖺𝖻𝗅𝖾 𝗐𝗂𝗍𝗁 𝖼𝗈𝗇𝖼𝗋𝖾𝗍𝖾 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇, 𝖺𝗇𝖽 𝖨 𝖾𝗇𝗃𝗈𝗒 𝗌𝗈𝗅𝗏𝗂𝗇𝗀 𝗉𝗎𝗓𝗓𝗅𝖾𝗌 𝖺𝗇𝖽 𝖿𝗂𝗇𝖽𝗂𝗇𝗀 𝗅𝗈𝗀𝗂𝖼𝖺𝗅 𝗌𝗈𝗅𝗎𝗍𝗂𝗈𝗇𝗌.\n\n𝗜𝗦𝗧𝗝: 𝖨 𝖺𝗆 𝗉𝗋𝗂𝗆𝖺𝗋𝗂𝗅𝗒 𝖿𝗈𝖼𝗎𝗌𝖾𝖽 𝗈𝗇 𝗂𝖽𝖾𝖺𝗌 𝖺𝗇𝖽 𝖼𝗈𝗇𝖼𝖾𝗉𝗍𝗌. 𝖨 𝗉𝗋𝖾𝖿𝖾𝗋 𝗍𝗈 𝗅𝖾𝖺𝗋𝗇 𝗍𝗁𝗋𝗈𝗎𝗀𝗁 𝖺𝖻𝗌𝗍𝗋𝖺𝖼𝗍 𝗍𝗁𝗈𝗎𝗀𝗁𝗍 𝖺𝗇𝖽 𝖺𝗆 𝖼𝗈𝗆𝖿𝗈𝗋𝗍𝖺𝖻𝗅𝖾 𝗐𝗂𝗍𝗁 𝗍𝗁𝖾𝗈𝗋𝖾𝗍𝗂𝖼𝖺𝗅 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝖺𝖼𝖼𝗎𝗋𝖺𝖼𝗒 𝖺𝗇𝖽 𝖺𝗍𝗍𝖾𝗇𝗍𝗂𝗈𝗇 𝗍𝗈 𝖽𝖾𝗍𝖺𝗂𝗅.\n\n𝗘𝗡𝗧𝗣: 𝖨 𝗆𝖺𝗄𝖾 𝖽𝖾𝖼𝗂𝗌𝗂𝗈𝗇𝗌 𝖻𝖺𝗌𝖾𝖽 𝗈𝗇 𝗅𝗈𝗀𝗂𝖼 𝖺𝗇𝖽 𝗋𝖾𝖺𝗌𝗈𝗇. 𝖨 𝖺𝗆 𝗈𝖻𝗃𝖾𝖼𝗍𝗂𝗏𝖾 𝖺𝗇𝖽 𝗂𝗆𝗉𝖺𝗋𝗍𝗂𝖺𝗅 𝗂𝗇 𝗆𝗒 𝗃𝗎𝖽𝗀𝗆𝖾𝗇𝗍𝗌, 𝖺𝗇𝖽 𝖨 𝖾𝗇𝗃𝗈𝗒 𝖽𝖾𝖻𝖺𝗍𝗂𝗇𝗀 𝖺𝗇𝖽 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝗂𝗇𝗀 𝗂𝖽𝖾𝖺𝗌, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝗂𝗇𝗍𝖾𝗅𝗅𝖾𝖼𝗍𝗎𝖺𝗅 𝗌𝗍𝗂𝗆𝗎𝗅𝖺𝗍𝗂𝗈𝗇.\n\n𝗘𝗦𝗙𝗣: 𝖨 𝗆𝖺𝗄𝖾 𝖽𝖾𝖼𝗂𝗌𝗂𝗈𝗇𝗌 𝖻𝖺𝗌𝖾𝖽 𝗈𝗇 𝖿𝖾𝖾𝗅𝗂𝗇𝗀𝗌 𝖺𝗇𝖽 𝗏𝖺𝗅𝗎𝖾𝗌. 𝖨 𝖺𝗆 𝗌𝗎𝖻𝗃𝖾𝖼𝗍𝗂𝗏𝖾 𝖺𝗇𝖽 𝖼𝗈𝗆𝗉𝖺𝗌𝗌𝗂𝗈𝗇𝖺𝗍𝖾 𝗂𝗇 𝗆𝗒 𝗃𝗎𝖽𝗀𝗆𝖾𝗇𝗍𝗌, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝗁𝖺𝗋𝗆𝗈𝗇𝗒 𝖺𝗇𝖽 𝗌𝗈𝖼𝗂𝖺𝗅 𝖼𝗈𝗇𝗇𝖾𝖼𝗍𝗂𝗈𝗇, 𝖺𝗇𝖽 𝖨 𝖾𝗇𝗃𝗈𝗒 𝗅𝗂𝗏𝗂𝗇𝗀 𝗂𝗇 𝗍𝗁𝖾 𝗉𝗋𝖾𝗌𝖾𝗇𝗍 𝗆𝗈𝗆𝖾𝗇𝗍.\n\n𝗘𝗡𝗧𝗝: 𝖨 𝗉𝗋𝖾𝖿𝖾𝗋 𝗍𝗈 𝗁𝖺𝗏𝖾 𝖺 𝗌𝗍𝗋𝗎𝖼𝗍𝗎𝗋𝖾𝖽 𝖺𝗇𝖽 𝗉𝗅𝖺𝗇𝗇𝖾𝖽 𝖺𝗉𝗉𝗋𝗈𝖺𝖼𝗁 𝗍𝗈 𝗅𝗂𝖿𝖾. 𝖨 𝖺𝗆 𝗈𝗋𝗀𝖺𝗇𝗂𝗓𝖾𝖽 𝖺𝗇𝖽 𝖾𝖿𝖿𝗂𝖼𝗂𝖾𝗇𝗍 𝗂𝗇 𝗆𝗒 𝗍𝖺𝗌𝗄𝗌, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝗅𝖾𝖺𝖽𝖾𝗋𝗌𝗁𝗂𝗉 𝖺𝗇𝖽 𝖼𝗈𝗇𝗍𝗋𝗈𝗅,𝖺𝗇𝖽 𝖨 𝖾𝗇𝗃𝗈𝗒 𝗆𝖺𝗄𝗂𝗇𝗀 𝖽𝖾𝖼𝗂𝗌𝗂𝗈𝗇𝗌 𝖺𝗇𝖽 𝗍𝖺𝗄𝗂𝗇𝗀 𝖼𝗁𝖺𝗋𝗀𝖾.\n\n𝗘𝗦𝗙𝗝: 𝖨 𝗉𝗋𝖾𝖿𝖾𝗋 𝖺 𝗆𝗈𝗋𝖾 𝗌𝗉𝗈𝗇𝗍𝖺𝗇𝖾𝗈𝗎𝗌 𝖺𝗇𝖽 𝖿𝗅𝖾𝗑𝗂𝖻𝗅𝖾 𝖺𝗉𝗉𝗋𝗈𝖺𝖼𝗁 𝗍𝗈 𝗅𝗂𝖿𝖾. 𝖨 𝖺𝗆 𝗈𝗉𝖾𝗇-𝗆𝗂𝗇𝖽𝖾𝖽 𝖺𝗇𝖽 𝖺𝖽𝖺𝗉𝗍𝖺𝖻𝗅𝖾 𝗍𝗈 𝖼𝗁𝖺𝗇𝗀𝖾, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝖼𝗈𝗈𝗉𝖾𝗋𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝗍𝖾𝖺𝗆𝗐𝗈𝗋𝗄, 𝖺𝗇𝖽 𝖨 𝖾𝗇𝗃𝗈𝗒 𝗁𝖾𝗅𝗉𝗂𝗇𝗀 𝗈𝗍𝗁𝖾𝗋𝗌 𝖺𝗇𝖽 𝗆𝖺𝗄𝗂𝗇𝗀 𝗍𝗁𝖾𝗆 𝖿𝖾𝖾𝗅 𝖼𝗈𝗆𝖿𝗈𝗋𝗍𝖺𝖻𝗅𝖾.\n\n𝗜𝗡𝗙𝗣: 𝖨 𝖺𝗆 𝗉𝗋𝗂𝗆𝖺𝗋𝗂𝗅𝗒 𝖿𝗈𝖼𝗎𝗌𝖾𝖽 𝗈𝗇 𝖿𝖾𝖾𝗅𝗂𝗇𝗀𝗌 𝖺𝗇𝖽 𝗏𝖺𝗅𝗎𝖾𝗌. 𝖨 𝖺𝗆 𝗌𝗎𝖻𝗃𝖾𝖼𝗍𝗂𝗏𝖾 𝖺𝗇𝖽 𝖼𝗈𝗆𝗉𝖺𝗌𝗌𝗂𝗈𝗇𝖺𝗍𝖾 𝗂𝗇 𝗆𝗒 𝗃𝗎𝖽𝗀𝗆𝖾𝗇𝗍𝗌, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝖺𝗎𝗍𝗁𝖾𝗇𝗍𝗂𝖼𝗂𝗍𝗒 𝖺𝗇𝖽 𝗌𝖾𝗅𝖿-𝖾𝗑𝗉𝗋𝖾𝗌𝗌𝗂𝗈𝗇, 𝖺𝗇𝖽 𝖨 𝖾𝗇𝗃𝗈𝗒 𝖾𝗑𝗉𝗅𝗈𝗋𝗂𝗇𝗀 𝗆𝗒 𝗂𝗇𝗇𝖾𝗋 𝗐𝗈𝗋𝗅𝖽 𝖺𝗇𝖽 𝗎𝗇𝖽𝖾𝗋𝗌𝗍𝖺𝗇𝖽𝗂𝗇𝗀 𝗈𝗍𝗁𝖾𝗋𝗌.\n\n𝗜𝗡𝗧𝗝: 𝖨 𝖺𝗆 𝗉𝗋𝗂𝗆𝖺𝗋𝗂𝗅𝗒 𝖿𝗈𝖼𝗎𝗌𝖾𝖽 𝗈𝗇 𝗂𝖽𝖾𝖺𝗌 𝖺𝗇𝖽 𝖼𝗈𝗇𝖼𝖾𝗉𝗍𝗌. 𝖨 𝗉𝗋𝖾𝖿𝖾𝗋 𝗍𝗈 𝗅𝖾𝖺𝗋𝗇 𝗍𝗁𝗋𝗈𝗎𝗀𝗁 𝖺𝖻𝗌𝗍𝗋𝖺𝖼𝗍 𝗍𝗁𝗈𝗎𝗀𝗁𝗍 𝖺𝗇𝖽 𝖺𝗆 𝖼𝗈𝗆𝖿𝗈𝗋𝗍𝖺𝖻𝗅𝖾 𝗐𝗂𝗍𝗁 𝗍𝗁𝖾𝗈𝗋𝖾𝗍𝗂𝖼𝖺𝗅 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝗂𝗇𝗍𝖾𝗅𝗅𝖾𝖼𝗍𝗎𝖺𝗅 𝗌𝗍𝗂𝗆𝗎𝗅𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝖺𝗇𝖺𝗅𝗒𝗌𝗂𝗌, 𝖺𝗇𝖽 𝖨 𝖾𝗇𝗃𝗈𝗒 𝖼𝗋𝖾𝖺𝗍𝗂𝗇𝗀 𝗇𝖾𝗐 𝗂𝖽𝖾𝖺𝗌 𝖺𝗇𝖽 𝖽𝖾𝗏𝖾𝗅𝗈𝗉𝗂𝗇𝗀 𝗍𝗁𝖾𝗈𝗋𝗂𝖾𝗌.\n\n𝗜𝗦𝗧𝗣: 𝖨 𝗆𝖺𝗄𝖾 𝖽𝖾𝖼𝗂𝗌𝗂𝗈𝗇𝗌 𝖻𝖺𝗌𝖾𝖽 𝗈𝗇 𝗅𝗈𝗀𝗂𝖼 𝖺𝗇𝖽 𝗋𝖾𝖺𝗌𝗈𝗇. 𝖨 𝖺𝗆 𝗈𝖻𝗃𝖾𝖼𝗍𝗂𝗏𝖾 𝖺𝗇𝖽 𝗂𝗆𝗉𝖺𝗋𝗍𝗂𝖺𝗅 𝗂𝗇 𝗆𝗒 𝗃𝗎𝖽𝗀𝗆𝖾𝗇𝗍𝗌, 𝖺𝗇𝖽 𝖨 𝖾𝗇𝗃𝗈𝗒 𝗉𝗋𝗈𝖻𝗅𝖾𝗆-𝗌𝗈𝗅𝗏𝗂𝗇𝗀 𝖺𝗇𝖽 𝖿𝗂𝗇𝖽𝗂𝗇𝗀 𝗉𝗋𝖺𝖼𝗍𝗂𝖼𝖺𝗅 𝗌𝗈𝗅𝗎𝗍𝗂𝗈𝗇𝗌, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝖾𝖿𝖿𝗂𝖼𝗂𝖾𝗇𝖼𝗒 𝖺𝗇𝖽 𝗀𝖾𝗍𝗍𝗂𝗇𝗀 𝗍𝗁𝗂𝗇𝗀𝗌 𝖽𝗈𝗇𝖾.\n\n𝗜𝗦𝗙𝗣: 𝖨 𝗆𝖺𝗄𝖾 𝖽𝖾𝖼𝗂𝗌𝗂𝗈𝗇𝗌 𝖻𝖺𝗌𝖾𝖽 𝗈𝗇 𝖿𝖾𝖾𝗅𝗂𝗇𝗀𝗌 𝖺𝗇𝖽 𝗏𝖺𝗅𝗎𝖾𝗌. 𝖨 𝖺𝗆 𝗌𝗎𝖻𝗃𝖾𝖼𝗍𝗂𝗏𝖾 𝖺𝗇𝖽 𝖼𝗈𝗆𝗉𝖺𝗌𝗌𝗂𝗈𝗇𝖺𝗍𝖾 𝗂𝗇 𝗆𝗒 𝗃𝗎𝖽𝗀𝗆𝖾𝗇𝗍𝗌, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝗁𝖺𝗋𝗆𝗈𝗇𝗒 𝖺𝗇𝖽 𝖺𝗎𝗍𝗁𝖾𝗇𝗍𝗂𝖼𝗂𝗍𝗒, 𝖺𝗇𝖽 𝖨 𝖾𝗇𝗃𝗈𝗒 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝗂𝗇𝗀 𝗇𝖾𝗐 𝗍𝗁𝗂𝗇𝗀𝗌 𝖺𝗇𝖽 𝖾𝗑𝗉𝗋𝖾𝗌𝗌𝗂𝗇𝗀 𝗆𝗒𝗌𝖾𝗅𝖿 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝖾𝗅𝗒.\n\n𝗘𝗡𝗙𝗣: 𝖨 𝗉𝗋𝖾𝖿𝖾𝗋 𝖺 𝗆𝗈𝗋𝖾 𝗌𝗉𝗈𝗇𝗍𝖺𝗇𝖾𝗈𝗎𝗌 𝖺𝗇𝖽 𝖿𝗅𝖾𝗑𝗂𝖻𝗅𝖾 𝖺𝗉𝗉𝗋𝗈𝖺𝖼𝗁 𝗍𝗈 𝗅𝗂𝖿𝖾. 𝖨 𝖺𝗆 𝗈𝗉𝖾𝗇-𝗆𝗂𝗇𝖽𝖾𝖽 𝖺𝗇𝖽 𝖺𝖽𝖺𝗉𝗍𝖺𝖻𝗅𝖾 𝗍𝗈 𝖼𝗁𝖺𝗇𝗀𝖾, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝗂𝗆𝖺𝗀𝗂𝗇𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝖾𝗑𝗉𝗅𝗈𝗋𝖺𝗍𝗂𝗈𝗇, 𝖺𝗇𝖽 𝖨 𝖾𝗇𝗃𝗈𝗒 𝖼𝗈𝗇𝗇𝖾𝖼𝗍𝗂𝗇𝗀 𝗐𝗂𝗍𝗁 𝗈𝗍𝗁𝖾𝗋𝗌 𝖺𝗇𝖽 𝗂𝗇𝗌𝗉𝗂𝗋𝗂𝗇𝗀 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝗂𝗍𝗒.\n\n𝗘𝗦𝗧𝗝: 𝖨 𝗉𝗋𝖾𝖿𝖾𝗋 𝗍𝗈 𝗁𝖺𝗏𝖾 𝖺 𝗌𝗍𝗋𝗎𝖼𝗍𝗎𝗋𝖾𝖽 𝖺𝗇𝖽 𝗉𝗅𝖺𝗇𝗇𝖾𝖽 𝖺𝗉𝗉𝗋𝗈𝖺𝖼𝗁 𝗍𝗈 𝗅𝗂𝖿𝖾. 𝖨 𝖺𝗆 𝗈𝗋𝗀𝖺𝗇𝗂𝗓𝖾𝖽 𝖺𝗇𝖽 𝖾𝖿𝖿𝗂𝖼𝗂𝖾𝗇𝗍 𝗂𝗇 𝗆𝗒 𝗍𝖺𝗌𝗄𝗌, 𝖺𝗇𝖽 𝖨 𝗏𝖺𝗅𝗎𝖾 𝗍𝗋𝖺𝖽𝗂𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝗈𝗋𝖽𝖾𝗋, 𝖺𝗇𝖽 𝖨 𝖾𝗇𝗃𝗈𝗒 𝗅𝖾𝖺𝖽𝗂𝗇𝗀 𝖺𝗇𝖽 𝗂𝗆𝗉𝗅𝖾𝗆𝖾𝗇𝗍𝗂𝗇𝗀 𝗉𝗋𝖺𝖼𝗍𝗂𝖼𝖺𝗅 𝗌𝗈𝗅𝗎𝗍𝗂𝗈𝗇𝗌.", event.threadID, event.messageID);
  }

  try {
    const response = await axios.get(`${baseURL}/mbti/${personalityType}`);
    const { type, description, traits } = response.data;

    const resultMessage = `𝗧𝗬𝗣𝗘: ${type}\n𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡: ${description}\n\n𝗧𝗥𝗔𝗜𝗧𝗦: ${traits}`;

    api.sendMessage(resultMessage, event.threadID, event.messageID);
  } catch (error) {
    console.error('ERROR', error.response?.data || error.message);
    api.sendMessage('❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝗂𝗇𝗀 𝗍𝗁𝖾 𝗋𝖾𝗊𝗎𝖾𝗌𝗍. 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋', event.threadID, event.messageID);
  }
};