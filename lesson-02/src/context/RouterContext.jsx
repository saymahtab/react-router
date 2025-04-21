import { createContext, useEffect, useState } from 'react';

export const RouterContext = createContext();

export const BrowserRouter = ({ children }) => {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    }
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  }

  return (
    <RouterContext.Provider value={{ currentPath, navigate}}>
      {children}
    </RouterContext.Provider>
  )
}