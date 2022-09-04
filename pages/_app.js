import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(
			";"
		);
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker
				.register("/sw.js")
				.then(function (registration) {
					console.log("%c❤️", heart);
				})
				.catch(function (err) {
					console.log(err);
				});
		}

		console.clear();
		const styles = [
			"color: white",
			"background: rgba(238,58,136,1)",
			"font-size: 18px",
			"padding: 12px",
			"margin: 6px 0 6px 14px",
		].join(";");
		const styles2 = ["font-size: 14px", "padding: 16px", "margin: 6px 0 6px 0", "color: rgba(238,58,136,1)"].join(
			";"
		);
		console.log("%cHello World! I'm Emmanuel.", styles);
		console.log("%cThank you for checking out my work!", styles2);
		const gradient = [
			"font-size: 14px",
			"color: #fff",
			"width: 200px",
			"padding: 8px",
			"margin: 6px 0 6px 14px",
			"border-radius: 4px",
			"background: rgba(238,58,136,1)",
			"background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
		].join(";");
		console.log("%cPortfolio%chttps://bit.ly/3QQr1Ux", gradient, styles2);
		console.log("%cLinkedin %chttps://bit.ly/3cygAD4", gradient, styles2);
		console.log("%cGithub   %chttps://bit.ly/3iwQC6U", gradient, styles2);
		console.log("%cThe README   %chttps://bit.ly/3ReLmmN", gradient, styles2);
		console.log("%cHave a wonderful day!", styles2);
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
