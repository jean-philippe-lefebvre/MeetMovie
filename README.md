# MeetMovie

MeetMovie is an app for finding new movies.
The design is inspired by Tinder.

![swipe](./assets/captures/swipe.gif 'swip')

The controllers tutorial is on the personal icon -> overlay
![overlay](./assets/captures/overlay.gif 'overlay')

You can see in the app for each movie, his trailer, and more information about him.
![details](./assets/captures/details.gif 'details')
![trailer](./assets/captures/trailer.gif 'trailer')

The custom filter (icon left top): click on the tags for selecting this tag (green) or block this tag (red, 2 clicks), and after your custom filter finish, click on submit.
When your swipe the movie (right or left), the points tags are going to update.
![filter](./assets/captures/filter.gif 'filter')

## Install
1. Install the dependency management : Yarn
`npm install --global yarn`

## Start (start command in ./root-projet)
1. Install all dependance of project
`yarn`

2. Change the API Key of TMDB
By default is my API Key but change for your API Key, that is most stable if more people use mine Key.
	- Create your compte on [TMDB](https://www.themoviedb.org/)
	- Check your [Api setting](https://www.themoviedb.org/settings/api)
	- Copy your API Key
	- Past on line 27, var API_KEY in file ./components/Pages/Home.js

3. Start the project
`yarn start`
4. Select your favorite simulation phone : Android or Apple (mac only)
![selection simulation](./assets/captures/console_simulator.png 'selection simulation')

