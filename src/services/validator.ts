export default class Validator {

  email(value: string) {

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    const isValid = emailRegex.test(value)

    if (!isValid) {
      return 'Insira um e-mail válido.'
    }

    return null

  }

}