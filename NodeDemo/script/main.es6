    import {} from "./section1";
    import {login} from "./login";

    //require('./section1.js');     //Common js syntax -- to be replaced with ECMA script 6
    //require('./login');

    login('admin','radical');    
  
    //document.write("testing jshint bs");
    console.log('testing Node and WebPack begins.');
    $('#sampleTest').text('working extra hard from webpack watch mode!!');
    $('#sampleTest2').text('watch mode on and we have require. Sample code completed');
    //document.getElementById('sampleTest').textContent = 'No JQuery Run....';
    
    console.log('finality of the module has been reached. Testing watch mode')

