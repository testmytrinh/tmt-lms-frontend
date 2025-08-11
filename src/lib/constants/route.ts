export const ROUTE = {
	HOME: "/",
	DASHBOARD: "/dashboard",
	LMS_HOME: "/home",
	FOR_TEACHERS: "/teachers",
	COURSES: "/courses",
	MODULES: "/modules",
	LOGIN: "/login",
	SIGN_UP: "/signup",
	PROFILE: "/me",
	DISCUSSIONS: "/discussions",
	ASK: "/ask",
	FORGOT: "/forgot",
	RESET: "/reset",
	GITHUB: "https://github.com/testmytrinh",
};

export const PUBLIC_ROUTES = [
	`^${ROUTE.HOME}$`,
	ROUTE.LOGIN,
	ROUTE.SIGN_UP,
	ROUTE.FORGOT,
	ROUTE.RESET,
	`^${ROUTE.MODULES}/.*`,
	`^${ROUTE.COURSES}/.*`,
	"/404",
];

export const DEFAULT_ROUTES_ON_NAV = [
	{ path: ROUTE.COURSES, label: "COURSES" },
	{ path: ROUTE.MODULES, label: "MODULES" },
	{ path: ROUTE.FOR_TEACHERS, label: "FOR TEACHERS" },
	{ path: ROUTE.ASK, label: "ASK" },
];

export const ROUTES_ON_FOOTER = [
	{
		title: "Platform",
		links: [
			{ label: "Courses", path: ROUTE.COURSES },
			{ label: "Modules", path: ROUTE.MODULES },
			{ label: "For Teachers", path: ROUTE.FOR_TEACHERS },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Github", path: ROUTE.GITHUB },
			{ label: "Ask", path: ROUTE.ASK },
		],
	}
];

export const ROUTES_TO_HIDE_NAV = [
	ROUTE.LOGIN,
	ROUTE.SIGN_UP,
	ROUTE.LMS_HOME,
	ROUTE.FORGOT,
	ROUTE.RESET,
];
