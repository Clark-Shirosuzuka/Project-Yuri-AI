module.exports.config = {
    name: "listadmin",
    version: '1.0.0',
    hasPermssion: 0,
    credits: "Réynél",
    description: "List of group administrators",
    commandCategory: "group",
    usages: "[listadmin]",
    cooldowns: 5,
    dependencies: []
};

module.exports.run = async function({ api, event, args, Users }) {
    /*try {
        var threadInfo = await api.getThreadInfo(args[0]);
    } catch (e) {
        var threadInfo = await api.getThreadInfo(event.threadID);
    }*/
    var threadInfo = await api.getThreadInfo(event.threadID);
    let qtv = threadInfo.adminIDs.length;
    var listad = '';
    var qtv2 = threadInfo.adminIDs;
    var fs = global.nodemodule["fs-extra"];
    dem = 1;
    for (let i = 0; i < qtv2.length; i++) {
        const info = (await api.getUserInfo(qtv2[i].id));
        const name = info[qtv2[i].id].name;
        listad += '' + `${dem++}` + '. ' + name + '\n';
    }

    api.sendMessage(
        `╔ ೋღ𝗔𝗱𝗺𝗶𝗻 𝗟𝗶𝘀𝘁𝘀ღೋ ╗\n𝖳𝗁𝖾 𝗅𝗂𝗌𝗍 𝗈𝖿 𝖺𝖽𝗆𝗂𝗇𝗌 𝗂𝗇\n𝗚𝗿𝗼𝘂𝗽: ${qtv}\n𝗜𝗻𝗰𝗹𝘂𝗱𝗲𝘀:\n   ${listad}\n\n꙳☪︎●◉✿𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗬𝗨𝗥𝗜✿◉●☪︎꙳\n╚═══ೋღ∘🌺∘ღೋ═══╝`,
        event.threadID,
        event.messageID
    );
};
