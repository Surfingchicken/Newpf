document.addEventListener("DOMContentLoaded", e => {

  const g_mainfile = document.getElementById("mainfile");
  const g_explo = document.getElementById("fichieropen");
  const b_close = document.getElementById("close");
  const a_chemin = document.getElementById("chemin");
  //power on
  document.querySelector("header h1 button").addEventListener("click", () => {
    document.getElementById("poweron").style.display = "none";
  });

  // document.querySelector("header h1 button").addEventListener("keydown", () => {
  //   document.getElementById("poweron").style.display = "none";
  //   });
  //open file explo  
  g_mainfile.addEventListener("click", () => {
    g_explo.style.transform = "scale(1)";
    a_chemin.append("Portfolio_A_Delfino/");
  });
  //close file explo
  b_close.addEventListener("click", () => {
    g_explo.style.transform = "scale(0)";
    a_chemin.innerHTML -= "Portfolio_A_Delfino/";
  });
});