import React from "react";

function baseClasses(
  variant = "default",
  size = "default",
  className = "",
  disabled = false
) {
  const variantClasses = {
    default: "bg-white text-black hover:bg-gray-200",
    outline: "border border-gray-500 text-white hover:bg-gray-800"
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3"
  };

  return `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant] || variantClasses.default} ${sizeClasses[size] || sizeClasses.default} ${disabled ? "opacity-50" : ""} ${className}`.trim();
}

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: `${baseClasses(variant, size, className, props.disabled)} ${
        children.props.className || ""
      }`.trim()
    });
  }

  return (
    <button
      className={baseClasses(variant, size, className, props.disabled)}
      {...props}
    >
      {children}
    </button>
  );
}
