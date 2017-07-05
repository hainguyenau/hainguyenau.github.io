$(document).ready(function(){

	// Calulate tax when calculate button is clicked
	$('#btnCalc').click(function(){
		var income =  document.getElementById("Income").value;
		var result;

		
		if ($('input[name=radio-choice-v-2]:checked').val()=="on"){
			result = Math.round(single(income)*100)/100;
		}
		else if ($('input[name=radio-choice-v-2]:checked').val()=="off"){
			result = Math.round(marriedJoint(income)*100)/100;
		}
		else if($('input[name=radio-choice-v-2]:checked').val()=="other"){
			result = Math.round(marriedSeparate(income)*100)/100;
		}
		result = '$'+ result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		document.getElementById('Result').innerHTML = "<br>Your Fereal Income Tax Is: " + "<b>"+result+"</b>";
		$.mobile.navigate( "#dialog", {role: "dialog"});
		
	})
})

function single(income) {
		if (income <=0)
			return 0;
		else if (income <= 9325)
			return income*0.1;
		else if (income < 37950)
			return 932.50 + (income - 9325)*0.15;
		else if (income < 91900)
			return 5226.25 + (income - 37950)*0.25;
		else if (income < 191650)
			return 18713.75 + (income-91900)*0.28;
		else if (income < 416700)
			return 46643.75 + (income-91900)*0.33;
		else if (income < 418400)
			return 120910.25 + (income-41670)*0.35;
		else if(income >= 418400)
			return 121505.25 + (income-418400)*0.396;
		else
			return 0;
	
}

function marriedJoint(income) {
		if (income <=0)
			return 0;
		else if (income <= 18650)
			return income*0.1;
		else if (income < 75900)
			return 1865 + (income - 18650)*0.15;
		else if (income < 153100)
			return 10452.50 + (income - 75900)*0.25;
		else if (income < 233350)
			return 29752.50 + (income-153100)*0.28;
		else if (income < 416700)
			return 52,222.50 + (income-233350)*0.33;
		else if (income < 470700)
			return 112728 + (income-41670)*0.35;
		else if(income >= 418400)
			return 131,628 + (income-470700)*0.396;
		else
			return 0;
	
}

function marriedSeparate(income) {
		if (income <=0)
			return 0;
		else if (income <= 9325)
			return income*0.1;
		else if (income < 37950)
			return 932.5 + (income - 9325)*0.15;
		else if (income < 76550)
			return 5226.25 + (income - 37950)*0.25;
		else if (income < 116675)
			return 14876.25 + (income-76550)*0.28;
		else if (income < 208350)
			return 26111.25 + (income-116675)*0.33;
		else if (income < 235350)
			return 56365 + (income-208350)*0.35;
		else if(income >= 235350)
			return 65815 + (income-235350)*0.396;
	
}