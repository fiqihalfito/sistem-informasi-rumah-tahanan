import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Fix for "sorry, too many clients already"
// declare global {
//     // eslint-disable-next-line no-var -- only var works here
//     var db: PostgresJsDatabase<typeof schema> | undefined;
// }

// let db: PostgresJsDatabase<typeof schema>;
// export const client = postgres(`${process.env.DB_URL}`);
// export const migrationClient = postgres(`${process.env.DB_URL}`, {
//     max: 1,
//     onnotice: () => {}, // Temporary: delete weird log, but it is successful.
// });

// if (process.env.NODE_ENV === "production") {
//     db = drizzle(client, { schema });
// } else {
//     if (!global.db) global.db = drizzle(client, { schema });

//     db = global.db;
// }

// export { db };

export const client = postgres(`${process.env.DB_URL}`);
export const migrationClient = postgres(`${process.env.DB_URL}`, {
    max: 1,
    onnotice: () => {}, // Temporary: delete weird log, but it is successful.
});

export const db = drizzle(client, { schema });
