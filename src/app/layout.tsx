import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressContentEditableWarning suppressHydrationWarning>
			<body className={clsx(inter.className)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<ModeToggle className="fixed left-4 bottom-4" />
				</ThemeProvider>
			</body>
		</html>
	);
}
