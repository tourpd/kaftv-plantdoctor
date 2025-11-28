"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Result() {
  const params = useSearchParams();
  const img = params.get("img");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!img) return;

    fetch("/analyze", {
      method: "POST",
      body: JSON.stringify({ filename: img }),
    })
      .then((r) => r.json())
      .then((d) => setResult(d.output));
  }, [img]);

  return (
    <div>
      <h2>📋 분석 결과</h2>
      {img && <img src={`/${img}`} width={300} />}
      <pre style={{ whiteSpace: "pre-wrap", marginTop: 20 }}>{result}</pre>
    </div>
  );
}