const allowdOrigins = require('./allowedOrigins')

const corOptions = {
    origin: (origin, callback) => {
        if(allowdOrigins.indexOf(origin) !== -1 ||  !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSucessStatus: 200
}

module.exports = corOptions;