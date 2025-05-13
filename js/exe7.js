
  function lista(event) {
    event.preventDefault(); // precisa dos parênteses!

    var p1 = document.getElementById('p1').value;
    var p2 = document.getElementById('p2').value;
    var p3 = document.getElementById('p3').value;
    var p4 = document.getElementById('p4').value;
    var p5 = document.getElementById('p5').value;

    var lista = [p1, p2, p3, p4, p5].reverse();

    alert(lista);
  }
