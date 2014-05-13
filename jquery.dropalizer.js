(function($){

	$.fn.dropalizer = function() {
		return this.each(function(){
			console.log(this);
			dropdownMenu = this;
			
			$(dropdownMenu).each(function(){

				if(!($(dropdownMenu).hasClass("dropdown"))) {
					$(this).addClass("dropdown");
				}

				selectMenu = $(this).find("select");
				selectName = $(selectMenu).attr("name");
				selectLabel = selectMenu.parent().find("label").text();
				selectListId = selectName+"List";

				$(selectMenu).after("<div class='listContainer'>"+selectLabel+"</div>")
				$(selectMenu).after("<input type=hidden name="+selectName+">");
				$("input[name="+selectName+"]").after("<ul id="+selectListId+"></ul>");

				$(selectMenu).find("option").each(function(){
					$("ul#"+selectListId).append("<li data-value='"+$(this).val()+"'>"+this.text+"</li>");
				});

				selectMenu.parent().find("label").remove();
				selectMenu.remove();

			});

			var toggleList = $(".arrows, .listContainer"),
				list = $(".dropdown ul"),
				item = list.find("li");

			toggleList.on("click", function(){
				$(".arrows").toggleClass("is-active");
				$(this).parent().children("ul").fadeToggle(); // hide show list
			});

			item.on("click", function(){ // click on item
				var itemText = $(this).text();
				var itemVal = $(this).attr("data-value");
				$(this).closest(".dropdown").find(".listContainer").html(itemText);
				$(this).closest(".dropdown").find("input[type=hidden]").val(itemVal);
				list.fadeOut();
				item.removeClass("is-active");
				$(this).addClass("is-active");
				$(".arrows").removeClass("is-active");
			});	
		})
	};
})(jQuery);
