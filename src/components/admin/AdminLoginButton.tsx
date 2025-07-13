
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/contexts/AdminContext';
import { Shield, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminLoginButton = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { isAdminLoggedIn, login, logout } = useAdmin();
  const { toast } = useToast();

  const handleLogin = () => {
    if (login(username, password)) {
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!",
      });
      setIsOpen(false);
      setUsername('');
      setPassword('');
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been logged out of the admin panel.",
    });
  };

  if (isAdminLoggedIn) {
    return (
      <Button
        onClick={handleLogout}
        variant="outline"
        className="fixed top-4 right-20 z-50 px-4 py-2 rounded-md border bg-white dark:bg-zinc-800 text-black dark:text-white shadow transition-colors"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Admin Logout
      </Button>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="fixed top-4 right-20 z-50 px-4 py-2 rounded-md border bg-white dark:bg-zinc-800 text-black dark:text-white shadow transition-colors"
        >
          <Shield className="mr-2 h-4 w-4" />
          Admin Login
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Admin Login</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLoginButton;
