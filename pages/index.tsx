import { useEffect } from "react";

export default function HomeRedirect() {
  useEffect(() => {
    window.location.href = "/";
  }, []);

  return null;
}
