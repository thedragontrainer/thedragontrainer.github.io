var request = new XMLHttpRequest();
request.onreadystatechange = function() {
     if (request.readyState === 4) {
         if (request.status === 200) {
             document.body.className = 'ok';
             document.getElementById('ip_addr').innerHTML 
=(request.responseText);
         } else {
             document.body.className = 'error';
         }
     }
};
request.open("GET", 'http://www.icanhazip.com' , true);
request.send(null);
