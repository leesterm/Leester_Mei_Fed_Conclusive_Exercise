"use strict";

(function() {

	var Carousel = {
		props:{
			current_slide:null,
			total_slides:null
		},
		init:function(){
			this.total_slides = $(".carousel-cells article").length;
			this.current_slide = 0;
		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});
		},
		next:function(){
			this.current_slide = (this.current_slide+1)%this.total_slides;
			this.update();
		},
		previous:function(){
			this.current_slide = (this.current_slide-1)%this.total_slides;
			if(this.current_slide < 0)
				this.current_slide += this.total_slides;
			this.update();
		},
		update:function(){
			var calc = 0-this.current_slide;
			$(".carousel-cells")[0].style.setProperty("margin-left",100*calc+"vw");
		}
	}
	$(function(){
		Carousel.init();
		Carousel.bindEvents();

		$(document).keydown(function(e){
			if (e.keyCode === 37) {
				$(".carousel-prev").click();
			}
			if (e.keyCode === 39) {
				$(".carousel-next").click();
			}
		})
	})

})(window);
