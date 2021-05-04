 $(function(){






 	khoimonan = $('.nhieumon').isotope({
	  itemSelector: '.motmon',
	  layoutMode: 'masonry'
	});

	khoimonan.imagesLoaded().progress( function() {
	  khoimonan.isotope('layout');
	});

	$('.tieudect a').click(function() {
		dulieu = $(this).data('monan'); 
	//	console.log(dulieu);
		khoimonan.isotope({ filter:  dulieu })
		 return false ; 
	});

	// xu ly phan responsive bang jquery . 
	// tinh ra so div ten .motmon

	//soluongmon = $('.motmon').length ;
	//docao = soluongmon* 120; 
	//console.log(docao );

	//$('.noidungct').css({'height':docao})

	// xem div .motmon co ton tai hay khong 
	 
	 new WOW().init();

anime({
    targets: '.hieung1',
  scale: [0.8,1],
    direction: 'alternate',
        endDelay: 500,

  loop: true,

   easing: 'easeInOutExpo'
   
  });


   let hu= anime({
    targets: '.motmon',
    opacity: 1,
    translateY: [-270,0],
    
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
   
  });

// xu li ten name
// 
let animation = anime({
    targets: '.fname',
    opacity: 1,

    translateY: [-50,0], 
    rotate: {
      value: 360,
      duration: 3000,
      easing: 'easeInExpo'
    }, 
    scale: anime.stagger([0.7, 1], {from: 'center'}), 
    delay: anime.stagger(100, {start: 1000}), 
    translateX: [-10, 30],
    endDelay: 1500,

    direction: 'alternate',

    loop : true
  });  






})  
 