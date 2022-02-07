export default interface User {
  emailOrPhone: string;
  isValid: boolean;
  otpToSend: number;
  otpToValidate: number;
}
