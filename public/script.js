async function dataHandler() {
	// Retrieve meals and macros endpoints
  
	const endpoint2 = '/api/meals';
	const request2 = await fetch(endpoint2);
	const meals = await request2.json();
  
	const endpoint3 = '/api/macros';
	const request3 = await fetch(endpoint3);
	const macros = await request3.json();
  
	console.log(meals);
	console.log(macros);
  
	// This function extracts the datapoints we need from the data collected above
	function getData(mealss, macross, macro) {
	  data = [];
	  for (i = 0; i < 46; i += 1) {
		data.push({ label: mealss[i].meal_name, y: eval(`macross[i].${macro}`)});
	  }
	  return data;
	}
  
	// Create the chart variable
	const chart = new CanvasJS.Chart('chartContainer', {
	  animationEnabled: true,
	  title: {
		text: 'Meal Macros'
	  },
	  axisX: {
		labelFontSize: 10,
		interval: 1
	  },
	  axisY: {
		labelFontSize: 10
	  },
	  toolTip: {
		shared: true
	  },
	  legend: {
		cursor: 'pointer',
		itemclick: toggleDataSeries
	  },
  
	  dataPointWidth: 10,
  
	  data: [{
		type: 'stackedBar',
		name: 'Calories',
		showInLegend: 'true',
		dataPoints: getData(meals, macros, 'calories')
	  },
	  {
		type: 'stackedBar',
		name: 'Carbs',
		showInLegend: 'true',
		dataPoints: getData(meals, macros, 'carbs')
	  },
	  {
		type: 'stackedBar',
		name: 'Cholesterol',
		showInLegend: 'true',
		dataPoints: getData(meals, macros, 'cholesterol')
	  },
	  {
		type: 'stackedBar',
		name: 'Fat',
		showInLegend: 'true',
		dataPoints: getData(meals, macros, 'fat')
	  },
	  {
		type: 'stackedBar',
		name: 'Protein',
		showInLegend: 'true',
		dataPoints: getData(meals, macros, 'protein')
	  },
	  {
		type: 'stackedBar',
		name: 'Sodium',
		showInLegend: 'true',
		dataPoints: getData(meals, macros, 'sodium')
	  }
	  ]
  
	});
  
	chart.render();
  
	// Render the chart
	function toggleDataSeries(e) {
	  if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	  } else {
		e.dataSeries.visible = true;
	  }
	  chart.render();
	}
  }
  
  // Load our page
  dataHandler();