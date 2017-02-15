import $ from 'jquery';

function forEach(arr, cb){
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr)
  }

}


var fetchFligthsArrivalsPromise = $.getJSON('http://apis.is/flight?language=en&type=arrivals')

var fetchFlightsDeparturesPromise =  $.getJSON('http://apis.is/flight?language=en&type=departures')


var tabsContainerEl = document.querySelector('.tabcontent__list')


function renderContentTo(domEl, theRoute){
  var allContent = ''

	if( theRoute === 'home' ){

    allContent =`
    <div class="panel panel-default home-content">
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
    </div>`
    domEl.innerHTML = allContent

  }


	if( theRoute === 'concerts' ){

    allContent += `
      <div class="panel panel-default">
        <div class="panel-body">
          CONCERTS
        </div>
        <div class="row">`

    $.getJSON('http://apis.is/concerts').then(function(serverRes){

      forEach(serverRes.results, function(pageContentObj){
        allContent +=`
          <div class="col-sm-3 col-md-4 thumbnail-container">
          <div class="clearfix visible-xs-block"></div>

            <div class="thumbnail">
              <img src="${pageContentObj.imageSource}">
              <div class="caption">
                <h4>${pageContentObj.name}</h4>
                <p><mark>Venu: </mark><strong>${pageContentObj.eventHallName}</strong></p>
                <p class="text-right">${pageContentObj.dateOfShow}</p>
              </div>
            </div>
          </div>`
      })
      allContent += `
        </div>
      </div>`
      domEl.innerHTML = allContent
    })
  }


	if( theRoute === 'carpools' ){

      allContent += `
        <div class=row>
          <div class="panel panel-default">
            <div class="panel-heading">
              CARPOOLS
            </div>
            <table class="table">
              <thead>
                <th>Time of Departure</th>
                <th>From</th>
                <th>To</th>
              </thead>`

    var fectchCarpoolsPromise = $.getJSON('http://apis.is/rides/samferda-drivers/').then(function(serverRes){
      console.log(serverRes);

      forEach(serverRes.results, function(pageContentObj){
      allContent += `
                <tbody>
                  <tr>
                    <td>${pageContentObj.date}</td>
                    <td>${pageContentObj.from}</td>
                    <td>${pageContentObj.to}</td>
                  </tr>
                </tbody>`
      })
        allContent += `
            </table>
          </div>
        </div>`
      domEl.innerHTML = allContent
    })
  }


	if( theRoute === 'flights' ){

      allContent += `
      <div class='container-fluid flights-container'>
        <div class="panel panel-default">
          <div class="panel-body">
            FLIGHTS
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
                </thead>`

    $.when(fetchFligthsArrivalsPromise, fetchFlightsDeparturesPromise).then(function (serverResArrivals, serverResDepartures){
      console.log(serverResArrivals);
      console.log(serverResDepartures);

      forEach(serverResArrivals[0].results, function(pageContentObj){
        allContent += `
                <tbody>
                  <tr>
                    <td>${pageContentObj.date}</td>
                    <td>${pageContentObj.plannedArrival}</td>
                    <td>${pageContentObj.from}</td>
                    <td>${pageContentObj.airline}</td>
                  </tr>
                </tbody>`
      })
      allContent += `
              </table>
            </div>
          </div>

          <div class="col-md-6 flights-columns">
            <div class="panel panel-default flights-content">
              <div class="panel-heading flights-panel-heading">
                Departures
              </div>
              <table class="table">
                <thead>
                  <th>Date</th>
                  <th>Departure Time</th>
                  <th>Destination</th>
                  <th>Airline</th>
                </thead>`

      forEach(serverResDepartures[0].results, function(pageContentObj){
        allContent += `
                <tbody>
                  <tr>
                   <td>${pageContentObj.date}</td>
                   <td>${pageContentObj.plannedArrival}</td>
                   <td>${pageContentObj.to}</td>
                   <td>${pageContentObj.airline}</td>
                  </tr>
                </body>`
      })
        allContent += `
              </table>
            </div>
          </div>
        </div>`
        domEl.innerHTML = allContent
    })
  }

}


var controllerRouter = function(){
	var currentRoute = window.location.hash.slice(1)
	if(currentRoute.length === 0){ currentRoute = 'home' }

	var pageContentEl = document.querySelector('.page_content')
	renderActiveTab(currentRoute)
	renderContentTo(pageContentEl, currentRoute)
}


function renderActiveTab(theCurrentRoute){

	var previousActiveTabEl = document.querySelector('[class="tabcontent__tab active"]')
	previousActiveTabEl.classList.remove('active')

	var currentActiveTabEl = document.querySelector(`[data-route="${theCurrentRoute}"]`)
	currentActiveTabEl.classList.add('active')
}


tabsContainerEl.addEventListener('click', function(evt){
  var clickedTabEl = evt.target
	var route = clickedTabEl.dataset.route
	window.location.hash = route
})

controllerRouter()
window.addEventListener('hashchange', controllerRouter)
