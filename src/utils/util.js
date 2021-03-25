import ApiService from '../services/api.service'

const Util = {

  getMensagemErro (campo) {
    if (!campo.$error) {
      return ''
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'maxLength') && !campo.maxLength) {
      return `Deve ter até ${campo.$params.maxLength.max} catecteres`
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'minLength') && !campo.minLength) {
      return `Deve ter pelo menos ${campo.$params.minLength.min} caracteres`
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'numeric') && !campo.numeric) {
      return 'Deve ter somente números'
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'email') && !campo.email) {
      return 'Email inválido'
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'validaCPF') && !campo.validaCPF) {
      return 'CPF Inválido'
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'validaCNPJ') && !campo.validaCNPJ) {
      return 'CNPJ Inválido'
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'ValidaCPFCNPJ') && !campo.ValidaCPFCNPJ) {
      return 'Número Inválido'
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'sameAsPassword') && !campo.sameAsPassword) {
      return 'As senhas não coincidem'
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'isNotZero') && !campo.notZero) {
      return 'Digite algum valor'
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'isValidDate') && !campo.notZero) {
      return 'Data inválida'
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'IsCPFCNPJUnique') && !campo.IsCPFCNPJUnique) {
      if (!campo.$model) return 'Preenchimento obrigatório'
      return 'O CPF/CNPJ já foi cadastrado'
    }
    if (Object.prototype.hasOwnProperty.call(campo, 'isValidCFOPCode') && !campo.isValidCFOPCode) {
      if (!campo.$model) return 'Preenchimento obrigatório'
      return 'O Código CFOP Não É Válido'
    }
    if (!campo.required) {
      return 'Preenchimento obrigatório'
    }
  },

  isEmailAddress (str) {
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return pattern.test(str)
  },

  isNotEmpty (str) {
    const pattern = /\S+/
    return pattern.test(str)
  },

  isNumber (str) {
    const pattern = /^\d+$/
    return pattern.test(str)
  },

  isSame (str1, str2) {
    return str1 === str2
  },

  isNumberKey (evt) {
    if (!evt) {
      evt = window.event
    }
    const charCode = (evt.which) ? evt.which : evt.keyCode
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
      evt.preventDefault()
    } else {
      return true
    }
  },

  validaCPF (cpf) {
    if (!cpf) {
      return true
    }

    cpf = cpf.replace(/[^\d]+/g, '')
    if (cpf === '') {
      return true
    }

    // Elimina CPFs invalidos conhecidos
    if (cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999') {
      return false
    }
    // Valida 1o digito
    let add = 0
    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i)
    }
    let rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) {
      rev = 0
    }
    if (rev !== parseInt(cpf.charAt(9))) {
      return false
    }
    // Valida 2o digito
    add = 0
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i)
    }
    rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) {
      rev = 0
    }
    if (rev !== parseInt(cpf.charAt(10))) {
      return false
    }
    return true
  },

  validaCNPJ (cnpj) {
    if (!cnpj) {
      return true
    }

    cnpj = cnpj.replace(/[^\d]+/g, '')
    if (cnpj === '') {
      return true
    }

    if (cnpj.length !== 14) {
      return false
    }

    if (cnpj === '00000000000000' ||
      cnpj === '111111111111111' ||
      cnpj === '22222222222222' ||
      cnpj === '33333333333333' ||
      cnpj === '44444444444444' ||
      cnpj === '55555555555555' ||
      cnpj === '66666666666666' ||
      cnpj === '77777777777777' ||
      cnpj === '88888888888888' ||
      cnpj === '99999999999999') {
      return false
    }

    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho)
    const digitos = cnpj.substring(tamanho)
    let soma = 0
    let pos = tamanho - 7
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--
      if (pos < 2) {
        pos = 9
      }
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado !== parseInt(digitos.charAt(0))) {
      return false
    }

    tamanho = tamanho + 1
    numeros = cnpj.substring(0, tamanho)
    soma = 0
    pos = tamanho - 7
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--
      if (pos < 2) {
        pos = 9
      }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado !== parseInt(digitos.charAt(1))) {
      return false
    }

    return true
  },

  /**
   * Verifica se um dado CPF/CNPJ já foi cadastrado no banco de dados, retornando
   * um booleano para identificar.
   * @param {String} value - CPF/CNPJ a ser verificado
   */
  async searchDuplicatedCpfCnpj (value) {
    if (!value) return

    const retorno = await ApiService.customGet(`/cadastros-basicos/parceiros?q=${value}&field=cpf_cnpj`)

    if (retorno && retorno.data.parceiros.length > 0) {
      return false
    } else {
      return true
    }
  },

  /**
   * Verifica se um dado código CFOP existe na base de dados, retornando
   * um booleano para identificar.
   * @param {String} value - CPF/CNPJ a ser verificado
   */
  async searchValidCFOPCode (value) {
    if (!value) return

    const retorno = await ApiService.customGet(`cadastros-comuns/cfop/${value}`)

    if (retorno && retorno.data.length > 0) {
      return false
    } else {
      return true
    }
  },

  /**
   * Valida se uma data no formato 'DD/MM/YYYY' segue os limites máximos para uma data
   * válida, limitando-se até '31/12/2999'
   * @param {String} val - Data no formato 'DD/MM/YYYY'.
   */
  isValidDate (val) {
    if (val && val.length === 10) {
      const regexp = new RegExp('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}$', 'ig')
      return regexp.test(val)
    } else if (val && val.length === 7) {
      const regexp = new RegExp('^(0[1-9]|1[012])/[12][0-9]{3}$', 'ig')
      return regexp.test(val)
    } else {
      return false
    }
  },

  formatFloat (amount, decimalCount = 2, decimal = ',', thousands = '.') {
    try {
      decimalCount = Math.abs(decimalCount)
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount

      const negativeSign = amount < 0 ? '-' : ''

      const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString()
      const j = (i.length > 3) ? i.length % 3 : 0

      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '')
    } catch (e) {
      //
    }
  },

  /**
   * Formata uma string referente a um CPF ou CNPJ no formato ########### (cpf, sem caracteres especiais)
   * ou ############## (cnpj, sem caracteres especiais) para o formato ###.###.###-## ou ##.###.###/####-##,
   * respectivamente, baseado num tipo de pessoa provido como parametro..
   * @param {String} str - Cpf ou CNPJ a ser formatado.
   * @param {String} tipoPessoa Tipo de pessoa (F - física, J - jurídica)
   */
  formataCpfCnpj (str) {
    if (!str) { return }

    let result = ''

    if (str && str.length === 11) {
      result = str.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    } else {
      result = str.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')
    }

    return result
  },

  /**
   * Formata uma string referente a um telefone no formato ########### (celular com DDD + 9 dígitos)
   * Ou ########## (telefone fixo com DDD + 8 digitos)
   * @param {String} str - Número do telefone a ser formatado.
   */
  formataNumeroTelefone (str) {
    let result = ''

    // Se menor que 11 é um número de tel. fixo
    if (str && str.length < 11) {
      result = str.replace(/(\d{2})(\d{4})(\d{4})/g, '($1) $2-$3')
    } else {
      result = str.replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3')
    }

    return result
  },

  /**
   * Enfatiza o trecho da string pesquisada em azul negrito.
   * @param {Boolean} loadingState - Estado que informa se uma busca está sendo
   * carregada ou não, para evitar o hightlight antes da busca ser concluída.
   * @param {String} row - String a ser avaliada.
   * @param {String} query - String da pesquisa a ter o highlight.
   */
  highlightSearch (loadingState, row, query) {
    // Ignorar acentos e caracteres especiais
    // str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
    // str = str.replace(/[àáâãäå]/,"a");
    // str = str.replace(/[ÈÉÊË]/,"E");
    // str = str.replace(/[Ç]/,"C");
    // str = str.replace(/[ç]/,"c");

    if (query && query.length > 2 && !loadingState) {
      return row.replace(new RegExp(query, 'gi'), (str) => {
        return `<span class="text-bold text-blue-10">${str}</span>`
      })
    } else {
      return row
    }
  },

  /**
   * Lida com o estado de habilitado ou desabilitado de um botão. Caso a array 'selected' possuir mais de um
   * selecionado, retornará true para desabilitar um ou mais botões, caso não, retornará falso para habilitá-lo.
   * Serve para desabilitar botões como 'visualizar', para evitar visualizar multiplas telas de uma vez.
   * @param {Array} selected - Array de itens selecionados.
   */
  disableHandler (selected) {
    if (selected.length !== 1) {
      return true
    } else if (selected[0].status && selected[0].status === 'A') {
      return true
    } else {
      return false
    }
  },
  disableHandlerEdit (selected) {
    if (selected.length !== 1) {
      return true
    } else {
      return false
    }
  },
  /** Disable Handler do botão de estorno da tela de movimento de caixa */
  disableHandlerEstorno (selected) {
    if (selected && selected.length === 1 && selected[0].pagamentoRecebimentoOrigemId) {
      return false
    }
    return true
  },
  /** Disable Handler do botão de estorno da tela de Pagamento/Recebimento */
  disableHandlerEstornoPagRec (selected) {
    if (selected && selected.length === 1) {
      return false
    }
    return true
  },

  /**
   * Compara duas arrays em relação à primeira e adiciona (aplicando uma flag 'missing: true') os elementos
   * em falta na segunda array, retornando-a
   * @param {Array} param1 - Array 1
   * @param {Array} param2 - Array 2
   * @param {String} checkingProperty - Parametro usado como comparador.
   * @returns {Array} - Array de elementos preenchida com os elementos em falta marcados com uma flag.
   */
  getElementsMissing (param1, param2, checkingProperty) {
    // find missing elements
    let missingElements = param1.filter(e => {
      return !param2.find(a => {
        return e[checkingProperty[0]] === a[checkingProperty[0]] && e[checkingProperty[1]] === a[checkingProperty[1]]
      })
    })
    // mark 'em as missing
    missingElements = missingElements.map(item => {
      return { ...item, missing: true }
    })
    // join them
    const arr2filled = param2.concat(missingElements)
    // return it
    return arr2filled
  },

  /**
   * Checa se dois objetos são identicos, de acordo com as seguintes regras:
   *
   * - Tem o mesmo 'constructor';
   * - Tem a mesmas instancias (herdadas de Object);
   * - Tem o mesmo 'typeof' (igual a "object");
   * - Tem as mesmas propriedades e valores para estes;
   */
  objectsAreIdentical (object1, object2) {
    // Return 'false' if constructors aren't the same:
    if (object1.constructor !== object2.constructor) {
      return false
    }

    // Return if objects isn't instances of Object object:
    if (!(object1 instanceof Object) && !(object2 instanceof Object)) {
      return false
    }

    // Return 'false' if the typeof objects aren't the same:
    if (typeof object1 !== 'object' && typeof object2 !== 'object') {
      return false
    }

    // Checks if the object has same properties and values:
    for (const key in object1) {
      if (Object.prototype.hasOwnProperty.call(object1, key) && object1[key] === object2[key]) {
        continue
      } else {
        return false
      }
    }

    for (const key in object2) {
      if (Object.prototype.hasOwnProperty.call(object2, key) && object2[key] === object1[key]) {
        continue
      } else {
        return false
      }
    }

    return true
  },
  /**
   * Recebe uma array e reordena-a baseado em uma propriedade e um valor passado como paramentro.
   * @param {Array} arr - Array to be modified;
   * @param {String} prop - property to be considered in sorting;
   * @param {*} propValue - prop value to be considered in sorting;
   */
  sortItemsToEnd (arr, prop, propValue) {
    arr.sort((a, b) => {
      return (a[prop] === propValue) - (b[prop] === propValue) || +(a[prop] > b[prop]) || -(a[prop] < b[prop])
    })
  },

  /**
   * Função que joga pro final da array um dado elemento no index informado.
   * @param {*} arr - array a reordenar.
   * @param {*} elemIndex - index do elemento a ser jogado ao final da array.
   */
  pushItemToEnd (arr, elemIndex) {
    arr.push(arr.splice(elemIndex, 1)[0])
  },

  /**
   * Função que retorna a data ref. ao ultimo dia do mês, no
   * formato YYYY-MM-DD por padrão, ou no formato usado no Brasil
   * DD-MM-YYYY caso o parametro 'br' seja passado. Pode escolher ainda
   * o separador, que por padrão é '-'.
   */
  getMonthLastDate (format = '', separator = '-') {
    const yearNow = new Date().getFullYear()
    let monthNow = new Date().getMonth() + 1
    monthNow = monthNow < 10 ? '0' + monthNow : monthNow
    const lastDay = new Date(yearNow, monthNow, 0).getDate()

    if (format === 'br') {
      return `${lastDay}${separator}${monthNow}${separator}${yearNow}`
    }

    return `${yearNow}${separator}${monthNow}${separator}${lastDay}`
  },
  /**
   * Função que retorna a data ref. ao primeiro dia do mês, no
   * formato YYYY-MM-DD por padrão, ou no formato usado no Brasil
   * DD-MM-YYYY caso o parametro 'br' seja passado. Pode escolher ainda
   * o separador, que por padrão é '-'.
   */
  getMonthFirstDate (format = '', separator = '-') {
    const yearNow = new Date().getFullYear()
    let monthNow = new Date().getMonth() + 1
    monthNow = monthNow < 10 ? '0' + monthNow : monthNow

    if (format === 'br') {
      return `01${separator}${monthNow}${separator}${yearNow}`
    }
    return `${yearNow}${separator}${monthNow}${separator}01`
  },

  /**
   * Retorna a data de hoje, no formato DD/MM/YYYY. Se passado
   * 'us' em 'format', retorna YYYY/MM/DD, e o separador padrão,
   * caso nenhum for passado no argumento 'separator', é '/'.
   */
  getDateNow (format = '', separator = '/') {
    const date = new Date()
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month = (date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)
    const year = date.getFullYear()

    if (format === 'us') {
      return `${year}${separator}${month}${separator}${day}`
    }
    return `${day}${separator}${month}${separator}${year}`
  },
  /**
   * Abre um registro quando o usuário clica/toca duas vezes sobre a linha.
   * Recebe o "record" que é o estado da linha , onde o seleciona para o
   * abrir e por fim o método responsável por abrir o registro.
   *
   * @param {Function} loadRecordsMethod - Metodo que é chamado para abrir o
   */
  onDoubleClickOpen (loadRecordsMethod) {
    loadRecordsMethod.call()
  },

  /**
   * Retorna diferentes alturas baseadas no viewport do client que estiver
   * acessando.
   */
  getRightHeight (screen) {
    if (screen.lt.sm) { // < 1023px
      return {
        frame: '',
        splitter: '',
        splitterAudit: '',
        table: '',
        tableFull: '',
        tableAudit: '',
        tableFullAudit: '',
        listItems: 5
      }
    }
    if (screen.lt.md) { // < 1439px
      return {
        frame: 'height: 86vh;',
        splitter: 'height: 63vh;',
        splitterAudit: 'height: 75vh;',
        table: 'max-height: 35vh;',
        tableFull: 'max-height: 48vh;',
        tableAudit: 'max-height: 30vh;',
        tableFullAudit: 'max-height: 40vh;',
        listItems: 10
      }
    }
    if (screen.lt.lg) { // < 1919px
      return {
        frame: 'height: 88vh;',
        splitter: 'height: 66vh;',
        splitterAudit: 'height: 78vh;',
        table: 'max-height: 40vh;',
        tableFull: 'max-height: 55vh;',
        tableAudit: 'max-height: 55vh;',
        tableFullAudit: 'max-height: 65vh;',
        listItems: 20
      }
    }

    return {
      frame: 'height: 90vh;',
      splitter: 'height: 74vh;',
      splitterAudit: 'height: 86vh;',
      table: 'max-height: 55vh;',
      tableFull: 'max-height: 65vh;',
      tableAudit: 'max-height: 75vh;',
      tableFullAudit: 'max-height: 85vh;',
      listItems: 50
    }
  },

  /**
   * Transforma textos em snake_case para "Title Case", separado por espaços.
   * @param str - Word to be converted.
   */
  capitalizeSnakeCaseString (str) {
    const res = str
      .split('_')
      .map(([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join('').toLowerCase())
      .join(' ')

    return res
  },

  // Retornar data formatada
  getFormattedDate (date) {
    return new Date(date).toLocaleDateString()
  },

  async waitSomeTime (timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout)
    })
  },

  /**
   * Ajuste manual que, antes de focar o campo seguinte adiciona
   * um delay de 100ms, para resolver conflito onde em algumas
   * ocasiões o componente seguinte recebe o evento de enter
   * também, pulando assim dois campos de uma vez.
   */
  async goToNextFieldFix (field) {
    await Util.waitSomeTime(100)
    await field.focus()
  },

  getRandomValue (size = 999.99) {
    return Math.random() * size
  },

  /**
   * Checa se um numero flutuante tem uma dada precisão.
   * @param {Number} number - Numero flutuante a ser verificado
   * @param {Number} precision.integers - Precisão da porçao inteira
   * @param {Number} precision.floats - Precisão da porçao flutuante
   */
  checkNumberPrecision (number, { integers = 1, floats = 2 }) {
    const splitted = number.toString().split('.')
    const hasValidIntegers = splitted[0].length <= integers
    const hasValidFloats = splitted[1].length <= floats

    if (!hasValidIntegers || !hasValidFloats) { return false }
    return true
  }

  // getTextWidth (text, font) {
  //   // if given, use cached canvas for better performance
  //   // else, create new canvas
  //   const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"))
  //   const context = canvas.getContext("2d")
  //   context.font = font
  //   const metrics = context.measureText(text)
  //   return metrics.width
  // }
}

export default Util
