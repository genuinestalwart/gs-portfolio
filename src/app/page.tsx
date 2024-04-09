"use client";
import { Tabs, TabPanels, ScaleFade } from "@chakra-ui/react";
import Header from "@/components/shared/Header";
import { useState } from "react";
import AboutTab from "@/components/tabs/AboutTab";
import ProjectsTab from "@/components/tabs/ProjectsTab";
import SkillsTab from "@/components/tabs/SkillsTab";
import ContactTab from "@/components/tabs/ContactTab";

const HomePage = () => {
	const [index, setIndex] = useState(0);

	return (
		<ScaleFade in initialScale={0.5}>
			<Tabs
				bgGradient='radial(primary.900, tertiary.main)'
				index={index}
				isFitted
				isLazy
				onChange={setIndex}
				variant='soft-rounded'>
				<Header index={index} setIndex={setIndex} />

				<TabPanels as='main'>
					<AboutTab />
					<ProjectsTab />
					<SkillsTab />
					<ContactTab />
				</TabPanels>
			</Tabs>
		</ScaleFade>
	);
};

export default HomePage;
