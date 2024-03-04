const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup-edit__close");
const profileForm = document.querySelector(".profile-form");
const modal = document.querySelector(".popup-edit");
const inputName = document.querySelector(".input__name");
const inputJob = document.querySelector(".input__job");
const addButton = document.querySelector(".profile__add-button");
const closeButton2 = document.querySelector(".popup-add__close-card");
const profileFormCard = document.querySelector(".profile-form-card");
const modal2 = document.querySelector(".popup-add");
const inputCardImg = document.querySelector(".input__card__img");
const inputCardText = document.querySelector(".input__card__text");
const popupWithImg = document.querySelector(".popup-img");
const popupCloseButton = document.querySelector(".popup__close-button");
const popupImg = document.querySelector(".popup__img");
const popupImgName = document.querySelector(".popup-img__name");

editButton.addEventListener("click", function () {
  openPopup(modal);
});

addButton.addEventListener("click", function () {
  openPopup(modal2);
});

closeButton.addEventListener("click", function () {
  closePopup(modal);
});

closeButton2.addEventListener("click", function () {
  closePopup(modal2);
});

function openPopup(popup) {
  popup.classList.add("overlay-active");
}

function closePopup(popup) {
  popup.classList.remove("overlay-active");
}

function formInput(event) {
  event.preventDefault();
  let profileTitle = document.querySelector(".profile__title");
  let profileSubtitle = document.querySelector(".profile__subtitle");
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;
  modal.classList.remove("overlay-active");
}

profileForm.addEventListener("submit", formInput);

function formInputCard(event) {
  event.preventDefault();
  let profileTitleCard = document.querySelector(".element__text");
  profileTitleCard.textContent = inputName.value;
  closePopup(modal2);
}

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    const openendPopup = document.querySelector(".overlay-active");
    if (openendPopup) {
      closePopup(openendPopup);
    }
  }
});

document.addEventListener("click", function (event) {
  const openendPopup = document.querySelector(".overlay-active");
  if (event.target == openendPopup) {
    if (openendPopup) {
      closePopup(openendPopup);
    }
  }
});

const initialCards = [
  {
    name: "Байкал",
    link: "https://img.freepik.com/free-photo/rainbow-oil-drops-on-a-water-surface-abstract-background_23-2148290071.jpg",
  },
  {
    name: "Байкал",
    link: "https://img.freepik.com/free-photo/rainbow-oil-drops-on-a-water-surface-abstract-background_23-2148290071.jpg",
  },
  {
    name: "Байкал",
    link: "https://img.freepik.com/free-photo/rainbow-oil-drops-on-a-water-surface-abstract-background_23-2148290071.jpg",
  },
  {
    name: "Байкал",
    link: "https://img.freepik.com/free-photo/rainbow-oil-drops-on-a-water-surface-abstract-background_23-2148290071.jpg",
  },
  {
    name: "Байкал",
    link: "https://img.freepik.com/free-photo/rainbow-oil-drops-on-a-water-surface-abstract-background_23-2148290071.jpg",
  },
  {
    name: "Байкал",
    link: "https://w.forfun.com/fetch/64/643244de7484ac6c953d77a950b1b671.jpeg",
  },
  {
    name: "Байкал",
    link: "https://w.forfun.com/fetch/64/643244de7484ac6c953d77a950b1b671.jpeg",
  },
];

let cardContent = document.querySelector(".elements");

function createCard(card) {
  let template = cardContent.querySelector("#template").content;
  let newCard = template.querySelector(".element").cloneNode(true);
  let img = newCard.querySelector(".element__foto");
  let title = newCard.querySelector(".element__text");
  let likeButton = newCard.querySelector(".element__button");

  likeButton.addEventListener("click", function (event) {
    event.target.classList.toggle("element__like_active");
  });

  img.addEventListener("click", function (event) {
    popupImg.src = event.target.src;
    popupImgName.alt = event.target.alt;
    //openPopup(popupWithImg);
    popupWithImg.classList.add("popup-img-active");
  });

  img.alt = card.name;
  img.src = card.link;
  title.textContent = card.name;

  return newCard;
}

initialCards.forEach(function (card) {
  cardContent.prepend(createCard(card));
});

function createCardforPopup(event) {
  event.preventDefault();
  const card = {
    name: inputCardText.value,
    link: inputCardImg.value,
  };
  cardContent.prepend(createCard(card));
  closePopup(modal2);
  inputCardText.value = "";
  inputCardImg.value = "";
}

profileFormCard.addEventListener("submit", createCardforPopup);
