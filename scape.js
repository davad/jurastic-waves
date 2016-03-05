var links = [];
'use strict';

var casper = require('casper').create();
 
function getLinks() {
    var dinosEls = document.querySelectorAll('.griditem');
    var linksa = [];
    var dinos = Array.prototype.map.call(dinosEls, function(element) {
        linksa.push(element.querySelector('a').getAttribute('href'));
        
        return JSON.stringify({ 
            name: element.querySelector('a').getAttribute('title'),
            shortDescription: element.innerText
        });
    });
    return [linksa, dinos];
}

casper.start('http://www.dinosaurfact.net/jurassic.php', function() {
});


function getOtherPageData(){
  
    var classifications = Array.prototype.map.call(document.querySelectorAll('.block strong'), function(item){
        console.log(item)
      if(item.children.length !== 0){
        return {
          item: item.innerText
        }
      }
    });
    
    var parahs = Array.prototype.map.call(document.querySelectorAll('.block p'), function(item, index){
      if(item.children.length !== 0 && index === 0){
        return {
            item: item.innerText
        }
      } else {
        return {item: null}
      }
    });
    
    parahs.filter(function(val){
        return val.item !== null
    });
    
    return [classifications, parahs];

  }


casper.then(function() {
  var data = this.evaluate(getLinks);
 
 this.each(data[0], function(self, link) { 
  console.log(link)
        this.thenOpen('http://www.dinosaurfact.net'+link, function() {
            var goals = this.evaluate(getOtherPageData)
            this.echo(goals); // display the title of page
        });
    });
})


casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' Dinos found:');
    this.echo(links).exit();
});