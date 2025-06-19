////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom"

import { SearchParamKey } from "@/data/keys/SearchParamKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function useFilteredSearchParams() {

  const [searchParams, setSearchParams] = useSearchParams();

  const allowedSearchParams = useMemo(() => new Set(Object.values(SearchParamKey)), [])

  const filteredSearchParams = useMemo<URLSearchParams>(() => {
    return new URLSearchParams(Array.from(searchParams.entries()).filter(([key]) => (allowedSearchParams.has(key as SearchParamKey))))
  }, [searchParams, allowedSearchParams]);

  useEffect(() => {
    if (searchParams.toString() !== filteredSearchParams.toString()) {
      setSearchParams(filteredSearchParams, { replace: true });
    }
  }, [searchParams, setSearchParams, filteredSearchParams])
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
