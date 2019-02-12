/create 2
/get 8
/set 3
/max 2
/addinv 2
/delinv 2
/login
/lock
/unlock


Common
/create rpg [name]
/create char [name] [rpg_id]
/get myrpgs
/get mychars
/login [id] (rpg or char)

Master
/get sheet
/get sheetmodel
/get property [sheet_id]
/lock [sheet_id]
/unlock [sheet_id]
/set sheetmodel [property] [value]
/set sheet
/max [sheet_id] [status] [value]
/addinv [sheet_id] [item] [amount]
/delinv [sheet_id] [item] [amount]

Player
/get sheet
/get property
/set sheet
/max [status] [value]
/addinv [item] [amount]
/delinv [item]

const games = [
   {
      name: 'A Marcha',
      owner: 'Kinark',
      sheetModel: {
         pointsBase: 20,
         test: '1d20',
         info: ['idade', 'raça', 'classe'],
         status: ['hp', 'mp'],
         inventory: true,
         picture: false,
         attributes: ['força', 'inteligência', 'destreza',]
      },
      sheets: [
         {
            owner: 'bruno'
            locked: true,
            name: '',
            sheet: {
               info: {
                  idade: '20',
                  raca: 'Humano',
                  classe: 'Arqueiro'
               },
               status: {
                  hp: [20, 100],
                  mp: [100, 100]
               },
               inventory: {
                  moedas: 100
               },
               attributes: {
                  forca: 12,
                  inteligencia: 6,
                  destreza: 2
               }
            }
         }
      ]
   }
]



const commandTree = {
   create: {
      common: {
         rpg: 'rpg_name',
         char: 'char_name',
      }
   },
   get: {
      common: {
         myrpgs: '',
         mychars: '',
      },
      master: {
         sheets: '',
         sheet: '',
         sheetmodel: '',
         sheet: '',
      },
      player: {
         sheet: '',
         sheet: '',
      }
   },
   set: {
      master: {
         sheetmodel: '',
         sheet: '',
      },
      player: {
         sheet: '',
      }
   },
   max: {
      master: '',
      player: '',
   },
   addinv: {
      master: '',
      player: '',
   },
   delinv: {
      master: '',
      player: '',
   },
   login: '',
   lock: '',
   unlock: '',
}
