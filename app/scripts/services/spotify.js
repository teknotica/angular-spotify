app.factory('SpotifyService', function ($http) {
    return {
        searchByArtist: function(key) {
            return $http.get('https://api.spotify.com/v1/search?q=' + encodeURIComponent(key) + '&type=artist');
        }
    }
})
