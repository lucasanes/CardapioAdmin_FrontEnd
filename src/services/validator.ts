export default class Validator {

  username(value: string) {

    if (value.length < 3) {
      return 'Seu nome precisa ter no mínimo 3 dígitos.'
    }

    if (/\s/g.test(value)) {
      return 'Seu nome não pode conter espaços.'
    }

    return null

  }

  email(value: string) {

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (!emailRegex.test(value)) {
      return 'Insira um e-mail válido.'
    }

    return null

  }

  senha(value: string) {

    const senhaRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#$%*_&^-]{8,24})$/

    if (!senhaRegex.test(value)) {
      return 'Sua senha precisa ter entre 8 e 24 dígitos, com no mínimo uma letra maiúscula, minúscula e um número.'
    }

    return null

  }

}