import $ from 'jquery';

$.getJSON('http://apis.is/concerts').then(function(serverRes){
console.log(serverRes);

  var htmlTemplate = createArticlePageTemplate( serverRes.results, "Concerts" )
  appContainerEl.innerHTML = htmlTemplate

})

$.getJSON('http://apis.is/rides/samferda-drivers/').then(function(serverRes){
  console.log(serverRes);

  var htmlTemplate = createArticlePageTemplate( serverRes.results, "Carpools" )
  appContainerEl.innerHTML = htmlTemplate



})

$.getJSON('http://apis.is/flight?language=en&type=departures').then(function(serverRes){
  console.log(serverRes);

  var htmlTemplate = createArticlePageTemplate( serverRes.results, "Flights" )
  appContainerEl.innerHTML = htmlTemplate


})

$.getJSON('http://apis.is/flight?language=en&type=arrivals').then(function(serverRes){
  console.log(serverRes);

  var htmlTemplate = createArticlePageTemplate( serverRes.results, "Technology" )
  appContainerEl.innerHTML = htmlTemplate


})
