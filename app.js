var play1fin = document.getElementById('score-0');
play1fin.textContent='0';
var play2fin = document.getElementById('score-1');
play2fin.textContent='0';
var play1temp = document.getElementById('current-0');
play1temp.textContent='0';
var play2temp = document.getElementById('current-1');
play2temp.textContent='0';

var activeplayer=0;
var roundscore0=0;	
var roundscore1=0;
var finalscore0=0;
var finalscore1=0;


document.querySelector('.btn-roll').addEventListener('click',roll);

function roll()
{
	if(activeplayer==0)
	{
		var dicescore = Math.floor(Math.random() * 6)+1;
		document.querySelector('.dice').src='dice-'+dicescore+'.png';
    	if(dicescore!=1)
		{
			roundscore0 += dicescore;
			play1temp.textContent=roundscore0;
		}
		if(dicescore==1)
		{
			roundscore0= 0;
			play1temp.textContent=roundscore0;
			activeplayer=1;
			document.querySelector('.player-0-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.add('active');
		}	
	}
	else if(activeplayer==1)
	{
	    dicescore = Math.floor(Math.random() * 6)+1;
		document.querySelector('.dice').src='dice-'+dicescore+'.png';
    	if(dicescore!=1)
		{
			roundscore1 += dicescore;
			play2temp.textContent=roundscore1;
		}
		if(dicescore==1)
		{
			roundscore1= 0;
			play2temp.textContent=roundscore1;
			activeplayer=0;
			document.querySelector('.player-1-panel').classList.remove('active');
			document.querySelector('.player-0-panel').classList.add('active');
		}
	}
}

document.querySelector('.btn-hold').addEventListener('click',hold);

function hold()
{
	
	if(activeplayer==0)
		{
			finalscore0+=roundscore0;
			play1fin.textContent=finalscore0;
			activeplayer=1;
			roundscore0=0;
			play1temp.textContent=0;
			if(finalscore0>=100)
			{
				alert('Player 1 wins !!!!');
				activeplayer=3;
			}
			document.querySelector('.player-0-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.add('active');
		}
	else if(activeplayer==1)
		{
			finalscore1+=roundscore1;
			play2fin.textContent=finalscore1;
			activeplayer=0;
			roundscore1=0;
			play2temp.textContent=0;
			if(finalscore1>=100)
			{
				alert('Player 2 wins !!!!');
				activeplayer=3;
			}
			document.querySelector('.player-1-panel').classList.remove('active');
			document.querySelector('.player-0-panel').classList.add('active');
		}
}





























