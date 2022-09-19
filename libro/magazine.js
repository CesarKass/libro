/*
 * Magazine sample
*/

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// crea el string 001.jpg
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


function pad(mi_str)
{
  mi_str = mi_str.toString();
  
  return mi_str.length < 3 ? pad("0" + mi_str, 3) : mi_str;
}


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// crea pagina
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


function addPage(page, book) {

	var id, pages = book.turn('pages');

	// Create a new element for this page
	var element = $('<div />', {});

	// Add the page to the flipbook
	if (book.turn('addPage', element, page)) {

		// Add the initial HTML
		// It will contain a loader indicator and a gradient
		element.html('<div class="gradient"></div><div class="loader"></div>');

		// Load the page
		loadPage(page, element);
	}

}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// carga la pagina
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


function loadPage(page, pageElement) {

	// Create an image element

	var img = $('<img />');

	img.mousedown(function(e) {
		e.preventDefault();
	});

	img.load(function() {
		
		// Set the size
		$(this).css({width: '100%', height: '100%'});

		// Add the image to the page after loaded

		$(this).appendTo(pageElement);

		// Remove the loader indicator
		
		pageElement.find('.loader').remove();
	});

	// Load the page

	var ag_page = "";
	
	if(page == 1)
	{
		
		ag_page = pad(0);  
		
		ag_page = ag_page.toString();
		console.log(0);
  
  	

  	// img.attr('src', './c/' + ag_clave + '/' + ag_page +'.jpg');	
  	img.attr('src', imganesA[0].img);	
	

	}
	else
	{

		ag_page = pad(page);  
  
	  	ag_page = ag_page.toString();
		  console.log(page);
		  console.log(imganesA[page]);
  	
		img.attr('src', imganesA[page].img);	
		// img.attr('src', './c/' + ag_clave + '/' + ag_page +'.jpg');	

	
	}
	


}

// Zoom in / Zoom out

function zoomTo(event) {

		


		setTimeout(function() {
			if ($('.magazine-viewport').data().regionClicked)
			{
				$('.magazine-viewport').data().regionClicked = false;
			} 
			else 
			{
				if ($('.magazine-viewport').zoom('value')==1) 
				{
					$('.magazine-viewport').zoom('zoomIn', event);
					
				} 
				else 
				{
					$('.magazine-viewport').zoom('zoomOut');
				}
			}
		}, 1);

}





// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// carga pagina grande
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 
var imgs_a = imganesA;
function loadLargePage(page, pageElement) {
	console.log(imgs_a);
	var img = $('<img />');

	img.load(function() {

		var prevImg = pageElement.find('img');
		$(this).css({width: '100%', height: '100%'});
		$(this).appendTo(pageElement);
		prevImg.remove();
		
	});

	// Loadnew page
	
	var ag_page = "";

	console.log(imganesA[0]);

	if(page == 1)
	{ 
	  	ag_page = pad(0);   
	  	ag_page = ag_page.toString(); 
  		// img.attr('src', 'https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/252115852_2944188722468929_8045817002413883909_n.jpg?stp=dst-jpg_s851x315&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHoGWVkKPIb-nfqjMlczNtNPynO6mvY8qU_Kc7qa9jypYC4_kQa9r90wyDAIClmm2wORr3IGA1bRZjNcNX5A3HU&_nc_ohc=k3gfQv1ttGcAX-F6mvI&_nc_ht=scontent.fmex10-1.fna&oh=00_AT-t0TF7FknfWbN9S_PvDdlrp63jJzEEri6Z2GH8wyQk2Q&oe=632DF57D');	  
		  img.attr('src', imganesA[0].img);
	}
	else
	{ 
		ag_page = pad(page);   
	  	ag_page = ag_page.toString(); 
		  img.attr('src', imganesA[page].img);
  		// img.attr('src', './c/' + ag_clave + '/' + ag_page +'.jpg');	 
		// img.attr('src', imganesA[0][ag_page].img);	
	}
	

}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// crea pagina pequeña...
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 



function loadSmallPage(page, pageElement) {
	
	var img = pageElement.find('img');

	img.css({width: '100%', height: '100%'});

	img.unbind('load');
	// Loadnew page

	var ag_page = "";


	if(page == 1)
	{

		ag_page = pad(0);  
  
	  ag_page = ag_page.toString();
  
  	

  	// img.attr('src', './c/' + ag_clave + '/' + ag_page +'.jpg');	
	img.attr('src', imganesA[0].img);
	

	}
	else
	{

		ag_page = pad(page);  
  
	  ag_page = ag_page.toString();
  
  	

  	// img.attr('src', './c/' + ag_clave + '/' + ag_page +'.jpg');	
	  img.attr('src', imganesA[page].img);

	
	}
	
}

// http://code.google.com/p/chromium/issues/detail?id=128488

function isChrome() {

	return navigator.userAgent.indexOf('Chrome')!=-1;

}

function disableControls(page) {
		if (page==1)
		{
			$('.previous-button').hide();
			$('.ag_previous-button').hide();
		}
		else
		{
			$('.previous-button').show();
			$('.ag_previous-button').show();
		}
					
		if (page==$('.magazine').turn('pages'))
		{
			$('.next-button').hide();
			$('.ag_next-button').hide();
		}
		else
		{
			$('.next-button').show();
			$('.ag_next-button').show();
		}
}

// Set the width and height for the viewport

function resizeViewport() {

	var width = $(window).width(),
		height = $(window).height(),
		options = $('.magazine').turn('options');

	$('.magazine').removeClass('animated');

	$('.magazine-viewport').css({
		width: width,
		height: height
	}).
	zoom('resize');


	if ($('.magazine').turn('zoom')==1) {
		var bound = calculateBound({
			width: options.width,
			height: options.height,
			boundWidth: Math.min(options.width, width),
			boundHeight: Math.min(options.height, height)
		});

		if (bound.width%2!==0)
			bound.width-=1;

			
		if (bound.width!=$('.magazine').width() || bound.height!=$('.magazine').height()) {

			$('.magazine').turn('size', bound.width, bound.height);

			if ($('.magazine').turn('page')==1)
				$('.magazine').turn('peel', 'br');

			$('.next-button').css({height: bound.height, backgroundPosition: '-38px '+(bound.height/2-32/2)+'px'});
			$('.previous-button').css({height: bound.height, backgroundPosition: '-4px '+(bound.height/2-32/2)+'px'});
		}

		$('.magazine').css({top: -bound.height/2, left: -bound.width/2});
	}

	var magazineOffset = $('.magazine').offset(),
		boundH = height - magazineOffset.top - $('.magazine').height(),
		marginTop = (boundH - $('.thumbnails > div').height()) / 2;

	if (marginTop<0) {
		$('.thumbnails').css({height:1});
	} else {
		$('.thumbnails').css({height: boundH});
		$('.thumbnails > div').css({marginTop: marginTop});
	}

	if (magazineOffset.top<$('.made').height())
		$('.made').hide();
	else
		$('.made').show();

	$('.magazine').addClass('animated');
	
}


// Number of views in a flipbook

function numberOfViews(book) {
	return book.turn('pages') / 2 + 1;
}

// Current view in a flipbook

function getViewNumber(book, page) {
	return parseInt((page || book.turn('page'))/2 + 1, 10);
}

function moveBar(yes) {
	if (Modernizr && Modernizr.csstransforms) {
		$('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 10000});
	}
}



// Width of the flipbook when zoomed in

function largeMagazineWidth() {
	
	return 2214;

}

// decode URL Parameters

function decodeParams(data) {

	var parts = data.split('&'), d, obj = {};

	for (var i =0; i<parts.length; i++) {
		d = parts[i].split('=');
		obj[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
	}

	return obj;
}

// Calculate the width and height of a square within another square

function calculateBound(d) {
	
	var bound = {width: d.width, height: d.height};

	if (bound.width>d.boundWidth || bound.height>d.boundHeight) {
		
		var rel = bound.width/bound.height;

		if (d.boundWidth/rel>d.boundHeight && d.boundHeight*rel<=d.boundWidth) {
			
			bound.width = Math.round(d.boundHeight*rel);
			bound.height = d.boundHeight;

		} else {
			
			bound.width = d.boundWidth;
			bound.height = Math.round(d.boundWidth/rel);
		
		}
	}
		
	return bound;
}