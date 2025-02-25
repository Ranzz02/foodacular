import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import useDarkMode from "../hooks/useDarkMode";

function NavBar() {
	const isDark = useDarkMode();

	return (
		<>
			<header className="flex flex-1 flex-row w-full justify-center max-h-12 border-b-2 border-white pb-2">
				<div className="flex flex-1 flex-col sm:flex-row justify-between max-w-[1024px] px-2">
					<Link to={"/"} className="flex flex-row items-center gap-2">
						<img
							src={
								isDark ? "/images/food-dish-white.svg" : "/images/food-dish.svg"
							}
							width={36}
							height={36}
							color="white"
						/>
						<h1 className="text-black dark:text-white font-semibold text-xl md:text-2xl xl:text-3xl">
							Foodacular
						</h1>
					</Link>
					<nav className="flex flex-row gap-4 items-end">
						<NavItem url="/recipes" title="Recipes" />
						<NavItem url="/fridge" title="What's in my fridge" />
						<NavItem url="/planner" title="Meal Planner" />
					</nav>
				</div>
			</header>
		</>
	);
}

export default NavBar;
