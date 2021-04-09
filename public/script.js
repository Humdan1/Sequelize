
const router = express.Router();

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  // The `host` parameter is required for other databases
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database.sqlite'
});

/* app.route('/api', 'Dininghall')
    .fetch()

    const request = await fetch('/api')
    .then(blob => blob.json())
    .then(data => rtype.push(...data));
  const rtype = await request.json();
  function findMatches(wordToMatch, rtype) {
    return rtype.filter(rtype => {
      const regex = new RegExp(wordToMatch, "gi");
      return rtype.category.match(regex) || rtype.city.match(regex);
    });
  }
  
  function displayMatches(event) {
    const matchedArray = findMatches(event.target.value, rtype);
    const html = matchedArray.map(rtype => {
      const regex = new RegExp(event.target.value, "gi");
      const catHigh = rtype.category.replace(regex, `<span class='hl'>${event.target.value}</span>`);
      return `
        <li>
        <span class="name">${rtype.name},${catHigh}</span>
        
        <span class="statecode">${rtype.address_line_1},
        ${rtype.address_line_1},
        ${rtype.city}${rtype.zip}
        </span>
        
        </li>
        `;
    }).join('');
  
    suggestions.innerHTML = html;
  }*/


<!DOCTYPE HTML>
<html>
<head>  
<script>
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2", //"light1", "dark1", "dark2"
	title:{
		text: "Division of Products Sold in 2nd Quarter"             
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
</script>
</head>
<body>
<div id="chartContainer" style="height: 370px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
</body>
</html>
