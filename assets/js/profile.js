var app = angular.module("Myapp",["ngRoute"]);
app.config(function($routeProvider)
{
	$routeProvider
	
	.when("/",
	{
		templateUrl:"views/home.html"
	})
	.when("/home",
	{
		templateUrl:"views/home.html"
	})
	.when("/about",
	{
		templateUrl:"views/about.html"
	})
	.when("/education",
	{
		templateUrl:"views/education.html"
	})
	.when("/skill",
	{
		templateUrl:"views/skill.html"
	})
	.when("/contact",
	{
		templateUrl:"views/contact.html"
	})
	
});