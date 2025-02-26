import React from "react";
import { Outlet } from "react-router-dom";

export default function RecipeLayout() {
	return (
		<div className="flex flex-1 flex-col w-full max-w-[1024px]">
			<div className="flex flex-1 flex-row max-h-8 px-3 overflow-hidden border-b-2 border-l-2 border-r-2 rounded-bl-xl rounded-br-xl bg-zinc-400 dark:bg-zinc-800/50 items-center justify-between">
				<h2 className="flex-1 text-zinc-950/50 dark:text-zinc-400 cursor-default">
					Search for recipes
				</h2>
				<input
					className="flex-2 text-zinc-950/50 dark:text-zinc-400 "
					placeholder="Search..."
				/>
				<div className="flex-1">Filters</div>
			</div>
			<div className="flex flex-1 overflow-hidden">
				<Outlet />
			</div>
		</div>
	);
}
