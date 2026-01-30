'use client';

import React from "react"

import { Home, Users, Calendar, File } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

interface DashboardNavProps {
  items: NavItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  calendar: <Calendar className="w-5 h-5" />,
  file: <File className="w-5 h-5" />,
};

export default function DashboardNav({ items, activeTab, onTabChange }: DashboardNavProps) {
  return (
    <nav className="w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-4 space-y-2">
        {items.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? 'default' : 'ghost'}
            className={cn(
              'w-full justify-start gap-3 h-10',
              activeTab === item.id && 'bg-primary text-primary-foreground hover:bg-primary/90'
            )}
            onClick={() => onTabChange(item.id)}
          >
            <span className="text-lg">{iconMap[item.icon] || null}</span>
            <span>{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
}
