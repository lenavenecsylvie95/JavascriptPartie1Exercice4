// Je déclare la fonction "validate" qui correspond à l'évènement "onclick" établie dans le formulaire.
function validate(){
// Je crée des variables (lastname, firsname, city) qui ont comme valeur la récupération de la value de l'input associé.
// La valeur de l'élément du document (l'index.html) que je récupère grâce à son Id.
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  alert('Nom : ' + lastname + '\n' + 'Prénom : ' + firstname + '\n' + 'Ville : ' + city);
}
