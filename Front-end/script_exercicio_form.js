//validar formulário

function validarFormulario() {

const telefone = document.getElementById("telefone").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

if (telefone === "" || email === "" || senha === "") {
  alert("Por favor, preencha todos os campos.");
  return false;
}

if (telefone.length < 10 || telefone.length > 15) {
  alert("O telefone deve ter entre 10 e 15 caracteres.");
  return false;
}

//expressão regular para validar o formato do telefone (apenas números, com ou sem traços)
const telefonePattern = /^\d{10,15}$/;
if (!telefonePattern.test(telefone)) {
  alert("Por favor, insira um telefone válido (apenas números).");
  return false;
}

if (email.length < 5 || email.length > 50) {
  alert("O email deve ter entre 5 e 50 caracteres.");
  return false;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
  alert("Por favor, insira um email válido.");
  return false;
}

if (senha.length < 6 || senha.length > 20) {
  alert("A senha deve ter entre 6 e 20 caracteres.");
  return false;
}

//expressão regular para validar a senha (pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial)
const senhaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;
if (!senhaPattern.test(senha)) {
  alert("A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
  return false;
}

return true;

}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validarFormulario()) {
      alert("Formulário enviado com sucesso!");
    }
  });