const loadLession = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLession(data.data));
};
// "data": [
// {
//   "id": 101,
//   "level_no": 1,
//   "lessonName": "Basic Vocabulary"
// },
// Display lesson
const displayLession = (object) => {
  // console.log(object.data[0]?.level_no);
  const lesson = document.getElementById("lession-section");
  object.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
         <button id="lesson-id-${data.id}" onclick="loadLessonData(${data.level_no})" class="btn hover:bg-[#422ad5] hover:text-white group"><img class="group-hover:invert" src="./assets/fa-book-open.png " alt="">Lesson -${data.level_no}</button>
        
        `;
    lesson.appendChild(div);
  });
};
// "data": [
//     {
//       "id": 4,
//       "level": 5,
//       "word": "Diligent",
//       "meaning": "পরিশ্রমী",
//       "pronunciation": "ডিলিজেন্ট"
//     },
// display lesson item
const loadLessonData = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadLessonContent(data.data));
};

const loadLessonContent = (object) => {
  const lesson_level = document.getElementById("lesson-level");
  lesson_level.innerHTML = "";
  object.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="p-5 bg-white rounded-lg justify-around">
                <div class="space-y-4">
                    <h2 class="font-bold text-xl">${data.word}</h2>
                    <p class="text-sm">Meaning /Pronounciation</p>
                    <h3 class="text-xl font-semibold">"${data.meaning} / ${data.pronunciation}"</h3>
                </div>
                <div class="flex justify-between">
                    <div onclick="loadWordDetails(${data.id})" class="bg-[#e8f4ff] p-3 cursor-pointer rounded-lg"><i class="fa-solid fa-info  "></i></div>
                    <div class="bg-[#e8f4ff] p-3 cursor-pointer rounded-lg" ><i class="fa-solid fa-volume-high "></i></div>
                </div>
            </div>
        `;
    lesson_level.appendChild(div);
  });
};
//  "data": {
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার",
//     "level": 1,
//     "sentence": "The kids were eager to open their gifts.",
//     "points": 1,
//     "partsOfSpeech": "adjective",
//     "synonyms": [
//       "enthusiastic",
//       "excited",
//       "keen"
//     ],
// Load word details
const loadWordDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWordDetails(data.data));
};
// Display word deatils
const displayWordDetails = (object) => {
  const word_details = document.getElementById("word-details");
  word_details.innerHTML="";
  const div = document.createElement("div");
  div.classList.add(
    "border",
    "border-[#eff8ff]",
    "p-2",
    "rounded-lg",
    "space-y-3"
  );
  div.innerHTML = `
            <h2 class="font-bold text-xl">${object.word} ( <i class="fa-solid fa-microphone"></i>: ${object.pronunciation} )</h2>
    <h5 class="font-semibold text-sm">Meaning</h5>
    <h6 class="text-base">${object.meaning}</h6>
    <h4 class="font-semibold text-sm">Example</h4>
    <p class="text-sm">${object.sentence}</p>
    <h3 class="font-bold">সমার্থক শব্দ গুলো</h3>
    <div class="flex gap-1">
        <p class="px-3 bg-[#edf7ff] text-sm rounded-md">${object.synonyms[0]}</p>
        <p class="px-3 bg-[#edf7ff] text-sm rounded-md">${object.synonyms[1]}</p>
        <p class="px-3 bg-[#edf7ff] text-sm rounded-md">${object.synonyms[2]}</p>
     
    </div>
    `;
  word_details.appendChild(div);
  document.getElementById("my_modal_5").showModal();
};
loadLession();
