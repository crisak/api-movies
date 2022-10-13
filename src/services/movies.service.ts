/* eslint-disable @typescript-eslint/naming-convention */
import { Pool } from 'pg'
import { MovieDto } from '@/dtos'
import { MovieJoinModel } from '@/models'

class MoviesService {
  constructor(private readonly postgresService: Pool) {}

  async getAll(year = '2022'): Promise<MovieDto[]> {
    const values = [year]
    const response = await this.postgresService.query<MovieJoinModel>(
      `select movie_id, name, image_poster, movie_types.description, year from movies inner join movie_types on movies.movie_types_id = movie_types.movie_types_id WHERE year=$1`,
      values
    )
    if (response.rows?.length > 0) {
      return response.rows.map(
        ({ movie_id, name, image_poster, year, description }) => ({
          id: movie_id,
          name,
          year,
          imagePoster: image_poster,
          category: description
        })
      )
    }
    return []
  }
}

export default MoviesService
