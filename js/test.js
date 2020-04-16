
    fetch("http://api.sr.se/api/v2/programs?format=json")
      .then(response => response.json())
      .then(json => console.log(json))
 
      