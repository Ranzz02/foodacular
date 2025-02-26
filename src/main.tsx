import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages";
import RootLayout from "./pages/_layout";
import PlannerIndex from "./pages/planner";
import FridgeIndex from "./pages/fridge";
import RecipesIndex from "./pages/recipes";
import RecipeLayout from "./pages/recipes/_layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/recipes" element={<RecipeLayout />}>
					<Route index element={<RecipesIndex />} />
				</Route>
				<Route path="planner" element={<PlannerIndex />} />
				<Route path="fridge" element={<FridgeIndex />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
