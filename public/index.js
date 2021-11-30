let div = document.getElementById("div")
div.addEventListener("click", () => {
  document.body.classList.add("add")
  let divNew = document.getElementById("new")
  divNew.classList.add("new")
  divNew.innerHTML = "Have a good birthday"
})
//
