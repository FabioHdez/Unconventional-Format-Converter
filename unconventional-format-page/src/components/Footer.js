import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'

export const Footer = () => (
  <>
    <Stack
      spacing={{
        base: '1',
        md: '2',
      }}
      
    >
      <Stack justify="space-between" direction="row" align="center">
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/fabiohdez/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="https://github.com/fabiohdez" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle" mb={2}>
        Application created by Fabio Hernandez Rubio.
      </Text>
    </Stack>
  </>
)