import React, {Component} from 'react';

class SpotifyApp extends Component {
    render() {

        // const APIController = (function() {
        //     const clientId = '';
        //     const clientSecret = '';

        //     const _getToken = async () => {
        //         const result = await fetch('https://accounts.spotify.com/api/token', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type' : 'application/x-www-form-urlencoded',
        //                 'Authorization' : 'Basic' + btoa(clientId + ':' + clientSecret)
        //             },
        //             body : 'grant_type=client_credentials'
        //         });

        //         const data = await result.json();
        //         return data.access_token;

        //     }
        // })();

        const CLIENT_ID = "6cb8ff42889441528e64ed9ed03aae2e"
        const REDIRECT_URI = "http://localhost:3000/spotify"
        const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
        const RESPONSE_TYPE = "token"

        return(
            <div>
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>

            </div>
        )
    }

}

export default SpotifyApp;