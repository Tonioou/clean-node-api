import { Validation } from '../../../presentation/protocols/validation'
import { ValidationComposite, EmailValidation, RequiredFieldValidation } from '../../../presentation/helpers/validators'
import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  const emailValidation = new EmailValidatorAdapter()
  validations.push(new EmailValidation('email', emailValidation))
  return new ValidationComposite(validations)
}
