# quote-me-senpai
Quotes and Photos from your favorite anime shows

# API - get quotes by anime title
fetch('https://animechan.vercel.app/api/quotes/anime?title=naruto')
     .then(response => response.json())
     .then(quotes => console.log(quotes))

# API - get quotes by character name
fetch('https://animechan.vercel.app/api/quotes/character?name=saitama')
     .then(response => response.json())
     .then(quotes => console.log(quotes))

# API - get anime images and gifs
https://nekos.best/api/v2/thumbsup?amount=20https://nekos.best/api/v2/thumbsup?amount=20