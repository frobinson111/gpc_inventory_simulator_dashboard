import React, { useState } from "react";
import {
	AngleDown,
	CheckedOutlined,
	Clear,
	Refresh,
	UnCheckedOutlined,
} from "../icons/Icons";
const widgetData = [
	{
		title: "Lead Time",
		check: true,
	},
	{
		title: "Order Cycle",
		check: true,
	},
	{
		title: "Order Cycle",
		check: true,
	},
];

const data = [
	{
		title: "Lead Time",
		notSet: "50",
		set: "20",
		tbd: "10",
	},
	{
		title: "Order Cycle",
		notSet: "50",
		set: "20",
		tbd: "10",
	},
	{
		title: "Min/Max",
		Change: "10",
		Finalized: "20",
		tbd: "15",
	},
];

const HomeContent = () => {
	return (
		<>
			<div className="welcome-txt">
				<div>
					<h3 className="title">Welcome back, James</h3>
					<p>Here's what's happening with your pulse today.</p>
				</div>
				<div className="dropdown">
					<a href="#0" className="btn btn-warning add-widget">
						<span className="me-2">Add Widget</span>
						<AngleDown />
					</a>
					<div className="dropdown-menu">
						<h5 className="title">Add Widget</h5>
						<ul className="widget-menu">
							{widgetData?.map((item, i) => (
								<CheckGroup key={i} {...item} />
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="row g-4 gx-xxl-5">
				{data?.map(({ title, notSet, set, tbd, Finalized, Change }, i) => (
					<div className="col-xl-4 col-sm-6" key={i}>
						<div className="welcome-card">
							<div className="name-area">
								<h4 className="name">{title}</h4>
								<div className="d-flex" style={{ gap: "4px" }}>
									<button>
										<Refresh />
									</button>
									<button>
										<Clear />
									</button>
								</div>
							</div>
							<div className="counter-area">
								<div className="item">
									<h2 className="counter">
										{notSet ? notSet : Change}
									</h2>
									<span>{notSet ? "Not Set" : "Change"}</span>
								</div>
								<div className="item">
									<h2 className="counter">{set ? set : Finalized}</h2>
									<span>{set ? "Set" : "Finalized"}</span>
								</div>
								<div className="item">
									<h2 className="counter">{tbd}</h2>
									<span>TBD</span>
								</div>
							</div>
							<div className="d-flex flex-wrap justify-content-between welcome-card-bottom">
								<div>
									<span>01/20/2022</span>
									<small>Last Date Edited</small>
								</div>
								<div>
									<a href="#0" className="btn btn-base">
										View
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

const CheckGroup = ({ title, check }) => {
	const [checked, setChecked] = useState(check);
	return (
		<>
			<li>
				<label className="form-check">
					<span className="form-check-label">{title}</span>
					<input
						type="checkbox"
						className="form-check-input"
						checked={checked}
						onChange={(e) => setChecked(e.target.checked)}
					/>
					{checked ? <CheckedOutlined /> : <UnCheckedOutlined />}
				</label>
			</li>
		</>
	);
};

export default HomeContent;
