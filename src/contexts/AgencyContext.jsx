import { createContext, useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

export const AgencyContext = createContext();

export function AgencyProvider({ children }) {
  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [services, setServices] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    setIsLoading(true);
    try {
      const [clientsRes, employeesRes, servicesRes, expensesRes, paymentsRes] = await Promise.all([
        supabase.from("clients").select("*"),
        supabase.from("employees").select("*"),
        supabase.from("services").select("*"),
        supabase.from("expenses").select("*"),
        supabase.from("payments").select("*")
      ]);

      if (clientsRes.error) throw clientsRes.error;
      if (employeesRes.error) throw employeesRes.error;
      if (servicesRes.error) throw servicesRes.error;
      if (expensesRes.error) throw expensesRes.error;
      if (paymentsRes.error) throw paymentsRes.error;

      setClients(clientsRes.data);
      setEmployees(employeesRes.data);
      setServices(servicesRes.data);
      setExpenses(expensesRes.data);
      setPayments(paymentsRes.data);
    } catch (err) {
      console.error("Errore nel caricamento dati Supabase:", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AgencyContext.Provider
      value={{
        clients, setClients,
        employees, setEmployees,
        services, setServices,
        expenses, setExpenses,
        payments, setPayments,
        isLoading,
        reloadData: loadAllData
      }}
    >
      {children}
    </AgencyContext.Provider>
  );
}
