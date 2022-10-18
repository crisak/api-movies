import { MovieDto } from '@/dtos'
import { OMDbResult } from '@/dtos/OMDb-api.dto'
import axios from 'axios'

type GetByYearParams = Partial<{ year: string; page: number }>

class OMDbApiService {
  async getTotalItemsByYear(year: string): Promise<number> {
    const titleDefault = 'Love'
    const url = `${process.env.OMDBAPI_URL}&apikey=${process.env.OMDBAPI_KEY}&y=${year}&s=${titleDefault}`

    const { data } = await axios.get<OMDbResult>(url)

    return Number(data.totalResults)
  }

  async getByYear({ year, page }: GetByYearParams = {}): Promise<MovieDto[]> {
    const titleDefault = 'Love'
    let url = `${process.env.OMDBAPI_URL}&apikey=${process.env.OMDBAPI_KEY}&s=${titleDefault}`

    if (year) {
      url += `&y=${year}`
    }

    if (page) {
      url += `&page=${page}`
    }

    const { data } = await axios.get<OMDbResult>(url)

    return data.Search.map((record) => ({
      id: record.imdbID,
      name: record.Title,
      category: record.Type,
      imagePoster: record.Poster,
      year: record.Year.slice(0, 4)
    }))
  }
}

export default OMDbApiService
