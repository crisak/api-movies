import request from 'supertest'
import Server from '@/server'
import MockMoviesService from 'mocks/services/movies.service'
import { MovieDto } from '@/dtos'

const app = new Server().getApp()
const mockMoviesService = new MockMoviesService()

jest.mock('@/services', () => {
  const modules = jest.requireActual('mocks/services')
  return {
    __esModule: true,
    ...modules
  }
})

const pathDefault = '/api/v1'
const defaultYear = '2020'

describe('/movies', () => {
  beforeEach((): void => {
    jest.clearAllMocks()
  })

  test('GET - Get all movies with year 2020 by default', async () => {
    const response = await request(app).get(`${pathDefault}/movies`)

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject(mockMoviesService.getAll(defaultYear))
  })

  test('GET - Get all movies with year different to 2020 ', async () => {
    const yearFilter = '2018'
    const response = await request(app).get(
      `${pathDefault}/movies?year=${yearFilter}`
    )

    const allData = response.body as MovieDto[]

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject(mockMoviesService.getAll(defaultYear))

    allData.forEach((movie) => {
      expect(movie.year).toBe(yearFilter)
    })
  })

  test('GET - Should throw error if year is invalid', async () => {
    const response = await request(app).get(
      `${pathDefault}/movies?year=yearInvalid`
    )

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject({
      error: 'Invalid query string',
      message: 'Bad request'
    })
  })

  test('PUT  - Update all records with year 2020 by default', async () => {
    const response = await request(app).put(`${pathDefault}/movies`)

    const data = response.body as MovieDto[]

    expect(Array.isArray(data)).toBeTruthy()

    data.forEach((movie) => {
      expect(movie.year).toBe(defaultYear)
    })

    expect(response.status).toBe(200)
  })

  test('PUT  - Update all records with year different to 2020 by default', async () => {
    const yearFilter = '2024'

    const response = await request(app).put(
      `${pathDefault}/movies?year=${yearFilter}`
    )

    const data = response.body as MovieDto[]

    expect(Array.isArray(data)).toBeTruthy()

    data.forEach((movie) => {
      expect(movie.year).toBe(yearFilter)
    })

    expect(response.status).toBe(200)
  })
})
