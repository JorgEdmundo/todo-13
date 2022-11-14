import Footer from './components/elements/footer'
import Header from './components/elements/header'
import '../styles/global-scss.scss'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  // children: React.ReactNode;
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="main-container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}