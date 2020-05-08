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
    return fetch(input + dateString() + '&format=json')
        .then(resp =>  {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .then(json => json.songlist.song[1])
}

function dateString() {
    let y = getFullYear();
    let m = getMonth();
    let d = getDate();
    return y + "-" + m + "-" + d;
}

function getNewsPrograms(input) {
    return fetch(input)
        .then(resp =>  {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .then(json => json.episodes)
        
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
        return getSongList('http://api.sr.se/api/v2/playlists/getplaylistbychannelid?id=132&')
    },

    songListP2() {
        return getSongList('http://api.sr.se/api/v2/playlists/getplaylistbychannelid?id=163&')
    },

    songListP3() {
        return getSongList('http://api.sr.se/api/v2/playlists/getplaylistbychannelid?id=164&')
    },

    songListP4() {
        return getSongList('http://api.sr.se/api/v2/playlists/getplaylistbychannelid?id=212&')
    },

    showNewsPrograms() {
        return getNewsPrograms('http://api.sr.se/api/v2/news/episodes?format=json')
    }

}