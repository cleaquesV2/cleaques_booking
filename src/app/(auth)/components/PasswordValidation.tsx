import React from "react";

interface Requirement {
  label: string;
  isValid: boolean;
}

interface PasswordValidationProps {
  requirements: Requirement[];
}

export const validatePasswordRequirements = (password: string) => ({
  hasUppercase: /[A-Z]/.test(password),
  hasNumber: /\d/.test(password),
  hasSpecialChar: /[^A-Za-z0-9]/.test(password),
});

const PasswordValidation: React.FC<PasswordValidationProps> = ({ requirements }) => {
  if (!requirements?.length) return null;

  return (
    <div className="mt-2 flex items-center gap-2 rounded-lg text-sm">
      {requirements.map((requirement) => (
        <div key={requirement.label} className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full border ${
              requirement.isValid ? "bg-green-500 border-green-500" : "border-gray-500"
            }`}
          />
          <span className={requirement.isValid ? "text-green-400" : "text-gray-400"}>
            {requirement.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PasswordValidation;
 