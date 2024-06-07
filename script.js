document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var mat = document.getElementById('mat').value;
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var med = (n1 + n2) / 2;
    var sit = med >= 5 ? "Aprovado" : "Reprovado";

    var tabela = document.getElementById('tabeladados').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    var celulaname = novaLinha.insertCell(0);
    celulaname.appendChild(document.createTextNode(name));

    var celulamat = novaLinha.insertCell(1);
    celulamat.appendChild(document.createTextNode(mat));

    var celulan1 = novaLinha.insertCell(2);
    celulan1.appendChild(document.createTextNode(n1));

    var celulan2 = novaLinha.insertCell(3);
    celulan2.appendChild(document.createTextNode(n2));

    var celulamed = novaLinha.insertCell(4);
    celulamed.appendChild(document.createTextNode(med.toFixed(2)));

    var celulasit = novaLinha.insertCell(5);
    celulasit.appendChild(document.createTextNode(sit));

    celulasit.classList.add(sit.toLowerCase());
});
