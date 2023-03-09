import {
  WebsiteLogo,
  RegisterContainer,
  RegisterImage,
  FormContainer,
  Label,
  InputContainer,
  SelectContainer,
  SelectOption,
  RegisterButton,
  ErrorMsg,
} from './styledComponents'
import {Heading} from '../Home/styledComponents'
import RegisterContext from '../../Context/RegisterContext'

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

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        userInput,
        topic,
        userTopic,
        showErrorMsg,
        onSubmitFormContext,
        onChangeInputContext,
        onChangeTopicContext,
      } = value
      console.log(topic)
      console.log(userTopic)

      const onChangeInput = event => {
        onChangeInputContext(event.target.value)
      }

      const onChangeTopic = event => {
        onChangeTopicContext(event.target.value)
      }

      const onSubmitForm = event => {
        const {history} = props
        event.preventDefault()
        onSubmitFormContext(history)
      }

      return (
        <>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <RegisterContainer>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <FormContainer onSubmit={onSubmitForm}>
              <Heading>Let us join</Heading>
              <Label htmlFor="name">NAME</Label>
              <InputContainer
                id="name"
                type="text"
                placeholder="Your name"
                onChange={onChangeInput}
                value={userInput}
              />
              <Label html="topics">TOPICS</Label>
              <SelectContainer
                id="topics"
                onChange={onChangeTopic}
                value={userTopic}
              >
                {topicsList.map(each => (
                  <SelectOption key={each.id} value={each.id}>
                    {each.displayText}
                  </SelectOption>
                ))}
              </SelectContainer>
              <RegisterButton type="submit">Register Now</RegisterButton>
              {showErrorMsg && <ErrorMsg>Please enter your name</ErrorMsg>}
            </FormContainer>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)
export default Register
