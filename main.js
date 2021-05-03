let slideIndex = 0;
const showSlides = () =>{
    const slides = document.querySelectorAll ('.mySlides');
    for (let i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout (showSlides, 3000);
};
showSlides ();

const newsDisplay = document.querySelector ('#news-display');
    const division = document.createElement ('div')
    division.classList = 'news';
    newsDisplay.appendChild (division)
    
const URL = " https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
fetch (URL)
    .then (function (data){
      console.log (data);
      return data.json();
    })
    .then (function (storyIds){
        console.log (storyIds);
        for (const id of storyIds){
            const itemIdUrl = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty';
            fetch (itemIdUrl)
              .then (function (data){
                return data.json ();
            })
              .then (function (response){
                  console.log (response);
                  newsDisplay.innerText = response.title;
              })
        }
    })
