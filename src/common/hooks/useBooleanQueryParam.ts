////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type BooleanQueryParamHook = {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}
export function useBooleanQueryParam(
  paramName: string,
  trueValue: string = "1"
): BooleanQueryParamHook {

  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue: string | null = searchParams.get(paramName);
  const value: boolean = currentValue === trueValue;

  useEffect(() => {
    if (currentValue !== null && currentValue !== trueValue) {
      setSearchParams(prevParams => {
        const newParams: URLSearchParams = new URLSearchParams(prevParams);
        newParams.delete(paramName);
        return newParams;
      })
    }
  }, [paramName, currentValue, trueValue, setSearchParams])

  const setTrue = useCallback(() => {
    setSearchParams(prevParams => {
      const newParams: URLSearchParams = new URLSearchParams(prevParams);
      newParams.set(paramName, trueValue);
      return newParams;
    });
  }, [paramName, trueValue, setSearchParams]);

  const setFalse = useCallback(() => {
    setSearchParams(prevParams => {
      const newParams: URLSearchParams = new URLSearchParams(prevParams);
      newParams.delete(paramName);
      return newParams;
    });
  }, [paramName, setSearchParams]);

  const toggle = useCallback(() => {
    setSearchParams(prevParams => {
      const newParams: URLSearchParams = new URLSearchParams(prevParams);
      const isTrue: boolean = newParams.get(paramName) === trueValue;
      if (isTrue) { newParams.delete(paramName); }
      else { newParams.set(paramName, trueValue); }
      return newParams;
    });
  }, [paramName, trueValue, setSearchParams]);

  return { value, setTrue, setFalse, toggle }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
