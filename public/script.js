
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