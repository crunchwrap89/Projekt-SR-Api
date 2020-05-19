function getData(input) {
    return fetch(input)
        .then(resp =>  {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .then(json => json)
}

function getSongList(input) {
    return fetch(input + dateString() + '&format=json')
        .then(resp =>  {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .then(json => json.songlist.song[1])
}

// function getNewsPrograms(input) {
//     return fetch(input)
//         .then(resp =>  {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText)
//             }
//             return resp.json()
//         })
//         .then(json => json.episodes)        
// }

export default {
    play(channel) {
        if(channel === 1) {
            return getData('http://api.sr.se/api/v2/channels/132?format=json')  
        }
        if(channel === 2) {
            return getData('http://api.sr.se/api/v2/channels/163?format=json')
        }
        if(channel === 3) {
            return getData('http://api.sr.se/api/v2/channels/164?format=json')
        }
        if(channel === 4) {
            return getData('http://api.sr.se/api/v2/channels/212?format=json') 
        }
    },

    showNewsPrograms() {
        return getData('http://api.sr.se/api/v2/news/episodes?format=json')
    },

    getDocumentaries() {
        return getData('http://api.sr.se/api/v2/episodes/index?programid=2519&format=json')
    },

    getDystopia() {
        return getData('http://api.sr.se/api/v2/episodes/index?programid=5188&format=json')
    },

    getEkonomiEkot() {
        return getData('http://api.sr.se/api/v2/episodes/index?programid=178&format=json')
    },

    getRadiosport() {
        return getData('http://api.sr.se/api/v2/episodes/index?programid=2895&format=json')
    },

    getFinska() {
        return getData('http://api.sr.se/api/v2/episodes/index?programid=185&format=json')
    },

    getKulturnytt() {
        return getData('http://api.sr.se/api/v2/episodes/index?programid=478&format=json')
    },

    getSamiskaNyheter() {
        return getData('http://api.sr.se/api/v2/episodes/index?programid=2327&format=json')
    }

}