import { db as postgresDriver } from "@/db/drivers/postgresjs";
import { db as vercelDriver } from "@/db/drivers/vercel-postgres";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import type { VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import * as schema from "@/db/schema";

// Fix for "sorry, too many clients already"
declare global {
    // eslint-disable-next-line no-var -- only var works here
    var db:
        | PostgresJsDatabase<typeof schema>
        | VercelPgDatabase<typeof schema>
        | undefined;
}

let db: PostgresJsDatabase<typeof schema> | VercelPgDatabase<typeof schema>;

if (process.env.DB_DRIVER === "postgresjs") {
    if (process.env.NODE_ENV === "production") {
        db = postgresDriver;
    } else {
        if (!global.db) global.db = postgresDriver;

        db = global.db;
    }
} else {
    db = vercelDriver;
}

export { db };
