export const isArray = <TValue>(value: TValue) => {
  return (value as unknown as unknown[])?.length ? true : false;
};
