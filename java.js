
    $( document ).ready(function(){


      $('.search_button').on('click', function(){


        var userInput = $('#form-val').val().trim();
        
        userInput = userInput.replace(/ /g, "+");

        var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=14eH9AE8H0VOpN8hyrfwQrO6YrQxQHwH';

       
        $.ajax({url: queryURL, method: 'GET'}).done(function(response){

   
          console.log(response.data);


          var giphyURL = response.data[0].images.fixed_height.url;
          console.log(giphyURL)

         
          $('#gif_is_here').attr('src', giphyURL);

        });

      

 
        return false;
      })
      

    });


