const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '*';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('VoidBot Online.');
    client.user.setActivity('How To Error', { type: 'WATCHING'});
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'game'){
        client.commands.get('game').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === '8ball'){
        client.commands.get('8ball').execute(message, args);
    } else if(command === 'clap'){
        client.commands.get('clap').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command === 'urban'){
        client.commands.get('urban').execute(message, args);
    } else if(command === 'require'){
        client.commands.get('require').execute(message, args);
    } else if(command === 'dick'){
        client.commands.get('dick').execute(message, args);
    } else if(command === 'iq'){
        client.commands.get('iq').execute(message, args);
    } else if(command === 'gay'){
        client.commands.get('gay').execute(message, args);
    } else if(command === 'joke'){
        client.commands.get('joke').execute(message, args);
    } else if(command === 'fact'){
        client.commands.get('fact').execute(message, args);
    } else if(command === 'math'){
        client.commands.get('math').execute(message, args);
    } else if(command === 'simp'){
        client.commands.get('simp').execute(message, args);
    } else if(command === 'say'){
        client.commands.get('say').execute(message, args);
    } else if(command === 'purge'){
        client.commands.get('purge').execute(message, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command === 'role'){
        client.commands.get('role').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command === 'unrole'){
        client.commands.get('unrole').execute(message, args);
    } else if(command === 'yomama'){
        client.commands.get('yomama').execute(message, args);
    } else if(command === 'wouldyourather'){
        client.commands.get('wouldyourather').execute(message, args);
    } else if(command === 'kidsarestupid'){
        client.commands.get('kidsarestupid').execute(message, args);
    } else if(command === 'wholesome'){
        client.commands.get('wholesome').execute(message, args);
    } else if(command === 'showerthought'){
        client.commands.get('showerthought').execute(message, args);
    } else if(command === 'addbal'){
        client.commands.get('addbal').execute(message, args);
    } else if(command === 'balance'){
        client.commands.get('balance').execute(message, args);
    } else if(command === 'base'){
        client.commands.get('base').execute(message, args);
    } else if(command === 'beg'){
        client.commands.get('beg').execute(message, args);
    } else if(command === '3000years'){
        client.commands.get('3000years').execute(message, args);
    } else if(command === 'aceattorney'){
        client.commands.get('aceattorney').execute(message, args);
    } else if(command === 'alert'){
        client.commands.get('alert').execute(message, args);
    } else if(command === 'approved'){
        client.commands.get('approved').execute(message, args);
    } else if(command === 'bartchalkboard'){
        client.commands.get('bartchalkboard').execute(message, args);
    } else if(command === 'beautiful'){
        client.commands.get('beautiful').execute(message, args);
    } else if(command === 'bobross'){
        client.commands.get('bobross').execute(message, args);
    } else if(command === 'brazzers'){
        client.commands.get('brazzers').execute(message, args);
    } else if(command === 'caution'){
        client.commands.get('caution').execute(message, args);
    } else if(command === 'certificate'){
        client.commands.get('certificate').execute(message, args);
    } else if(command === 'challenger'){
        client.commands.get('challenger').execute(message, args);
    } else if(command === 'changemymind'){
        client.commands.get('changemymind').execute(message, args);
    } else if(command === 'chiidea'){
        client.commands.get('chiidea').execute(message, args);
    } else if(command === 'communist'){
        client.commands.get('communist').execute(message, args);
    } else if(command === 'deepfry'){
        client.commands.get('deepfry').execute(message, args);
    } else if(command === 'dislike'){
        client.commands.get('dislike').execute(message, args);
    } else if(command === 'distort'){
        client.commands.get('distort').execute(message, args);
    } else if(command === 'factbook'){
        client.commands.get('factbook').execute(message, args);
    } else if(command === 'gandhiquote'){
        client.commands.get('gandhiquote').execute(message, args);
    } else if(command === 'grab'){
        client.commands.get('grab').execute(message, args);
    } else if(command === 'gun'){
        client.commands.get('gun').execute(message, args);
    } else if(command === 'lisa'){
        client.commands.get('lisa').execute(message, args);
    } else if(command === 'newpassword'){
        client.commands.get('newpassword').execute(message, args);
    } else if(command === 'pornhub'){
        client.commands.get('pornhub').execute(message, args);
    } else if(command === 'rainbow'){
        client.commands.get('rainbow').execute(message, args);
    } else if(command === 'scrolloftruth'){
        client.commands.get('scrolloftruth').execute(message, args);
    } else if(command === 'supreme'){
        client.commands.get('supreme').execute(message, args);
    } else if(command === 'worsehitler'){
        client.commands.get('worsehitler').execute(message, args);
    } else if(command === 'worthless'){
        client.commands.get('worthless').execute(message, args);
    } else if(command === 'youdied'){
        client.commands.get('youdied').execute(message, args);
    } else if(command === 'camera'){
        client.commands.get('camera').execute(message, args);
    } else if(command === 'coinflip'){
        client.commands.get('coinflip').execute(message, args);
    } else if(command === 'daily'){
        client.commands.get('daily').execute(message, args);
    } else if(command === 'deposit'){
        client.commands.get('deposit').execute(message, args);
    } else if(command === 'fish'){
        client.commands.get('fish').execute(message, args);
    } else if(command === 'blackjack'){
        client.commands.get('blackjack').execute(message, args);
    } else if(command === 'hunt'){
        client.commands.get('hunt').execute(message, args);
    } else if(command === 'leaderboard'){
        client.commands.get('leaderboard').execute(message, args);
    } else if(command === 'mine'){
        client.commands.get('mine').execute(message, args);
    } else if(command === 'pay'){
        client.commands.get('pay').execute(message, args);
    } else if(command === 'profile'){
        client.commands.get('profile').execute(message, args);
    } else if(command === 'rob'){
        client.commands.get('rob').execute(message, args);
    } else if(command === 'search'){
        client.commands.get('search').execute(message, args);
    } else if(command === 'setbio'){
        client.commands.get('setbio').execute(message, args);
    } else if(command === 'shop'){
        client.commands.get('shop').execute(message, args);
    } else if(command === 'trivia'){
        client.commands.get('trivia').execute(message, args);
    } else if(command === 'typetest'){
        client.commands.get('typetest').execute(message, args);
    } else if(command === 'upgrade'){
        client.commands.get('upgrade').execute(message, args);
    } else if(command === 'wallet'){
        client.commands.get('wallet').execute(message, args);
    } else if(command === 'weekly'){
        client.commands.get('weekly').execute(message, args);
    } else if(command === 'wikihow'){
        client.commands.get('wikihow').execute(message, args);
    } else if(command === 'work'){
        client.commands.get('work').execute(message, args);
    } else if(command === 'withdraw'){
        client.commands.get('withdraw').execute(message, args);
    } else if(command === 'help-fun'){
        client.commands.get('help-fun').execute(message, args);
    } else if(command === 'help-images'){
        client.commands.get('help-images').execute(message, args);
    } else if(command === 'help-economy'){
        client.commands.get('help-economy').execute(message, args);
    } else if(command === 'help-admin'){
        client.commands.get('help-admin').execute(message, args);
    } else if(command === 'showerthought'){
        client.commands.get('showerthought').execute(message, args);
    } else if(command === 'yesorno'){
        client.commands.get('yesorno').execute(message, args);
    } else if(command === 'anal'){
        client.commands.get('anal').execute(message, args);
    } else if(command === 'meme'){
        client.commands.get('meme').execute(message, args);
    } else if(command === 'tihi'){
        client.commands.get('tihi').execute(message, args);
    } else if(command === 'help-reddit'){
        client.commands.get('help-reddit').execute(message, args);
    } else if(command === 'warn'){
        client.commands.get('warn').execute(message, args);
    } else if(command === 'blursedimages'){
        client.commands.get('blursedimages').execute(message, args);
    } else if(command === 'leet'){
        client.commands.get('leetspeak').execute(message, args);
    } else if(command === 'crypto'){
        client.commands.get('crypto').execute(message, args);
    } else if(command === 'doomsday'){
        client.commands.get('doomsday').execute(message, args);
    } else if(command === 'proxylist'){
        client.commands.get('proxylist').execute(message, args);
    }
});
 
client.login(process.env.token);
