

$(document).ready(function () {

    var url = $(location).attr('href');

	$('#progressbarDiv').addClass('hidden');
        $('.a-comments').parent().removeClass('col-md-3');
        $('.a-comments').parent().addClass('hidden');
	$('.a-pills').parent().removeClass('col-md-9');
        $('.a-pills').parent().addClass('col-md-12');	
	$(".a-screen-titlebar-wrapper").addClass('hidden');

    if (url.indexOf('ScreenId=2000441') >= 0) {
        
	
		
	$('#panel-wrap-2035785>div').removeClass('a-panel panel panel-default');
	$('#panel-wrap-2035785').addClass('col-md-5');
	$('#panel-wrap-2035786').addClass('col-md-7');


      //  $('#a-widget-3276').parent().addClass('col-md-5');
       // $('#frmOnlineProfileSignIn').parent().addClass('hidden-sm');
       // $('#frmOnlineProfileSignIn').parent().addClass('hidden-xs');
       // $('.col-md-6').addClass('col-lg-9');        
       // $(".col-lg-9").css({"float": "unset", "margin": "0 auto"});



	// panel-wrap-2035786
    } 

   
});



