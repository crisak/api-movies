/* eslint-disable @typescript-eslint/naming-convention */
import { Pool } from 'pg'
import { MovieDto } from '@/dtos'
import { MovieJoinModel } from '@/models'

class MoviesService {
  constructor(private readonly postgresService: Pool) {}

  async getAll(year: string): Promise<MovieDto[]> {
    const values = [year]
    const response = await this.postgresService.query<MovieJoinModel>(
      `SELECT movie_id, name, image_poster, movie_types.description, year FROM movies INNER JOIN movie_types on movies.movie_types_id = movie_types.movie_types_id WHERE year=$1`,
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

  async removeAllTypes(): Promise<boolean> {
    const sql = 'DELETE FROM movie_types'
    await this.postgresService.query(sql)
    return true
  }

  async removeAll(): Promise<boolean> {
    const sql = 'DELETE FROM movies'
    await this.postgresService.query(sql)
    return true
  }

  async createAllTypes(
    types: Array<{ description: string; id: number }>
  ): Promise<boolean> {
    const sqlParams: string[] = []
    let count = 1
    const params = types.reduce<Array<string | number>>(
      (prev, { id, description }) => {
        const recordSql: Array<string | number> = [id, description]

        const firstPosition = count
        count++
        const secondPosition = count

        sqlParams.push(`($${firstPosition}, $${secondPosition})`)

        count++
        return [...prev, ...recordSql]
      },
      []
    )

    const sql = `INSERT INTO movie_types(movie_types_id, description) VALUES ${sqlParams.join(
      ','
    )}`

    await this.postgresService.query(sql, params)
    return true
  }

  async updateAll(movies: MovieDto[]): Promise<MovieDto[]> {
    await Promise.all([this.removeAllTypes(), this.removeAll()])

    const categoryIndex: Record<string, { description: string; id: number }> =
      {}

    const typesMovies = movies.map((record, index) => {
      const id = index + 1

      const objectType = {
        id,
        description: record.category
      }

      categoryIndex[record.category] = objectType

      return objectType
    })

    await this.createAllTypes(typesMovies)

    const sqlParams: string[] = []

    let count = 1
    const params = movies.reduce<Array<string | number>>((prev, record) => {
      const imagePoster = record.imagePoster === 'N/A' ? '' : record.imagePoster
      const recordSql = [
        record.id,
        record.name,
        record.year,
        imagePoster,
        categoryIndex[record.category].id
      ]

      const $1 = count
      count++
      const $2 = count
      count++
      const $3 = count
      count++
      const $4 = count
      count++
      const $5 = count

      sqlParams.push(`($${$1}, $${$2}, $${$3}, $${$4}, $${$5})`)

      count++
      return [...prev, ...recordSql]
    }, [])

    const sql = `INSERT INTO movies(movie_id, name, year, image_poster, movie_types_id) VALUES${sqlParams.join(
      ','
    )}`

    await this.postgresService.query(sql, params)

    return movies
  }
}

export default MoviesService
