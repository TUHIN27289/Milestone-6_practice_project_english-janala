const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((dat) => {
      // console.log(dat)
      displayLesson(dat.data);
    });
};
loadLesson();

// word section
const loadWord = (id) => {
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((res) => res.json())
    .then((dat) => {
      // console.log(dat.data)
      displayWord(dat.data);
    });
};
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
const displayWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  words.forEach((element) => {
    const wordDiv = document.createElement("div");
    wordDiv.innerHTML = `
        <div class="flex flex-col justify-center items-center w-[430px] h-96 bg-base-100 shadow-xl rounded-lg">
        <div class=" flex justify-center items-center ">
        <div class=" flex flex-col justify-center items-center text-center">
          <h2 class="inter-font font-bold text-3xl text-black mb-6">${element.word}</h2>
          <p class="inter-font font-medium text-xl text-black mb-6" >Meaning /Pronounciation</p>
          <h1 class="hind-siliguri-font font-semibold text-2xl" >"${element.meaning } / ${ element.pronunciation}"</h1>
        </div>
        </div>
       <div>
        <div class="flex justify-between items-center space-x-44 my-16">
         <i class="fa-solid fa-circle-info bg-[#1A91FF] opacity-70 text-black p-2 pr-7 rounded-lg"> </i> <i class="fa-solid fa-volume-high bg-[#1A91FF] opacity-70 text-black p-2 pr-7 rounded-lg"></i>
        </div>
       </div>
      </div>`;

    wordContainer.append(wordDiv);
  });

  // const wordContainer=document.getElementById("word-container")
  // wordContainer.innerHTML=""
  // words.forEach(element => {
  //     const wordDiv=document.createElement("div")
  //     wordDiv.innerHTML=`<div class="card w-96 bg-base-100 shadow-xl">
  //     <div class="card-body">
  //       <h2 class="card-title">${element.level_no}</h2>
  //       <p>${element.level_name}</p>
  //     </div>
  //   </div>`
  //   wordContainer.append(wordDiv)
  // });
};

// lesson section
const displayLesson = (lessons) => {
  // console.log(lessons)
  //  1. get the container & empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  // 2.get into every lesson
  //  i. create new element
  // ii. append to parent
  lessons.forEach((element) => {
    // create new element
    const levelDiv = document.createElement("div");
    levelDiv.innerHTML = `<button onclick="loadWord(${element.level_no})"  class="btn btn-outline btn-primary poppins-font font-semibold text-sm"
                    ><i class="fa-solid fa-book-open"></i>Lesson-${element.level_no}</button>
                                 `;
    levelContainer.append(levelDiv);
  });
};
