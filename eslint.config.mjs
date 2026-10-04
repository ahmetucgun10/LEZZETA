import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  // Keep the starter on the flat config export that actually runs under the pinned ESLint/Next toolchain.
  ...nextCoreWebVitals,
  {
    rules: {
      // Mekan, kapak ve avatar görselleri kullanıcıdan/Google'dan gelen rastgele harici adreslerdir;
      // next/image yalnızca next.config.ts içindeki izinli alan adlarıyla çalıştığı için <img> bilinçli kullanılıyor.
      "@next/next/no-img-element": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
