"use client";

import type React from "react";

import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import {cn} from "@/lib/utils";
import {BookOpen, ChevronRight, Menu, X} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

interface Tutorial {
  id: string;
  title: string;
  category: string;
}

// Sample tutorials - you can easily add more here
const tutorials: Tutorial[] = [
  {id: "typing", title: "打字", category: "新手起步"},
  {id: "download", title: "下載檔案", category: "新手起步"},
  {id: "banking", title: "網上銀行登入", category: "新手起步"},
  // {id: "advanced", title: "Advanced Topics", category: "Advanced"},
  // {id: "best-practices", title: "Best Practices", category: "Advanced"},
];

const categories = Array.from(new Set(tutorials.map((t) => t.category)));

export function TutorialLayout({children}: {children: React.ReactNode}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4 lg:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <BookOpen className="h-5 w-5" />
            <span>威榮培訓網站</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">主頁</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={cn("fixed inset-y-0 left-0 z-40 w-64 border-r border-border bg-sidebar transition-transform duration-200 lg:translate-x-0 lg:static", sidebarOpen ? "translate-x-0" : "-translate-x-full", "top-14")}>
          <ScrollArea className="h-[calc(100vh-3.5rem)] py-6 px-4">
            <nav className="space-y-6">
              {categories.map((category) => (
                <div key={category}>
                  <h4 className="mb-2 text-sm font-semibold text-sidebar-foreground">{category}</h4>
                  <ul className="space-y-1">
                    {tutorials
                      .filter((t) => t.category === category)
                      .map((tutorial) => (
                        <li key={tutorial.id}>
                          <Link href={`/tutorial/${tutorial.id}`} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors" onClick={() => setSidebarOpen(false)}>
                            <ChevronRight className="h-4 w-4" />
                            {tutorial.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </nav>
          </ScrollArea>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && <div className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />}

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container max-w-4xl py-8 px-4 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
