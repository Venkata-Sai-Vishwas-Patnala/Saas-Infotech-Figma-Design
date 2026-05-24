import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Bell, Check, X, UserPlus, MessageSquare, AlertCircle, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

const notifications = [
  {
    id: 1,
    type: "user",
    title: "New team member joined",
    description: "Sarah Johnson has joined your workspace",
    time: "5 minutes ago",
    read: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    icon: UserPlus,
  },
  {
    id: 2,
    type: "message",
    title: "New message received",
    description: "Michael Chen sent you a message about the Q4 report",
    time: "1 hour ago",
    read: false,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    icon: MessageSquare,
  },
  {
    id: 3,
    type: "alert",
    title: "Server maintenance scheduled",
    description: "Scheduled maintenance on May 28, 2024 from 2AM-4AM EST",
    time: "3 hours ago",
    read: false,
    icon: AlertCircle,
  },
  {
    id: 4,
    type: "success",
    title: "Revenue goal achieved",
    description: "You've reached 120% of your monthly revenue target!",
    time: "5 hours ago",
    read: true,
    icon: TrendingUp,
  },
  {
    id: 5,
    type: "user",
    title: "Profile updated",
    description: "Your profile information was successfully updated",
    time: "1 day ago",
    read: true,
    icon: Check,
  },
];

export default function Notifications() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1>Notifications</h1>
          <p className="text-muted-foreground">
            You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => toast.success("All notifications marked as read")}>
            <Check className="mr-2 h-4 w-4" />
            Mark all as read
          </Button>
          <Button variant="outline" onClick={() => toast.info("All notifications cleared")}>
            <X className="mr-2 h-4 w-4" />
            Clear all
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{notifications.length}</div>
              <p className="text-xs text-muted-foreground">All notifications</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Unread</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{unreadCount}</div>
              <p className="text-xs text-muted-foreground">Needs attention</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Stay updated with your latest activity</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className={`flex gap-4 p-4 rounded-lg border ${
                      !notification.read ? 'bg-accent/50' : 'bg-card'
                    } hover:bg-accent/30 transition-colors`}
                  >
                    {notification.avatar ? (
                      <Avatar>
                        <AvatarImage src={notification.avatar} />
                        <AvatarFallback>
                          <notification.icon className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <notification.icon className="h-5 w-5 text-primary" />
                      </div>
                    )}

                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="font-medium leading-none">{notification.title}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.description}
                          </p>
                        </div>
                        {!notification.read && (
                          <Badge variant="default" className="ml-auto">New</Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>

                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
