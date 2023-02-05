// Side Nav - Menu: https://www.w3schools.com/howto/howto_js_off-canvas.asp
function openNav() {
  document.getElementById("mySidenav").style.width = "380px";
  document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "inline-block";
}

// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1IjoiMjc4MjcxOHciLCJhIjoiY2xjcTFiNW5jMDFlejN2bGhwczN0ZHZ4biJ9.SOzRZB7fRS_dCqiW4RYlUg";

const map = new mapboxgl.Map({
  container: "map", // container element id
  style: "mapbox://styles/2782718w/cldeaptsw000201nv2hmoe00i",
  center: [-4.257743, 55.860397],
  zoom: 12
});

const data_url =
  "https://raw.githubusercontent.com/chancemwill/Glasgow-Tramways/main/Glasgow-Tram-Routes.geojson";
map.on("load", () => {
  map.addLayer({
    id: "Glasgow-Trams",
    type: "line",
    source: {
      type: "geojson",
      data: data_url
    },
    paint: {
      "line-width": 3.5,
      "line-color": "#92D050",
      "line-opacity": 0.9
    }
  });

  //Slider interaction code goes below

  //Define expressions and filters

  filterRoute = ["!=", ["get", "Line"], "placeholder"];

  //Update date filter when slider is dragged
  document.getElementById("slider").addEventListener("input", (event) => {
    const max = parseInt(event.target.value);

    const min = parseInt(event.target.value);

    //update the map

    filterMonth = [
      "all",
      ["<=", ["get", "Min"], min],
      [">=", ["get", "Max"], max]
    ];

    //filterMonth = [">=", ["get", "Max"], max];

    map.setFilter("Glasgow-Trams", ["all", filterMonth, filterRoute]);

    //Update text in the UI

    //Update Text in the UI based on Stack Overflow answer: https://stackoverflow.com/questions/62707474/how-to-assign-labels-on-a-range-slider

    var slider = document.getElementById("range");
    var display = document.getElementById("active-date");
    //var getVal = document.getElementById("max");

    if (min == 0) {
      display.innerText = "Prior to May 1938";
    }
    if (max == 1) {
      display.innerText = "May 1938";
    }
    if (max == 2) {
      display.innerText = "August 1938";
    }
    if (max == 3) {
      display.innerText = "October 1938";
    }
    if (max == 4) {
      display.innerText = "November 1938";
    }
    if (max == 5) {
      display.innerText = "February 1939";
    }
    if (max == 6) {
      display.innerText = "February 1940";
    }
    if (max == 7) {
      display.innerText = "June 1940";
    }
    if (max == 8) {
      display.innerText = "July 1940";
    }
    if (max == 9) {
      display.innerText = "May 1942";
    }
    if (max == 10) {
      display.innerText = "May 1943";
    }
    if (max == 11) {
      display.innerText = "June 1943";
    }
    if (max == 12) {
      display.innerText = "August 1943";
    }
    if (max == 13) {
      display.innerText = "September 1943";
    }
    if (max == 14) {
      display.innerText = "November 1943";
    }
    if (max == 15) {
      display.innerText = "December 1943";
    }
    if (max == 16) {
      display.innerText = "January 1944";
    }
    if (max == 17) {
      display.innerText = "April 1944";
    }
    if (max == 18) {
      display.innerText = "May 1944";
    }
    if (max == 19) {
      display.innerText = "November 1944";
    }
    if (max == 20) {
      display.innerText = "April 1945";
    }
    if (max == 21) {
      display.innerText = "June 1945";
    }
    if (max == 22) {
      display.innerText = "July 1945";
    }
    if (max == 23) {
      display.innerText = "September 1945";
    }
    if (max == 24) {
      display.innerText = "October 1945";
    }
    if (max == 25) {
      display.innerText = "March 1946";
    }
    if (max == 26) {
      display.innerText = "August 1946";
    }
    if (max == 27) {
      display.innerText = "December 1946";
    }
    if (max == 28) {
      display.innerText = "January 1947";
    }
    if (max == 29) {
      display.innerText = "April 1948";
    }
    if (max == 30) {
      display.innerText = "August 1948";
    }
    if (max == 31) {
      display.innerText = "November 1948";
    }
    if (max == 32) {
      display.innerText = "January 1949";
    }
    if (max == 33) {
      display.innerText = "February 1949";
    }
    if (max == 33) {
      display.innerText = "February 1949";
    }
    if (max == 33) {
      display.innerText = "February 1949";
    }
    if (max == 33) {
      display.innerText = "February 1949";
    }
    if (max == 33) {
      display.innerText = "February 1949";
    }
    if (max == 33) {
      display.innerText = "February 1949";
    }
    if (max == 33) {
      display.innerText = "February 1949";
    }
    if (max == 33) {
      display.innerText = "February 1949";
    }
    if (max == 33) {
      display.innerText = "February 1949";
    }
    if (max == 34) {
      display.innerText = "April 1949";
    }
    if (max == 35) {
      display.innerText = "May 1949";
    }
    if (max == 36) {
      display.innerText = "July 1949";
    }
    if (max == 37) {
      display.innerText = "August 1949";
    }
    if (max == 38) {
      display.innerText = "December 1949";
    }
    if (max == 39) {
      display.innerText = "March 1951";
    }
    if (max == 40) {
      display.innerText = "April 1951";
    }
    if (max == 41) {
      display.innerText = "July 1951";
    }
    if (max == 42) {
      display.innerText = "August 1951";
    }
    if (max == 43) {
      display.innerText = "November 1951";
    }
    if (max == 44) {
      display.innerText = "December 1951";
    }
    if (max == 45) {
      display.innerText = "May 1952";
    }
    if (max == 46) {
      display.innerText = "June 1952";
    }
    if (max == 47) {
      display.innerText = "November 1952";
    }
    if (max == 48) {
      display.innerText = "April 1953";
    }
    if (max == 49) {
      display.innerText = "July 1953";
    }
    if (max == 50) {
      display.innerText = "August 1953";
    }
    if (max == 51) {
      display.innerText = "October 1953";
    }
    if (max == 52) {
      display.innerText = "November 1953";
    }
    if (max == 53) {
      display.innerText = "February 1954";
    }
    if (max == 54) {
      display.innerText = "October 1954";
    }
    if (max == 55) {
      display.innerText = "March 1955";
    }
    if (max == 56) {
      display.innerText = "August 1955";
    }
    if (max == 57) {
      display.innerText = "April 1956";
    }
    if (max == 58) {
      display.innerText = "September 1956";
    }
    if (max == 59) {
      display.innerText = "November 1956";
    }
    if (max == 60) {
      display.innerText = "May 1957";
    }
    if (max == 61) {
      display.innerText = "August 1957";
    }
    if (max == 62) {
      display.innerText = "November 1957";
    }
    if (max == 63) {
      display.innerText = "March 1958";
    }
    if (max == 64) {
      display.innerText = "June 1958";
    }
    if (max == 65) {
      display.innerText = "September 1958";
    }
    if (max == 66) {
      display.innerText = "November 1958";
    }
    if (max == 67) {
      display.innerText = "January 1959";
    }
    if (max == 68) {
      display.innerText = "March 1959";
    }
    if (max == 69) {
      display.innerText = "May 1959";
    }
    if (max == 70) {
      display.innerText = "June 1959";
    }
    if (max == 71) {
      display.innerText = "September 1959";
    }
    if (max == 72) {
      display.innerText = "November 1959";
    }
    if (max == 73) {
      display.innerText = "December 1959";
    }
    if (max == 74) {
      display.innerText = "March 1960";
    }
    if (max == 75) {
      display.innerText = "June 1960";
    }
    if (max == 76) {
      display.innerText = "November 1960";
    }
    if (max == 77) {
      display.innerText = "March 1961";
    }
    if (max == 78) {
      display.innerText = "June 1961";
    }
    if (max == 79) {
      display.innerText = "October 1961";
    }
    if (max == 80) {
      display.innerText = "March 1962";
    }
    if (max == 81) {
      display.innerText = "June 1962";
    }
    if (max == 82) {
      display.innerText = "1 September 1962";
    }
    if (max == 83) {
      display.innerText = "2 September 1962";
    }

    var display = document.getElementById("active-info");
    //var getVal = document.getElementById("max");

    if (min == 0) {
      display.innerText =
        "Prior to May 1938, tram routes are organised by colour and letter code system.";
    }
    if (max == 1) {
      display.innerText =
        "3 May 1948: Route numbering system introduced. Region wide routes are numbered 1 - 21. Routes 30 and 31 introduced as temporary routes for 1938 Empire Exhibition.";
    }
    if (max == 2) {
      display.innerText = "8 August 1938: Route 3a extended to Anniesland.";
    }
    if (max == 3) {
      display.innerText = "31 October 1938: Routes 3a, 30, 31 discontinued.";
    }
    if (max == 4) {
      display.innerText =
        "21 November 1938: Route 12 service to Ibrox Stadium ends.";
    }
    if (max == 5) {
      display.innerText = "10 February 1939: Route 11 diverted to Ruchill. ";
    }
    if (max == 6) {
      display.innerText =
        "11 February 1940: Route 15 / 15a extended to Elderslie. Route 16 extended to Scoutstoun.";
    }
    if (max == 7) {
      display.innerText =
        "23 June 1940: Route 21 terminus cut to Hillington Road.";
    }
    if (max == 8) {
      display.innerText =
        "14 July 1940: Route 11 altered with termini at Sinclair Dr. and Gairbraid Ave.";
    }
    if (max == 9) {
      display.innerText = "4 May 1942: Route 15 extended to Shettleston.";
    }
    if (max == 10) {
      display.innerText =
        "2 May 1943: Service reorganisation. Route 11 altered to Sinclair Dr. and Milngavie. Route 12 extended to Linthouse. Route 13 service to Milngavie ends. Route 14 rerouted. Route 15 extended to Garrowhill. Route 3a re-introduced on 30 May 1943.";
    }
    if (max == 11) {
      display.innerText =
        "6 June 1943: Route 21 re-extended to former terminus at Renfrew Cross";
    }
    if (max == 12) {
      display.innerText =
        "12 August 1943: Reorganisation of services: Routes 1a, 4a, 4b, 8a, 15a replaced by new routes 22, 23, 24, 25, 26, 27, 28, 29, and 32. Routes 30 and 31 reintroduced.";
    }
    if (max == 13) {
      display.innerText = "7 September 1943: Route 13 extended to Maryhill.";
    }
    if (max == 14) {
      display.innerText = "7 November 1943: Route 18 cut to Rutherglen";
    }
    if (max == 15) {
      display.innerText = "5 December 1943: New route 40 replaced 3a.";
    }
    if (max == 16) {
      display.innerText =
        "2 January 1944: Route 10a introduced. Route 10 terminus moved to Kelvinside.";
    }
    if (max == 17) {
      display.innerText = "30 April 1944: Route 18 re-extended to Burnside.";
    }
    if (max == 18) {
      display.innerText = "14 May 1944: Route 9 extended to Carmyle.";
    }
    if (max == 19) {
      display.innerText = "26 November 1944: Route 33 introduced.";
    }
    if (max == 20) {
      display.innerText = "8 April 1945: Route 30 extended to Cambusland.";
    }
    if (max == 21) {
      display.innerText =
        "10 June 1945: Route 5 rerouted to Clarkston and Kelvinside. Circular Hyndland service ends. Route 10 rerouted between Rutherglen and Kelvinside";
    }
    if (max == 22) {
      display.innerText = "29 July 1945: Route 16 rerouted.";
    }
    if (max == 23) {
      display.innerText =
        "9 September 1945: Route 5 Terminus moved to Hyndland Station.";
    }
    if (max == 24) {
      display.innerText =
        "28 October 1945: Route 5a merged with Route 5. Route 5 circular Hyndland service resumes.";
    }
    if (max == 25) {
      display.innerText =
        "17 March 1946: Route 34 introduced. Route 22 extended to Lambhill. Route 31 replaced by new services by routs 27 and 32.";
    }
    if (max == 26) {
      display.innerText =
        "18 August 1946: Construction of Eglinton Toll barrier. Routes 5, 11, 14, and 24 diverted.";
    }
    if (max == 27) {
      display.innerText = "8 December 1946: Route 17 extended to Whiteinch.";
    }
    if (max == 28) {
      display.innerText =
        "12 January 1947: Route 14 rerouted with introduction of route 14a. Route 23 rerouted to Airdrie and Gairbraid Ave.";
    }
    if (max == 29) {
      display.innerText = "4 April 1948: Route 40 extended to Maryhill.";
    }
    if (max == 30) {
      display.innerText =
        "29 August 1948: Route 29 service to Uddingston ends.";
    }
    if (max == 31) {
      display.innerText = "11 November 1948: Route 14b introduced.";
    }
    if (max == 32) {
      display.innerText =
        "23 January 1949: Network reorganisation. Routes 35 and 36 introduced. Route 10a discontinued. Route 10 rerouted to Parkhead with closure of tram line on Crown St. Route 26 extended to Oatlands. Route 30 service to Cambuslang cut. Route 34 re-routed.";
    }
    if (max == 33) {
      display.innerText =
        "20 February 1949: Route 2 ends and replaced by the trolleybus. Route 14b ends, replaced by route 31. Route 19 ends, replaced by bus service 27. Route 31 re-introduced. Alteration of Routes 32 and 33.";
    }
    if (max == 34) {
      display.innerText =
        "3 April 1949: Route 14 extended to Cross Stobs. Route 28 cut to Glenfield.";
    }
    if (max == 35) {
      display.innerText =
        "29 May 1949: Route 34 new service pattern between Auchenshuggle adn Alexandra Park. Route 35 ends.";
    }
    if (max == 36) {
      display.innerText =
        "31 July 1949: Route 31 extneded to Canal Bridge, Blairdardie.";
    }
    if (max == 37) {
      display.innerText = "21 August 1949: Route 31 cut to Pollokshaws.";
    }
    if (max == 38) {
      display.innerText =
        "4 December 1949: Route 20 ends, replaced by new bus service 20.";
    }
    if (max == 39) {
      display.innerText =
        "4 March 1951: Route 34 service to Alexandra Park cut to Anderston Cross";
    }
    if (max == 40) {
      display.innerText =
        "1 April 1951: Routes 4 and 16 extended to Springburn";
    }
    if (max == 41) {
      display.innerText =
        "1 July 1951: Removal of trams service in the Gorbals. Routes 5, 13 and 24 rerouted. Route 11 discontinued. ";
    }
    if (max == 42) {
      display.innerText =
        "5 August 1951: Route 24 extended to Langside. Route 24a introduced.";
    }
    if (max == 43) {
      display.innerText =
        "7 November 1951: Route 7 service to Dalmuir West ends.";
    }
    if (max == 44) {
      display.innerText = "2 December 1951: Route 24a replaced by bus 43.";
    }
    if (max == 45) {
      display.innerText =
        "4 May 1952: Route 34 discontinued, service combined with route 9.";
    }
    if (max == 46) {
      display.innerText =
        "15 June 1952: Route 9 terminus moved to Auchenshuggle.";
    }
    if (max == 47) {
      display.innerText =
        "2 November 1952: Route 31 terminus moved ot Nether Auldhouse Rd.";
    }
    if (max == 48) {
      display.innerText =
        "19 April 1953: Route 36 discontinued. Route 1 extended to Dalmarnock. Route 10 rerouted on London Rd.";
    }
    if (max == 49) {
      display.innerText =
        "5 July 1953: Route 5 service to Clarkston ends. Routes 13 and 23 rerouted. Trams removed from West Nile St.";
    }
    if (max == 50) {
      display.innerText = "2 August 1953: Route 32 cut to Springburn.";
    }
    if (max == 51) {
      display.innerText =
        "4 October 1953: Route 29 reorganised and combined with route 13. ";
    }
    if (max == 52) {
      display.innerText = "4 November 1953: Route 13 replaced by rotue 29.";
    }
    if (max == 53) {
      display.innerText =
        "7 February 1954: Route 4a extend to north Paisley. Route 40 terminus moved to Garscube Gate.";
    }
    if (max == 54) {
      display.innerText =
        "10 October 1954: Network reorganisation. Routes 17, 21, 23, 25, 32 rerouted.";
    }
    if (max == 55) {
      display.innerText =
        "20 March 1955: Route 25 service to Bishopbriggs restored.";
    }
    if (max == 56) {
      display.innerText =
        "7 August 1955: Route 18 reorganised upon introduction of Route 18a. Trams removed from Rutherglen Main St.";
    }
    if (max == 57) {
      display.innerText = "8 April 1956: Route 21 service reorganised.";
    }
    if (max == 58) {
      display.innerText =
        "26 September 1956: Route 14 service to Cross Stobs and University of Glasgow ends";
    }
    if (max == 59) {
      display.innerText =
        "3 November 1956: Route 15 service to Airdrie, route 17 service to Cambusland, and route 29 service to Milngavie ends. Airdrie local route discontinued.";
    }
    if (max == 60) {
      display.innerText =
        "May 1957: Route 4 service to Paisley and Renfrew ends.";
    }
    if (max == 61) {
      display.innerText = "18 August 1957: Route 23 extended to Maryhill.";
    }
    if (max == 62) {
      display.innerText = "16 November 1957: Route 5 ends, replaced by bus 43.";
    }
    if (max == 63) {
      display.innerText =
        "16 March 1958: Tram routes 24 and 27 replaced by buses.";
    }
    if (max == 64) {
      display.innerText =
        "14 June 1958: Route 7 replaced with bus service. Route 9 rerouted upon discontinuation of service to Dalmuir.";
    }
    if (max == 65) {
      display.innerText =
        "6 September 1958: Tram route 4 replaced by bus service.";
    }
    if (max == 66) {
      display.innerText =
        "15 November 1958: Tram routes 12, 17, 22, 26, 32 ends. Route 26 reorganised.";
    }
    if (max == 67) {
      display.innerText =
        "4 January 1959: Eldon Street Bridge closed, Route 3 rerouted to Park Rd. Route 14 terminus moved to Arden.";
    }
    if (max == 68) {
      display.innerText =
        "14 March 1959: Tram route 8 replaced by bus service. 15 March 1959: Route 25 terminus extended to Milverton Rd.";
    }
    if (max == 69) {
      display.innerText = "2 May 1959: Tram route 33 discontinued.";
    }
    if (max == 70) {
      display.innerText = "6 June 1959: Tram route 25 replaced by bus service.";
    }
    if (max == 71) {
      display.innerText = "6 September 1959: Route 16 cut to Springburn.";
    }
    if (max == 72) {
      display.innerText =
        "1 November 1959: Tram routes 6 and 14 replaced by bus service. Trams removed from Sauchiehall St., route 30 altered.";
    }
    if (max == 73) {
      display.innerText = "5 December 1959: Tram route 31 ends.";
    }
    if (max == 74) {
      display.innerText =
        "12 March 1960: Tram Route 30 replaced by bus service.";
    }
    if (max == 75) {
      display.innerText =
        "4 June 1960: Tram routes 3 and 10 discontinued. 5 June 1960: Route 23 rerouted after trams removed from Renfield St.";
    }
    if (max == 76) {
      display.innerText =
        "6 November 1960: Tram route 23 replaced by bus service. Route 29 service to Broomhouse discontinued.";
    }
    if (max == 77) {
      display.innerText =
        "11 March 1961: Tram route 16 replaced by bus service.";
    }
    if (max == 78) {
      display.innerText =
        "3 June 1961: Tram routes 8 and 8a replaced by bus service.";
    }
    if (max == 79) {
      display.innerText =
        "22 October 1961: Route 26 service to Farme Cross discontinued. Tram route 29 replaced by bus service.";
    }
    if (max == 80) {
      display.innerText =
        "10 March 1962: Tram route 15 replaced by bus service.";
    }
    if (max == 81) {
      display.innerText = "June 1962: Tram route 26 ends.";
    }
    if (max == 82) {
      display.innerText = "1 September 1962: Last tram service route 9 ends.";
    }
    if (max == 83) {
      display.innerText =
        "2 September 1962: Transition to bus and trollybus services complete. Discontinuation of tram routes.";
    }
  });

  //Radio button interaction code goes below

  document.getElementById("filters").addEventListener("change", (event) => {
    const Line = event.target.value;
    console.log(Line);

    // update the map filter

    if (Line == "all") {
      filterRoute = ["!=", ["get", "Line"], "placeholder"];
    } else if (Line == "1") {
      filterRoute = ["==", ["get", "Line"], "1"];
    } else if (Line == "1A") {
      filterRoute = ["==", ["get", "Line"], "1A"];
    } else if (Line == "2") {
      filterRoute = ["==", ["get", "Line"], "2"];
    } else if (Line == "3") {
      filterRoute = ["==", ["get", "Line"], "3"];
    } else if (Line == "3A") {
      filterRoute = ["==", ["get", "Line"], "3A"];
    } else if (Line == "4") {
      filterRoute = ["==", ["get", "Line"], "4"];
    } else if (Line == "4A") {
      filterRoute = ["==", ["get", "Line"], "4A"];
    } else if (Line == "4B") {
      filterRoute = ["==", ["get", "Line"], "4B"];
    } else if (Line == "5") {
      filterRoute = ["==", ["get", "Line"], "5"];
    } else if (Line == "5A") {
      filterRoute = ["==", ["get", "Line"], "5A"];
    } else if (Line == "6") {
      filterRoute = ["==", ["get", "Line"], "6"];
    } else if (Line == "7") {
      filterRoute = ["==", ["get", "Line"], "7"];
    } else if (Line == "8") {
      filterRoute = ["==", ["get", "Line"], "8"];
    } else if (Line == "8A") {
      filterRoute = ["==", ["get", "Line"], "8A"];
    } else if (Line == "9") {
      filterRoute = ["==", ["get", "Line"], "9"];
    } else if (Line == "9A") {
      filterRoute = ["==", ["get", "Line"], "9A"];
    } else if (Line == "9B") {
      filterRoute = ["==", ["get", "Line"], "9B"];
    } else if (Line == "10") {
      filterRoute = ["==", ["get", "Line"], "10"];
    } else if (Line == "10A") {
      filterRoute = ["==", ["get", "Line"], "10A"];
    } else if (Line == "11") {
      filterRoute = ["==", ["get", "Line"], "11"];
    } else if (Line == "12") {
      filterRoute = ["==", ["get", "Line"], "12"];
    } else if (Line == "13") {
      filterRoute = ["==", ["get", "Line"], "13"];
    } else if (Line == "14") {
      filterRoute = ["==", ["get", "Line"], "14"];
    } else if (Line == "14A") {
      filterRoute = ["==", ["get", "Line"], "14A"];
    } else if (Line == "14B") {
      filterRoute = ["==", ["get", "Line"], "14B"];
    } else if (Line == "15") {
      filterRoute = ["==", ["get", "Line"], "15"];
    } else if (Line == "15A") {
      filterRoute = ["==", ["get", "Line"], "15A"];
    } else if (Line == "16") {
      filterRoute = ["==", ["get", "Line"], "16"];
    } else if (Line == "17") {
      filterRoute = ["==", ["get", "Line"], "17"];
    } else if (Line == "18") {
      filterRoute = ["==", ["get", "Line"], "18"];
    } else if (Line == "18A") {
      filterRoute = ["==", ["get", "Line"], "18A"];
    } else if (Line == "19") {
      filterRoute = ["==", ["get", "Line"], "19"];
    } else if (Line == "20") {
      filterRoute = ["==", ["get", "Line"], "20"];
    } else if (Line == "21") {
      filterRoute = ["==", ["get", "Line"], "21"];
    } else if (Line == "22") {
      filterRoute = ["==", ["get", "Line"], "22"];
    } else if (Line == "23") {
      filterRoute = ["==", ["get", "Line"], "23"];
    } else if (Line == "24") {
      filterRoute = ["==", ["get", "Line"], "24"];
    } else if (Line == "24A") {
      filterRoute = ["==", ["get", "Line"], "24A"];
    } else if (Line == "25") {
      filterRoute = ["==", ["get", "Line"], "25"];
    } else if (Line == "26") {
      filterRoute = ["==", ["get", "Line"], "26"];
    } else if (Line == "26A") {
      filterRoute = ["==", ["get", "Line"], "26A"];
    } else if (Line == "27") {
      filterRoute = ["==", ["get", "Line"], "27"];
    } else if (Line == "28") {
      filterRoute = ["==", ["get", "Line"], "28"];
    } else if (Line == "29") {
      filterRoute = ["==", ["get", "Line"], "29"];
    } else if (Line == "30") {
      filterRoute = ["==", ["get", "Line"], "30"];
    } else if (Line == "31") {
      filterRoute = ["==", ["get", "Line"], "31"];
    } else if (Line == "32") {
      filterRoute = ["==", ["get", "Line"], "32"];
    } else if (Line == "33") {
      filterRoute = ["==", ["get", "Line"], "33"];
    } else if (Line == "34") {
      filterRoute = ["==", ["get", "Line"], "34"];
    } else if (Line == "35") {
      filterRoute = ["==", ["get", "Line"], "35"];
    } else if (Line == "36") {
      filterRoute = ["==", ["get", "Line"], "36"];
    } else if (Line == "40") {
      filterRoute = ["==", ["get", "Line"], "40"];
    } else if (Line == "Paisley Local (North - South)") {
      filterRoute = ["==", ["get", "Line"], "Paisley Local (North - South)"];
    } else if (Line == "Paisley Local (East - West)") {
      filterRoute = ["==", ["get", "Line"], "Paisley Local (East - West)"];
    } else if (Line == "Airdrie Local") {
      filterRoute = ["==", ["get", "Line"], "Airdrie Local"];
    } else {
      console.log("error");
    }
    map.setFilter("Glasgow-Trams", ["all", filterRoute]);
  });

  map.addSource("click", {
    type: "geojson",
    data: { type: "FeatureCollection", features: [] }
  });

  map.addLayer({
    id: "Click-Trams",
    type: "line",
    source: "click",
    layout: {},
    paint: {
      "line-color": "black",
      "line-width": 4
    }
  });
  //Popup Java script based on: https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/

  map.on("click", "Glasgow-Trams", (event) => {
    // Copy coordinates array.
    const coordinates = event.features[0].geometry.coordinates.slice();
    const feature = event.features[0];
    var middle = coordinates[Math.round((coordinates.length - 1) / 2)];
    console.log(middle);

    new mapboxgl.Popup({
      offset: [0, -5],
      className: "my-popup"
    })
      .setLngLat(middle)
      .setHTML(
        `<h7>Route
      ${feature.properties.Line}</h7>
      <h6>Start Date:
      ${feature.properties.Start_Date}</h6>
      <h6>End Date:
      ${feature.properties.End_Date}</h6>
      <p>
      ${feature.properties.Comment}</p>`
      )
      .addTo(map);
  });

  map.on("mouseenter", "Glasgow-Trams", () => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "Glasgow-Trams", () => {
    map.getCanvas().style.cursor = "";
  });

  //Map controls - Lab 1

  const geocoder = new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    placeholder: "Search for places in Glasgow", // Placeholder text for the search bar
    proximity: {
      longitude: 55.8642,
      latitude: 4.2518
    } // Coordinates of Glasgow center
  });

  map.addControl(geocoder, "top-right");
  map.addControl(new mapboxgl.NavigationControl(), "top-right");

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    }),
    "top-right"
  );

  //Collapsible Menu

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });

    //Toggle Hide and Show

    var myFunction = (myfunction = () => {
      var widget = document.getElementById("InfoWidget");
      if (widget.style.display === "none") {
        widget.style.display = "block";
      } else {
        widget.style.display = "none";
      }
    });
  }
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("infoBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
