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
      for (let i = 0; i < body.data.length; i++) {
        $('.results').prepend(`<li><strong>Doctor: </strong>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</li><li>Address: ${body.data[i].practices[0].visit_address.street}</li><br>`);
        // $('.address').prepend(`<li>Address: ${body.data[i].practices[0].visit_address.street}</li>`)
      }
    });
  });
});
