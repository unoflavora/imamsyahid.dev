declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      CMS_API: string;
      IMAGE_API: string;
      RESEND_API_KEY: string;
    }
  }
}
