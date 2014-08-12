(function($){

	$.fn.dropalizer = function() {
		return this.each(function(){
			
			dropdownMenu = this;
			
			$(dropdownMenu).each(function(){

				if(!($(dropdownMenu).hasClass("dropalizer"))) {
					$(this).addClass("dropalizer");
				}

				selectMenu = $(this).find("select");
				selectName = $(selectMenu).attr("name");
				selectLabel = selectMenu.parent().find("label").text();
				selectListId = selectName+"List";

				$(selectMenu).after("<div class='listContainer'>"+selectLabel+"</div><input type=hidden name="+selectName+">");
				$("input[name="+selectName+"]").after("<ul id="+selectListId+" style=display:none></ul>");

				$(selectMenu).find("option").each(function(){
					$("ul#"+selectListId).append("<li data-value='"+$(this).val()+"'>"+this.text+"</li>");
				});

				selectMenu.parent().find("label").remove();
				selectMenu.remove();

			});

			var toggleList = $(this).find(".listContainer"),
				list = $("#"+selectListId),
				item = list.find("li");

			toggleList.click(function(){
				$(".arrows").toggleClass("is-active");
				$(this).parent().children("ul").fadeToggle(); // hide show list
			});

			item.click(function(){ // click on item
				var itemText = $(this).text();
				var itemVal = $(this).attr("data-value");
				$(this).closest(".dropalizer").find(".listContainer").html(itemText);
				$(this).closest(".dropalizer").find("input[type=hidden]").val(itemVal);
				list.fadeOut();
				item.removeClass("is-active");
				$(this).addClass("is-active");
				$(".arrows").removeClass("is-active");
			});	
		});
	};
})(jQuery);
