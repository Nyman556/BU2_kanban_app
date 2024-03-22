import React from "react";

function Button({ type, content, action, style }) {
	if (type == "accent") {
		return (
			<button
				className={`bg-accent transition active:bg-accentDark rounded-lg p-2 px-10 min-w-36 ${style}`}
				onClick={action}
			>
				{content}
			</button>
		);
	} else {
		return (
			<button
				className={` bg-secondaryBg transition active:bg-accentDark rounded-lg p-2 min-w-36 ${style}`}
				onClick={action}
			>
				{content}
			</button>
		);
	}
}

export default Button;
