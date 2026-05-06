export default function Input({
  label,
  placeholder,
  type = "text",
}) {
  return (
    <div className="space-y-2">
      
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          h-12
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          text-sm
          text-slate-900
          placeholder:text-slate-400
          outline-none
          transition-all
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-50
        "
      />
      
    </div>
  );
}