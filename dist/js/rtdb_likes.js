// // section likes
// const satisfiedButton = document.getElementById("satisfiedButton");
// const likeCount = document.getElementById("likeCount");
// let currentCount = parseInt(localStorage.getItem("likeCount")) || 50;
// let isLiked = localStorage.getItem("isLiked") === "true";

// likeCount.textContent = currentCount.toString();

// if (isLiked) {
//   satisfiedButton.innerHTML =
//     '<i class="fa-solid fa-heart text-[7rem]" style="color: #ec1f09;"></i>';
// }

// satisfiedButton.addEventListener("click", () => {
//   if (!isLiked) {
//     currentCount += 1;
//     likeCount.textContent = currentCount.toString();
//     satisfiedButton.innerHTML =
//       '<i class="fa-solid fa-heart text-[7rem]" style="color: #ec1f09;"></i>';
//     isLiked = true;
//   } else {
//     currentCount -= 1;
//     likeCount.textContent = currentCount.toString();
//     satisfiedButton.innerHTML = '<i class="fa-regular fa-heart text-[7rem]"></i>';
//     isLiked = false;
//   }
//   localStorage.setItem("likeCount", currentCount.toString());
//   localStorage.setItem("isLiked", isLiked.toString());
// });

// const dislikeButton = document.getElementById("dislikeButton");
// let isDisliked = false;

// dislikeButton.addEventListener("click", () => {
//   if (!isDisliked) {
//     dislikeButton.innerHTML =
//       '<i class="fa-solid fa-heart-crack text-[7rem]" style="color: #ec1f09;"></i>';
//     isDisliked = true;

//     if (isLiked) {
//       currentCount -= 1;
//       likeCount.textContent = currentCount.toString();
//       satisfiedButton.innerHTML = '<i class="fa-regular fa-heart text-[7rem]"></i>';
//       isLiked = false;
//       localStorage.setItem("likeCount", currentCount.toString());
//       localStorage.setItem("isLiked", isLiked.toString());
//     }
//   } else {
//     dislikeButton.innerHTML = '<i class="fa-solid fa-heart-crack text-[7rem]"></i>';
//     isDisliked = false;
//   }
// });
// // section likes end

// section likes end
