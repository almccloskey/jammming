const accessToken = '';

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken
        } else {    
            window.location.href
        }
    }
};

export default Spotify;