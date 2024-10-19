import { FaCheck, FaExclamationCircle } from "react-icons/fa";

/* Criterios de la contraseña */
const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "Tiene un minimo de 6 caracteres", met: password.length >= 6 },
    { label: "Contiene una letra mayuscula", met: /[A-Z]/.test(password) },
    { label: "Contiene una letra minuscula", met: /[a-z]/.test(password) },
    { label: "Contiene un numero", met: /\d/.test(password) },
    {
      label: "Contiene un caracter especial",
      met: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <div className="mt-2 space-y-1">
      {criteria.map((item) => (
        <div key={item.label} className="flex items-center text-xs">
          {item.met ? (
            <FaCheck className="size-4 text-emerald-500 mr-2" />
          ) : (
            <FaExclamationCircle className="size-4 text-gray-600 mr-2" />
          )}
          <span className={item.met ? "text-emerald-500" : "text-gray-600"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

/* Medidor de la fortaleza de la contraseña */
const PasswordStrengthMeter = ({ password }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };
  const strength = getStrength(password);

  const getColor = (strength) => {
    if (strength === 0) return "bg-red-500";
    if (strength === 1) return "bg-red-400";
    if (strength === 2) return "bg-yellow-500";
    if (strength === 3) return "bg-yellow-400";
    return "bg-green-500";
  };

  const getStrengthText = (strength) => {
    if (strength === 0) return "Muy Debil";
    if (strength === 1) return "Debil";
    if (strength === 2) return "Imparcial";
    if (strength === 3) return "Buena";
    return "Fuerte";
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-600">
          Seguridad De La Contraseña
        </span>
        <span className="text-xs text-gray-600">
          {getStrengthText(strength)}
        </span>
      </div>

      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 
                ${index < strength ? getColor(strength) : "bg-gray-600"}
              `}
          />
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
};
export default PasswordStrengthMeter;
