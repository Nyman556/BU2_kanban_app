import React from "react";
import {
	IconArray,
	AsideIconClasses,
	AsideStylingClasses,
} from "../Constants/generalConsts";
import AsideItem_Link from "./AsideItem_Link";
import AsideItem_Dropdown from "./AsideItem_Dropdown";
import AsideItem_Button from "./AsideItem_Button";

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
			<AsideItem_Link
				path={path}
				stylingClasses={AsideStylingClasses}
				IconComponent={IconComponent}
				iconClasses={AsideIconClasses}
				content={content}
			/>
		);
	}
	if (dropdown == true) {
		return (
			<AsideItem_Dropdown
				stylingClasses={AsideStylingClasses}
				action={action}
				IconComponent={IconComponent}
				iconClasses={AsideIconClasses}
				content={content}
				dropdownState={dropdownState}
			/>
		);
	} else {
		return (
			<AsideItem_Button
				stylingClasses={AsideStylingClasses}
				action={action}
				IconComponent={IconComponent}
				iconClasses={AsideIconClasses}
				content={content}
			/>
		);
	}
}

export default AsideItem;
