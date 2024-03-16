import React from "react";

function AsideItem_Button({
	stylingClasses,
	action,
	IconComponent,
	iconClasses,
	content,
}) {
	return (
		<button
			className={stylingClasses}
			onClick={() => {
				action();
			}}
		>
			<IconComponent className={iconClasses} />
			<p>{content}</p>
		</button>
	);
}

export default AsideItem_Button;
