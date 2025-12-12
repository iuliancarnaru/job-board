import { Card, CardContent } from "@/components/ui/card";
import { JobListingForm } from "@/features/jobListings/components/JobListingsForm";

export default function NewJobListingPage() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">New job listing</h1>
      <p className="text-muted-foreground mb-6">
        This does not post this listing yet. It just saves a draft.
      </p>
      <Card>
        <CardContent>
          <JobListingForm />
        </CardContent>
      </Card>
    </div>
  );
}
