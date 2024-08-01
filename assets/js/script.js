function EasyPeasyParallax() {
	scrollPos = $(this).scrollTop();
	$('#banner').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
	$('#bannertext').css({
		'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/250)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
});

//VALIDACIÓN FORMULARIO
//Obtener los elementos del formulario
const form = document.getElementById('form1');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');
const nameErrorMessage = document.getElementById ('nameError');

//Crear funciones de validación
function validateName(name) {
	// Verifica si el nombre está vacío
	if (name.trim() === '') {
	  return 'El nombre es obligatorio.';
	}
	// Verifica si el nombre contiene solo letras
	// if (!/^[azAZ\u00C0\u00D6\u00D8\u00F6\u00F8\u00FF\sñ]+$/.test(name)) {
	// 	return 'El nombre solo debe contener letras.';
	//   }
	// Verifica si el nombre tiene una longitud máxima de 100 caracteres
	if (name.length > 100) {
	  return 'El nombre no puede tener más de 100 caracteres.';
	}
	return true; // El nombre es válido
  }

  function validateEmail(email) {
	// Verifica si el email está vacío
	if (email.trim() === '') {
	  return 'El email es obligatorio.';
	}
	// Verifica si el email tiene un formato válido
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
	  return 'El email no tiene un formato válido.';
	}
	return true; // El email es válido
  }

  function validateComment(comment) {
	// Verifica si el comentario está vacío
	if (comment.trim() === '') {
	  return 'El mensaje es obligatorio.';
	}
	// Verifica si el comentario tiene una longitud mínima de 6 caracteres
	if (comment.length < 6) {
	  return 'El mensaje debe tener al menos 6 caracteres.';
	}
	// Verifica si el comentario tiene una longitud máxima de 300 caracteres
	if (comment.length > 300) {
	  return 'El mensaje no puede tener más de 300 caracteres.';
	}
	return true; // El comentario es válido
  }

  //Agregar un evento de envío al formulario
  form.addEventListener('submit', (event) => {
	event.preventDefault(); // Evita que el formulario se envíe por defecto

	// Obtener los valores de los campos
	const name = nameInput.value;
	const email = emailInput.value;
	const comment = commentInput.value;
	console.log(name);

	// Validar los campos
	const nameError = validateName(name);
	const emailError = validateEmail(email);
	const commentError = validateComment(comment);

	// Mostrar los errores
	if (nameError !== true) { $('#errorName').text(nameError);
	  // Mostrar el error del nombre
	}
	else {
		$('#errorName').text(''); // Limpiar con jQuery
	  }

	if (emailError !== true) { $('#errorEmail').text(emailError);
	}
	else {
		$('#errorEmail').text('');
	  // Mostrar el error del email
	}
	if (commentError !== true) {$('#errorComment').text(commentError);
	}
	else {
		$('#errorComment').text('');
	  // Mostrar el error del mensaje
	}

	// Si todos los campos son válidos, enviar el formulario
	if (nameError === true && emailError === true && commentError === true) {
		alert('Haz enviado tu mensaje correctamente.');
    // Enviar el formulario
	$('#name').val('');
	$('#email').val('');
	$('#comment').val('');
	}
  });

