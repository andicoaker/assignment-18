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

  carpools: '\n  <div class="panel panel-default carpools-content">\n    <div class="panel-heading">\n      CARPOOLS\n    </div>\n    <table class="table">\n      <thead>\n        <th>Time of Departure</th>\n        <th>From</th>\n        <th>To</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>TIME</td>\n          <td>From Location</td>\n          <td>To Location</td>\n        </tr>\n        <tr>\n          <td>TIME</td>\n          <td>From Location</td>\n          <td>To Location</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>  ',

  flights: '\n  <div class=\'container-fluid flights-container\'>\n    <div class="panel panel-default">\n      <div class="panel-body">\n        Flights\n      </div>\n    </div>\n    <div class=\'row\'>\n      <div class="col-md-6 flights-columns">\n        <div class="panel panel-default flights-content">\n          <div class="panel-heading flights-panel-heading">\n            Arrivals\n          </div>\n          <table class="table">\n            <thead>\n              <th>Date</th>\n              <th>Arrival Time</th>\n              <th>Origin</th>\n              <th>Airline</th>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Date</td>\n                <td>Time</td>\n                <td>Origin</td>\n                <td>Airline</td>\n              </tr>\n              <tr>\n              <td>Date</td>\n              <td>Time</td>\n              <td>Origin</td>\n              <td>Airline</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class="panel panel-default flightsContent">\n          <div class="panel-heading">\n            Departures\n          </div>\n          <table class="table">\n            <thead>\n              <th>Date</th>\n              <th>Arrival Time</th>\n              <th>Origin</th>\n              <th>Airline</th>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Date</td>\n                <td>Time</td>\n                <td>Origin</td>\n                <td>Airline</td>\n              </tr>\n              <tr>\n              <td>Date</td>\n              <td>Time</td>\n              <td>Origin</td>\n              <td>Airline</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  '
};

var tabsContainerEl = document.querySelector('.tabcontent__list');

function renderActiveTab(theCurrentRoute) {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpQkFBaUI7QUFDbkIsZ2pCQURtQjs7QUE2Qm5CLHlDQTdCbUI7O0FBaUNuQixvakJBakNtQjs7QUEyRG5CO0FBM0RtQixDQUFyQjs7QUFpSUEsSUFBSSxrQkFBa0IsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUF0Qjs7QUFFQSxTQUFTLGVBQVQsQ0FBeUIsZUFBekIsRUFBeUM7O0FBRXhDLE1BQUksc0JBQXNCLFNBQVMsYUFBVCxDQUF1QixrQ0FBdkIsQ0FBMUI7QUFDQSxzQkFBb0IsU0FBcEIsQ0FBOEIsTUFBOUIsQ0FBcUMsUUFBckM7O0FBRUEsTUFBSSxxQkFBcUIsU0FBUyxhQUFULG1CQUF1QyxlQUF2QyxRQUF6QjtBQUNBLHFCQUFtQixTQUFuQixDQUE2QixHQUE3QixDQUFpQyxRQUFqQztBQUNBOztBQUdELFNBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQyxRQUFoQyxFQUEwQyxVQUExQyxFQUFxRDs7QUFFcEQsTUFBSSxhQUFhLE1BQWpCLEVBQXlCO0FBQUcsV0FBTyxNQUFNLFNBQU4sR0FBa0IsV0FBVyxRQUFYLENBQXpCO0FBRTFCO0FBQ0YsTUFBSSxhQUFhLFVBQWpCLEVBQTZCO0FBQUcsV0FBTyxNQUFNLFNBQU4sR0FBa0IsV0FBVyxRQUFYLENBQXpCO0FBRTlCO0FBQ0YsTUFBSSxhQUFhLFVBQWpCLEVBQTZCO0FBQzFCLFdBQVEsTUFBTSxTQUFOLEdBQWtCLFdBQVcsUUFBWCxDQUExQjtBQUVEO0FBQ0YsTUFBSSxhQUFhLFNBQWpCLEVBQTRCO0FBQUcsV0FBTyxNQUFNLFNBQU4sR0FBa0IsV0FBVyxRQUFYLENBQXpCO0FBRTdCOztBQUVGLFFBQU0sU0FBTixHQUFrQixXQUFXLElBQTdCO0FBQ0EsU0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEVBQXZCO0FBQ0E7O0FBR0QsSUFBSSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEdBQVU7QUFDaEMsTUFBSSxlQUFlLE9BQU8sUUFBUCxDQUFnQixJQUFoQixDQUFxQixLQUFyQixDQUEyQixDQUEzQixDQUFuQjtBQUNBLE1BQUcsYUFBYSxNQUFiLEtBQXdCLENBQTNCLEVBQTZCO0FBQUUsbUJBQWUsTUFBZjtBQUF1QjtBQUN0RCxNQUFJLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxrQkFBZ0IsWUFBaEI7QUFDQSxrQkFBZ0IsYUFBaEIsRUFBK0IsWUFBL0IsRUFBNkMsY0FBN0M7QUFDQSxDQU5EOztBQVNBLGdCQUFnQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBUyxHQUFULEVBQWE7QUFDdEQsTUFBSSxlQUFlLElBQUksTUFBdkI7QUFDQSxNQUFJLFFBQVEsYUFBYSxPQUFiLENBQXFCLEtBQWpDO0FBQ0EsU0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEtBQXZCO0FBQ0EsQ0FKRDs7QUFNQTtBQUNBLE9BQU8sZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsZ0JBQXRDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8vIHZhciBmb3JFYWNoID0gZnVuY3Rpb24oYXJyLCBjYil7XG4vLyBcdGZvcih2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuLy8gXHRcdGNiKGFycltpXSwgaSwgYXJyKVxuLy8gXHR9XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gY29udHJvbGxlclJvdXRlciAoKXtcbi8vICAgdmFyIGN1cnJlbnRSb3V0ZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpXG4vL1xuLy8gICBpZiAoY3VycmVudFJvdXRlID09PSAnY29uY2VydHMnKSB7XG4vLyAgICAgJC5nZXRKU09OKCdodHRwOi8vYXBpcy5pcy9jb25jZXJ0cycpLnRoZW4oZnVuY3Rpb24oc2VydmVyUmVzKXtcbi8vICAgICBjb25zb2xlLmxvZyhzZXJ2ZXJSZXMpO1xuLy9cbi8vICAgICAgIHZhciBodG1sVGVtcGxhdGUgPSBjcmVhdGVJY2VsYW5kUGFnZVRlbXBsYXRlKCBzZXJ2ZXJSZXMucmVzdWx0cywgXCJDb25jZXJ0c1wiIClcbi8vICAgICAgIGFwcENvbnRhaW5lckVsLmlubmVySFRNTCA9IGh0bWxUZW1wbGF0ZVxuLy9cbi8vICAgICB9KVxuLy8gICAgIHJldHVyblxuLy8gICB9XG5cbiAgLy8gaWYgKGN1cnJlbnRSb3V0ZSA9PT0gJ2NhcnBvb2xzJykge1xuICAvLyAgICQuZ2V0SlNPTignaHR0cDovL2FwaXMuaXMvcmlkZXMvc2FtZmVyZGEtZHJpdmVycy8nKS50aGVuKGZ1bmN0aW9uKHNlcnZlclJlcyl7XG4gIC8vICAgICBjb25zb2xlLmxvZyhzZXJ2ZXJSZXMpO1xuICAvL1xuICAvLyAgICAgdmFyIGh0bWxUZW1wbGF0ZSA9IGNyZWF0ZUljZWxhbmRQYWdlVGVtcGxhdGUoIHNlcnZlclJlcy5yZXN1bHRzLCBcIkNhcnBvb2xzXCIgKVxuICAvLyAgICAgYXBwQ29udGFpbmVyRWwuaW5uZXJIVE1MID0gaHRtbFRlbXBsYXRlXG4gIC8vXG4gIC8vICAgfSlcbiAgLy8gICByZXR1cm5cbiAgLy8gfVxuICAvL1xuICAvLyBpZiAoY3VycmVudFJvdXRlID09PSAnZmxpZ2h0cycpIHtcbiAgLy8gICAkLmdldEpTT04oJ2h0dHA6Ly9hcGlzLmlzL2ZsaWdodD9sYW5ndWFnZT1lbiZ0eXBlPWRlcGFydHVyZXMnKS50aGVuKGZ1bmN0aW9uKHNlcnZlclJlcyl7XG4gIC8vICAgICBjb25zb2xlLmxvZyhzZXJ2ZXJSZXMpO1xuICAvL1xuICAvLyAgICAgdmFyIGh0bWxUZW1wbGF0ZSA9IGNyZWF0ZUljZWxhbmRQYWdlVGVtcGxhdGUoIHNlcnZlclJlcy5yZXN1bHRzLCBcIkZsaWdodHNcIiApXG4vLyAgICAgICBhcHBDb250YWluZXJFbC5pbm5lckhUTUwgPSBodG1sVGVtcGxhdGVcbi8vXG4vLyAgICAgfSlcbi8vICAgICByZXR1cm5cbi8vICAgfVxuLy9cbi8vICAgaWYgKHRydWUpIHtcbi8vICAgICAkLmdldEpTT04oJ2h0dHA6Ly9hcGlzLmlzL2ZsaWdodD9sYW5ndWFnZT1lbiZ0eXBlPWFycml2YWxzJykudGhlbihmdW5jdGlvbihzZXJ2ZXJSZXMpe1xuLy8gICAgICAgY29uc29sZS5sb2coc2VydmVyUmVzKTtcbi8vXG4vLyAgICAgICB2YXIgaHRtbFRlbXBsYXRlID0gY3JlYXRlSWNlbGFuZFBhZ2VUZW1wbGF0ZSggc2VydmVyUmVzLnJlc3VsdHMsIFwiRmxpZ2h0c1wiIClcbi8vICAgICAgIGFwcENvbnRhaW5lckVsLmlubmVySFRNTCA9IGh0bWxUZW1wbGF0ZVxuLy9cbi8vICAgICB9KVxuLy8gICAgIHJldHVyblxuLy8gICB9XG4vLyB9XG5cbnZhciBwYWdlQ29udGVudE9iaiA9IHtcbiAgaG9tZTpgXG4gIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0IGhvbWVDb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgIFRIRSBCQVNJQyBGQUNUU1xuICAgIDwvZGl2PlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+TmF0aXZlIE5hbWU8L3RkPlxuICAgICAgICAgIDx0ZD5Jc2xhbmQ8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPkRlbW9ueW08L3RkPlxuICAgICAgICAgIDx0ZD5JY2VsYW5kZXI8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPkFyZWEgKG0yKTwvdGQ+XG4gICAgICAgICAgPHRkPjEwMzAwMDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+Q2FsbGluZyBDb2RlPC90ZD5cbiAgICAgICAgICA8dGQ+MzUyPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG4gIGAsXG5cbiAgY29uY2VydHM6YFxuICAgIDxoMj5URVNUIDM8L2gyPlxuICAgIGAsXG5cbiAgY2FycG9vbHM6YFxuICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdCBjYXJwb29scy1jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgIENBUlBPT0xTXG4gICAgPC9kaXY+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRoPlRpbWUgb2YgRGVwYXJ0dXJlPC90aD5cbiAgICAgICAgPHRoPkZyb208L3RoPlxuICAgICAgICA8dGg+VG88L3RoPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD5USU1FPC90ZD5cbiAgICAgICAgICA8dGQ+RnJvbSBMb2NhdGlvbjwvdGQ+XG4gICAgICAgICAgPHRkPlRvIExvY2F0aW9uPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD5USU1FPC90ZD5cbiAgICAgICAgICA8dGQ+RnJvbSBMb2NhdGlvbjwvdGQ+XG4gICAgICAgICAgPHRkPlRvIExvY2F0aW9uPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+ICBgLFxuXG4gIGZsaWdodHM6YFxuICA8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQgZmxpZ2h0cy1jb250YWluZXInPlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICBGbGlnaHRzXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGZsaWdodHMtY29sdW1uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdCBmbGlnaHRzLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBmbGlnaHRzLXBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIEFycml2YWxzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgICA8dGg+QXJyaXZhbCBUaW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoPk9yaWdpbjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5BaXJsaW5lPC90aD5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+RGF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlRpbWU8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5PcmlnaW48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5BaXJsaW5lPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+RGF0ZTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5UaW1lPC90ZD5cbiAgICAgICAgICAgICAgPHRkPk9yaWdpbjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5BaXJsaW5lPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0IGZsaWdodHNDb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIERlcGFydHVyZXNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5BcnJpdmFsIFRpbWU8L3RoPlxuICAgICAgICAgICAgICA8dGg+T3JpZ2luPC90aD5cbiAgICAgICAgICAgICAgPHRoPkFpcmxpbmU8L3RoPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5EYXRlPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+VGltZTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPk9yaWdpbjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPkFpcmxpbmU8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5EYXRlPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlRpbWU8L3RkPlxuICAgICAgICAgICAgICA8dGQ+T3JpZ2luPC90ZD5cbiAgICAgICAgICAgICAgPHRkPkFpcmxpbmU8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYFxufVxuXG5cbnZhciB0YWJzQ29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiY29udGVudF9fbGlzdCcpXG5cbmZ1bmN0aW9uIHJlbmRlckFjdGl2ZVRhYih0aGVDdXJyZW50Um91dGUpe1xuXG5cdHZhciBwcmV2aW91c0FjdGl2ZVRhYkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzPVwidGFiY29udGVudF9fdGFiIGFjdGl2ZVwiXScpXG5cdHByZXZpb3VzQWN0aXZlVGFiRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblxuXHR2YXIgY3VycmVudEFjdGl2ZVRhYkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm91dGU9XCIke3RoZUN1cnJlbnRSb3V0ZX1cIl1gKVxuXHRjdXJyZW50QWN0aXZlVGFiRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbn1cblxuXG5mdW5jdGlvbiByZW5kZXJDb250ZW50VG8oZG9tRWwsIHRoZVJvdXRlLCB0aGVDb250ZW50KXtcblxuXHRpZiggdGhlUm91dGUgPT09ICdob21lJyApeyAgcmV0dXJuIGRvbUVsLmlubmVySFRNTCA9IHRoZUNvbnRlbnRbdGhlUm91dGVdXG5cbiAgfVxuXHRpZiggdGhlUm91dGUgPT09ICdjb25jZXJ0cycgKXsgIHJldHVybiBkb21FbC5pbm5lckhUTUwgPSB0aGVDb250ZW50W3RoZVJvdXRlXVxuXG4gIH1cblx0aWYoIHRoZVJvdXRlID09PSAnY2FycG9vbHMnICl7XG4gICAgcmV0dXJuICBkb21FbC5pbm5lckhUTUwgPSB0aGVDb250ZW50W3RoZVJvdXRlXVxuXG4gIH1cblx0aWYoIHRoZVJvdXRlID09PSAnZmxpZ2h0cycgKXsgIHJldHVybiBkb21FbC5pbm5lckhUTUwgPSB0aGVDb250ZW50W3RoZVJvdXRlXVxuXG4gIH1cblxuXHRkb21FbC5pbm5lckhUTUwgPSB0aGVDb250ZW50LmhvbWVcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJ1xufVxuXG5cbnZhciBjb250cm9sbGVyUm91dGVyID0gZnVuY3Rpb24oKXtcblx0dmFyIGN1cnJlbnRSb3V0ZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpXG5cdGlmKGN1cnJlbnRSb3V0ZS5sZW5ndGggPT09IDApeyBjdXJyZW50Um91dGUgPSAnaG9tZScgfVxuXHR2YXIgcGFnZUNvbnRlbnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX2NvbnRlbnQnKVxuXHRyZW5kZXJBY3RpdmVUYWIoY3VycmVudFJvdXRlKVxuXHRyZW5kZXJDb250ZW50VG8ocGFnZUNvbnRlbnRFbCwgY3VycmVudFJvdXRlLCBwYWdlQ29udGVudE9iailcbn1cblxuXG50YWJzQ29udGFpbmVyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpe1xuXHR2YXIgY2xpY2tlZFRhYkVsID0gZXZ0LnRhcmdldFxuXHR2YXIgcm91dGUgPSBjbGlja2VkVGFiRWwuZGF0YXNldC5yb3V0ZVxuXHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IHJvdXRlXG59KVxuXG5jb250cm9sbGVyUm91dGVyKClcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgY29udHJvbGxlclJvdXRlcilcbiJdfQ==
