angular.module('public')
.controller('MapController', MapController);

function MapController() {
  var vm = this;
  vm.toggleBounce = function() {
    if (this.getAnimation() != null) {
      this.setAnimation(null);
    } else {
      this.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}
