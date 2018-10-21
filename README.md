## Flashcards

> Flashcard webapp using Sans Forgetica font for better learning

![screenshot](https://github.com/suda/flashcards/blob/master/hanzil-demo-gif.gif)


## getting started

Demo JSON available in `src/Data/cards.json`. This app requires a Firebase database containing structured data for the Hanzi you would like to study. The format the application expects out of the box is, as an example:

```
{
    "cards": [
        {
            "id": 1,
            "eng": "to be",
            "han": "是",
            "pin": "shì"
        },
        {
            "id": 2,
            "eng": "not",
            "han": "不",
            "pin": "bù"
        }, 
        ...

```
Place firebase connection data in `src/Config/Firebase/db_config.js` in the following format:
```
export const DB_CONFIG = {
    apiKey: YOUR_API_KEY,
    authDomain: YOUR_AUTH_DOMAIN,
    ...etc.
}
```

## to-do

Implement spaced-repetition algorithm with user feedback re: memoriziation confidence.

## misc

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


Cards by Sathish Selladurai from the Noun Project