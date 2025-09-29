import React from "react";
import { Bot, Calendar1Icon } from "lucide-react";
import Link from "next/link";

const sidebarItems = [
  {
    name: "Meetings",
    icon: <Calendar1Icon />,
    href: "/meetings",
  },
  {
    name: "Agents",
    icon: <Bot />,
    href: "/agents",
  },
];

export default function Sidebar() {
  return (
    <aside
      className="h-screen bg-gradient-to-b from-indigo-600 to-indigo-900 text-white shadow-lg flex flex-col"
      style={{ minWidth: "220px" }}
    >
      <div className="px-6 py-8 flex items-center justify-center">
        <Link href={"/dashboard"} className="text-2xl font-bold tracking-wide">
          Dashboard
        </Link>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium text-lg"
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <hr className="border-gray-700 mx-4" />

        <div className="px-6 py-4">
          <h2 className="text-sm font-semibold text-gray-300 mb-2">Pro Plan</h2>
          <p className="text-xs text-gray-400">
            Upgrade to the Pro Plan for more features and benefits.
          </p>
          <button className="mt-3 w-full bg-white text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            Upgrade Now
          </button>
        </div>
      </div>

      <div className="mt-auto px-6 py-4 text-xs text-blue-200">
        &copy; {new Date().getFullYear()} AI Calling Agent
      </div>
    </aside>
  );
}
