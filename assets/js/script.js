$(document).ready(function () {
  $("#submit").click(function () {
    let c = nameValidation();

    if (c == 1) {
      let d = emailValidation();
      if (d == 1) {
        let e = passwordValidate();
        if (e == 1) {
          let f = confirmPasswordValidate();
          if (f == 1) {
            let i = phonenumberValidate();
            if (i == 1) {
              let j = dateValidation();
              if (j == 1) {
                let k = dropdownValidation();
                if (k == 1) {
                  let l = radioValidation();
                  console.log(k);
                  if (l == 1) {
                    let m = checkboxValidation();
                    if (m == 1) {
                      const modal = document.getElementById("successModal");
                      modal.style.display = "block";
                    }
                  } else {
                    // $("#CheckboxHelp").css({"display":"none"});
                    check1.style.border = "2px solid black";
                  }
                } else {
                  $("#GenderHelp").text("");
                  $("#CheckboxHelp").text("");
                  check1.style.border = "2px solid black";
                }
              } else {
                $("#countryHelp").text("");
                country.style.border = "1px solid black";
                $("#GenderHelp").text("");
                $("#CheckboxHelp").text("");
                check1.style.border = "2px solid black";
              }
            } else {
              $("#DateHelp").text("");
              $("#dateValue").css({ border: "1px solid black" });
              $("#countryHelp").text("");
              country.style.border = "1px solid black";
              $("#GenderHelp").text("");
              $("#CheckboxHelp").text("");
              check1.style.border = "2px solid black";
            }
          } else {
            $("#phoneNumberHelp").text("");
            $("#phonenumber").css({ border: "1px solid black" });
            $("#DateHelp").text("");
            $("#dateValue").css({ border: "1px solid black" });
            $("#countryHelp").text("");
            country.style.border = "1px solid black";
            $("#GenderHelp").text("");
            $("#CheckboxHelp").text("");
            check1.style.border = "2px solid black";
          }
        } else {
          $("#cPasswordHelp2").text("");
          $("#cPasswordHelp").text("");
          $("#confirmPassword").css({ border: "1px solid black" });
          $("#phoneNumberHelp").text("");
          $("#phonenumber").css({ border: "1px solid black" });
          $("#DateHelp").text("");
          $("#dateValue").css({ border: "1px solid black" });
          $("#countryHelp").text("");
          country.style.border = "1px solid black";
          $("#GenderHelp").text("");
          $("#CheckboxHelp").text("");
          check1.style.border = "2px solid black";
        }
      } else {
        $("#PasswordHelp").text("");
        $("#PasswordHelp2").text("");
        $("#exampleInputPassword1").css({ border: "1px solid black" });
        $("#cPasswordHelp2").text("");
        $("#cPasswordHelp").text("");
        $("#confirmPassword").css({ border: "1px solid black" });
        $("#phoneNumberHelp").text("");
        $("#phonenumber").css({ border: "1px solid black" });
        $("#DateHelp").text("");
        $("#dateValue").css({ border: "1px solid black" });
        $("#countryHelp").text("");
        country.style.border = "1px solid black";
        $("#GenderHelp").text("");
        $("#CheckboxHelp").text("");
        check1.style.border = "2px solid black";
      }
    } else {
      $("#exampleInputEmail1").css({ border: "1px solid black" });
      $("#emailHelp").text("");
      $("#PasswordHelp").text("");
      $("#PasswordHelp2").text("");
      $("#exampleInputPassword1").css({ border: "1px solid black" });
      $("#cPasswordHelp2").text("");
      $("#cPasswordHelp").text("");
      $("#confirmPassword").css({ border: "1px solid black" });
      $("#phoneNumberHelp").text("");
      $("#phonenumber").css({ border: "1px solid black" });
      $("#DateHelp").text("");
      $("#dateValue").css({ border: "1px solid black" });
      $("#countryHelp").text("");
      country.style.border = "1px solid black";
      $("#GenderHelp").text("");
      $("#CheckboxHelp").text("");
      check1.style.border = "2px solid black";
    }
  });

  function nameValidation() {
    let c = 0;
    var name = $("#tname").val();

    if (name === "") {
      $("#nameHelp").text("Name Cant'be Empty");
      $("#tname").css({ border: "1px solid red" });

      c = c - 1;
    } else if (!checkName(name)) {
      $("#nameHelp").text("Name Should Contain Only Letters");
      $("#tname").css({ border: "1px solid red" });
      c = c - 1;
    } else {
      $("#nameHelp").text("");
      $("#tname").css({ border: "1px solid green" });
      c++;
    }
    console.log(c);
    return c;
  }
  function emailValidation() {
    let c = 0;
    var email = $("#exampleInputEmail1").val();

    if (email === "") {
      $("#emailHelp").text("Email Cant'be Empty");
      $("#exampleInputEmail1").css({ border: "1px solid red" });
      c = c - 1;
    } else if (!emailCheck(email)) {
      $("#emailHelp").text("Enter Valid Email");
      $("#exampleInputEmail1").css({ border: "1px solid red" });
      c = c - 1;
    } else {
      $("#emailHelp").text("");
      $("#exampleInputEmail1").css({ border: "1px solid green" });
      c++;
    }
    return c;
  }

  function passwordValidate() {
    let c = 0;
    var password = $("#exampleInputPassword1").val();
    if (password === "") {
      $("#PasswordHelp").text("Password Cant'be Empty");
      $("#exampleInputPassword1").css({ border: "1px solid red" });
      c = c - 1;
    } else if (!passwordCheck(password)) {
      $("#PasswordHelp").text("Password Should Contain One Capital Letter,One Small Letter,One Number,One Symbol,and at Least 8 Characters ");
      $("#exampleInputPassword1").css({ border: "1px solid red" });
      c = c - 1;
    } else {
      $("#PasswordHelp").text("");
      $("#exampleInputPassword1").css({ border: "1px solid green" });
      c++;
    }
    return c;
  }

  function confirmPasswordValidate() {
    let c = 0;
    var password = $("#exampleInputPassword1").val();
    var cpassword = $("#confirmPassword").val();
    if (cpassword === "") {
      $("#cPasswordHelp").text("Password Cant'be Empty");
      $("#confirmPassword").css({ border: "1px solid red" });
      c = c - 1;
    } else if (cpassword != password) {
      $("#cPasswordHelp").text("Password Doesn't Match");
      $("#confirmPassword").css({ border: "1px solid red" });
      c = c - 1;
    } else {
      $("#cPasswordHelp").text("");
      $("#confirmPassword").css({ border: "1px solid green" });
      c++;
    }
    return c;
  }
  function phonenumberValidate() {
    let c = 0;
    var PhoneNumber = $("#phonenumber").val();
    console.log(PhoneNumber.charAt(0));
    if (PhoneNumber === "") {
      $("#phoneNumberHelp").text("Phonumber Cant'be Empty");
      $("#phonenumber").css({ border: "1px solid red" });
      c = c - 1;
    } else if (PhoneNumber.charAt(0) !== "9" &&PhoneNumber.charAt(0) !== "6" &&PhoneNumber.charAt(0) !== "7" &&PhoneNumber.charAt(0) !== "8") {
      $("#phoneNumberHelp").text("Enter Valid Mobile Number");
      $("#phonenumber").css({ border: "1px solid red" });
      c = c - 1;
    } else if (!phoneNumberCheck(PhoneNumber)) {
      $("#phoneNumberHelp").text("Enter Valid Mobile Number");
      $("#phonenumber").css({ border: "1px solid red" });
      c = c - 1;
    } else {
      $("#phoneNumberHelp").text("");

      $("#phonenumber").css({ border: "1px solid green" });
      c++;
    }
    return c;
  }
  function dateValidation() {
    let c = 0;

    var date = $("#dateValue").val();
    if (date == null || date == "") {
      $("#DateHelp").text("Date Cant'be Empty");
      $("#dateValue").css({ border: "1px solid red" });
      c = c - 1;
    } else {
      $("#DateHelp").text("");
      $("#dateValue").css({ border: "1px solid green" });
      c++;
    }
    return c;
  }

  function dropdownValidation() {
    let c = 0;
    var select1 = $("#country").val();
    if (select1 === "") {
      $("#countryHelp").text("Choose One");
      country.style.border = "1px solid red";
      c = c - 1;
    } else {
      $("#countryHelp").text("");
      country.style.border = "1px solid green";
      c++;
    }
    return c;
  }
  function radioValidation() {
    let c = 0;
    if ($(" input[type='radio']:checked").length === 0) {
      $("#GenderHelp").text("Please Select");
      c = -1;
    } else {
      $("#GenderHelp").text("");
      c++;
    }
    return c;
  }
  function checkboxValidation() {
    let c = 0;
    var checkinput = $('input[type="checkbox"]:checked');

    if (checkinput.length === 0) {
      $("#CheckboxHelp").text("You Must Check The Box");
      $("input[type='checkbox']").css("border", "1px solid red");
      c = -1;
      console.log(c);
    } else {
      $("#CheckboxHelp").text("");
      $("input[type='checkbox']").css("border", "2px solid green");
      c = 1;
    }
    return c;
  }
  function checkName(input) {
    let nameReg = /^[a-zA-Z]+$/;
    let valid = nameReg.test(input);
    return valid;
  }

  function emailCheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = emailReg.test(input);
    return valid;
  }
  function passwordCheck(input) {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let valid = regex.test(input);
    return valid;
  }
  function phoneNumberCheck(input) {
    let reg = /^[0-9]{10}$/;
    let valid = reg.test(input);
    return valid;
  }
});
