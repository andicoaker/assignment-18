import $ from 'jquery';


var fetchConcertsPromise =
  $.getJSON('http://apis.is/concerts').then(function(serverRes){
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


var pageContentObj = {
  // home:`
  // <div class="panel panel-default homeContent">
  //   <div class="panel-heading">
  //     THE BASIC FACTS
  //   </div>
  //   <table class="table">
  //     <tbody>
  //       <tr>
  //         <td>Native Name</td>
  //         <td>Island</td>
  //       </tr>
  //       <tr>
  //         <td>Demonym</td>
  //         <td>Icelander</td>
  //       </tr>
  //       <tr>
  //         <td>Area (m2)</td>
  //         <td>103000</td>
  //       </tr>
  //       <tr>
  //         <td>Calling Code</td>
  //         <td>352</td>
  //       </tr>
  //     </tbody>
  //   </table>
  // </div>
  // `,

  // concerts:`
  // <div class="panel panel-default">
  //   <div class="panel-body">
  //     Concerts
  //   </div>
  // </div>
  // <div class="row">
  //   <div class="col-md-4">
  //     <div class="thumbnail">
  //       <img src="${pageContentObj.imageSource}>
  //       <div class="caption">
  //         <h3>${pageContentObj.name}</h3>
  //         <p><mark>Venu: </mark><strong>${pageContentObj.eventHallName}</strong></p>
  //         <p class="text-right">${pageContentObj.dateOfShow}</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // `,

  // carpools:`
  // <div class="panel panel-default carpools-content">
  //   <div class="panel-heading">
  //     CARPOOLS
  //   </div>
  //   <table class="table">
  //     <thead>
  //       <th>Time of Departure</th>
  //       <th>From</th>
  //       <th>To</th>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         <td>TIME</td>
  //         <td>From Location</td>
  //         <td>To Location</td>
  //       </tr>
  //       <tr>
  //         <td>TIME</td>
  //         <td>From Location</td>
  //         <td>To Location</td>
  //       </tr>
  //     </tbody>
  //   </table>
  // </div>
  // `,


}





var tabsContainerEl = document.querySelector('.tabcontent__list')

function renderActiveTab(theCurrentRoute){

	var previousActiveTabEl = document.querySelector('[class="tabcontent__tab active"]')
	previousActiveTabEl.classList.remove('active')

	var currentActiveTabEl = document.querySelector(`[data-route="${theCurrentRoute}"]`)
	currentActiveTabEl.classList.add('active')
}



function renderContentTo(domEl, theRoute, theContent){
  var allContent = ''

	// if( theRoute === 'home' ){
    //
    // `<div class="panel panel-default homeContent">
    //   <div class="panel-heading">
    //     THE BASIC FACTS
    //   </div>
    //   <table class="table">
    //     <tbody>
    //       <tr>
    //         <td>Native Name</td>
    //         <td>Island</td>
    //       </tr>
    //       <tr>
    //         <td>Demonym</td>
    //         <td>Icelander</td>
    //       </tr>
    //       <tr>
    //         <td>Area (m2)</td>
    //         <td>103000</td>
    //       </tr>
    //       <tr>
    //         <td>Calling Code</td>
    //         <td>352</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>`
  //
  //   return domEl.innerHTML = theContent[theRoute]
  // }


  //
	// if( theRoute === 'concerts' ){
  //   $.getJSON('http://apis.is/concerts').then(function(serverRes){
  //     allContent += "<div>"
  //     serverRes.results.forEach(function(obj, i){
  //       allContent += `
  //       <h1>${obj.name}</h1>
  //       `
  //     })
  //     allContent += `</div>`
  //     domEl.innerHTML = allContent
  //
  //   })`
  //   <div class="panel panel-default">
  //     <div class="panel-body">
  //       Flights
  //     </div>
  //   </div>
  //   <div class="row">
  //     <div class="col-md-4">
  //       <div class="thumbnail">
          // <img src="${pageContentObj.imageSource}>
          // <div class="caption">
          //   <h3>${pageContentObj.name}</h3>
          //   <p><mark>Venu: </mark><strong>${pageContentObj.eventHallName}</strong></p>
          //   <p class="text-right">${pageContentObj.dateOfShow}</p>
          // </div>
  //       </div>
  //     </div>
  //   </div>
  //   `,
  //
  // }


	if( theRoute === 'carpools' ){  //return domEl.innerHTML = theContent[theRoute]

    var carpoolsTemp = `
    "<div class=row>
      <div class='flights-columns'>"

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

        `
    var fectchCarpoolsPromise = $.getJSON('http://apis.is/rides/samferda-drivers/').then(function(serverRes){
      console.log(serverRes);

      forEach(arrivals, function(pageContentObj){
        carpoolsTemp += `
            <tr>
              <td>${pageContentObj.date}</td>
              <td>${pageContentObj.from}</td>
              <td>${pageContentObj.to}</td>
            </tr>
        `
      })
      carpoolsTemp += `
      </tbody>
      </table>
      </div>
      </div>
      </div>`
    })
    domEl.innerHTML = theContent[theRoute]
  }


	if( theRoute === 'flights' ){
    var flightTemp = `
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
            <tbody>`
    // GETJSON( FOR ARRIVALS
    var fetchFligthsArrivalsPromise = $.getJSON('http://apis.is/flight?language=en&type=arrivals').then(function(serverRes){
      console.log(serverRes);

      forEach(arrivals, function(pageContentObj){
        flightTemp += `
          <tr>
            <td>${pageContentObj.date}</td>
            <td>${pageContentObj.plannedArrival}</td>
            <td>${pageContentObj.from}</td>
            <td>${pageContentObj.airline}</td>
          </tr>`
      })
      // flightTemp += close container divs FOR ARRIVALS
      flightTemp += `
        </tbody>
        </div>
        </div>
        </div>
        </div>
      `
      // END GETJSON
    })
    domEl.innerHTML = theContent[theRoute]

    // GETJSON FOR DEPARTURES
    var fetchFlightsDeparturesPromise =  $.getJSON('http://apis.is/flight?language=en&type=departures').then(function(serverRes){
      console.log(serverRes);

      forEach(departures, function(pageContentObj){
        flightTemp += `
          <tr>
           <td>${pageContentObj.date}</td>
           <td>${pageContentObj.plannedArrival}</td>
           <td>${pageContentObj.to}</td>
           <td>${pageContentObj.airline}</td>
          </tr>`
          // flightTemp += close container divs FOR ALL
      })
      flightTemp += `
        </tbody>
        </div>
        </div>
        </div>
        </div>
      `
    })
    domEl.innerHTML = theContent[theRoute]
  }
  //
	// domEl.innerHTML = theContent.home
	// window.location.hash = ''
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
