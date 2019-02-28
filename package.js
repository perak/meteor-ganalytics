Package.describe({
  summary: "Google Analytics with DNT support. Forked from datariot:ganalytics v0.3.0",
  version: "0.3.0",
  name: "perak:ganalytics", 
  git: 'https://github.com/perak/meteor-ganalytics.git'
});

Package.onUse(function (api) {

  api.addFiles(['ganalytics.js'], 'client');
  
  api.export(['GAnalytics'], 'client');

});
