module.exports.config = {
  name: "setdatabox",
  version: "1.0",
  hasPermssion: 2,
  credits: "Réynél",
  description: "Set new data of boxes into data",
  commandCategory: "admin",
  usages: "[thread]",
  cooldowns: 5,
    
};
module.exports.run = async function ({ event, args, api, Threads }) { 
const { threadID } = event;
const { setData, getData } = Threads;
var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  const lengthGroup = list.length
  for (var groupInfo of list) {
    console.log(`data has been updated box ID: ${groupInfo.threadID}`)
    var threadInfo = await api.getThreadInfo(groupInfo.threadID);
    threadInfo.threadName;
    await Threads.setData(groupInfo.threadID, { threadInfo });
  }
    console.log(`data has been updated ${lengthGroup} box`)
    return api.sendMessage(`✅ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾 𝖽𝖺𝗍𝖺 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 𝗎𝗉𝖽𝖺𝗍𝖾𝖽 ${lengthGroup} 𝗀𝗋𝗈𝗎𝗉`, threadID)
}