import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import "@/style.css";
import Home from "@/pages/Home";
import NotFound from "@/pages/_404";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MotionConfig } from "motion/react";

export function App() {
    return (
        <LocationProvider>
            <MotionConfig
                transition={{ type: "spring", stiffness: 234, damping: 15 }}
            >
                <Header />
                <main className="font-epilogue flex flex-1 flex-col">
                    <Router>
                        <Route path="/" component={Home} />
                        <Route default component={NotFound} />
                    </Router>
                </main>
                <Footer />
            </MotionConfig>
        </LocationProvider>
    );
}

render(<App />, document.getElementById("app")!);
