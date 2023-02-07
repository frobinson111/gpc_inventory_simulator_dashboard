import React from "react";
import fav_logo from "../assets/img/fav-logo.svg";
import vertical_logo from "../assets/img/vertical-logo.svg";
import {
	Hamburger,
	HomeIcon,
	LeadTime,
	MinMax,
	OrderCycle,
} from "../icons/Icons";
import SearchForm from "./SearchForm";
const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
	return (
		<aside>
			<div className="sidebar-logo">
				<a className="logo" href="#0">
					<img
						src={isSidebarOpen ? fav_logo : vertical_logo}
						className="d-none d-lg-block"
						alt=""
					/>
					<img src={vertical_logo} className="d-lg-none" alt="" />
				</a>
				<div className="pt-3 d-sm-none">
					<SearchForm />
				</div>
			</div>
			<ul className="menus">
				<li
					className="hamburger"
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				>
					<Hamburger />
				</li>
				<li>
					<a href="#0">
						<HomeIcon />
						<span className="menu-txt">Home</span>
					</a>
				</li>
				<li>
					<a href="#0">
						<LeadTime />
						<span className="menu-txt">Lead Time Overrides</span>
					</a>
				</li>
				<li>
					<a href="#0">
						<OrderCycle />
						<span className="menu-txt">Lead Time Overrides</span>
					</a>
				</li>
				<li>
					<a href="#0">
						<MinMax />
						<span className="menu-txt">Min/Max</span>
						<span className="ms-auto badge badge-warning">89</span>
					</a>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
