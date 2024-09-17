import { companies } from "@/constants";

export const companyOptions = companies.map((company) => ({
  value: company.value,
  label: company.name,
}));
