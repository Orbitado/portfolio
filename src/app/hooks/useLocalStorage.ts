"use client";

import { useState, useEffect } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);
      // Si no es JSON válido, devuelve el valor como una cadena
      return item
        ? isJSON(item)
          ? JSON.parse(item)
          : (item as unknown as T)
        : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key: ${key}`, error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        const valueToStore =
          typeof value === "string" ||
          typeof value === "number" ||
          typeof value === "boolean"
            ? value
            : JSON.stringify(value);
        localStorage.setItem(key, valueToStore as string);
      }
    } catch (error) {
      console.error(`Error setting localStorage key: ${key}`, error);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const item = localStorage.getItem(key);
      if (item) {
        setStoredValue(
          isJSON(item) ? JSON.parse(item) : (item as unknown as T)
        );
      }
    } catch (error) {
      console.error(`Error syncing localStorage key: ${key}`, error);
    }
  }, [key]);

  return [storedValue, setValue];
}

// Helper para verificar si un valor es JSON
const isJSON = (value: string): boolean => {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
};

export default useLocalStorage;
