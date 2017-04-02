'use strict';

const views = (function views() {
  return {
    Intent: {
      Balance: {
        say: 'Your Card ID is checking now',
      },
      DDDBad: {
        tell: 'Wrong very Wrong...',
      },
      totalBalance : {
        tell : "your quantity in your card is {totalBalance}"
      },
      Help: {
        say: 'Some help text here.',
      },
    },
  };
}());
module.exports = views;
