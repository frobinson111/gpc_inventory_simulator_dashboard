import React, { useState } from "react";
import logo from "../assets/img/fav-logo.svg";
import {
	Bell,
	Checked,
	Close,
	DownArrow,
	Hamburger,
	SupportIcon,
} from "../icons/Icons";
import SearchForm from "./SearchForm";

const notifyData = [
	{
		title: "You ran a new max/min",
		time: "10 min ago",
		status: "checked",
	},
	{
		title: "You ran a new lead time",
		time: "12 min ago",
		status: "checked",
	},
	{
		title: "System Error",
		time: "15 min ago",
		status: "unchecked",
	},
	{
		title: "You ran a new session",
		time: "20 min ago",
		status: "checked",
	},
];

const ArticleHeader = ({ setIsSidebarOpen, isSidebarOpen }) => {
	const [focused, setFocused] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="article-header">
			<div className="container-fluid">
				<div className="article-header-wrapper d-flex justify-content-between">
					<span
						className="hamburger"
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					>
						<Hamburger />
					</span>
					<a href="#0" className="logo me-auto">
						<img src={logo} alt="" />
					</a>
					<div className="flex-grow-1 d-none d-sm-block">
						<SearchForm />
					</div>
					<div className="right-icons">
						<div class="dropdown">
							<a href="#0" onFocus={() => setFocused(false)}>
								<Bell />
								<span className="count">4</span>
							</a>
							<div
								class="dropdown-menu"
								aria-labelledby="dropdownMenuLink"
							>
								<div className="notifications">
									<h4 className="title">Notifications</h4>
									<ul>
										{notifyData?.map(({ title, time, status }, i) => (
											<li key={i}>
												<a href="#0">
													{status === "checked" ? (
														<Checked />
													) : (
														<Close />
													)}
													<div>
														<h6 className="name">{title}</h6>
														<div>{time}</div>
													</div>
												</a>
											</li>
										))}
									</ul>
									<button className="load-more">
										<DownArrow />
										<span>Load more ...</span>
									</button>
								</div>
							</div>
						</div>
						<div class="dropdown">
							<a href="#0" onFocus={() => setFocused(false)}>
								<SupportIcon />
							</a>
							<div
								class={`dropdown-menu ${focused ? "active" : ""}`}
								aria-labelledby="dropdownMenuLink"
							>
								<h4 className="title">Questions & Feedback</h4>
								<form onSubmit={handleSubmit} className="feedback">
									<label>Questions or Feedback</label>
									<textarea
										className="form-control"
										onFocus={() => setFocused(true)}
									></textarea>
									<div className="text-end">
										<button
											type="submit"
											className="submit-btn"
											onFocus={() => setFocused(false)}
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
						<div class="dropdown">
							<a
								href="#0"
								className="author dropdown-toggle"
								onFocus={() => setFocused(false)}
							>
								<span className="img">JS</span>
								<span className="name d-none d-md-block">
									James Smith
								</span>
							</a>
							<div
								class="dropdown-menu"
								aria-labelledby="dropdownMenuLink"
							>
								<a
									href="#0"
									className="author flex-column mt-1 pb-2 text-dark border-bottom"
								>
									<span
										className="img"
										style={{ width: "40px", fontSize: "20px" }}
									>
										JS
									</span>
									<div
										className="name"
										style={{
											lineHeight: "1.3",
										}}
									>
										James Smith
									</div>
									<div
										style={{
											fontSize: "12px",
											lineHeight: "1.3",
											opacity: ".7",
										}}
									>
										DMOD
									</div>
								</a>
								<ul className="links">
									<li>
										<a href="#0">Profile</a>
									</li>
									<li>
										<a href="#0">Setting</a>
									</li>
									<li>
										<a href="#0">
											<span>Notifications</span>
											<span className="badge mx-auto bg-danger">
												2
											</span>
										</a>
									</li>
									<li>
										<a href="#0">Logout</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleHeader;
