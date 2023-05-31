// alert("hello")
// $(document).on("mousemove", function (event) {
//     event.pageX
//     // console.log("x-index " + event.pageX);
//     // console.log("y-index " + event.pageY);
// })

// $(".social-logos li a").on("mousemove", function (event) {
//     var item = $(this).attr("id");
//     console.log(item);
//     var target = $("#" + item + " svg");
//     console.log(target);
//     target.css("box-shadow", "0px 0px  1rem #dddddd")
//     setTimeout(function () {
//         // target.css("fill", "currentColor")
//         target.css("box-shadow", " ");

//     }, 500);
// })

function showCertificatePopUp(url) {
    // var url = $(this).attr("href");
    window.open(url, 'popUpWindow', 'height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
    // window.open("https://drive.google.com/file/d/1SQoowj32Z8vOValP447QcGBK8CcxAup-/view?usp=share_link", "popUpWindow",);
}
function popUpWindowopen() {
    let newWin = window.open("about:blank", "hello", "width=200,height=200", 'popUpWindow');

    newWin.document.write(
        "<script>window.opener.document.body.innerHTML = 'Test'<\/script>"
    );
}

