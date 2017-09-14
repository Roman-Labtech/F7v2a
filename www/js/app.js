// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
});

function phonecall()
{    window.plugins.CallNumber.callNumber(onSuccess, onError,88313367613, true);
}

document.addEventListener("deviceready", onDeviceReady, false); 
function onDeviceReady() { 
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.getElementById("openBrowser").addEventListener("click", openBrowser);
    document.getElementById("QRalert").addEventListener("click", dialogAlert);
    console.log(navigator.notification);
}