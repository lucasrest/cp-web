const PACKAGE = {
    SECURITY: "/security",
    BUSINESS: "/business"
};

export const ENDPOINTS = {

    SECURITY: {
        LOGIN: "/login",
        USER: `${PACKAGE.SECURITY}/user`
	},

	BUSINESS: {
		INGREDIENTS: `${PACKAGE.BUSINESS}/ingredients`
	}

}
