
const person = require("./model.js").models.person;

if (process.argv.length != 3){  // Wrong parameters?
  console.log('   syntax: "node 5_delete <name>"');
  process.exit(2);            // Finalizes node process
}

const name = process.argv[2];

person.destroy( {where: {name} })
.then( n => {
  if (n!==0) { 
    console.log(`  ${name} deleted from DB`) 
  }
  else { 
    throw new Error(`  ${name} not in DB`) 
  };
})
.catch( err => console.log(`  ${err}`));

