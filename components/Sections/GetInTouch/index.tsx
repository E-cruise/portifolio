import { memo, useRef, useState } from 'react'
import {
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  Box,
  Input,
  Button,
  Textarea,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'
import { FormControl, FormLabel } from '@chakra-ui/react'
import emailjs from '@emailjs/browser'
import styles from './styles.module.css'
const GetInTouch = () => {
  const currentYear = new Date().getFullYear()
  const [isEmailSent, setIsEmailSent] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) {
      console.error('Form ref is null')
      return
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          setIsEmailSent(true)
          console.log(result.text)
          alert('Submitted successfully')
        },
        (error) => {
          console.log(error.text)
          alert('Error')
        }
      )
  }
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Get In Touch!{' '}
      </Heading>
      <Text variant="description">
        Though I am fairly introverted, myself I do reply to messages. I fancy
        Coding, work, chess, FIFA , movies or swimming, anything is cool. So
        feel free to message me on any of my social media or shoot me an{' '}
        <Link
          href="mailto:okelloericdenis@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </Link>
      </Text>
      <Box>
        <Heading>Contact Form</Heading>
        <form ref={form} onSubmit={sendEmail}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="okello eric" name="name" />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="user@domain.com" name="email" />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              placeholder="Mobile app development"
              name="subject"
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="How may I help you" name="message" />
          </FormControl>
          <Button mt={4} className={styles.button} type="submit">
            Submit
          </Button>
        </form>
        {isEmailSent && (
          <Alert status="success" mt={4}>
            <AlertIcon />
            Email sent. Thank you for contacting me!
          </Alert>
        )}
      </Box>
      <Box
        // spacing={0.5}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://github.com/okello-eric-denis"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Designed and Made with <Icon as={RiHeartPulseFill} /> <br />
            Okello Eric <Icon as={RiCopyleftLine} /> {currentYear}
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
