'use strict';

const views = (function views() {
  return {
    Intent: {
      Balance: {
        say: "Your Card <say-as interpret-as='spell-out'>Id</say-as> is checking now <break time='300ms'/>",
      },
      totalBalance : {
        ask : "your balance is {totalBalance} <break time='300ms'/> Do you want asking other Card <say-as interpret-as='spell-out'>Id</say-as>?"
      },    
      askCardId : {
        ask : "your card <say-as interpret-as='spell-out'>Id</say-as> is invalid <break time='300ms'/> Can you give me a valid card <say-as interpret-as='spell-out'>Id</say-as>?"
      },
      askAgainCardId : {
        ask : "Please <break time='300ms'/> give me your <say-as interpret-as='spell-out'>Id</say-as>"
      },
      serverError: {
        tell: "Sorry<break time='100ms'/>I can not help you in this time",
      },
      didNotUnderStand : {
        ask : "I did not understand what are you saying <break time='300ms'/> Can you ask me the card <say-as interpret-as='spell-out'>Id</say-as> again?"
      },
      exit: {
        tell: "Ok <break time='300ms'/> thank you!",
      },
      Help: {
        say: 'Some help text here.',
      }
    }
  };
}());
module.exports = views;
