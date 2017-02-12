app.controller('HomeCtrl', function MainCtrl ($scope, SpotifyService) {

    $scope.searchApi = function() {
        SpotifyService.searchByArtist($scope.artist).then(function(result) {
            $scope.list = result;
        });
    };
})
