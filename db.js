const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` 
    // if your database has auth enabled
  await mongoose.connect("mongosh://27017/test");
}

//# EXAMPLES

// REference a Schema
const kittySchema = new mongoose.Schema({
    name: String
});

// Model = a class with which we construct documents.
// Compile kittySchema into a model
const Kitten = mongoose.model('Kitten', kittySchema);

// Create an kitten document === instance of kitten
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'  == kitten named Silence

// Create a method of kitten
kittySchema.methods.speak = function speak() {
    const greeting = this.name
        ? 'Meow name is ' + this.name
        : 'I don\'t have a name';
    console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);






/* 
    connectToDb opens a connection to the database
    getDb gets the connection from the database
*/
module.exports = {
    connectToDb: () => { },
    getDb: () => {

    }
}