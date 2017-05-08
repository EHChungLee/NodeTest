(function () {

    require('./section1.js');
    require('./login');

    console.log('testing Node and WebPack begins.');
    $('#sampleTest').text('working extra hard from webpack watch mode!!');
    $('#sampleTest2').text('watch mode on baby and we have require.');


})();