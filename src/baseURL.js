const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://ecommerce-bozena611-server.cyclic.app/"
    : "http://localhost:4000";

export default baseURL;
