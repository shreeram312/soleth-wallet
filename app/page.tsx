"use client";
import { Provider } from "@/components/provider";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Provider />
    </div>
  );
}
