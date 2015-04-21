/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();
        
        // Calculates Reading Time
        $('.post-content').readingTime({
            readingTimeTarget: '.post-reading-time',
            wordCountTarget: '.post-word-count',
        });
        
        // Creates Captions from Alt tags
        $(".post-content img").each(function() {
            // Let's put a caption if there is one
            if($(this).attr("alt"))
              $(this).wrap('<figure class="image"></figure>')
              .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
        });
                function GetIEVersion() {
	var sAgent = window.navigator.userAgent;
	var Idx = sAgent.indexOf("MSIE");
	// If IE, return version number.
		if (Idx > 0)
			return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
		// If IE 11 then look for Updated user agent string.
		else if (!!navigator.userAgent.match(/Trident\/7\./))
			return 11;
		else
			return 0; //It is not IE
		}
		if (GetIEVersion() > 0)
		var txt="It looks like you are using Internet Explorer, for the best experience, you should view this site in ";
		var or=" or ";
		var firefox="<a href=\"https://www.mozilla.org/en-US/firefox/new/\">Firefox</a>";
		var chrome="<a href=\"http://www.google.com/chrome/\">Chrome</a>";
		var cancel = "<i class=\"icon-cancel-circled\" onclick=\"parentNode.remove()\"></i>";
		$("headerIE").html(txt+chrome+or+firefox+cancel);
		if (GetIEVersion() == 0)
		$('#headerIE').html('');
    });

}(jQuery));
