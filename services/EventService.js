

function getRadioChannel(input) {
    return fetch(input)
        .then(resp =>  {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .then(json => json.channel.liveaudio.url)
}

function getSongList(input) {
    return fetch(input + dateString())
        .then(resp =>  {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .then(json => json.songlist)
}

function dateString() {
    let y = getFullYear();
    let m = getMonth();
    let d = getDate();
    return y + "-" + m + "-" + d;
}

export default {
    playP1() {
        return getRadioChannel('http://api.sr.se/api/v2/channels/132?format=json')
    },

    playP2() {
        return getRadioChannel('http://api.sr.se/api/v2/channels/163?format=json')
    },

    playP3() {
        return getRadioChannel('http://api.sr.se/api/v2/channels/164?format=json')
    },

    playP4() {
        return getRadioChannel('http://api.sr.se/api/v2/channels/212?format=json')
    },

    songListP1() {

    },

    songListP2() {

    },

    songListP3() {

    },

    songListP4() {

    }

}