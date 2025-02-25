import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@/components/nav/NavBar";

function RootLayout() {
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
