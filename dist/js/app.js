(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
  home: '\n  <div class="panel panel-default homeContent">\n    <div class="panel-heading">\n      THE BASIC FACTS\n    </div>\n    <table class="table">\n      <tbody>\n        <tr>\n          <td>Native Name</td>\n          <td>Island</td>\n        </tr>\n        <tr>\n          <td>Demonym</td>\n          <td>Icelander</td>\n        </tr>\n        <tr>\n          <td>Area (m2)</td>\n          <td>103000</td>\n        </tr>\n        <tr>\n          <td>Calling Code</td>\n          <td>352</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  ',

  concerts: '\n    <h2>TEST 3</h2>\n    ',

  carpools: '\n  <div class="panel panel-default carpoolsContent">\n    <div class="panel-heading">\n      CARPOOLS\n    </div>\n    <table class="table">\n      <thead>\n        <th>Time of Departure</th>\n        <th>From</th>\n        <th>To</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>TIME</td>\n          <td>From Location</td>\n          <td>To Location</td>\n        </tr>\n        <tr>\n          <td>TIME</td>\n          <td>From Location</td>\n          <td>To Location</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>  ',

  flights: '\n  <div class="panel panel-default flightsContent">\n    <div class="panel-heading">\n      Arrivals\n    </div>\n    <table class="table">\n      <thead>\n        <th>Date</th>\n        <th>Arrival Time</th>\n        <th>Origin</th>\n        <th>Airline</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Date</td>\n          <td>Time</td>\n          <td>Origin</td>\n          <td>Airline</td>\n        </tr>\n        <tr>\n        <td>Date</td>\n        <td>Time</td>\n        <td>Origin</td>\n        <td>Airline</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class="panel panel-default flightsContent">\n    <div class="panel-heading">\n      Departures\n    </div>\n    <table class="table">\n      <thead>\n        <th>Date</th>\n        <th>Arrival Time</th>\n        <th>Origin</th>\n        <th>Airline</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Date</td>\n          <td>Time</td>\n          <td>Origin</td>\n          <td>Airline</td>\n        </tr>\n        <tr>\n        <td>Date</td>\n        <td>Time</td>\n        <td>Origin</td>\n        <td>Airline</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>'

};

var tabsContainerEl = document.querySelector('.tabcontent__list');

function renderActiveTab(theCurrentRoute) {
  // var previousActiveTabEl = document.querySelector('.tabcontent__tab.active')
  var previousActiveTabEl = document.querySelector('[class="tabcontent__tab active"]');
  previousActiveTabEl.classList.remove('active');

  var currentActiveTabEl = document.querySelector('[data-route="' + theCurrentRoute + '"]');
  currentActiveTabEl.classList.add('active');
}

function renderContentTo(domEl, theRoute, theContent) {

  if (theRoute === 'home') {
    return domEl.innerHTML = theContent[theRoute];
  }
  if (theRoute === 'concerts') {
    return domEl.innerHTML = theContent[theRoute];
  }
  if (theRoute === 'carpools') {
    return domEl.innerHTML = theContent[theRoute];
  }
  if (theRoute === 'flights') {
    return domEl.innerHTML = theContent[theRoute];
  }

  domEl.innerHTML = theContent.home;
  window.location.hash = '';
}

var controllerRouter = function controllerRouter() {
  var currentRoute = window.location.hash.slice(1);
  if (currentRoute.length === 0) {
    currentRoute = 'home';
  }
  var pageContentEl = document.querySelector('.page_content');
  renderActiveTab(currentRoute);
  renderContentTo(pageContentEl, currentRoute, pageContentObj);
};

tabsContainerEl.addEventListener('click', function (evt) {
  var clickedTabEl = evt.target;
  var route = clickedTabEl.dataset.route;
  window.location.hash = route;
});

controllerRouter();
window.addEventListener('hashchange', controllerRouter);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpQkFBaUI7QUFDbkIsZ2pCQURtQjs7QUE2Qm5CLHlDQTdCbUI7O0FBaUNuQixtakJBakNtQjs7QUEyRG5COztBQTNEbUIsQ0FBckI7O0FBc0hBLElBQUksa0JBQWtCLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBdEI7O0FBRUEsU0FBUyxlQUFULENBQXlCLGVBQXpCLEVBQXlDO0FBQ3hDO0FBQ0EsTUFBSSxzQkFBc0IsU0FBUyxhQUFULENBQXVCLGtDQUF2QixDQUExQjtBQUNBLHNCQUFvQixTQUFwQixDQUE4QixNQUE5QixDQUFxQyxRQUFyQzs7QUFFQSxNQUFJLHFCQUFxQixTQUFTLGFBQVQsbUJBQXVDLGVBQXZDLFFBQXpCO0FBQ0EscUJBQW1CLFNBQW5CLENBQTZCLEdBQTdCLENBQWlDLFFBQWpDO0FBQ0E7O0FBR0QsU0FBUyxlQUFULENBQXlCLEtBQXpCLEVBQWdDLFFBQWhDLEVBQTBDLFVBQTFDLEVBQXFEOztBQUVwRCxNQUFJLGFBQWEsTUFBakIsRUFBeUI7QUFBRyxXQUFPLE1BQU0sU0FBTixHQUFrQixXQUFXLFFBQVgsQ0FBekI7QUFBK0M7QUFDM0UsTUFBSSxhQUFhLFVBQWpCLEVBQTZCO0FBQUcsV0FBTyxNQUFNLFNBQU4sR0FBa0IsV0FBVyxRQUFYLENBQXpCO0FBQStDO0FBQy9FLE1BQUksYUFBYSxVQUFqQixFQUE2QjtBQUFFLFdBQVEsTUFBTSxTQUFOLEdBQWtCLFdBQVcsUUFBWCxDQUExQjtBQUFnRDtBQUMvRSxNQUFJLGFBQWEsU0FBakIsRUFBNEI7QUFBRyxXQUFPLE1BQU0sU0FBTixHQUFrQixXQUFXLFFBQVgsQ0FBekI7QUFBK0M7O0FBRTlFLFFBQU0sU0FBTixHQUFrQixXQUFXLElBQTdCO0FBQ0EsU0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEVBQXZCO0FBQ0E7O0FBR0QsSUFBSSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEdBQVU7QUFDaEMsTUFBSSxlQUFlLE9BQU8sUUFBUCxDQUFnQixJQUFoQixDQUFxQixLQUFyQixDQUEyQixDQUEzQixDQUFuQjtBQUNBLE1BQUcsYUFBYSxNQUFiLEtBQXdCLENBQTNCLEVBQTZCO0FBQUUsbUJBQWUsTUFBZjtBQUF1QjtBQUN0RCxNQUFJLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxrQkFBZ0IsWUFBaEI7QUFDQSxrQkFBZ0IsYUFBaEIsRUFBK0IsWUFBL0IsRUFBNkMsY0FBN0M7QUFDQSxDQU5EOztBQVNBLGdCQUFnQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBUyxHQUFULEVBQWE7QUFDdEQsTUFBSSxlQUFlLElBQUksTUFBdkI7QUFDQSxNQUFJLFFBQVEsYUFBYSxPQUFiLENBQXFCLEtBQWpDO0FBQ0EsU0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEtBQXZCO0FBQ0EsQ0FKRDs7QUFNQTtBQUNBLE9BQU8sZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsZ0JBQXRDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8vIHZhciBmb3JFYWNoID0gZnVuY3Rpb24oYXJyLCBjYil7XG4vLyBcdGZvcih2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuLy8gXHRcdGNiKGFycltpXSwgaSwgYXJyKVxuLy8gXHR9XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gY29udHJvbGxlclJvdXRlciAoKXtcbi8vICAgdmFyIGN1cnJlbnRSb3V0ZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpXG4vL1xuLy8gICBpZiAoY3VycmVudFJvdXRlID09PSAnY29uY2VydHMnKSB7XG4vLyAgICAgJC5nZXRKU09OKCdodHRwOi8vYXBpcy5pcy9jb25jZXJ0cycpLnRoZW4oZnVuY3Rpb24oc2VydmVyUmVzKXtcbi8vICAgICBjb25zb2xlLmxvZyhzZXJ2ZXJSZXMpO1xuLy9cbi8vICAgICAgIHZhciBodG1sVGVtcGxhdGUgPSBjcmVhdGVJY2VsYW5kUGFnZVRlbXBsYXRlKCBzZXJ2ZXJSZXMucmVzdWx0cywgXCJDb25jZXJ0c1wiIClcbi8vICAgICAgIGFwcENvbnRhaW5lckVsLmlubmVySFRNTCA9IGh0bWxUZW1wbGF0ZVxuLy9cbi8vICAgICB9KVxuLy8gICAgIHJldHVyblxuLy8gICB9XG5cbiAgLy8gaWYgKGN1cnJlbnRSb3V0ZSA9PT0gJ2NhcnBvb2xzJykge1xuICAvLyAgICQuZ2V0SlNPTignaHR0cDovL2FwaXMuaXMvcmlkZXMvc2FtZmVyZGEtZHJpdmVycy8nKS50aGVuKGZ1bmN0aW9uKHNlcnZlclJlcyl7XG4gIC8vICAgICBjb25zb2xlLmxvZyhzZXJ2ZXJSZXMpO1xuICAvL1xuICAvLyAgICAgdmFyIGh0bWxUZW1wbGF0ZSA9IGNyZWF0ZUljZWxhbmRQYWdlVGVtcGxhdGUoIHNlcnZlclJlcy5yZXN1bHRzLCBcIkNhcnBvb2xzXCIgKVxuICAvLyAgICAgYXBwQ29udGFpbmVyRWwuaW5uZXJIVE1MID0gaHRtbFRlbXBsYXRlXG4gIC8vXG4gIC8vICAgfSlcbiAgLy8gICByZXR1cm5cbiAgLy8gfVxuICAvL1xuICAvLyBpZiAoY3VycmVudFJvdXRlID09PSAnZmxpZ2h0cycpIHtcbiAgLy8gICAkLmdldEpTT04oJ2h0dHA6Ly9hcGlzLmlzL2ZsaWdodD9sYW5ndWFnZT1lbiZ0eXBlPWRlcGFydHVyZXMnKS50aGVuKGZ1bmN0aW9uKHNlcnZlclJlcyl7XG4gIC8vICAgICBjb25zb2xlLmxvZyhzZXJ2ZXJSZXMpO1xuICAvL1xuICAvLyAgICAgdmFyIGh0bWxUZW1wbGF0ZSA9IGNyZWF0ZUljZWxhbmRQYWdlVGVtcGxhdGUoIHNlcnZlclJlcy5yZXN1bHRzLCBcIkZsaWdodHNcIiApXG4vLyAgICAgICBhcHBDb250YWluZXJFbC5pbm5lckhUTUwgPSBodG1sVGVtcGxhdGVcbi8vXG4vLyAgICAgfSlcbi8vICAgICByZXR1cm5cbi8vICAgfVxuLy9cbi8vICAgaWYgKHRydWUpIHtcbi8vICAgICAkLmdldEpTT04oJ2h0dHA6Ly9hcGlzLmlzL2ZsaWdodD9sYW5ndWFnZT1lbiZ0eXBlPWFycml2YWxzJykudGhlbihmdW5jdGlvbihzZXJ2ZXJSZXMpe1xuLy8gICAgICAgY29uc29sZS5sb2coc2VydmVyUmVzKTtcbi8vXG4vLyAgICAgICB2YXIgaHRtbFRlbXBsYXRlID0gY3JlYXRlSWNlbGFuZFBhZ2VUZW1wbGF0ZSggc2VydmVyUmVzLnJlc3VsdHMsIFwiRmxpZ2h0c1wiIClcbi8vICAgICAgIGFwcENvbnRhaW5lckVsLmlubmVySFRNTCA9IGh0bWxUZW1wbGF0ZVxuLy9cbi8vICAgICB9KVxuLy8gICAgIHJldHVyblxuLy8gICB9XG4vLyB9XG5cbnZhciBwYWdlQ29udGVudE9iaiA9IHtcbiAgaG9tZTpgXG4gIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0IGhvbWVDb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgIFRIRSBCQVNJQyBGQUNUU1xuICAgIDwvZGl2PlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+TmF0aXZlIE5hbWU8L3RkPlxuICAgICAgICAgIDx0ZD5Jc2xhbmQ8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPkRlbW9ueW08L3RkPlxuICAgICAgICAgIDx0ZD5JY2VsYW5kZXI8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPkFyZWEgKG0yKTwvdGQ+XG4gICAgICAgICAgPHRkPjEwMzAwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+Q2FsbGluZyBDb2RlPC90ZD5cbiAgICAgICAgICA8dGQ+MzUyPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG4gIGAsXG5cbiAgY29uY2VydHM6YFxuICAgIDxoMj5URVNUIDM8L2gyPlxuICAgIGAsXG5cbiAgY2FycG9vbHM6YFxuICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdCBjYXJwb29sc0NvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgQ0FSUE9PTFNcbiAgICA8L2Rpdj5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dGg+VGltZSBvZiBEZXBhcnR1cmU8L3RoPlxuICAgICAgICA8dGg+RnJvbTwvdGg+XG4gICAgICAgIDx0aD5UbzwvdGg+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPlRJTUU8L3RkPlxuICAgICAgICAgIDx0ZD5Gcm9tIExvY2F0aW9uPC90ZD5cbiAgICAgICAgICA8dGQ+VG8gTG9jYXRpb248L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPlRJTUU8L3RkPlxuICAgICAgICAgIDx0ZD5Gcm9tIExvY2F0aW9uPC90ZD5cbiAgICAgICAgICA8dGQ+VG8gTG9jYXRpb248L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj4gIGAsXG5cbiAgZmxpZ2h0czpgXG4gIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0IGZsaWdodHNDb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgIEFycml2YWxzXG4gICAgPC9kaXY+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICA8dGg+QXJyaXZhbCBUaW1lPC90aD5cbiAgICAgICAgPHRoPk9yaWdpbjwvdGg+XG4gICAgICAgIDx0aD5BaXJsaW5lPC90aD5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+RGF0ZTwvdGQ+XG4gICAgICAgICAgPHRkPlRpbWU8L3RkPlxuICAgICAgICAgIDx0ZD5PcmlnaW48L3RkPlxuICAgICAgICAgIDx0ZD5BaXJsaW5lPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICA8dGQ+RGF0ZTwvdGQ+XG4gICAgICAgIDx0ZD5UaW1lPC90ZD5cbiAgICAgICAgPHRkPk9yaWdpbjwvdGQ+XG4gICAgICAgIDx0ZD5BaXJsaW5lPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0IGZsaWdodHNDb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgIERlcGFydHVyZXNcbiAgICA8L2Rpdj5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgIDx0aD5BcnJpdmFsIFRpbWU8L3RoPlxuICAgICAgICA8dGg+T3JpZ2luPC90aD5cbiAgICAgICAgPHRoPkFpcmxpbmU8L3RoPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD5EYXRlPC90ZD5cbiAgICAgICAgICA8dGQ+VGltZTwvdGQ+XG4gICAgICAgICAgPHRkPk9yaWdpbjwvdGQ+XG4gICAgICAgICAgPHRkPkFpcmxpbmU8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgIDx0ZD5EYXRlPC90ZD5cbiAgICAgICAgPHRkPlRpbWU8L3RkPlxuICAgICAgICA8dGQ+T3JpZ2luPC90ZD5cbiAgICAgICAgPHRkPkFpcmxpbmU8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5gXG5cbn1cblxuXG52YXIgdGFic0NvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmNvbnRlbnRfX2xpc3QnKVxuXG5mdW5jdGlvbiByZW5kZXJBY3RpdmVUYWIodGhlQ3VycmVudFJvdXRlKXtcblx0Ly8gdmFyIHByZXZpb3VzQWN0aXZlVGFiRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiY29udGVudF9fdGFiLmFjdGl2ZScpXG5cdHZhciBwcmV2aW91c0FjdGl2ZVRhYkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzPVwidGFiY29udGVudF9fdGFiIGFjdGl2ZVwiXScpXG5cdHByZXZpb3VzQWN0aXZlVGFiRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblxuXHR2YXIgY3VycmVudEFjdGl2ZVRhYkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm91dGU9XCIke3RoZUN1cnJlbnRSb3V0ZX1cIl1gKVxuXHRjdXJyZW50QWN0aXZlVGFiRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbn1cblxuXG5mdW5jdGlvbiByZW5kZXJDb250ZW50VG8oZG9tRWwsIHRoZVJvdXRlLCB0aGVDb250ZW50KXtcblxuXHRpZiggdGhlUm91dGUgPT09ICdob21lJyApeyAgcmV0dXJuIGRvbUVsLmlubmVySFRNTCA9IHRoZUNvbnRlbnRbdGhlUm91dGVdIH1cblx0aWYoIHRoZVJvdXRlID09PSAnY29uY2VydHMnICl7ICByZXR1cm4gZG9tRWwuaW5uZXJIVE1MID0gdGhlQ29udGVudFt0aGVSb3V0ZV0gfVxuXHRpZiggdGhlUm91dGUgPT09ICdjYXJwb29scycgKXsgcmV0dXJuICBkb21FbC5pbm5lckhUTUwgPSB0aGVDb250ZW50W3RoZVJvdXRlXSB9XG5cdGlmKCB0aGVSb3V0ZSA9PT0gJ2ZsaWdodHMnICl7ICByZXR1cm4gZG9tRWwuaW5uZXJIVE1MID0gdGhlQ29udGVudFt0aGVSb3V0ZV0gfVxuXG5cdGRvbUVsLmlubmVySFRNTCA9IHRoZUNvbnRlbnQuaG9tZVxuXHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnXG59XG5cblxudmFyIGNvbnRyb2xsZXJSb3V0ZXIgPSBmdW5jdGlvbigpe1xuXHR2YXIgY3VycmVudFJvdXRlID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSlcblx0aWYoY3VycmVudFJvdXRlLmxlbmd0aCA9PT0gMCl7IGN1cnJlbnRSb3V0ZSA9ICdob21lJyB9XG5cdHZhciBwYWdlQ29udGVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfY29udGVudCcpXG5cdHJlbmRlckFjdGl2ZVRhYihjdXJyZW50Um91dGUpXG5cdHJlbmRlckNvbnRlbnRUbyhwYWdlQ29udGVudEVsLCBjdXJyZW50Um91dGUsIHBhZ2VDb250ZW50T2JqKVxufVxuXG5cbnRhYnNDb250YWluZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCl7XG5cdHZhciBjbGlja2VkVGFiRWwgPSBldnQudGFyZ2V0XG5cdHZhciByb3V0ZSA9IGNsaWNrZWRUYWJFbC5kYXRhc2V0LnJvdXRlXG5cdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcm91dGVcbn0pXG5cbmNvbnRyb2xsZXJSb3V0ZXIoKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBjb250cm9sbGVyUm91dGVyKVxuIl19
