$('form').submit(function () {
    return false;
});
$("input[type='submit']").click(function(){
    var form =  $(this).parents('form').prop('id');
    var result_id= $('#'+form).attr('result');
    var mas = new Object();
    mas["val"] = [];
    mas["name"] = [];
    var er=0;
    $('#'+form).find("input,select,textarea").not('[type="submit"]').each(function(){
        var required = $(this).attr('required');
        var name = $(this).attr('name-mail');
        var val = $(this).val();
        var type = $(this).attr('type');
        mas.val.push(val);
        mas.name.push(name);
        if ((required=='required') && (val=='')){
            er=1;
            $('#'+result_id).text('Заполните обязательные поля');
        }
        if (type =='email') {
            var r = /^\w+@\w+\.\w{2,4}$/i;
            if (!r.test(val)) {
                er = 1;
                $('#'+result_id).text('Некорректный Email');
            }
        }
		if (type =='tel') {
            var r = /^[0-9()\-+ ]+$/;
            if (!r.test(val)) {
                er = 1;
                $('#'+result_id).text('Некорректный телефон');
            }
        }
    });
    if (er==0)
    {
    $.ajax({
        url: 'mail.php',
        type: "POST",
        data: {name: mas.name, val: mas.val},
        success: function (response) {
            $('#'+result_id).text(response);
			var url = "спасибо-за-заявку.html";
			$(location).attr('href',url);
        },
        error: function (response) {
            $('#'+result_id).text('Возникла ошибка');
        }
    });
    }
});

