// components/ui/FormCard.jsx

export default function FormCard({
  title,
  description,
  children,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
      
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          {description}
        </p>
      </div>

      <div className="mt-8">
        {children}
      </div>

    </div>
  );
}