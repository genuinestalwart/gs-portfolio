import { mainSkills } from "@/utilities/skills";
import {
	AspectRatio,
	Badge,
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Container,
	Heading,
	Image,
	SimpleGrid,
} from "@chakra-ui/react";

const MainSkills = () => {
	return (
		<Container maxW={["20ch", "35ch", "65ch", "90ch"]}>
			<SimpleGrid columns={[1, 2, 4, 5]} spacing={8}>
				{mainSkills.map((item, i) => (
					<Card
						bg='tertiary.900'
						boxShadow='lg'
						color='secondary.50'
						_hover={{
							bg: "tertiary.800",
							boxShadow: "dark-lg",
							color: "secondary.100",
							cursor: "pointer",
						}}
						key={i}
						transitionDuration='0.4s'>
						<CardHeader px={0}>
							<Heading as='h3' size='md' textAlign='center'>
								{item.name}
							</Heading>
						</CardHeader>

						<CardBody px={[12, 8, null, 10]} py={0}>
							<AspectRatio ratio={1}>
								<Box bg='secondary.main' borderRadius='2xl'>
									<Image
										alt={item.name}
										src={item.src}
										w='60%'
									/>
								</Box>
							</AspectRatio>
						</CardBody>

						<CardFooter justify='center' px={0}>
							<Badge
								bg='primary.500'
								color='secondary.main'
								variant='solid'>
								{item.experience}
							</Badge>
						</CardFooter>
					</Card>
				))}
			</SimpleGrid>
		</Container>
	);
};

export default MainSkills;
