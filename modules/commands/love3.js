const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "love3",
  version: "6.0.0",
  hasPermission: 0,
  credits: "Réynél",
  description: "Check love compatibility and chances of a successful love relationship!",
  commandCategory: "love",
  usages: "[your name] [partner name]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  try {
    if (args.length !== 2) {
      api.sendMessage("ℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗄𝗂𝗇𝖽𝗅𝗒 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝗍𝗐𝗈 𝗇𝖺𝗆𝖾𝗌 𝖿𝗈𝗋 𝗅𝗈𝗏𝖾 𝖼𝗈𝗆𝗉𝖺𝗍𝗂𝖻𝗂𝗅𝗂𝗍𝗒 𝖼𝗁𝖾𝖼𝗄", event.threadID, event.messageID);
      return;
    }

    const [yourName, partnerName] = args;
    const compatibilityScore = calculateCompatibility(yourName, partnerName);
    const compatibilityMessage = getCompatibilityMessage(compatibilityScore);
    const additionalInfo = getAdditionalInfo(compatibilityScore);
    const passionLevel = getPassionLevel(compatibilityScore);
    const commitmentLevel = getCommitmentLevel(compatibilityScore);
    const communicationLevel = getCommunicationLevel(compatibilityScore);
    const humorLevel = getHumorLevel(compatibilityScore);
    const trustLevel = getTrustLevel(compatibilityScore);
    const emotionalIntimacy = getEmotionalIntimacy(compatibilityScore);
    const sharedValues = getSharedValues(compatibilityScore);
    const growthPotential = getGrowthPotential(compatibilityScore);

    const resultMessage = `💖 | 𝗟𝗢𝗩𝗘 𝗖𝗢𝗠𝗣𝗔𝗧𝗜𝗕𝗜𝗟𝗜𝗧𝗬 𝗖𝗛𝗘𝗖𝗞\n━━━━━━━━━━━━━━━━━━━\n${yourName} + ${partnerName}\n\n${compatibilityMessage}\n\n${additionalInfo}\n\n𝗣𝗮𝘀𝘀𝗶𝗼𝗻 𝗟𝗲𝘃𝗲𝗹: ${passionLevel}\n𝗖𝗼𝗺𝗺𝗶𝘁𝗺𝗲𝗻𝘁 𝗟𝗲𝘃𝗲𝗹: ${commitmentLevel}\n𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗟𝗲𝘃𝗲𝗹: ${communicationLevel}\n𝗛𝘂𝗺𝗼𝗿 𝗟𝗲𝘃𝗲𝗹: ${humorLevel}\n𝗧𝗿𝘂𝘀𝘁 𝗟𝗲𝘃𝗲𝗹: ${trustLevel}\n𝗘𝗺𝗼𝘁𝗶𝗼𝗻𝗮𝗹 𝗜𝗻𝘁𝗶𝗺𝗮𝗰𝘆: ${emotionalIntimacy}\n𝗦𝗵𝗮𝗿𝗲𝗱 𝗩𝗮𝗹𝘂𝗲𝘀: ${sharedValues}\n𝗚𝗿𝗼𝘄𝘁𝗵 𝗣𝗼𝘁𝗲𝗻𝘁𝗶𝗮𝗹: ${growthPotential}\n\n𝗖𝗼𝗺𝗽𝗮𝘁𝗶𝗯𝗶𝗹𝗶𝘁𝘆 𝗦𝗰𝗼𝗿𝗲: ${compatibilityScore}%`;

    const response = await axios.get("https://i.ibb.co/fM1k55L/3ypE.gif", { responseType: 'arraybuffer' });
    fs.writeFileSync(__dirname + "/cache/lovecompatibility.gif", Buffer.from(response.data, "utf-8"));

    api.sendMessage(
      {
        body: resultMessage,
        attachment: fs.createReadStream(__dirname + "/cache/lovecompatibility.gif"),
      },
      event.threadID, event.messageID
    );

    fs.unlinkSync(__dirname + "/cache/lovecompatibility.gif");
  } catch (error) {
    console.error("Error checking love compatibility:", error);
    api.sendMessage("❎ | 𝖦𝗈𝗆𝖾𝗇𝗇𝖺𝗌𝖺𝗂 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝖾𝗋𝗋𝗈𝗋 𝖼𝗁𝖾𝖼𝗄𝗂𝗇𝗀 𝗅𝗈𝗏𝖾 𝖼𝗈𝗆𝗉𝖺𝗍𝗂𝖻𝗂𝗅𝗂𝗍𝗒. 𝖳𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗐𝗂𝗍𝗁 𝖽𝗂𝖿𝖿𝖾𝗋𝖾𝗇𝗍 𝗇𝖺𝗆𝖾𝗌!", event.threadID, event.messageID);
  }
};

function calculateCompatibility(name1, name2) {

  const combinedNames = (name1 + name2).toLowerCase();
  const uniqueLetters = [...new Set(combinedNames)];
  const compatibilityScore = uniqueLetters.length * 10;

  return Math.min(compatibilityScore, 100);
}

function getCompatibilityMessage(score) {
  if (score >= 80) {
    return "🌟 | 𝖸𝗈𝗎'𝗋𝖾 𝖺 𝗉𝖾𝗋𝖿𝖾𝖼𝗍 𝗆𝖺𝗍𝖼𝗁 𝗆𝖺𝖽𝖾 𝗂𝗇 𝗁𝖾𝖺𝗏𝖾𝗇!";
  } else if (score >= 60) {
    return "💑 | 𝖸𝗈𝗎𝗋 𝗅𝗈𝗏𝖾 𝗂𝗌 𝗌𝗍𝗋𝗈𝗇𝗀 𝖺𝗇𝖽 𝗉𝗋𝗈𝗆𝗂𝗌𝗂𝗇𝗀!";
  } else if (score >= 40) {
    return "🤔 | 𝖳𝗁𝖾𝗋𝖾 𝖺𝗋𝖾 𝗌𝗈𝗆𝖾 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾𝗌, 𝖻𝗎𝗍 𝗅𝗈𝗏𝖾 𝖼𝖺𝗇 𝖼𝗈𝗇𝗊𝗎𝖾𝗋 𝖺𝗅𝗅!";
  } else {
    return "💔 | 𝖪𝖾𝖾𝗉 𝗍𝗁𝖾 𝖿𝖺𝗂𝗍𝗁, 𝗅𝗈𝗏𝖾 𝗁𝖺𝗌 𝗂𝗍𝗌 𝗎𝗉𝗌 𝖺𝗇𝖽 𝖽𝗈𝗐𝗇𝗌!";
  }
}

function getAdditionalInfo(score) {
  if (score >= 80) {
    return "✨ | 𝖸𝗈𝗎 𝗌𝗁𝖺𝗋𝖾 𝖽𝖾𝖾𝗉 𝖾𝗆𝗈𝗍𝗂𝗈𝗇𝖺𝗅 𝖺𝗇𝖽 𝗌𝗉𝗂𝗋𝗂𝗍𝗎𝖺𝗅 𝖼𝗈𝗇𝗇𝖾𝖼𝗍𝗂𝗈𝗇𝗌.";
  } else if (score >= 60) {
    return "💖 | 𝖢𝗈𝗆𝗆𝗎𝗇𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝗂𝗌 𝗄𝖾𝗒 𝗍𝗈 𝗆𝖺𝗂𝗇𝗍𝖺𝗂𝗇𝗂𝗇𝗀 𝖺 𝗁𝖾𝖺𝗅𝗍𝗁𝗒 𝗋𝖾𝗅𝖺𝗍𝗂𝗈𝗇𝗌𝗁𝗂𝗉.";
  } else if (score >= 40) {
    return "🔍 | 𝖴𝗇𝖽𝖾𝗋𝗌𝗍𝖺𝗇𝖽𝗂𝗇𝗀 𝖾𝖺𝖼𝗁 𝗈𝗍𝗁𝖾𝗋'𝗌 𝖽𝗂𝖿𝖿𝖾𝗋𝖾𝗇𝖼𝖾𝗌 𝗂𝗌 𝖼𝗋𝗎𝖼𝗂𝖺𝗅.";
  } else {
    return "🌧️ | 𝖤𝗏𝖾𝗋𝗒 𝗌𝗍𝗈𝗋𝗆 𝗂𝗇 𝖺 𝗋𝖾𝗅𝖺𝗍𝗂𝗈𝗇𝗌𝗁𝗂𝗉 𝗆𝖺𝗄𝖾𝗌 𝗒𝗈𝗎 𝗌𝗍𝗋𝗈𝗇𝗀𝖾𝗋 𝗍𝗈𝗀𝖾𝗍𝗁𝖾𝗋.";
  }
}

function getPassionLevel(score) {
  if (score >= 80) {
    return "🔥 | 𝖨𝗇𝗍𝖾𝗇𝗌𝖾 𝖺𝗇𝖽 𝖿𝗂𝖾𝗋𝗒 𝗉𝖺𝗌𝗌𝗂𝗈𝗇!";
  } else if (score >= 60) {
    return "💓 | 𝖲𝗂𝗇𝖼𝖾𝗋𝖾 𝖺𝗇𝖽 𝗀𝖾𝗇𝗎𝗂𝗇𝖾 𝖺𝖿𝖿𝖾𝖼𝗍𝗂𝗈𝗇.";
  } else if (score >= 40) {
    return "🌹 | 𝖲𝗍𝖾𝖺𝖽𝗒 𝖺𝗇𝖽 𝗀𝗋𝗈𝗐𝗂𝗇𝗀 𝗅𝗈𝗏𝖾.";
  } else {
    return "❤️ | 𝖫𝗈𝗏𝖾 𝗍𝗁𝖺𝗍 𝗐𝗂𝗍𝗁𝗌𝗍𝖺𝗇𝖽𝗌 𝗍𝗁𝖾 𝗍𝖾𝗌𝗍𝗌 𝗈𝖿 𝗍𝗂𝗆𝖾.";
  }
}

function getCommitmentLevel(score) {
  if (score >= 80) {
    return "💍 | 𝖥𝗎𝗅𝗅𝗒 𝖼𝗈𝗆𝗆𝗂𝗍𝗍𝖾𝖽 𝗍𝗈 𝖾𝖺𝖼𝗁 𝗈𝗍𝗁𝖾𝗋.";
  } else if (score >= 60) {
    return "🤝 | 𝖡𝗎𝗂𝗅𝖽𝗂𝗇𝗀 𝖺 𝗌𝗍𝗋𝗈𝗇𝗀 𝖿𝗈𝗎𝗇𝖽𝖺𝗍𝗂𝗈𝗇 𝗈𝖿 𝖼𝗈𝗆𝗆𝗂𝗍𝗆𝖾𝗇𝗍.";
  } else if (score >= 40) {
    return "🌱 | 𝖭𝗎𝗋𝗍𝗎𝗋𝗂𝗇𝗀 𝖺 𝖼𝗈𝗆𝗆𝗂𝗍𝗆𝖾𝗇𝗍 𝗍𝗁𝖺𝗍'𝗌 𝗌𝗍𝗂𝗅𝗅 𝗀𝗋𝗈𝗐𝗂𝗇𝗀.";
  } else {
    return "⏳ | 𝖢𝗈𝗆𝗆𝗂𝗍𝗍𝖾𝖽 𝗍𝗈 𝖿𝖺𝖼𝗂𝗇𝗀 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾𝗌 𝗍𝗈𝗀𝖾𝗍𝗁𝖾𝗋.";
  }
}

function getCommunicationLevel(score) {
  if (score >= 80) {
    return "🗨️ | 𝖤𝗑𝖼𝖾𝗅𝗅𝖾𝗇𝗍 𝖼𝗈𝗆𝗆𝗎𝗇𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝗌𝗄𝗂𝗅𝗅𝗌!";
  } else if (score >= 60) {
    return "💬 | 𝖦𝗈𝗈𝖽 𝖼𝗈𝗆𝗆𝗎𝗇𝗂𝖼𝖺𝗍𝗂𝗈𝗇, 𝖺𝗅𝗐𝖺𝗒𝗌 𝖾𝗑𝗉𝗋𝖾𝗌𝗌 𝗒𝗈𝗎𝗋 𝖿𝖾𝖾𝗅𝗂𝗇𝗀𝗌.";
  } else if (score >= 40) {
    return "🤐 | 𝖲𝗈𝗆𝖾𝗍𝗂𝗆𝖾𝗌 𝗌𝗍𝗋𝗎𝗀𝗀𝗅𝖾𝗌 𝗐𝗂𝗍𝗁 𝖼𝗈𝗆𝗆𝗎𝗇𝗂𝖼𝖺𝗍𝗂𝗈𝗇, 𝗐𝗈𝗋𝗄 𝗈𝗇 𝖾𝗑𝗉𝗋𝖾𝗌𝗌𝗂𝗇𝗀 𝗒𝗈𝗎𝗋𝗌𝖾𝗅𝗏𝖾𝗌.";
  } else {
    return "🔇 | 𝖢𝗈𝗆𝗆𝗎𝗇𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝗂𝗌 𝖺 𝖻𝗂𝗍 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝗂𝗇𝗀, 𝖻𝗎𝗍 𝗍𝗁𝖾𝗋𝖾'𝗌 𝗋𝗈𝗈𝗆 𝖿𝗈𝗋 𝗂𝗆𝗉𝗋𝗈𝗏𝖾𝗆𝖾𝗇𝗍.";
  }
}

function getHumorLevel(score) {
  if (score >= 80) {
    return "😄 | 𝖤𝗇𝖽𝗅𝖾𝗌𝗌 𝗅𝖺𝗎𝗀𝗁𝗍𝖾𝗋 𝗍𝗈𝗀𝖾𝗍𝗁𝖾𝗋!";
  } else if (score >= 60) {
    return "😊 | 𝖲𝗁𝖺𝗋𝖾 𝖺 𝗀𝗈𝗈𝖽 𝗌𝖾𝗇𝗌𝖾 𝗈𝖿 𝗁𝗎𝗆𝗈𝗋, 𝗄𝖾𝖾𝗉 𝗆𝖺𝗄𝗂𝗇𝗀 𝖾𝖺𝖼𝗁 𝗈𝗍𝗁𝖾𝗋 𝗅𝖺𝗎𝗀𝗁.";
  } else if (score >= 40) {
    return "😐 | 𝖧𝗎𝗆𝗈𝗋 𝗆𝖺𝗒 𝖽𝗂𝖿𝖿𝖾𝗋, 𝖿𝗂𝗇𝖽 𝖼𝗈𝗆𝗆𝗈𝗇 𝗀𝗋𝗈𝗎𝗇𝖽 𝖺𝗇𝖽 𝖾𝗇𝗃𝗈𝗒 𝗅𝖺𝗎𝗀𝗁𝗍𝖾𝗋 𝗍𝗈𝗀𝖾𝗍𝗁𝖾𝗋.";
  } else {
    return "😕 | 𝖧𝗎𝗆𝗈𝗋 𝖼𝖺𝗇 𝖻𝖾 𝖺 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾, 𝖻𝗎𝗍 𝖿𝗂𝗇𝖽 𝗃𝗈𝗒 𝗂𝗇 𝗈𝗍𝗁𝖾𝗋 𝖺𝗌𝗉𝖾𝖼𝗍𝗌 𝗈𝖿 𝗒𝗈𝗎𝗋 𝗋𝖾𝗅𝖺𝗍𝗂𝗈𝗇𝗌𝗁𝗂𝗉.";
  }
}

function getTrustLevel(score) {
  if (score >= 80) {
    return "🤝 | 𝖳𝗋𝗎𝗌𝗍 𝖾𝖺𝖼𝗁 𝗈𝗍𝗁𝖾𝗋 𝖼𝗈𝗆𝗉𝗅𝖾𝗍𝖾𝗅𝗒!";
  } else if (score >= 60) {
    return "🤔 | 𝖡𝗎𝗂𝗅𝖽 𝗍𝗋𝗎𝗌𝗍 𝖻𝗒 𝖻𝖾𝗂𝗇𝗀 𝗁𝗈𝗇𝖾𝗌𝗍 𝖺𝗇𝖽 𝗍𝗋𝖺𝗇𝗌𝗉𝖺𝗋𝖾𝗇𝗍 𝗐𝗂𝗍𝗁 𝖾𝖺𝖼𝗁 𝗈𝗍𝗁𝖾𝗋.";
  } else if (score >= 40) {
    return "🔍 | 𝖳𝗋𝗎𝗌𝗍 𝗂𝗌 𝖺 𝗐𝗈𝗋𝗄 𝗂𝗇 𝗉𝗋𝗈𝗀𝗋𝖾𝗌𝗌, 𝖿𝗈𝖼𝗎𝗌 𝗈𝗇 𝖻𝗎𝗂𝗅𝖽𝗂𝗇𝗀 𝖺 𝗌𝗈𝗅𝗂𝖽 𝖿𝗈𝗎𝗇𝖽𝖺𝗍𝗂𝗈𝗇.";
  } else {
    return "🚫 | 𝖳𝗋𝗎𝗌𝗍 𝗆𝖺𝗒 𝖻𝖾 𝖺 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾, 𝖻𝗎𝗍 𝗐𝗂𝗍𝗁 𝖾𝖿𝖿𝗈𝗋𝗍, 𝗒𝗈𝗎 𝖼𝖺𝗇 𝗈𝗏𝖾𝗋𝖼𝗈𝗆𝖾 𝖽𝗈𝗎𝖻𝗍𝗌.";
  }
}

function getEmotionalIntimacy(score) {
  if (score >= 80) {
    return "🌈 | 𝖣𝖾𝖾𝗉 𝖾𝗆𝗈𝗍𝗂𝗈𝗇𝖺𝗅 𝖼𝗈𝗇𝗇𝖾𝖼𝗍𝗂𝗈𝗇𝗌, 𝗎𝗇𝖽𝖾𝗋𝗌𝗍𝖺𝗇𝖽𝗂𝗇𝗀 𝖾𝖺𝖼𝗁 𝗈𝗍𝗁𝖾𝗋'𝗌 𝖿𝖾𝖾𝗅𝗂𝗇𝗀𝗌 𝖾𝖿𝖿𝗈𝗋𝗍𝗅𝖾𝗌𝗌𝗅𝗒.";
  } else if (score >= 60) {
    return "💗 | 𝖦𝗋𝗈𝗐𝗂𝗇𝗀 𝖾𝗆𝗈𝗍𝗂𝗈𝗇𝖺𝗅 𝗂𝗇𝗍𝗂𝗆𝖺𝖼𝗒, 𝗌𝗁𝖺𝗋𝖾 𝗒𝗈𝗎𝗋 𝗏𝗎𝗅𝗇𝖾𝗋𝖺𝖻𝗂𝗅𝗂𝗍𝗂𝖾𝗌 𝖺𝗇𝖽 𝗃𝗈𝗒𝗌.";
  } else if (score >= 40) {
    return "💔 | 𝖤𝗆𝗈𝗍𝗂𝗈𝗇𝖺𝗅 𝗂𝗇𝗍𝗂𝗆𝖺𝖼𝗒 𝗇𝖾𝖾𝖽𝗌 𝗇𝗎𝗋𝗍𝗎𝗋𝗂𝗇𝗀, 𝗈𝗉𝖾𝗇 𝗎𝗉 𝗍𝗈 𝖾𝖺𝖼𝗁 𝗈𝗍𝗁𝖾𝗋 𝗍𝗈 𝗌𝗍𝗋𝖾𝗇𝗀𝗍𝗁𝖾𝗇 𝗂𝗍.";
  } else {
    return "💧 | 𝖤𝗆𝗈𝗍𝗂𝗈𝗇𝖺𝗅 𝗂𝗇𝗍𝗂𝗆𝖺𝖼𝗒 𝗆𝖺𝗒 𝗋𝖾𝗊𝗎𝗂𝗋𝖾 𝗆𝗈𝗋𝖾 𝖾𝖿𝖿𝗈𝗋𝗍, 𝖻𝗎𝗍 𝗂𝗍'𝗌 𝗐𝗈𝗋𝗍𝗁 𝖻𝗎𝗂𝗅𝖽𝗂𝗇𝗀.";
  }
}

function getSharedValues(score) {
  if (score >= 80) {
    return "🌍 | 𝖠𝗅𝗂𝗀𝗇𝖾𝖽 𝗏𝖺𝗅𝗎𝖾𝗌 𝖺𝗇𝖽 𝖻𝖾𝗅𝗂𝖾𝖿𝗌, 𝖼𝗋𝖾𝖺𝗍𝗂𝗇𝗀 𝖺 𝗁𝖺𝗋𝗆𝗈𝗇𝗂𝗈𝗎𝗌 𝖺𝗇𝖽 𝗉𝗎𝗋𝗉𝗈𝗌𝖾𝖿𝗎𝗅 𝗅𝗂𝖿𝖾 𝗍𝗈𝗀𝖾𝗍𝗁𝖾𝗋.";
  } else if (score >= 60) {
    return "🤝 | 𝖲𝗈𝗆𝖾 𝗌𝗁𝖺𝗋𝖾𝖽 𝗏𝖺𝗅𝗎𝖾𝗌, 𝗐𝗈𝗋𝗄 𝗈𝗇 𝗎𝗇𝖽𝖾𝗋𝗌𝗍𝖺𝗇𝖽𝗂𝗇𝗀 𝖺𝗇𝖽 𝗋𝖾𝗌𝗉𝖾𝖼𝗍𝗂𝗇𝗀 𝖾𝖺𝖼𝗁 𝗈𝗍𝗁𝖾𝗋'𝗌 𝗉𝖾𝗋𝗌𝗉𝖾𝖼𝗍𝗂𝗏𝖾𝗌.";
  } else if (score >= 40) {
    return "🔄 | 𝖣𝗂𝖿𝖿𝖾𝗋𝖾𝗇𝗍 𝗏𝖺𝗅𝗎𝖾𝗌, 𝖿𝗂𝗇𝖽 𝖼𝗈𝗆𝗆𝗈𝗇 𝗀𝗋𝗈𝗎𝗇𝖽 𝖺𝗇𝖽 𝖼𝖾𝗅𝖾𝖻𝗋𝖺𝗍𝖾 𝗒𝗈𝗎𝗋 𝖽𝗂𝖿𝖿𝖾𝗋𝖾𝗇𝖼𝖾𝗌.";
  } else {
    return "❓ | 𝖲𝗁𝖺𝗋𝖾𝖽 𝗏𝖺𝗅𝗎𝖾𝗌 𝗆𝗂𝗀𝗁𝗍 𝗇𝖾𝖾𝖽 𝖾𝗑𝗉𝗅𝗈𝗋𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝖽𝗂𝗌𝖼𝗎𝗌𝗌𝗂𝗈𝗇 𝖿𝗈𝗋 𝖺 𝗌𝗍𝗋𝗈𝗇𝗀𝖾𝗋 𝖼𝗈𝗇𝗇𝖾𝖼𝗍𝗂𝗈𝗇.";
  }
}

function getGrowthPotential(score) {
  if (score >= 80) {
    return "🌱 | 𝖤𝗇𝖽𝗅𝖾𝗌𝗌 𝗈𝗉𝗉𝗈𝗋𝗍𝗎𝗇𝗂𝗍𝗂𝖾𝗌 𝖿𝗈𝗋 𝗉𝖾𝗋𝗌𝗈𝗇𝖺𝗅 𝖺𝗇𝖽 𝖼𝗈𝗅𝗅𝖾𝖼𝗍𝗂𝗏𝖾 𝗀𝗋𝗈𝗐𝗍𝗁.";
  } else if (score >= 60) {
    return "🚀 | 𝖲𝗂𝗀𝗇𝗂𝖿𝗂𝖼𝖺𝗇𝗍 𝗉𝗈𝗍𝖾𝗇𝗍𝗂𝖺𝗅 𝖿𝗈𝗋 𝗀𝗋𝗈𝗐𝗍𝗁, 𝗌𝗎𝗉𝗉𝗈𝗋𝗍 𝖾𝖺𝖼𝗁 𝗈𝗍𝗁𝖾𝗋'𝗌 𝖺𝗌𝗉𝗂𝗋𝖺𝗍𝗂𝗈𝗇𝗌.";
  } else if (score >= 40) {
    return "🌧️ | 𝖲𝗈𝗆𝖾 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾𝗌 𝗂𝗇 𝗀𝗋𝗈𝗐𝗍𝗁, 𝗐𝗈𝗋𝗄 𝗍𝗈𝗀𝖾𝗍𝗁𝖾𝗋 𝗍𝗈 𝗈𝗏𝖾𝗋𝖼𝗈𝗆𝖾 𝗈𝖻𝗌𝗍𝖺𝖼𝗅𝖾𝗌.";
  } else {
    return "🔒 | 𝖦𝗋𝗈𝗐𝗍𝗁 𝗉𝗈𝗍𝖾𝗇𝗍𝗂𝖺𝗅 𝗆𝖺𝗒 𝗋𝖾𝗊𝗎𝗂𝗋𝖾 𝖿𝗈𝖼𝗎𝗌𝖾𝖽 𝖾𝖿𝖿𝗈𝗋𝗍𝗌, 𝖻𝗎𝗍 𝗂𝗍'𝗌 𝖺𝖼𝗁𝗂𝖾𝗏𝖺𝖻𝗅𝖾.";
  }
  }