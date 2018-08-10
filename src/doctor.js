export class DoctorSearch {
  findDoctor(name, issue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&name=${name}&query=${issue}&user_key=c087b8ec13a9104d3632f1cd7f7d17fa`;
      console.log(url);

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
