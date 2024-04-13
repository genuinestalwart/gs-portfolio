import { projects } from "@/utilities/projects";
import {
	Button,
	Card,
	CardFooter,
	Container,
	LinkBox,
	ScaleFade,
	SimpleGrid,
	TabPanel,
} from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import { Link } from "@chakra-ui/next-js";
import ProjectBody from "@/components/shared/ProjectBody";

const ProjectsTab = () => {
	return (
		<TabPanel
			as='section'
			minH='calc(100vh - 5rem)'
			pb={16}
			pt={[4, null, null, 8]}>
			<ScaleFade in initialScale={0.5}>
				<Container maxW={[null, "45ch", "80ch", "100ch"]}>
					<SimpleGrid columns={[1, null, 2, 3]} spacing={8}>
						{projects.map((item, i) => (
							<Card
								as={LinkBox}
								bg='tertiary.900'
								boxShadow='lg'
								color='secondary.50'
								h='100%'
								_hover={{
									bg: "tertiary.800",
									boxShadow: "dark-lg",
									color: "secondary.100",
								}}
								key={i}
								transitionDuration='0.4s'>
								<ProjectBody item={item} />

								<CardFooter>
									<Button
										as={Link}
										_active={{ bg: "primary.700" }}
										bg='primary.500'
										color='secondary.main'
										_hover={{
											bg: "primary.600",
											textDecor: "none",
										}}
										href={item.github}
										isExternal
										rightIcon={<LuExternalLink />}>
										Read More
									</Button>
								</CardFooter>
							</Card>
						))}
					</SimpleGrid>
				</Container>
			</ScaleFade>
		</TabPanel>
	);
};

export default ProjectsTab;
