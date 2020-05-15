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

    // playP1() {
    //     return getRadioChannel('http://api.sr.se/api/v2/channels/132?format=json')
    // },

    // playP2() {
    //     return getRadioChannel('http://api.sr.se/api/v2/channels/163?format=json')
    // },

    // playP3() {
    //     return getRadioChannel('http://api.sr.se/api/v2/channels/164?format=json')
    // },

    // playP4() {
    //     return getRadioChannel('http://api.sr.se/api/v2/channels/212?format=json')
    // },

    showNewsPrograms() {
        return getData('http://api.sr.se/api/v2/news/episodes?format=json')
    },

    getDocumentaries() {
        return getData('http://api.sr.se/api/v2/podfiles?programid=1646&format=json')
    }

}