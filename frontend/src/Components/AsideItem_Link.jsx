import React from "react";
import { Link } from "react-router-dom";

function AsideItem_Link({
	path,
	stylingClasses,
	IconComponent,
	iconClasses,
	content,
}) {
	return (
		<Link to={path} className={stylingClasses}>
			<IconComponent className={iconClasses} />
			<p>{content}</p>
		</Link>
	);
}

export default AsideItem_Link;
