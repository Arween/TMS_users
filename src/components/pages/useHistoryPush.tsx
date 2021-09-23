import { useCallback } from "react";
import { useHistory } from "react-router-dom";

export const useHistoryPush = (path: string) => {
  const history = useHistory();

  const goToAuth = useCallback(() => {
    history.push(path);
  }, [history, path]);

  return goToAuth;
};
