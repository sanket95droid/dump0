import type  {Config} from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({path: ".env"});

export default {
    driver: 'pg',
    schema: './src/lib/db/schema.ts',
    out: "./drizzle",
    dbCredentials: {
        connectionString: "postgresql://sanket95droid:Z1eQRMTAtgN0@ep-tight-lake-63196906.us-east-2.aws.neon.tech/neondb?sslmode=require",
    }
} satisfies Config 