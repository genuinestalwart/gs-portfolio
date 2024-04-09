import { ScaleFade, TabPanel } from "@chakra-ui/react";

const ProjectsTab = () => {
	return (
		<TabPanel as='section'>
			<ScaleFade in initialScale={0.5}>
				Projects
			</ScaleFade>
		</TabPanel>
	);
};

export default ProjectsTab;
