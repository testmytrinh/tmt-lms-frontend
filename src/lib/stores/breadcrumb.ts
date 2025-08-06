import { writable } from "svelte/store";

type BreadcrumbType =
	| "course"
	| "module"
	| "lesson"
	| "assignment"
	| "announcement"
	| "discussion"
	| "quiz"
	| "exam";

interface BreadcrumbItem {
	id: string;
	title: string;
	url?: string; // Optional if some levels shouldn't link
	type: BreadcrumbType;
}
const VALID_TRANSITIONS: Record<BreadcrumbType, BreadcrumbType[]> = {
	course: ["module", "discussion", "assignment", "announcement"],
	module: ["lesson", "discussion", "assignment"],
	lesson: ["assignment"],
	announcement: [], // Announcements are usually endpoints
	discussion: [], // Discussions are usually endpoints
	assignment: [],
	quiz: [], // Quizzes are usually endpoints
	exam: [], // Exams are usually endpoints
};

function isValidTransition(
	current: BreadcrumbType,
	next: BreadcrumbType,
): boolean {
	return VALID_TRANSITIONS[current]?.includes(next) ?? false;
}

export function validatePath(path: BreadcrumbItem[]): boolean {
	if (path.length === 0 || path[0].type !== "course") return false;

	for (let i = 1; i < path.length; i++) {
		if (!isValidTransition(path[i - 1].type, path[i].type)) {
			return false;
		}
	}

	return true;
}
export const breadcrumbPath = writable<BreadcrumbItem[]>([]);

// Helper function to update breadcrumbs
export function updateBreadcrumbs(path: BreadcrumbItem[]) {
	breadcrumbPath.set(path);
}
