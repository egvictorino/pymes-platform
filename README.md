# PYMEs Platform - Monorepo

[![CI](https://github.com/TU-USUARIO/pymes-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/TU-USUARIO/pymes-platform/actions/workflows/ci.yml)
[![Storybook](https://github.com/TU-USUARIO/pymes-platform/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/TU-USUARIO/pymes-platform/actions/workflows/deploy-storybook.yml)

Plataforma de desarrollo web para PYMEs en Nuevo León, México.

## 📚 Documentación

- [Storybook (Componentes)](https://TU-USUARIO.github.io/pymes-platform/)

## Estructura del Proyecto
```
pymes-platform/
├── packages/           # Paquetes compartidos
│   ├── ui-components  # Librería de componentes React
│   ├── shared-utils   # Utilidades compartidas
│   └── design-tokens  # Tokens de diseño
├── apps/              # Aplicaciones
│   └── template-base  # Template base para clientes
└── infrastructure/    # Infraestructura y DevOps
```

## 🚀 Inicio Rápido
```bash
# Instalar pnpm
npm install -g pnpm

# Instalar dependencias
pnpm install

# Construir paquetes
pnpm --filter @pymes/shared-utils build
pnpm --filter @pymes/ui-components build

# Desarrollar componentes
pnpm --filter @pymes/ui-components storybook

# Ver Storybook
# Abre http://localhost:6006

# Ejecutar template
pnpm --filter @pymes/template-base dev
```

## 📝 Comandos Útiles

- `pnpm dev` - Inicia todos los proyectos en modo desarrollo
- `pnpm build` - Construye todos los proyectos
- `pnpm test` - Ejecuta todos los tests
- `pnpm lint` - Ejecuta el linter en todos los proyectos

## 🔄 Flujo de Trabajo

1. Crea una rama desde `develop`: `git checkout -b feat/nueva-funcionalidad`
2. Realiza tus cambios
3. Commit siguiendo conventional commits: `git commit -m "feat: agregar componente Input"`
4. Push y crea un Pull Request
5. GitHub Actions ejecutará automáticamente:
   - ✅ Linting
   - ✅ Type checking
   - ✅ Build
   - ✅ Tests
6. Al hacer merge a `main`, se despliega Storybook automáticamente

## 🏗️ Agregar Nuevo Cliente
```bash
# Copiar template
cp -r apps/template-base apps/cliente-nombre

# Actualizar package.json del nuevo cliente
# Instalar dependencias
pnpm install
```

## 📦 CI/CD

Este proyecto usa GitHub Actions para:
- ✅ Validación automática de código en cada PR
- ✅ Build automático de todos los paquetes
- ✅ Deploy automático de Storybook a GitHub Pages
- ✅ Verificación de tamaño de bundles

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama con tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Privado - Todos los derechos reservados