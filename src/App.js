import { ChatEngine } from "react-chat-engine";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import { Fragment } from "react";

const App = () => {
	if (!localStorage.getItem("username")) return <LoginForm />;

	return (
		<Fragment>
			<Header />
			<ChatEngine
				height="100vh"
				projectID="ffe6c4c1-1eeb-428d-9b5e-8f4b62331876"
				userName={localStorage.getItem("username")}
				userSecret={localStorage.getItem("password")}
			/>
		</Fragment>
	);
};

export default App;
