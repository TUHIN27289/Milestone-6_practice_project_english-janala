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
     // Hide default message
  const defaultMsg = document.getElementById("default-message");
  if (defaultMsg) {
    defaultMsg.style.display = "none";
  }

  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((res) => res.json())
    .then((dat) => {
        removeActive();
        const clickBtn=document.getElementById(`lesson-btn-${id}`)
        clickBtn.classList.add('active')
        // console.log(clickBtn);
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
//   wordContainer.classList.remove("hidden");
  wordContainer.innerHTML = "";
  if(words.length==0){
    wordContainer.innerHTML = `
    <div class="h-64 w-[1400px] flex justify-center items-center mx-auto">
      <div class=" flex flex-col justify-center items-center text-center ">
      <img class="mx-auto" src="./assets/alert-error.png">
          
          <p class="inter-font font-medium text-xl text-black mb-6 text-center" >এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
          <h1 class="hind-siliguri-font font-semibold text-2xl" >নেক্সট Lesson এ যান</h1>
        </div>
        </div>
    `
  }
  words.forEach((element) => {
    const wordDiv = document.createElement("div");
    wordDiv.innerHTML = `
        <div class="flex flex-col justify-center items-center w-[430px] h-96 bg-base-100 shadow-xl rounded-lg">
        <div class=" flex justify-center items-center ">
        <div class=" flex flex-col justify-center items-center text-center">
          <h2 class="inter-font font-bold text-3xl text-black mb-6">${element.word? element.word:'Word পাওয়া যায়নি'}</h2>
          <p class="inter-font font-medium text-xl text-black mb-6" >Meaning /Pronounciation</p>
          <h1 class="hind-siliguri-font font-semibold text-2xl" >"${element.meaning?element.meaning :'অর্থ পাওয়া যায়নি'} / ${ element.pronunciation?element.pronunciation :'Pronunciation পাওয়া যায়নি'}"</h1>
        </div>
        </div>
       <div>
        <div class="flex justify-between items-center space-x-44 my-16">
         <button onclick="loadWordDetail(${element.id})" class="fa-solid fa-circle-info bg-[#1A91FF] opacity-70 text-black p-2 pr-7 rounded-lg"> </button> <button onclick="my_modal_5.showModal()" class="fa-solid fa-volume-high bg-[#1A91FF] opacity-70 text-black p-2 pr-7 rounded-lg"></button>
        </div>
       </div>
      </div>`;

    wordContainer.append(wordDiv);
  });

};
// remove active
const removeActive=()=>{
    const lessonBtns=document.querySelectorAll(".lesson-btn")
    // console.log(lessonBtn);
    lessonBtns.forEach((element)=>{
        element.classList.remove('active');
    })
}
 const loadWordDetail=async(id)=>{
    const url=`https://openapi.programming-hero.com/api/word/${id}`
    const res=await fetch(url)
    const dat= await res.json();
    displayWordDetail(dat.data)

 }

 const displayWordDetail=(word)=>{
    // console.log(word)
    const wordDetailsContainer=document.getElementById('word-details-container');
    wordDetailsContainer.innerHTML=`
    <h1>${word.word}(<i class="fa-solid fa-microphone-lines"></i>${word.pronunciation})</h1>
    <p>Meaning</p>
    <p>${word.meaning}</p>
    <h1>Example</h1>
    <p>${word.sentence}</p>
    <h1>সমার্থক শব্দ গুলো</h1>
    <div class="btn ">
    <p>${word.synonyms}</p>

    </div>

    `;
    document.getElementById("word_modal").showModal();
 }
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
    levelDiv.innerHTML = `<button id="lesson-btn-${element.level_no}"  onclick="loadWord(${element.level_no})"  class="btn btn-outline btn-primary poppins-font font-semibold text-sm lesson-btn"
                    ><i class="fa-solid fa-book-open"></i>Lesson-${element.level_no}</button>
                                 `;
    levelContainer.append(levelDiv);
  });
};
