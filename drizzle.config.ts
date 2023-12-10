import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
    driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
    dbCredentials: {
        connectionString: process.env.DB_URL!,
    },
} satisfies Config;
