let index=0;
let attempt=0;
let score=0;
let wrong=0;
let questions=quiz.sort(function()
{
	return 0.5-Math.random();
});

$(function()
{
	//alert("ready");
	let totalTime=200;//200secs
	let min=0;
	let sec=0;
	let counter=0;
	let timer=setInterval(function(){
		counter++;
		min=Math.floor((totalTime-counter)/60);//cal min
		sec=totalTime-(min*60)-counter;
		
		$(".timerbox span").text(min + ":" + sec);
		
		if(counter==totalTime)
		{
			clearInterval(timer);
		}
		
		//console.log("min="+min);
		//console.log("sec="+sec);
	},1000);//1 sec interval
	
	printquestion(index);
	
});

function printquestion(i)
{
	//console.log(questions[0]);
	
	$(".questionbox").text(questions[i].question);
	$(".optionbox span").eq(0).text(questions[i].option[0]);
	$(".optionbox span").eq(1).text(questions[i].option[1]);
	$(".optionbox span").eq(2).text(questions[i].option[2]);
	$(".optionbox span").eq(3).text(questions[i].option[3]);
}

function checkAnswer(option)
{
	attempt++;
	
	let openClicked=$(option).data("opt");
	
	if(openClicked==questions[index].answer)
	{
		$(option).addClass("right");
		score++;
	}
	else
	{
		$(option).addClass("wrong");
		wrong++;
	}
	
	$(".scorebox span").text(score);
	
	$(".optionbox span").attr("onClick","");

}

function showNext()
{
	if(index>=(questions.length-1))
	{
		showResult();
		return;
	}
	
	index++;
	$(".optionbox span").removeClass();
	$(".optionbox span").attr("onClick","checkAnswer(this)");
	
	printquestion(index);
}

function showResult()
{
	$("questionScreen").hide();
	$("resultscreen").show();
}
