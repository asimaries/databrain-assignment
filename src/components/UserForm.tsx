import { FormWrapper } from "./FormWrapper";

const UserForm = ({
  firstName,
  lastName,
  age,
  email,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        className="rounded p-1 border bg-neutral-100 focus:bg-white"
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        className="rounded p-1 border bg-neutral-100 focus:bg-white"
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        className="rounded p-1 border bg-neutral-100 focus:bg-white"
        required
        min={18}
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
      <label>Email</label>
      <input
        className="rounded p-1 border bg-neutral-100 focus:bg-white"
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
