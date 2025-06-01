import { createContext, useContext, useState } from 'react';
import { patients as initialPatients } from '../data/patients';
import { records as initialRecords } from '../data/records';
import { consentHistory as initialConsent } from '../data/consentHistory';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [patients, setPatients] = useState(initialPatients);
  const [records, setRecords] = useState(initialRecords);
  const [consentHistory, setConsentHistory] = useState(initialConsent);

  return (
    <DataContext.Provider value={{ patients, setPatients, records, setRecords, consentHistory, setConsentHistory }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext); 