const connection = require('../config/connection');
const {Thought, User} = require('../models');

const {userData, thoughts} = require('./data')

console.time('seeding');



connection.once('open', async() => {

    await Thought.deleteMany({});
    await User.deleteMany({});

    await Thought.collection.insertMany(thoughts);

    const allThoughts = await Thought.find()

    const allThoughtIds = allThoughts.map(thought => thought._id)





    console.log(allThoughtIds)

    userData.forEach(user =>
        user.thoughts.push(allThoughtIds[Math.floor(Math.random()*allThoughtIds.length)])
    )

    console.log(userData)

    await User.collection.insertMany(userData)
    



    

    console.table(thoughts)
    console.table(userData, ['username', 'thoughts', '_id']);
    process.exit
})