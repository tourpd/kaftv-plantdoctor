"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/upload";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];

    setLoading(true);
    const url = await uploadImage(file);

    router.push(`/analyze?image=${encodeURIComponent(url)}`);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Plant Doctor</h1>

      <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded">
        사진 업로드
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
        />
      </label>

      {loading && <p className="mt-4 text-gray-500">업로드 중…</p>}
    </div>
  );
}