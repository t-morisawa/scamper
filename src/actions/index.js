export const start = () => ({
  type: 'START',
})

export const submit = (text) => ({
  type: 'SUBMIT',
  text
})

export const toggleResult = () => ({
  type: 'TOGGLE_RESULT',
})

export const inputText = (text) => ({
  type: 'INPUT_TEXT',
  text
})
