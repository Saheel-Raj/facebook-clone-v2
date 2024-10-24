const searchicon = document.getElementById("searchicon");
const searchInput = document.getElementById("search");
const searchbar = document.querySelector(".searchbar");
const searchBoard = document.querySelector(".searchBoard");
const stories = document.querySelector(".content");
let thisStory = 0;
const Peopleyoumayknow = document.querySelector(".findfriends");
const contentfindfriends = document.querySelector(".contentfindfriends");

function setupHoverButtons(containerSelector) {
  const container = document.querySelector(containerSelector);
  const nextButton = container.querySelector(".next");
  const previousButton = container.querySelector(".previous");
  scrolling(containerSelector);
  container.addEventListener("mouseenter", () => {
    nextButton.style.opacity = "1";
    previousButton.style.opacity = "1";
  });

  container.addEventListener("mouseleave", () => {
    setTimeout(() => {
      nextButton.style.opacity = "0";
    }, 2000);
    setTimeout(() => {
      previousButton.style.opacity = "0";
    }, 2000);
  });
}

setupHoverButtons(".findfriends-container");
setupHoverButtons(".storiescontainer");

function scrolling(container) {
  const containerElement = document.querySelector(container);
  const nextButton = containerElement.querySelector(".next");
  const previousButton = containerElement.querySelector(".previous");

  nextButton.addEventListener("click", () => {
    if (container === ".findfriends-container") {
      contentfindfriends.scrollLeft += 300;
    } else if (container === ".storiescontainer") {
      stories.scrollLeft += 300;
    }
  });

  previousButton.addEventListener("click", () => {
    if (container === ".findfriends-container") {
      contentfindfriends.scrollLeft -= 300;
    } else if (container === ".storiescontainer") {
      stories.scrollLeft -= 300;
    }
  });
}

searchbar.addEventListener("click", () => {
  searchBoard.style.display = "inline-block";
});
const inputsearch = searchbar.querySelector("input");

document.addEventListener("click", (event) => {
  if (
    !searchbar.contains(event.target) &&
    !searchBoard.contains(event.target)
  ) {
    inputsearch.innerText = "";
    searchBoard.style.display = "none";
  }
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => showUsers(users));

function showUsers(users) {
  const ulSearch = document.createElement("ul");
  const searchcontainer = document.querySelector(".searchcontainer");
  for (let user of users) {
    const searchProfile = document.createElement("div");
    searchProfile.classList.add("searchProfile");
    const liSearch = document.createElement("li");
    liSearch.innerText = user.name;
    ulSearch.appendChild(liSearch);
  }
  searchcontainer.appendChild(ulSearch);
}

searchInput.oninput = filterSearch;

function filterSearch() {
  const liItems = document.querySelectorAll(".searchcontainer li");
  const searchContent = searchInput.value.toLowerCase();
  for (let li of liItems) {
    const searchInputList = li.innerText.toLowerCase();
    if (!searchInputList.includes(searchContent)) {
      li.setAttribute("hidden", true);
    } else {
      li.removeAttribute("hidden");
    }
  }
}

const users = [
  {
    name: "Saheel",
    profile: "images/dp.jpg",
    story:
      "https://th.bing.com/th/id/OIP.37tc2mB9zNs_yEg_GFEnVwHaHt?rs=1&pid=ImgDetMain",
  },
  {
    name: "Aman",
    profile: "images/dp2.png",
    story:
      "https://th.bing.com/th/id/OIP.o3AACJN5ie-eGBOYobPifgHaGf?rs=1&pid=ImgDetMain",
  },
  {
    name: "Pratyush",
    profile: "images/dp3.png",
    story:
      "https://th.bing.com/th/id/OIP.NYrvKAWDb92Q8j5-6jjAbgHaMW?rs=1&pid=ImgDetMain",
  },
  {
    name: "Ronit",
    profile: "images/dp4.jpeg",
    story:
      "https://th.bing.com/th/id/OIP.vyL_SZ11ebzKoNwH86M8aAHaJ3?rs=1&pid=ImgDetMain",
  },
  {
    name: "Prakhyat",
    profile: "https://th.bing.com/th/id/OIP.tNtYsjwvq5jsZmA4WME5OQHaE7?rs=1&pid=ImgDetMain",
    story:
      "https://th.bing.com/th/id/OIF.g8XT3W9kcSifoX8IqHAFHQ?rs=1&pid=ImgDetMain",
  },
  {
    name: "Abhishek",
    profile: "images/dp6.jpg",
    story:
      "https://th.bing.com/th/id/R.d17a3ebebd7f56e1829b61020a9f70f3?rik=MUpVJNK%2bNTV4xg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f2%2f2d%2fAfrican_Pygmy_Goat_005.jpg&ehk=YgwFn3sm1ptZAKzTd49fJVzAGY7T0NRKIRjIQc4BNBQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Aditya",
    profile: "images/dp7.jpg",
    story:
      "https://img.freepik.com/free-photo/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background_74190-13668.jpg?size=626&ext=jpg&ga=GA1.1.1834738657.1698000677&semt=sph",
  },
  {
    name: "Johnny",
    profile: "https://wikibio.in/wp-content/uploads/2019/02/Johnny-Sins.jpg",
    story:
      "https://wikifid.com/wp-content/uploads/2021/05/Johnny-Sins-Biography-Wiki.jpg",
  },
];
const storiesContainer = document.querySelector(".story");
let currentIndex = 0;

users.forEach((user, index) => {
  const stories = document.createElement("div");
  stories.classList.add("stories");

  const imagesInStory = document.createElement("img");
  imagesInStory.src = user.story;

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  overlay.onclick = () => showFullView(user, index);

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundImage = `url(${user.profile})`;

  const name = document.createElement("div");
  name.classList.add("name");
  name.innerHTML = user.name;

  overlay.appendChild(circle);
  overlay.appendChild(name);
  stories.appendChild(imagesInStory);
  stories.appendChild(overlay);
  storiesContainer.appendChild(stories);
});

const contact = [
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
  { name: "Saheel Raj Prasad", profile: "images/dp.jpg" },
];

const rightContent = document.querySelector(".right-content");

contact.forEach((user) => {
  const singleContact = document.createElement("div");
  singleContact.classList.add("single-contact");

  const circle = document.createElement("div");
  circle.classList.add("circlecontact");
  circle.style.backgroundImage = `url(${user.profile})`;

  const online = document.createElement("div");
  online.classList.add("online");

  const name = document.createElement("div");
  name.classList.add("name");
  name.innerHTML = user.name;

  circle.appendChild(online);
  singleContact.appendChild(circle);
  singleContact.appendChild(name);
  rightContent.appendChild(singleContact);
});

const ImgOpen = document.querySelector(".storyOpen img");
function showFullView(user, index) {
  currentIndex = index;

  const StoryfullView = document.querySelector(".storyOpen");
  const CrossIcon = document.querySelector(".fa-times-circle");
  ImgOpen.src = user.story;

  StoryfullView.classList.add("active");

  CrossIcon.addEventListener("click", () => {
    StoryfullView.classList.remove("active");
  });
}

const previousStoryFullview = document.querySelector(".previousStory");
const nextStoryFullview = document.querySelector(".nextStory");

previousStoryFullview.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    ImgOpen.src = users[currentIndex].story;
  }
});

nextStoryFullview.addEventListener("click", () => {
  if (currentIndex < users.length - 1) {
    currentIndex++;
    ImgOpen.src = users[currentIndex].story;
  }
});

const cards = [
  { name: "Sri Ratan Tata", profile: "https://worldecomag.com/wp-content/uploads/2024/10/Ratan-tata.jpg" },
  { name: "Christiano Ronaldo", profile: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" },
  { name: "iShowSpeed", profile: "https://www.ixpap.com/images/2022/02/IShowSpeed-Wallpaper-12.jpeg" },
  { name: "Choti Lulli", profile: "https://th.bing.com/th/id/OIP.JY3_1sh3p3ws-cMXHdnskgHaHa?rs=1&pid=ImgDetMain" },
  { name: "Landy Bhai", profile: "https://th.bing.com/th/id/OIP.QUbU6bfhdRPoVtaYXm1CHAHaLJ?rs=1&pid=ImgDetMain" },
  { name: "You Sink", profile: "images/p6.jpeg" },
  { name: "Lattu Muttiya Baba", profile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVBJBFUt0XIYA5MfeIqOpgeOgQqE4OhiBoUqe1-W7D1ue_HNnf7jlXEvGLLfeO8KIzsjrVR-iImKNGuBbbR17R4zHHmlH4tQ2hdfaya4xaLi2SCD3raNJe06B5o9hcKxHtnsKcs-5LMTKNExDxHApItqCiXkFJyNaLhJnhUxcv0yes7L1w3cFu-CZsA8c/w1200-h630-p-k-no-nu/laddu.jpg" },
  { name: "Unknown 2022", profile: "images/p8.jpeg" },
];

cards.forEach((card) => {
  const cardsPeople = document.createElement("div");
  cardsPeople.classList.add("cards");
  const imgdp = document.createElement("div");
  imgdp.classList.add("imgdp");
  const imgInCard = document.createElement("img");
  imgInCard.src = card.profile;

  imgdp.appendChild(imgInCard);

  const profilenameSpan = document.createElement("span");
  profilenameSpan.classList.add("profilename");
  profilenameSpan.innerHTML = card.name;

  const addfriend = document.createElement("div");
  addfriend.classList.add("addfriend");
  const iconAddFriend = document.createElement("i");
  iconAddFriend.classList.add("bx", "bx-child");

  const addFriendText = document.createElement("span");
  addFriendText.innerText = "Add Friend";

  addfriend.appendChild(iconAddFriend);
  addfriend.appendChild(addFriendText);

  cardsPeople.appendChild(imgdp);
  cardsPeople.appendChild(profilenameSpan);
  cardsPeople.appendChild(addfriend);
  Peopleyoumayknow.appendChild(cardsPeople);
});
