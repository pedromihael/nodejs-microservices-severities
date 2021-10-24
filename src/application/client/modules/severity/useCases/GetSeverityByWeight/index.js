const ApiErrorFactory = require('../../../../../../shared/factories/ApiErrorFactory')

const apiErrorFactory = ApiErrorFactory()

function GetSeverityByWeightUseCase(repository) {
  const execute = async weight => {
    if (weight) {
      const response = await repository.findByWeight(weight)
      return response
    } else {
      return apiErrorFactory.createError(
        'API Error',
        'GetSeverityWithMissingWeight',
        400
      )
    }
  }

  return { execute }
}

module.exports = GetSeverityByWeightUseCase
