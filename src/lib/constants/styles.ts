enum VARIANTS {
	PRIMARY = "flex items-center gap-x-1.5 py-2 px-2.5 bg-sky-600 hover:bg-sky-700 text-white",
	OUTLINED = "flex items-center gap-x-1.5 py-2 px-2.5 border border-black dark:border-white hover:bg-neutral-600 hover:text-white text-black dark:text-white",
	NONE = "border-none hover:border-black-300 hover:bg-gray-200 dark:hover:bg-neutral-800 text-black",
	TEXT = "text-black dark:text-white hover:underline",
	LINK = "flex items-center gap-x-1.5 py-2 px-2.5 text-black disabled:pointer-events-none dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400",
	LINK_HOVER_BG = "flex items-center gap-x-1.5 py-2 px-2.5 text-black disabled:pointer-events-none dark:text-neutral-200 hover:text-white hover:bg-neutral-800",
	RING_ON_HOVER = "ring-gray-500 hover:ring-1 dark:ring-1 hover:ring-gray-500 dark:hover:ring-white hover:shadow-md"
}

export default VARIANTS;
