"use client";
import { useEffect } from "react";
import { initWedding } from "@/lib/initWedding";

/* Page load hone ke baad countdown, chatbot, music, gallery, intro sab chalu karta hai. */
export default function WeddingClient() {
  useEffect(() => {
    initWedding();
  }, []);
  return null;
}
