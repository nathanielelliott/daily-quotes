setInterval(function() {
                  window.location.reload();
                }, 9000000); 
(function() {

  var app = angular.module('inovalonQuote', []);
  
  app.controller('inovQuote', function(){
    this.info = quotes[Math.floor(Math.random()*quotes.length)];
    this.pick = function(){
      this.info = quotes[Math.floor(Math.random()*quotes.length)];
    };
  });
  
  var quotes = [
    {
      text: "If everything seems under control, you're not going fast enough.",
      textby: "Mario Andretti"
    },
    {
      text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
      textby: "Anne Frank"
    },
    {
      text: "Leaders can let you fail and yet not let you be a failure.",
      textby: "Stanley McChrystal"
    },
    {
      text: "Always be a first-rate version of yourself, instead of a second-rate version of somebody else.",
      textby: "Judy Garland"
    },
    {
      text: "Very often, a change of self is needed more than a change of scene.",
      textby: "A.C. Benson"
    },
    {
      text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
      textby: "Thomas Edison"
    },
    {
      text: "Follow your passion, stay true to yourself, never follow someone else’s path unless you’re in the woods and you’re lost and you see a path then by all means you should follow that.",
      textby: "Ellen Degeneres"
    },
    {
      text: "It’s easy to solve a problem that everyone sees, but it’s hard to solve a problem that almost no one sees.",
      textby: "Tony Fadell"
    },
    {
      text: "Luck is a matter of preparation meeting opportunity.",
      textby: "Seneca"
    },
    {
      text: "Motivation is the art of getting people to do what you want them to do because they want to do it.",
      textby: "Dwight D. Eisenhower"
    },
    {
      text: "Don’t persuade, defend or interrupt. Be curious, be conversational, be real. And listen.",
      textby: "Elizabeth Lesser"
    }
    
  ];
  
})();