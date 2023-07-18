import { forwardRef, memo, useState } from "react";

const CustomInput = forwardRef(({ className, ...rest }, ref) => {
  const [err, setErr] = useState(null);
  return <div className={className}>
    <input onBlur={() => { rest.value === '' ? setErr('error') : setErr(null) }} {...rest} ref={ref} />
    {
      err && !rest.value && !rest.requred && <div className="validate-err">required</div>
    }
  </div>;
}
)
export default memo(CustomInput);