class GlobalFunctions {
  IgnoreJSErros() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  }
}

export default new GlobalFunctions;
