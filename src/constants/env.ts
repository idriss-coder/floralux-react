/* eslint-disable prettier/prettier */
const env = {
  apiUlr:
    process.env.NODE_ENV === "production"
      ? "https://www.example.com"
      : "http://floralex.test/api.php",
  
  appName: "Floralux",
  appAuthor: "IDR6IX-HACKER",
  appYear: "20022"
};

export default env;
