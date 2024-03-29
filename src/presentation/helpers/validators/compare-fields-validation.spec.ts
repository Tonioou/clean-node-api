import { InvalidParamError } from '../../errors'
import { CompareFieldsValidation } from './compare-fields-validation'

interface SutType {
  sut: CompareFieldsValidation
}

const makeSut = (): SutType => {
  const sut = new CompareFieldsValidation('field', 'fieldToCompare')
  return {
    sut
  }
}

describe('Compare Fields Validation', () => {
  test('Should return a Invalid Param Error if validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({ field: 'any_name', fieldToCompare: 'name' })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('Should not return if validation succeeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({ field: 'any_name', fieldToCompare: 'any_name' })
    expect(error).toBeFalsy()
  })
})
