export default {
   wrongDices: `Something is wrong with these dices...`,
   maxDices: `I'm sorry, I can't allow so much dices. It'd blow your mind.`,
   roll: `Roll`,
   unknown: unknown => `You should choose better your words when you're talking to a God. I won't accept such thing as "${unknown}".`,
   missingRpgName: `You need to specify a name for your rpg: <code>/create rpg rpg_name_here</code>`,
   tooMuchRpgName: `The <code>/create rpg</code> command accepts only one argument, and it's the RPG name: <code>/create rpg rpg_name_here</code>`,
   successNewRpg: (name, id) => `Congratulations!\nYour RPG <b>"${name}"</b> was created.\nStart to rule your world by typing:\n<code>/login</code>`,
   rpgsList: rpgs => `Here's your RPGs list, my lord:\n\n${rpgs}\nLogin with:\n<code>/login</code>`,
   noRpgsFound: `I'm sorry, you are no God yet.\nCreate an RPG by running\n<code>/create rpg rpg_name</code>`,
   chooseRpgForLogin: `Choose your world, my lord:`,
   rpgChosen: rpg => `Done. You are now The One for the world <b>${rpg}</b>`
}
