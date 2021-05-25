const Discord = require("discord.js");
const db = require("nrc.db");

exports.run = (client, message, args) => {

let rol = message.mentions.roles.first();
let kanal = message.mentions.channels.first();

if(!args[0]) return message.channel.send("Hatalı kullanım!\n!among-us-ayarlar oyun-kanal #Kanal\n!among-us-ayarlar vampir-sayı Sayı\n!among-us-ayarlar minimum-kişi Sayı\n!among-us-ayarlar max-kişi Sayı")
if(args[0] !== "oyun-kanal" || args[0] !== "vampir-sayı" || args[0] !== "minimum-kişi" || args[0] !== "max-kişi" || args[0] !== "oyun-yetkilisi") return message.channel.send("Hatalı kullanım!\n!among-us-ayarlar oyun-kanal #Kanal\n!among-us-ayarlar vampir-sayı Sayı\n!among-us-ayarlar minimum-kişi Sayı\n!among-us-ayarlar max-kişi Sayı\n!among-us-ayarlar oyun-yetkilisi @Rol")

if(args[0] == "oyun-kanal") {
    if(!kanal) return message.channel.send("Kanal etiketle!")
    message.channel.send(`Başarılı! Oyun kanalı ${kanal} olarak ayarlandı.`)
    db.set(`oyunkanal_${message.guild.id}`, kanal)
}
if(args[0] == "oyun-yetkilisi") {
    if(!rol) return message.channel.send("Rol etiketle!")
    message.channel.send(`Başarılı! Oyun yetkilisi ${rol} olarak ayarlandı.`)
    db.set(`vkoyunyetkilisi_${message.guild.id}`, rol)
}

if(args[0] == "vampir-sayı") {
    if(!args[1]) return message.channel.send("Rakam yaz!")
    if(!Number(args[1])) return message.channel.send("Rakam yaz!")
    message.channel.send(`Başarılı! Vampir sayısı ${args[1]} olarak ayarlandı.`)
    db.set(`vkvampirsayi_${message.guild.id}`, args[1])
}

if(args[0] == "minimum-kişi") {
    if(!args[1]) return message.channel.send("Rakam yaz!")
    if(!Number(args[1])) return message.channel.send("Rakam yaz!")
    message.channel.send(`Başarılı! Minumum kişi sayısı ${args[1]} olarak ayarlandı.`)
    db.set(`vkminimumsayi_${message.guild.id}`, args[1])
}

if(args[0] == "max-kişi") {
    if(!args[1]) return message.channel.send("Rakam yaz!")
    if(!Number(args[1])) return message.channel.send("Rakam yaz!")
    message.channel.send(`Başarılı! Maksimum kişi sayısı ${args[1]} olarak ayarlandı.`)
    db.set(`vkmaksimumsayi_${message.guild.id}`, args[1])
}

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["vampirköylü-ayarlar"],
    permLevel: 4
}

exports.help = {
    name: "vampir-köylü-ayarlar",
    description: "Vampir Köylü Ayarları Yaparsınız",
    usage: "!vampir-köylü-ayarlar"
}