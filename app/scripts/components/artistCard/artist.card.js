app.component('artistCard', {
    templateUrl: 'app/scripts/components/artistCard/artistCard.html',
    controller: 'ArtistCardController',
    bindings: {
        data: '='
    }
})
.controller('ArtistCardController', function($scope) {

    //  this.$onInit = function() {
    //     console.log(this.data);
    //  };

})
