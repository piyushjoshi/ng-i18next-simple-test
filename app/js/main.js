function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

angular.module('jm.i18next').config(['$i18nextProvider', function ($i18nextProvider) {
    $i18nextProvider.options = {
        lng: getParameterByName('lang'),
        useCookie: false,
        useLocalStorage: false,
        fallbackLng: 'dev',
        resGetPath: '../locales/__lng__/__ns__.json',
        defaultLoadingValue: '' // ng-i18next option, *NOT* directly supported by i18next
    };
}]);


angular.module('myApp',['jm.i18next'])
	.controller('testI18nCtrl', function testI18nCtrl($scope){
		$scope.message = '';
});

