const CFG = require('../../config.json')
const db = require('quick.db')

module.exports = {
	name: 'smathban',
	run: async (client, message) => {
		let user = message.mentions.users.first();

		if(message.author.id == CFG.Smath){
			if(!user)message.reply('Por favor menciona a un usuario🤭')
			message.guild.members.ban(user.id, { reason: 'By Smath' }).then(() => {
				message.delete()
			})
		} else if(message.author.id == CFG.Parzival)message.reply('فاز گرفتیا😹')
	}
}


