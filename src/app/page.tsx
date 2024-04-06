"use client";
import { Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import Header from "@/components/Header";
import { useState } from "react";

const HomePage = () => {
	const [index, setIndex] = useState(0);

	return (
		<>
			<Tabs
				index={index}
				isFitted
				isLazy
				onChange={setIndex}
				variant='soft-rounded'>
				<Header index={index} setIndex={setIndex} />

				<TabPanels>
					<TabPanel>About</TabPanel>
					<TabPanel>Projects</TabPanel>
					<TabPanel>Skills</TabPanel>
					<TabPanel>Contact</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
};

export default HomePage;
