import { MovieDto } from '@/dtos'

class MoviesService {
  getAll = jest.fn(async (year: string): Promise<MovieDto[]> => {
    return [
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
      },
      {
        id: 'tt10166602',
        name: 'Love, Victor',
        year,
        imagePoster:
          'https://m.media-amazon.com/images/M/MV5BZmJmMmVjNTUtN2FjZi00YzdmLWJmMGMtNTQ4MmUwYmZmYmEwXkEyXkFqcGdeQXVyMTU5OTc2NTk@._V1_SX300.jpg',
        category: 'series'
      },
      {
        id: 'tt11100856',
        name: 'Love, Guaranteed',
        year,
        imagePoster:
          'https://m.media-amazon.com/images/M/MV5BNDE1MmE4MTktNzU0OS00YjdmLWEyNzYtY2JhNWE4ZWVlYmY5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg',
        category: 'movie'
      },
      {
        id: 'tt11768948',
        name: 'If Anything Happens I Love You',
        year,
        imagePoster:
          'https://m.media-amazon.com/images/M/MV5BZGI5OTU4MWQtMDE4ZS00ZWViLTk2OTItMmU5ZmRlNzg1N2Y5XkEyXkFqcGdeQXVyMzc3MTE2Mzg@._V1_SX300.jpg',
        category: 'movie'
      },
      {
        id: 'tt10380768',
        name: 'Love Life',
        year,
        imagePoster:
          'https://m.media-amazon.com/images/M/MV5BN2Y4ODk2ZTQtMzFjOS00MzlhLWFhN2YtYzBiYmRmNzFhYjY0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
        category: 'series'
      },
      {
        id: 'tt10516352',
        name: 'Love 101',
        year,
        imagePoster:
          'https://m.media-amazon.com/images/M/MV5BMzE0YjIyMGEtNTVmMS00NWM5LWI1OTUtNjAxNDE0ZDFhMDQ3XkEyXkFqcGdeQXVyMTIyMjI4OTkx._V1_SX300.jpg',
        category: 'series'
      },
      {
        id: 'tt10023024',
        name: 'Love Aaj Kal',
        year,
        imagePoster:
          'https://m.media-amazon.com/images/M/MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_SX300.jpg',
        category: 'movie'
      },
      {
        id: 'tt10888876',
        name: 'Love & Anarchy',
        year,
        imagePoster:
          'https://m.media-amazon.com/images/M/MV5BZTk3NTU5NzAtNGY0Zi00YTIwLWI0MWUtNTliMmVjOWNiY2VjXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_SX300.jpg',
        category: 'series'
      }
    ]
  })

  updateAll = jest.fn(async (movies: MovieDto[]) => {
    return movies
  })
}

export default MoviesService
