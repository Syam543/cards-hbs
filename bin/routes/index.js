var express = require('express');
var router = express.Router();

/* GET home page. */
const products =[{
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRx5KG3-sq5HN6wW2BYfM4kr7yIIVjuQ_7Rg&usqp=CAU',
  name:"Nike Jorden 1",
  description:"Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.",
},
{
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVquDhsovm_3cTuV9h4MOgDuYqBwH3xK-lw&usqp=CAU',
name: 'Puma RS-X',
description: 'Step into the future with the Puma RS-X sneakers. Combining retro style with modern technology, these shoes are a perfect blend of fashion and comfort.',
},
{
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuH32bx4IqjeCXn1-MXzvYsEBKmi3M4zl0lg&usqp=CAU',
name: 'New Balance 990v5',
description: 'The New Balance 990v5 offers a classic silhouette with superior comfort. Made in the USA, these sneakers feature premium materials for durability and style.',
},
{
image: 'https://m.media-amazon.com/images/I/31RUdwWMXbL._AC_SY780_.jpg',
name: 'Reebok Classic Leather',
description: 'Embrace timeless style with the Reebok Classic Leather. With its clean design and comfortable fit, these sneakers are a versatile addition to your wardrobe.',
}]
router.get('/', function(req, res, next) {
  res.render('index', { products });
});

module.exports = router;
