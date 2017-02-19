angular.module('spotifyApp').run(['$templateCache', function($templateCache) {$templateCache.put('index.html','<!DOCTYPE html>\n<html ng-app="spotifyApp">\n<head>\n    <meta charset="UTF-8">\n    <title>Angular/Spotify API</title>\n    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">\n    <link rel="stylesheet" href="css/main.css">\n    <script src="js/all.js" type="text/javascript"></script>\n    <script src="js/templates.js" type="text/javascript"></script>\n</head>\n<body>\n    <div ui-view></div>\n</body>\n</html>\n');
$templateCache.put('views/home.html','<div class="container">\n\n    <div class="row">\n\n        <div class="col-md-4 col-md-offset-4 text-center">\n            <div class="form-wrapper">\n                <h1>Spotify Search</h1>\n                <form ng-submit="searchApi()">\n                    <input type="text" name="search"\n                            autocomplete="off"\n                            class="form-control"\n                            placeholder="Type your favourite artist. E.g.: Adele"\n                            ng-model="artist">\n                    <button type="submit" class="btn btn-default btn-block" ng-disabled="!artist">Search</button>\n                </form>\n            </div>\n        </div>\n\n        <div class="col-md-12">\n            <!-- <div ng-if="list.artists.total > 0"> -->\n                <artist-card data="list"></artist-card>\n            <!-- </div> -->\n            <!-- <div ng-if="list.artists.total == 0">\n                <div class="alert alert-warning" role="alert">Hmmm...we couldn\'t find any results :(</div>\n            </div> -->\n        </div>\n\n    </div>\n</div>\n');
$templateCache.put('scripts/components/artistCard/artistCard.html','<div class="artist-cards">\n\n    <div class="row">\n\n        <div class="col-md-12 total-results" ng-if="$ctrl.data.total">\n            Total results: <span>{{ $ctrl.data.total }}</span>\n        </div>\n\n        <a ng-repeat="item in $ctrl.data.items" class="col-md-3 result-item"\n                ng-href="{{ item.external_urls.spotify }}">\n\n            <div class="result-item-inner" ng-style="$ctrl.getImageStyle(item)">\n\n                <div class="result-item-info">\n                    <ul>\n                        <li><h3>{{ item.name }}</h3></li>\n                        <li ng-if="item.album.name"><span>Album name: </span><span> {{ item.album.name }}</span></li>\n                        <li ng-if="item.track_number"><span>Track number: </span><span> {{ item.track_number }}</span></li>\n                        <li ng-if="item.popularity"><span>Popularity: </span>{{ item.popularity }}</li>\n                        <li ng-if="item.followers.total"><span>Followers: </span>{{ item.followers.total }}</li>\n                    </ul>\n                </div>\n            </div>\n        </a>\n    </div>\n\n</div>\n');}]);