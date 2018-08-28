'use strict';

const accessories = {
    template: `
    <button ng-click="$ctrl.getAccessories();">Get Accessory</button>
    <form ng-submit="$ctrl.postAccessory($ctrl.newAccessory);">
        <input type="text" ng-model="$ctrl.newAccessory.item" placeholder="Item">
        <input type="text" ng-model="$ctrl.newAccessory.color" placeholder="Color">
        <input type="text" ng-model="$ctrl.newAccessory.price" placeholder="Price">
        <button>Add Accessory</button>
    </form>
    <p ng-repeat="accessory in $ctrl.accessoryList track by $index">{{ accessory }}
        <button ng-click="$ctrl.putAccessory($index, $ctrl.newAccessory);">Update</button>
        <button ng-click="$ctrl.deleteAccessory($index);">X</button>
    </p>
  `,
    controller: function ($http) {
        const vm = this;

        //Create
        vm.postAccessory = (newAccessory) => {
            //request
            $http({
                url: '/api/shop/accessories', //more defined path
                method: 'POST',
                data: newAccessory //object created from inputs
            //response    
            }).then((response) => {
                vm.accessoryList = response.data; //store response data
            });
        }

        //Read
        vm.getAccessories = () => {
            //request
            $http({
                url: '/api/shop/accessories',
                method: 'GET'
            //response
            }).then((response) => {
                vm.accessoryList = response.data;
            });
        }

        //Update
        vm.putAccessory = (index, newAccessory) => {
            //request
            $http({
                url: '/api/shop/accessories/' + index,
                method: 'PUT',
                data: newAccessory
            //response
            }).then((response) => {
                vm.accessoryList = response.data;
            });
        }

        //Delete
        vm.deleteAccessory = (index) => {
            //request
            $http({
                url: '/api/shop/accessories/' + index,
                method: 'DELETE'
            //response
            }).then((response) => {
                vm.accessoryList = response.data;
            });
        }
    }
}

angular.module("App").component("accessories", accessories);