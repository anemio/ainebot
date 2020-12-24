const needle = require('needle')

const igStalk = (user) => {
    return new Promise((resolve, reject) => {
        if (typeof user === 'undefined') { reject('masukan username') }
        var url = `https://mhankbarbars.herokuapp.com/api/stalk?username=${user}&${args[1]}&apiKey=${apiKey}`
        needle(url, async (err, resp, body) => {
            try {
                if (body.status === false) { reject(`maaf username *${user}* tidak ditemukan.`) }
                    resolve(body)
            } catch (err) {
                reject('sepertinya error.')
            }
        })
    })
}

module.exports = igStalk
