$( document ).ready(function() {

	var contador = 0;

	//Elimina el  tweet, haciendo click al botón "X"
	$(document).on('click','.btnDelete' , function() {
		
		//Agrega sweet alert
		swal({
		  title: "¿Estás seguro",
		  text: "Una vez que lo borres, no podrás recuperarlo",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
		  	$(this).parent().parent().remove();

		    swal("Oh! ¡Tu tweet ha sido borrado!", {
		      icon: "success",
		    });
		  } else {
		    swal("¡Tu tweet está a salvo!");
		  }
		});
    });

	////Cambia clase del boton corazón
	$(document).on('click', '.heart', function(e) {
		
		$(this).siblings().text();

		var valorInicial = $(this).siblings().text();

		var valor = parseInt(valorInicial) + 1;

		$(this).siblings().text(valor);
		
		$(this).addClass('fa-heart-red');
		
	});

	//Envia tweet con informacion
    $('#btnTweet').on('click', function(event){
		event.preventDefault();

		//Crea un ID dinámico para cada tweet
		contador = contador + 1;
		
		var textName = $('#twitear_name').val();
		var textNickname = $('#twitear_nickname').val();
		var textTweet = $('#tweet-text').val(); 
		var input = document.getElementById('elegirImagen') ;
		var imagen = "";

		  if (input.files && input.files[0]) {
		    var reader = new FileReader();

		    reader.onload = function(e) {
		      
		      //Agrega un nuevo tweet al tope del listado que se va creando
				$('#tweet').prepend( 
				'<div class="row content__tweet" id="itemtweet_' + contador +'">'
				+ '<div class="col-2 content__tweet-picture">' 
				+ 	'<img class="img-fluid btnDelete" src="'+ e.target.result +'" alt="imagen de perfil">' 
				+ '</div>'
				+ '<div class="col-6 content__tweet-name">' 
				+ 	'<h5>' + textName + '</h5><h6>' + textNickname + '</h6></div>'
				+ '<div class="col-3 content__tweet-time">' 
				+ 	'<p>15 min</p>' 
				+ '</div>' 
				+ '<div class="col-1 content_tweet-delete">' 
				+ 	'<button class="btnDelete"><i class="fas fa-times"></i></button>' + '</div>'
				+ '<div class="col-12 content__tweet-text">' 
				+ 	'<p>' + textTweet + '</p>'
				+ '</div>'
				+ '<div class="col-12 content__tweet-line">' + '</div>'
				+ '<div class="row col-12 content__tweet-count justify-content-center">' 
				+ 	'<p><a href="#"><i class="col-3 far fa-comment"></i></a></p>'
				+ 	'<p><a href="#"><i class="col-3 fas fa-retweet"></i></a></p>'
				+ 	'<p><i class="col-3 heart far fa-heart"></i><span id="likes_' + contador + '">0</span></p>'
				+ 	'<p><a href="#"><i class="col-3 far fa-envelope"></i></a></p>'
				+ '</div>' 
				+ '</div>');

				//Resetea el formulario
				$('#content__twitear-form')[0].reset();
			    }

		    reader.readAsDataURL(input.files[0]);
		  }

		  	


		 		
		});

    




   
});