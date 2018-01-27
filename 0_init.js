
const sequelize = require("./model.js");
const person = sequelize.models.person;

sequelize.sync()
.then(() => person.count())
.then((count) => {
  if (count===0) {
    return (
      person.bulkCreate([
        { name: 'Peter', age: 22},
        { name: 'Anna', age: 23},
        { name: 'John', age: 30}
      ])
      .then( c => console.log(`  DB created with ${c.length} elems`))
    )
  } else {
    console.log(`  DB exists & has ${count} elems`);
  }
})
.catch( err => console.log(`   ${err}`));

