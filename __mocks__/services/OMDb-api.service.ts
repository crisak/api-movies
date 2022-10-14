import { MovieDto } from '@/dtos'

class OMDbApiService {
  getByYear = jest.fn(async (): Promise<MovieDto[]> => {
    return [
      {
        id: 'test1',
        name: 'Titanic',
        category: 'romance',
        imagePoster: 'https://myimage.png',
        year: '2020'
      }
    ]
  })
}

export default OMDbApiService
