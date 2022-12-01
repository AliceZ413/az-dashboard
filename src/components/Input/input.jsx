import clsx from "clsx";

const Input = ({ isError = false, className, ...props }) => {
  return (
    <>
      <input
        className={clsx(
          "border rounded-md py-2 px-3 text-sm focus:outline-none",
          isError
            ? "border-red-600 placeholder:text-red-600 hover:border-red-600 focus:border-red-600"
            : "border-slate-300 placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300",
          className
        )}
        {...props}
      />
    </>
  );
};

export default Input;