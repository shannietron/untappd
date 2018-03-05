  var venue = 1023019
  var requestURL = 'https://api.untappd.com/v4/venue/info/'+venue+'?client_id=8D7E71852BD399FD98C705B92F6918549EFE5EBE&client_secret=CC4DF18DBEAAD99654D1FC6BAB4F05706E43E9E5';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  console.print



  request.onload = function() {
    changeVenue()
}

function changeVenue(){
    var venueBox = document.getElementById("venues");
    venue = venueBox.options[venueBox.selectedIndex].value;
    console.log(venue)

    requestURL = 'https://api.untappd.com/v4/venue/info/'+venue+'?client_id=8D7E71852BD399FD98C705B92F6918549EFE5EBE&client_secret=CC4DF18DBEAAD99654D1FC6BAB4F05706E43E9E5';
    request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    console.log("done sending")

    request.onload = function(e) {
    untappdResponse = request.response;
    console.log(untappdResponse);
    var list = document.getElementsByClassName("list")[0];
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    } 
    var h2 = document.createElement("h2");

    h2.innerHTML = untappdResponse.response.venue.venue_name;
    list.appendChild(h2);

    untappdResponse.response.venue.media.items.forEach(function(Result) {
      score = ((Result.beer.beer_abv / Result.beer.beer_ibu)*10)
      var h5 = document.createElement("h5");
      var h3 = document.createElement("h3");
      var p = document.createElement("p");
      var img = document.createElement("img")

      h5.innerHTML = Result.beer.beer_name;
      p.innerHTML =  "     ABV:" + Result.beer.beer_abv +"     IBU:" + Result.beer.beer_ibu + "       Style:"+ Result.beer.beer_style;
      h3.innerHTML = "myScore "+score.toPrecision(2) + "  publicScore  " + Result.beer.rating_score.toPrecision(2) +"/5" + " count  "+ Result.beer.rating_count;
      img.src = Result.beer.beer_label;
      img.width = 100;
      
      if(score < 1){
        h3.style.color = 'red';
        p.style.color = 'red';
        h5.style.color = 'red';
      }
      list.appendChild(h5);
      list.appendChild(p)
      list.appendChild(h3)
      list.appendChild(img)
    });

}
}