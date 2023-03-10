let login = prompt("Enter ");
let message = (login == 'Employee') ?
 'Hello':
 (login == 'Diretor')?
 'Greeting':
 (login == '')?
 'No login':
 '';
 alert(message);
