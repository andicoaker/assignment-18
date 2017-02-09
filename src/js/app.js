// import $ from 'jquery';

// var forEach = function(arr, cb){
// 	for(var i = 0; i < arr.length; i++){
// 		cb(arr[i], i, arr)
// 	}
// }
//
// function controllerRouter (){
//   var currentRoute = window.location.hash.slice(1)
//
//   if (currentRoute === 'concerts') {
//     $.getJSON('http://apis.is/concerts').then(function(serverRes){
//     console.log(serverRes);
//
//       var htmlTemplate = createIcelandPageTemplate( serverRes.results, "Concerts" )
//       appContainerEl.innerHTML = htmlTemplate
//
//     })
//     return
//   }

  // if (currentRoute === 'carpools') {
  //   $.getJSON('http://apis.is/rides/samferda-drivers/').then(function(serverRes){
  //     console.log(serverRes);
  //
  //     var htmlTemplate = createIcelandPageTemplate( serverRes.results, "Carpools" )
  //     appContainerEl.innerHTML = htmlTemplate
  //
  //   })
  //   return
  // }
  //
  // if (currentRoute === 'flights') {
  //   $.getJSON('http://apis.is/flight?language=en&type=departures').then(function(serverRes){
  //     console.log(serverRes);
  //
  //     var htmlTemplate = createIcelandPageTemplate( serverRes.results, "Flights" )
//       appContainerEl.innerHTML = htmlTemplate
//
//     })
//     return
//   }
//
//   if (true) {
//     $.getJSON('http://apis.is/flight?language=en&type=arrivals').then(function(serverRes){
//       console.log(serverRes);
//
//       var htmlTemplate = createIcelandPageTemplate( serverRes.results, "Flights" )
//       appContainerEl.innerHTML = htmlTemplate
//
//     })
//     return
//   }
// }

var pageContentObj = {
  home:

  concerts:

  carpools:

  flights:

}


var tabsContainerEl = document.querySelector('.tabcontent__list')

function renderActiveTab(theCurrentRoute){
	// var previousActiveTabEl = document.querySelector('.tabcontent__tab.active')
	var previousActiveTabEl = document.querySelector('[class="tabcontent__tab active"]')
	previousActiveTabEl.classList.remove('active')

	var currentActiveTabEl = document.querySelector(`[data-route="${theCurrentRoute}"]`)
	currentActiveTabEl.classList.add('active')
}

function renderContentTo(domEl, theRoute, theContent){

	if( theRoute === 'home' ){  return domEl.innerHTML = theContent[theRoute] }
	if( theRoute === 'concerts' ){  return domEl.innerHTML = theContent[theRoute] }
	if( theRoute === 'carpools' ){ return  domEl.innerHTML = theContent[theRoute] }
	if( theRoute === 'flights' ){  return domEl.innerHTML = theContent[theRoute] }

	domEl.innerHTML = theContent.home
	window.location.hash = ''
}


var controllerRouter = function(){
	var currentRoute = window.location.hash.slice(1)
	if(currentRoute.length === 0){ currentRoute = 'home' }
	var pageContentEl = document.querySelector('.page_content')
	renderActiveTab(currentRoute)
	renderContentTo(pageContentEl, currentRoute, pageContentObj)
}


tabsContainerEl.addEventListener('click', function(evt){
	var clickedTabEl = evt.target
	var route = clickedTabEl.dataset.route
	window.location.hash = route
})


controllerRouter()
window.addEventListener('hashchange', controllerRouter)
