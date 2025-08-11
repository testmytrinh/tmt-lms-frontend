import { writable } from "svelte/store";

interface AuthStore {
	isAuthenticated: boolean;
	isLoading: boolean;
	tokenExpires?: Date;
}

interface ProfileStore {
	id: string | undefined;
	email: string;
	firstName?: string;
	lastName?: string;
	avatarUrl: string;
	profileUrl?: string;
	role: string;
}

export const defaultUserState: AuthStore = {
	isAuthenticated: true,
	isLoading: false,
	tokenExpires: undefined,
};

export const defaultProfileState: ProfileStore = {
	id: undefined,
	firstName: "Nguyen",
	lastName: "Quang Huy",
	avatarUrl: "",
	email: "huykhogncan@gmail.com",
	role: "",
};

export const auth = writable<AuthStore>(defaultUserState);
export const user = writable<ProfileStore>(defaultProfileState);

// User actions
export const userActions = {
	async logout() {
		try {
			// Call logout API endpoint here
			// await authService.logout();
			console.log("Logging out...");
		} catch (error) {
			console.error("Logout error:", error);
		} finally {
			auth.set(defaultUserState);
			user.set(defaultProfileState);
		}
	},

	async login(userData: ProfileStore) {
		auth.update((state) => ({
			...state,
			isAuthenticated: true,
			isLoading: false,
		}));
		user.set(userData);
	},

	async checkAuth() {
		auth.update((state) => ({ ...state, isLoading: true }));

		try {
			// Call check auth API endpoint here
			// const profile = await authService.getCurrentUser();
			// user.set(profile);
			auth.update((state) => ({
				...state,
				isAuthenticated: true,
				isLoading: false,
			}));
		} catch (error) {
			auth.set(defaultUserState);
			user.set(defaultProfileState);
		}
	},
};
