export interface ErrorResponseType {
  message: string
  error: unknown
}

class ErrorResponse implements ErrorResponseType {
  public message: string
  public error: unknown

  constructor(params?: { error?: unknown; message?: string }) {
    if (params?.error) console.error(params?.error)

    this.message = params?.message || 'Error internal server'
    this.error = params?.error || null
  }
}

export default ErrorResponse
