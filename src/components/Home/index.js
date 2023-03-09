import {Link} from 'react-router-dom'

import {
  WebsiteLogo,
  MeetupContainer,
  Heading,
  Description,
  RegisterButton,
  Image,
  HeadingReg,
  DescriptionReg,
} from './styledComponents'

import RegisterContext from '../../Context/RegisterContext'

const Home = props => (
  <RegisterContext.Consumer>
    {value => {
      const {userInput, topic, isRegistered} = value
      const onRegister = () => {
        const {history} = props
        history.replace('/register')
      }
      return (
        <>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          {isRegistered ? (
            <MeetupContainer>
              <HeadingReg>Hello {userInput}</HeadingReg>
              <DescriptionReg>Welcome to {topic}</DescriptionReg>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </MeetupContainer>
          ) : (
            <MeetupContainer>
              <Heading>Welcome to Meetup</Heading>
              <Description>Please register for the topic</Description>
              <Link to="/register">
                <RegisterButton type="button" onClick={onRegister}>
                  Register
                </RegisterButton>
              </Link>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </MeetupContainer>
          )}
        </>
      )
    }}
  </RegisterContext.Consumer>
)
export default Home
