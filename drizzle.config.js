import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: 'postgresql://finance-app_owner:npg_PHge96ikoltf@ep-shy-unit-a8tge3wu-pooler.eastus2.azure.neon.tech/finance-app?sslmode=require'
  },
});