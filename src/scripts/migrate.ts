import "dotenv/config";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db, migrationClient } from "@/db/connect";
import { drizzle } from "drizzle-orm/postgres-js";

(async () => {
    try {
        // This will run migrations on the database, skipping the ones already applied
        await migrate(drizzle(migrationClient), {
            migrationsFolder: "./src/db/migrations",
        });

        // Don't forget to close the connection, otherwise the script will hang
        await migrationClient.end();
    } catch (error) {
        console.log(error);
    }
})();
