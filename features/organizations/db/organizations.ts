import { db } from "@/drizzle/db";
import { UserTable, OrganizationTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { revalidateOrganizationCache } from "./cache/organizations";

export async function insertOrganization(
  organization: typeof OrganizationTable.$inferInsert
) {
  await db.insert(OrganizationTable).values(organization).onConflictDoNothing();
  revalidateOrganizationCache(organization.id);
}

export async function updateOrganization(
  id: string,
  user: Partial<typeof OrganizationTable.$inferInsert>
) {
  await db
    .update(OrganizationTable)
    .set(user)
    .where(eq(OrganizationTable.id, id));
  revalidateOrganizationCache(id);
}

export async function deleteOrganization(id: string) {
  await db.delete(OrganizationTable).where(eq(UserTable.id, id));
  revalidateOrganizationCache(id);
}
