var http = require('http');
var url = 'https://api.openweathermap.org/data/2.5/weather?q=Lagos,ng&appid=43745433dcac651824ad35364b01a2e9&units=metric';
port=process.env.PORT || 8081;
var server = http.createServer(function(request,response){

  var request = require('request');
  request(url,function(err,res,body){
    var data = JSON.parse(body);
      response.write("<html><body><div id ='container'>");
      response.write("<h1>"+ 'City Name - : ' + data.city['name'] + '<br>' + "</h1>");
      response.write("<h2>"+ 'Temperature - : ' + data.list[0].main.temp + '<br>' + "</h2>");
      response.write("<h2>"+ 'Wind Speed - : ' + data.list[0].wind.speed + '<br>' + "</h2>");

      response.write("</div></body></html>");
      response.end();
  });




}).listen(port);