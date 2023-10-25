const { extracValidationData } = require("../../common/utils/extractErrorData");

const z = require("zod");

const loginSchema = z.object({
	email: z.string().min(2).max(99),
	password: z.string().min(2).max(20),
});

const registerSchema = z.object({
	name: z.string().min(2).max(99),
	email: z.string().min(2).max(99),
	password: z.string().min(2).max(20),
});

function validateLogin(body) {
	const result = loginSchema.safeParse(body);
	const { data, errorMessages, hasError } = extracValidationData(result);

	return { data, errorMessages, hasError };
}

function validateRegister(body) {
	const result = registerSchema.safeParse(body);
	const { data, errorMessages, hasError } = extracValidationData(result);

	return { data, errorMessages, hasError };
}

// function validatePartialAuth(body) {
// 	const result = authSchema.partial().safeParse(body);
// 	const { data, errorMessages, hasError } = extracValidationData(result);

// 	return { data, errorMessages, hasError };
// }

module.exports = {
	validateLogin,
	validateRegister,
};
