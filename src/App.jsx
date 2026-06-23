import AppRoutes from "./routes/AppRoutes.jsx";
import { useState } from "react";
import PageLoader from "./components/ui/PageLoader.jsx";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <PageLoader onComplete={() => setLoaded(true)} />
      <div className={`transition-opacity duration-700 delay-200 ${loaded ? "opacity-100" : "opacity-0"}`}>
        {loaded && <AppRoutes />}
      </div>
    </>
  );
}