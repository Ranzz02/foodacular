import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"), // ✅ Add this
		},
	},
	server: {
		port: 80,
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["src/__tests__/setup.ts"],
	},
});
