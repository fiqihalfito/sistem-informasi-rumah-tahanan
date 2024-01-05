import { migrationClient } from "@/db/drivers/postgresjs";
import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

(async () => {
    try {
        // This will run migrations on the database, skipping the ones already applied
        // postgresjs
        await migrate(drizzle(migrationClient), {
            migrationsFolder: "./src/db/migrations",
        });

        // Don't forget to close the connection, otherwise the script will hang
        await migrationClient.end();
    } catch (error) {
        console.log(error);
    }
})();
