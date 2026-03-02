import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatWidget } from "./ChatWidget";
import { ConsultationPopup } from "./ConsultationPopup";
import { CartProvider } from "./CartContext";

export function Layout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <ChatWidget />
        <ConsultationPopup />
      </div>
    </CartProvider>
  );
}