export default class Validator {

  username(value: string) {

    if (value.length < 1) {
      return 'Campo não preenchido.'
    }

    if (value.length < 3) {
      return 'Seu nome precisa ter no mínimo 3 dígitos.'
    }

    if (/\s/g.test(value)) {
      return 'Seu nome não pode conter espaços.'
    }

    return null

  }

  email(value: string) {

    if (value.length < 1) {
      return 'Campo não preenchido.'
    }

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (!emailRegex.test(value)) {
      return 'Insira um e-mail válido.'
    }

    return null

  }

  senha(value: string) {

    if (value.length < 1) {
      return 'Campo não preenchido.'
    }

    const senhaRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#$%*_&^-]{8,24})$/

    if (!senhaRegex.test(value)) {
      return 'Sua senha precisa ter entre 8 e 24 dígitos, com no mínimo uma letra maiúscula, minúscula e um número.'
    }

    return null

  }

  imagem(value: string, type: string) {

    if (value.length < 1) {
      return `${type} precisa ter uma imagem.`
    }

    return null

  }

  cpf(value: string) {
    function TestaCPF(strCPF: string) {
      var Soma;
      var Resto;
      Soma = 0;
      if (strCPF == "00000000000") return false;

      for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11)) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;
      for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11)) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11))) return false;
      return true;
    }

    if (value.length < 1) {
      return 'Campo não preenchido.'
    }

    if (!TestaCPF(value)) {
      return 'CPF inválido.'
    }
  }

}