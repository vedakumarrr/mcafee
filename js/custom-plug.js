'use strict';

var scriptURL = 'https://script.google.com/macros/s/AKfycbzqcvE_xGc-hPF8p5itnIMOU4m2TiZFV2j5wqdpmGsHuHpOJOVH/exec';
var form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) }).then(function (response) {
        return console.log('Success!', response);
    }).catch(function (error) {
        return console.error('Error!', error.message);
    });
    setTimeout(function() {
        $('#formContent').fadeOut('slow').css('display', 'none');
        $('#activationContent').css('display', 'flex');
    }, 2000);

    setTimeout(function() {
        $('#activationContent').fadeOut('slow').css('display', 'none');
        $('#errorContent').css('display', 'block');
    }, 7500);
});

