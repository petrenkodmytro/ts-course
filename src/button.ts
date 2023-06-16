const buttonTest = document.querySelector("#btnId")!; 
// ! - мы уверены что кнопка есть, иначе выдыет ошибку

buttonTest.addEventListener("click", () => {
  console.log("Test click");
});
