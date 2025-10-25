const loadLession=()=>{
    const url = "https://openapi.programming-hero.com/api/levels/all";
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayLession(data.data))
}
// "data": [
    // {
    //   "id": 101,
    //   "level_no": 1,
    //   "lessonName": "Basic Vocabulary"
    // },
    
const displayLession=(object)=>{
    // console.log(object.data[0]?.level_no);
    const lesson= document.getElementById("lession-section");
    object.forEach(data => {
        const div= document.createElement('div');
        div.innerHTML = `
         <button class="btn hover:bg-[#422ad5] hover:text-white group"><img class="group-hover:invert" src="./assets/fa-book-open.png " alt="">Lesson -${data.level_no}</button>
        
        `;
        lesson.appendChild(div);
    });

}







loadLession();