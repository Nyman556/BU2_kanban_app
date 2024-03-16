import React from "react";

function AsideItem_Button({
	stylingClasses,
	action,
	IconComponent,
	iconClasses,
	content,
}) {
	const handleClick = () => {
		if (action && typeof action === "function") {
			action(); // Invoke the function passed as 'action'
		}
	};

	return (
		<button className={stylingClasses} onClick={handleClick}>
			<IconComponent className={iconClasses} />
			<p>{content}</p>
		</button>
	);
}

export default AsideItem_Button;
