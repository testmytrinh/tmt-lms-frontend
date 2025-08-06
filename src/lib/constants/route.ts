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

export const ROUTES_TO_HIDE_NAV = [
	ROUTE.LOGIN,
	ROUTE.SIGN_UP,
	ROUTE.LMS_HOME,
	ROUTE.FORGOT,
	ROUTE.RESET,
];
