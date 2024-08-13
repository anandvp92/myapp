var express = require('express');
var router = express.Router();
let products = [
  {
    name:"IPHONE SE",
    category:"Mobile",
    description:"This is a good phone",
    image:"https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
  },
  {
    name:"IPHONE SE",
    category:"Mobile",
    description:"This is a good phone",
    image:"https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
  },
  {
    name:"IPHONE SE",
    category:"Mobile",
    description:"This is a good phone",
    image:"https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
  },
  {
    name:"IPHONE SE",
    category:"Mobile",
    description:"This is a good phone",
    image:"https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
  },
  {
    name:"IPHONE SE",
    category:"Mobile",
    description:"This is a good phone",
    image:"https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
  },
  {
    name:"IPHONE SE",
    category:"Mobile",
    description:"This is a good phone",
    image:"https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
  },
  {
    name:"IPHONE SE",
    category:"Mobile",
    description:"This is a good phone",
    image:"https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
  },
  {
    name:"IPHONE SE",
    category:"Mobile",
    description:"This is a good phone",
    image:"https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
  }
  
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index page' ,product:products});
});

module.exports = router;
