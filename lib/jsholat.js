const axios = require('axios')

const jsholat = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan nama daerah.') }
        var url = `https://mhankbarbars.herokuapp.com/api/jadwalshalat?daerah=${daerah}&apiKey=${apiKey}`
        axios.get(url)
            .then(res => {
                const { Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha } = res.data
                resolve({ Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha })
             })
    })
}

module.exports = jsholat
