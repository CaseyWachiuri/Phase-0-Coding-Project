// Enable Color Change with mouse hover function
const colorchange = document.getElementsByTagName("hover");

/* colorchange.addEventListener("mouseover", (event) => {
  event.target.style.color = "purple";

  setTimeOut(() => {
  event.target.style.color = "orange";
  }, 5000);
})

onmouseover = (event) => {} */

document.getElementById("My paragraph").onmouseover = function()
{
    this.style.backgroundColor = "black";
}
