const loadLesson=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then((dat)=>{
        // console.log(dat)
        displayLesson(dat.data)
    })
}
loadLesson()

const displayLesson=(lessons)=>{
    console.log(lessons)
    //  1. get the container & empty
    const levelContainer=document.getElementById("level-container")
    levelContainer.innerHTML=""

    // 2.get into every lesson 
        //  i. create new element
        // ii. append to parent
        lessons.forEach(element => {
            // create new element
            const levelDiv=document.createElement("div")
            levelDiv.innerHTML=`<button   class="btn btn-outline btn-primary poppins-font font-semibold text-sm"
                    ><i class="fa-solid fa-book-open"></i>Lesson-${element.level_no}</button>
                                 `
            levelContainer.append(levelDiv)
        });
}   