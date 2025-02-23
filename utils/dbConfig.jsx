import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon('postgresql://finance-app_owner:npg_PHge96ikoltf@ep-shy-unit-a8tge3wu-pooler.eastus2.azure.neon.tech/finance-app?sslmode=require');
export const db = drizzle({ client: sql, schema });
