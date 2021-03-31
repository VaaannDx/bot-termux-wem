exports.wait = () => {
	return`「 ❗ 」Wait Sedang Proses`
}

exports.succes = () => {
	return`「 ❗ 」Sukses Ngab!!!`
}

exports.lvlon = () => {
	return`「 ❗ 」Berhasil Mengaktifkan Mode Leveling Di Group Ini️`
}

exports.lvloff = () => {
	return`「 ❗ 」Berhasil Menonaktifkan Mode Leveling Di Group Ini️`
}

exports.lvlnul = () => {
	return`「 ❗ 」Level Mu Masih Kosong`
}

exports.baned = () => {
	return`「 ❗ 」Maaf Kamu Sudah Terbanned!!`
}

exports.lvlnoon = () => {
	return`「 ❗ 」Leveling Di Group Belum Diaktifkan`
}

exports.noregis = () => {
	return`「 ❗ 」Daftar Dulu Ngab\nCara Daftar : ${prefix}daftar nama|umur \ncontoh ${prefix}daftar WEM|15`
}

exports.rediregis = () => {
	return`「 ❗ 」Kamu Sudah Terdaftar Di Database JACK-BOT`
}

exports.stikga = () => {
	return`「 ❗ 」Yah Gagal Coba Ulangi Beberapa Saat Lagi`
}

exports.premium = () => {
	return`「 ❗ 」Maaf Kak Perintah Ini Hanya Untuk User Premium`
}

exports.linkga = () => {
	return`「 ❗ 」Link Tidak Valid`
}

exports.groupo = () => {
	return`「 ❗ 」Command Ini Khusus Untuk Group`
}

exports.ownerb = () => {
	return`「 ❗ 」Command Ini Khusus Untuk Owner`
}

exports.ownerg = () => {
	return`「 ❗ 」Command Ini Khusus Untuk Owner Group`
}

exports.admin = () => {
	return`「 ❗ 」Command Ini Khusus Untuk Admin`
}

exports.badmin = () => {
	return`「 ❗ 」BOT Harus Menjadi Admin`
}

exports.nsfwoff = () => {
	return`「 ❗ 」Aktifkan Mode Nsfw!`
}

exports.bug = () => {
	return`「 ❗ 」Masalah Telah Dilaporkan Ke Owner Dappaツ, Laporan Palsu/Main Main Auto Block + Ban Permanent`
}

exports.wrongf = () => {
	return`「 ❗ 」Format Salah/Text Kosong`
}

exports.clears = () => {
	return`「 ❗ 」Clear All Succes`
}

exports.pc = () => {
	return`「 ❗ 」Regristasi Ngab\n\nUntuk Mengetahui Apakah Kamu Sudah Terdaftar Silahkan Check Message Yang Saya Kirim \n\nNOTE:\nJika Kamu Belum Mendapatkan Pesan. Berati Kamu Belum Menyimpan Nomer BOT`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`「 ❗ 」Data JACK-BOT\n\nKamu Sudah Terdaftar Dengan Data \n\n┏━⊱Nama\n┗⊱${namaUser}\n┏━⊱Nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Umur\n┗⊱${umurUser}\n┏━⊱Waktu pendaftaran\n┗⊱${time}\n\n┏━❉ NS ❉━\n┣⊱${serialUser}\n┗⊱NOTE : Jangan Dilupakan Kodenya:v`
}

exports.cmdnf = (prefix, command) => {
	return`「 ❗ 」Command ${prefix}${command} Tidak Ditemukan\Coba Tulis ${prefix}menu`
}

exports.owneresce = (pushname) => {
	return`「 ❗ 」Maaf Tapi ${pushname} Bukan Owner BOT Ini`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`「 ❗ 」Maaf ${pushname} Level Mu Belum Mencukupi\n\n┏⊱Level Mu : ${getLevelingLevel(sender)}\n┣⊱Jenis Command : ${command}\n┗⊱Syarat Level : ${aha}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`「 ❗ 」Maaf ${pushname} Level Mu Belum Mencukupi\n\n┏⊱Level Mu : ${getLevelingLevel(sender)}\n┣⊱Jenis Command : ${command}\n┗⊱Syarat Level : ${aha}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`「 ❗ 」Maaf ${pushname} Level Mu Belum Mencukupi\n\n┏⊱Level Mu : ${getLevelingLevel(sender)}\n┣⊱Jenis Command : ${command}\n┗⊱Syarat Level : ${aha}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`「 ❗ 」Maaf ${pushname} Level Mu Belum Mencukupi\n\n┏⊱Level Mu : ${getLevelingLevel(sender)}\n┣⊱Jenis Command : ${command}\n┗⊱Syarat Level : ${aha}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`「 ❗ 」Maaf ${pushname} Level Mu Belum Mencukupi\n\n┏⊱Level Mu : ${getLevelingLevel(sender)}\n┣⊱Jenis Command : ${command}\n┗⊱Syarat Level : ${aha}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`「 ❗ 」Maaf ${pushname} Level Mu Belum Mencukupi\n\n┏⊱Level Mu : ${getLevelingLevel(sender)}\n┣⊱Jenis Command : ${command}\n┗⊱Syarat Level : ${aha}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
「 SELAMAT 」
 📊➤ Nama : ${pushname}
 📊➤ Nomer : ${sender.split("@")[0]}
 📊➤ Xp : ${getLevelingXp(sender)}
 📊➤ Limit :  +3
 📊➤ Pangkat :  ${role}
 📊➤ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`「 ❗ 」Maaf ${pushname} Limit Kamu Sudah Habis\nHubungi kami : wa.me/6285876330812\n\nNote : Kami Akan Berikan Random Dari 1-10`
}

exports.limitcount = (limitCounts) => {
	return`
「 ❗ 」Limit Count
Sisa Limit Anda : ${limitCounts}

NOTE : Untuk Mendapatkan Limit Bisa Lewat Naik Level Di Grouo Atau Buylimit.
`}

exports.satukos = () => {
	return`「 ❗ 」Tambah Parameter 1/enable Atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ 「 ATM 」\n  ├─ ❏ Name : ${pushname}\n  ├─ ❏ Nomor : ${sender.split("@")[0]}\n  └─ ❏ Uang : ${uangkau}
`}
