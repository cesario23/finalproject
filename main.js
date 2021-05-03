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


const newarray = [];
const URL = " https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
fetch (URL)
    .then (function (data){
      return data.json();
    })
    .then (function (storyIds){
        const fivestories = storyIds.slice (1, 6);
        newarray.push (fivestories);
        for (const id of fivestories){
            const itemIdUrl = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty';
            fetch (itemIdUrl)
              .then (function (data){
                return data.json ();
            })
              .then (function (response){
                for (const newarr of newarray){
                    const newsDisplay = document.querySelector ('#news-display');
                     const divisiontitle = document.createElement ('div');
                     divisiontitle.classList = 'news-title';
                     newsDisplay.appendChild (divisiontitle);
                      divisiontitle.innerText = response.title;

                }
            })

        }
    })
