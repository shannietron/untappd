  var venue = 1023019
  var requestURL = 'https://api.untappd.com/v4/venue/info/'+venue+'?client_id=8D7E71852BD399FD98C705B92F6918549EFE5EBE&client_secret=CC4DF18DBEAAD99654D1FC6BAB4F05706E43E9E5';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  console.print

  request.onload = function() {
    var untappdResponse = request.response;
    var list = document.getElementsByClassName("list")[0];

    untappdResponse.response.venue.media.items.forEach(function(Result) {
      console.log(Result.beer)
      console.log((Result.beer.beer_abv / Result.beer.beer_ibu)*10)
      score = ((Result.beer.beer_abv / Result.beer.beer_ibu)*10)
      var h5 = document.createElement("h5");
      var h3 = document.createElement("h3");
      var p = document.createElement("p");

      h5.innerHTML = Result.beer.beer_name;
      p.innerHTML =  "     ABV:" + Result.beer.beer_abv +"     IBU:" + Result.beer.beer_ibu + "       Style:"+ Result.beer.beer_style;
      h3.innerHTML = "myScore "+score.toPrecision(2) + "  publicScore  " + Result.beer.rating_score.toPrecision(2) +"/5" + " count  "+ Result.beer.rating_count;
      if(score < 1){
        h3.style.color = 'red';
        p.style.color = 'red';
        h5.style.color = 'red';
      }
      list.appendChild(h5);
      list.appendChild(p)
      list.appendChild(h3)
    });

    //console.log(openTemp['main']['temp']);
    // openTempK = openTempResponse['main']['temp'];
    // openTempC = openTempK - 273.15;
    // openTempC4 = openTempC.toPrecision(4);
    // openTempDescr = openTempResponse['weather'][0]['description'];
}