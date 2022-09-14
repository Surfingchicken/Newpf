document.addEventListener("DOMContentLoaded", e => {
  //power on
  document.querySelector("header h1 button").addEventListener("click", () => {
    document.getElementById("poweron").style.display = "none";
  });
  //open file explo  
  document.getElementById("mainfile").addEventListener("click", () => {
    document.getElementById("fichieropen").style.display = "block";
  });
  //close file explo
  document.getElementById("close").addEventListener("click", () => {
    document.getElementById("fichieropen").style.display = "none";
  });
});