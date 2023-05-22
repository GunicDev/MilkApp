// GLOBAL VARIALE
const sendFarmerInfoButton = document.getElementById("sendFarmerInfoButton");
const newUserName = document.getElementById("name");
const newUserMilkAmount = document.getElementById("milkAmount");
const newUserCowNumber = document.getElementById("cowNumber");
const newUserMonth = document.getElementById("month");
const newUserRegion = document.getElementById("region");
const userTable = document.getElementById("users-table");
const reportAnalizeButton = document.getElementById("report-button");
// ERROR MESSAGE VARIALE
const errorMessageName = document.getElementById("errorMessageName");
const errorMessageMilkAmount = document.getElementById(
  "errorMessageMilkAmount"
);
const errorMessageCowNumber = document.getElementById("errorMessageCowNumber");
const errorMessageMonth = document.getElementById("errorMessageMonth");
const errorMessageRegion = document.getElementById("errorMessageRegion");
// NAV BAR
const homePageButton = document.getElementById("home-con-button");
const newUsersButton = document.getElementById("new-users-con-button");
const liseOfAllUsersButton = document.getElementById("users-con-button");
const reportButton = document.getElementById("report-con-button");

// MAIN IDS

const homePage = document.getElementById("home-page");
const newUsersPage = document.getElementById("new-user-page");
const listOfAllUsersPage = document.getElementById("user-lists-page");
const reportPage = document.getElementById("report-page");

//REPORT
const numberOfUsers = document.getElementById("report-amount-of-users");
const numberOfCows = document.getElementById("report-amount-of-cows");
const reportAmountOfMilk = document.getElementById("report-amount-of-milk");

//GLOAL ARRAY
const milkProduction = [
  {
    id: "",
    names: "",
    allMilkAmount: "",
    cowNumbers: "",
    months: "",
    regions: "",
  },
];

//console.log(milkProduction);

//CHANGE PAGE BUTTONS

homePageButton.onclick = function () {
  //console.log(homePageButton);
  homePageButton.classList.add("active");
  newUsersButton.classList.remove("active");
  liseOfAllUsersButton.classList.remove("active");
  reportButton.classList.remove("active");

  homePage.classList.remove("display_none");
  newUsersPage.classList.add("display_none");
  listOfAllUsersPage.classList.add("display_none");
  reportPage.classList.add("display_none");
};

newUsersButton.onclick = function () {
  //console.log(homePageButton);
  homePageButton.classList.remove("active");
  newUsersButton.classList.add("active");
  liseOfAllUsersButton.classList.remove("active");
  reportButton.classList.remove("active");

  homePage.classList.add("display_none");
  newUsersPage.classList.remove("display_none");
  listOfAllUsersPage.classList.add("display_none");
  reportPage.classList.add("display_none");
};
liseOfAllUsersButton.onclick = function () {
  homePageButton.classList.remove("active");
  newUsersButton.classList.remove("active");
  liseOfAllUsersButton.classList.add("active");
  reportButton.classList.remove("active");

  homePage.classList.add("display_none");
  newUsersPage.classList.add("display_none");
  listOfAllUsersPage.classList.remove("display_none");
  reportPage.classList.add("display_none");
};

reportButton.onclick = function () {
  amountOfMilk();
  amountOfUsers();
  homePageButton.classList.remove("active");
  newUsersButton.classList.remove("active");
  liseOfAllUsersButton.classList.remove("active");
  reportButton.classList.add("active");

  homePage.classList.add("display_none");
  newUsersPage.classList.add("display_none");
  listOfAllUsersPage.classList.add("display_none");
  reportPage.classList.remove("display_none");
};
const renderUsers = function () {
  userTable.innerHTML = "";
  milkProduction.forEach((user) => {
    userTable.innerHTML += `
    <div class="user_list">
              <p>${user.names}</p>
              <p>${user.allMilkAmount}</p>
              <p>${user.cowNumbers}</p>
              <p>${user.months}</p>
              <p>${user.regions}</p>
            </div>
    `;
    //console.log(user);
  });
};

const addUser = function () {
  const regionList = [
    "Prijedor",
    "Banja Luka",
    "Gradiška",
    "Doboj",
    "Bijeljina",
    "Sokolac",
    "Trebinje",
  ];
  const userId = Math.floor(Math.random() * 10000000000);
  const name = newUserName.value;
  const milkAmount = Number(newUserMilkAmount.value);
  const cowNumber = Number(newUserCowNumber.value);
  const monthWithMilk = Number(newUserMonth.value);
  const userRegion = Number(newUserRegion.value) - 1;

  const userInfo = {
    id: userId,
    names: name,
    allMilkAmount: milkAmount,
    cowNumbers: cowNumber,
    months: monthWithMilk,
    regions: regionList[userRegion],
  };
  milkProduction.push(userInfo);
  newUserName.value = "";
  newUserMilkAmount.value = "";
  newUserCowNumber.value = "";
  newUserMonth.value = "";
  newUserRegion.value = "";
  renderUsers();
};
const checkValidPost = function () {
  const name = newUserName.value;
  const milkAmount = newUserMilkAmount.value;
  const cowNumber = newUserCowNumber.value;
  const monthWithMilk = newUserMonth.value;
  const userRegion = newUserRegion.value;
  if (
    name.length > 0 &&
    milkAmount.length > 0 &&
    cowNumber.length > 0 &&
    monthWithMilk.length > 0 &&
    userRegion.length > 0
  ) {
    sendFarmerInfoButton.disabled = false;
  } else {
    sendFarmerInfoButton.disabled = true;
  }
};

sendFarmerInfoButton.onclick = function () {
  addUser();

  //console.log(milkProduction);
  sendFarmerInfoButton.disabled = true;
};

newUserName.oninput = function () {
  const name = newUserName.value;
  if (name.length <= 0) {
    newUserName.classList.add("error_input");
    errorMessageName.classList.remove("hidden");
    name.disable = true;
  } else {
    newUserName.classList.remove("error_input");
    errorMessageName.classList.add("hidden");
    name.disable = false;
  }
  checkValidPost();
};
newUserMilkAmount.oninput = function () {
  const milkAmount = newUserMilkAmount.value;
  if (milkAmount.length <= 0) {
    newUserMilkAmount.classList.add("error_input");
    errorMessageMilkAmount.classList.remove("hidden");
  } else {
    newUserMilkAmount.classList.remove("error_input");
    errorMessageMilkAmount.classList.add("hidden");
  }
  checkValidPost();
};
newUserCowNumber.oninput = function () {
  const cowNumber = newUserCowNumber.value;
  if (cowNumber.length <= 0) {
    newUserCowNumber.classList.add("error_input");
    errorMessageCowNumber.classList.remove("hidden");
  } else {
    newUserCowNumber.classList.remove("error_input");
    errorMessageCowNumber.classList.add("hidden");
  }
  checkValidPost();
};
newUserMonth.oninput = function () {
  const monthWithMilk = newUserMonth.value;

  if (
    monthWithMilk.length <= 0 ||
    Number(monthWithMilk) > 12 ||
    Number(monthWithMilk) == 0
  ) {
    newUserMonth.classList.add("error_input");
    errorMessageMonth.classList.remove("hidden");
  } else {
    newUserMonth.classList.remove("error_input");
    errorMessageMonth.classList.add("hidden");
  }
  checkValidPost();
};
newUserRegion.oninput = function () {
  const userRegion = newUserRegion.value;
  if (
    userRegion.length <= 0 ||
    Number(userRegion) > 7 ||
    Number(userRegion) == 0
  ) {
    newUserRegion.classList.add("error_input");
    errorMessageRegion.classList.remove("hidden");
  } else {
    newUserRegion.classList.remove("error_input");
    errorMessageRegion.classList.add("hidden");
  }

  checkValidPost();
};

//REPORT VALUES

reportAnalizeButton.onclick = function () {
  const chosenRegionListValues = document.getElementById("region-list-value");
  const monthListValues = document.getElementById("month-list-value");
  console.log(chosenRegionListValues.value, monthListValues.value);
};

const amountOfMilk = function () {
  let sumAmountOfMilk = 0;
  milkProduction.forEach((amount) => {
    sumAmountOfMilk += Number(amount.allMilkAmount);
  });
  console.log(sumAmountOfMilk);
  reportAmountOfMilk.innerHTML = sumAmountOfMilk;
};

const amountOfUsers = function () {
  let sumAmountOfUsers = 0;
  milkProduction.forEach((value, index) => {
    sumAmountOfUsers = index;
  });
  console.log(sumAmountOfUsers);
  numberOfUsers.innerHTML = sumAmountOfUsers;
};
