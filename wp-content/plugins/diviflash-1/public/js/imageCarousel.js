
(function () {

    var df_image_carousels = document.querySelectorAll('.difl_imagecarousel');

    [].forEach.call(df_image_carousels, function (ele, index) {
        const container = ele.querySelector('.df_ic_container');
        const data = JSON.parse(container.dataset.settings);
        const selector = ele.querySelector('.swiper-container');

        const item_spacing_tablet = '' !== data.item_spacing_tablet ? data.item_spacing_tablet : data.item_spacing;
        const item_spacing_phone = '' !== data.item_spacing_phone ? data.item_spacing_phone : item_spacing_tablet;

        var config = {
            speed: parseInt(data.speed),
            loop: data.loop,
            effect: 'slide',
            threshold: 15,
            slideClass: 'difl_imagecarouselitem',
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            watchSlidesVisibility: true,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false
        };

        // autoplay
        if (data.autoplay === 'on') {
            config['autoplay'] = {
                delay: data.auto_delay,
                disableOnInteraction: false
            }
        }

        // arrow navigation
        if (data.arrow === 'on') {
            config['navigation'] = {
                nextEl: '.ic-next-' + data.order,
                prevEl: '.ic-prev-' + data.order
            }
        }
        // dots pagination
        if (data.dots === 'on') {
            config['pagination'] = {
                el: '.ic-dots-' + data.order,
                type: 'bullets',
                clickable: true
            }
        }
        // effects
        if (data.effect === 'cube') {
            config['effect'] = data.effect;
            config['slidesPerView'] = 1;
            // cube settings
            config['cubeEffect'] = {
                slideShadows: true,
                shadow: false,
                shadowOffset: 20,
                shadowScale: 0.3
            };
        } else if (data.effect === 'flip') {
            config['effect'] = data.effect;
            config['slidesPerView'] = 1;
            config['flipEffect'] = {
                rotate: 30,
                slideShadows: true,
            }
        } else {
            config['effect'] = data.effect;
            config['slidesPerView'] = data.variable_width !== 'on' ? parseInt(data.desktop) : 'auto';
            config['spaceBetween'] = parseInt(data.item_spacing);
            config['centeredSlides'] = data.centeredSlides === 'on' ? true : false;
            config['breakpoints'] = {
                // desktop
                981: {
                    slidesPerView: data.variable_width !== 'on' ? parseInt(data.desktop) : 'auto',
                    spaceBetween: parseInt(data.item_spacing),
                },
                // tablet
                768: {
                    slidesPerView: data.variable_width !== 'on' ? parseInt(data.tablet) : 'auto',
                    spaceBetween: parseInt(item_spacing_tablet)
                },
                // mobile
                1: {
                    slidesPerView: data.variable_width !== 'on' ? parseInt(data.mobile) : 'auto',
                    spaceBetween: parseInt(item_spacing_phone)
                },
            }

            // coverflow settings
            if (data.effect === 'coverflow') {
                config['coverflowEffect'] = {
                    slideShadows: data.slideShadows === 'on' ? true : false,
                    rotate: parseInt(data.rotate),
                    stretch: parseInt(data.stretch),
                    depth: parseInt(data.depth),
                    modifier: parseInt(data.modifier)
                };
            }
        }
        // need to add pause on hover
        if (typeof Swiper === 'function') {
            var slider = new Swiper(selector, config);

            setTimeout(function () {
                slider.update(true);
            }, 500);

            // pause on hover
            if (data.autoplay === 'on' && data.pause_hover === 'on') {
                selector.addEventListener("mouseover", function () {
                    slider.autoplay.stop();
                })
                selector.addEventListener("mouseout", function () {
                    slider.autoplay.start();
                })
            }

            if( data.autoplay === 'on' && slider ){
                document.addEventListener('scroll', ()=>{
                    handleAutoplay(selector, slider)
                });

                handleAutoplay(selector, slider)
            }
        }
        // pointer event
        df_ic_handle_mouseover_event(ele);
        // lightbox
        df_ic_use_lightbox(
            container.querySelector('.swiper-wrapper'),
            {
                ic_lightbox : data.use_lightbox
            }
        );

    });
    [ ...document.querySelectorAll( '.difl_imagecarouselitem' ) ].filter( li => ! li.querySelector( '.df_ici_container' ) ).forEach( li => li.remove() )

})()

function df_ic_use_lightbox(selector, options) {
    if (options.ic_lightbox === 'on') {
        var settings = {
            selector: '.df_ici_container',
            subHtmlSelectorRelative: true,
            addClass: 'df_ic_lightbox',
            counter: false,
            download: options.download
        };

        lightGallery(selector, settings);
    }
}
function df_ic_handle_mouseover_event(ele) {
    const hover_class = 'df-ele-hover';
    let class_list = ele.classList;

    ele.addEventListener('mouseleave', function(event) {
        if(class_list.contains(hover_class)) {
            setTimeout(function(){
                ele.classList.remove(hover_class);
            }, 3000);
        }
    })

    ele.addEventListener('mouseenter', function(event) {
        if( !ele.classList.contains(hover_class) ) {
            ele.classList.add(hover_class);
        }
    })
}

function inViewport(selector) {

    const offset = 10;
    const element = selector.getBoundingClientRect();
    const elementTop = Math.round(element.top) + offset;
    const elementBottom = Math.round(element.bottom);

    return elementTop <= window.innerHeight && elementBottom >= 0
}

function handleAutoplay(selector, swiper) {
    if ( inViewport(selector) ) {
        swiper.autoplay.start();

        return;
    }

    swiper.autoplay.stop();
}



