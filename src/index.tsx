import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import "@/style.css";
import Home from "@/pages/Home";
import NotFound from "@/pages/_404";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function App() {
    return (
        <LocationProvider>
            <Header />
            <main className="flex-1">
                <Router>
                    <Route path="/" component={Home} />
                    <Route default component={NotFound} />
                </Router>
            </main>
            <Footer />
        </LocationProvider>
    );
}

render(<App />, document.getElementById("app")!);
