export const VARIANTS = {
    PRIMARY: "PRIMARY",
	OUTLINED: "OUTLINED",
	NONE: "NONE",
	LINK: "LINK",
	TEXT: "TEXT",
};

export const VARIANTS_CLASS = {
	[VARIANTS.OUTLINED]:
		"border border-black dark:border-white hover:bg-neutral-600 hover:text-white text-black dark:text-white",
	[VARIANTS.NONE]:
		"border-none hover:border-black-300 hover:bg-gray-200 dark:hover:bg-neutral-800 text-black",
	[VARIANTS.TEXT]: "text-black dark:text-white hover:underline",
	[VARIANTS.LINK]:
		"text-primary-500 dark:text-primary-500 hover:underline",
};
