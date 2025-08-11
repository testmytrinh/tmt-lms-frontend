import { CourseType } from "./course";

export type NewsCardInfo = {
	tag: string;
	title: string;
	desc?: string;
	imgSrc?: string;
	href: string;
};

export type CourseCardInfo = {
	title: string;
	type: CourseType;
	desc?: string;
	author?: string;
	startDate?: Date;
	endDate?: Date;
	color?: string;
	href: string;
};
