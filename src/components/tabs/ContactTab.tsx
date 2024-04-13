import {
	AspectRatio,
	Box,
	Center,
	Container,
	Flex,
	Heading,
	IconButton,
	Image,
	Link,
	ScaleFade,
	TabPanel,
	Text,
} from "@chakra-ui/react";
import mypic from "@/assets/mypic.jpg";
import { LuLinkedin, LuMail } from "react-icons/lu";

const ContactTab = () => {
	return (
		<TabPanel as='section' h='calc(100vh - 5rem)' maxH='810px'>
			<ScaleFade className='h-full' in initialScale={0.5}>
				<Flex
					align='center'
					direction='column'
					h='100%'
					justify='center'>
					<Container className='space-y-6' textAlign='center'>
						<AspectRatio maxW='20ch' mx='auto' ratio={1}>
							<Image
								alt='Nasif Rahman'
								borderRadius='full'
								src={mypic.src}
							/>
						</AspectRatio>

						<Box>
							<Heading as='h2' color='primary.main' size='xl'>
								Nasif Rahman
							</Heading>

							<Text fontSize='xl'>Dhaka, Bangladesh</Text>
						</Box>

						<Center gap={6}>
							<IconButton
								aria-label='email'
								as={Link}
								borderColor='currentcolor'
								color='red.500'
								href='mailto:nasifrahman.official@gmail.com'
								icon={<LuMail />}
								isExternal
								isRound
								size='lg'
								variant='outline'
							/>

							<IconButton
								aria-label='linkedin'
								as={Link}
								borderColor='currentcolor'
								color='blue.500'
								href='https://www.linkedin.com/in/genuinestalwart/'
								icon={<LuLinkedin />}
								isExternal
								isRound
								size='lg'
								variant='outline'
							/>
						</Center>
					</Container>
				</Flex>
			</ScaleFade>
		</TabPanel>
	);
};

export default ContactTab;
