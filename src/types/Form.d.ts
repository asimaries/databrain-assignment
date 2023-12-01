type UserData = {
  firstName?: string;
  lastName?: string;
  age?: string;
  email?: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

type FormWrapperProps = {
  title?: string;
  children?: ReactNode;
};

type AddressData = {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

type PaymentData = {
  payment?: string;
};

type PaymentFormProps = PaymentData & {
  updateFields: (fields: Partial<PaymentData>) => void;
};
