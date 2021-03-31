/*curi case jangan hapus wm ajg
numpang nama jangan hapus tqtq gblg
hargai yang punya case asu

info :
create apikey leys dulu ajg tar error protes kntl
cara create apikey leys udah ada di video njg
100% gratis terus pasang ke folder /settings/wem.json

ada yang error langsung lapor ke wa 085746897368

THANKS TO

RIU (My Inspirasi)
YOGI (My Partner)
LOL TEAM (Beberapa Case)

THANKS ALL CREATOR BOT WHATSAPP
THANKS ALL APIKEY YANG ADA DISINI

tqtq jangan dihapus anjg*/

//wa connection
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")

//node modules
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const imgbb = require('imgbb-uploader')
const request = require('request')

//apikey + settings
const { NamaBot, NamaOwner, limitawal, memberlimit, cr } = JSON.parse(fs.readFileSync('./settings/wem.json'))
const LeysApi = 'WEMPYGANSS'
const DapApi = 'dappabotwa'
const ZeksApi = 'apivinz'
const OnlyDev = 'WEMPYGANSS'
const LolHuman = '28b05e1d8dd2630764f15713'
//data lib
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { animesaran } = require('./lib/animesaran')
const { animesaran2 } = require('./lib/animesaran2')
const { donasi } = require('./lib/donasi')
const { infown } = require('./lib/infown')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { snk } = require('./lib/snk')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')

//jawaban
const { ind } = require('./asu')

//kontak Yogi
const vcard1 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:WEM\n' //ganti nama lu! 
              + 'ORG: Owner 𝓙𝓐𝓒𝓚 𝓑𝓞𝓣;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=6285746897368:+62 85746897368\n'  //ganti nomor lu! 
              + 'END:VCARD'

//kontak Dappa
const vcard2 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:WEM\n' //ganti nama lu! 
              + 'ORG: Owner 𝓙𝓐𝓒𝓚 𝓑𝓞𝓣;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=6285746897368:+62 85746897368\n'  //ganti nomor lu! 
              + 'END:VCARD'

//blocked
prefix = '/'
blocked = []

//owner number
const ownerNumber = ["6285746897368@s.whatsapp.net","6285746897368@s.whatsapp.net"]

//file json
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/user/admin.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))

//function
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }

        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

//function
const wem = new WAConnection()
wem.logger.level = 'warn'
console.log(banner.string)
   wem.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('(+)','white'), color('WEM','red'), color('(+)','white'), color(' SQAN CODENYA','aqua'), color('FOLLOW IG @wem_.24','yellow'))
})

	wem.on('credentials-updated', () => {
		fs.writeFileSync('./wem.json', JSON.stringify(wem.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'info!')
	})
	fs.existsSync('./wem.json') && wem.loadAuthInfo('./wem.json')
	wem.on('connecting', () => {
		start('2', color('[ ! ]Scan Codenya Ngab','aqua'))
	})
	wem.on('open', () => {
		success('2', color('[ ! ]Tersambung','red'))
	})
	wem.connect({timeoutMs: 30*1000})


wem.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await wem.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await wem.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\ Selamat datang di group ${mdata.subject} yang betah ya di sini`
				let buff = await getBuffer(ppimg)
				wem.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await wem.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}👋🍁`
				let buff = await getBuffer(ppimg)
				wem.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	wem.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	wem.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = wem.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = wem.contacts[sender] != undefined ? wem.contacts[sender].vname || wem.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await wem.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            //security feature
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				wem.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				wem.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? wem.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : wem.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    wem.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			wem.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const senwemtt = (teks) => {
		    wem.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	        //end security feature

			
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return wem.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            wem.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        wem.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    wem.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
        
      
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
          
// ANTI LINK GRUP
                if (messagesLink.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        wem.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinmin")) return reply("#izinmin diterima")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        wem.groupRemove(from, [kic]).catch((e)=>{reply(`𝓙𝓐𝓒𝓚 𝓑𝓞𝓣 HARUS JADI ADMINâ—`)})
		        }, 3000)
		        setTimeout( () => {
			        wem.updatePresence(from, Presence.composing)
			        reply("Hedsot....")
		        }, 2000)
		        setTimeout( () => {
			        wem.updatePresence(from, Presence.composing)
			        reply("Bismillah...")
		        }, 1000)
		        setTimeout( () => {
			        wem.updatePresence(from, Presence.composing)
			        reply("Ready?...")
		        }, 0)
		  }
		  
           if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`hmmm...`)
						setTimeout( () => {
 	                           wem.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								wem.updatePresence(from, Presence.composing)
								reply("byee")
							}, 4000)
								setTimeout( () => {
								wem.updatePresence(from, Presence.composing)
								reply("awokaowkaowk")
							}, 3000)
								setTimeout( () => {
								wem.updatePresence(from, Presence.composing)
								reply("semoga emak lu sehat")
							}, 2000)
								setTimeout( () => {
								wem.updatePresence(from, Presence.composing)
								reply("gw keluar ye")
							}, 1000)
								setTimeout( () => {
								wem.updatePresence(from, Presence.composing)
								reply(`sorry ngab member minimal ${memberlimit}`)
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
        	if (bad.includes(messagesLink)) {
		if (!isGroup) return
		if (isGroupAdmins) return reply(`${pushname} ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ`)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`sᴀʏᴏɴᴀʀᴀ ʙᴇʙᴀɴ ɢʀᴜᴘ`)
		}, 100)
		setTimeout( () => {
		wem.groupRemove(from, [Kick]).catch((e) => {reply(`ERROR: ${e}`)}) 
		}, 10)
		setTimeout( () => {
		reply(`_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_\nᴍᴀᴀғ ${pushname} ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ${groupMetadata.subject}`)
		}, 0)
		}

           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//chat message
		    if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && !isCmd) console.log(color([time], "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
            if (!isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
			
			switch(command) {
//============================BATES NGAB============================\\
//STORY WA MENU
                case 'storyepep':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/storyepep?apikey=${OnlyDev}`)
                    asup = await getBuffer(anu.result.url)
                    wem.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'NIH NGAB STORY EPEP'})
                    break
                 case 'storylordfahri':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/lordfahri?apikey=${OnlyDev}`)
                    asup = await getBuffer(anu.result.url)
                    wem.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'STORY LORD FAHRI'})
                    break
                   
//============================BATES NGAB============================\\
//ASUPAN MENU
                case 'asupansalwa':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupansalwa?apikey=${OnlyDev}`)
                    asup = await getBuffer(anu.result.url)
                    wem.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'ASUPANNYA NGAB'})
                    break
                case 'asupan':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${LolHuman}`)
                    asup = await getBuffer(anu.result)
                    wem.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'ASUPANNYA NGAB'})
                    break
                case 'asupan2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupan?apikey=${OnlyDev}`)
                    asup = await getBuffer(anu.result.url)
                    wem.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'ASUPANNYA NGAB'})
                    break
                case 'asupanranal':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanrana?apikey=${OnlyDev}`)
                    asup = await getBuffer(anu.result.url)
                    wem.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'ASUPANNYA NGAB'})
                    break
                case 'asupanamelia':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanamel?apikey=${OnlyDev}`)
                    asup = await getBuffer(anu.result.url)
                    wem.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'ASUPANNYA NGAB'})
                    break
                case 'asupanjessicajane':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanjane?apikey=${OnlyDev}`)
                    asup = await getBuffer(anu.result.url)
                    wem.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'ASUPANNYA NGAB'})
                    break
                case 'asupanghea':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanghea?apikey=${OnlyDev}`)
                    asup = await getBuffer(anu.result.url)
                    wem.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'ASUPANNYA NGAB'})
                    break
                case 'asupanjungputri':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanjungputri?apikey=${OnlyDev}`)
                    asup = await getBuffer(anu.result.url)
                    wem.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'ASUPANNYA NGAB'})
                    break
                case 'asupankaiahelga':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupankaia?apikey=${OnlyDev}`)
                    asup = await getBuffer(anu.result.url)
                    wem.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'ASUPANNYA NGAB'})
                    break

                
//============================BATES NGAB============================\\
//18+ MENU
                case 'xnxxsearch':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    reply(ind.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    reply(ind.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${LolHuman}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    wem.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
//============================BATES NGAB============================\\
//DASAR MENU
                case 'admin':
                case 'owner':
                case 'creator':
                case 'developer':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                wem.sendMessage(from, {displayname: "WEM", vcard: vcard1}, MessageType.contact, { quoted: mek})
                wem.sendMessage(from, {displayname: "WEM", vcard: vcard2}, MessageType.contact, { quoted: mek})
                wem.sendMessage(from, 'Tuh nomer owner ku 😎 jangan spam goblog atau gw block lu',MessageType.text, { quoted: mek} )
                break
                case 'daftar':
                //❗case by wem & YOGI PW & DappaUhuy
		        wem.updatePresence(from, Presence.composing)
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('Umur harus berupa angka!')       
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser > 30) return reply(`UMUR KAMU TERLALU TUA`)
                if (umurUser < 10) return reply(`UMUR KAMU TERLALU MUDA`)
                try {
                ppimg = await wem.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                } catch {
                ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                veri = sender
                if (isGroup) {
                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                await wem.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                reply('Terima Kasih Sudah Absen')
                addATM(sender)
                addLevelingId(sender)
                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                await wem.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                reply('Terima Kasih Sudah Daftar')
                addATM(sender)
                addLevelingId(sender)
                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
                break
				case 'test':
				//❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
			    wem.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
				break
		        case 'ping':
		        //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
				wem.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
				break
                case 'donate':
                if (!isRegistered) return reply(ind.noregis)
                tod = await getBuffer(`https://i.ibb.co/L8g2T1W/QR-Merdeka-Shop-230321-150601.jpg`)
                wem.sendMessage(from, tod, image, {quoted: mek, caption: '*JIKA KALIAN INGIN DONASI LEWAT QRIS SCAN QR DIATAS YAA*'})
                break
				case 'donasi':
		        //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
				wem.sendMessage(from, donasi(), text)
				break
				case 'infoowner':
		        case 'infodeveloper':
		        case 'infopengembang':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
				wem.sendMessage(from, infown(), text)
				break
				case 'bahasa':
				//❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
				wem.sendMessage(from, bahasa(), text)
			    await limitAdd(sender)
				break
		        case 'kodenegara':
			    //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
				wem.sendMessage(from, negara(), text)
				await limitAdd(sender)
				break
		        case 'del':
		        case 'd':
		        case 'delete':
		        //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (!isOwner) return reply(ind.ownerb())
				wem.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				await limitAdd(sender)
				break
				case 'info':
				//❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
				me = wem.user
				uptime = process.uptime()
				teks = `INFO OWNER\nOwner bot : WEM\nNo Owner : wa.me/6285746897368\nIg owner : www.instagram.com/wem_.24\n━━━━━━━━━━━━━━━━━━━━\nINFO BOT\nNama bot : ${me.name}\nNomor bot : @${me.jid.split('@')[0]}\nPrefix : ${prefix}\nTotal block contact : ${blocked.length}\nThe bot is active on : ${kyun(uptime)}\nKetik : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\nKetik : ${prefix}owner untuk menghubungi admin bot kami.`
				buffer = await getBuffer(me.imgUrl)
				wem.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
				break
				case 'snk':
		        case 'peraturan':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
		        wem.sendMessage(from, snk(), text)
		        break
//MENU
                case 'help':
		        case 'menu':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./lib/logo.jpg`)
                dappuhy = `
Info Developer
❒ Nama : WEM
❒ GitHub : https://github.com/wempy24
❒ Apikey : https://restapī-wem.herokuapp.com
❒ Telegram : https://t.me/wem24
❒ Instagram : https://www.instagram.com/wem_.24

Info Bot
❒ 𝖭𝖺𝗆𝖺 : ${NamaBot}
❒ 𝖮𝗐𝗇𝖾𝗋 : ${NamaOwner}
❒ 𝖯𝗋𝖾𝖿𝗂𝗑 : ${prefix}
❒ 𝖲𝗉𝖾𝖾𝖽 : ${process.uptime()}

${prefix}snk
${prefix}infoowner
${prefix}info
${prefix}donasi
${prefix}ping
${prefix}owner
${prefix}test

❒ GROUP MENU ❒
  ⤷ ${prefix}nobadword
  ⤷ ${prefix}mutual
  ⤷ ${prefix}next
  ⤷ ${prefix}setname
  ⤷ ${prefix}setdesc
  ⤷ ${prefix}promote
  ⤷ ${prefix}demote
  ⤷ ${prefix}listadmin
  ⤷ ${prefix}add
  ⤷ ${prefix}kick
  ⤷ ${prefix}linkgc
  ⤷ ${prefix}hidetag
  ⤷ ${prefix}level
  ⤷ ${prefix}group
  ⤷ ${prefix}simih
  ⤷ ${prefix}antilink
  
 ❒ OWNER MENU ❒
  ⤷ ${prefix}antidelete
  ⤷ ${prefix}nsfw
  ⤷ ${prefix}leveling
  ⤷ ${prefix}welcome
  ⤷ ${prefix}event
  ⤷ ${prefix}clone
  ⤷ ${prefix}bc
  ⤷ ${prefix}block
  ⤷ ${prefix}unblock
  ⤷ ${prefix}leave
  ⤷ ${prefix}tagall
  ⤷ ${prefix}clearall
  ⤷ ${prefix}setprefix
  ⤷ ${prefix}resetlimit
  ⤷ ${prefix}setlimit
  ⤷ ${prefix}setmemlimit
  ⤷ ${prefix}addbadword
  ⤷ ${prefix}delbadword
  ⤷ ${prefix}setppbot
  ⤷ ${prefix}ban
  ⤷ ${prefix}unban
  
  ❒ ISLAM MENU ❒
  ⤷ ${prefix}tahlil
  ⤷ ${prefix}jadwalsholat
  ⤷ ${prefix}kisahnabi
  ⤷ ${prefix}ayatkursi
  ⤷ ${prefix}doaharian
  ⤷ ${prefix}niatsholat
  ⤷ ${prefix}bacaansholat
  
  ❒ 18+ MENU ❒
  ⤷ ${prefix}xnxx
  ⤷ ${prefix}xnxxsearch
  
  ❒ STORY MENU ❒
  ⤷ ${prefix}storyepep
  ⤷ ${prefix}storylordfahri

  ❒ ASUPAN MENU ❒
  ⤷ ${prefix}asupanjungputri
  ⤷ ${prefix}asupansalwa
  ⤷ ${prefix}asupankaiahelga
  ⤷ ${prefix}asupan
  ⤷ ${prefix}asupan2
  ⤷ ${prefix}asupanjessicajane
  ⤷ ${prefix}asupanamelia
  ⤷ ${prefix}asupanranal

  ❒ DOWNLOAD MENU ❒
  ⤷ ${prefix}twtdl
  ⤷ ${prefix}fbdl
  ⤷ ${prefix}igdl
  ⤷ ${prefix}jooxplay
  ⤷ ${prefix}spotify
  ⤷ ${prefix}spotifysearch
  ⤷ ${prefix}tiktokmusic
  ⤷ ${prefix}tiktoknowm
  ⤷ ${prefix}ytplay
  ⤷ ${prefix}ytmp3
  ⤷ ${prefix}ytmp4
  
 ❒ MATEMATIKA MENU ❒
  ⤷ ${prefix}perkalian
  ⤷ ${prefix}rumuspersegipanjang
  ⤷ ${prefix}rumuspersegi
  ⤷ ${prefix}kuadrat
  
  ❒ SOUND MENU ❒
  ⤷ ${prefix}sound
  ⤷ ${prefix}sound1
  ⤷ ${prefix}sound2
  ⤷ ${prefix}sound3
  ⤷ ${prefix}sound4
  ⤷ ${prefix}sound5
  ⤷ ${prefix}sound6
  ⤷ ${prefix}sound7
  ⤷ ${prefix}sound8
  ⤷ ${prefix}sound9
  ⤷ ${prefix}sound10
  ⤷ ${prefix}sound11
  ⤷ ${prefix}sound12
  ⤷ ${prefix}sound13
  ⤷ ${prefix}sound14
  ⤷ ${prefix}sound15
  ⤷ ${prefix}sound16
  ⤷ ${prefix}sound17
  ⤷ ${prefix}sound18
  ⤷ ${prefix}sound19
  ⤷ ${prefix}diam
  ⤷ ${prefix}ffburik
  ⤷ ${prefix}dj2
  ⤷ ${prefix}dj1
  
 ❒ MAKER MENU ❒
  ⤷ ${prefix}qrcode
  ⤷ ${prefix}barcode
  ⤷ ${prefix}cup
  ⤷ ${prefix}cup2
  ⤷ ${prefix}battlefield
  ⤷ ${prefix}glitchtext
  ⤷ ${prefix}googlesearch
  ⤷ ${prefix}neon
  ⤷ ${prefix}glow
  ⤷ ${prefix}summer
  ⤷ ${prefix}flower
  ⤷ ${prefix}naruto
  ⤷ ${prefix}blueneon
  ⤷ ${prefix}dropwater
  ⤷ ${prefix}matrix
  ⤷ ${prefix}breakwall
  ⤷ ${prefix}bakarnama
  ⤷ ${prefix}nulis
  ⤷ ${prefix}nulis2
  ⤷ ${prefix}nuris3
  ⤷ ${prefix}nulis4
  ⤷ ${prefix}attp
  ⤷ ${prefix}ttp
  ⤷ ${prefix}ttp2
  ⤷ ${prefix}ttp3
  ⤷ ${prefix}ttp4
  ⤷ ${prefix}pornhub
  ⤷ ${prefix}hartatahta
  ⤷ ${prefix}silktext
  ⤷ ${prefix}crossfire
  ⤷ ${prefix}pokemon
  ⤷ ${prefix}metalicglowm
  ⤷ ${prefix}rainbowglow
  ⤷ ${prefix}honey
  ⤷ ${prefix}rainbowshine
  ⤷ ${prefix}funnycup
  ⤷ ${prefix}summer
  ⤷ ${prefix}wolfmental
  ⤷ ${prefix}flamming
  ⤷ ${prefix}rainbowglow
  ⤷ ${prefix}whitecube
  ⤷ ${prefix}nightsky
  ⤷ ${prefix}gradient
  ⤷ ${prefix}goldtext
  ⤷ ${prefix}woodenboard
  ⤷ ${prefix}shadowsky
  ⤷ ${prefix}smoke
  ⤷ ${prefix}csgo
  
  ❒ STALKER MENU ❒
  ⤷ ${prefix}ytstalk 
  ⤷ ${prefix}igstalk 
  ⤷ ${prefix}githubstalk 
  ⤷ ${prefix}tiktokstalk 
 
  ❒ IMAGE EDIT MENU ❒
  ⤷ ${prefix}wanted
  ⤷ ${prefix}gtav
  ⤷ ${prefix}facebookpage
  ⤷ ${prefix}costumwp
  ⤷ ${prefix}komunis
  ⤷ ${prefix}deletepc
  ⤷ ${prefix}pantaimalam
  ⤷ ${prefix}imgtourl
  ⤷ ${prefix}pencil
  ⤷ ${prefix}bakar
  ⤷ ${prefix}crossgun
  ⤷ ${prefix}picture
  ⤷ ${prefix}hitler
  ⤷ ${prefix}blur
  ⤷ ${prefix}invert
  
   ❒ SERTIFIKAT MENU ❒
  ⤷ ${prefix}anakharamserti 
  ⤷ ${prefix}hekelserti 
  ⤷ ${prefix}babuserti 
  ⤷ ${prefix}ffserti 
  ⤷ ${prefix}bucinserti 
  ⤷ ${prefix}bocilepepserti 
  ⤷ ${prefix}gayserti 
  ⤷ ${prefix}pacarserti 
  ⤷ ${prefix}sadboyserti 
  ⤷ ${prefix}surgaserti 
  ⤷ ${prefix}pinterserti
  ⤷ ${prefix}badgirlserti
  ⤷ ${prefix}badboyserti
  ⤷ ${prefix}goodgirlserti
  ⤷ ${prefix}goodboyserti
  ⤷ ${prefix}editodberkelasserti
  ⤷ ${prefix}goodlookingserti
  ⤷ ${prefix}fucekboyserti
  ⤷ ${prefix}jametserti
  ⤷ ${prefix}youtuberserti
  ⤷ ${prefix}fftourserti
  ⤷ ${prefix}fftourserti2
  ⤷ ${prefix}fftourserti3
  ⤷ ${prefix}fftourserti4
  ⤷ ${prefix}fftourserti5
  ⤷ ${prefix}mltourserti
  ⤷ ${prefix}mltourserti2
  ⤷ ${prefix}mltourserti3
  ⤷ ${prefix}mltourserti4
  ⤷ ${prefix}mltourserti5
  ⤷ ${prefix}pubgtourserti
  ⤷ ${prefix}pubgtourserti2
  ⤷ ${prefix}pubgtourserti3
  ⤷ ${prefix}pubgtourserti4
  ⤷ ${prefix}pubgtourserti5
  
 ❒ INFORMATION MENU ❒
  ⤷ ${prefix}covidglobal
  ⤷ ${prefix}covidindo
  ⤷ ${prefix}jam
  ⤷ ${prefix}jadwaltv
  
 ❒ OTHER MENU ❒
  ⤷ ${prefix}sticker
  ⤷ ${prefix}stickerwm
  ⤷ ${prefix}ocr
  ⤷ ${prefix}toimg
  ⤷ ${prefix}telesticker
  
  ❒ FUN MENU ❒
  ⤷ ${prefix}tts
  ⤷ ${prefix}tts2
  ⤷ ${prefix}caklontong
  ⤷ ${prefix}family100
  ⤷ ${prefix}tebakgambar
  ⤷ ${prefix}artinama
  
  ❒ MEDIA MENU ❒
  ⤷ ${prefix}heroml
  ⤷ ${prefix}nickff
  ⤷ ${prefix}quotes
  ⤷ ${prefix}quotesdilan
  ⤷ ${prefix}faktaunik
  ⤷ ${prefix}katakatabijak
  ⤷ ${prefix}randompantun
  ⤷ ${prefix}randombucin
  ⤷ ${prefix}katakatabucin
  ⤷ ${prefix}randomnama
  ⤷ ${prefix}cersex
  
    ❒ SPAM MENU ❒
  ⤷ ${prefix}spamsms
  ⤷ ${prefix}spamcall
  ⤷ ${prefix}spamgmail
  
  ❒ FILM MENU ❒
  ⤷ ${prefix}searchfilm
  ⤷ ${prefix}filmapikterbaru
  ⤷ ${prefix}filmapikdrama
  ⤷ ${prefix}lk21
  
  ❒ LINK MENU ❒
  ⤷ ${prefix}shortlink
  ⤷ ${prefix}shortlink2
  ⤷ ${prefix}shortlink3
  
  ❒ NSFW MENU ❒
  ⤷ ${prefix}nsfwneko
  ⤷ ${prefix}nsfwwaifu
  ⤷ ${prefix}nsfweroyuri
  ⤷ ${prefix}nsfwyuri
  ⤷ ${prefix}nsfwlewd
  ⤷ ${prefix}nsfwpussy
  ⤷ ${prefix}nsfwnekonime
  ⤷ ${prefix}nsfwbaka
  ⤷ ${prefix}nsfwhug
  ⤷ ${prefix}nsfwahegao
  ⤷ ${prefix}nsfwass
  ⤷ ${prefix}nsfwbdsm
  ⤷ ${prefix}nsfwblowjob
  ⤷ ${prefix}nsfwboobjob
  ⤷ ${prefix}nsfwcreampie
  ⤷ ${prefix}nsfwcuckold
  ⤷ ${prefix}nsfwcum
  ⤷ ${prefix}nsfwelves
  ⤷ ${prefix}nsfwfemdom
  ⤷ ${prefix}nsfwglasses
  ⤷ ${prefix}nhentaipdf
  
 ❒ ANIME MENU ❒
  ⤷ ${prefix}wait
  ⤷ ${prefix}wait2
  ⤷ ${prefix}randomnekonime
  ⤷ ${prefix}randomanime
  ⤷ ${prefix}randomwaifu
  
  ❒ SEARCHING MENU ❒
  ⤷ ${prefix}playstore
  ⤷ ${prefix}wikipedia
  ⤷ ${prefix}brainly

  ❒ TQTQ ❒
ALLAH
THANKS ALL CREATOR BOT WHATSAPP
THANKS ALL REST API

  ❒ DONASI ❒
Ovo : _*0857-4689-7368*_
Dana : _*0857-4689-7368*_
Pulsa : _*0857-4689-7368*_

❒ SOSMED ❒
WEM
IG : wem_.24
WA : wa.me/6285746897368
` 

                    wem.sendMessage(from, wew, image, { quoted: mek, caption: dappuhy })
					break
//============================BATES NGAB============================\\
//MAKER MENU
                case 'qrcode':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}qrcode wem`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`https://api.zeks.xyz/api/qrencode?apikey=${ZeksApi}&text=${dapuhy}`)
                wem.sendMessage(from, asu, image, {caption: 'Jan Lupa Follow IG @wem_.24', quoted: mek})
                await limitAdd(sender)
                break
                case 'barcode':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}barcode wem`)
                dapuhy = body.slice(8)
                reply(ind.wait())
                asu = await getBuffer(`https://api.zeks.xyz/api/barcode?apikey=${ZeksApi}&text=${dapuhy}`)
                wem.sendMessage(from, asu, image, {caption: 'Jan Lupa Follow IG @wem_.24', quoted: mek})
                await limitAdd(sender)
                break
                case 'cup':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}cup WEM`)
				reply(ind.wait())
				ct = body.slice(4)
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=${DapApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'cup2':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}cup2 wem`)
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup2&apikey=${DapApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'battlefield':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}battlefield wem`)
				reply(ind.wait())
				ct = body.slice(12)
				dap1 = ct.split("|")[0];
                dap2 = ct.split("|")[1];
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textmaker/game?text=${dap1}&text2=${dap2}&theme=battlefield&apikey=${DapApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'glitchtext':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}glitchtext wem`)
				reply(ind.wait())
				ct = body.slice(11)
				dap1 = ct.split("|")[0];
                dap2 = ct.split("|")[1];
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textmaker?text=${dap1}&text2=${dap2}&theme=glitch&apikey=${DapApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'googlesearch':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}googlesearch wem|Uhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				dap1 = ct.split("|")[0];
                dap2 = ct.split("|")[1];
                dap3 = ct.split("|")[2];
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textmaker?text=${dap1}&text2=${dap2}&text3=${dap3}&theme=google-suggestion&apikey=${DapApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'neon':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}neon wem`)
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textmaker/metallic?text=${ct}&theme=neon&apikey=${DapApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'glow':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}glow wem`)
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textmaker/metallic?text=${ct}&theme=glow&apikey=${DapApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'summer':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}summer wem`)
				reply(ind.wait())
				ct = body.slice(7)
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textmaker/alam?text=${ct}&theme=summer&apikey=${DapApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'flower':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}summer wem`)
				reply(ind.wait())
				ct = body.slice(7)
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textmaker/alam?text=${ct}&theme=flower&apikey=${DapApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'naruto':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}naruto wem`)
				reply(ind.wait())
				ct = body.slice(7)
				anu = await fetchJson(`https://api.zeks.xyz/api/naruto?text=${ct}&apikey=${ZeksApi}`)
				dapuhy = await getBuffer(anu.result)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'blueneon':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}blueneon wem`)
                dapuhy = body.slice(9)
                reply(ind.wait())
                asu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=${ZeksApi}&text=${dapuhy}`)
                wem.sendMessage(from, asu, image, {caption: 'Jan Lupa Follow IG @wem_.24', quoted: mek})
                await limitAdd(sender)
                break
                case 'dropwater':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}dropwater wem`)
                dapuhy = body.slice(10)
                reply(ind.wait())
                asu = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=${ZeksApi}&text=${dapuhy}`)
                wem.sendMessage(from, asu, image, {caption: 'Jan Lupa Follow IG @wem_.24', quoted: mek})
                await limitAdd(sender)
                break
                case 'matrix':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}matrix wem`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=${ZeksApi}&text=${dapuhy}`)
                wem.sendMessage(from, asu, image, {caption: 'Jan Lupa Follow IG @wem_.24', quoted: mek})
                await limitAdd(sender)
                break
                case 'breakwall':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}breakwall wem`)
                dapuhy = body.slice(10)
                reply(ind.wait())
                asu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=${ZeksApi}&text=${dapuhy}`)
                wem.sendMessage(from, asu, image, {caption: 'Jan Lupa Follow IG @wem_.24', quoted: mek})
                await limitAdd(sender)
                break
				case 'bakarnama':
				//❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				cuk = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${cuk}`)
				wem.sendMessage(from, ct, image, {caption: 'Jan Lupa Follow IG @wem_.24', quoted: mek})
				await limitAdd(sender)
				break
                case 'nulis':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis wem`)
                dapuhy = body.slice(6)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukanan?text=${dapuhy}`)
                wem.sendMessage(from, asu, image, {caption: 'Jan Lupa Follow IG @wem_.24', quoted: mek})
                await limitAdd(sender)
                break
				case 'nulis2':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis wem`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukiri?text=${dapuhy}`)
                wem.sendMessage(from, asu, image, {caption: 'Jan Lupa Follow IG @wem_.24', quoted: mek})
                await limitAdd(sender)
                break
                case 'nulis3':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis wem`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${dapuhy}`)
                wem.sendMessage(from, asu, image, {caption: 'Jan Lupa Follow IG @wem_.24', quoted: mek})
                await limitAdd(sender)
                break
                case 'nulis4':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis wem`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${dapuhy}`)
                wem.sendMessage(from, asu, image, {caption: 'Jan Lupa Follow IG @wem_.24', quoted: mek})
                await limitAdd(sender)
                break
                case 'attp':
                //❗case by wem & YOGI PW & DappaUhuy
			    if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}attp wem`)
                reply(ind.wait())
                dapuhy = body.slice(6)
				dapzz = await getBuffer(`https://api.xteam.xyz/attp?file&text=${dapuhy}`)
				wem.sendMessage(from, dapzz, sticker, {quoted: mek})
				await limitAdd(sender)
				break
				case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                //❗case punya Lol Team
			    if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                reply(ind.wait())
                ini_txt = args.join(" ")
                ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${LolHuman}&text=${ini_txt}`)
                wem.sendMessage(from, ini_buffer, sticker, { quoted: mek})
                break
				case 'pornhub':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pornhub wem|Mantab Njirr Buat Bacol:v`)
				reply(ind.wait())
				ct = body.slice(8)
				dap1 = ct.split("|")[0];
                dap2 = ct.split("|")[1];
				anu = await fetchJson(`https://api.zeks.xyz/api/phub?apikey=${ZeksApi}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${dap1}&msg=${dap2}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'hartatahta':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}hartatahta wem`)
				dapuhy = body.slice(11)
				reply(ind.wait())
				asu = await getBuffer(`http://zekais-api.herokuapp.com/hartatahta?text=${dapuhy}`)
				wem.sendMessage(from, asu, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'silktext':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}silktext wem`)
				ct = body.slice(9)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/silk?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
    			case 'crossfire':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}crossfire wem`)
				reply(ind.wait())
				ct = body.slice(10)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/crossfire?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'pokemon':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pokemon wem`)
				reply(ind.wait())
				ct = body.slice(8)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/pokemon?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'metalicglow':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}metalicglow wem`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/metalic-glow?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'rainbowglow':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}rainbowglow wem`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/rainbow-glow?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'honey':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}honey wem`)
				reply(ind.wait())
				ct = body.slice(6)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/honey?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'rainbowshine':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}rainbowshine wem`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/rainbow-shine?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'funnycup':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}funnycup wem`)
				reply(ind.wait())
				ct = body.slice(9)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/funny-cup?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'summer':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}summer wem`)
				reply(ind.wait())
				ct = body.slice(7)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/summer?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'wolfmental':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}wolfmental wem`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/wolf-metal?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'flamming':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}flamming wem`)
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/flamming?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'rainbowglow':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}rainbowglow wem`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/rainbow-glow?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'whitecube':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}whitecube wem`)
				reply(ind.wait())
				ct = body.slice(10)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/white-cube?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nightsky':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}nightsky wem`)
				reply(ind.wait())
				ct = body.slice(9)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/night-sky?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'gradient':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}gradient wem`)
				reply(ind.wait())
				ct = body.slice(9)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/gradient?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'goldtext':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}goldtext wem`)
				reply(ind.wait())
				ct = body.slice(9)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/gold-text?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'woodenboard':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}woodenboard wem`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/wooden-board?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'shadowsky':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}shadowsky wem`)
				reply(ind.wait())
				ct = body.slice(10)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/shadow-sky?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'smoke':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}smoke wem`)
				reply(ind.wait())
				ct = body.slice(8)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/warface?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'csgo':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}csgo wem`)
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/csgo?q=${ct}&apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
//============================BATES NGAB============================\\
//SEARCHING MENU
                case 'playstore':
                //❗case punya Lol Team
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                reply(ind.wait())
                query = args.join(" ")
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${LolHuman}&query=${query}`)
                get_result = get_result.result
                ini_txt = 'Play Store Search : \n'
                for (var x of get_result) {
                ini_txt += `Name : ${x.title}\n`
                ini_txt += `ID : ${x.appId}\n`
                ini_txt += `Developer : ${x.developer}\n`
                ini_txt += `Link : ${x.url}\n`
                ini_txt += `Price : ${x.priceText}\n`
                ini_txt += `Price : ${x.price}`
                    }
                reply(ini_txt)
                await limitAdd(sender)
                break
				case 'wikipedia': 
		        //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                suuu = body.slice(10)
				reply(ind.wait())
				anu = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=dapxzwabots&query=${suuu}`)
				teks = `[ MENURUT WIKIPEDIA ] :\n\n${anu.result}`
				wem.sendMessage(from, teks, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'brainly':
				//❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                brien = body.slice(8)
			    brainly(`${brien}`).then(res => {
			    teks = '❉───────────❉\n'
				for (let Y of res.data) {
				teks += `\n「 _BRAINLY_ 」\n\n➸ Pertanyaan: ${Y.pertanyaan}\n\n➸ Jawaban: ${Y.jawaban[0].text}\n❉───────────❉\n`
				}
				wem.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                console.log(res)
                })
				await limitAdd(sender)
				break
//============================BATES NGAB============================\\
//ISLAM MENU
                case 'tahlil': 
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/muslim/tahlil?apikey=${DapApi}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\nArab : ${i.arabic}\nTerjemah : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
                case 'jadwalsholat':
                //❗case punya Lol Team
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                daerah = args.join(" ")
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${LolHuman}`)
                get_result = get_result.result
                ini_txt = `Wilayah : ${get_result.wilayah}\n`
                ini_txt += `Tanggal : ${get_result.tanggal}\n`
                ini_txt += `Sahur : ${get_result.sahur}\n`
                ini_txt += `Imsak : ${get_result.imsak}\n`
                ini_txt += `Subuh : ${get_result.subuh}\n`
                ini_txt += `Terbit : ${get_result.terbit}\n`
                ini_txt += `Dhuha : ${get_result.dhuha}\n`
                ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                ini_txt += `Ashar : ${get_result.ashar}\n`
                ini_txt += `Maghrib : ${get_result.imsak}\n`
                ini_txt += `Isya : ${get_result.isya}`
                reply(ini_txt)
                break
                case 'kisahnabi': 
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/kisahnabi?nabi=${body.slice(11)}&apikey=${DapApi}`)
				buffer7 = await getBuffer(anu.result.nabi.image)
				teks = `HASIL\n\n➸ Nama Nabi : ${anu.result.nabi.nabi}\n➸ Lahir : ${anu.result.nabi.lahir}\n➸ Umur : ${anu.result.nabi.umur}\n➸ Tempat : ${anu.result.nabi.tempat}\n➸ Kisah : ${anu.result.nabi.kisah}`
				wem.sendMessage(from, buffer7, image, {quoted: mek, caption: teks})
				break
		        case 'ayatkursi': 
		        //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/muslim/ayatkursi?apikey=${DapApi}`)
				teks = `➸ Arab : ${anu.result.data.arabic}\n➸ Latin : ${anu.result.data.latin}\n➸ Arti : ${anu.result.data.translation}\n➸ Tafsir : ${anu.result.data.tafsir}`
				wem.sendMessage(from, teks, text, {quoted: mek})
				break
		        case 'doaharian': 
		        //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				wem.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				asu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/muslim/doaharian?apikey=${DapApi}`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `Nama Doa: : ${i.title}\nArab : ${i.arabic}\nLatin : ${i.latin}\nTranslation : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		        case 'niatsholat':  
		        //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/muslim/niatshalat?apikey=${DapApi}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\nArab : ${i.arabic}\nLatin : ${i.latin}\nTerjemah : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		        case 'bacaansholat': 
		        //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.wait())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/muslim/bacaanshalat?apikey=${DapApi}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\nArab : ${i.arabic}\nLatin : ${i.latin}\nTerjemah : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
//============================BATES NGAB============================\\
//SOUND MENU
case 'sound':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.wait())
if (isLimit(sender)) return reply(ind.limitend(pusname))
const dap = fs.readFileSync('lib/sound/sound.mp3')
wem.sendMessage(from, dap, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound1':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.wait())
if (isLimit(sender)) return reply(ind.limitend(pusname))
satu = fs.readFileSync('./lib/sound/sound1.mp3');
wem.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound2':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.wait())
if (isLimit(sender)) return reply(ind.limitend(pusname))
dua = fs.readFileSync('./lib/sound/sound2.mp3');
wem.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound3':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.wait())
if (isLimit(sender)) return reply(ind.limitend(pusname))
tiga = fs.readFileSync('./lib/sound/sound3.mp3');
wem.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound4':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.wait())
if (isLimit(sender)) return reply(ind.limitend(pusname))
empat = fs.readFileSync('./lib/sound/sound4.mp3');
wem.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound5':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.wait())
if (isLimit(sender)) return reply(ind.limitend(pusname))
lima = fs.readFileSync('./lib/sound/sound5.mp3');
wem.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound6':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.wait())
if (isLimit(sender)) return reply(ind.limitend(pusname))
enam = fs.readFileSync('./lib/sound/sound6.mp3');
wem.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound7':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.wait())
if (isLimit(sender)) return reply(ind.limitend(pusname))
tujuh = fs.readFileSync('./lib/sound/sound7.mp3');
wem.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound8':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.wait())
if (isLimit(sender)) return reply(ind.limitend(pusname))
lapan = fs.readFileSync('./lib/sound/sound8.mp3');
wem.sendMessage(from, lapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound9':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.wait())
if (isLimit(sender)) return reply(ind.limitend(pusname))
bilan = fs.readFileSync('./lib/sound/sound9.mp3');
wem.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound10':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./lib/sound/sound10.mp3');
wem.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound12':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./lib/sound/sound12.mp3');
wem.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'ffburik':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
bilan = fs.readFileSync('./lib/sound/ffburik.mp3');
wem.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound11':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
const sound11 = fs.readFileSync('./lib/sound/sound11.m4a')
wem.sendMessage(from, sound11, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound13':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./lib/sound/sound13.mp3');
wem.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound14':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./lib/sound/sound14.mp3');
wem.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound15':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./lib/sound/sound15.mp3');
wem.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'diam':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./lib/sound/diam.mp3');
wem.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'dj1':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
const dj1mp3 = fs.readFileSync('./lib/sound/dj1.m4a')
wem.sendMessage(from, dj1mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound16':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
const sound16 = fs.readFileSync('./lib/sound/sound16.m4a')
wem.sendMessage(from, sound16, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound17':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./lib/sound/sound17.mp3');
wem.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound18':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./lib/sound/sound18.mp3');
wem.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound19':
//❗case by wem & YOGI PW & DappaUhuy
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./lib/sound/sound.mp3');
wem.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'dj2':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
const dj2mp3 = fs.readFileSync('./lib/sound/dj2.m4a')
wem.sendMessage(from, dj2mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
//============================BATES NGAB============================\\
//ANIME MENU
                case 'wait':
                //❗case punya Lol Team
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const filePath = await wem.downloadAndSaveMediaMessage(encmedia);
                const form = new FormData();
                const stats = fs.statSync(filePath);
                const fileSizeInBytes = stats.size;
                const fileStream = fs.createReadStream(filePath);
                form.append('img', fileStream, { knownLength: fileSizeInBytes });
                const options = {
                method: 'POST',
                credentials: 'include',
                body: form
                }
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${LolHuman}`, {...options })
                get_result = get_result.result
                console.log(get_result)
                video = await getBuffer(get_result.video)
                txt = `Anilist id : ${get_result.anilist_id}\n`
                txt += `MAL id : ${get_result.mal_id}\n`
                txt += `Title Romaji : ${get_result.title_romaji}\n`
                txt += `Title Native : ${get_result.title_native}\n`
                txt += `Title English : ${get_result.title_english}\n`
                txt += `at : ${get_result.at}\n`
                txt += `Episode : ${get_result.episode}\n`
                txt += `Eimilarity : ${get_result.similarity}`
                wem.sendMessage(from, video, video, { quoted: mek, caption: txt })
                } else {
                reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                }
                break
                case 'wait2':
                //❗case punya Lol Team
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				reply(ind.wait())
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				media = await wem.downloadMediaMessage(encmedia)
				await wait(media).then(res => {
				wem.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
				}).catch(err => {
				reply(err)
				})
				} else {
				reply(ind.ocron())
				}
				await limitAdd(sender)
			    break
			    case 'randomnekonime':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nekonime?apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'randomanime':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/random-nimek?apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'randomwaifu':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/random-waifu?apikey=${LeysApi}`)
				dapuhy = await getBuffer(anu.result)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
//============================BATES NGAB============================\\
//STALKING MENU
				case 'igstalk':
				//❗case punya Lol Team
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[❗] Sabar lagi stalking IG nya')
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${body.slice(9)}?apikey=${LolHuman}`, {method: 'get'})
				get_result = get_result.result
				txt = `Link : https://www.instagram.com/${get_result.username}\n`
				txt += `Full : ${get_result.fullname}\n`
				txt += `Post : ${get_result.posts}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.following}\n`
				txt += `Bio : ${get_result.bio}\n`
				buffer = await getBuffer(get_result.photo_profile)
				wem.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
				await limitAdd(sender)
				break
				case 'githubstalk':
				//❗case punya Lol Team
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[❗] Sabar lagi stalking GitHub nya')
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${LolHuman}`, {method: 'get'})
				get_result = get_result.result
				txt = `Full : ${get_result.name}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.following}\n`
				txt += `Publick : ${get_result.public_repos}\n`
				txt += `Public Gits : ${get_result.public_gists}\n`
				txt += `User : ${get_result.user}\n`
				txt += `Compi : ${get_result.company}\n`
				txt += `Lokasi : ${get_result.location}\n`
				txt += `Email : ${get_result.email}\n`
				txt += `Bio : ${get_result.bio}\n`
				buffer = await getBuffer(get_result.avatar)
				wem.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
				await limitAdd(sender)
				break
				case 'tiktokstalk':
				//❗case punya Lol Team
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[❗] Sabar lagi stalking TikTok nya')
				username = args[0]
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${LolHuman}`, {method: 'get'})
				get_result = get_result.result
				txt = `Link : ${get_result.username}\n`
				txt += `Bio : ${get_result.bio}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.followings}\n`
				txt += `Likes : ${get_result.likes}\n`
				txt += `Vidio : ${get_result.video}\n`
				buffer = await getBuffer(get_result.user_picture)
				wem.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
				await limitAdd(sender)
				break
				case 'ytstalk':
				//❗case punya Lol Team
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[❗] Sabar lagi stalking YT nya')
				ytk = `${body.slice(11)}`
				anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${LolHuman}&query=${ytk}`, {method: 'get'})
				cari = '•••••••••••••••••\n'
				for (let search of anu.result) {
				cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
				}
				reply(cari.trim())
				await limitAdd(sender)
				break
//============================BATES NGAB============================\\
//DOWNLOAD MENU
				    case 'igdl':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    reply(ind.wait())
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${LolHuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    wem.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    break
                    case 'twtdl':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    reply(ind.wait())
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/twitter?apikey=${LolHuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await getBuffer(ini_url)
                    wem.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                    case 'fbdl':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    reply(ind.wait())
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${LolHuman}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    wem.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                    case 'spotify':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    reply(ind.wait)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${LolHuman}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    wem.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    wem.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'spotifysearch':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    reply(ind.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    reply(ind.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    wem.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    wem.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
                    case 'tiktoknowm':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    reply(ind.wait())
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${LolHuman}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    wem.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                    case 'tiktokmusic':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    reply(ind.wait())
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${LolHuman}&url=${ini_link}`)
                    wem.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
                    break
                    case 'ytplay':
				    //❗case punya Lol Team
				    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    reply(ind.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${LolHuman}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n\n\n`
                    ini_txt += `[❗] Sedang memproses audionya!!, Jangan di spam asw\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    wem.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    wem.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek})
                    get_video = await getBuffer(get_result.video[0].link)
                    wem.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek})
                    break
                    case 'ytmp3':
                    //❗case punya Lol Team
				    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    reply(ind.wait())
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${LolHuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}\n\n\n`
                    ini_txt += `[❗] Sedang memproses audionya!!, Jangan di spam asw\n`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    wem.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    wem.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek})
                    break
                    case 'ytmp4':
                    //❗case punya Lol Team
				    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    reply(ind.wait())
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${LolHuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}\n\n\n`
                    ini_txt += `[❗] Sedang memproses videonya!!, Jangan di spam asw\n`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    wem.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    wem.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek})
                    break
//============================BATES NGAB============================\\
//NSFW MENU
                case 'nsfwneko':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/nsfwneko?apikey=GFL`)
				dapuhy = await getBuffer(anu.result)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nsfwwaifu':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/waifu?apikey=${OnlyDev}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nsfweroyuri':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=${OnlyDev}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nsfwyuri':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/yuri?apikey=${OnlyDev}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nsfwlewd':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/lewd?apikey=${OnlyDev}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nsfwpussy':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/pussy?apikey=GFL`)
				dapuhy = await getBuffer(anu.result)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nsfwnekonime':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/nekonime?apikey=${OnlyDev}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nsfwbaka':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=${OnlyDev}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nsfwhug':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hug?apikey=${OnlyDev}`)
				dapuhy = await getBuffer(anu.result.url)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nsfwahegao':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/ahegao?apikey=GFL`)
				dapuhy = await getBuffer(anu.result)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nsfwass':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/ass?apikey=GFL`)
				dapuhy = await getBuffer(anu.result)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'nsfwbdsm':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/bdsm?apikey=GFL`)
                buffer = await getBuffer(anu.result)
                wem.sendMessage(from, buffer, image, { quoted: mek})
                break
				case 'nsfwblowjob':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/blowjob?apikey=GFL`)
                buffer = await getBuffer(anu.result)
                wem.sendMessage(from, buffer, image, { quoted: mek})
                break
				case 'nsfwboobjob':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/boobjob?apikey=GFL`)
                buffer = await getBuffer(anu.result)
                wem.sendMessage(from, buffer, image, { quoted: mek})
                break
				case 'nsfwcreampie':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/creampie?apikey=GFL`)
                buffer = await getBuffer(anu.result)
                wem.sendMessage(from, buffer, image, { quoted: mek})
                break
				case 'nsfwcuckold':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/cuckold?apikey=GFL`)
                buffer = await getBuffer(anu.result)
                wem.sendMessage(from, buffer, image, { quoted: mek})
                break
				case 'nsfwglasses':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/glasses?apikey=GFL`)
                buffer = await getBuffer(anu.result)
                wem.sendMessage(from, buffer, image, { quoted: mek})
                break
                case 'nsfwcum':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/cum?apikey=GFL`)
                buffer = await getBuffer(anu.result)
                wem.sendMessage(from, buffer, image, { quoted: mek})
                break
                case 'nsfwfemdom':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/femdom?apikey=GFL`)
                buffer = await getBuffer(anu.result)
                wem.sendMessage(from, buffer, image, { quoted: mek})
                break
                case 'nsfwelves':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                anu = await fetchJson(`https://iwi-negev.herokuapp.com/api/nsfw/elves?apikey=GFL`)
                buffer = await getBuffer(anu.result)
                wem.sendMessage(from, buffer, image, { quoted: mek})
                break
                case 'nhentaipdf':
                //❗case punya Lol Team
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                henid = args[0]
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${LolHuman}`)
                get_result = get_result.result
                ini_buffer = await getBuffer(get_result)
                wem.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                break
//============================BATES NGAB============================\\
//MATEMATIKA MENU
                case 'perkalian':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Ngab?\nContoh ${prefix}perkalian 5/8`)
				reply(ind.wait()) 
			    var gh = body.slice(10)
			    var angka1 = gh.split("*")[0];
			    var angka2 = gh.split("*")[1];
			    kali = await fetchJson(`https://leyscoders-api.herokuapp.com/api/perkalian?angka1=${angka1}&angka2=${angka2}&apikey=${LeysApi}`) 
			    hasil = `「 PERKALIAN 」\n\nHasil dari perkalian ${angka1}x${angka2} :\n${kali.result}`
                wem.sendMessage(from, hasil, text, {quoted: mek}) 
                await limitAdd(sender)
                break
			    case 'rumuspersegipanjang':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Ngab?\nContoh ${prefix}rumuspersegipanjang 7/5`)
				reply(ind.wait()) 
			    var gh = body.slice(20)
			    var panjang = gh.split("/")[0];
			    var lebar = gh.split("/")[1];
			    mtk = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppanjang?pjg=${panjang}&lebar=${lebar}&apikey=${LeysApi}`) 
			    dapp = `「 RUMUS PERSEGI PANJANG 」\n\nRumus keliling :\n${mtk.rumus_keliling}\n\nHasil keliling : ${mtk.hasil_keliling}\n↕↕↕↕↕↕\nRumus luas :\n${mtk.rumus_luas}\n\nHasil luas : ${mtk.hasil_luas}`
                wem.sendMessage(from, dapp, text, {quoted: mek}) 
                await limitAdd(sender)
                break
                case 'rumuspersegi':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Ngab?\nContoh ${prefix}rumuspersegi 4`)
				reply(ind.wait()) 
			    mtk = await fetchJson(`https://leyscoders-api.herokuapp.com/api/persegi?sisi=${body.slice(13)}&apikey=${LeysApi}`) 
			    dapp = `「 RUMUS PERSEGI 」\n\nRumus keliling :\n${mtk.rumus_keliling}\n\nHasil keliling : ${mtk.hasil_keliling}\n↕↕↕↕↕↕\nRumus luas :\n${mtk.rumus_luas}\n\nHasil luas : ${mtk.hasil_luas}`
                wem.sendMessage(from, dapp, text, {quoted: mek}) 
                await limitAdd(sender)
                break
                case 'kuadrat':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.wait())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Ngab?\nContoh ${prefix}kuadrat 8`)
				reply(ind.wait()) 
			    mtk = await fetchJson(`https://leyscoders-api.herokuapp.com/api/bdr/kuadrat?q=${body.slice(9)}&apikey=${LeysApi}`) 
			    dapp = `「 KUADRAT 」\n\nKuadrat dari ${body.slice(8)} adalah : ${mtk.result}`
                wem.sendMessage(from, dapp, text, {quoted: mek}) 
                await limitAdd(sender)
                break
//============================BATES NGAB============================\\
//IMAGE EDIT MENU
    case 'wanted':
    //❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=DICARI&text2=${tels}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'gtav':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(5)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'facebookpage':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'komunis':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://zekais-api.herokuapp.com/comunism?url=${anu.display_url}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deletepc':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://zekais-api.herokuapp.com/delete?url=${anu.display_url}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(12)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imgtourl':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
			var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			reply(ind.wait())
			var media = await  wem.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			imgbb('3b8594f4cb11895f4084291bc655e510', media)
			.then(data => {
			var caps = `╭─「 IMGBB TO URL 」\n│\n│• ID : ${data.id}\n│• MimeType : ${data.image.mime}\n│• Extension : ${data.image.extension}\n│\n│• URL : ${data.display_url}\n╰─────────────────────`
			ibb = fs.readFileSync(media)
			wem.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
			})
			.catch(err => {
			throw err 
			})
			await limitAdd(sender) 	
			break
	case 'pencil':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(6)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'picture':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${anu.display_url}&apikey=${LeysApi}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'hitler':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/hitler?url=${anu.display_url}&apikey=${LeysApi}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'blur':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(5)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${anu.display_url}&apikey=${LeysApi}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'invert':
	//❗case by wem & YOGI PW & DappaUhuy
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await wem.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=${LeysApi}`)
	 wem.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
//============================BATES NGAB============================\\
//FILM MENU
                case 'searchfilm':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				film = await fetchJson(`http://zekais-api.herokuapp.com/film?query=${body.slice(12)}`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `Nama film : ${i.name}\nQuality : ${i.quality}\nLink : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'filmapikterbaru':
				//❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `Nama film : ${i.name}\nQuality : ${i.quality}\nRating : ${i.rating}\nLink : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'filmapikdrama':
				//❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `Nama film : ${i.name}\nQuality : ${i.quality}\nRating : ${i.rating}\nLink : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'lk21':
				//❗case punya Lol Team
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
                if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                query = args.join(" ")
                reply(ind.wait())
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${LolHuman}&query=${query}`)
                get_result = get_result.result
                ini_txt = `Title : ${get_result.title}\n`
                ini_txt += `Link : ${get_result.link}\n`
                ini_txt += `Genre : ${get_result.genre}\n`
                ini_txt += `Views : ${get_result.views}\n`
                ini_txt += `Duration : ${get_result.duration}\n`
                ini_txt += `Tahun : ${get_result.tahun}\n`
                ini_txt += `Rating : ${get_result.rating}\n`
                ini_txt += `Desc : ${get_result.desc}\n`
                ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                ini_txt += `Location : ${get_result.location}\n`
                ini_txt += `Date Release : ${get_result.date_release}\n`
                ini_txt += `Language : ${get_result.language}\n`
                ini_txt += `Link Download : ${get_result.link_dl}`
                thumbnail = await getBuffer(get_result.thumbnail)
                wem.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                break
//============================BATES NGAB============================\\
//INFORMATION MENU
                case 'covidglobal':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/covidworld?apikey=${DapApi}`)
				teks = `Total Cases : ${anu.result.totalCases}\nRecovered : ${anu.result.recovered}\nDeaths : ${anu.result.deaths}\nActive Cases : ${anu.result.activeCases}\nClosed Cases : ${anu.result.closedCases}\nLast Update : ${anu.result.lastUpdate}`
				wem.sendMessage(from, teks, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'covidindo':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				wem.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				asu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/covidindo?apikey=${DapApi}`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result) {
				teks += `Kode Provinsi: : ${i.attributes.Kode_Provi}\nProvinsi : ${i.attributes.Provinsi}\nTotal Positif : ${i.attributes.Kasus_Posi}\nTotal Sembuh : ${i.attributes.Kasus_Semb}\nTotal Meninggal : ${i.attributes.Kasus_Meni}\n=================\n`
				}
				reply(teks)
				await limitAdd(sender)
				break
				case 'jam':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/time?apikey=${LeysApi}`) 
				jam = `JAM INDO ⏰\n\n\nWIT : ${anu.result.wit}\nWITA : ${anu.result.wita}\nWIB : ${anu.result.wib}`
				wem.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'jadwaltv':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
                chnl = args[0]
                suu = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${chnl}?apikey=${LolHuman}`)
                cok = suu.result
                txt = `Jadwal TV ${chnl.toUpperCase()}\n`
                for (var bi in cok) {
                txt += `${bi} - ${cok[bi]}\n`
                }
                reply(txt)
                break
//============================BATES NGAB============================\\
//FUN MENU
			    case 'tts':
			    //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return wem.sendMessage(from, `Diperlukan kode bahasa!!, ketik ${prefix}bahasa`, text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return wem.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					reply(ind.wait())
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Textnya Kepanjangan Asu!!')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							wem.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
				await limitAdd(sender)
				break
				case 'tts2':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}qrcode wem`)
                dapuhy = body.slice(5)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/speech?lang=id&text=${dapuhy}`)
                wem.sendMessage(from, asu, audio, {mimetype: 'audio/mp4', quoted: mek})
                await limitAdd(sender)
                break
                case 'caklontong':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
					anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/kuis/caklontong?apikey=${DapApi}`, {method: 'get'})
					caklontong = `${anu.result.soal}`
					setTimeout( () => {
					wem.sendMessage(from, '➸ Jawaban : '+anu.result.jawaban+ '\n\n• Penjelasan: '+ anu.result.deskripsi+'', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
			    case 'family100':
			    //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${LolHuman}`, {method: 'get'})
					family = `${anu.result.question}`
					setTimeout( () => {
					wem.sendMessage(from, '➸ Jawaban : '+anu.result.aswer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakgambar':
				//❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
					anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/kuis/tebakgambar?apikey=${DapApi}`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.images)
					tebak = `➸ Jawaban : ${anu.result.jawaban}`
					setTimeout( () => {
					wem.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					wem.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
			    case 'artinama':
			    //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                anu = await fetchJson(`http://zekais-api.herokuapp.com/artinama?nama=${body.slice(9)}`)
                dapuhy = `Nama : ${anu.name}\nArti : ${anu.result}`
                wem.sendMessage(from, dapuhy, text, {quoted: mek })
                await limitAdd(sender)
                break
//============================BATES NGAB============================\\
//LINK MENU
                case 'shortlink':
                //❗case by wem & YOGI PW & DappaUhuy
			    if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Linknya mana su?\nContoh ${prefix}shortlink https://google.com`)
                link = body.slice(11)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${link}&apikey=${LeysApi}`)
				teks = `*SHORTLINK📊*\n\nLink : ${link}\nHasil shortlink : ${anu.result}\n\n_Jangan lupa subscribe yt kami ya syg😃_`
				wem.sendMessage(from, teks, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'shortlink2':
                //❗case by wem & YOGI PW & DappaUhuy
			    if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Linknya mana su?\nContoh ${prefix}shortlink https://google.com`)
                link = body.slice(12)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${link}&apikey=${LeysApi}`)
				teks = `*SHORTLINK📊*\n\nLink : ${link}\nHasil shortlink : ${anu.result}\n\n_Jangan lupa subscribe yt kami ya syg😃_`
				wem.sendMessage(from, teks, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'shortlink3':
                //❗case by wem & YOGI PW & DappaUhuy
			    if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Linknya mana su?\nContoh ${prefix}shortlink https://google.com`)
                link = body.slice(12)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${link}&apikey=${LeysApi}`)
				teks = `SHORTLINK📊*\n\nLink : ${link}\nHasil shortlink : ${anu.result}\n\n_Jangan lupa subscribe yt kami ya syg😃_`
				wem.sendMessage(from, teks, text, {quoted: mek})
				await limitAdd(sender)
				break
//============================BATES NGAB============================\\
//MEDIA MENU
			    case 'heroml':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
				wem = await fetchJson(`https://xinzbot-api.herokuapp.com/api/mobilelegend/herodetails?hero=${body.slice(7)}&apikey=aqulzz`) 
				buffer = await getBuffer(wem.result.image) 
				ml = `「 HERO ML 」\n\nNama : ${wem.result.hero_name}\nQuotes : ${wem.result.entrance_quotes}\nFeature : ${wem.result.hero_feature}\n\n「 ITEMS 」\n${wem.result.items}\n\n「 CHARACTER 」\n${wem.result.character.chara}\n\n「 ATRIBUTS 」\nMovement Speed : ${wem.result.attributes.movement_speed}\nPhysical Attack : ${wem.result.attributes.physical_attack}\nMagic Power : ${wem.result.attributes.magic_power}\nAttack Speed : ${wem.result.attributes.attack_speed}\nPhysical Defense : ${wem.result.attributes.physical_defense}\nMagic Defense : ${wem.result.attributes.magic_defense}\nBasic Attack : ${wem.result.attributes.basic_atk_crit_rate}\nHp : ${wem.result.attributes.hp}\nMana : ${wem.result.attributes.mana}\nAbility : ${wem.result.attributes.ability_crit_rate}\nHp Regen : ${wem.result.attributes.hp_regen}\nMana Regen : ${wem.result.attributes.mana_regen}\n\n「 PRICE 」\nBattle Point : ${wem.result.price.battle_point}Diamond : ${wem.result.price.diamond}\nHero Fragment : ${wem.result.price.hero_fragment}\n\nRole : ${wem.result.role}\n\n「 SKILL 」\nDurability : ${wem.result.skill.durability}\nOffense : ${wem.result.skill.offense}\nSkill Effect : ${wem.result.skill.skill_effects}\nDifficulty : ${wem.result.skill.difficulty}\n\nSpeciality : ${wem.result.speciality}\nLaning Recommended : ${wem.result.laning_recommendation}\nRealise : ${wem.result.release_date}\n\n「 BACKGROUND STORY 」 :\n${wem.result.background_story}`
				wem.sendMessage(from, buffer, image, {quoted: mek, caption: ml})
				await limitAdd(sender)
				break
				case 'nickff': 
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				wem.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=${ZeksApi}`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
				teks += `Nick : ${i}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'quotes':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${LolHuman}`) 
				jam = `「 BY 」 : ${anu.result.by}\n\n「 QUOTES 」 : ${anu.result.quote}`
				wem.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'quotesdilan':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${LolHuman}`) 
				jam = `「 QUOTES 」 :\n\n${anu.result}`
				wem.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'faktaunik':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/faktaunik?apikey=${LolHuman}`) 
				dapzz = `FAKTA UNIK : ${anu.result}`
				wem.sendMessage(from, dapzz, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'katakatabijak':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabijak?apikey=${LolHuman}`) 
				jam = `「 KATA KATA BIJAK 」 :\n\n${anu.result}`
				wem.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'randompantun':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/pantun?apikey=${LolHuman}`) 
				jam = `「 RANDOM PANTUN 」 :\n\n${anu.result}`
				wem.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'randombucin':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/bucin?apikey=${LolHuman}`) 
				jam = `「 RANDOM BUCIN 」 :\n\n${anu.result}`
				wem.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'katakatabucin':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabucin?apikey=${LolHuman}`) 
				jam = `「 KATA KATA BUCIN 」 :\n\n${anu.result}`
				wem.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'randomnama':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${LolHuman}`) 
				jam = `「 KATA KATA BUCIN 」 :\n\n${anu.result}`
				wem.sendMessage(from, jam, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'cersex':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait()) 
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=${LeysApi}`) 
				buffer = await getBuffer(anu.gambar) 
				sex = `[ CERITA SEX ]\n\n\nCerita : ${anu.result}`
				wem.sendMessage(from, buffer, image, {quoted: mek, caption: sex})
				break
//============================BATES NGAB============================\\
//SPAM MENU
				case 'spamsms':
				//❗case punya Lol Team
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			    if (args.length == 0) return reply(`Example: ${prefix + command} 085123456789`)
				if (args[0].startsWith('085648910195')) return reply('[❗] Gagal!!, ciee mau spam ke nomer bot yak')
				if (args[0].startsWith('085746897368')) return reply('[❗] Gagal!!, ciee mau spam ke nomer owner yak')
                reply('[❗] Sabar lagi ngespam')
                nomor = args[0]
                await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${LolHuman}&nomor=${nomor}`)
                await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${LolHuman}&nomor=${nomor}`)
                await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${LolHuman}&nomor=${nomor}`)
                await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${LolHuman}&nomor=${nomor}`)
                await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${LolHuman}&nomor=${nomor}`)
                await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${LolHuman}&nomor=${nomor}`)
                await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${LolHuman}&nomor=${nomor}`)
                await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${LolHuman}&nomor=${nomor}`)
                reply("Success")
                await limitAdd(sender)
                break
                case 'spamcall':
                //❗Update case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args[0].startsWith('08')) return reply('Gunakan nomer awalan 8/n contoh : 85123456789')
				if (args[0].startsWith('85648910195')) return reply('[❗] Gagal!!, ciee mau spam ke nomer bot yak')
				if (args[0].startsWith('85876330812')) return reply('[❗] Gagal!!, ciee mau spam ke nomer owner yak')
                reply('[❗] Sabar lagi ngespam')
                wemp = body.slice(10)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                await fetchJson(`https://videfikri.com/api/call/?nohp=${wemp}`)
                reply("Success")
                await limitAdd(sender)
                break
                case 'spamgmail':
                //❗Update case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args[0].startsWith('daffauhuy27@gmail.com')) return reply('[❗] Gagal!!, ciee mau spam ke gmail owner yak')
                reply('[❗] Sabar lagi ngespam')
                wemp = body.slice(11)
                dap1 = wemp.split("/")[0];
                dap2 = wemp.split("/")[1];
                dap3 = wemp.split("/")[2];
                await fetchJson(`https://videfikri.com/api/spamemail/?email=${dap1}&subjek=${dap2}&pesan=${dap3}`)
                await fetchJson(`https://videfikri.com/api/spamemail/?email=${dap1}&subjek=${dap2}&pesan=${dap3}`)
                await fetchJson(`https://videfikri.com/api/spamemail/?email=${dap1}&subjek=${dap2}&pesan=${dap3}`)
                await fetchJson(`https://videfikri.com/api/spamemail/?email=${dap1}&subjek=${dap2}&pesan=${dap3}`)
                await fetchJson(`https://videfikri.com/api/spamemail/?email=${dap1}&subjek=${dap2}&pesan=${dap3}`)
                await fetchJson(`https://videfikri.com/api/spamemail/?email=${dap1}&subjek=${dap2}&pesan=${dap3}`)
                await fetchJson(`https://videfikri.com/api/spamemail/?email=${dap1}&subjek=${dap2}&pesan=${dap3}`)
                await fetchJson(`https://videfikri.com/api/spamemail/?email=${dap1}&subjek=${dap2}&pesan=${dap3}`)
                await fetchJson(`https://videfikri.com/api/spamemail/?email=${dap1}&subjek=${dap2}&pesan=${dap3}`)
                await fetchJson(`https://videfikri.com/api/spamemail/?email=${dap1}&subjek=${dap2}&pesan=${dap3}`)
                reply("Success")
                await limitAdd(sender)
                break
//============================BATES NGAB============================\\
//OTHER MENU
                case 'stiker': 
				case 'sticker':
				case 's':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await wem.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								wem.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await wem.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								wem.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
					case 'stickerwm':
					case 'stikerwm':
					case 'swm':
					//❗case punya Lol Team
				    if (!isRegistered) return reply(ind.noregis())
			    	if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await wem.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        wemzz = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolHuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": wemzz[0],
                                "author": wemzz[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            buffer = fs.readFileSync(file_name)
                            wem.sendMessage(from, buffer, sticker, { quoted: mek})
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    case 'ocr': 
				    //❗case by wem & YOGI PW & DappaUhuy
				    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await wem.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`kirim gambar bertulisan dengan caption ${prefix + command}`)
					}
					await limitAdd(sender)
					break
					case 'toimg':
				    //❗case by wem & YOGI PW & DappaUhuy
				    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isQuotedSticker) return reply('reply stickernya ngab')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await wem.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						wem.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
					case 'telesticker':
					//❗case punya Lol Team
				    if (!isRegistered) return reply(ind.noregis())
			    	if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${LolHuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        wem.sendMessage(from, ini_buffer, sticker)
                    }
                    await limitAdd(sender)
                    break
//============================BATES NGAB============================\\
//SERTIFIKAT MENU
				case 'anakharamserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}anakharamserti wem`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'hekelserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}hekel wem`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'babuserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}babu wem`)
				reply(ind.wait())
				ct = body.slice(10)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BabuSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'ffserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti wem`)
				reply(ind.wait())
				ct = body.slice(8)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/EpepSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'bucinserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti wem`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BucinSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'bocilepepserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti wem`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'gayserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti wem`)
				reply(ind.wait())
				ct = body.slice(9)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GaySerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'pacarserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti wem`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PacarSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'sadboyserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti wem`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/SadBoySerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'surgaserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti wem`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/SurgaSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'pinterserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti wem`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PintarSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'badgirlserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}badgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BadGirlSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'badboyserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}badboyserti wem`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BadBoySerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'goodgirlserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}goodgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'goodboyserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}goodboyserti wem`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'editodberkelasserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}editodberkelasserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(20)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'goodlookingserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}goodlookingserti wem`)
				reply(ind.wait())
				ct = body.slice(17)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'fucekboyserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fucekboyserti wem`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'jametserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fucekboyserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'youtuberserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}youtuberserti wem`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'fftourserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fftourserti wem`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'fftourserti2': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fftourserti2 wem`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'fftourserti3': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fftourserti3 wem`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'fftourserti4': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fftourserti4 wem`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'fftourserti5': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fftourserti5 wem`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'mltourserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}mltourserti wem`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'mltourserti2': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}mltourserti2 wem`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'mltourserti3': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}mltourserti3 wem`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'mltourserti4': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}mltourserti4 wem`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'mltourserti5': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}mltourserti5 wem`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'pubgtourserti': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pubgtourserti wem`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'pubgtourserti2': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pubgtourserti2 wem`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'pubgtourserti3': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pubgtourserti3 wem`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'pubgtourserti4': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pubgtourserti4 wem`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
				case 'pubgtourserti5': 				
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pubgtourserti5 wem`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				wem.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Jan Lupa Follow IG @wem_.24' })
				await limitAdd(sender)
				break
//============================BATES NGAB============================\\
//GROUP MENU
				case 'nobadword':
				//❗case by wem & YOGI PW & DappaUhuy
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('Fitur BadWord sudah aktif sebelum nya')
                badword.push(from)
                fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Enable!`)
              	} else if (args[0] === '0') {
                badword.splice(from, 1)
                fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Disable`)
                } else {
                reply(ind.satukos())
                }
                break
		
                case 'mutual':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply(ind.groupo())
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n${prefix}next — find a new partner`)
				await limitAdd(sender)
				break
		        case 'next':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply(`Partner found: 🙉\n${prefix}next — find a new partner`)
				await limitAdd(sender)
				break
				case 'setname':
				//❗case by wem & YOGI PW & DappaUhuy
		        if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				wem.groupUpdateSubject(from, `${body.slice(9)}`)
				wem.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
				break
                case 'setdesc':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                wem.groupUpdateDescription(from, `${body.slice(9)}`)
                wem.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
                break
                case 'demote':
                //❗case by wem & YOGI PW & DappaUhuy
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di turunkan admin group!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Perintah diterima, menurunkan jadi admin group :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                wem.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`Perintah diterima, menurunkan @${mentioned[0].split('@')[0]} jadi admin group`, mentioned, true)
                wem.groupDemoteAdmin(from, mentioned)
                }
                break
			    case 'promote':
			    //❗case by wem & YOGI PW & DappaUhuy
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin group!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Selamat 🥳 Anda naik menjadi admin group 🎉 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                wem.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`Selamat 🥳 @${mentioned[0].split('@')[0]} Anda naik menjadi admin group 🎉`, mentioned, true)
                wem.groupMakeAdmin(from, mentioned)
                }
                break
                case 'listadmin':
		        //❗case by wem & YOGI PW & DappaUhuy
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                teks = `List admin of group ${groupMetadata.subject}\nTotal : ${groupAdmins.length}\n\n`
                no = 0
                for (let admon of groupAdmins) {
                no += 1
                teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                }
                mentions(teks, groupAdmins, true)
                break
		        case 'kick':
		        //❗case by wem & YOGI PW & DappaUhuy
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Asek jatah kick, otw kick 🤭 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                wem.groupRemove(from, mentioned)
                } else {
                mentions(`Asek jatah kick, otw kick @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
                wem.groupRemove(from, mentioned)
                }
                break	
	        	case 'add':
	        	//❗case by wem & YOGI PW & DappaUhuy
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args.length < 1) return reply('Yang mau di add jin ya?')
                if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
                try {
                num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                wem.groupAdd(from, [num])
                } catch (e) {
                console.log('Error :', e)
                reply('Gagal menambahkan target, mungkin karena di private')
                }
                break
                case 'linkgc':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await wem.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group ${groupName}`
				wem.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'hidetag':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isOwner) return reply(ind.ownerb())
                var value = body.slice(8)
                var group = await wem.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                wem.sendMessage(from, options, text)
                await limitAdd(sender)
                break
                case 'level':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000  (Math.pow(2, userLevel) - 1)
                resul = `◪ LEVEL\n  ├─ ❏ Name : ${pushname}\n  ├─ ❏ Nomor : ${sender.split("@")[0]}\n  ├─ ❏ User XP : ${userXp}/${requiredXp}\n  └─ ❏ User Level : ${userLevel}\n`
                wem.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                console.error(err)
                await reply(`Error!\n${err}`)
                })
                break
		        case 'grup':
		        case 'group':
		        //❗case by wem & YOGI PW & DappaUhuy
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args[0] === 'buka') {
				reply(`BERHASIL MEMBUKA GROUP`)
                wem.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'tutup') {
                reply(`BERHASIL MENUTUP GROUP`)
				wem.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
                case 'simih':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isSimi) return reply('Fitur simi sudah aktif sebelum nya')
				samih.push(from)
				fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
				reply('Sukses mengaktifkan mode simi di group ini ✔️')
				} else if (Number(args[0]) === 0) {
				samih.splice(from, 1)
				fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
				reply('Sukes menonaktifkan mode simi di group ini ✔️')
				} else {
				reply(ind.satukos())
				}
				break
				case 'antilink':
				//❗case by wem & YOGI PW & DappaUhuy
		        if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())					
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isAntiLink) return reply('UDAH NYALA KAK')
				antilink.push(from)
				fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
				reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
				wem.sendMessage(from,`PERINGATAN!! jika bukan admin kirim link group lain harus pakai #izinadmin`, text)
				} else if (Number(args[0]) === 0) {
				if (!isAntiLink) return reply('Udh aktif')
				var ini = anti.botLangsexOf(from)
				antilink.splice(ini, 1)
				fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
				reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
				} else {
				reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
				}
				break
//============================BATES NGAB============================\\
//OWNER MENU
				case 'antidelete':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				const dataRevoke = JSON.parse(fs.readFileSync('./lib/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return wem.sendMessage(from, `Penggunaan fitur antidelete :\n\n${prefix}antidelete [aktif/mati] (Untuk grup)\n${prefix}antidelete [ctaktif/ctmati] (untuk semua kontak)\n${prefix}antidelete banct 628558xxxxxxx (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return wem.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						wem.sendMessage(from, `Succes Mengaktifkan Antidelete Di Group!!`, MessageType.text)
					} else if (!isGroup) {
						wem.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctaktif`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return wem.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						wem.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						wem.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete aktif`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return wem.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return wem.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./lib/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					wem.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						wem.sendMessage(from, `Succes Menonaktifkan Antidelete Di Group!!`, MessageType.text)
					} else if (!isGroup) {
						wem.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctmati`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						wem.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						wem.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete mati`, MessageType.text)
					}
				}
				break
				case 'nsfw':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply('Ketik 1 Untuk Mengaktifkan Ketik 0 Untuk Menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply('Fitur Nsfw Sudah Aktif Sebelumnya!!')
				nsfw.push(from)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukses Mengaktifkan Fitur Nsfw Di Group Ini')
				} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Menonaktifkan NSFW di grub ini')
					} else {
						reply(ind.satukos())
					}
				break
                case 'leveling':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
                if (args.length < 1) return reply('ketik 1 untuk mengaktifkan, 0 untuk menonaktifkan')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('fitur level sudah aktif sebelum nya')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
				case 'welcome':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply('ketik 1 untuk mengaktifkan, 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
						if (isWelkom) return reply('SUDAH AKTIF !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini')
					} else {
						reply(ind.satukos())
					}
				break
                case 'event':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply('ketik 1 untuk mengaktifkan, 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isEventon) return reply('SUDAH AKTIF !!!')
				event.push(from)
				fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
				reply('❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI')
				} else if (Number(args[0]) === 0) {
				event.splice(from, 1)
				fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
				reply('❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI')
				} else {
				reply(ind.satukos())
				}
				break
				case 'clone':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply(' TAG YANG MAU DI CLONE!!! ')
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
				pp = await wem.getProfilePicture(id)
				buffer = await getBuffer(pp)
				wem.updateProfilePicture(botNumber, buffer)
				mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
				reply(ind.stikga())
				}
				await limitAdd(sender)
				break
				case 'bc': 
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply('text mana asu?')
					anu = await wem.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await wem.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							wem.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('_succes broadcast_ ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `「 BROADCAST BOT 」\n\n${body.slice(4)}`)
						}
						reply('_succes broadcast_ ')
					}
				break
				case 'block':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				wem.updatePresence(from, Presence.composing) 
				wem.chatRead (from)
				wem.blockUser (`${body.slice(7)}@c.us`, "add")
				wem.sendMessage(from, `Perintah Diterima, Memblokir ${body.slice(7)}@c.us`, text)
				break
		        case 'unblock':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				wem.blockUser (`${body.slice(9)}@c.us`, "remove")
			    wem.sendMessage(from, `Perintah Diterima, Membuka Blockir ${body.slice(9)}@c.us`, text)
				break
				case 'leave':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				setTimeout( () => {
				wem.groupLeave (from) 
				}, 2000)
				setTimeout( () => {
				wem.updatePresence(from, Presence.composing) 
				wem.sendMessage(from, 'Bye cuk disuruh keluar ama Ownerku🗣', text) // ur cods
				}, 0)
				break
				case 'tagall':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				members_id = []
				teks = (args.length > 1) ? body.slice(8).trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
				teks += `➡️ @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
		        case 'clearall':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				anu = await wem.chats.all()
				wem.setMaxListeners(25)
				for (let _ of anu) {
				wem.deleteChat(_.jid)
				}
				reply(ind.clears())
				break
				case 'setprefix':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return
				prefix = args[0]
				reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
				break 
				case 'resetlimit':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				var obj = []
				fs.writeFileSync('./database/user/limit.json', JSON.stringify(obj))
				await reply(`LIMIT BERHASIL DI RESET`)
				break
		        case 'setlimit':
		        //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return
				limitawal = args[0]
				reply(`Limit berhasil di ubah menjadi : ${limitawal}`)
				break
		        case 'setmemlimit':
		        //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return
				if (isNaN(args[0])) return reply('Limit harus angka')
				memberlimit = args[0]
				reply(`Change Member limit To ${memberlimit} SUCCESS!`)
				break
				case 'addbadword':
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
                if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                const bw = body.slice(11)
                bad.push(bw)
                fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                reply('Success Menambahkan Bad Word!')
                break
                case 'delbadword':  
                //❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
                if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                let dbw = body.slice(11)
                bad.splice(dbw)
                fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                reply('Success Menghapus BAD WORD!')
                break 
                case 'setppbot':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				wem.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
				enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await wem.downloadAndSaveMediaMessage(enmedia)
				await wem.updateProfilePicture(botNumber, media)
				reply('Makasih profil barunya😗')
				break 
				case 'ban':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(4)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		        case 'unban':
				//❗case by wem & YOGI PW & DappaUhuy
				if (!isRegistered) return reply(ind.noregis())
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(6)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
				default:
       if (budy.includes(`@6285746897368`)) {
                  reply(`Jangan Tag WEM Broh Dia Lagi Sibuk🗣`)
                  }
                  
       if (budy.includes(`@6285746897368`)) {
                  reply(`Jangan Tag WEM Broh Dia Lagi Sibuk🗣`)
                  }
                  
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})