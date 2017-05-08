(function () {

    require('./section1.js');
    require('./login');
    //document.write("testing jshint bs");
    console.log('testing Node and WebPack begins.');
    $('#sampleTest').text('working extra hard from webpack watch mode!!');
    $('#sampleTest2').text('watch mode onand we have require. Sample code completed');

    
})();