import {
  useValidatorContext,
  ValidatorStateContext,
} from "../../internal/common/context/ValidatorStateContext";
import { Switch } from "ui-helpers";

const ValidatorToggle = () => {
  const { value, handleSetValue } =
    useValidatorContext() as ValidatorStateContext;
  return (
    <Switch
      label={"Show Inactive"}
      onChange={() => {
        handleSetValue(!value);
      }}
      checked={value}
    />
  );
};

export default ValidatorToggle;