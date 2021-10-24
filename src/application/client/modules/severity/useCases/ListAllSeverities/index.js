const ApiErrorFactory = require('../../../../../../shared/factories/ApiErrorFactory')

const apiErrorFactory = ApiErrorFactory()

function ListAllSeveritiesUseCase(repository) {
  const execute = async () => {
    try {
      const response = await repository.findAll()
      return response
    } catch (error) {
      return apiErrorFactory.createError(
        'API Error',
        'CannotListAllSeverities',
        400
      )
    }
  }

  return { execute }
}

module.exports = ListAllSeveritiesUseCase
