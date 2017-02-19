app.controller('HomeCtrl', function MainCtrl ($scope, SpotifyService) {

    // Default search value
    $scope.currentSearch = "";
    $scope.artist = $scope.currentSearch;

    $scope.searchApi = function() {

        if ($scope.artist !== $scope.currentSearch) {

            $scope.currentSearch = $scope.artist;

            SpotifyService.searchTracks($scope.artist).then(function(result) {
                $scope.list = result.data.tracks;
            });
        }
    };
})
