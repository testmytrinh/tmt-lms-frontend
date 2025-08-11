import { type NewsCardInfo } from "$lib/types/feed";
import { type CourseCardInfo } from "$lib/types/feed";
import { CourseType } from "$lib/types/course";

export const newsFeed: NewsCardInfo[] = [
	{
		title: "Serverless Patterns Deep Dive",
		tag: "Blog",
		href: "/news/1",
		desc: "Explore the latest serverless patterns and their applications in modern web development.",
		imgSrc: "https://www.webapper.com/wp-content/uploads/sites/3/2023/01/webapper-blog-serverless-use-cases.png",
	},
	{
		title: "New Frontend Performance Module Released",
		tag: "Update",
		href: "/news/2",
		imgSrc: "https://picsum.photos/seed/news2/200/200",
	},
	{
		title: "Design Tokens: A Practical Guide",
		tag: "Design",
		href: "/news/3",
		imgSrc: "https://picsum.photos/seed/news3/200/200",
	},
	{
		title: "AI-Assisted Learning Roadmap",
		tag: "AI",
		href: "/news/4",
		imgSrc: "https://picsum.photos/seed/news4/200/200",
	},
	{
		title: "Monorepo Tooling Improvements",
		tag: "DevOps",
		href: "/news/5",
		imgSrc: "https://www.webapper.com/wp-content/uploads/sites/3/2023/01/webapper-blog-serverless-use-cases.png",
	},
];

export const popularCourses: CourseCardInfo[] = [
	{
		title: "Cyber Security Capture the Flag 2025",
		type: CourseType.COURSE,
		desc: "Put your knowledge to the test with this friendly competition at the end of the course series! Participants will be given a variety of tasks that are related to the topics of the course series. See how you fare against fellow students, gain points and conquer the leaderboard!",
		author: "John Doe",
		// startDate: new Date(2025, 6, 12),
		endDate: new Date(2025, 10, 20),
		color: "#822630",
		href: "/courses/1",
	},
	{
		title: "Securing software 2025",
		type: CourseType.COURSE,
		desc: "This course takes a deep dive on how common security issues with web servers and other software. This course is the second course in cyber security base course series. The course requires programming experience in Python.",
		author: "John Doe",
		startDate: new Date(2025, 5, 1),
		// endDate: new Date(2025, 9, 30),
		color: "#822630",
		href: "/courses/2",
	},
	{
		title: "Programming MOOC 2025, Introduction to Programming",
		type: CourseType.COURSE,
		desc: "Learn the basics of programming with the Python language.",
		author: "Frank",
		startDate: new Date(2025, 7, 1),
		endDate: new Date(2025, 11, 30),
		color: "#1F6964",
		href: "/courses/3",
	},
	{
		title: "Full Stack Open 2025",
		type: CourseType.LAB,
		desc: "Learn React, Redux, Node.js, MongoDB, GraphQL, TypeScript and , React Native, GitHub Actions, Docker in one go!",
		startDate: new Date(2025, 7, 1),
		endDate: new Date(2025, 12, 30),
		color: "#215887",
		href: "/courses/6",
	},
	{
		title: "Programming MOOC 2025, Introduction to Programming",
		type: CourseType.LAB,
		desc: "Learn the basics of programming with the Python language.",
		author: "Joji",
		startDate: new Date(2025, 7, 1),
		endDate: new Date(2025, 11, 30),
		color: "#1F6964",
		href: "/courses/4",
	},
	{
		title: "Full Stack Open 2025",
		type: CourseType.COURSE,
		desc: "Learn React, Redux, Node.js, MongoDB, GraphQL, TypeScript and , React Native, GitHub Actions, Docker in one go!",
		startDate: new Date(2025, 7, 1),
		endDate: new Date(2025, 12, 30),
		color: "#215887",
		href: "/courses/5",
	},
];
