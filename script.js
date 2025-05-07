function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function AutoReact() {
  const channelID = document.querySelector('input[placeholder="ChannelID"]').value;
  const messageID = document.querySelector('input[placeholder="MessageID"]').value;
  const token = document.querySelector('input[placeholder="Token"]').value;
  const SleepTime = document.querySelector('input[placeholder="Sleeptime MS"]').value;

  const headers = {
    'Authorization': token,
    'Content-Type': 'application/json'
  };


  var API_URL = `https://discord.com/api/v9/channels/${channelID}/messages/${messageID}/reactions/`;
  var reaction = [
    '%F0%9F%91%8D/%40me?location=Message%20Context%20Menu&type=0',
    '%E2%9D%A4%EF%B8%8F/%40me?location=Message%20Context%20Menu&type=0',
    '%F0%9F%94%A5/%40me?location=Message%20Reaction%20Picker&type=0',
    '%E2%9C%85/%40me?location=Message%20Reaction%20Picker&type=0',
    '1%EF%B8%8F%E2%83%A3/%40me?location=Message%20Context%20Menu&type=0',
    '%E2%AD%90/%40me?location=Message%20Reaction%20Picker&type=0',
    '%F0%9F%8E%9F%EF%B8%8F/%40me?location=Message%20Reaction%20Picker&type=0',
    '%F0%9F%91%8F/%40me?location=Message%20Reaction%20Picker&type=0',
    '%F0%9F%8F%86/%40me?location=Message%20Reaction%20Picker&type=0',
    '%F0%9F%8E%AE/%40me?location=Message%20Reaction%20Picker&type=0',
    '%F0%9F%9A%80/%40me?location=Message%20Reaction%20Picker&type=0',
    '%F0%9F%92%B0/%40me?location=Message%20Reaction%20Picker&type=0',
    '%F0%9F%92%80/%40me?location=Message%20Reaction%20Picker&type=0',
	'%F0%9F%94%A5/%40me?location=Message%20Reaction%20Picker&type=0',
	'%F0%9F%86%97/%40me?location=Message%20Reaction%20Picker&type=0',
	'%F0%9F%A4%93/%40me?location=Message%20Reaction%20Picker&type=0',
	'%F0%9F%A4%91/%40me?location=Message%20Reaction%20Picker&type=0',
	'%F0%9F%92%B8/%40me?location=Message%20Reaction%20Picker&type=0',
	'%F0%9F%A4%AC/%40me?location=Message%20Reaction%20Picker&type=0',
	'%F0%9F%96%95/%40me?location=Message%20Reaction%20Picker&type=0',
	'%F0%9F%A4%A1/%40me?location=Message%20Reaction%20Picker&type=0',
  ];

  for (var i = 0; i < reaction.length; i++) {
    var API_URL_MOD = API_URL + reaction[i];
    fetch(API_URL_MOD, {
      method: 'PUT',
      headers: headers
    })
      .catch(error => console.error(error));
	  
	console.log(`Sent reaction ${i}`);

    await sleep(Number(SleepTime));
  };
}

const toggleBtn = document.getElementById('toggleBtn');
let intervalId = null;

function Infinite_Typing() {
	console.log('Infinite Typing is running...');
	
	const channelID1 = document.querySelector('input[placeholder="ChannelID1"]').value;
	const token1 = document.querySelector('input[placeholder="Token1"]').value;
	
	var API_URL1 = `https://discord.com/api/v9/channels/${channelID1}/typing`;
	
	const headers = {
		'Authorization': token1,
		'Content-Type': 'application/json'
	};
	
	fetch(API_URL1, {
      method: 'POST',
      headers: headers
    }).catch(error => console.error(error));
}

toggleBtn.addEventListener('click', () => {
	if (toggleBtn.classList.contains('off')) {
		toggleBtn.classList.remove('off');
		toggleBtn.classList.add('on');
		toggleBtn.textContent = 'ON';

		intervalId = setInterval(Infinite_Typing, 8500);
	} else {
		console.log('Infinite Typing is OFF...')
		toggleBtn.classList.remove('on');
		toggleBtn.classList.add('off');
		toggleBtn.textContent = 'OFF';

	clearInterval(intervalId);
	}
});