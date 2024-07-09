document.addEventListener("DOMContentLoaded", function() {
  const question = document.querySelector(".question");
  const gif = document.querySelector(".gif");
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");
  let isYesClicked = false; // Biến để kiểm tra xem đã click vào "Yes" hay chưa

  yesBtn.addEventListener("click", function() {
      question.innerHTML = "Oki mặc váy vào tối anh chở đi chơi<3 😘";
      gif.src = "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
      yesBtn.style.display = "none"; // Ẩn nút "Yes" sau khi đã chọn
      noBtn.style.display = "none";  // Ẩn nút "No" sau khi đã chọn
      isYesClicked = true; // Đánh dấu là đã click vào "Yes"
  });

  noBtn.addEventListener("mouseover", function() {
      if (!isYesClicked) {
          const noBtnRect = noBtn.getBoundingClientRect();
          const maxX = window.innerWidth - noBtnRect.width;
          const maxY = window.innerHeight - noBtnRect.height;

          const randomX = Math.floor(Math.random() * maxX);
          const randomY = Math.floor(Math.random() * maxY);

          noBtn.style.left = randomX + "px";
          noBtn.style.top = randomY + "px";
      }
  });

  // Function để căn giữa hình ảnh (có thể cần thiết cho các thay đổi sau này)
  function centerImage() {
      const gifRect = gif.getBoundingClientRect();
      const centerX = window.innerWidth / 2 - gifRect.width / 2;
      const centerY = window.innerHeight / 2 - gifRect.height / 2;

      gif.style.left = centerX + "px";
      gif.style.top = centerY + "px";
  }

  // Gọi lại hàm để căn giữa hình ảnh khi trang được tải
  centerImage();

  // Gọi lại hàm nếu cửa sổ được resize
  window.addEventListener("resize", centerImage);
});
