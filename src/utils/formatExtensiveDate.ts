/* eslint-disable import/no-duplicates */
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const formatExtensiveDate = (date: string): string => {
  return format(parseISO(date), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
};

export default formatExtensiveDate;
