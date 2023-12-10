import "dotenv/config";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "@/db/connect";
import { drizzle } from "drizzle-orm/postgres-js";
import { sql } from "@vercel/postgres";

(async () => {
    try {
        // This will run migrations on the database, skipping the ones already applied
        // postgresjs
        // await migrate(drizzle(migrationClient), {
        //     migrationsFolder: "./src/db/migrations",
        // });

        // vercel postgres
        await migrate(db, {
            migrationsFolder: "./src/db/migrations",
        });

        // Don't forget to close the connection, otherwise the script will hang
        // await migrationClient.end();
        await sql.end();
    } catch (error) {
        console.log(error);
    }
})();
