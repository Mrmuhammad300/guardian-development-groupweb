import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trpc } from "@/lib/trpc";
import { BarChart3, TrendingUp, DollarSign, Briefcase, AlertCircle, Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function InvestorDashboard() {
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      setLocation("/contact");
    }
  }, [isAuthenticated, authLoading, setLocation]);

  // Fetch investor data
  const { data: projects, isLoading: projectsLoading } = trpc.projects.list.useQuery(
    { limit: 50 },
    { enabled: isAuthenticated }
  );

  const { data: investors, isLoading: investorsLoading } = trpc.investors.list.useQuery(
    { limit: 50 },
    { enabled: isAuthenticated }
  );

  if (authLoading || projectsLoading || investorsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-accent mx-auto mb-4" />
          <p className="text-foreground">Loading investor dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-primary">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-semibold text-white mb-2">
            Investor Dashboard
          </h1>
          <p className="text-gray-300">
            Welcome back, {user?.name || "Investor"}. Track your portfolio and project updates.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-secondary border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-accent" />
                Total Deployed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$2.48M</div>
              <p className="text-xs text-gray-400 mt-1">Across 12 projects</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent" />
                Active Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">8</div>
              <p className="text-xs text-gray-400 mt-1">In development</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                Expected Return
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">18.5%</div>
              <p className="text-xs text-gray-400 mt-1">Blended IRR</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-accent" />
                Portfolio Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">Excellent</div>
              <p className="text-xs text-gray-400 mt-1">All metrics green</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary border border-border">
            <TabsTrigger value="projects" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
              Portfolio Projects
            </TabsTrigger>
            <TabsTrigger value="updates" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
              Recent Updates
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-accent data-[state=active]:text-primary">
              Documents
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="mt-6 space-y-4">
            {projects?.projects && projects.projects.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.projects.slice(0, 6).map((project: any) => (
                  <Card key={project.id} className="bg-secondary border-border hover:border-accent transition-colors">
                    <CardHeader>
                      <CardTitle className="text-white">{project.name}</CardTitle>
                      <CardDescription className="text-gray-400">{project.location}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-400">Capital Deployed</p>
                          <p className="text-lg font-semibold text-white">${project.totalCapital}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Target Return</p>
                          <p className="text-lg font-semibold text-accent">{project.targetReturn}%</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-2">Status</p>
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                          {project.projectStatus}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full text-accent border-accent hover:bg-accent/10">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-secondary border-border">
                <CardContent className="pt-6 text-center">
                  <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">No projects found in your portfolio</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Updates Tab */}
          <TabsContent value="updates" className="mt-6 space-y-4">
            <Card className="bg-secondary border-border">
              <CardHeader>
                <CardTitle className="text-white">Project Updates</CardTitle>
                <CardDescription className="text-gray-400">Latest milestones and financial updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-accent pl-4 py-2">
                  <p className="text-sm font-medium text-white">Eastside Market - Phase 2 Complete</p>
                  <p className="text-xs text-gray-400 mt-1">Completed on Feb 10, 2026</p>
                  <p className="text-sm text-gray-300 mt-2">Successfully completed Phase 2 construction. On schedule for Q2 stabilization.</p>
                </div>
                <div className="border-l-2 border-accent pl-4 py-2">
                  <p className="text-sm font-medium text-white">Q4 2025 Financial Report</p>
                  <p className="text-xs text-gray-400 mt-1">Published on Feb 5, 2026</p>
                  <p className="text-sm text-gray-300 mt-2">Strong performance across portfolio. Average occupancy at 94%.</p>
                </div>
                <div className="border-l-2 border-accent pl-4 py-2">
                  <p className="text-sm font-medium text-white">New Investment Opportunity</p>
                  <p className="text-xs text-gray-400 mt-1">Available now</p>
                  <p className="text-sm text-gray-300 mt-2">Mixed-use development in Pittsburgh. Target return 16-18%.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="mt-6 space-y-4">
            <Card className="bg-secondary border-border">
              <CardHeader>
                <CardTitle className="text-white">Investor Resources</CardTitle>
                <CardDescription className="text-gray-400">Download reports, agreements, and documentation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary rounded border border-border hover:border-accent transition-colors">
                  <div>
                    <p className="text-sm font-medium text-white">Q4 2025 Financial Report</p>
                    <p className="text-xs text-gray-400">PDF • 2.4 MB</p>
                  </div>
                  <Button size="sm" variant="outline" className="text-accent border-accent">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary rounded border border-border hover:border-accent transition-colors">
                  <div>
                    <p className="text-sm font-medium text-white">Capital Stack Summary</p>
                    <p className="text-xs text-gray-400">PDF • 1.1 MB</p>
                  </div>
                  <Button size="sm" variant="outline" className="text-accent border-accent">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary rounded border border-border hover:border-accent transition-colors">
                  <div>
                    <p className="text-sm font-medium text-white">Investment Agreement</p>
                    <p className="text-xs text-gray-400">PDF • 3.8 MB</p>
                  </div>
                  <Button size="sm" variant="outline" className="text-accent border-accent">
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
