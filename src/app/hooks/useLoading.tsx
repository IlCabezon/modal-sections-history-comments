import { useState } from "react";

export type UseLoading = {
  loading: boolean;
  toggleLoading(): void;
};

export const useLoading = (): UseLoading => {
  const [loading, setLoading] = useState(false);
  const toggleLoading = () => setLoading(!loading);

  return { loading, toggleLoading };
};
