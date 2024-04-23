// console.log('data');
// console.log(reviews);

const image = document.querySelector('.people-img');
const writer = document.getElementById('writer');
const profession = document.getElementById('profession');
const description = document.querySelector('.description');

// console.log(image, writer, profession, description);
const previous = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
const surprise = document.querySelector('.surprise');

// console.log(previous, next, surprise);

let currentReview = 0;

// when the page loads first we need somedata to display
window.addEventListener('DOMContentLoaded', function () {
  displayReviews();
});

// create function to display the reviews on every events thats going to come up on clicking the buttons.
function displayReviews() {
  const review = reviews[currentReview]; // creating array sending the currentReview as index

  //   console.log(review);
  image.src = review.img;
  profession.textContent = review.job;
  writer.textContent = review.name;
  description.textContent = review.text;
}

//for displaying next reviews
next.addEventListener('click', function () {
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  displayReviews();
});

previous.addEventListener('click', function () {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  displayReviews();
});

surprise.addEventListener('click', function () {
  currentReview = Math.floor(Math.random() * reviews.length);
  displayReviews();
});
