interface InputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ label, type, id, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border rounded-lg"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};
