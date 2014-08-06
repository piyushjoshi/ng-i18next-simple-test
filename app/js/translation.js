$(document).ready(function(){
  language_complete = navigator.language.split("-");
  language = (language_complete[0]);
  console.log("Sprache (root): %s", language);

  i18n.init({ lng: language, debug: true }, function() {
      // save to use translation function as resources are fetched
	  $("#sampleMessage").i18n();
  });
});