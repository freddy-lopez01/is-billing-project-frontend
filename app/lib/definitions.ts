export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type TotalStorage = {
  date: string; 
  amount: number;
}
export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type StorageEntry = {
  volume_name: string;
  owner: string;
  size_tb: number;
  date: string;
  index: string;
  users: string[];
};
export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};


export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  src_index: string;
  dst_index: string;
  description: string;
  contacts: string;
  quantity: number;
  unit_price: number;
  service_id: number;
  start_date: string
  end_date: string
  frequency_id: number;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

