'use strict';

const views = (function views() {
  return {
    Intent: {
      Balance: {
        say: 'Your Card ID is checking now',
      },
      totalBalance : {
        ask : "your quantity in your card is {totalBalance}, Do you want asking other Card Id?"
      },    
      askCardId : {
        ask : "your card id is invalid, Can you give me a valid card id?"
      },
      askAgainCardId : {
        ask : "Please, give me your Id"
      },
      serverError: {
        tell: 'Sorry,I can not help you in this time',
      },
      didNotUnderStand : {
        ask : "I did not understand what are you saying , you can ask me the card id again?"
      },
      exit: {
        tell: 'Ok, thank you!',
      },
      Help: {
        say: 'Some help text here.',
      }
    }
  };
}());
module.exports = views;
