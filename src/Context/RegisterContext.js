import React from 'react'

const RegisterContext = React.createContext({
  userInput: '',
  topic: '',
  userTopic: '',
  showErrorMsg: false,
  isRegistered: false,
  onSubmitFormContext: () => {},
  onChangeInputContext: () => {},
  onChangeTopicContext: () => {},
})
export default RegisterContext
