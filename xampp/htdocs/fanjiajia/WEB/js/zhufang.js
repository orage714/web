$(function () { 
    let active = function (obj, cal) {
        // console.log($(this));
    $(obj).click(function () { 
        $(this).addClass(cal).siblings().removeClass(cal)
    })
    }
    active($("#linktype01").children(), "templinkactive");
    active($("#linktype02").children(), "templinkactive");
  
})