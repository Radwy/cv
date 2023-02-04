function addToDay() {
    var paragraph = document.getElementById("today");
    var today = new Date();
    var year = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(today);
    paragraph.textContent += year;
  }