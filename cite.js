
//перелистование слайдов по dots

const dots = document.querySelector('.dots');
dots.addEventListener('click', changeSlide);

const allSlides = document.querySelectorAll('.slide');
const allDots = document.querySelectorAll('.dot');


function changeSlide (event){
  const activeDot = document.querySelector('.dot.activeDot');
  const clickedDot = event.target;
  const allDots = document.querySelectorAll('.dot');
  activeDot.classList.remove('activeDot');
  clickedDot.classList.add('activeDot');

  const activeSlide = document.querySelector('.slide.active');
  
  activeSlide.classList.remove('active');

  for (let i=0; i < allDots.length; i++) {
      if( clickedDot === allDots[i]) {
          allSlides[i].classList.add('active');
      };
  }; 

}


// перелистование слайдов по стрелкам

const next = document.querySelector('.arrow-next');
const prev = document.querySelector('.arrow-prev');
let slideIndex = 1;

function showSlides(n) {

  if (n > allSlides.length) {
    slideIndex = 1;
  };
  if (n < 1) {
    slideIndex = allSlides.length;
  };

  const activeSlide = document.querySelector('.slide.active');
  const activeDot = document.querySelector('.dot.activeDot');
  activeSlide.classList.remove('active');
  activeDot.classList.remove('activeDot');

  allSlides[slideIndex-1].classList.add('active');
  allDots[slideIndex-1].classList.add('activeDot');
    
}


next.addEventListener('click', function nextSlide() {
  showSlides(slideIndex += 1);
  });

prev.addEventListener('click', function nextSlide() {
  showSlides(slideIndex -= 1);
  });

// галерея отзывов

let feedback = document.querySelector('.feedback');
let allFeedbacks = document.querySelectorAll('.feedback-slide');
const arrowNext = document.querySelector('div.carousel-lence > .arrow-next');
const arrowPrev = document.querySelector('div.carousel-lence >.arrow-prev');
let feedbackIndex = 0;

function showFeedback(n) {
  if (n  > allFeedbacks.length - 1) {
    feedbackIndex = 0;
  };
  if (n < 1) {
    feedbackIndex = allFeedbacks.length - 1;
} 
};

  arrowNext.addEventListener('click', function nextFeedback() {
    showFeedback(feedbackIndex = feedbackIndex + 1);
    feedback.style.transform = `translateX(${-100*feedbackIndex}%)`;
   }
  );

  arrowPrev.addEventListener('click', function prevFeedback() {
    showFeedback(feedbackIndex = feedbackIndex - 1);
    feedback.style.transform = `translateX(${-100*feedbackIndex}%)`;
   }
  );

