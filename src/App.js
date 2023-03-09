import './App.css'

import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import RegisterContext from './Context/RegisterContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]
// Replace your code here
class App extends Component {
  state = {
    userInput: '',
    topic: topicsList[0].displayText,
    userTopic: topicsList[0].id,
    isRegistered: false,
    showErrorMsg: false,
  }

  onSubmitFormContext = history => {
    const {userInput, userTopic} = this.state
    const selectedTopic = topicsList.filter(each => each.id === userTopic)
    if (userInput === '') {
      this.setState({showErrorMsg: true})
    } else {
      this.setState({
        showErrorMsg: false,
        isRegistered: true,
        topic: selectedTopic[0].displayText,
      })
      history.replace('/')
    }
  }

  onChangeInputContext = value => {
    this.setState({userInput: value})
  }

  onChangeTopicContext = value => {
    const selectedTopic = topicsList.filter(each => each.id === value)
    this.setState({userTopic: value, topic: selectedTopic[0].displayText})
  }

  render() {
    const {userInput, topic, userTopic, showErrorMsg, isRegistered} = this.state
    return (
      <RegisterContext.Provider
        value={{
          userInput,
          topic,
          userTopic,
          showErrorMsg,
          isRegistered,
          onSubmitFormContext: this.onSubmitFormContext,
          onChangeInputContext: this.onChangeInputContext,
          onChangeTopicContext: this.onChangeTopicContext,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
