app.component('artistCard', {
    templateUrl: 'app/scripts/components/artistCard/artistCard.html',
    controller: 'ArtistCardController',
    bindings: {
        data: '='
    }
})
.controller('ArtistCardController', function() {

    this.getImageStyle = function(track) {

        var thumb = track.album.images[1] ? track.album.images[1].url : 'images/no_image.jpg';

        var imageStyle = {
            "background-image": "url(" + thumb + ")"
        };

        return imageStyle;
    };
})
