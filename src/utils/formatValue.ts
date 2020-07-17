const formatValue = (value: number): string =>
  Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);

export default formatValue;
