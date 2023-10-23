//variables utilisées
var sp, btn_start, btn_stop, t, ms, s, mn, h;

// fonction pour initialiser les variables au chargment de la page
window.onload = function () {
  sp = document.getElementsByTagName("span");
  btn_start = document.getElementById("start");
  btn_stop = document.getElementById("stop");
  t;
  (ms = 0), (s = 0), (mn = 0), (h = 0);
};

// Mettre en place le compteur
function update_chrono() {
  ms += 1;
  if (ms == 10) {
    ms = 1;
    s += 1;
  }
  if (s == 60) {
    s = 0;
    mn += 1;
  }
  if (mn == 60) {
    mn = 0;
    h += 1;
  }

  // Insertion des valeurs dans les spans
  // [0] permet de selectionner le premier span ...
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "mn";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}

// Mettre en place la fonction du bouton start
function start() {
  t = setInterval(update_chrono, 100); //execute la fonction toutes les 100ms
  btn_start.disabled = true;
}

// Stopper le chronomètre
function stop() {
  clearInterval(t); //suppression de l'intervale que nous avions créer
  btn_start.disabled = false;
}

// Initialiser les valeurs du compteur
function reset() {
  clearInterval(t);
  btn_start.disabled = false;
  ms = 0;
  s = 0;
  mn = 0;
  h = 0;
  // insérer les nouvelles valeurs dans les spans
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}
