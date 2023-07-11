const invoice1 =
  {
    person: 'Ann',
    toy: {
      name: 'Gameboy',
      color: 'Grey',
      type: 'Videogame',
      weight: '1lb',
      features: [
        'Multiplayer', 'Color Screen', "Memory Card"
      ],
      cost: 40,
      date: '07:11:2023',
    },
    paid: true,
   
  }



const invoice2 = {
  person: 'Henry',
  toy: {
    name: 'Ninja Turtles',
    color: 'Green',
    type: 'Action Figure',
    weight: '.40 lbs',
    features: [
      'Karate Chop', 'Nunchucks', 'Pizza'
    ],
    cost: 13,
    date: '07:08:2023',
  },
  paid: false
}




const invoice3 = {
    person: 'Phillip',
    toy: {
      name: 'Hot Wheels',
      color: 'Red',
      type: 'Race Car',
      weight: '.10 lbs',
      features: [
        'Nos', 'Seatbelts', 'Chrome Rims'
      ],
      cost: 5,
      date: '03:13:2020',
    },
    paid: true
  }
module.exports = [invoice1,invoice2,invoice3]