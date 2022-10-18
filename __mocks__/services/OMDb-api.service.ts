import { MovieDto } from '@/dtos'

interface GetByYearParams {
  year: string
  page?: number
}

class OMDbApiService {
  getTotalItemsByYear = jest.fn(async (): Promise<number> => {
    return 10
  })

  getByYear = jest.fn(
    async ({ year }: GetByYearParams): Promise<MovieDto[]> => {
      return [
        {
          id: 'test1',
          name: 'Titanic',
          category: 'romance',
          imagePoster: 'https://myimage.png',
          year
        },
        {
          id: 'tt2222042',
          name: 'Love and Monsters',
          year,
          imagePoster:
            'https://m.media-amazon.com/images/M/MV5BYWVkMWEyMDUtZTVmOC00MTYxLWE1ZTUtNjk4M2IzMjY2OTIxXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_SX300.jpg',
          category: 'movie'
        },
        {
          id: 'tt9354842',
          name: 'To All the Boys: P.S. I Still Love You',
          year,
          imagePoster:
            'https://m.media-amazon.com/images/M/MV5BZjMwNDQ4NzMtOThmZi00NmMyLThkMWItMTA3MTg2YjdiZDRmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
          category: 'movie'
        },
        {
          id: 'tt5096470',
          name: 'Love Wedding Repeat',
          year,
          imagePoster:
            'https://m.media-amazon.com/images/M/MV5BZGEwZDNmNTktOGNmMi00ZmRlLTljYzItNWJkZDc2OTcxZmZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
          category: 'movie'
        }
      ]
    }
  )
}

export default OMDbApiService
