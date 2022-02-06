import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "./Styles";

const ScrollButton = ({ scrollPoint }) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", toggleVisible);
		return () => window.removeEventListener("scroll", toggleVisible);
	});

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > scrollPoint) {
			setVisible(true);
		} else if (scrolled <= scrollPoint) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Button>
			<FaArrowCircleUp onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }} />
		</Button>
	);
};

export default ScrollButton;
