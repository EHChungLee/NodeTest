	//import $ from "jquery";   //es6 - babel
	import {} from "./section1";
    import {login} from "./login";

	//jquery usage via webpack - webpack autochecks/autopath node_modules 
	//var $ = require('jquery');
	//note: we remmed out all jquery options here because we defined jquery globally for our webpack

	require('../css/main.scss');
	require('../css/app.less');

    //require('./section1.js');     //Common js syntax -- to be replaced with ECMA script 6
    //require('./login');

    login('admin','radical2');    
  
    //document.write("testing jshint bs");
    console.log('testing Node and WebPack begins.');
    $('#sampleTest').text('working extra hard from webpack watch mode!!');
    $('#sampleTest2').text('watch mode on and we have require. Sample code completed');
    
	//document.getElementById('sampleTest').textContent = 'No JQuery Run....';
    
    
	var img = document.createElement('img');
	img.style.height = "25%";
	img.style.width = "25%";
	img.src = require('../images/webpack_logo.png')
	document.getElementById('img_container').appendChild(img);
	
	$('#chungTest').text('Altered by jQuery in npm install');
	console.log('finality of the module has been reached. Testing watch mode')

//	import {$} from "../node_modules/jquery/dist/jquery.js";