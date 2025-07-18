import { pgTable, varchar } from "drizzle-orm/pg-core";
import { UserTable } from "./user";
import { createdAt, updatedAt } from "../helpers";

export const UserResumeTable = pgTable("user_resumes", {
  userId: varchar()
    .primaryKey()
    .references(() => UserTable.id),
  resumeFileUrl: varchar().notNull(),
  resumeFileKey: varchar().notNull(),
  aiSummary: varchar(),
  createdAt,
  updatedAt,
});
