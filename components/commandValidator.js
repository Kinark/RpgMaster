const commandTree = {
   create: {
      rpg: 'rpg_name',
      char: 'rpg_id rpg_name'
   },
   get: {

   },
   set: {

   },
   max: {

   },
   addinv: {

   },
   delinv: {

   },
   login: '',
   lock: '',
   unlock: '',
}


// /create 2
// /get 8
// /set 3
// /max 2
// /addinv 2
// /delinv 2
// /login
// /lock
// /unlock



// Common
// /create rpg [name]
// /create char [rpg_id] [name]
// /get myrpgs
// /get mychars
// /login [id] (rpg or char)

// Master
// /get sheet
// /get sheetmodel
// /get prop [sheet_id] [property]
// /lock [sheet_id]
// /unlock [sheet_id]
// /set sheetmodel [property] [value]
// /set sheet
// /max [sheet_id] [status] [value]
// /addinv [sheet_id] [item] [amount]
// /delinv [sheet_id] [item] [amount]

// Player
// /get sheet
// /get prop [property]
// /set sheet
// /max [status] [value]
// /addinv [item] [amount]
// /delinv [item]
