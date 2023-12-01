import useMultiStepOrderForm from "../hooks/useMultiStepOrderForm";
import PaymentForm from "./PaymentForm";
import AddressForm from "./AddressForm";
import UserForm from "./UserForm";
import { useDispatch, useSelector } from "react-redux";
import { updateDetail } from "../store/orderDetailSlice";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  // const [data, setData] = useState(INITIAL_DATA);
  const data = useSelector((state: RootState) => state.orderDetail);
  const dispatch = useDispatch();
  function updateFields(fields: { [key: string]: string }) {
    dispatch(updateDetail(fields));
  }
  const navigate = useNavigate();
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, prev, next } =
    useMultiStepOrderForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <PaymentForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    navigate("/order-summary");
  }
  return (
    <div className="w-96 m-auto relative border p-2 my-3 rounded-md">
      <form onSubmit={onSubmit} className="space-y-1">
        <div className=" absolute top-1 right-1">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="flex gap-1 justify-end">
          {!isFirstStep && (
            <button className="border rounded p-1" type="button" onClick={prev}>
              Back
            </button>
          )}
          <button className="border rounded p-1" type="submit">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default OrderForm;
