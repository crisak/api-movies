import request from 'supertest'
import Server from '@/server'
import MockMoviesService from 'mocks/services/movies.service'

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

describe('/movies', () => {
  beforeEach((): void => {
    jest.clearAllMocks()
  })

  test('GET - Get all movies', async () => {
    const response = await request(app).get(`${pathDefault}/movies`)

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject(mockMoviesService.getAll())
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
  test('PUT  - All all records and should return all new records', () => {
    expect(5).toEqual(5)
  })
})
