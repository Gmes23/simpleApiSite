var movies = ['The Matrix', 'The Notebook', 'Mr. Nobody', 'The Lion King', 'kill bill', 'Star Wars', 'Across the Universe', 'Scarface', 'The Shining' ];

function renderButtons(){ 

        $('#moviesView').empty();

        for (var i = 0; i < movies.length; i++) {
            
            var a = $('<button class="btn btn-primary" id="buttonBlueMovie">')
            a.addClass('movie');
            a.attr('data-number', movies[i]);
            a.text(movies[i]);
            $('#moviesView').append(a)
        }

        $('.movie').on('click', function(){

            emptyMovie();

            var p = $(this).data('number'); 

            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";
            $.ajax({url: queryURL, method: 'GET'})
            .done(function(response) {
             var results = response.data;
            for(var i=0; i < results.length; i++){
            //if (results[i].rating == "r" || results[i].rating == "pg-13")
            //{
            //}
            //else {
             var gifDiv = $('<div class="item">')

             var rating = results[i].rating;

             var p = $('<p>').text( "Rating: " + rating);

             var personImage = $('<img>');

             personImage.attr('src', results[i].images.fixed_height.url);

             gifDiv.append(p)

             gifDiv.append(personImage)

             $('#moviesGifs').prepend(gifDiv);

             //$('.item')append.freezeframe();               
            //}
        }
        
    }); 
});

}




$('#addMovie').on('click', function(){

    
        var movie = $('#movie-input').val().trim();

        movies.push(movie);

        renderButtons();

        return false;
})

renderButtons();






function emptyMovie(){
    $('#moviesGifs').empty();
}

