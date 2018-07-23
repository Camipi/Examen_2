$( document ).ready(function() {

	var contador = 0;

	//Elimina el  tweet, haciendo click al botón "X"
	$(document).on('click','.btnDelete' , function() {
		$(this).parent().parent().remove();
    });

    $('#btnTweet').on('click', function(event){
		event.preventDefault();
		
		//Crea un ID dinámico para cada tweet
		contador = contador + 1;
		console.log(contador);

		var textName = $('#twitear_name').val();
		var textNickname = $('#twitear_nickname').val();
		var textTweet = $('#tweet-text').val(); 

		//Agrega un nuevo tweet al tope del listado que se va creando
		$('#tweet').prepend( 
			'<div class="row content__tweet" id="itemtweet_' + contador +'">'
			+ '<div class="col-2 content__tweet-picture">' 
			+ 	'<img class="img-fluid btnDelete" src="../src/images/camila_pirela.png" alt="imagen de perfil">' 
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
			+ 	'<p><a href="#""><i class="col-3 far fa-comment"></i></a>  1</p>'
			+ 	'<p><a href="#""><i class="col-3 fas fa-retweet"></i></a>  1</p>'
			+ 	'<p><a href="#""><i id="heart" class="col-3 heart far fa-heart fa-heart-red"></i></a>  1</p>'
			+ 	'<p><a href="#""><i class="col-3 far fa-envelope"></i></a>  1</p>'
			+ '</div>' 
			+ '</div>')
		});
  

   



   
});