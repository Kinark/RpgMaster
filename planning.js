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
/get sheets
/get sheet [sheet_id]
/get sheetmodel
/get sheet [sheet_id] [property]
/lock [sheet_id]
/unlock [sheet_id]
/set sheetmodel [property] [value]
/set [sheet_id] [property] [value]
/max [sheet_id] [status] [value]
/addinv [sheet_id] [item] [amount]
/delinv [sheet_id] [item] [amount]

Player
/get sheet
/get sheet [property]
/set [property] [value]
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
      ]
   }
]

