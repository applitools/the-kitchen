const RECIPES = [
  {
    id: 'hot-fried-chicken',
    title: 'Hot Fried Chicken',
    image: '/images/hot-fried-chicken.jpg'
  },
  {
    id: 'mixed-grill-skewers',
    title: 'Mixed Grill Skewers',
    image: '/images/mixed-grill-skewers.jpg'
  },
  {
    id: 'rice-paper-sushi-rolls',
    title: 'Rice Paper Sushi Rolls',
    image: '/images/rice-paper-sushi-rolls.jpg'
  },
  {
    id: 'salmon-mixed-vegetables',
    title: 'Salmon with Mixed Vegetables',
    image: '/images/salmon-mixed-vegetables.jpg'
  },
  {
    id: 'shredded-beef-tacos',
    title: 'Shredded Beef Tacos',
    image: '/images/shredded-beef-tacos.jpg'
  },
]

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    time: Date.now(),
    data: RECIPES
  })
}
