import {
	AspectRatio,
	Badge,
	CardBody,
	Heading,
	Image,
	LinkOverlay,
	Stack,
	Text,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";

interface Item {
	description: string;
	image: string;
	livelink: string;
	name: string;
	tags: Array<{ bg: string; text: string }>;
}

const ProjectBody = ({ item }: { item: Item }) => {
	return (
		<CardBody>
			<Stack gap={6}>
				<AspectRatio ratio={16 / 9}>
					<Image alt={item.name} borderRadius='md' src={item.image} />
				</AspectRatio>

				<Heading as='h2' size='lg'>
					{item.name}
				</Heading>

				<Text noOfLines={3}>{item.description}</Text>
				<LinkOverlay href={item.livelink} isExternal />
			</Stack>

			<Wrap>
				{item.tags.map((tag, i) => (
					<WrapItem key={i}>
						<Badge
							bg={tag.bg}
							color='secondary.main'
							variant='solid'>
							{tag.text}
						</Badge>
					</WrapItem>
				))}
			</Wrap>
		</CardBody>
	);
};

export default ProjectBody;
