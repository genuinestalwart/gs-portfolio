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
						<Button
							as={Link}
							_active={{ bg: "primary.700" }}
							bg='primary.500'
							color='secondary.main'
							_hover={{ bg: "primary.600", textDecor: "none" }}
							href='https://github.com/genuinestalwart'
							isExternal
							leftIcon={<LuGithub />}>
							GitHub
						</Button>

						<Button
							as={Link}
							_active={{ bg: "primary.100" }}
							borderColor='currentcolor'
							color='primary.main'
							_hover={{ bg: "primary.50", textDecor: "none" }}
							href='https://drive.google.com/file/d/14mZKAP8jKaHH-k-QuDK1eRUdO7aUwxFU/view?usp=sharing'
							isExternal
							rightIcon={<LuFileText />}
							variant='outline'>
							Resume
						</Button>
					</HStack>
				</Flex>
			</ScaleFade>
		</TabPanel>
	);
};

export default AboutTab;
