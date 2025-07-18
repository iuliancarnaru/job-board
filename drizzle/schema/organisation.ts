import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../helpers";

export const OrganisationTable = pgTable("organisations", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar(),
  createdAt,
  updatedAt,
});
