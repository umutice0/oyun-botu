const Discord = require("discord.js");
const db = require("nrc.db");

exports.run = (client, message, args) => {

let kanal = message.mentions.channels.first();


if(args[0] !== "ayarla" && args[0] !== "sıfırla") return message.channel.send("Kullanım:\n!bom-kanal ayarla #kanal\n!bom-kanal sıfırla")

if(args[0] == "ayarla") {
    if(!kanal) return message.channel.send("Kanal etiketlemen gerek!")
    message.channel.send(`Başarılı! Bom kanalı ${kanal} olarak ayarlandı. İyi oynamalar :)`)
    db.set(`bomkanal_${message.guild.id}`, kanal.id)
    db.set(`bomdurum_${message.guild.id}`, "acik")
    db.set(`bomrakam_${message.guild.id}`, 0)
    db.add(`bomrakam_${message.guild.id}`, 1)

    kanal.send("**Bom oyunu bu kanalda başlamıştır!**")
    kanal.send("**İyi Oyunlar.**")
    kanal.send("**-UmutICE Oyun Botu**")

}else if(args[0] == "sıfırla") {
    message.channel.send("Bom kanalı sıfırlandı.")
    db.delete(`bomkanal_${message.guild.id}`)
    db.delete(`bomdurum_${message.guild.id}`)
    db.delete(`bomrakam_${message.guild.id}`)
}

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["bomkanal"],
    permLevel: 4
}

exports.help = {
    name: "bom-kanal",
    description: "Bom Kanalını Ayarlarsınız",
    usage: "!bom-kanal"
}