import { useState } from "react";
import { ThemeProvider } from "next-themes";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Badge } from "./components/ui/badge";
import {
  LayoutDashboard,
  Users,
  Bell,
  Settings,
  Video,
  Moon,
  Sun,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import AnalyticsDashboard from "./components/analytics-dashboard";
import UserManagement from "./components/user-management";
import Notifications from "./components/notifications";
import SettingsPage from "./components/settings-page";
import VideoSection from "./components/video-section";
import AnimatedBackground from "./components/animated-background";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", badge: null },
  { icon: Users, label: "Users", badge: null },
  { icon: Bell, label: "Notifications", badge: 3 },
  { icon: Video, label: "Media", badge: null },
  { icon: Settings, label: "Settings", badge: null },
];

function AppSidebar({ activeView, setActiveView }: { activeView: string; setActiveView: (view: string) => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <motion.div
            className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-white font-bold">I</span>
          </motion.div>
          <div>
            <h2 className="font-semibold">Infotech</h2>
            <p className="text-xs text-muted-foreground">Enterprise Edition</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.label)}
                    isActive={activeView === item.label}
                    className="relative"
                  >
                    <item.icon />
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge
                        variant="default"
                        className="ml-auto h-5 w-5 flex items-center justify-center p-0 text-xs"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Appearance</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-2 py-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full justify-start"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="data-[state=open]:bg-accent">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" />
                    <AvatarFallback>V</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">Vishwas</span>
                    <span className="text-xs text-muted-foreground">vishwas@company.com</span>
                  </div>
                  <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-56">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Account Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function MainContent({ activeView }: { activeView: string }) {
  const renderContent = () => {
    switch (activeView) {
      case "Dashboard":
        return <AnalyticsDashboard />;
      case "Users":
        return <UserManagement />;
      case "Notifications":
        return <Notifications />;
      case "Media":
        return <VideoSection />;
      case "Settings":
        return <SettingsPage />;
      default:
        return <AnalyticsDashboard />;
    }
  };

  return (
    <motion.div
      key={activeView}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 overflow-auto"
    >
      <div className="container mx-auto p-6 max-w-7xl">
        {renderContent()}
      </div>
    </motion.div>
  );
}

export default function App() {
  const [activeView, setActiveView] = useState("Dashboard");

  const handleViewChange = (view: string) => {
    setActiveView(view);
    toast.success(`Switched to ${view}`, {
      description: `Viewing ${view.toLowerCase()} section`,
      duration: 2000,
    });
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SidebarProvider>
        <div className="flex h-screen w-full relative">
          <AnimatedBackground />
          <AppSidebar activeView={activeView} setActiveView={handleViewChange} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative z-10">
              <div className="flex h-14 items-center gap-4 px-6">
                <SidebarTrigger />
                <div className="flex-1" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="relative"
                    onClick={() => {
                      handleViewChange("Notifications");
                      toast.info("You have 3 unread notifications");
                    }}
                  >
                    <Bell className="h-4 w-4" />
                    <motion.span
                      className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      3
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </header>
            <MainContent activeView={activeView} />
          </div>
        </div>
        <Toaster richColors position="top-right" />
      </SidebarProvider>
    </ThemeProvider>
  );
}