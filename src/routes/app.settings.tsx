import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getSession, logout } from "@/lib/auth";
import { LogOut } from "lucide-react";

export const Route = createFileRoute("/app/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const navigate = useNavigate();
  const session = getSession();

  const doLogout = () => { logout(); navigate({ to: "/" }); };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your workspace and account.</p>
      </div>

      <Card className="p-6">
        <h2 className="font-semibold">Company Information</h2>
        <p className="text-xs text-muted-foreground">Visible to people in your workspace.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Company Name</Label>
            <Input defaultValue={session?.companyName ?? ""} readOnly />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue={session?.email ?? ""} readOnly />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold">Account</h2>
        <p className="text-xs text-muted-foreground">Sign out of this device.</p>
        <Button onClick={doLogout} variant="destructive" className="mt-5">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </Card>
    </div>
  );
}
