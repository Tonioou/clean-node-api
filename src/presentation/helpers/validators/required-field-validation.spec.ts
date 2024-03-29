import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

interface SutType {
  sut: RequiredFieldValidation
}

const makeSut = (): SutType => {
  const sut = new RequiredFieldValidation('field')
  return {
    sut
  }
}

describe('Required Fields Validation', () => {
  test('Should return a Missing Param Error if validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
