$(document).ready(function () {
  console.log("ready!");
});

let logginInfo = 0;
// var $accountDelete = $("#delete-account"),
$accountDeleteDialog = $("#confirm-delete");
$accountDeleteDialog[0].showModal();

$("#cancel").on("click", function () {
  $accountDeleteDialog[0].close();
});

$("#loggin").click(() => {
  if ($("#pass").val() == 1) {
    logginInfo = 1;
    $(".mh1").hide("3000");
    $(".mh2").removeClass("d-none");
    $(".mh2").show("3000");
    $("#pass").val("");
    $(".body").removeClass("body");
    location.assign('/sieunhanmy.html');
  } else {
    $(".toast").toast("show");
    $('.info').html('Mật khẩu không đúng')
    $("#pass").val("");
    $(".form-control").addClass("bd");
  }
});
$(".gift").click(() => {
  $(".mh2").hide("3000");
  $(".mh3").removeClass("d-none");
});
$(".out").click(() => {
  $(".mh1").show("3000");
  $(".mh2").hide("3000");
});
var b = Math.floor(Math.random() * 13) + 1;

if (b == 0) {
  b = b + 1;
}
let a = 0;
$(".open").click(() => {
  $(".mh3").hide("3000");
  $(".mh4").removeClass("d-none");
  $(".dk").html(`Thả tim để mở quà`);
  $("modal").show();
  $(".num").html(a);
});
let c = [];
$(".like").click(() => {
  a++;
  let d = Math.floor(Math.random() * 14);
  $(".num").html(a);
  b = Math.floor(Math.random() * 13) + 1;
  a = 0;
  $(".mh4").hide("3000");
  $(".mh4").addClass("d-none");
  $(".mh5").removeClass("d-none");
  $(".bg").html(`
                    <div class="card" style="width: 18rem;">
                        <img src=${c[b].link}
                            class="card-img-top gift-img" alt="...">
                        <div class="card-body">
                            <p class="card-text">${c[b].content}</p>
                        </div>
                    </div>
        `);
  // }
});

$(".back").click(() => {
  $(".mh5").hide("3000");
  $(".mh5").addClass("d-none");
  $(".mh3").show("3000");
});

