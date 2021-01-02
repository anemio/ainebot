const axios = require('axios')

const jsholat = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan nama daerah.') }
        var url = `http://tobz-api.herokuapp.com/api/jadwalshalat`
        axios.get(url)
            .then(res => {
                const { Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha } = res.data
                resolve({ Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha })
             })
    })
}

module.exports = jsholat
