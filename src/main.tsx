import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages";
import RootLayout from "./pages/layouts/RootLayout";
import PlannerIndex from "./pages/planner";
import FridgeIndex from "./pages/fridge";
import RecipesIndex from "./pages/recipes";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<HomePage />} />
				<Route path="planner" element={<PlannerIndex />} />
				<Route path="fridge" element={<FridgeIndex />} />
				<Route path="recipes" element={<RecipesIndex />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
