import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function AsideItem_Dropdown({
	stylingClasses,
	action,
	IconComponent,
	iconClasses,
	content,
	dropdownState,
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
			{dropdownState ? <FiChevronUp /> : <FiChevronDown />}
		</button>
	);
}

export default AsideItem_Dropdown;
