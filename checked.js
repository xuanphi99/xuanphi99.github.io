
$(document).ready(function() {
	var bacham = "<span >...</span> ";
	var soluongPage = $('ul li.page-item').length;
	if (soluongPage>4) {
		var checkBacham =0;
			$('.page-item').each(function(index, el) {
			if (   parseInt($(this).text())>4&& parseInt($(this).text())!=soluongPage ) {
                if (checkBacham==0) {


                 $(this).html(bacham);
                 checkBacham =1;
                  }
                  else {
                  	$(this).hide();
                  }
			   }

			});
			}


	$('.page-item').click(function(event) {
		
		$('.page-item').removeClass('active');
		$(this).addClass('active');
	});

$('.nextpage').click(function(event) {
	  var pagecurrent =parseInt( $('li.page-item.active').text());
	  var pageLast = parseInt($('.page-item:last').text());
	  
	  if (pagecurrent < pageLast ) {
	  	
	   	$('.page-item').removeClass('active');
    $('.page-item').eq(pagecurrent).addClass('active');
	    	console.log( $('.page-item').eq(pagecurrent+1).text());
	    $('.page-item').each(function(index, el) {
	    		if ($(this).text() ==  $('.page-item').eq(pagecurrent+1).text() && $(this).text() == '...' ){
	    			$(this).show();
	    		}
	    	});
	   }
	
	});

$('.previ').click(function(event) {
	 var pagecurrent =parseInt( $('li.page-item.active').text());
	  var pageFirst = parseInt($('.page-item:first').text());
if (pagecurrent>pageFirst) {
$('.page-item').removeClass('active');
    $('.page-item').eq(pagecurrent-2).addClass('active');
    	console.log( $('.page-item').eq(pagecurrent-2).text());
}

});
function LoadSpadmin() {
		$.ajax({
			url:"/MiniTest/api/PhanTrang",
		    type:"GET",
		    data:{
		    	spbatdau:spbatdau,
		    	
		    },
			success: function(value){
				var tbodysanpham = $("#table-sanpham").find("tbody");
				tbodysanpham.empty();
				tbodysanpham.append(value);
			}
		})
}
$("#checkall").change(function(event) {
	if (this.checked) {
		 $(".checkboxsanpham").each(function(){
    		$(this).prop('checked', true);
  		});
	}
	else {
		 $(".checkboxsanpham").each(function(){
    		$(this).prop('checked', false);
  		});
	}


		$('#xoa-sanpham').click(function(event) {
			$('.input.checkboxsanpham').each(function(index, el) {
				if ($(this).checked) {
					$(this).closest('tr').remove();
				}
			});
		});

$('.btn-chitiet').on('click', '.selector', function(event) {
	console.log("hihihih");
	$('.addChitietSp').clone().removeAttr('id');
	$('#addSp').append();
	$(this).remove();
});

$('button#btnThemSanPham').click(function(event) {
event.preventDefault();
var frmData = $('form#form-sanpham').serializeArray();
	json ={};
	$.each(frmData, function(index, filed) {
		 json[filed.name] = filed.value;
	});
	ArrChiTiet =[];
	// lay dl tu frm chitiet
	$(".addChitietSp").each(function(index, el) {
		TmpFrmChiTiet = {};
		mausanpham = $(this).find('select[name ="mausanpham"]').val();
		sizesanpham = $(this).find('select[name ="sizesanpham"]').val();
		soluong = $(this).find('input[name ="soluong"]').val();
TmpFrmChiTiet["mausanpham"] = mausanpham;
TmpFrmChiTiet["sizesanpham"] = sizesanpham;
TmpFrmChiTiet["soluong"] = soluong;
ArrChiTiet.push(TmpFrmChiTiet);
	});  // het for chitietsp


	//console.log(JSON.stringify(json));
	
});

	$.ajax({
		url: '/path/to/file',
		type: 'default GET (Other values: POST)',
		dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		data: {param1: 'value1'},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});

$('.hi').click(function(event) {

	var b = $('#copy').clone().removeAttr('id');
	
	b.append('<button type="button" class="btn btn-primary ba">huy</button>');
	$('.nhanh').append(b);
	
});

       $('#hinhanh').attr('data', 'hinhxinh');;
console.log(  $('#hinhanh').attr('data'));
});