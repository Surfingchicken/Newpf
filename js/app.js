document.addEventListener("DOMContentLoaded", e => {
  e.preventDefault();
  let g_mainfile = document.getElementById("mainfile");
  let g_explo = document.getElementById("fichieropen");
  //power on
  document.querySelector("header h1 button").addEventListener("click", () => {
    document.getElementById("poweron").style.display = "none";
  });
  document.querySelector("header h1 button").addEventListener("keydown", () => {
    document.getElementById("poweron").style.display = "none";
  });
  //open file explo  
  g_mainfile.addEventListener("click", () => {
    g_explo.style.transform = "scale(1)";
  });
  //close file explo
  g_mainfile.addEventListener("click", () => {
    g_explo.style.transform = "scale(0)";
  });
});