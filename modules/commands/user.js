module.exports.config = {
	name: "user",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Réynél",
	description: "Ban or unblock users",
	commandCategory: "system",
	usages: "[unban/ban/search] [ID or text]",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"reason": "Lý do",
		"at": "vào lúc",
		"allCommand": "toàn bộ lệnh",
		"commandList": "những lệnh",
		"banSuccess": "[ Ban User ] Đã xử lý thành công yêu cầu cấm người dùng: %1",
		"unbanSuccess": "[ Unban User ] Đã xử lý thành công yêu cầu gỡ cấm người dùng %1",
		"banCommandSuccess": "[ banCommand User ] Đã xử lý thành công yêu cầu cấm lệnh đối với người dùng: %1",
		"unbanCommandSuccess": "[ UnbanCommand User ] Đã xử lý thành công yêu cầu gỡ cấm %1 đối với người dùng: %2",
		"errorReponse": "%1 Không thể hoàn tất công việc bạn yêu cầu",
		"IDNotFound": "%1 ID người dùng bạn nhập không tồn tại trong cơ sở dữ liệu",
		"existBan": "[ Ban User ] Người dùng %1 đã bị ban từ trước %2 %3",
		"notExistBan": "[ Unban User ] Người dùng bạn nhập chưa từng bị cấm sử dụng bot",
		"missingCommandInput": "%1 Phần command cần cấm không được để trống!",
		"notExistBanCommand": "[ UnbanCommand User ] Hiện tại ID người dùng bạn nhập chưa từng bị cấm sử dụng lệnh",

		"returnBan": "[ Ban User ] Hiện tại bạn đang yêu cầu cấm người dùng:\n- ID và tên người dùng cần cấm: %1%2\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnUnban": "[ Unban User ] Hiện tại bạn đang yêu cầu gỡ cấm người dùng:\n- ID và tên người dùng cần gỡ cấm: %1\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnBanCommand": "[ banCommand User ] Hiện tại bạn đang yêu cầu cấm sử dụng lệnh đối với người dùng:\n - ID và tên người dùng cần cấm: %1\n- Các lệnh cần cấm: %2\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnUnbanCommand": "[ UnbanCommand User ] Hiện tại bạn đang yêu cầu gỡ cấm sử dụng lệnh đối với với người dùng:\n - ID và tên người dùng cần gỡ cấm lệnh: %1\n- Các lệnh cần gỡ cấm: %2\n\n❮ Reaction tin nhắn này để xác thực ❯",
	
		"returnResult": "Đây là kết quả phù hợp: \n",
		"returnNull": "Không tìm thấy kết quả dựa vào tìm kiếm của bạn!",
		"returnList": "[ User List ]\nHiện tại đang có %1 người dùng bị ban, dưới đây là %2 người dùng\n\n%3",
		"returnInfo": "[ Info User ] Đây là một sô thông tin về người dùng bạn cần tìm:\n- ID và tên của người dùng: %1n- Có bị ban?: %2 %3 %4\n- Bị ban lệnh?: %5"
	},
	"en": {
		"reason": "𝗋𝖾𝖺𝗌𝗈𝗇",
		"at": "𝖺𝗍",
		"allCommand": "𝖺𝗅𝗅 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌",
		"commandList": "𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌",
		"banSuccess": "《 𝗕𝗮𝗻 𝗨𝘀𝗲𝗿 》\n\n🚫 | 𝖡𝖺𝗇𝗇𝖾𝖽 𝗎𝗌𝖾𝗋: %1",
		"unbanSuccess": "《 𝗨𝗻𝗯𝗮𝗻 𝗨𝘀𝗲𝗿 》\n\n⭕ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗎𝗇𝖻𝖺𝗇𝗇𝖾𝖽 𝗎𝗌𝖾𝗋 %1",
		"banCommandSuccess": "《 𝗯𝗮𝗻𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗨𝘀𝗲𝗿 》\n\n🚫 | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝖻𝖺𝗇𝗇𝖾𝖽 𝗍𝗁𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗐𝗂𝗍𝗁 𝗎𝗌𝖾𝗋: %1",
		"unbanCommandSuccess": "《 𝗨𝗻𝗯𝗮𝗻𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗨𝘀𝗲𝗿 》\n\n⭕ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗎𝗇𝖻𝖺𝗇𝗇𝖾𝖽 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 %1 𝗐𝗂𝗍𝗁 𝗎𝗌𝖾𝗋: %2",
		"errorReponse": "%1 𝖼𝖺𝗇'𝗍 𝖽𝗈 𝗐𝗁𝖺𝗍 𝗒𝗈𝗎 𝗋𝖾𝗊𝗎𝖾𝗌𝗍 𝗆𝖺𝗌𝗍𝖾𝗋.",
		"IDNotFound": "𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾 %1 𝖨𝖣 𝗒𝗈𝗎 𝗂𝗆𝗉𝗈𝗋𝗍, 𝖽𝗈𝖾𝗌𝗇'𝗍 𝖾𝗑𝗂𝗌𝗍 𝗂𝗇 𝗆𝗒 𝖽𝖺𝗍𝖺𝖻𝖺𝗌𝖾",
		"existBan": "《 𝗕𝗮𝗻 𝗨𝘀𝗲𝗿 》\n\n🚫 | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾 𝗎𝗌𝖾𝗋 %1 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 𝖻𝖺𝗇𝗇𝖾𝖽 𝖻𝖾𝖿𝗈𝗋𝖾 %2 %3",
		"notExistBan": "《 𝗨𝗻𝗯𝗮𝗻 𝗨𝘀𝗲𝗿 》\n\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾 𝗎𝗌𝖾𝗋 𝗁𝖺𝗌'𝗍 𝖻𝖾𝖾𝗇 𝖻𝖺𝗇𝗇𝖾𝖽 𝖻𝖾𝖿𝗈𝗋𝖾.",
		"missingCommandInput": "ℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, %1 𝗒𝗈𝗎 𝗁𝖺𝗏𝖾 𝗍𝗈 𝗂𝗆𝗉𝗈𝗋𝗍 𝗍𝗁𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝖻𝖺𝗇.",
		"notExistBanCommand": "《 𝗨𝗻𝗯𝗮𝗻𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗨𝘀𝗲𝗿 》\n\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾 𝗎𝗌𝖾 𝖨𝖣 𝗁𝖺𝗌𝗇'𝗍 𝖻𝖾𝖾𝗇 𝖻𝖺𝗇𝗇𝖾𝖽 𝖻𝖾𝖿𝗈𝗋𝖾.",

		"returnBan": "《 𝗕𝗮𝗻 𝗨𝘀𝗲𝗿 》\n\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗋𝖾𝗊𝗎𝖾𝗌𝗍𝗂𝗇𝗀 𝗍𝗈 𝖻𝖺𝗇 𝗎𝗌𝖾𝗋:\n- 𝗎𝗌𝖾𝗋 𝖨𝖣 𝖺𝗇𝖽 𝗇𝖺𝗆𝖾 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝖻𝖺𝗇: %1 %2\n\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗋𝖾𝖺𝖼𝗍𝗂𝗈𝗇 𝗍𝗈 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗍𝗈 𝖼𝗈𝗆𝗉𝗅𝖾𝗍𝖾.",
		"returnUnban": "《 𝗨𝗻𝗯𝗮𝗻 𝗨𝘀𝗲𝗿 》\n\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗋𝖾𝗊𝗎𝖾𝗌𝗍𝗂𝗇𝗀 𝗍𝗈 𝗎𝗇𝖻𝖺𝗇 𝗍𝗁𝖾 𝗎𝗌𝖾𝗋:\n- 𝗎𝗌𝖾𝗋 𝖨𝖣 𝖺𝗇𝖽 𝗇𝖺𝗆𝖾 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝗎𝗇𝖻𝖺𝗇: %1\n\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗋𝖾𝖺𝖼𝗍𝗂𝗈𝗇 𝗍𝗈 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗍𝗈 𝖼𝗈𝗆𝗉𝗅𝖾𝗍𝖾.",
		"returnBanCommand": "《 𝗯𝗮𝗻𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗨𝘀𝗲𝗿 》\n\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗋𝖾𝗊𝗎𝖾𝗌𝗍𝗂𝗇𝗀 𝗍𝗈 𝖻𝖺𝗇 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗐𝗂𝗍𝗁 𝗎𝗌𝖾𝗋:\n - 𝖴𝗌𝖾𝗋 𝖨𝖣 𝖺𝗇𝖽 𝗇𝖺𝗆𝖾 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝖻𝖺𝗇: %1\n- 𝖢𝗈𝗆𝗆𝖺𝗇𝖽𝗌: %2\n\n ℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗋𝖾𝖺𝖼𝗍𝗂𝗈𝗇 𝗍𝗈 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗍𝗈 𝖼𝗈𝗆𝗉𝗅𝖾𝗍𝖾.",
		"returnUnbanCommand": "《 𝗨𝗻𝗯𝗮𝗻𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗨𝘀𝗲𝗿 》\n\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗋𝖾𝗊𝗎𝖾𝗌𝗍𝗂𝗇𝗀 𝗍𝗈 𝖻𝖺𝗇 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗐𝗂𝗍𝗁 𝗎𝗌𝖾𝗋:\n - 𝖴𝗌𝖾𝗋 𝖨𝖣 𝖺𝗇𝖽 𝗇𝖺𝗆𝖾: %1\n- 𝖢𝗈𝗆𝗆𝖺𝗇𝖽𝗌: %2\n\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗋𝖾𝖺𝖼𝗍𝗂𝗈𝗇 𝗍𝗈 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗍𝗈 𝖼𝗈𝗆𝗉𝗅𝖾𝗍𝖾.",
	
		"returnResult": "🔍 | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝗂𝗌 𝗂𝗌 𝗒𝗈𝗎𝗋 𝗋𝖾𝗌𝗎𝗅𝗍: \n",
		"returnNull": "❎ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾𝗋𝖾 𝗂𝗌 𝗇𝗈 𝗋𝖾𝗌𝗎𝗅𝗍 𝗂𝗇 𝗒𝗈𝗎𝗋 𝗂𝗇𝗉𝗎𝗍.",
		"returnList": "《 𝗨𝘀𝗲𝗿 𝗟𝗶𝘀𝘁 》\n\n🔍 | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾𝗋𝖾 𝖺𝗋𝖾 %1 𝖻𝖺𝗇𝗇𝖾𝖽 𝗎𝗌𝖾𝗋, 𝗁𝖾𝗋𝖾 𝖺𝗋𝖾 %2 𝗎𝗌𝖾𝗋\n\n%3",
		"returnInfo": "《 𝗜𝗻𝗳𝗼 𝗨𝘀𝗲𝗿 》\n\n🔍 | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗁𝖾𝗋𝖾 𝗂𝗌 𝗌𝗈𝗆𝖾 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝖺𝖻𝗈𝗎𝗍 𝗍𝗁𝖾 𝗎𝗌𝖾𝗋 𝗐𝗁𝗈 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝖿𝗂𝗇𝖽:\n- 𝖴𝗌𝖾𝗋 𝖨𝖣 𝖺𝗇𝖽 𝗇𝖺𝗆𝖾: %1 𝗇- 𝖻𝖺𝗇𝗇𝖾𝖽?: %2 %3 %4\n- 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖡𝖺𝗇𝗇𝖾𝖽?: %5"
	}
}

module.exports.handleReaction = async ({ event, api, Users, handleReaction, getText }) => {
	if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
	const moment = require("moment-timezone");
	const { threadID } = event;
	const { messageID, type, targetID, reason, commandNeedBan, nameTarget } = handleReaction;
	
	const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
	global.client.handleReaction.splice(global.client.handleReaction.findIndex(item => item.messageID == messageID), 1);
	
	switch (type) {
		case "ban": {
			try {
				let data = (await Users.getData(targetID)).data || {};
				data.banned = true;
				data.reason = reason || null;
				data.dateAdded = time;
				await Users.setData(targetID, { data });
				global.data.userBanned.set(targetID, { reason: data.reason, dateAdded: data.dateAdded });
				return api.sendMessage(getText("banSuccess", `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch { return api.sendMessage(getText("errorReponse", "[ 𝗕𝗮𝗻 𝗨𝘀𝗲𝗿 ]"), threadID) };
		}

		case "unban": {
			try {
				let data = (await Users.getData(targetID)).data || {};
				data.banned = false;
				data.reason = null;
				data.dateAdded = null;
				await Users.setData(targetID, { data });
				global.data.userBanned.delete(targetID);
				return api.sendMessage(getText("unbanSuccess", `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch { return api.sendMessage(getText("errorReponse", "[ 𝗨𝗻𝗯𝗮𝗻 𝗨𝘀𝗲𝗿 ]"), threadID) };
		}

		case "banCommand": {
			try {	
				let data = (await Users.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned || [], ...commandNeedBan];
				await Users.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				return api.sendMessage(getText("banCommandSuccess", `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "[ 𝗯𝗮𝗻𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗨𝘀𝗲𝗿 ]"), threadID) };
		}

		case "unbanCommand": {
			try {
				let data = (await Users.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned.filter(item => !commandNeedBan.includes(item))];
				await Users.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				if(data.commandBanned.length == 0) global.data.commandBanned.delete(targetID)
				return api.sendMessage(getText("unbanCommandSuccess", ((data.commandBanned.length == 0) ? getText("allCommand") : `${getText("commandList")}: ${commandNeedBan.join(", ")}`), `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "[ 𝗨𝗻𝗯𝗮𝗻𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗨𝘀𝗲𝗿 ]"), threadID) };
		}
	}
}

module.exports.run = async ({ event, api, args, Users, getText }) => {
	const { threadID, messageID } = event;
	const type = args[0];
	var targetID = String(args[1]);
	var reason = (args.slice(2, args.length)).join(" ") || null;

	if (isNaN(targetID)) {
		const mention = Object.keys(event.mentions);
		args = args.join(" ");
		targetID = String(mention[0]);
		reason = (args.slice(args.indexOf(event.mentions[mention[0]]) + (event.mentions[mention[0]] || "").length + 1, args.length)) || null;
	}

	switch (type) {
		case "ban":
		case "-b": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ 𝗕𝗮𝗻 𝗨𝘀𝗲𝗿 ]"), threadID, messageID);
			if (global.data.userBanned.has(targetID)) {
				const { reason, dateAdded } = global.data.userBanned.get(targetID) || {};
				return api.sendMessage(getText("existBan", targetID, ((reason) ? `${getText("reason")}: "${reason}"` : ""), ((dateAdded) ? `${getText("at")} ${dateAdded}` : "")), threadID, messageID);
			}
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnBan", `${targetID} - ${nameTarget}`, ((reason) ? `\n- ${getText("reason")}: ${reason}` : "")), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "ban",
					targetID,
					reason,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "unban":
		case "-ub": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ 𝗨𝗻𝗯𝗮𝗻 𝗨𝘀𝗲𝗿 ]"), threadID, messageID);
			if (!global.data.userBanned.has(targetID)) return api.sendMessage(getText("notExistBan"), threadID, messageID);
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnUnban", `${targetID} - ${nameTarget}`), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "unban",
					targetID,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "search":
		case "-s": {
			const contentJoin = reason || "";
			const getUsers = (await Users.getAll(['userID', 'name'])).filter(item => !!item.name);
			var matchUsers = [], a = '', b = 0;
			getUsers.forEach(i => {
				if (i.name.toLowerCase().includes(contentJoin.toLowerCase())) {
					matchUsers.push({
						name: i.name,
						id: i.userID
					});
				}
			});
			matchUsers.forEach(i => a += `\n${b += 1}. ${i.name} - ${i.id}`);
			(matchUsers.length > 0) ? api.sendMessage(getText("returnResult", a), threadID) : api.sendMessage(getText("returnNull"), threadID);
			return;
		}
		
		case "banCommand":
		case "-bc": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ 𝗕𝗮𝗻𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗨𝘀𝗲𝗿 ]"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", "[ 𝗕𝗮𝗻𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗨𝘀𝗲𝗿 ]"), threadID, messageID);
			if (reason == "all") {
				var allCommandName = [];
				const commandValues = global.client.commands.keys();
				for (const cmd of commandValues) allCommandName.push(cmd);
				reason = allCommandName.join(" ");
			}
			const commandNeedBan = reason.split(" ");
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnBanCommand", `${targetID} - ${nameTarget}`, ((commandNeedBan.length == global.client.commands.size) ? getText("allCommand") : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "banCommand",
					targetID,
					commandNeedBan,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "unbanCommand":
		case "-ubc": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ 𝗨𝗻𝗯𝗮𝗻𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗨𝘀𝗲𝗿 ]"), threadID, messageID);
			if (!global.data.commandBanned.has(targetID)) return api.sendMessage(getText("notExistBanCommand"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", "[ 𝗨𝗻𝗯𝗮𝗻𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗨𝘀𝗲𝗿 ]"), threadID, messageID);
			if (reason == "all") {
				reason = (global.data.commandBanned.get(targetID)).join(" ");
			}
			const commandNeedBan = reason.split(" ");
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnUnbanCommand", `${targetID} - ${nameTarget}`, ((commandNeedBan.length == global.data.commandBanned.get(targetID).length) ? getText("allCommand") : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "unbanCommand",
					targetID,
					commandNeedBan,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "list":
		case "-l": {
			var listBan = [], i = 0;
			const threadData = global.data.userBanned.keys();
			for (; ;) {
				let idUser = String(threadData.next().value);
				if (typeof idUser == "undefined") {
					const userName = (await Users.getData(idUser)).name || "unknown";
					listBan.push(`${i+=1}/ ${idUser} - ${userName}`);
				}
				if (i == global.data.userBanned.size || i == (parseInt(reason) || 10)) break;
			}
			return api.sendMessage(getText("returnList",(global.data.userBanned.size || 0), listBan.length, listBan.join("\n")), threadID, messageID);
		}

		case "info":
		case "-i": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ 𝗜𝗻𝗳𝗼 𝗨𝘀𝗲𝗿 ]"), threadID, messageID);
			if (global.data.commandBanned.has(targetID)) { var commandBanned = global.data.commandBanned.get(targetID) || [] };
			if (global.data.userBanned.has(targetID)) { var { reason, dateAdded } = global.data.userBanned.get(targetID) || {} };
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnInfo", `${targetID} - ${nameTarget}`, ((!dateAdded) ? "YES" : "NO"), ((reason) ? `${getText("reson")}: "${reason}"` : ""), ((dateAdded) ? `${getText("at")}: ${dateAdded}` : ""), ((commandBanned) ? `YES: ${(commandNeedBan.length == global.client.commands.size) ? getText("allCommand") : commandNeedBan.join(", ")}` : "NO")), threadID, messageID);
		}
	}
}