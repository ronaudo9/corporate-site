import useMedia from "use-media";

export const useMobile = () => {
  const isMobile = useMedia({ maxWidth: 640 });
  return isMobile;
};
