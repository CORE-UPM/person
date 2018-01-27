
const person = require("./model.js").models.person;

person.findAll()
.then( people => 
  people.forEach( p => console.log(`  ${p.name} is ${p.age} years old`))
)
.catch( err => console.log(`   ${err}`));

