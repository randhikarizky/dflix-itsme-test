import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const RoutingContext = createContext<{
  previousUrl: string;
  setPreviousUrl: (url: string) => void;
}>({
  previousUrl: "/",
  setPreviousUrl: () => {},
});

export function CustomRoutingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [previousUrl, setPreviousUrl] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setPreviousUrl(window.location.href);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <RoutingContext.Provider value={{ previousUrl, setPreviousUrl }}>
      {children}
    </RoutingContext.Provider>
  );
}

export function useCustomRouting() {
  return useContext(RoutingContext);
}
