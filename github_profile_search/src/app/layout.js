import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Github User Profile Search",
    description: "Github User Profile Search",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='max-w-screen-sm mx-auto px-2'>{children}</body>
        </html>
    );
}
