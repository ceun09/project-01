const useFoldMenu = () => {
  const menu = document.querySelector('.gnb-menu')
  const btn = document.querySelector('.fold-btn');

  const handleClick = () => {
    menu.classList.toggle('hidden');
    btn.classList.toggle('fold');
  }

  btn.addEventListener('click', handleClick);
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
	elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText;
          elmnt.removeAttribute("include-html");
          includeHTML();        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }

  useFoldMenu();
}

