import { Avatar } from "@ark-ui/solid/avatar";

export const Basic = () => (
	<Avatar.Root>
		<Avatar.Fallback>PA</Avatar.Fallback>
		<Avatar.Image
			src="https://avatars.githubusercontent.com/u/1846056?v=4"
			alt="avatar"
		/>
	</Avatar.Root>
);
