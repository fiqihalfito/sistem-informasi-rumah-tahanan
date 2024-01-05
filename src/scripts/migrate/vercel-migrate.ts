import "dotenv/config";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "@/db/connect";
import { sql } from "@vercel/postgres";
import type { VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import * as schema from "@/db/schema";

(async () => {
    try {
        await migrate(db as VercelPgDatabase<typeof schema>, {
            migrationsFolder: "./src/db/migrations",
        });
        await sql.end();
    } catch (error) {
        console.log(error);
    }
})();
