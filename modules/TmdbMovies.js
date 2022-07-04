export default class TmdbMovies {
  constructor(requestApi) {
    this.pointer = 0;
    this.requestApi = requestApi;
    this.listMovie = []
    this.setter = null
		this.currentMovie = {
			movie: null,
			details: null,
      credit: null,
		}
		
		this.preferenceUser = {
			likeListScore: new Map(),
			historyLikeListScore: new Map(),
			movieVotedList: new Map(),
		}

    this.config = { 
				limitPositifPoint: 3, 
				limitNegatifPoint: -3, 
				minLengthListMovie: 5 
		}
  }

  async init() {
		try {
			// Récupération d'une liste de film
			this.listMovie = await this._getListMovie();
			await this._updateCurrentMovie()

		} catch(e) {
			console.log(e)
			this.currentMovie.movie = 'Error Data'
		}

  }

	async next(){

		if( this.isChangingLikeList() ){

			await this._setPointer(true)
			await this.init()	
		} else {

			await this._setPointer()
			await this._updateCurrentMovie()
	  }
  }

  // Test if the list (don't) like is changing
  isChangingLikeList(){
		const user = this.preferenceUser
		const likes = this._getLikeScore('like',user.likeListScore)
		const dontLikes = this._getLikeScore('dontLike',user.likeListScore)
    
		const historyLikes = this._getLikeScore('like',user.historyLikeListScore)
		const historyDontLikes = this._getLikeScore('dontLike',user.historyLikeListScore)
    
    return likes.join(',') != historyLikes.join(',') || dontLikes.join(',') != historyDontLikes.join(',')
  }

	/**
	 * Met à jour le film courant
	 */
  async _updateCurrentMovie(){
    this.currentMovie.movie = this.listMovie[this.pointer];
    // Donnée supplémentaire sur le film courant
		await this._detailsCurrentMovie()

    if(this.setter){
			this.setter({ ...this.currentMovie });
		}
  }

	async _detailsCurrentMovie(){
		const id = this.currentMovie.movie.id
		const response = await this.requestApi.detailsMovie(id);
		const credit = await this.requestApi.movieCredit(id)

		this.currentMovie.details = response;
		this.currentMovie.credit = credit;
	}

	async _setPointer(random = false) {
    if (random) {
			this.pointer = Math.round(
        Math.random() * (this.listMovie.length - 1) + 1
      );
			return 1;
		} else {
      this.pointer = this.pointer === this.listMovie.length - 1 ? 0 : this.pointer + 1;
      if (!this.pointer) {
        await this._reloadAllMovie();
      }
    }
	}

  /**
   * Changement de page
   */
  async _reloadAllMovie(){
    this.requestApi.incrementePage()
    await this.init()
  }

  async _getListMovie() {
    let list = await this.requestApi.discover();
    return list;
  }
  /**
   * Update the setter React of useState
   * @param {setter} set - Set of useState React
   * */
  setCurrentMovie(set) {
    this.setter = set;
  }

  getPosterImageUrl() {
    let path =
      this.currentMovie.movie.poster_path ||
      this.currentMovie.movie.backdrop_path ||
      null
    
    if(!path) return {
				Error: "Not found Path url", 
				data: { 
						objObserver: this.currentMovie.movie,
						poster_path: this.currentMovie.movie.poster_path,
						backdrop_path: this.currentMovie.movie.backdrop_path,
				}
		}
    return this.getFinalUrlImage(path)
  }

  getFinalUrlImage(uri) {
      return 'https://image.tmdb.org/t/p/w500' + uri;
  }

  async getMovieUrl() {
    let url = null

    const data = await this.requestApi.movieVideos(this.currentMovie.movie.id)
      if (data.results.length && data.results[0].key) {
        url = data.results[0].key
      }
      return 'https://www.youtube.com/embed/' + url + '?controls=1'
  }

  	getCasts(limit = null){
		const credit = this.currentMovie.credit
		const cast = this._bubbleSort(credit.cast, 'popularity')
		if(limit === null) limit = cast.length
    let newCast

		if(!cast.length >= limit) newCast = cast.reverse()
		else newCast = cast.reverse().slice(0,limit)

    return newCast.map(cast => {
      cast.profile_path = this.getFinalUrlImage(cast.profile_path)
      return cast
    })
	}
	
	getCrew(limit = null){
		const credit = this.currentMovie.credit
		const crew = this._bubbleSort(credit.crew, 'popularity')
		if(limit === null) limit = crew.length

		if(!crew.length >= limit) return crew.reverse()
		return crew.reverse().slice(0,limit)
	}
	
	_bubbleSort(array, field, result = []){
		const length = array.length
		if(length < 1) return result

		for(let i = length-1; i > 0; i--){
			const a = array[i]
			const b = array[i-1]
			if( a[field] < b[field] ){	
				array[i] = b
				array[i-1] = a
			}
		}

		result.push(array[0])
		array.shift()
		return this._bubbleSort(array, field, result)
	}

  getGenres() {
    let genres = this.currentMovie.movie.genres || this.currentMovie.movie.genre_ids;

    const tabGenre = [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 16, name: 'Animation' },
      { id: 35, name: 'Comedy' },
      { id: 80, name: 'Crime' },
      { id: 99, name: 'Documentary' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Family' },
      { id: 14, name: 'Fantasy' },
      { id: 36, name: 'History' },
      { id: 27, name: 'Horror' },
      { id: 10402, name: 'Music' },
      { id: 9648, name: 'Mystery' },
      { id: 10749, name: 'Romance' },
      { id: 878, name: 'Science Fiction' },
      { id: 10770, name: 'TV Movie' },
      { id: 53, name: 'Thriller' },
      { id: 10752, name: 'War' },
      { id: 37, name: 'Western' },
    ];

    return genres
      .map((el) => {
        let id = el.id || el;
        let genre = tabGenre.filter((e) => e.id === id)[0];
        return genre.name;
      })
      .join(', ');
  }

	_getGenresArray() {
		return this.getGenres().split(',').map(g => g.trim())
	}

  like() {
    this.setHistoryLikeList()
    
		const user = this.preferenceUser
		const movie = this.currentMovie.movie
    const genres = movie.genres || movie.genre_ids || [];
    
    this.updateListLikeGenre(user.likeListScore, genres, 1);
    
    user.movieVotedList.set(movie.id, {
      like: 1,
      title: movie.title,
      genres,
      uriPoster: this.getPosterImageUrl()
    });

		this.updateGenreRequest()
  }

  dontLike() {
    this.setHistoryLikeList()
    
		const user = this.preferenceUser
		const movie = this.currentMovie.movie
    const genres = movie.genres || movie.genre_ids || [];

    this.updateListLikeGenre(user.likeListScore, genres, -1);
    
    user.movieVotedList.set(movie.id, {
      like: 0,
      title: movie.title,
      genres,
      uriPoster: this.getPosterImageUrl()
    });
    
		this.updateGenreRequest()
  }

	// update history
  setHistoryLikeList(){
		const user = this.preferenceUser
		user.historyLikeListScore = new Map(Array.from(user.likeListScore))
  }

	/**
	 * Met a jout les Genres de la request
	 */
		updateGenreRequest(){
			const user = this.preferenceUser
			const genresLike = this._getLikeScore('like', user.likeListScore)
			this.requestApi.setWithGenres(genresLike)

			const genresDontLike = this._getLikeScore('dontLike', user.likeListScore)
			this.requestApi.setWithoutGenres(genresDontLike)
		}

  /**
   * Vérifie si un genre et dans la liste puis l'ajoute 
	 * ou modifie ses points
   */
  updateListLikeGenre(list, genres, action) {
		genres.forEach((genre) => {
      let isExist = list.has(genre)
      if (isExist) this.calculPoint(list, genre, action)
      else {
        list.set(genre, action)
      }

    });
  }

	calculPoint(list, genre, action){
		// Si le genre est dans la list
		let score = list.get(genre)
		score = score + action
		list.set(genre, score)

		//Quand on atteind une limite pour être custom, on repasse en page 1
		if (
			score === this.config.limitPositifPoint ||
			score === this.config.limitNegatifPoint
		) {
			this.requestApi.defaultPage();
		}
	}

	/**
	 * Met à zero les points dans la score liste
	 */
	resetScore(){
		const user = this.preferenceUser
		const keys = user.likeListScore.keys()
		// update history
		user.historyLikeListScore = user.likeListScore

		for( const key of keys){
			user.likeListScore.set(key, 0)	
		}
	}

 /**
  * Reset les preferenceUser, ListMovie, currentMovie
  */
  reset(){
    this.listMovie = []
    this.preferenceUser = {
      likeListScore: new Map(),
      historyLikeListScore: new Map(),
      movieVotedList: new Map(),
    }
    this.currentMovie = {
      movie: null,
      details: null,
      credit: null,
    }
    this.pointer = 0
    this.requestApi.reset()
  }

  countScore(){
    this.resetScore()
    const user = this.preferenceUser
      user.movieVotedList.forEach((dataMovie, movieId) => {
        const like = dataMovie.like === 0 ? -1 : 1
        this.updateListLikeGenre(user.likeListScore, dataMovie.genres, like);
    })
  }
  
	/**
 	* Obtenir une liste des genres ayant suffisament de point
	* dans le cadre d'une like list ou don't like list
	* @param {string} action, 'like' ou 'dontlike'
	* @param {object <Map>} list, list de score
 	*/
	_getLikeScore(action, list){
		if(action !== 'like' && action !== 'dontLike') return null
		const {limitPositifPoint, limitNegatifPoint} = this.config
		const currentList = list
		const newList = []

		currentList.forEach((score, genre) => {
			if( action === 'like' 
					&& score >= limitPositifPoint) newList.push(genre)
			if( action === 'dontLike' 
					&& score <= limitNegatifPoint) newList.push(genre)
		})
		return newList
	}
  
}
