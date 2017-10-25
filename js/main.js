var addressApp = angular.module('addressApp', ['ngRoute'])

.config(function ($routeProvider) {
			$routeProvider
					.when('/', {
						templateUrl: 'templates/list.html',
						controller: 'listController',
						reloadOnSearch: false,
					})
					.when('/contact', {
						templateUrl: 'templates/contact.html',
						controller: 'contactController',
						reloadOnSearch: false,
					})
})


.controller('mainController', function ($scope){
	// var contact = new Contact({
	// 	first_name: "Jorge",
	// 	last_name: "Sampaio",
	// 	email: "info@asx.pt",
	// 	country: "pt"
	// });
	// console.debug(contact);
	var datos = localStorage.getItem("addressApp_data");
	if (datos != null) {
		$scope.contacts = [];
		var rawContacts = JSON.parse(datos);
		_(rawContacts).forEach(function (value) {
			$scope.contacts.push(new Contact(value));
		});

	} else {
		// If there is no data, add 4 dummy to start
		$scope.contacts = [
			new Contact({first_name: "Sofia", last_name: "Barradas Costa", email: "sofia@barradas.costa.com", country: "PT"}),
			new Contact({first_name: "Juan", last_name: "Pérez López", email: "juan@jorge.com", country: "ES"}),
			new Contact({first_name: "Anna", last_name: "Smith", email: "anna@smith.com.costa.com", country: "ES"}),
			new Contact({first_name: "Tom", last_name: "Rademaker", email: "tom@b.com", country: "ES"}),
		];
	}
	console.debug($scope.contacts);
})

/*
* list view
*/
.controller('listController', function($scope, $location) {
	/* Para juntar as classes. Dentro do "controller", "listController" .. 
	para quando se carrega o controlador ..
	para o javaScript possa fazer que document pegue o elemento 
	com a tag html ou seja a etiqueca html e que me recupere o 
	primeiro elemento encontrado e que a esse troque o nome da classe 
	e que ponha o nome de classe que quero, "listController" .. */
	document.getElementsByTagName("html")[0].className="listController";

	//control change view from animation
	$scope.goForm = function (_id) {
		$location.path("contact").search({id: _id});
	}
})

/*
* form view
*/
.controller('contactController', function($scope) {
	document.getElementsByTagName("html")[0].className="contactController";
});


