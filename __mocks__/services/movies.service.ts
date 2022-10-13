import { MovieDto } from '@/dtos'

class MoviesService {
  getAll = jest.fn(async (): Promise<MovieDto[]> => {
    return [
      {
        id: 'idtest',
        name: 'Sonic',
        year: '2022',
        imagePoster: 'http://localhost.com',
        category: 'De todo'
      },
      {
        id: 'matrixid',
        name: 'Matriz',
        year: '2022',
        imagePoster: 'http://localhost.com/matriz',
        category: 'De todo'
      },
      {
        id: 'hallowedid',
        name: 'Hallowe',
        year: '2022',
        imagePoster: 'http://localhost.com/hallowed',
        category: 'De todo'
      },
      {
        id: 'bajolamismaestralla',
        name: 'Bajo la misma estrella',
        year: '2022',
        imagePoster: 'http://localhost.com/bajolamismaestrella',
        category: 'De todo'
      },
      {
        id: 'idtest0',
        name: 'Sonic',
        year: '2022',
        imagePoster: 'http://localhost.com',
        category: 'De todo'
      },
      {
        id: 'matrixid1',
        name: 'Matriz',
        year: '2022',
        imagePoster: 'http://localhost.com/matriz',
        category: 'De todo'
      },
      {
        id: 'hallowedid3',
        name: 'Hallowe',
        year: '2022',
        imagePoster: 'http://localhost.com/hallowed',
        category: 'De todo'
      },
      {
        id: 'bajolamismaestralla4',
        name: 'Bajo la misma estrella',
        year: '2022',
        imagePoster: 'http://localhost.com/bajolamismaestrella',
        category: 'De todo'
      }
    ]
  })
}

export default MoviesService
