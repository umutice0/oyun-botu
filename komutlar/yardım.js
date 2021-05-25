const Discord = require("discord.js")

exports.run = (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle("Oyun Bot - Yardım Menüsü")
.setDescription("►!among-us-ayarlar - Among Us Ayarlarını Yaparsınız.\n►!bom-ayarlar - Bom Ayarlarını Yaparsınız.\n►!vampir-köylü-ayarlar - Vampir Köylü Ayarlarını Yaparsınız.\nOyun Komutlarına Bakmak İçin !oyun-yardım")
.setFooter("UmutICE Oyun Botu")
.setTimestamp()

message.channel.send(embed)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "Yardım Komutu",
    usage: "!yardım"
}