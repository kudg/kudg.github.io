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

function home()
{
	//ajax start
		if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("pagedata").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","views/index.html",true);
        xmlhttp.send();
	//ajax end
}