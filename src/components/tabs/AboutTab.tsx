import { Link } from "@chakra-ui/next-js";
import {
	Button,
	Container,
	Flex,
	HStack,
	Heading,
	ScaleFade,
	StackDivider,
	TabPanel,
	Text,
} from "@chakra-ui/react";
import { LuFileText, LuGithub } from "react-icons/lu";

const AboutTab = () => {
	return (
		<TabPanel as='section' h='calc(100vh - 5rem)' maxH='810px'>
			<ScaleFade className='h-full' in initialScale={0.5}>
				<Flex
					align='center'
					direction='column'
					gap={10}
					h='100%'
					justify='center'>
					<Heading as='h1' size='3xl' textAlign='center'>
						I am <span className='text-primary'>incredible</span>
					</Heading>

					<Container>
						<Text textAlign='center'>
							Hey there! My name is <strong>Nasif Rahman</strong>{" "}
							and I&apos;m a MERN stack developer from Bangladesh.
							As a loyal, reliable and hardworking person, I
							specialize in creating intuitive user interfaces
							using modern technologies and frameworks. Let&apos;s
							collaborate and build something remarkable together!
						</Text>
					</Container>

					<HStack
						divider={<StackDivider borderColor='primary.main' />}
						spacing={4}>
						<Link
							href='https://github.com/genuinestalwart'
							isExternal>
							<Button
								colorScheme='primary'
								leftIcon={<LuGithub />}>
								GitHub
							</Button>
						</Link>

						<Link
							href='https://github.com/genuinestalwart'
							isExternal>
							<Button
								colorScheme='primary'
								rightIcon={<LuFileText />}
								variant='outline'>
								Resume
							</Button>
						</Link>
					</HStack>
				</Flex>
			</ScaleFade>
		</TabPanel>
	);
};

export default AboutTab;
