const form = document.getElementById("form");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("msg").innerText = "Mensagem enviada!";
  });
}