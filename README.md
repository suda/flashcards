<h1 align="center">
	<br>
	<img height="80" alt="dvsync" src="src/assets/img/logo.png">
	<br>
	<br>
	<br>
</h1>

> Flashcard webapp using [Sans Forgetica](https://sansforgetica.rmit/) font for better learning

<hr />

# Check it out at **[https://flashcards.suda.pl](https://flashcards.suda.pl)**

## About

Currently I'm in the process of learning Spanish and reading about a [special font designed to improve remembering](https://sansforgetica.rmit/) got my attention. I forked [Wes Doyle's `react-flashcards`](https://github.com/wesdoyle/react-flashcards) and started tinkering. My goal was to help myself and the group I'm learning with, but I hope this might be helpful to more people.

## [Contributions welcome](http://contributionswelcome.org/)

I'd love anyones help with this project and there are two areas that might need it:

### Code

This is a small React app which just shows flashcards on load. I'm hoping to extend it with:

* [ ] Ability to mark a card as read and storing it in local storage
* [x] Menu that allows to select the data set (which language, category, level)
* [ ] Ability to store and restore progress between devices (I was thinking this could be done by sharing a QR code or link)
* [ ] Better mobile support (currently it looks nice on iPhone X/Xs but hasn't been tested on anything else)
* [ ] Different types of flashcards (i.e. images, entering text)

### Learning content

All flashcards are stored in [`src/data`](src/data) directory. It's just basic conjugation in Spanish, but in the future I want to add more types and maybe even languages. If you want to contribute here, please create an issue in this repo :)

## Attributions

Cards by Sathish Selladurai from the Noun Project