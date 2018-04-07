import $ from 'jquery';
import './main.css';

$(function () {
    $('form').addEventListener('submit', function (e) {
        console.log('asdf');
        e.preventDefault();
        return false;
    });
});
