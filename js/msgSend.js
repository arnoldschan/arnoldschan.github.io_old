// function showRecaptcha(element) {
//   Recaptcha.create('6LcFqbQUAAAAAAQF1hSBv2DQYq-5fNMYrP4dj2ZX', element, {
//     theme: 'clean', // you can pick another at https://developers.google.com/recaptcha/docs/customization
//     custom_theme_widget: 'recaptcha_widget'
//   });
// }
var onloadCallback = function() {
  grecaptcha.render('g-recaptcha', {
    'sitekey' : '6LcFqbQUAAAAAAQF1hSBv2DQYq-5fNMYrP4dj2ZX'
  });
};
$(function () {
        //Check if required fields are filled
        function checkifreqfld() {
                var isFormFilled = true;
                $("#contactForm").find(".form-control:visible").each(function () {
                    var value = $.trim($(this).val());
                    if ($(this).prop('required')) {
                        if (value.length < 1) {
                          $(this).closest(".form-group").addClass("field-error");
                          isFormFilled = false;
                        } else {
                          $(this).closest(".form-group").removeClass("field-error");
                        }
                    } else {
                        $(this).closest(".form-group").removeClass("field-error");
                    }
                });
                return isFormFilled;
          }
//           //Form Submit Event
 $("#submit-form").click(function () {
   location.replace("false")
  if (checkifreqfld()){
    // location.replace("true")
    // event.preventDefault();
    notice = form.find('#notice');
    form = $('#contactForm');
    var rcres = grecaptcha.getResponse();
    if(rcres.length){
        location.replace('/true')
         grecaptcha.reset();
         form.fadeOut(function() {
                         form.html('<h4>' + form.data('success') + '</h4>').fadeIn();
                       });
    }else{
      location.replace('/false')
        notice.text(notice.data('captcha-failed')).fadeIn();
        break
      }
  }else{
    // location.replace("false")
    location.replace('/false')
    notice.text(notice.data('error')).fadeIn();
  }
});
});
              // if (checkifreqfld()) {
              //   event.preventDefault();
              //   var rcres = grecaptcha.getResponse();
              //   form = $('#contactForm'),
              //   notice = form.find('#notice');
              //   if(rcres.length){
              //     grecaptcha.reset();
              //     // showHideMsg("Form Submitted!","success");
              //     form.fadeOut(function() {
              //                     form.html('<h4>' + form.data('success') + '</h4>').fadeIn();
              //                   });
              //   }else{
              //     // showHideMsg("Please verify reCAPTCHA","error");
              //     notice.text(notice.data('captcha-failed')).fadeIn();
              //     break
              //   }
              // } else {
              //     // showHideMsg("Fill required fields!","error");
              //     notice.text(notice.data('error')).fadeIn();
              // }
          // });
            //Show/Hide Message
            // function showHideMsg(message,type){
            //   if(type == "success"){
            //     $("#message-wrap").addClass("success-msg").removeClass("error-msg");
            //   }else if(type == "error"){
            //     $("#message-wrap").removeClass("success-msg").addClass("error-msg");
            //   }
            //
            //   $("#message-wrap").stop()
            //   .slideDown()
            //   .html(message)
            //   .delay(1500)
            //   .slideUp();
            // }


            //Google Style InputFields
          //   $(".field-wrapper .field-placeholder").on("click", function () {
          //     $(this).closest(".field-wrapper").find("input").focus();
          //   });
          //   $(".field-wrapper input").on("keyup", function () {
          //     var value = $.trim($(this).val());
          //       if (value) {
          //         $(this).closest(".field-wrapper").addClass("hasValue");
          //       } else {
          //         $(this).closest(".field-wrapper").removeClass("hasValue");
          //       }
          //   });
          // });
// function setupRecaptcha() {
//   var contactFormHost = 'website-contact-arnold.herokuapp.com/',
//       form = $('#contactForm'),
//       notice = form.find('#notice');
//
//   if (form.length) {
//     // showRecaptcha('recaptcha_widget');
//     // notice.text(notice.data('captcha-failed')).fadeIn();
//     form.submit(function(ev){
//       ev.preventDefault();
//
//       $.ajax({
//         type: "POST",
//         url: contactFormHost + 'send_email',
//         data: form.serialize(),
//         dataType: 'json',
//         success: function(response) {
//           switch (response.message) {
//             case 'success':
//               form.fadeOut(function() {
//                 form.html('<h4>' + form.data('success') + '</h4>').fadeIn();
//               });
//               break;
//
//             case 'failure_captcha':
//               // showRecaptcha('recaptcha_widget');
//               notice.text(notice.data('captcha-failed')).fadeIn();
//               break;
//
//             case 'failure_email':
//               notice.text(notice.data('error')).fadeIn();
//           }
//         },
//         error: function(xhr, ajaxOptions, thrownError) {
//           notice.text(notice.data('error')).fadeIn();
//         }
//       });
//     });
//   }
// }
