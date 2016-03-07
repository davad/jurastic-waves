
const faker = require('faker');
const dinoJson = require('./dino.json');
const fs = require('fs');
const path = require('path');

dinoJson.map(function(item)  {
  item.longDescription = faker.fake('{{lorem.paragraph}}');
    return item;
});

fs.writeFile(path.join(__dirname, 'dino.json'),
  JSON.stringify(dinoJson),  'UTF-8');
