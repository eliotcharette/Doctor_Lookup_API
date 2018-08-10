import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorSearch } from './doctor.js';

$(document).ready(function() {
  $('#search').click(function() {
    let name = $('#name').val();
    let issue = $('#issue').val();

    let find = new DoctorSearch();
    let promise = find.findDoctor(name, issue);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      for (let i = 0; i < body.bikes.length; i++) {
         $('.title').append(`<li>Stolen bike: ${body.bikes[i].title}</li>`);
         if ( `${body.bikes[i].large_img}` != "null") {
           $('.title').append(`<img src ='${body.bikes[i].large_img}'/>`);

         }
      }
      });
  });
});
