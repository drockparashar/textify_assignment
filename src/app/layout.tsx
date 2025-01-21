import './globals.css'
import Sidebar from './components/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="flex h-full">
          <Sidebar />
          <div className="flex-1 overflow-auto">
            {/* Add padding-left for mobile to prevent content from being hidden under the hamburger */}
            <main className="p-4 lg:p-6 pt-16 lg:pt-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}