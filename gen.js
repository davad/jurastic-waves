  var faker = require('faker');
  var dinoJson = require('./dino.json');
  var fs = require('fs');
  var path = require('path');
  
    dinoJson.map(function(item)  {
      item.longDescription = faker.fake('{{lorem.paragraph}}')
      
       return item;
    })
    
    fs.writeFile(path.join(__dirname,'dino.json'),
      JSON.stringify(dinoJson),
      'UTF-8')