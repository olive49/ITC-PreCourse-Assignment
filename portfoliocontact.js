//SUBMIT CONTACT FORM

const form = document.getElementById('contact-form');

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let sentence = `First name: ${form.first.value}, Last name: ${form.last.value}, Email address: ${form.email.value}, Comments: ${form.comments.value}, Activity preference: ${form.activities.value}.`;
  console.log(sentence);

});

//ENABLE/DISABLE BUTTON

let formData = {
    firstName: "",
    emailAd: "",
    comments: "",
    activities: ""
};

let submitBtn = document.getElementById('submit');
submitBtn.disabled = true;

const forms = document.getElementById('contact-form');
forms.addEventListener("change", function () {
  formData.firstName = document.getElementById("first").value;
  formData.emailAd = document.getElementById("email").value;
  formData.comments = document.getElementById("comments").value;
  document.querySelectorAll("input[type=radio]").forEach((activity) => {
    if (activity.checked) {
      formData.activities = activity.value;
    }
  });

  var cansubmit = true;

  const formValues = Object.values(formData);

  formValues.forEach((value) => {
    if (value.length === 0) {
      cansubmit = false;
    }
  });
  if (cansubmit) {
    submitBtn.disabled = false;
    submitBtn.style.cursor = "default";
  }
});
