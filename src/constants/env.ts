/* eslint-disable prettier/prettier */
const env = {
  apiUlr:
    process.env.NODE_ENV === "production"
      ? "https://www.example.com"
      : "http://floralex.test/api.php",
};

export default env;
