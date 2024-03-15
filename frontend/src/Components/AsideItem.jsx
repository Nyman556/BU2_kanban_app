import React, { Children } from "react";
import {
	FiHome,
	FiUsers,
	FiChevronDown,
	FiChevronUp,
	FiSettings,
	FiLogOut,
} from "react-icons/fi";
import { Link } from "react-router-dom";
const iconClasses = "text-accent text-2xl";
const stylingClasses =
	"w-full flex p-4 text-lg justify-center items-center space-x-2 hover:bg-tertiaryBg";
const IconArray = [
	FiHome,
	FiUsers,
	FiChevronDown,
	FiChevronUp,
	FiSettings,
	FiLogOut,
];

function AsideItem({
	type,
	icon,
	content,
	path,
	action,
	dropdown,
	dropdownState,
}) {
	const IconComponent = IconArray[icon];
	if (type == "Link") {
		return (
			<Link to={path} className={stylingClasses}>
				<IconComponent className={iconClasses} />
				<p>{content}</p>
			</Link>
		);
	}
	if (dropdown == true) {
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
	} else {
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
}

export default AsideItem;
