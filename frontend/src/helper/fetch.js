const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchAnyToken = async (endpoint, data, method = "GET") => {
	try {
		const url = `${BASE_URL}/${endpoint}`;

		if (method === "GET") {
			const response = await fetch(url);
			return await response.json();
		} else {
			const response = await fetch(url, {
				method,
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			});

			return await response.json();
		}
	} catch (error) {
		console.log(error);
	}
};

export const fetchWitchToken = async (endpoint, data, method = "GET") => {
	try {
		const url = `${BASE_URL}/${endpoint}`;

		if (method === "GET") {
			const response = await fetch(url, {
				headers: {
					"x-token": localStorage.getItem("token"),
				},
			});
			return await response.json();
		} else {
			const response = await fetch(url, {
				method,
				headers: {
					"Content-type": "application/json",
					"x-token": localStorage.getItem("token"),
				},
				body: JSON.stringify(data),
			});

			return await response.json();
		}
	} catch (error) {
		console.log(error);
	}
};
