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
							<LinkBox h='100%' key={i}>
								<Card
									bg='tertiary.900'
									boxShadow='lg'
									color='secondary.50'
									h='100%'
									_hover={{
										bg: "tertiary.800",
										boxShadow: "dark-lg",
										color: "secondary.100",
									}}
									transitionDuration='0.4s'>
									<ProjectBody item={item} />

									<CardFooter>
										<Link
											_hover={{ textDecor: "none" }}
											href={item.github}
											isExternal>
											<Button
												colorScheme='primary'
												rightIcon={<LuExternalLink />}>
												Read More
											</Button>
										</Link>
									</CardFooter>
								</Card>
							</LinkBox>
						))}
					</SimpleGrid>
				</Container>
			</ScaleFade>
		</TabPanel>
	);
};

export default ProjectsTab;
