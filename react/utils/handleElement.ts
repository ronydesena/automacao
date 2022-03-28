function rafAsync() {
  return new Promise(resolve => {
    requestAnimationFrame(resolve)
  })
}

function checkElement(selector: string) {
  if (document.querySelector(selector) === null) {
    return rafAsync().then(() => checkElement(selector))
  }

  return Promise.resolve(true)
}

export function handleElement(selector: string, callbackFunc: () => void) {
  checkElement(selector).then(element => {
    if (element) {
      callbackFunc()
    }
  })
}
