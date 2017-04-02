'use strict';

const Tuc = require('tuc');

exports.register = function register(skill) {
  skill.onIntent('TUCBalanceIntent', (alexaEvent) => {

	alexaEvent.model.tucId = alexaEvent.intent.params.tucId
  	
  	if(alexaEvent.model.tucId){
  		return { reply: 'Intent.Balance', to: 'checkTUCBalance' };
  	}
  	 else {
  		return { reply: 'Intent.DDDBad', to: 'die' };
  	}

  });

  skill.onState('checkTUCBalance', (alexaEvent) => {
  	
  	return getData(alexaEvent.model.tucId)
	  .then(balance=>{
	  		alexaEvent.model.totalBalance = balance;
	 	 	return { reply: 'Intent.totalBalance', to: 'die' };
	  })
	  .catch(err=>{
	  	console.log(err)
	  	return { reply: 'Intent.DDDBad', to: 'die' };
	  });

  });

  /*skill.onState('giveNumberId', (alexaEvent) => {

  });*/
 // skill.onIntent('AMAZON.HelpIntent', () => ({ reply: 'Intent.Help', to: 'die' }));
};

function getData(number) {

	const tuc = new Tuc();

	return new Promise((resolve,reject)=>{
		// call method getBalance 
		tuc.getBalance(number, (balance) => {

			if (tuc.isError(balance)) {
				return reject(balance);
			}
		  	
		  	return resolve(balance);
		});

	});
}