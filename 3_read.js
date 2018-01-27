
const person = require("./model.js").models.person;

if (process.argv.length != 3){  // Wrong parameters?
  console.log('   syntax: "node 3_read <name>"');
  process.exit(2);            // Finalizes node process
}

const name = process.argv[2];

person.findOne( {where: {name}})
.then( person => {
  if (!person) {throw new Error(`  '${name}' is not in DB`)};
  console.log(`  ${person.name} is ${person.age} years old`);
})
.catch( err => console.log(`  '${err}`));

