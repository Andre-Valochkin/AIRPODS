const button = document.querySelectorAll(".choose-pods button");
console.log(button);
const img = document.querySelectorAll(".airpods__img");
console.log(img);
const header = document.querySelectorAll(".header");
button.forEach(function (clicksic) {
  clicksic.addEventListener("click", function () {
    button.forEach(function (delit) {
      delit.classList.remove("choose-pods__active");
    });

    const oleg = clicksic.getAttribute("data-color");
    clicksic;
    clicksic.classList.add("choose-pods__active");
    console.log("oleg : ", oleg);

    img.forEach(function (elem) {
      elem.classList.remove("choose-pods__airpodsmax");
      elem.classList.add("choose-pods__airpodsmax");
    });
    let valera;
    img.forEach(function (elem) {
      valera = document.querySelectorAll(`.${oleg}`);
      console.log(valera);
    });
    valera.forEach(function (elem) {
      elem.classList.remove("choose-pods__airpodsmax");
    });
    header.forEach(function (elemen) {
      elemen.className = "";
      elemen.className = `air-${oleg}`;
    });
    console.log(header);
  });
});
