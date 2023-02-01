const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://ecommerce-app-server.onrender.com"
    : "http://localhost:4000";

export default baseURL;
