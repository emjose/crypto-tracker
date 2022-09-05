import Head from "next/head";
import Link from "next/link";
import { Github } from "./github";

const Layout = ({ children, title = "Crypto Tracker" }) => {
	return (
		<div className="layout">
			<Head>
				<title>{title}</title>
				<meta charSet="UTF-8" />
				<meta property="og:title" content="Crypto Tracker" />
				<meta property="og:image" content="https://crypto-tracker-zeta.vercel.app/meta-028-crypto.png" />
				<meta
					property="og:image:alt"
					content="A card with the Bitcoin logo and the cryptocurrency price. Click to visit website."
				/>
				<meta property="og:description" content="Project by Emmanuel Jose" />
				<meta property="og:url" content="https://crypto-tracker-zeta.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary" />
				<meta name="description" content="A cryptocurrency price tracking app. Click to visit website." />
				<meta name="theme-color" content="#1F1E1E" />
				<meta
					name="keywords"
					content="HTML, CSS, JavaScript, Next.js, crypto tracker, cryptocurrency, bitcoin"
				/>
				<meta name="author" content="Emmanuel Jose" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="header">
				<Link href="/" passHref>
					<a>
						<img className="logo" src="/ct-logo.png" alt="Crypto Tracker" />{" "}
					</a>
				</Link>
				<Github />
			</header>

			<main>{children}</main>
		</div>
	);
};

export default Layout;
