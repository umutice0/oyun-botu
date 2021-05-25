const Discord = require("discord.js");
const db = require("nrc.db");

exports.run = (client, message, args) => {

let rol = message.mentions.roles.first();
let kanal = message.mentions.channels.first();

if(!args[0]) return message.channel.send("Hatalı kullanım!\n!among-us-ayarlar oyun-kanal #Kanal\n!among-us-ayarlar impostor-sayı Sayı\n!among-us-ayarlar minimum-kişi Sayı\n!among-us-ayarlar max-kişi Sayı")
if(args[0] !== "oyun-kanal" || args[0] !== "impostor-sayı" || args[0] !== "minimum-kişi" || args[0] !== "max-kişi" || args[0] !== "oyun-yetkilisi" || args[0] !== "impostor-kanal" ) return message.channel.send("Hatalı kullanım!\n!among-us-ayarlar oyun-kanal #Kanal\n!among-us-ayarlar impostor-sayı Sayı\n!among-us-ayarlar minimum-kişi Sayı\n!among-us-ayarlar max-kişi Sayı\n!among-us-ayarlar oyun-yetkilisi @Rol")

if(args[0] == "oyun-kanal") {
    if(!kanal) return message.channel.send("Kanal etiketle!")
    message.channel.send(`Başarılı! Oyun kanalı ${kanal} olarak ayarlandı.`)
    db.set(`oyunkanal_${message.guild.id}`, kanal)
}
if(args[0] == "oyun-yetkilisi") {
    if(!rol) return message.channel.send("Rol etiketle!")
    message.channel.send(`Başarılı! Oyun yetkilisi ${rol} olarak ayarlandı.`)
    db.set(`oyunyetkilisi_${message.guild.id}`, rol)
}

if(args[0] == "impostor-sayı") {
    if(!args[1]) return message.channel.send("Rakam yaz!")
    if(!Number(args[1])) return message.channel.send("Rakam yaz!")
    message.channel.send(`Başarılı! İmpostor sayısı ${args[1]} olarak ayarlandı.`)
    db.set(`impostorsayi_${message.guild.id}`, args[1])
}

if(args[0] == "minimum-kişi") {
    if(!args[1]) return message.channel.send("Rakam yaz!")
    if(!Number(args[1])) return message.channel.send("Rakam yaz!")
    message.channel.send(`Başarılı! Minumum kişi sayısı ${args[1]} olarak ayarlandı.`)
    db.set(`minimumsayi_${message.guild.id}`, args[1])
}

if(args[0] == "max-kişi") {
    if(!args[1]) return message.channel.send("Rakam yaz!")
    if(!Number(args[1])) return message.channel.send("Rakam yaz!")
    message.channel.send(`Başarılı! Maksimum kişi sayısı ${args[1]} olarak ayarlandı.`)
    db.set(`maksimumsayi_${message.guild.id}`, args[1])
}

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["amongus-ayarlar"],
    permLevel: 4
}

exports.help = {
    name: "among-us-ayarlar",
    description: "Among Us Ayarları Yaparsınız",
    usage: "!among-us-ayarlar"
}