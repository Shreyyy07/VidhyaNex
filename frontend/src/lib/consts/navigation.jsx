import {
	HiOutlineViewGrid,
	HiOutlineCog
} from 'react-icons/hi'
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { SiCoursera } from "react-icons/si";
import { PiExam } from "react-icons/pi";





export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'students',
		label: 'Students',
		path: '/students',
		icon: <PiStudent />
	},
	{
		key: 'teachers',
		label: 'Teachers',
		path: '/teachers',
		icon: <GiTeacher />
	},
	{
		key: 'attendance',
		label: 'Attendance',
		path: '/attendance',
		icon: <PiExam />
	},
	{
		key: 'courses',
		label: 'Courses',
		path: '/courses',
		icon: <SiCoursera />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
]