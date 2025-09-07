const createElements=(arr)=>{
    const htmlElements=arr.map((element)=>`<span class="btn">${element}</span>`)
    return htmlElements.join(" ")    
}




console.log('js conneced aviii')

const loadWordDetail=async()=>{
  const res=await  fetch('https://openapi.programming-hero.com/api/word/20')
  const dat=await res.json();
  displayWordDetail(dat.data);
}


const displayWordDetail=((words)=>{
    console.log(words);
    const loadWorddetail=document.getElementById("load-Word-detail");
    loadWorddetail.innerHTML=`
    <h1>${words.word}(<i class="fa-solid fa-microphone-lines"></i>${words.pronunciation})</h1>
    <p>Meaning</p>
    <p>${words.meaning}</p>
    <h1>Example</h1>
    <p>${words.sentence}</p>
    <h1>সমার্থক শব্দ গুলো</h1>
    <div class=" ">
    <p>${createElements(words.synonyms)} </p>

    </div>

    `;
      // ✅ Show the modal
  const modal = document.getElementById("word_modal");
  modal.showModal();
})
loadWordDetail()