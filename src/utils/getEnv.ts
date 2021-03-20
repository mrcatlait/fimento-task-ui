export const getEnv = (name: string): string => {
  return (
    process.env[name] || ((window as any).process && (window as any).process.env && (window as any).process.env[name])
  );
};
