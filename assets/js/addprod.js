const btnFuncionario = document.getElementById('btn-funcionario');
const btnAdmin = document.getElementById('btn-admin');
const labelUser = document.getElementById('label-user');
const inputUser = document.getElementById('user-input');

btnFuncionario.addEventListener('click', () => {
  // Ajusta o destaque dos botões
  btnFuncionario.classList.add('active');
  btnAdmin.classList.remove('active');

  // Altera as propriedades para E-mail
  labelUser.textContent = 'E-MAIL';
  inputUser.type = 'email';
  inputUser.placeholder = 'nome@sebo-pansofia.com';
});

btnAdmin.addEventListener('click', () => {
  // Ajusta o destaque dos botões
  btnAdmin.classList.add('active');
  btnFuncionario.classList.remove('active');

  // Altera as propriedades para E-mail
  labelUser.textContent = 'USER';
  inputUser.type = 'text';
  inputUser.placeholder = 'admin_user';
});