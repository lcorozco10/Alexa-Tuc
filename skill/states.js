'use strict';

const Tuc = require('tuc');

exports.register = function register(skill) {
  skill.onIntent('TUCBalanceIntent', (alexaEvent) => {

	alexaEvent.model.tucId = alexaEvent.intent.params.tucId
  	
  	if(alexaEvent.model.tucId){
  		return { reply: 'Intent.Balance', to: 'checkTUCBalance' };
  	}
  	 else {
  		return { reply: 'Intent.askAgainCardId', to: 'entry' };
  	}

  });

  skill.onUnhandledState((alexaEvent) => {
	 return { reply: 'Intent.didNotUnderStand', to: 'entry' };
  });

  skill.onState('checkTUCBalance', (alexaEvent) => {
  	
  	return getData(alexaEvent.model.tucId)
	  .then(balance=>{
	  		//valid
	  		alexaEvent.model.totalBalance = balance;

	 	 	return { reply: 'Intent.totalBalance', to: 'askAgainCard' };
	  })
	  .catch(err=>{
	  	console.log(err);
	  	var error = err.error.code;
	  	if(error == 100){
	  		//tuc invalid
			return { to: 'askCardId' };

	  	}else {
	  		//Server error
	  		return { reply: 'Intent.serverError', to: 'die' };
	  	}	  	

	  });

  });

	skill.onState('askCardId', (alexaEvent) => {
		return { reply: 'Intent.askCardId', to: 'entry' };

	});

	skill.onState('askAgainCard', (alexaEvent) => {

		if (alexaEvent.intent.name=== 'AMAZON.YesIntent') {
			return { reply: 'Intent.askAgainCardId', to: 'entry' };

		}else if (alexaEvent.intent.name=== 'AMAZON.NoIntent') {
			return { reply: 'Intent.exit', to: 'die' };
		}		

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