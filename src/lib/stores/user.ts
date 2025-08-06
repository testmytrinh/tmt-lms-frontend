import { writable } from 'svelte/store';

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
  isAuthenticated: false,
  isLoading: false,
  tokenExpires: undefined,
};

export const defaultProfileState: ProfileStore = {
  id: undefined,
  firstName: '',
  lastName: '',
  avatarUrl: '',
  email: '',
  role: '',
};

export const auth = writable<AuthStore>(defaultUserState);

export const user = writable<ProfileStore>(defaultProfileState);

