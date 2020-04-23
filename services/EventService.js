
function getRadioChannel(url) {
    fetch(url)
        .then(resp)
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