var links = [];

var fs = require('fs');
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
  var links = data[0];
  var _customData = data[1];
  
  this.each(links, function(self, link, index) { 

        this.thenOpen('http://www.dinosaurfact.net'+link, function() {
            var pagedata = this.evaluate(getOtherPageData)
            _customData[index].classifications = pagedata[0];
            _customData[index].parhas = pagedata[1];            
        });
        
    });
    
    fs.write('temp.txt', _customData, 'w');
    
})


casper.run(function() {

    // echo results in some pretty fashion
    this.echo(links.length + ' Dinos found:');
    this.echo(links).exit();
});