$(function () {
  let show = false;
  $("#show").click((e) => {
    e.preventDefault();
    show = !show;
    console.log(show);
    show
      ? $("#password").attr("type", "text")
      : $("#password").attr("type", "password");
  });

  $.ajax({
    url:
      "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json",
    method: "GET",
    success: (resp) => {
      console.log();
      $.parseJSON(resp).forEach((element) => {
        $("#city").append(
          `<option value="${element.id}">${element.name}</option>`
        );
      });
    },
  });

  [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
  ].forEach((ele) => {
    $("#skills").append(`<option >${ele}</option>`);
  });

  $("#skills").select2();

  $("#city").select2();

  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      confpassword: {
        required: true,
        minlength: 5,
        equalTo: "#password",
      },
      contact: "required",
      city: "required",
      skills: "required",
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
      },
      confpassword: {
        required: "Please confirm password",
        minlength: "Your password must be at least 5 characters long",
      },
      email: "Please enter a valid email address",
      contact: "Please enter a valid number",
      city: "Please select a city",
      skills: "Please select aleast 1 skill",
    },
    submitHandler: function (form) {
      form.submit();
    },
  });

  // $("#city").autocomplete({
  //   source: availableTags,
  // });
});
