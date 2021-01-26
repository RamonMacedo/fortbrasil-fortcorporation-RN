const formatDate = (date: Date): string =>
  String(new Date(date).toLocaleDateString());

export default formatDate;
