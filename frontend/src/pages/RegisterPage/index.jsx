import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BoxInput, InputSubmit } from "../../components";
import { showToast } from "../../helper/toast";
import { useContextChatApp } from "../../context/useContext";

const initialState = {
	name: "",
	email: "",
	password: "",
};

export const RegisterPage = () => {
	const { register } = useContextChatApp().useAuthContext;
	const [values, setValues] = useState(initialState);

	const handleValues = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (Object.values(values).some((value) => value === ""))
			return showToast("😗 Todos los campos son necesarios", "error");

		const { email, name, password } = values;

		const response = await register({ email, name, password });

		if (!response.ok)
			return showToast("❌ Algo salio mal, " + response.msg, "error");

		setValues(initialState);
	};

	return (
		<section className="min-h-screen flex justify-center items-center">
			<form
				onSubmit={handleSubmit}
				className="max-w-lg p-6 grid gap-4 rounded-lg dark:bg-slate-800 bg-emerald-200"
			>
				<h1 className="text-2xl text-center font-bold uppercase">
					Register user
				</h1>
				<BoxInput
					label={"Fullname"}
					typeInput={"text"}
					nameInput={"name"}
					handleValues={handleValues}
					value={values.name}
					placeholder={"ej: john doe"}
				/>

				<BoxInput
					label={"Email"}
					typeInput={"email"}
					nameInput={"email"}
					handleValues={handleValues}
					value={values.email}
					placeholder={"ej: johndoe@gmail.com"}
				/>

				<BoxInput
					label={"Password"}
					typeInput={"password"}
					nameInput={"password"}
					handleValues={handleValues}
					value={values.password}
					placeholder={"ej: 123xdesano"}
				/>

				<p className="text-center font-bold p-5 underline">
					<Link to={"/auth/login"}>
						do you already have an account? Login
					</Link>
				</p>

				<InputSubmit text={"register"} />
			</form>
		</section>
	);
};
