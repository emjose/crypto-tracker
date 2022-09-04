import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="manifest" href="/manifest.webmanifest" />
					<link rel="apple-touch-icon" href="/android-chrome-192x192.png"></link>
					<meta name="theme-color" content="#1F1E1E" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
