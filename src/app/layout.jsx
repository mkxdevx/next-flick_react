import '../App.css';
import '../index.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: "Next Flick",
  description: "A movie database app built with Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Navbar />
          <main className="container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
