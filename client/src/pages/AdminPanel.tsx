import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trpc } from "@/lib/trpc";
import { Plus, Edit2, Trash2, AlertCircle, Loader2, Check, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function AdminPanel() {
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showInvestorForm, setShowInvestorForm] = useState(false);

  // Redirect to login if not authenticated or not admin
  useEffect(() => {
    if (!authLoading && (!isAuthenticated || user?.role !== "admin")) {
      setLocation("/");
    }
  }, [isAuthenticated, authLoading, user, setLocation]);

  // Fetch data
  const { data: projects, isLoading: projectsLoading } = trpc.projects.list.useQuery(
    { limit: 100 },
    { enabled: isAuthenticated && user?.role === "admin" }
  );

  const { data: investors, isLoading: investorsLoading } = trpc.investors.list.useQuery(
    { limit: 100 },
    { enabled: isAuthenticated && user?.role === "admin" }
  );

  if (authLoading || projectsLoading || investorsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-accent mx-auto mb-4" />
          <p className="text-foreground">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen bg-primary">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-semibold text-white mb-2">
            Admin Management Panel
          </h1>
          <p className="text-gray-300">
            Manage projects, investors, capital stacks, and system settings.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary border border-border">
            <TabsTrigger value="projects" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
              Projects
            </TabsTrigger>
            <TabsTrigger value="investors" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
              Investors
            </TabsTrigger>
            <TabsTrigger value="audit" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
              Audit Log
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="mt-6 space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Projects Management</h2>
              <Button
                onClick={() => setShowProjectForm(!showProjectForm)}
                className="bg-accent text-primary hover:bg-accent/90"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>

            {showProjectForm && (
              <Card className="bg-secondary border-border mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Create New Project</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Project Name"
                      className="px-3 py-2 bg-primary border border-border rounded text-white placeholder-gray-500"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="px-3 py-2 bg-primary border border-border rounded text-white placeholder-gray-500"
                    />
                  </div>
                  <textarea
                    placeholder="Description"
                    className="w-full px-3 py-2 bg-primary border border-border rounded text-white placeholder-gray-500"
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <Button className="bg-accent text-primary hover:bg-accent/90">Save Project</Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowProjectForm(false)}
                      className="border-border text-gray-300"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="space-y-3">
              {projects?.projects && projects.projects.length > 0 ? (
                projects.projects.map((project: any) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-4 bg-secondary border border-border rounded hover:border-accent transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-white">{project.name}</p>
                      <p className="text-sm text-gray-400">{project.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs rounded bg-accent/10 text-accent">
                        {project.projectStatus}
                      </span>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-accent">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <Card className="bg-secondary border-border">
                  <CardContent className="pt-6 text-center">
                    <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">No projects found</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Investors Tab */}
          <TabsContent value="investors" className="mt-6 space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Investors Management</h2>
              <Button
                onClick={() => setShowInvestorForm(!showInvestorForm)}
                className="bg-accent text-primary hover:bg-accent/90"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Investor
              </Button>
            </div>

            {showInvestorForm && (
              <Card className="bg-secondary border-border mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Add New Investor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Investor Name"
                      className="px-3 py-2 bg-primary border border-border rounded text-white placeholder-gray-500"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="px-3 py-2 bg-primary border border-border rounded text-white placeholder-gray-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <select className="px-3 py-2 bg-primary border border-border rounded text-white">
                      <option>Entity Type</option>
                      <option>Individual</option>
                      <option>Family Office</option>
                      <option>SPV</option>
                      <option>JV</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Total Deployed"
                      className="px-3 py-2 bg-primary border border-border rounded text-white placeholder-gray-500"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-accent text-primary hover:bg-accent/90">Save Investor</Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowInvestorForm(false)}
                      className="border-border text-gray-300"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="space-y-3">
              {investors?.investors && investors.investors.length > 0 ? (
                investors.investors.map((investor: any) => (
                  <div
                    key={investor.id}
                    className="flex items-center justify-between p-4 bg-secondary border border-border rounded hover:border-accent transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-white">{investor.name}</p>
                      <p className="text-sm text-gray-400">{investor.entityType}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs rounded bg-accent/10 text-accent">
                        ${investor.totalDeployed}
                      </span>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-accent">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <Card className="bg-secondary border-border">
                  <CardContent className="pt-6 text-center">
                    <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">No investors found</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Audit Log Tab */}
          <TabsContent value="audit" className="mt-6 space-y-4">
            <h2 className="text-xl font-semibold text-white mb-6">Audit Log</h2>
            <Card className="bg-secondary border-border">
              <CardHeader>
                <CardTitle className="text-white">System Activity</CardTitle>
                <CardDescription className="text-gray-400">Recent actions and changes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border-b border-border pb-3">
                  <div>
                    <p className="text-sm font-medium text-white">Project Created</p>
                    <p className="text-xs text-gray-400">Eastside Market Phase 2 - Feb 10, 2026</p>
                  </div>
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div className="flex items-center justify-between p-3 border-b border-border pb-3">
                  <div>
                    <p className="text-sm font-medium text-white">Investor Updated</p>
                    <p className="text-xs text-gray-400">Investment amount changed - Feb 8, 2026</p>
                  </div>
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div className="flex items-center justify-between p-3 border-b border-border pb-3">
                  <div>
                    <p className="text-sm font-medium text-white">Document Uploaded</p>
                    <p className="text-xs text-gray-400">Q4 2025 Financial Report - Feb 5, 2026</p>
                  </div>
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div className="flex items-center justify-between p-3">
                  <div>
                    <p className="text-sm font-medium text-white">Access Denied</p>
                    <p className="text-xs text-gray-400">Unauthorized access attempt - Feb 1, 2026</p>
                  </div>
                  <X className="w-4 h-4 text-red-400" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
