;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);
	var video, videos;

	/**
	 * initSelectDropdown
	 * @param  { Object } $select DOM Element
	 */
	function initSelectDropdown ($select) {
		$select.select2({
			minimumResultsForSearch: Infinity
		});
	}

	/**
	 * animateElement
	 * @param  { Object } $element DOM Element
	 */
	function animateElement($element) {
		$element.transition({ scale: 1.1 }, { duration: 200 });
		$element.transition({ scale: 1 },{ duration: 200 });
	}

	/**
	 * lazyLoadIframe
	 * @param  { Obejct } videos DOM Element
	 */
	function lazyLoadIframe(videos) {
		for (var i = 0; i < videos.length; i++) {
			video = document.createElement('div');
			video.setAttribute('class', 'video__player');
			video.setAttribute('data-video', videos[i].dataset.video);
			video.innerHTML = loadImage(videos[i].dataset.video);
			video.onclick = loadIframe;
			videos[i].insertBefore(video, videos[i].firstChild);
		}
	}

	/**
	 * loadImage
	 * @param  { String } id Video ID
	 */
	function loadImage(id) {
		var thumb = '<div class="video__image" style="background-image: url(https://i.ytimg.com/vi/ID/hqdefault.jpg);"></div><!-- /.video__image -->';
		return thumb.replace('ID', id);
	}

	// Load Iframe Video
	function loadIframe() {
		var iframe = document.createElement('iframe');
		var embed = 'https://www.youtube.com/embed/ID?autoplay=1';
		iframe.setAttribute('src', embed.replace('ID', this.dataset.video));
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('allowfullscreen', '1');
		this.parentNode.replaceChild(iframe, this);
	}

	/**
	 * initNotification
	 * @param  { Object } options Plugin options
	 */
	function initNotification(options) {
		new NotificationFx(options).show();
	}

	/**
	 * initSlider
	 * @param  { Object } $slider     	DOM Element
	 * @param  { Object } sliderOptions Slider options
	 */
	function initSlider($slider, sliderOptions) {
		$slider.slick(sliderOptions);
	}

	/**
	 * initChart
	 * @param  { Object } $holder    	DOM Element
	 * @param  { Object } options    	AJAX options for chart
	 * @param  { Boolean } destroy    	Must be destroyed chart or not
	 * @param  { Object } currentChart  Chart, which must be destroyed
	 */
	function initChart($holder, options, destroy, currentChart) {
		if(destroy) {
			currentChart.destroy();
			$(currentChart.element).remove();
		}

		var chart = c3.generate(options);

		$(chart.element).appendTo($holder);
		$holder.find('.c3').data('c3-chart', chart);
	}

	/**
	 * ajaxOptions
	 * @param  { String }  ajaxUrl 	AJAX url
	 * @param  { Object }  $holder 	DOM Element
	 * @param  { Boolean } boolean 	Must be destroyed chart or not
	 * @param  { Object }  chart    Chart, which must be destroyed
	 */
	function ajaxOptions(ajaxUrl, $holder, boolean, chart) {
		$.ajax({
			url: ajaxUrl,
			type: 'GET',
			dataType: 'json'
		})
		.done(function(response) {
			initChart($holder, response, boolean, chart);
		})
		.fail(function() {
			console.log('error');
		});
	}

	$doc.ready(function() {
		initSelectDropdown($('select'));
		lazyLoadIframe(document.getElementsByClassName('video'));

		$('.js-chart').each(function () {
			var $this 			= $(this);
			var $chartHolder 	= $this.find('.js-chart-holder');
			var dataUrl 		= $this.find('.js-chart-select').val();

			ajaxOptions(dataUrl, $chartHolder, false, null);
		});

		$('.js-chart .js-chart-select').on('change', function() {
			var $this = $(this);
			var dataUrl = $this.val();
			var $holder = $this.closest('.js-chart').find('.js-chart-holder');
			var chart = $holder.find('.c3').data('c3-chart');

			ajaxOptions(dataUrl, $holder, true, chart);
		});

		var $verticalSlider = $('.js-slider-fullpage');
		var verticalSliderOptions = {
			dots: 		true,
			vertical: 	true,
			draggable: 	false,
			infinite: 	false
		}

		initSlider($verticalSlider, verticalSliderOptions);

		$('.js-btn-rotate').on('click', function(event) {
			event.preventDefault();

			var $this 				= $(this);
			var $siblingElements 	= $this.siblings('.active');
			var isClicked 			= $this.hasClass('active');

			if(!$this.parent().hasClass('js-finished')) {
				if(!isClicked) {
					$this.addClass('active', 100);
					// $siblingElements.removeClass('active', 100);

					animateElement($this);
					// animateElement($siblingElements);

					$this.transition({ perspective: '1000px', rotateX: '180deg' }, { duration: 400, queue: false });
					// $siblingElements.transition({ perspective: '1000px', rotateX: '0deg' }, { duration: 400, queue: false });
				} else {
					$this.removeClass('active', 100);
					animateElement($this);
					$this.transition({ perspective: '1000px', rotateX: '0deg' }, { duration: 400, queue: false });
				}
			}
		});

		$('.js-btn-notification').on('click', function(event) {
			event.preventDefault();

			var currentNotification;
			var $this 						= $(this);
			var notificationIco 			= $this.data('ico');
			var notificationTextHighlighted = $this.data('text-highlighted');
			var notificationText 			= $this.data('text');
			var notificationType 			= $this.data('type');
			var notificationShowDuration	= $this.data('visibility-time');
			var $btnsNotification			= $('.wrapper').find('.js-btn-notification').prop('disabled', true);

			var notificationOptions 		= {
				wrapper : document.body,
				message: 	'<span class="notification__ico"><i class="' + notificationIco + '"></i></span><p><strong>' + notificationTextHighlighted + '</strong> ' + notificationText + '</p>',
				layout: 	'bar',
				effect: 	'slidetop',
				type: 		notificationType,
				ttl: 		typeof notificationShowDuration === 'undefined' ? 6000 : notificationShowDuration,
				onClose: 	function () {
					$btnsNotification.prop('disabled', false);
				}
			}

			initNotification(notificationOptions);
		});

		$('.js-btn-expand').on('click', function(event) {
			event.preventDefault();

			var $this 			= $(this);
			var element 		= $this.attr('href');
			var $othersBtns 	= $('.wrapper').find('a[href^="' + element +'"]').not($this);
			var hideElement 	= $this.data('hide-element');

			$this.toggleClass('active');
			$othersBtns.removeClass('active');

			if($(hideElement).length) {
				$(hideElement).toggleClass('hidden');
			}

			if($(element).length) {
				$(element).stop().slideToggle(400);

				if($win.width() < 1024 && $this.hasClass('active')) {
					$('html, body').animate({
						scrollTop: $(element).offset().top - 20
					}, 1000);
				}
			}
		});

		$('.js-btn-mobile-menu').on('click', function(event) {
			event.preventDefault();

			$(this).toggleClass('active');

			$('.header__inner').toggleClass('expand');

			$('.wrapper').toggleClass('fixed');
		});

		$('.js-btn-popup').add('.js-popup-close').on('click', function(event) {
			event.preventDefault();

			var element = $(this).attr('href');

			if(element.length) {
				$('.popup').not(element).removeClass('expand');
				$(element).toggleClass('expand');
			}
		});

		// Add class of nav access dropdown parents
		$('.nav-access__dropdown').parent().addClass('has-drodpown');

		$('.nav-access .has-drodpown > a').on('click', function(event) {
			event.preventDefault();

			$(this).parent().toggleClass('active');
		});

		$('.tabs__nav a').on('click', function(event) {
			event.preventDefault();

			var $this 		= $(this);
			var element 	= $this.attr('href');

			if($(element).length) {
				$this
					.parent().addClass('current')
						.siblings().removeClass('current');

				$(element).addClass('current')
					.siblings().removeClass('current');
			}
		});

		var breakpointIsMobile 		= false;

		var $headerInner 			= $('.header__inner');
		var $sectionSimpleVideo		= $('.section-simple .section__video');
		var $sectionSimpleTitle 	= $('.section-simple .section__title:first-child');
		var $sectionSimpleContent 	= $('.section-simple .section__content');

		function resizeHelper() {
			var $logo 				= $('.logo').clone(true).removeClass('hidden-xs').addClass('logo--alt');
			var $copyright 			= $('.copyright').clone(true).addClass('copyright--simple');

			if($win.width() < 768) {
				if(breakpointIsMobile) {
					return;
				}

				$logo.prependTo($headerInner);
				$copyright.appendTo($headerInner);
				$sectionSimpleTitle.insertBefore($sectionSimpleVideo);

				if($verticalSlider.hasClass('slick-initialized')) {
					$verticalSlider.slick('unslick');
				}

				breakpointIsMobile = true;
			} else {
				if(!breakpointIsMobile) {
					return;
				}

				$('.logo--alt').empty().remove();
				$('.copyright--simple').empty().remove();
				$sectionSimpleTitle.prependTo($sectionSimpleContent);

				if(!$verticalSlider.hasClass('slick-initialized')) {
					initSlider($verticalSlider, verticalSliderOptions);
				}

				breakpointIsMobile = false;
			}
		}

		resizeHelper();

		$win.on('resize orientationchange', resizeHelper);
	});

})(jQuery, window, document);
