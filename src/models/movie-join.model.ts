import MovieModel from './movie.model'
import TypesModel from './types.model'

type MovieJoin = Omit<MovieModel, 'movie_types_id'> &
  Pick<TypesModel, 'description'>

export default MovieJoin
