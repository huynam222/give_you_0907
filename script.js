document.addEventListener("DOMContentLoaded", function() {
  const passwordSection = document.querySelector(".password-section");
  const passwordInput = document.querySelector(".password-input");
  const passwordBtn = document.querySelector(".password-btn");
  const passwordError = document.querySelector(".password-error");
  const questionSection = document.querySelector(".question-section");
  const question = document.querySelector(".question");
  const gif = document.querySelector(".gif");
  const choice1Btn = document.querySelector(".choice-1");
  const choice2Btn = document.querySelector(".choice-2");

  const correctPassword = "07/08"; // Đặt mật khẩu đúng tại đây

   // Danh sách các câu hỏi, hình ảnh GIF và lựa chọn tương ứng
   const questions = [
    {
        text: "Hôm nay em có rảnh không? Ra anh đón nà!",
        gif: "https://media1.giphy.com/media/QxqWsy20ssCT8zVEqO/giphy.webp?cid=790b7611rh5bmgon6smjpowlc1pbc0czh0akljuus2kzee6j&ep=v1_gifs_search&rid=giphy.webp&ct=g",
        choices: ["Vâng ạ", "Không đâu"]
    },
    {
        text: "Em muốn đi coi phim không?",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmg1Ym1nb242c21qcG93bGMxcGJjMGN6aDBha2xqdXVzMmt6ZWU2aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QORL3lH6yuk8fzKWcc/giphy.webp",
        choices: ["Cũng được ạ", "Không đi đâu"]
    },
    {
        text: "Em thích ăn gì nào? Ăn lẩu, nướng, đồ Hàn hay Nhật!",
        gif: "https://media1.giphy.com/media/9r8QLRUm6uIQLnxgpu/giphy.webp?cid=790b7611rh5bmgon6smjpowlc1pbc0czh0akljuus2kzee6j&ep=v1_gifs_search&rid=giphy.webp&ct=g",
        choices: ["Ăn cả luôn", "Ăn gì cũng được"]
    }
    // Thêm nhiều câu hỏi và ảnh GIF khác vào đây
];

  let currentQuestionIndex = 0; // Biến theo dõi câu hỏi hiện tại

  function updateQuestion() {
      if (currentQuestionIndex < questions.length) {
          question.innerHTML = questions[currentQuestionIndex].text;
          gif.src = questions[currentQuestionIndex].gif;
          choice1Btn.innerHTML = questions[currentQuestionIndex].choices[0];
          choice2Btn.innerHTML = questions[currentQuestionIndex].choices[1];
          gif.style.display = "block";
          choice1Btn.style.display = "inline-block";
          choice2Btn.style.display = "inline-block";
          centerButtons();
      } else {
          question.innerHTML = "Oki mặc váy vào tối anh chở đi chơi<3 😘";
          gif.src = "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
          choice1Btn.style.display = "none";
          choice2Btn.style.display = "none";
      }
  }

  passwordBtn.addEventListener("click", function() {
      if (passwordInput.value === correctPassword) {
          passwordSection.style.display = "none";
          questionSection.style.display = "block";
          updateQuestion();
      } else {
          passwordError.style.display = "block";
      }
  });

  choice1Btn.addEventListener("click", function() {
      currentQuestionIndex++; // Tăng chỉ số câu hỏi hiện tại
      updateQuestion();
  });

  choice2Btn.addEventListener("mouseover", function() {
      const choice2BtnRect = choice2Btn.getBoundingClientRect();
      const maxX = window.innerWidth - choice2BtnRect.width;
      const maxY = window.innerHeight - choice2BtnRect.height;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      choice2Btn.style.left = randomX + "px";
      choice2Btn.style.top = randomY + "px";
  });

  function centerButtons() {
      choice1Btn.style.position = "absolute";
      choice2Btn.style.position = "absolute";
      choice1Btn.style.left = "40%";
      choice1Btn.style.top = "60%";
      choice1Btn.style.transform = "translate(-50%, -50%)";
      choice2Btn.style.left = "60%";
      choice2Btn.style.top = "60%";
      choice2Btn.style.transform = "translate(-50%, -50%)";
  }

  function resetButtons() {
      choice2Btn.style.left = "";
      choice2Btn.style.top = "";
      choice2Btn.style.position = "";
      choice1Btn.style.left = "";
      choice1Btn.style.top = "";
      choice1Btn.style.position = "";
  }

  // Gọi lại hàm để căn giữa các nút khi trang được tải
  centerButtons();
});
