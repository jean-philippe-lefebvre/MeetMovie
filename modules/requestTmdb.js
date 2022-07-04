export default class requestTmdb {
  constructor(token) {
    this.token = token;
    this.listMovieVoted = [];

		this.request = null
    this.page = 1;
		this.lang = 'en-US'
		this.withGenres = []
		this.withoutGenres = []
    this.custom = { 
				limitP: 3, 
				limitN: -3, 
				minLengthListMovie: 5 
		}

  }

	// List of 20 popular movies
  async discover() {
    this.request =
      'https://api.themoviedb.org/3/discover/movie?api_key=' +
      this.token +
      '&language='+ this.lang +'&sort_by=popularity.desc&include_adult=false&include_video=true&page=' +
      this.page;

		if(this.withGenres.length) this.request = this.request + '&with_genres=' + this.withGenres.join(',')
		if(this.withoutGenres.length) this.request = this.request + '&without_genres=' + this.withoutGenres.join(',')

    let response = await this.send(this.request);
    response = this.customResponse(response);
    return response;
  }

	//URL video
  async movieVideos(id) {
    this.request =
      'https://api.themoviedb.org/3/movie/' +
      id +
      '/videos?api_key=' +
      this.token +
      '&language=' + this.lang;
    let response = await this.send(this.request);
    return response;
  }

	// Data of id Movie
  async detailsMovie(id) {
    this.request =
      'https://api.themoviedb.org/3/movie/' +
      id +
      '?api_key=' +
      this.token +
      '&language=' + this.lang;
    let response = await this.send(this.request);
    return response;
  }

  // Data of Credit id Movie
  async movieCredit(id){
    this.request =
     'https://api.themoviedb.org/3/movie/' +
      id +
      '/credits' +
    '?api_key=' +
   this.token +
   '&language=' + this.lang;
  let response = await this.send(this.request);
  return response;
 }

	/**
	 * Remove Movies voted and increment page if the list 
	 * of movies received is little
	 */
  customResponse(data) {
    let listFilm = data.results;
    //Recupere seulement les films que l'on a pas deja voter
    listFilm = listFilm.filter(
      film => !this.listMovieVoted.includes(film.id)
    );
    if (listFilm.length < this.custom.minLengthListMovie) {
      this.incrementePage();
      listFilm = this.discover();
    }
    return listFilm;
  }

	setLang(lang){
		if(!(typeof lang === 'string')) throw new TypeError()
		this.lang = lang
	}

	setWithGenres(tabGenre){
		if(typeof tabGenre !== 'object') throw new TypeError()
		this.withGenres = tabGenre
	}

	setWithoutGenres(tabGenre){
		if(typeof tabGenre !== 'object') throw new TypeError()
		this.withoutGenres = tabGenre
	}

	// Fetch already configured
  async send(request) {
    let init = {
      method: 'GET',
    };

    let response = await fetch(request, init);
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      return 'Error';
    }
  }

  incrementePage() {
    this.page++;
  }
	defaultPage() {
		this.page = 1
	}
   reset(){
    this.setWithoutGenres( [] )
    this.setWithGenres( [] )
    this.page = 1
    this.request = null
  }
}
