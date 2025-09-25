import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Disable warnings for unused variables/imports during development
      "@typescript-eslint/no-unused-vars": "off",
      
      // Allow any type for now (you might want to fix these gradually)
      "@typescript-eslint/no-explicit-any": "off",
      
      // Disable strict function type checking
      "@typescript-eslint/no-unsafe-function-type": "off",
      
      // Allow empty interfaces
      "@typescript-eslint/no-empty-interface": "off",
      // Allow empty object types
      "@typescript-eslint/no-empty-object-type": "off",
      
      // Disable prefer-const warnings
      "prefer-const": "off",
      
      // Allow unescaped entities in JSX
      "react/no-unescaped-entities": "off",
      
      // Allow using <img> instead of next/image during development
      "@next/next/no-img-element": "off",
      
      // Allow using regular <a> tags
      "@next/next/no-html-link-for-pages": "off",
      
      // Disable exhaustive-deps warnings for useEffect/useMemo
      "react-hooks/exhaustive-deps": "off",
      
      // Allow ts-ignore comments for now
      "@typescript-eslint/ban-ts-comment": "off",
      
      // Allow unused expressions
      "@typescript-eslint/no-unused-expressions": "off",
      
      // Disable unused eslint-disable directive warnings
      "eslint-comments/no-unused-disable": "off",
    },
  },
];

export default eslintConfig;