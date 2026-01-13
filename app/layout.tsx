export const metadata = {
  title: "PressReady",
  description: "Press it right the first time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
          </body>
  </html>
);
}



      



