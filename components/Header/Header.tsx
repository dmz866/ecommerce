import Menu from "./MyMenu/MyMenu";
import TopBar from "./TopBar/TopBar";

export function Header() {
	return (
		<div className="header">
			<TopBar />
			<Menu />
		</div>
	);
}