function londonBtnFunc() {
  const clickBtn = document.getElementById("londonBtn");
  clickBtn.addEventListener("click", function () {
    const color = ["grey", 'transparent'];
    document.getElementById("tab1-content").classList.remove("tabHidden");
    document.getElementById("tab2-content").classList.add("tabHidden");
    document.getElementById("tab3-content").classList.add("tabHidden");
    document.getElementById("londonBtn").style.backgroundColor = color[0];
    document.getElementById("parisBtn").style.backgroundColor = color[1];
    document.getElementById("tokyoBtn").style.backgroundColor = color[1];

  });
}

function parisBtnFunc() {
  const clickBtn = document.getElementById("parisBtn");
  clickBtn.addEventListener("click", function () {
    const color = ["grey", 'transparent'];

    document.getElementById("tab2-content").classList.remove("tabHidden");
    document.getElementById("tab1-content").classList.add("tabHidden");
    document.getElementById("tab3-content").classList.add("tabHidden");
    document.getElementById("parisBtn").style.backgroundColor = color[0];
    document.getElementById("londonBtn").style.backgroundColor = color[1];
    document.getElementById("tokyoBtn").style.backgroundColor = color[1];

  });
}

function tokyoBtnFunc() {
  const clickBtn = document.getElementById("tokyoBtn");
  clickBtn.addEventListener("click", function () {
    const color = ["grey", 'transparent'];

    document.getElementById("tab3-content").classList.remove("tabHidden");
    document.getElementById("tab1-content").classList.add("tabHidden");
    document.getElementById("tab2-content").classList.add("tabHidden");
    document.getElementById("tokyoBtn").style.backgroundColor = color[0];
    document.getElementById("londonBtn").style.backgroundColor = color[1];
    document.getElementById("parisBtn").style.backgroundColor = color[1];

  });
}

window.onload = function () {
  londonBtnFunc();
  parisBtnFunc();
  tokyoBtnFunc();
};
