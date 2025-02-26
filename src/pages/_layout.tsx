import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@/components/nav/NavBar";

function RootLayout() {
	return (
		<>
			<NavBar />
			<main className="flex flex-1 flex-col items-center overlay-hidden">
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
