import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BoxInput, InputSubmit } from "../../components";
import { useContextChatApp } from "../../context/useContext";
import { showToast } from "../../helper/toast";

const initialState = {
	emailUser: "",
	passwordUser: "",
};

export const LoginPage = () => {
	const { login } = useContextChatApp().useAuthContext;

	const [form, setform] = useState(initialState);

	const handleValues = (e) => {
		const { name, value } = e.target;
		setform({ ...form, [name]: value });
	};

	const submitForm = async (e) => {
		e.preventDefault();

		if (Object.values(form).some((value) => value === ""))
			return showToast("😗 Todos los campos son necesarios", "error");

		const { emailUser, passwordUser } = form;

		const response = await login({
			email: emailUser,
			password: passwordUser,
		});

		if (!response.ok)
			return showToast("❌ Algo ha salido mal " + response.msg, "error");

		setform(initialState);
	};

	return (
		<section className="min-h-screen flex justify-center items-center">
			<form
				onSubmit={submitForm}
				className="max-w-lg p-6 grid gap-4 rounded-lg dark:bg-slate-800 bg-emerald-200"
			>
				<h1 className="text-2xl text-center font-bold uppercase">
					Login user
				</h1>

				<BoxInput
					label={"Email"}
					typeInput={"email"}
					nameInput={"emailUser"}
					handleValues={handleValues}
					value={form.emailUser}
					placeholder={"ej: bsquiroz@gmail.com"}
				/>

				<BoxInput
					label={"Password"}
					typeInput={"password"}
					nameInput={"passwordUser"}
					handleValues={handleValues}
					value={form.passwordUser}
					placeholder={"password"}
				/>

				<p className="text-center font-bold p-5 underline">
					<Link to={"/auth/register"}>
						You do not have an account? Register
					</Link>
				</p>

				<InputSubmit text={"login"} />
			</form>
		</section>
	);
};
