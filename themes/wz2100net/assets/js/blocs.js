// Page ready

$(function(){
	extraNavFuncs(); // Extra Nav Functions
	setUpSpecialNavs(); // Set Up Special NavBars 
	setUpDropdownSubs(); // Set Up Dropdown Menu Support
	
	$('a[onclick^="scrollToTarget"]').click(function(e){e.preventDefault()}); // Prevent page jump on scroll to links
	$('.nav-item [data-active-page]').addClass($('.nav-item [data-active-page]').attr('data-active-page')); // Apply Active Link Classes
	$('[data-toggle="tooltip"]').tooltip(); // Initialise Tool tips
});

// Loading page complete
$(window).on('load', function()
{
	animateWhenVisible();  // Activate animation when visible	
	$('#page-loading-blocs-notifaction').remove(); // Remove page loading UI
})

// Set Up Special NavBars 
function setUpSpecialNavs()
{
	$('.navbar-toggler').click(function(e)
	{ 
		var targetNav = $(this).closest('nav');
		var targetMenu = targetNav.find('ul.site-navigation');
		var newMenu = targetMenu.clone();
	
		if (targetMenu.parent().is('.fullscreen-nav, .sidebar-nav')) // Nav is Special
		{
			e.stopPropagation(); // Dont do this is normal menu in use
			targetMenu.parent().addClass('nav-special');
			
			if (!$(this).hasClass('selected-nav')) // Open Menu
			{
				$(this).addClass('selected-nav');
				var navClasses = targetNav.attr('class').replace('navbar','').replace('row','');
				var menuClasses = targetMenu.parent().attr('class').replace('navbar-collapse','').replace('collapse','');
				
				if ($('.content-tint').length =-1)
				{
					$('body').append('<div class="content-tint"></div>');
				}
				
				newMenu.insertBefore('.page-container').wrap('<div class="blocsapp-special-menu '+navClasses+'"><blocsnav class="'+menuClasses+'">');
				$('blocsnav').prepend('<a class="close-special-menu animated fadeIn" style="animation-delay:0.5s;"><div class="close-icon"></div></a>');
				
				animateNavItems(); // Animate Nav Items

				setTimeout(function(){
					$('.blocsapp-special-menu blocsnav').addClass('open');
					$('.content-tint').addClass('on');
					$('body').addClass('lock-scroll');
				}, 10);
			}
			else // Close menu
			{
				$('.blocsapp-special-menu blocsnav').removeClass('open');
				$('.selected-nav').removeClass('selected-nav');
				
				setTimeout(function(){
					$('.blocsapp-special-menu').remove();
					$('body').removeClass('lock-scroll');
					$('.nav-special').removeClass('nav-special');
				}, 300);
			}
		}
	});
	
	// Close Special Menu with Tint Click	
	$('body').on("mousedown touchstart",".content-tint, .close-special-menu",function(e)
	{	
		$('.content-tint').removeClass('on');
		$('.selected-nav').click();
	
		setTimeout(function(){
			$('.content-tint').remove();
		}, 10);
	}
	).on("click",".blocsapp-special-menu a",function(e) // Close Menu On Link Click
	{	
		if (!$(e.target).closest('.dropdown-toggle').length)
		{
			$('.close-special-menu').mousedown();
		} 
	});
	
	// Animate Nav Items
	function animateNavItems()
	{
		var animationStyle = 'fadeInRight';
		var delay = 0;
		var increaseVal = 60;
	
		if ($('.blocsapp-special-menu blocsnav').hasClass('fullscreen-nav'))
		{
			animationStyle = 'fadeIn';
			increaseVal = 100;
		}
		else if ($('.blocsapp-special-menu').hasClass('nav-invert')) // Inverted Nav
		{
			animationStyle = 'fadeInLeft';
		}
	
		$('.blocsapp-special-menu blocsnav li').each(function()
		{
			if ($(this).parent().hasClass('dropdown-menu')) // Not A drop down
			{
				$(this).addClass('animated fadeIn');	
			}
			else
			{
				delay += increaseVal; 
				$(this).attr('style','animation-delay:'+delay+'ms').addClass('animated '+animationStyle);	
			}
		});
	}
}


// Extra Nav Functions
function extraNavFuncs()
{
	// Hide Menu On Item Click
	$(".site-navigation a").click(function(e)
	{
		if (!$(e.target).closest('.dropdown-toggle').length) // Prevent Dropdowns Closing on click
		{
			$(".navbar-collapse").collapse('hide');
		}
	});
	
	// Close Open Dropdown Menu When Another menu on same level is opened
	$("a.dropdown-toggle").click(function(e)
	{
		$(this).parent().addClass('target-open-menu');
		$(this).closest('.dropdown-menu').find('.dropdown.open').each(function(i) // Loop all Open Dropdowns
		{
			if (!$(this).hasClass('target-open-menu'))
			{
				$(this).removeClass('open');
			}
		});
		$('.target-open-menu').removeClass('target-open-menu');
	});
	
	// Handle Multi Level Dropdowns
	$( '.dropdown-menu a.dropdown-toggle' ).on( 'click', function ( e )
	{
        return openSubDropdown($(this));
	});
	
	// Handle Multi Level Dropdowns
	$('body').on("click",".dropdown-menu a.dropdown-toggle",function(e)
	{
        return openSubDropdown($(this));
	});

	// handle Sub Dropdowns
	function openSubDropdown(target)
	{
		var $el = target;
        var $parent = target.offsetParent( ".dropdown-menu" );
        if ( !target.next().hasClass( 'show' ) ) {
            target.parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
        }
        var $subMenu = target.next( ".dropdown-menu" );
        $subMenu.toggleClass( 'show' );
    
        target.parent( "li" ).toggleClass( 'show' );

        target.parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
            $( '.dropdown-menu .show' ).removeClass( "show" );
        } );
    
        if (!$parent.parent().hasClass( 'navbar-nav' ))
        {
        	if (!target.closest('.nav-special').length)
        	{
        		$el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        	}
        }

        return false;
	}
}

// Scroll to target
function scrollToTarget(D,T)
{
	var speed = 'slow';
	
	if (D == 0) // Next Bloc
	{
		D = $(T).closest('.bloc').height();
	}
	else if (D == 1) // Top of page
	{
		D = 0;
	}
	else if (D == 2) // Bottom of page
	{
		D = $(document).height();
	}
	else // Specific Bloc
	{
		D = $(D).offset().top;
		if ($('.sticky-nav').length) // Sticky Nav in use
		{
			D -= $('.sticky-nav').outerHeight();
		}
	}
	
	if ($(T).is("[data-scroll-speed]")) // Use asigned scroll speed
	{
		speed = $(T).attr('data-scroll-speed');
		
		if (parseInt(speed)) // Is an integer
		{
			speed = parseInt(speed);
		}
	}


	$('html,body').animate({scrollTop:D}, speed);
	$(".navbar-collapse").collapse('hide');	
}

// Animate when visible
function animateWhenVisible()
{
	hideAll(); // Hide all animation elements
	inViewCheck(); // Initail check on page load
	
	$(window).scroll(function()
	{		
		inViewCheck(); // Check object visability on page scroll
		scrollToTopView(); // ScrollToTop button visability toggle
		stickyNavToggle(); // Sticky nav toggle
	});		
};

// Set Up Dropdown Menu Support
function setUpDropdownSubs()
{
	$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event)
	{
		event.preventDefault(); 
		event.stopPropagation(); 
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
		
		var targetMenu = $(this).parent().children('.dropdown-menu');
		var leftVal = targetMenu.offset().left+targetMenu.width();
		if (leftVal > $(window).width())
		{
			targetMenu.addClass('dropmenu-flow-right');
		}
	});
}

// Sticky Nav Bar Toggle On / Off
function stickyNavToggle()
{
	var offsetVal = 0; // offset Value
	var classes = "sticky"; // Classes
	var targetContainer = $('.page-container');
	var isFillScreenSticky = $('.sticky-nav').hasClass('fill-bloc-top-edge');
	
	if (isFillScreenSticky) // Nav in hero Bloc
	{
		console.log('fill screen');
		targetContainer = $('.fill-bloc-top-edge.sticky-nav').parent();
		offsetVal = $('.sticky-nav').height();
		classes = "sticky animated fadeInDown"; 
	}
	
	if ($(window).scrollTop() > offsetVal)
	{  
		if (!$('.sticky-nav').hasClass('sticky')) // Add Sticky
		{
			$('.sticky-nav').addClass(classes);
			offsetVal = $('.sticky-nav').height();

			if (isFillScreenSticky)
			{
				// Set BG Color
				var bgColor = targetContainer.css('background-color');
				if (bgColor == "rgba(0, 0, 0, 0)") bgColor = '#FFFFFF';
				$('.sticky-nav').css('background', bgColor);

				offsetVal += parseInt(targetContainer.css('padding-top')); 
			}

			targetContainer.css('padding-top',offsetVal);
		}
	}
	else if ($('.sticky-nav').hasClass('sticky')) // Remove Sticky
	{
		$('.sticky-nav').removeClass(classes).removeAttr('style');
		targetContainer.removeAttr('style');
	}	
}

// Hide all animation elements
function hideAll()
{
	$('.animated').each(function(i)
	{	
		if (!$(this).closest('.hero').length) // Dont hide hero object
		{
			$(this).removeClass('animated').addClass('hideMe');
		}
	});
}

// Check if object is inView
function inViewCheck()
{	
	$($(".hideMe").get().reverse()).each(function(i)
	{	
		var target = jQuery(this);
		var a = target.offset().top + target.height();
		var b = $(window).scrollTop() + $(window).height();
		
		if (target.height() > $(window).height()) // If object height is greater than window height
		{
			a = target.offset().top;
		}
		
		if (a < b) 
		{	
			var objectClass = target.attr('class').replace('hideMe' , 'animated');
			target.css('visibility','hidden').removeAttr('class');
			setTimeout(function(){target.attr('class',objectClass).css('visibility','visible');},0.01);
			
			// Remove animtion when spent
			target.on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
			    $(this).removeClass($(this).attr('data-appear-anim-style'))
			});					
		}
	});
};

// ScrollToTop button toggle
function scrollToTopView()
{
	if ($(window).scrollTop() > $(window).height()/3)
	{	
		if (!$('.scrollToTop').hasClass('showScrollTop'))
		{
			$('.scrollToTop').addClass('showScrollTop');
		}	
	}
	else
	{
		$('.scrollToTop').removeClass('showScrollTop');
	}
};
