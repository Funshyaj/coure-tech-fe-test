interface Props {
  label: string;
  type?: "submit" | "reset" | "button";
  formId?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const PrimaryButton = ({
  label,
  disabled,
  onClick,
  formId,
  type = "submit",
  ...atrributes
}: Props) => {
  return (
    <button
      form={formId}
      type={type}
      onClick={onClick}
      className={`${
        disabled && "opacity-70 cursor-not-allowed"
      } bg-blue-500 text-lg md:text-lg text-white dark:text-brand-black w-full md:max-w-32 py-2.5 px-4 rounded active:shadow-lg active:opacity-75 md:hover:shadow-lg enabled:active:scale-95 duration-300`}
      disabled={disabled}
      {...atrributes}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
