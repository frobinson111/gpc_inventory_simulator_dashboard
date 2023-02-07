import { useState } from "react";
import "./App.scss";
import Article from "./components/Article";
import ArticleHeader from "./components/ArticleHeader";
import HomeContent from "./components/HomeContent";
import Sidebar from "./components/Sidebar";

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="NapaApp">
			<div className={`NapaAppSidebar ${isSidebarOpen ? "open" : ""}`}>
				<Sidebar
					setIsSidebarOpen={setIsSidebarOpen}
					isSidebarOpen={isSidebarOpen}
				/>
			</div>
			<div className="NapaAppArticle">
				<Article>
					<ArticleHeader
						setIsSidebarOpen={setIsSidebarOpen}
						isSidebarOpen={isSidebarOpen}
					/>
					<div className="article-content">
						<HomeContent />
					</div>
				</Article>
			</div>
		</div>
	);
}

export default App;
