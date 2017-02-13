import $ from 'jquery';

var fetchConcertsPromise = $.getJSON('http://apis.is/concerts').then(function(serverRes){
  console.log(serverRes);
})

var fectchCarpoolsPromise = $.getJSON('http://apis.is/rides/samferda-drivers/').then(function(serverRes){
  console.log(serverRes);
})

var fetchFlightsDeparturesPromise =  $.getJSON('http://apis.is/flight?language=en&type=departures').then(function(serverRes){
  console.log(serverRes);
})

var fetchFligthsArrivalsPromise = $.getJSON('http://apis.is/flight?language=en&type=arrivals').then(function(serverRes){
  console.log(serverRes);
})



function buildPageTemplate(pageContentApiData){
		var PageObj = pageContentApiData.results[0]
    console.log(PageObj);

		// var committeeList =  committeeApiData.results
		// var createCommitteeHtmlComponents = committeeList.map(function(committeeObj){
		// 	return `
		// 		<div class='committee'>
		// 		  <h4>${committeeObj.name}</h4>
		// 		  <p>Chamber: ${committeeObj.chamber}</h4>
		// 		</div>
		// 	`
}

var pageContentObj = {
  home:`
  <div class="panel panel-default homeContent">
    <div class="panel-heading">
      THE BASIC FACTS
    </div>
    <table class="table">
      <tbody>
        <tr>
          <td>Native Name</td>
          <td>Island</td>
        </tr>
        <tr>
          <td>Demonym</td>
          <td>Icelander</td>
        </tr>
        <tr>
          <td>Area (m2)</td>
          <td>103000</td>
        </tr>
        <tr>
          <td>Calling Code</td>
          <td>352</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,

  concerts:`
  <div>
    <panel>
      Concerts
    </panel>
    <div class="row">
      <div class="col-md-4">
        <div class="thumbnail">
          <img src="Insert image URL here">
          <div class="caption">
            <h3>name</h3>
            <p><mark>Venu: </mark><strong>eventHallName</strong></p>
            <p class="text-right">dateOfShow</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,

  carpools:`
  <div class="panel panel-default carpools-content">
    <div class="panel-heading">
      CARPOOLS
    </div>
    <table class="table">
      <thead>
        <th>Time of Departure</th>
        <th>From</th>
        <th>To</th>
      </thead>
      <tbody>
        <tr>
          <td>TIME</td>
          <td>From Location</td>
          <td>To Location</td>
        </tr>
        <tr>
          <td>TIME</td>
          <td>From Location</td>
          <td>To Location</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,

  flights:`
  <div class='container-fluid flights-container'>
    <div class="panel panel-default">
      <div class="panel-body">
        Flights
      </div>
    </div>
    <div class='row'>
      <div class="col-md-6 flights-columns">
        <div class="panel panel-default flights-content">
          <div class="panel-heading flights-panel-heading">
            Arrivals
          </div>
          <table class="table">
            <thead>
              <th>Date</th>
              <th>Arrival Time</th>
              <th>Origin</th>
              <th>Airline</th>
            </thead>
            <tbody>
              <tr>
                <td>Date</td>
                <td>Time</td>
                <td>Origin</td>
                <td>Airline</td>
              </tr>
              <tr>
              <td>Date</td>
              <td>Time</td>
              <td>Origin</td>
              <td>Airline</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="panel panel-default flightsContent">
          <div class="panel-heading">
            Departures
          </div>
          <table class="table">
            <thead>
              <th>Date</th>
              <th>Departure Time</th>
              <th>Destination</th>
              <th>Airline</th>
            </thead>
            <tbody>
              <tr>
                <td>Date</td>
                <td>Departure Time</td>
                <td>Destination</td>
                <td>Airline</td>
              </tr>
              <tr>
              <td>Date</td>
              <td>Departure Time</td>
              <td>Destination</td>
              <td>Airline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  `
}




var tabsContainerEl = document.querySelector('.tabcontent__list')

function renderActiveTab(theCurrentRoute){

	var previousActiveTabEl = document.querySelector('[class="tabcontent__tab active"]')
	previousActiveTabEl.classList.remove('active')

	var currentActiveTabEl = document.querySelector(`[data-route="${theCurrentRoute}"]`)
	currentActiveTabEl.classList.add('active')
}


function renderContentTo(domEl, theRoute, theContent){

	if( theRoute === 'home' ){  return domEl.innerHTML = theContent[theRoute]

  }
	if( theRoute === 'concerts' ){  return domEl.innerHTML = theContent[theRoute]

  }
	if( theRoute === 'carpools' ){
    return  domEl.innerHTML = theContent[theRoute]

  }
	if( theRoute === 'flights' ){  return domEl.innerHTML = theContent[theRoute]

  }

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
