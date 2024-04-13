import {
	Container,
	Heading,
	List,
	ListIcon,
	ListItem,
	ScaleFade,
	TabPanel,
} from "@chakra-ui/react";
import MainSkills from "@/components/MainSkills";
import { otherSkills } from "@/utilities/skills";
import { LuCheckCircle } from "react-icons/lu";

const SkillsTab = () => {
	return (
		<TabPanel
			as='section'
			minH='calc(100vh - 5rem)'
			pb={16}
			pt={[4, null, null, 8]}>
			<ScaleFade className='space-y-8' in initialScale={0.5}>
				<Heading as='h2' size='xl' textAlign='center'>
					Main Skills
				</Heading>

				<MainSkills />

				<Heading as='h2' size='xl' textAlign='center'>
					Other Skills
				</Heading>

				<Container>
					<List spacing={3}>
						{otherSkills.map((item, i) => (
							<ListItem key={i}>
								<ListIcon
									as={LuCheckCircle}
									color='green.500'
									verticalAlign='middle'
								/>
								{item}
							</ListItem>
						))}
					</List>
				</Container>
			</ScaleFade>
		</TabPanel>
	);
};

export default SkillsTab;
