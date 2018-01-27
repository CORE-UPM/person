
const person = require("./model.js").models.person;

if (process.argv.length != 4){  // Wrong parameters?
  console.log('   syntax: "node 4_update <name> <age>"');
  process.exit(2);            // Finalizes node process
}

const name = process.argv[2], age = process.argv[3];

person.update( {age}, {where: {name}})
.then( n => {
  if (n[0]!==0) { console.log(`  ${name} updated to ${age}`) }
  else { throw new Error(`  ${name} not in DB`) };
})
.catch( err => console.log(`  ${err}`));

