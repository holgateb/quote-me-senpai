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

## Possible Success Endpoints

```
highfive
happy
thumbsup
smile
dance
```

## Possible Failure Endpoints (mocking)

```
laugh
stare
baka
bored
```

## Possible Failure Endpoints (disappointed)

```
pout
facepalm
cry
shrug ?
```

## Possible Failure Endpoints (violent)

```
punch
kick
slap
```



<!-- Possible READ ME format to build on as project progresses -->

# Project 1: Quote Me Senpai!
## Overview
```
Create a Quiz to test Anime Knowledge... Do you know who said what?
Ensure Webpage is Functioning as Intended (ie: all links work, etc)
Create an End Product that works on Desktop and Mobile
Use Framework other than Bootstrap (we chose to utilize Materialize https://materializecss.com/ )
Have Features that Utilize Local Storage

```
Link to Web App:  <!-- LINK HERE -->

App Preview:
<!-- REPLACE WITH SCREENSHOT PATH  ![My Portfolio Screenshot](./Images/MyPortfolioScreenShot.png "My Portfolio Screenshot") -->

## Notes

Notes on App Implementation

## API's Utilized

API's Used