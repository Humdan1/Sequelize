
/*async function dataHandler() {
  const endpoint = '/api/meals';
  console.log(endpoint);
  const request = await fetch(endpoint);
  const meals = await request.json();
  return meals;

}

// This function loads the dining halls into the table


// Once the request is successfully retrieved, pass the data into our table function
dataHandler().then(meals => {
  console.log(meals);

 // for (i = 0; i < dininghalls.data.length; i += 1) {
   // loadTableData(dininghalls.data[i]);
//  }
})*/

window.onload = function () {



  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
    console.log(getRandomInt(3));
    // expected output: 0, 1 or 2
    
    //console.log(getRandomInt(1));
    // expected output: 0
    
    //console.log(Math.random());
    // expected output: a number from 0 to <1
  

const chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2", //"light1", "dark1", "dark2"
	title:{
		text: "Meals and their Macros"             
	},
	axisY:{
		interval: 10,
		suffix: "%"
	},
	toolTip:{
		shared: true
	},
	data:[{
		type: "stackedBar100",
		toolTipContent: "{label}<br><b>{name}:</b> {y} (#percent%)",
		showInLegend: true, 
		name: "April",
		dataPoints: [
			{ y: 600, label: "Water Filter" },
			{ y: 400, label: "Modern Chair" },
			{ y: 120, label: "VOIP Phone" },
			{ y: 250, label: "Microwave" },
			{ y: 120, label: "Water Filter" },
			{ y: 374, label: "Expresso Machine" },
			{ y: 350, label: "Lobby Chair" }
		]
		},
		{
			type: "stackedBar100",
			toolTipContent: "<b>{name}:</b> {y} (#percent%)",
			showInLegend: true, 
			name: "May",
			dataPoints: [
				{ y: 400, label: "Water Filter" },
				{ y: 500, label: "Modern Chair" },
				{ y: 220, label: "VOIP Phone" },
				{ y: 350, label: "Microwave" },
				{ y: 220, label: "Water Filter" },
				{ y: 474, label: "Expresso Machine" },
				{ y: 450, label: "Lobby Chair" }
			]
		}, 
		{
			type: "stackedBar100",
			toolTipContent: "<b>{name}:</b> {y} (#percent%)",
			showInLegend: true, 
			name: "June",
			dataPoints: [
				{ y: 300, label: "Water Filter" },
				{ y: 610, label: "Modern Chair" },
				{ y: 215, label: "VOIP Phone" },
				{ y: 221, label: "Microwave" },
				{ y: 75, label: "Water Filter" },
				{ y: 310, label: "Expresso Machine" },
				{ y: 340, label: "Lobby Chair" }
			]
	}]
});
chart.render();
}
