import { createBrowserRouter, Navigate } from "react-router";
import { RootLayout } from "./components/layout/RootLayout";
import { MarketingLayout } from "./components/marketing/MarketingLayout";
import { Dashboard } from "./pages/Dashboard";
import { DataHub } from "./pages/DataHub";
import { Analysis } from "./pages/Analysis";
import { FinancialImpact } from "./pages/FinancialImpact";
import { Prioritization } from "./pages/Prioritization";
import { Recommendation } from "./pages/Recommendation";
import { DefinitionPack } from "./pages/DefinitionPack";
import { DecisionHistory } from "./pages/DecisionHistory";
import { Reports } from "./pages/Reports";
import { Settings } from "./pages/Settings";
import { DesignSystem } from "./pages/DesignSystem";
import { Home } from "./pages/marketing/Home";
import { Pricing } from "./pages/marketing/Pricing";
import { SignIn } from "./pages/marketing/SignIn";
import { SignUp } from "./pages/marketing/SignUp";
import { DecisionEngine } from "./pages/marketing/product/DecisionEngine";
import { RevenueModeling } from "./pages/marketing/product/RevenueModeling";
import { SpecPackGenerator } from "./pages/marketing/product/SpecPackGenerator";
import { DecisionHistoryPage } from "./pages/marketing/product/DecisionHistoryPage";
import { ForFounders } from "./pages/marketing/use-cases/ForFounders";
import { ForProductManagers } from "./pages/marketing/use-cases/ForProductManagers";
import { ForEngineers } from "./pages/marketing/use-cases/ForEngineers";
import { ForInvestors } from "./pages/marketing/use-cases/ForInvestors";
import { Documentation } from "./pages/marketing/resources/Documentation";
import { Blog } from "./pages/marketing/resources/Blog";
import { CaseStudies } from "./pages/marketing/resources/CaseStudies";
import { APIReference } from "./pages/marketing/resources/APIReference";
import { DesignSystemHandoff } from "./pages/handoff/DesignSystemHandoff";
import { ComponentLibrary } from "./pages/handoff/ComponentLibrary";
import { ReplitBlueprint } from "./pages/handoff/ReplitBlueprint";
import { HandoffIndex } from "./pages/handoff/HandoffIndex";
import { ReplitMigrationGuide } from "./pages/handoff/ReplitMigrationGuide";
import { BackendFiles } from "./pages/handoff/BackendFiles";
import { DatabaseSchema } from "./pages/handoff/DatabaseSchema";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MarketingLayout,
    children: [
      { index: true, Component: Home },
      { path: "pricing", Component: Pricing },
      // Product pages
      { path: "product/decision-engine", Component: DecisionEngine },
      { path: "product/revenue-modeling", Component: RevenueModeling },
      { path: "product/spec-pack-generator", Component: SpecPackGenerator },
      { path: "product/decision-history", Component: DecisionHistoryPage },
      // Use case pages  
      { path: "use-cases/for-founders", Component: ForFounders },
      { path: "use-cases/for-product-managers", Component: ForProductManagers },
      { path: "use-cases/for-engineers", Component: ForEngineers },
      { path: "use-cases/for-investors", Component: ForInvestors },
      // Resource pages
      { path: "resources/documentation", Component: Documentation },
      { path: "resources/blog", Component: Blog },
      { path: "resources/case-studies", Component: CaseStudies },
      { path: "resources/api-reference", Component: APIReference },
    ],
  },
  {
    path: "/sign-in",
    Component: SignIn,
  },
  {
    path: "/sign-up",
    Component: SignUp,
  },
  // Redirect legacy routes without /app prefix to correct routes
  {
    path: "/dashboard",
    element: <Navigate to="/app" replace />,
  },
  {
    path: "/data-hub",
    element: <Navigate to="/app/data-hub" replace />,
  },
  {
    path: "/analysis",
    element: <Navigate to="/app/analysis" replace />,
  },
  {
    path: "/financial-impact",
    element: <Navigate to="/app/financial-impact" replace />,
  },
  {
    path: "/prioritization",
    element: <Navigate to="/app/prioritization" replace />,
  },
  {
    path: "/recommendation",
    element: <Navigate to="/app/recommendation" replace />,
  },
  {
    path: "/definition-pack",
    element: <Navigate to="/app/definition-pack" replace />,
  },
  {
    path: "/decision-history",
    element: <Navigate to="/app/decision-history" replace />,
  },
  {
    path: "/reports",
    element: <Navigate to="/app/reports" replace />,
  },
  {
    path: "/settings",
    element: <Navigate to="/app/settings" replace />,
  },
  {
    path: "/design-system",
    element: <Navigate to="/app/design-system" replace />,
  },
  {
    path: "/app",
    Component: RootLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "data-hub", Component: DataHub },
      { path: "analysis", Component: Analysis },
      { path: "financial-impact", Component: FinancialImpact },
      { path: "prioritization", Component: Prioritization },
      { path: "recommendation", Component: Recommendation },
      { path: "definition-pack", Component: DefinitionPack },
      { path: "decision-history", Component: DecisionHistory },
      { path: "reports", Component: Reports },
      { path: "settings", Component: Settings },
      { path: "design-system", Component: DesignSystem },
      { path: "handoff/design-system", Component: DesignSystemHandoff },
      { path: "handoff/component-library", Component: ComponentLibrary },
      { path: "handoff/replit-blueprint", Component: ReplitBlueprint },
      { path: "handoff/index", Component: HandoffIndex },
      { path: "handoff/replit-migration-guide", Component: ReplitMigrationGuide },
      { path: "handoff/backend-files", Component: BackendFiles },
      { path: "handoff/database-schema", Component: DatabaseSchema },
    ],
  },
]);
