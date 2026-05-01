import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";

import "@/style.css";
import Home from "@/pages/Home";
import NotFound from "@/pages/_404";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MotionConfig } from "motion/react";
import LegalDoc from "@/pages/legal";
import { Toast } from "radix-ui";

export function App() {
    return (
        <LocationProvider>
            <MotionConfig
                transition={{ type: "spring", stiffness: 234, damping: 15 }}
            >
                <Toast.Provider>
                    <Header />
                    <main className="font-epilogue flex flex-1 flex-col">
                        <Router>
                            <Route path="/" component={Home} />
                            <Route
                                path="/legal/:filename"
                                component={LegalDoc}
                            />
                            <Route default component={NotFound} />
                        </Router>
                    </main>
                    <Footer />
                    <Toast.Viewport className="fixed top-4 left-1/2 z-50 -translate-x-1/2" />
                </Toast.Provider>
            </MotionConfig>
        </LocationProvider>
    );
}

render(<App />, document.getElementById("app")!);
