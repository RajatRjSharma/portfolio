import { useEffect, useState } from "react";

const MOBILE = "(max-width: 767px)";
const TABLET = "(max-width: 1023px)";

export function getProjectPageSize() {
  if (typeof window === "undefined" || !window.matchMedia) return 6;
  if (window.matchMedia(MOBILE).matches) return 3;
  if (window.matchMedia(TABLET).matches) return 4;
  return 6;
}

export default function useProjectPageSize() {
  const [pageSize, setPageSize] = useState(getProjectPageSize);

  useEffect(() => {
    if (!window.matchMedia) return undefined;

    const mobile = window.matchMedia(MOBILE);
    const tablet = window.matchMedia(TABLET);

    const update = () => setPageSize(getProjectPageSize());

    if (mobile.addEventListener) {
      mobile.addEventListener("change", update);
      tablet.addEventListener("change", update);
      return () => {
        mobile.removeEventListener("change", update);
        tablet.removeEventListener("change", update);
      };
    }

    mobile.addListener(update);
    tablet.addListener(update);
    return () => {
      mobile.removeListener(update);
      tablet.removeListener(update);
    };
  }, []);

  return pageSize;
}
