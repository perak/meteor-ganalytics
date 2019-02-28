Package.describe({
  summary: "Publish pageviews and events to Google Analytics. Forked from datariot:ganalytics and added DNT support.",
  version: "0.3.0",
  name: "perak:ganalytics", 
  git: 'https://github.com/perak/meteor-ganalytics.git'
});

Package.onUse(function (api) {

  api.addFiles(['ganalytics.js'], 'client');
  
  api.export(['GAnalytics'], 'client');

});
