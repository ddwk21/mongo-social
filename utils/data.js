const userData = [
    {
        username: 'Steve21',
        thoughts: [],
        friends: null,
    
    },
    {
        username: 'Bill35',
        thoughts: [],
        friends: null,
    
    },
    {
        username: 'JoshJosh',
        thoughts: [],
        friends: null,
    
    },
    {
        username: 'Bolotie99',
        thoughts: [],
        friends: null,
    
    },
]

const thoughts = [
    
    {
        thoughtText: "I like bread",
    },
    {
        thoughtText: "I hate bread",
    },
    {
        thoughtText: "I have no opinion on bread",
    },
    {
        thoughtText: "I have no opinion on bread",
    },
    
]

const randomThought = () => {
    return(thoughts[Math.floor(Math.random()*thoughts.length)])
}

module.exports = {
    randomThought,
    userData,
    thoughts
}