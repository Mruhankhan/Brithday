let div = document.getElementById("div")
div.addEventListener("click", () => {
  document.body.classList.add("add")
  div.classList.add("")
  let h1 = document.getElementById("h1")
  h1.innerHTML = "Have an wonderful birthday hope you have a lots of presents "
  let h2 = document.getElementById("h2")
  h2.remove()
  let h3 = document.getElementById("h3")
  h3.remove()
})
