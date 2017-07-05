// Federal percents
var percent1 = 0.1,
percent2 = 0.15,
percent3 = 0.25,
percent4 = 0.28,
percent5 = 0.33,
percent6 = 0.35,
percent7 = 0.396;

// Federal Single brackets
var fedSing1 = 9325,
fedSing2 = 37950,
fedSing3 = 91900,
fedSing4 = 191650,
fedSing5 = 416700,
fedSing6 = 418400;

// Federal Married Jointly brackets
var fedMJ1 = 18650,
fedMJ2 = 75900,
fedMJ3 = 153100,
fedMJ4 = 233350,
fedMJ5 = 416700,
fedMJ6 = 470700;

// Federal Married Separately brackets
var fedMS1 = 9325,
fedMS2 = 37950,
fedMS3 = 76550,
fedMS4 = 116675,
fedMS5 = 208350,
fedMS6 = 235350;

// State percents
var p1 = 0.01,
p2 = 0.02,
p3 = 0.04,
p4 = 0.06,
p5 = 0.08,
p6 = 0.093,
p7 = 0.103,
p8 = 0.113,
p9 = 0.123,
p10 = 0.133;

// State single brackets
var stateSing1 = 7850,
stateSing2 = 18610,
stateSing3 = 29372,
stateSing4 = 40773,
stateSing5 = 51530,
stateSing6 = 263222,
stateSing7 = 315866,
stateSing8 = 526443,
stateSing9 = 1000000;

// State married jointly brackets
var stateMJ1 = 15700,
stateMJ2 = 37220,
stateMJ3 = 58744,
stateMJ4 = 81546,
stateMJ5 = 103060,
stateMJ6 = 526444,
stateMJ7 = 631732,
stateMJ8 = 1000000,
stateMJ9 = 1052886;

$(document).ready(function(){

	// Calulate tax when calculate button is clicked
	$('#btnCalc').click(function(){
		var income =  document.getElementById("Income").value - document.getElementById("Deduct").value;
		var fedResult, stateResult;

		
		if ($('input[name=radio-choice-v-2]:checked').val()=="on"){
			fedResult = Math.round(calculateFedTax(income, fedSing1, fedSing2, fedSing3, fedSing4, fedSing5, fedSing6)*100)/100;
			stateResult = Math.round(calculateStateTax(income, stateSing1, stateSing2, stateSing3, stateSing4, stateSing5, stateSing6, stateSing7, stateSing8, stateSing9)*100)/100;
		}
		else if ($('input[name=radio-choice-v-2]:checked').val()=="off"){
			fedResult = Math.round(calculateFedTax(income, fedMJ1, fedMJ2, fedMJ3, fedMJ4, fedMJ5, fedMJ6)*100)/100;
			stateResult = Math.round(calculateStateTax(income, stateMJ1, stateMJ2, stateMJ3, stateMJ4, stateMJ5, stateMJ6, stateMJ7, stateMJ8, stateMJ9)*100)/100;
		}
		else if($('input[name=radio-choice-v-2]:checked').val()=="other"){
			fedResult = Math.round(calculateFedTax(income, fedMS1, fedMS2, fedMS3, fedMS4, fedMS5, fedMS6)*100)/100;
			stateResult = Math.round(calculateStateTax(income, stateSing1, stateSing2, stateSing3, stateSing4, stateSing5, stateSing6, stateSing7, stateSing8, stateSing9)*100)/100;
			
		}
		fedResult = '$'+ fedResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		stateResult = '$'+ stateResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		document.getElementById('Result').innerHTML = "<br>Fereal Income Tax: " + "<b>"+fedResult+"</b><br>State Tax: "+ "<b>"+stateResult+"</b>";
		$.mobile.navigate( "#dialog", {role: "dialog"});
		
	})
})

// calculate federal tax
function calculateFedTax(income, limit1, limit2, limit3, limit4, limit5, limit6) {
		if (income <=0)
			return 0;
		else if (income <= limit1)
			return income*percent1;
		else if (income <= limit2)
			return limit1*percent1 + (income-limit1)*percent2;
		else if (income <= limit3)	
			return limit1*percent1 + (limit2-limit1)*percent2 + (income-limit2)*percent3;
		else if (income <= limit4)
			return limit1*percent1 + (limit2-limit1)*percent2 + (limit3-limit2)*percent3 + (income-limit3)*percent4;
		else if (income <= limit5)
			return limit1*percent1 + (limit2-limit1)*percent2 + (limit3-limit2)*percent3 + (limit4-limit3)*percent4 + (income-limit4)*percent5;
		else if (income <= limit6)
			return limit1*percent1 + (limit2-limit1)*percent2 + (limit3-limit2)*percent3 + (limit4-limit3)*percent4 + (limit5-limit4)*percent5 + (income-limit5)*percent6;
		else
			return limit1*percent1 + (limit2-limit1)*percent2 + (limit3-limit2)*percent3 + (limit4-limit3)*percent4 + (limit5-limit4)*percent5 + (limit6-limit5)*percent6 + (income-limit6)*percent7;
}

// calculate state tax
function calculateStateTax(income, limit1, limit2, limit3, limit4, limit5, limit6, limit7, limit8, limit9) {
		if (income <=0)
			return 0;
		else if (income <= limit1)
			return income*p1;
		else if (income <= limit2)
			return limit1*percent1 + (income-limit1)*p2;
		else if (income <= limit3)	
			return limit1*percent1 + (limit2-limit1)*p2 + (income-limit2)*p3;
		else if (income <= limit4)
			return limit1*percent1 + (limit2-limit1)*p2 + (limit3-limit2)*p3 + (income-limit3)*p4;
		else if (income <= limit5)
			return limit1*percent1 + (limit2-limit1)*p2 + (limit3-limit2)*p3 + (limit4-limit3)*p4 + (income-limit4)*p5;
		else if (income <= limit6)
			return limit1*percent1 + (limit2-limit1)*p2 + (limit3-limit2)*p3 + (limit4-limit3)*p4 + (limit5-limit4)*p5 + (income-limit5)*p6;
		else if (income <= limit7)
			return limit1*percent1 + (limit2-limit1)*p2 + (limit3-limit2)*p3 + (limit4-limit3)*p4 + (limit5-limit4)*p5 + (limit6-limit5)*p6 + (income-limit6)*p7;
		else if (income <= limit8)
			return limit1*percent1 + (limit2-limit1)*p2 + (limit3-limit2)*p3 + (limit4-limit3)*p4 + (limit5-limit4)*p5 + (limit6-limit5)*p6 + (limit7-limit6)*p7 + (income-limit7)*p8;
		else if (income <= limit9)
			return limit1*percent1 + (limit2-limit1)*p2 + (limit3-limit2)*p3 + (limit4-limit3)*p4 + (limit5-limit4)*p5 + (limit6-limit5)*p6 + (limit7-limit6)*p7 + (limit8-limit7)*p8 + (income-limit8)*p9;
		else
			return limit1*percent1 + (limit2-limit1)*p2 + (limit3-limit2)*p3 + (limit4-limit3)*p4 + (limit5-limit4)*p5 + (limit6-limit5)*p6 + (limit7-limit6)*p7 + (limit8-limit7)*p8 + (limit9-limit8)*p9 + (income-limit9)*p10;
}