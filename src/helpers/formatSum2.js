export const formatSum = (value) => {
  if (!value) return value;
  const phoneNumber = value.toString().replace(/\D/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) {
    return phoneNumber;
  }
  if (phoneNumberLength === 4) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1)}`;
  }
  if (phoneNumberLength < 6) {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`;
  }
  if (phoneNumberLength < 7) {
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
  }
  if (phoneNumberLength === 7) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)}`;
  }
  if (phoneNumberLength === 8) {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5)} `;
  }
  if (phoneNumberLength === 9) {
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6)} `;
  }
  if (phoneNumberLength === 10) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)} `;
  }
  if (phoneNumberLength === 11) {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8)} `;
  }
  if (phoneNumberLength === 12) {
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)} ${phoneNumber.slice(9)} `;
  }
  if (phoneNumberLength === 13) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 10)} ${phoneNumber.slice(10)} `;
  }
  if (phoneNumberLength === 14) {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8, 11)} ${phoneNumber.slice(11)} `;
  }
  if (phoneNumberLength === 15) {
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)} ${phoneNumber.slice(9, 12)} ${phoneNumber.slice(12)}`;
  }
  return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)} ${phoneNumber.slice(9, 12)} ${phoneNumber.slice(12)}`;
};