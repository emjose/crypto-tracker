// import { useEffect, useState } from "react";
// import styles from "../styles/ScrollButton.module.css";

// export const ScrollButton = () => {
// 	const [showButton, setShowButton] = useState(false);

// 	useEffect(() => {
// 		window.addEventListener("scroll", () => {
// 			if (window.pageYOffset > 300) {
// 				setShowButton(true);
// 			} else {
// 				setShowButton(false);
// 			}
// 		});
// 	}, []);

// 	const scrollToTop = () => {
// 		window.scrollTo({
// 			top: 0,
// 			behavior: "smooth",
// 		});
// 	};

// 	return (
// 		showButton && (
// 			<button className={styles.ScrollButton} onClick={scrollToTop} className="back-to-top">
// 				&#8679;
// 			</button>
// 		)
// 	);
// };
