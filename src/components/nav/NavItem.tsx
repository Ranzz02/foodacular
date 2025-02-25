import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

export interface NavItemProps {
	url: string;
	title?: string;
	children?: ReactNode;
}

function NavItem(props: NavItemProps) {
	const { url, title, children } = props;
	const location = useLocation();

	// Check if current path is the same as the NavItem's URL
	const isActive = location.pathname === url;

	const activeClass = isActive
		? "text-blue-500 dark:text-blue-300"
		: "text-gray-700 dark:text-gray-300";

	return (
		<Link
			to={url}
			className={`hover:text-black hover:border-b-2 border-black dark:border-white dark:hover:text-white font-normal text-lg ${activeClass}`}
		>
			{title}
			{children}
		</Link>
	);
}

export default NavItem;
