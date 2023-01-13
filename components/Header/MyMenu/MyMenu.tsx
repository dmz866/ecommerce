import Link from "next/link";
import { PropsWithRef } from "react";
import { Container, Grid, Icon, Label, Menu } from "semantic-ui-react";

export default function MyMenu() {
	return (
		<div className="menu">
			<Container>
				<Grid>
					<Grid.Column className="menu__left" width={6}>
						<MenuPlatforms />
					</Grid.Column>
					<Grid.Column className="menu__right" width={10}>
						<MenuOptions />
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	)
}

function MenuPlatforms({ platforms }: PropsWithRef<any>) {
	return (
		<Menu>
			{platforms?.map((platform: any) => (
				<Link href={`/games/${platform.url}`} key={platform._id}>
					<Menu.Item as="a" name={platform.url}>
						{platform.title}
					</Menu.Item>
				</Link>
			))}
		</Menu>
	);
}

function MenuOptions({ onShowModal, user, logout }: PropsWithRef<any>) {

	const productsCart: number = 1;
	//const { productsCart } = useCart();

	return (
		<Menu>
			{user ? (
				<>
					<Link href="/orders">
						<Menu.Item as="a">
							<Icon name="game" />
							Mis pedidos
						</Menu.Item>
					</Link>
					<Link href="/wishlist">
						<Menu.Item as="a">
							<Icon name="heart outline" />
							Wishlist
						</Menu.Item>
					</Link>
					<Link href="/account">
						<Menu.Item as="a">
							<Icon name="user outline" />
							{user.name} {user.lastname}
						</Menu.Item>
					</Link>
					<Link href="/cart">
						<Menu.Item as="a" className="m-0">
							<Icon name="cart" />
							{productsCart > 0 && (
								<Label color="red" floating circular>
									{productsCart}
								</Label>
							)}
						</Menu.Item>
					</Link>
					<Menu.Item className="m-0" onClick={logout}>
						<Icon name="power off" />
					</Menu.Item>
				</>
			) : (
				<Menu.Item onClick={onShowModal}>
					<Icon name="user outline" />
					Mi cuenta
				</Menu.Item>
			)}
		</Menu>
	);
}