const API_BASE_URL =
	import.meta.env.VITE_API_URL || "http://localhost:3000/api";

class ApiClient {
	private baseURL: string;

	constructor(baseURL: string) {
		this.baseURL = baseURL;
	}

	async request<T>(
		endpoint: string,
		options: RequestInit = {}
	): Promise<T> {
		const url = `${this.baseURL}${endpoint}`;

		const config: RequestInit = {
			headers: {
				"Content-Type": "application/json",
				...options.headers,
			},
			credentials: "include", // For HTTP-only cookies
			...options,
		};

		const response = await fetch(url, config);

		if (!response.ok) {
			throw new Error(
				`API Error: ${response.status} ${response.statusText}`
			);
		}

		return response.json();
	}

	get<T>(endpoint: string): Promise<T> {
		return this.request<T>(endpoint);
	}

	post<T>(endpoint: string, data?: any): Promise<T> {
		return this.request<T>(endpoint, {
			method: "POST",
			body: data ? JSON.stringify(data) : undefined,
		});
	}

	put<T>(endpoint: string, data?: any): Promise<T> {
		return this.request<T>(endpoint, {
			method: "PUT",
			body: data ? JSON.stringify(data) : undefined,
		});
	}

	delete<T>(endpoint: string): Promise<T> {
		return this.request<T>(endpoint, {
			method: "DELETE",
		});
	}
}

export const apiClient = new ApiClient(API_BASE_URL);
