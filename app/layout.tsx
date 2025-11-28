export const metadata = {
  title: "KAFTV Plant Doctor",
  description: "AI 병해충 진단",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="ko">
      <body style={{ maxWidth: "900px", margin: "0 auto", padding: 20 }}>
        {children}
      </body>
    </html>
  );
}