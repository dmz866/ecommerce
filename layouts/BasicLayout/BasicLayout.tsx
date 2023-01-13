import { PropsWithChildren } from "react";
import { Container } from "semantic-ui-react";
import { Header } from "../../components/Header/Header";

export function BasicLayout({ children }: PropsWithChildren) {
	return (
		<Container fluid className="basic-layout">
			<Header />
			<Container className="content">
				{children}
			</Container>
		</Container>
	)
}