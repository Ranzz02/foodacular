import { useEffect, useState } from "react";

function useDarkMode() {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	useEffect(() => {
		// Function to check the dark mode preference
		const checkDarkMode = () => {
			// Check if the user prefers dark mode
			const darkModePreference = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setIsDarkMode(darkModePreference);
		};

		// Initial check for dark mode
		checkDarkMode();

		// Set up event listener for changes in theme
		const listener = (e: MediaQueryListEvent) => {
			setIsDarkMode(e.matches);
		};

		// Add event listener for changes in dark mode preference
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", listener);

		// Clean up the listener on component unmount
		return () => {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.removeEventListener("change", listener);
		};
	}, []);

	return isDarkMode;
}

export default useDarkMode;
