export default {
  STAGE: process.env.NODE_ENV || "development",
  RELEASE: process.env.REACT_APP_RELEASE || "",
  // NOTE: First one in the list will be the system defalt.
  AVAILABLE_LANGUAGES: ["en"],
  // Optional services that will be enabled by commenting them in a providing a key.
  // GOOGLE_ANALYTICS: 'UA-XXXXXXXXXX-X',
  DEFAULT_ERROR: "Sorry something went wrong",
};
