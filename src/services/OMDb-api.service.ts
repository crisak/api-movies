import { MovieDto } from '@/dtos'
import { OMDbResult } from '@/dtos/OMDb-api.dto'
import axios from 'axios'
import fs from 'fs'

class OMDbApiService {
  async getByYear(year: string): Promise<MovieDto[]> {
    const titleDefault = 'Love'
    const url = `${process.env.OMDBAPI_URL}&apikey=${process.env.OMDBAPI_KEY}&y=${year}&s=${titleDefault}`

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
