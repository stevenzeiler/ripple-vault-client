var $ = require('./ajax');

function RippleTxt(opts) {
  this.txts = {};
};


/*
 * get the ripple.txt file for the given domain
 * 
 */
RippleTxt.prototype.get = function (domain, fn) {
  var self    = this;
  
  if (self.txts[domain]) return fn(null, self.txts[domain]);
  
  var urls = [
    'https://ripple.'+domain+'/ripple.txt',
    'https://www.'+domain+'/ripple.txt',
    'https://'+domain+'/ripple.txt'
  ].reverse();
         
  next();
  function next () {
    if (!urls.length) return fn(new Error("No ripple.txt found"));    

    $.ajax({
      url      : urls.pop(),
      success  : function (data) {
        var sections = self.parse(data);
        self.txts[domain] = sections;
        fn(null, sections); 
      },
      error : function (xhr, status) {
        return next();
      }
    });    
  } 
}    


/*
 * parse a ripple.txt file
 * 
 */    
RippleTxt.prototype.parse = function (txt) {
  txt = txt.replace('\r\n', '\n');
  txt = txt.replace('\r', '\n');
  txt = txt.split('\n');

  var currentSection = "", sections = {};
  for (var i = 0, l = txt.length; i < l; i++) {
    var line = txt[i];
    if (!line.length || line[0] === '#') {
      continue;
    } else if (line[0] === '[' && line[line.length-1] === ']') {
      currentSection = line.slice(1, line.length-1);
      sections[currentSection] = [];
    } else {
      line = line.replace(/^\s+|\s+$/g, '');
      if (sections[currentSection]) {
        sections[currentSection].push(line);
      }
    }
  }

  return sections;
}

module.exports = RippleTxt;