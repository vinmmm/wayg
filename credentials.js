module.exports = {
            cookieSecret: 'your cookie secret goes here',
            gmail: {
                    user: 'your gmail username',
                    password: 'your gmail password',
 },

mongo: {
        development: {
            connectionString: 'mongodb://localhost:27017/wayg',
        },
        production: {
            connectionString: 'mongodb://localhost:27017/wayg',
} }

 

};

/*

mongo: {
        development: {
            connectionString: 'mongodb://pacman:superpacman@ds013881.mlab.com:13881/jovis',
        },
        production: {
            connectionString: 'mongodb://pacman:superpacman@ds013911.mlab.com:13911/jove',
} }
 



mongo: {
        development: {
            connectionString: 'mongodb://localhost:27017/jovis',
        },
        production: {
            connectionString: 'mongodb://localhost:27017/jove',
} }
*/