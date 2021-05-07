if (!process.env.PROD) {
	require('dotenv').config();
}

module.exports = {
	server_api: process.env.SERVER_URL,
	port: process.env.PORT,
};
