

function getRadioChannel() {
    return fetch('http://api.sr.se/api/v2/channels/132?format=json')
        .then(resp =>  {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
<<<<<<< HEAD
        .then(json => console.log(json.liveaudio[2]))
=======
        .then(json => json.channel.liveaudio.url)
>>>>>>> 02c0b4a6bf9c2b3ff55034c15999ce2a81751ce3
}


export default {
    playP1() {
        return getRadioChannel('http://api.sr.se/api/v2/channels/132?format=json')
    },

    playP2() {
        return getRadioChannel('http://api.sr.se/api/v2/channels/162?format=json')
    },

    playP3() {
        return getRadioChannel('http://api.sr.se/api/v2/channels/164?format=json')
    },

    playP4() {
        return getRadioChannel('http://api.sr.se/api/v2/channels/212?format=json')
    }

}