const ApiErrorFactory = require('../../../../../../shared/factories/ApiErrorFactory')

const apiErrorFactory = ApiErrorFactory()

function GetSeverityByNameUseCase(repository) {
  const execute = async name => {
    if (name) {
      const response = await repository.findByName(name)
      return response
    } else {
      return apiErrorFactory.createError(
        'API Error',
        'GetSeverityWithMissingName',
        400
      )
    }
  }

  return { execute }
}

module.exports = GetSeverityByNameUseCase
