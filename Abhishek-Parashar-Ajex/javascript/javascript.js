
let skip = 0;
let user = [];
function createCard() {
  for (let i = skip * 10; i < skip * 10 + 10; i++) {
    let currentUser = user[i];
    let card = document.createElement("div");
    card.className = "card flex centeredContent";

    let userName = document.createElement("div");
    userName.innerHTML =
      "Name : " + `${currentUser.first_name} ${currentUser.last_name}`;
    userName.className = "name--pera data--size";
    card.appendChild(userName);

    let userEmail = document.createElement("div");
    userEmail.innerHTML = "Email : " + `${currentUser.email}`;
    userEmail.className = "email--pera data--size";
    card.appendChild(userEmail);

    let gender = document.createElement("div");
    gender.innerHTML = "Gender : " + `${currentUser.gender}`;
    gender.className = "gender--pera data--size";
    card.appendChild(gender);

    let about = document.createElement("div");
    about.className = "about--pera";
    about.innerHTML = "About : " + `${currentUser.about}`;
    card.appendChild(about);

    document.getElementById("mainContainer").appendChild(card);
  }
  skip++;
  if (skip > 4) {
    document.getElementById("next").classList.toggle("hide");
  }
}

function getUsersList() {
  $.ajax({
    url: 'https://ankitkotnalaqait.github.io/dummydata/data.json',
    type: 'GET',
    dataType: 'json',
    success: function (data, textStatus, xhr) {
      console.log(data);
      user = data;
      document.getElementById("getUserButton").classList.toggle("hide");
      if (data.length > 10)
        document.getElementById("next").classList.toggle("hide");
      createCard();
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log('Error in Operation');
    }
  });
}


document
  .getElementById("getUserButton")
  .addEventListener("click", getUsersList);
document.getElementById("next").addEventListener("click", createCard);
