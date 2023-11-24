import { createContext, useContext } from 'react';
import Context from './index';

const StaticContext = createContext<Context | null>(null);
const useStaticContext = () => useContext(StaticContext);

export { StaticContext, useStaticContext };
