"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  const upload = async () => {
    if (!file) return alert("이미지를 선택해주세요");

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/upload", { method: "POST", body: form });
    const data = await res.json();

    window.location.href = `/result?img=${data.filename}`;
  };

  return (
    <div>
      <h1>🌱 KAFTV Plant Doctor</h1>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={upload} style={{ marginTop: 20 }}>업로드</button>
    </div>
  );
}