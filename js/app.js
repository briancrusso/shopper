$(document).ready(function(){
	$('button').click(function(){
		var toAdd = $("input[name=message]").val();
		$('.list1 ul').append("<li>"+toAdd+"</li>");
	});
	$('.list1 ul').on("click","li",function(event){
		$('.list2 ul').append(this);
	});
});

