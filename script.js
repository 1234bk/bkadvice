function openNewPagejoke() {
    
    window.open('joke.html', '_blank');
    
  }
  
  function openNewPagequote() {
    getNewquote();
    window.open('quote.html', '_blank');
  }
  function openNewPagehome() {
    window.open('index.html', '_blank');
  }
  function getNewquote() {
  fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        const quoteText = data.slip.advice;
        console.log(quoteText);
        document.getElementById('quoteContainer').innerHTML = `"${quoteText}"`;
      })
      .catch(error => {
        document.getElementById('quoteContainer').innerHTML = 'Failed to load quote.';
        console.error('Error fetching quote:', error);
      });
    }


    function getNewjoke() {
        fetch('https://v2.jokeapi.dev/joke/Any?type=single')
            .then(response => response.json())
            .then(data => {
              const quoteText = data.joke;
              console.log(quoteText);
              document.getElementById('jokeContainer').innerHTML = `"${quoteText}"`;
            })
            .catch(error => {
              document.getElementById('jokeContainer').innerHTML = 'Failed to load quote.';
              console.error('Error fetching quote:', error);
            });
          }



    getNewquote();
    getNewjoke();