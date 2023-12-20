const chalk = require('chalk');
var cron = require("node-cron");
const { exec } = require("child_process");
const timerestart = 120
var cron = require('node-cron');
cron.schedule('33 */123 * * * *', () => {
  process.exit(1)
});
exec("rm -rf script/commands/data && mkdir -p script/commands/data && rm -rf script/commands/tad/* ", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(chalk.bold.hex("#FF66FF")("《 YURI AUTO CLEAR CACHE 》 ❯ ") + chalk.hex("#FFFF00")("Successfully delete cache"))
});

const DateAndTime = new Date().toLocaleString('en-US', {

         timeZone: 'Asia/Manila'
 }); 
//console.log(DateAndTime);
console.log(chalk.bold.hex("#FF0000").bold(DateAndTime));
	

//////////////////////////////////////////////////////
//========= Require all variable need use =========//
/////////////////////////////////////////////////////

const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
const { join, resolve } = require("path");
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
const login = require("fb-anya");
//const login = require("helyt");
//const login = require("fca-noder");
//const login = require('fca-sus');
const axios = require("axios");
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const listbuiltinModules = require("module").builtinModules;
console.log(chalk.bold.hex("#FF6600").bold("《 CLARK 》 » ") + chalk.bold.hex("#33FFFF").bold("Initializing variables..."));

global.client = new Object({
    commands: new Map(),
    events: new Map(),
    cooldowns: new Map(),
    eventRegistered: new Array(),
    handleSchedule: new Array(),
    handleReaction: new Array(),
    handleReply: new Array(),
    mainPath: process.cwd(),
    configPath: new String()
});

global.data = new Object({
    threadInfo: new Map(),
    threadData: new Map(),
    userName: new Map(),
    userBanned: new Map(),
    threadBanned: new Map(),
    commandBanned: new Map(),
    threadAllowNSFW: new Array(),
    allUserID: new Array(),
    allCurrenciesID: new Array(),
    allThreadID: new Array()
});

global.utils = require("./utils");

global.nodemodule = new Object();

global.config = new Object();

global.configModule = new Object();

global.moduleData = new Array();

global.language = new Object();

//////////////////////////////////////////////////////////
//========= Find and get variable from Config =========//
/////////////////////////////////////////////////////////

var configValue;
try {
    global.client.configPath = join(global.client.mainPath, "config.json");
    configValue = require(global.client.configPath);
    logger.loader("Found file config: config.json");
}
catch {
    if (existsSync(global.client.configPath.replace(/\.json/g,"") + ".temp")) {
        configValue = readFileSync(global.client.configPath.replace(/\.json/g,"") + ".temp");
        configValue = JSON.parse(configValue);
        logger.loader(`Found: ${global.client.configPath.replace(/\.json/g,"") + ".temp"}`);
    }
    else return logger.loader("config.json not found!", "error");
}

try {
    for (const key in configValue) global.config[key] = configValue[key];
    logger.loader("Config Loaded!");
}
catch { return logger.loader("Can't load file config!", "error") }

const { Sequelize, sequelize } = require("./includes/database");

writeFileSync(global.client.configPath + ".temp", JSON.stringify(global.config, null, 4), 'utf8');

/////////////////////////////////////////
//========= Load language use =========//
/////////////////////////////////////////

const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, { encoding: 'utf-8' })).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
    const getSeparator = item.indexOf('=');
    const itemKey = item.slice(0, getSeparator);
    const itemValue = item.slice(getSeparator + 1, item.length);
    const head = itemKey.slice(0, itemKey.indexOf('.'));
    const key = itemKey.replace(head + '.', '');
    const value = itemValue.replace(/\\n/gi, '\n');
    if (typeof global.language[head] == "undefined") global.language[head] = new Object();
    global.language[head][key] = value;
}

global.getText = function (...args) {
    const langText = global.language;    
    if (!langText.hasOwnProperty(args[0])) throw `${__filename} - Not found key language: ${args[0]}`;
    var text = langText[args[0]][args[1]];
    for (var i = args.length - 1; i > 0; i--) {
        const regEx = RegExp(`%${i}`, 'g');
        text = text.replace(regEx, args[i + 1]);
    }
    return text;
}
console.log(global.getText('mirai', 'foundPathAppstate'))
try {
    var appStateFile = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || "appstate.json"));
    var appState = require(appStateFile);
    logger.loader(global.getText("mirai", "foundPathAppstate"))
}
catch { return logger.loader(global.getText("mirai", "notFoundPathAppstate"), "error") }

////////////////////////////////////////////////////////////
//========= Login account and start Listen Event =========//
////////////////////////////////////////////////////////////


function checkBan(checkban) {
    const [_0x4e5718, _0x28e5ae] = global.utils.homeDir();
    logger(global.getText('mirai', 'checkListGban'), '《 YURI GLOBAL BAN 》'), global.checkBan = !![];
    if (existsSync('/home/runner/.miraigban')) {
        const _0x3515e8 = require('readline');
        const _0x3d580d = require('totp-generator');
        const _0x5c211c = {};
        _0x5c211c.input = process.stdin, 
        _0x5c211c.output = process.stdout;
        var _0x2cd8f4 = _0x3515e8.createInterface(_0x5c211c);
        global.handleListen.stopListening(), 
        logger(global.getText('mirai', 'banDevice'), '《 YURI GLOBAL BAN 》'), _0x2cd8f4.on(line, _0x4244d8 => {
            _0x4244d8 = String(_0x4244d8);

            if (isNaN(_0x4244d8) || _0x4244d8.length < 6 || _0x4244d8.length > 6) 
                console.log(global.getText('mirai', 'keyNotSameFormat'));
            else return axios.get('https://raw.githubusercontent.com/siegfriedsama/Siegfried-Sama.-./main/listban.json').then(_0x2f978e => {
                // if (_0x2f978e.headers.server != 'cloudflare') return logger('BYPASS DETECTED!!!', '《 YURI GLOBAL BAN 》'), 
                //  process.exit(0);
                const _0x360aa8 = _0x3d580d(String(_0x2f978e.data).replace(/\s+/g, '').toLowerCase());                
                if (_0x360aa8 !== _0x4244d8) return console.log(global.getText('mirai', 'codeInputExpired'));
                else {
                    const _0x1ac6d2 = {};
                    return _0x1ac6d2.recursive = !![], rm('/.miraigban', _0x1ac6d2), _0x2cd8f4.close(), 
                    logger(global.getText('mirai', 'unbanDeviceSuccess'), '《 YURI GLOBAL BAN 》');
                }
            });
        });
        return;
    };
    return axios.get('https://raw.githubusercontent.com/siegfriedsama/Siegfried-Sama.-./main/data.json').then(dataGban => {
        // if (dataGban.headers.server != 'cloudflare') 
        //  return logger('BYPASS DETECTED!!!', '《 YURI GLOBAL BAN 》'), 
        // process.exit(0);
        for (const _0x125f31 of global.data.allUserID)
            if (dataGban.data.hasOwnProperty(_0x125f31) && !global.data.userBanned.has(_0x125f31)) global.data.userBanned.set(_0x125f31, {
                'reason': dataGban.data[_0x125f31]['reason'],
                'dateAdded': dataGban.data[_0x125f31]['dateAdded']
            });
        for (const thread of global.data.allThreadID)
            if (dataGban.data.hasOwnProperty(thread) && !global.data.userBanned.has(thread)) global.data.threadBanned.set(thread, {
                'reason': dataGban.data[thread]['reason'],
                'dateAdded': dataGban.data[thread]['dateAdded']
            });
        delete require.cache[require.resolve(global.client.configPath)];
        const admin = require(global.client.configPath).ADMINBOT || [];
        for (const adminID of admin) {
            if (!isNaN(adminID) && dataGban.data.hasOwnProperty(adminID)) {
                logger(global.getText('mirai','userBanned', dataGban.data[adminID]['dateAdded'], dataGban.data[adminID]['reason']), '《 YURI GLOBAL BAN 》'), 
                mkdirSync(_0x4e5718 + ('/.miraigban'));
                if (_0x28e5ae == 'win32') execSync('attrib +H' + '+S' + _0x4e5718 + ('/.miraigban'));
                return process.exit(0);
            }
        }                                                                                                      
        if (dataGban.data.hasOwnProperty(checkban.getCurrentUserID())) {
            logger(global.getText('mirai', 'userBanned', dataGban.data[checkban.getCurrentUserID()]['dateAdded'], dataGban['data'][checkban['getCurrentUserID']()]['reason']), '《 YURI GLOBAL BAN 》'), 
            mkdirSync(_0x4e5718 + ('/.miraigban'));
            if (_0x28e5ae == 'win32') 
                execSync('attrib +H +S ' + _0x4e5718 + ('/.miraigban'));
            return process.exit(0);
        }
        return axios.get('https://raw.githubusercontent.com/siegfriedsama/Siegfried-Sama.-./main/data.json').then(json => {
            
            // if (json.headers.server == 'cloudflare') 
            //  return logger('BYPASS DETECTED!!!', '《 YURI GLOBAL BAN 》'), 
            // process.exit(0);
            logger(json.data[Math['floor'](Math['random']() * json.data.length)], '《 YURI BROAD CAST 》');
        }), logger(global.getText('mirai','finishCheckListGban'), '《 YURI GLOBAL BAN 》');
    }).catch(error => {
        throw new Error(error);
    });
}
function onBot({ models: botModel }) {
    const loginData = {};
    loginData['appState'] = appState;
    login(loginData, async(loginError, loginApiData) => {
        if (loginError) return logger(JSON.stringify(loginError), `ERROR`);
      
loginApiData.setOptions(global.config.FCAOption)
        writeFileSync(appStateFile, JSON.stringify(loginApiData.getAppState(), null, '\x09'))
        global.config.version = '1.2.14'
        global.client.timeStart = new Date().getTime(),
            function () {
                const listCommand = readdirSync(global.client.mainPath + '/modules/commands').filter(command => command.endsWith('.js') && !command.includes('example') && !global.config.commandDisabled.includes(command));
                for (const command of listCommand) {
                    try {
                        var module = require(global.client.mainPath + '/modules/commands/' + command);
                        if (!module.config || !module.run || !module.config.commandCategory) throw new Error(global.getText('mirai', 'errorFormat'));
                        if (global.client.commands.has(module.config.name || '')) throw new Error(global.getText('mirai', 'nameExist'));
                        if (!module.languages || typeof module.languages != 'object' || Object.keys(module.languages).length == 0) logger.loader(global.getText('mirai', 'notFoundLanguage', module.config.name), 'warn');
                        if (module.config.dependencies && typeof module.config.dependencies == 'object') {
                            for (const reqDependencies in module.config.dependencies) {
                                const reqDependenciesPath = join(__dirname, 'nodemodules', 'node_modules', reqDependencies);
                                try {
                                    if (!global.nodemodule.hasOwnProperty(reqDependencies)) {
                                        if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global.nodemodule[reqDependencies] = require(reqDependencies);
                                        else global.nodemodule[reqDependencies] = require(reqDependenciesPath);
                                    } else '';
                                } catch {
                                    var check = false;
                                    var isError;
                                    logger.loader(global.getText('mirai', 'notFoundPackage', reqDependencies, module.config.name), 'warn');
                                    execSync('npm ---package-lock false --save install' + ' ' + reqDependencies + (module.config.dependencies[reqDependencies] == '*' || module.config.dependencies[reqDependencies] == '' ? '' : '@' + module.config.dependencies[reqDependencies]), { 'stdio': 'inherit', 'env': process['env'], 'shell': true, 'cwd': join(__dirname, 'nodemodules') });
                                    for (let i = 1; i <= 3; i++) {
                                        try {
                                            require['cache'] = {};
                                            if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global['nodemodule'][reqDependencies] = require(reqDependencies);
                                            else global['nodemodule'][reqDependencies] = require(reqDependenciesPath);
                                            check = true;
                                            break;
                                        } catch (error) { isError = error; }
                                        if (check || !isError) break;
                                    }
                                    if (!check || isError) throw global.getText('mirai', 'cantInstallPackage', reqDependencies, module.config.name, isError);
                                }
                            }
                            logger.loader(global.getText('mirai', 'loadedPackage', module.config.name));
                        }
                        if (module.config.envConfig) try {
                            for (const envConfig in module.config.envConfig) {
                                if (typeof global.configModule[module.config.name] == 'undefined') global.configModule[module.config.name] = {};
                                if (typeof global.config[module.config.name] == 'undefined') global.config[module.config.name] = {};
                                if (typeof global.config[module.config.name][envConfig] !== 'undefined') global['configModule'][module.config.name][envConfig] = global.config[module.config.name][envConfig];
                                else global.configModule[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
                                if (typeof global.config[module.config.name][envConfig] == 'undefined') global.config[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
                            }
                            logger.loader(global.getText('mirai', 'loadedConfig', module.config.name));
                        } catch (error) {
                            throw new Error(global.getText('mirai', 'loadedConfig', module.config.name, JSON.stringify(error)));
                        }
                        if (module.onLoad) {
                            try {
                                const moduleData = {};
                                moduleData.api = loginApiData;
                                moduleData.models = botModel;
                                module.onLoad(moduleData);
                            } catch (_0x20fd5f) {
                                throw new Error(global.getText('mirai', 'cantOnload', module.config.name, JSON.stringify(_0x20fd5f)), 'error');
                            };
                        }
                        if (module.handleEvent) global.client.eventRegistered.push(module.config.name);
                        global.client.commands.set(module.config.name, module);
                        logger.loader(global.getText('mirai', 'successLoadModule', module.config.name));
                    } catch (error) {
                        logger.loader(global.getText('mirai', 'failLoadModule', module.config.name, error), 'error');
                    };
                }
            }(),
            function() {
                const events = readdirSync(global.client.mainPath + '/modules/events').filter(event => event.endsWith('.js') && !global.config.eventDisabled.includes(event));
                for (const ev of events) {
                    try {
                        var event = require(global.client.mainPath + '/modules/events/' + ev);
                        if (!event.config || !event.run) throw new Error(global.getText('mirai', 'errorFormat'));
                        if (global.client.events.has(event.config.name) || '') throw new Error(global.getText('mirai', 'nameExist'));
                        if (event.config.dependencies && typeof event.config.dependencies == 'object') {
                            for (const dependency in event.config.dependencies) {
                                const _0x21abed = join(__dirname, 'nodemodules', 'node_modules', dependency);
                                try {
                                    if (!global.nodemodule.hasOwnProperty(dependency)) {
                                        if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                                        else global.nodemodule[dependency] = require(_0x21abed);
                                    } else '';
                                } catch {
                                    let check = false;
                                    let isError;
                                    logger.loader(global.getText('mirai', 'notFoundPackage', dependency, event.config.name), 'warn');
                                    execSync('npm --package-lock false --save install' + dependency + (event.config.dependencies[dependency] == '*' || event.config.dependencies[dependency] == '' ? '' : '@' + event.config.dependencies[dependency]), { 'stdio': 'inherit', 'env': process['env'], 'shell': true, 'cwd': join(__dirname, 'nodemodules') });
                                    for (let i = 1; i <= 3; i++) {
                                        try {
                                            require['cache'] = {};
                                            if (global.nodemodule.includes(dependency)) break;
                                            if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                                            else global.nodemodule[dependency] = require(_0x21abed);
                                            check = true;
                                            break;
                                        } catch (error) { isError = error; }
                                        if (check || !isError) break;
                                    }
                                    if (!check || isError) throw global.getText('mirai', 'cantInstallPackage', dependency, event.config.name);
                                }
                            }
                            logger.loader(global.getText('mirai', 'loadedPackage', event.config.name));
                        }
                        if (event.config.envConfig) try {
                            for (const _0x5beea0 in event.config.envConfig) {
                                if (typeof global.configModule[event.config.name] == 'undefined') global.configModule[event.config.name] = {};
                                if (typeof global.config[event.config.name] == 'undefined') global.config[event.config.name] = {};
                                if (typeof global.config[event.config.name][_0x5beea0] !== 'undefined') global.configModule[event.config.name][_0x5beea0] = global.config[event.config.name][_0x5beea0];
                                else global.configModule[event.config.name][_0x5beea0] = event.config.envConfig[_0x5beea0] || '';
                                if (typeof global.config[event.config.name][_0x5beea0] == 'undefined') global.config[event.config.name][_0x5beea0] = event.config.envConfig[_0x5beea0] || '';
                            }
                            logger.loader(global.getText('mirai', 'loadedConfig', event.config.name));
                        } catch (error) {
                            throw new Error(global.getText('mirai', 'loadedConfig', event.config.name, JSON.stringify(error)));
                        }
                        if (event.onLoad) try {
                            const eventData = {};
                            eventData.api = loginApiData, eventData.models = botModel;
                            event.onLoad(eventData);
                        } catch (error) {
                            throw new Error(global.getText('mirai', 'cantOnload', event.config.name, JSON.stringify(error)), 'error');
                        }
                        global.client.events.set(event.config.name, event);
                        logger.loader(global.getText('mirai', 'successLoadModule', event.config.name));
                    } catch (error) {
                        logger.loader(global.getText('mirai', 'failLoadModule', event.config.name, error), 'error');
                    }
                }
            }()
        logger.loader(global.getText('mirai', 'finishLoadModule', global.client.commands.size, global.client.events.size)) 
        logger.loader('=== ' + (Date.now() - global.client.timeStart) + 'ms ===')
        writeFileSync(global.client['configPath'], JSON['stringify'](global.config, null, 4), 'utf8') 
        unlinkSync(global['client']['configPath'] + '.temp');        
        const listenerData = {};
        listenerData.api = loginApiData; 
        listenerData.models = botModel;
        const listener = require('./includes/listen')(listenerData);

        function listenerCallback(error, message) {
            if (error) return logger(global.getText('mirai', 'handleListenError', JSON.stringify(error)), 'error');
            if (['presence', 'typ', 'read_receipt'].some(data => data == message.type)) return;
            if (global.config.DeveloperMode == !![]) console.log(message);
            return listener(message);
        };
        global.handleListen = loginApiData.listenMqtt(listenerCallback);
        try {
            await checkBan(loginApiData);
        } catch (error) {
            return //process.exit(0);
        };
        if (!global.checkBan) logger(global.getText('mirai', 'warningSourceCode'), '《 YURI GLOBAL BAN 》');
        global.client.api = loginApiData
        logger(`CLARK SHIROSUZUKA`, '《 YURI 》');
        logger('Hey, thank you for using R.C.B. PROJECT YURI', '《 CLARK 》');
        logger("Modified by Clark Shirosuzuka", '《 CLARK 》');
        logger("FB: facebook.com/Réynél.Eśquível", 'Fixed by Clark Shirosuzuka');
      var cron = require("node-cron");
      //mamatay kang magnanakaw ng files potanginamo
const momentt = require("moment-timezone").tz("Asia/Manila");
    const day = momentt.day();
    const time = momentt.format("HH:mm:ss");
loginApiData.sendMessage(`━━━━━━━━━━━━━━━━━━━\n❖《《Ｒ.Ｃ.Ｂ. ＹＵＲＩ》》❖\n━━━━━━━━━━━━━━━━━━━\n𝙼𝚊𝚜𝚝𝚎𝚛, 𝙿𝚛𝚘𝚓𝚎𝚌𝚝 ${global.config.BOTNAME} 𝚜𝚢𝚜𝚝𝚎𝚖 𝚒𝚜 𝚗𝚘𝚠 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚌𝚘𝚗𝚗𝚎𝚌𝚝𝚎𝚍 𝚝𝚘 𝚝𝚑𝚒𝚜 𝚊𝚌𝚌𝚘𝚞𝚗𝚝!\n━━━━━━━━━━━━━━━━━━━\n𝖭𝖺𝗆𝖾: ${global.config.BOTNAME}\n𝖯𝗋𝖾𝖿𝗂𝗑: 《  ${global.config.PREFIX}  》\n𝖮𝗐𝗇𝖾𝗋: ${global.config.BOTOWNER}\n𝖠𝖽𝗆𝗂𝗇: ${global.config.OWNERID}`, global.config.ADMINBOT[0])
      //for autochange bio naman
cron.schedule(`0 0 */1 * * *`, () => {
var o = moment.tz("Asia/Manila").format("MM/DD/YYYY");
  loginApiData.changeBio(`❇ 𝙿𝚛𝚎𝚏𝚒𝚡: ${global.config.PREFIX}\n❁ 𝙽𝚊𝚖𝚎: ${global.config.BOTNAME}\n✿ 𝙳𝚊𝚝𝚎 𝙽𝚘𝚠: ${o}`);
}, {
  scheduled: true,
  timezone: "Asia/Manila"
}); 
      var tet = global.config.ADMINBOT;
cron.schedule(`0 */123 * * * *`, () => {
  for (let pep of tet)
  loginApiData.sendMessage(`━━━━━━━━━━━━━━━━━━━\n❖《《Ｒ.Ｃ.Ｂ. ＹＵＲＩ》》❖\n━━━━━━━━━━━━━━━━━━━\n𝙼𝚊𝚜𝚝𝚎𝚛, 𝙿𝚛𝚘𝚓𝚎𝚌𝚝 ${global.config.BOTNAME} 𝚒𝚜 𝚗𝚘𝚠 𝚙𝚛𝚘𝚌𝚎𝚎𝚍𝚒𝚗𝚐 𝚝𝚘 𝚊𝚞𝚝𝚘 𝚛𝚎𝚜𝚝𝚊𝚛𝚝 𝚝𝚘 𝚊𝚟𝚘𝚒𝚍 𝚋𝚎𝚒𝚗𝚐 𝚝𝚞𝚛𝚗𝚎𝚍 𝚘𝚏𝚏. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝 𝚙𝚊𝚝𝚒𝚎𝚗𝚝𝚕𝚢.\n━━━━━━━━━━━━━━━━━━━\n𝖭𝖺𝗆𝖾: ${global.config.BOTNAME}\n𝖯𝗋𝖾𝖿𝗂𝗑: 《  ${global.config.PREFIX}  》\n𝖮𝗐𝗇𝖾𝗋: ${global.config.BOTOWNER}\n𝖠𝖽𝗆𝗂𝗇: ${global.config.OWNERID}`, pep,() => process.exit(1));
},{
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 0 0 * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage("𝖦𝗈𝗈𝖽 𝖾𝖺𝗋𝗅𝗒 𝗆𝗈𝗋𝗇𝗂𝗇𝗀 𝗆𝗂𝗇𝖺-𝗌𝖺𝗇, 𝗂𝗍’𝗌 𝗍𝗂𝗆𝖾 𝗍𝗈 𝗌𝗅𝖾𝖾𝗉 𝗇𝗈𝗐 𝖺𝗇𝖽 𝖽𝗈𝗇'𝗍 𝗌𝗍𝖺𝗒 𝗎𝗉 𝗅𝖺𝗍𝖾.", now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 0 3 * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage("𝖽𝗈𝗇'𝗍 𝗈𝗏𝖾𝗋𝗍𝗁𝗂𝗇𝗄 𝗍𝗈𝗈 𝗆𝗎𝖼𝗁, 𝖺𝗅𝗅 𝖻𝖺𝖽 𝗍𝗁𝗂𝗇𝗀'𝗌 𝗂𝗌 𝗃𝗎𝗌𝗍 𝗍𝖾𝗆𝗉𝗈𝗋𝖺𝗋𝗒, 𝗍𝖺𝗄𝖾 𝖺 𝗋𝖾𝗌𝗍 𝖺𝗇𝖽 𝖿𝗈𝗋𝗀𝖾𝗍 𝖾𝗏𝖾𝗋𝗒𝗍𝗁𝗂𝗇𝗀 𝖿𝗈𝗋 𝖺 𝗐𝗁𝗂𝗅𝖾 𝗌𝗅𝖾𝖾𝗉 𝗐𝖾𝗅𝗅 𝗆𝗂𝗇𝖺-𝗌𝖺𝗇", now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 0 5 * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage("𝖦𝗈𝗈𝖽 𝗆𝗈𝗋𝗇𝗂𝗇𝗀 𝗆𝗂𝗇𝖺-𝗌𝖺𝗇! 𝗂𝗍'𝗌 𝗍𝗂𝗆𝖾 𝗍𝗈 𝖾𝗑𝖾𝗋𝖼𝗂𝗌𝖾 𝗍𝗈 𝗆𝖺𝗂𝗇𝗍𝖺𝗂𝗇 𝗒𝗈𝗎𝗋 𝗁𝖾𝖺𝗅𝗍𝗁 𝗀𝗈𝗈𝖽!", now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 0 6 * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage("𝗍𝗁𝖾 𝗌𝗎𝗇 𝗂𝗌 𝖺 𝖽𝖺𝗂𝗅𝗒 𝗋𝖾𝗆𝗂𝗇𝖽𝖾𝗋 𝗍𝗁𝖺𝗍 𝗐𝖾 𝗍𝗈𝗈 𝖼𝖺𝗇 𝗋𝗂𝗌𝖾 𝖺𝗀𝖺𝗂𝗇 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝖽𝖺𝗋𝗄𝗇𝖾𝗌𝗌, 𝗍𝗁𝖺𝗍 𝗐𝖾 𝗍𝗈𝗈 𝖼𝖺𝗇 𝗌𝗁𝗂𝗇𝖾 𝗈𝗎𝗋 𝗈𝗐𝗇 𝗅𝗂𝗀𝗁𝗍 𝗀𝗈𝗈𝖽 𝗆𝗈𝗋𝗇𝗂𝗇𝗀 𝗆𝗂𝗇𝖺-𝗌𝖺𝗇", now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 0 7 * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage("𝖦𝗈𝗈𝖽 𝗆𝗈𝗋𝗇𝗂𝗇𝗀 𝗆𝗂𝗇𝖺-𝗌𝖺𝗇! 𝗂𝗍'𝗌 𝗍𝗂𝗆𝖾 𝗍𝗈 𝗍𝖺𝗄𝖾 𝗒𝗈𝗎𝗋 𝖻𝗋𝖾𝖺𝗄𝖿𝖺𝗌𝗍 🍳☕🍞", now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 0 12 * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage("𝖦𝗈𝗈𝖽 𝖺𝖿𝗍𝖾𝗋𝗇𝗈𝗈𝗇 𝗆𝗂𝗇𝖺-𝗌𝖺𝗇! 𝖽𝗈𝗇'𝗍 𝖿𝗈𝗋𝗀𝖾𝗍 𝗍𝗈 𝖾𝖺𝗍 𝗅𝗎𝗇𝖼𝗁, 𝖾𝖺𝗍 𝗐𝖾𝗅𝗅 😽😽", now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 0 13 * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage("𝖽𝗈𝗇'𝗍 𝗉𝗎𝗌𝗁 𝗒𝗈𝗎𝗋𝗌𝖾𝗅𝖿 𝗍𝗈𝗈 𝗁𝖺𝗋𝖽, 𝖿𝗈𝗋𝗀𝖾𝗍 𝖾𝗏𝖾𝗋𝗒𝗍𝗁𝗂𝗇𝗀 𝖿𝗈𝗋 𝖺 𝗆𝗈𝗆𝖾𝗇𝗍 𝖺𝗇𝖽 𝗍𝖺𝗄𝖾 𝗌𝗈𝗆𝖾 𝗋𝖾𝗌𝗍 𝗀𝗈𝗈𝖽 𝖺𝖿𝗍𝖾𝗋𝗇𝗈𝗈𝗇 𝗆𝗂𝗇𝖺-𝗌𝖺𝗇", now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 0 18 * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage("𝗍𝗁𝖾 𝗌𝖾𝗍𝗍𝗂𝗇𝗀 𝗌𝗎𝗇 𝗂𝗌 𝖺𝗇 𝗂𝗇𝖽𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝗍𝗁𝖺𝗍 𝗇𝗈 𝗆𝖺𝗍𝗍𝖾𝗋 𝗁𝗈𝗐 𝗁𝖺𝗋𝖽 𝗒𝗈𝗎𝗋 𝖽𝖺𝗒 𝗐𝖺𝗌 𝗂𝗍 𝗂𝗌 𝗇𝗈𝗐 𝗈𝗏𝖾𝗋, 𝗌𝗂𝗍 𝖻𝖺𝖼𝗄, 𝗋𝖾𝗅𝖺𝗑, 𝖺𝗇𝖽 𝖻𝖾 𝗉𝗋𝗈𝗎𝖽 𝗍𝗁𝖺𝗍 𝗒𝗈𝗎’𝗏𝖾 𝗌𝗎𝗋𝗏𝗂𝗏𝖾𝖽 𝖺𝗇𝗈𝗍𝗁𝖾𝗋 𝖽𝖺𝗒 𝗀𝗈𝗈𝖽 𝖾𝗏𝖾𝗇𝗂𝗇𝗀 𝗆𝗂𝗇𝗇𝖺", now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 0 21 * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage("𝖬𝗂𝗇𝖺-𝗌𝖺𝗇, 𝖨𝗍'𝗌 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝟫:𝟢𝟢𝗉𝗆 𝗂𝗍𝗌 𝗍𝗂𝗆𝖾 𝗍𝗈 𝗍𝖺𝗄𝖾 𝗌𝗈𝗆𝖾 𝗋𝖾𝗌𝗍 𝗇𝗈𝗐, 𝗌𝗅𝖾𝖾𝗉 𝗐𝖾𝗅𝗅 𝖺𝗇𝖽 𝖽𝗈𝗇'𝗍 𝖿𝗈𝗋𝗀𝖾𝗍 𝗍𝗈 𝗉𝗋𝖺𝗒 𝖻𝖾𝖿𝗈𝗋𝖾 𝗒𝗈𝗎 𝖺𝗅𝗅 𝗌𝗅𝖾𝖾𝗉, 𝖦𝗈𝗈𝖽 𝗇𝗂𝗀𝗁𝗍 💛", now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
        // setInterval(async function () {
        //     // global.handleListen.stopListening(),
        //     global.checkBan = ![],
        //     setTimeout(function () {
        //         return global.handleListen = loginApiData.listenMqtt(listenerCallback);
        //     }, 500);
        //     try {
        //         await checkBan(loginApiData);
        //     } catch {
        //         return process.exit(0);
        //     };
        //     if (!global.checkBan) logger(global.getText('mirai', 'warningSourceCode'), '《 YURI GLOBAL BAN 》');
        //     global.config.autoClean && (global.data.threadInfo.clear(), global.client.handleReply = global.client.handleReaction = {});
        //     if (global.config.DeveloperMode == !![]) 
        //         return logger(global.getText('mirai', 'refreshListen'), '《 YURI DEV MODE 》');
        // }, 600000);
    });
}
//////////////////////////////////////////////
//========= Connecting to Database =========//
//////////////////////////////////////////////

(async() => {
    try {
        await sequelize.authenticate();
        const authentication = {};
        authentication.Sequelize = Sequelize;
        authentication.sequelize = sequelize;
        const models = require('./includes/database/model')(authentication);
        logger(global.getText('mirai', 'successConnectDatabase'), '《 YURI DATABASE 》');
        const botData = {};
        botData.models = models
        onBot(botData);
    } catch (error) { logger(global.getText('mirai', 'successConnectDatabase', JSON.stringify(error)), '《 YURI DATABASE 》'); }
console.log(chalk.bold.hex("#CC66FF").bold("================ SUCCESFULLY ==================="));
   
})();
process.on('unhandledRejection', (err, p) => {});

