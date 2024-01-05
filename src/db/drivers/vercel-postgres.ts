import { VercelPgDatabase, drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "@/db/schema";
import { sql } from "@vercel/postgres";

export const db: VercelPgDatabase<typeof schema> = drizzle(sql, { schema });
