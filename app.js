let blockE1 = document.querySelector("#block");
let verticalPosition = document.querySelector("#position-y");
let horizontalPosition = document.querySelector("#position-x");
let blockSize = document.querySelector("#size");
let shapeSelector = document.querySelector("#shape-select");
let okBtn = document.querySelector("#ok-btn");
let rgbaR = document.querySelector("#rgba-r");
let rgbaG = document.querySelector("#rgba-g");
let rgbaB = document.querySelector("#rgba-b");
let rgbaA = document.querySelector("#rgba-a");
let rgbaContainer = document.querySelector(".rgba-container");
let rgbaInputs = rgbaContainer.querySelectorAll("input");

//Vertical position changer
verticalPosition.addEventListener("change", function () {
  blockE1.style.top = verticalPosition.value + "px";
});

//Horizontal Position Changer
horizontalPosition.addEventListener("change", function () {
  blockE1.style.left = horizontalPosition.value + "px ";
  console.log(horizontalPosition.value);
});

// Size Changer
blockSize.addEventListener("change", function () {
  blockE1.style.transform = "scale(" + blockSize.value + ")";
});

//SHape Changer

okBtn.addEventListener("click", function () {
  let shapeOption = shapeSelector.value;
  if (shapeOption === "1") {
    blockE1.style.borderRadius = "0";
  } else if (shapeOption === "2") {
    blockE1.style.borderRadius = "50%";
  }
});

//Background COlor Changer
for (let i = 0; i < rgbaInputs.length; i++) {
  rgbaInputs[i];
  //   console.log(rgbaInputs[i]);
  rgbaInputs[i].addEventListener("change", function () {
    blockE1.style.backgroundColor =
      "rgba(" +
      rgbaR.value +
      "," +
      rgbaG.value +
      "," +
      rgbaB.value +
      "," +
      rgbaA.value +
      ")";
  });
}
