'use client';
import { useState } from 'react';

export default function Upload(){
  const [file,setFile]=useState(null);
  return (
    <div style={{padding:20}}>
      <h2>사진 업로드</h2>
      <input type="file" onChange={e=>setFile(e.target.files[0])}/>
      <button>업로드</button>
    </div>
  );
}