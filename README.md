# PYMEs Platform - Monorepo

Plataforma de desarrollo web para PYMEs en Nuevo León, México.

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

## Inicio Rápido
```bash
# Instalar pnpm
npm install -g pnpm

# Instalar dependencias
pnpm install

# Desarrollar componentes
pnpm components:dev

# Ver Storybook
pnpm --filter @pymes/ui-components storybook

# Ejecutar template
pnpm --filter @pymes/template-base dev
```

## Comandos Útiles

- `pnpm dev` - Inicia todos los proyectos en modo desarrollo
- `pnpm build` - Construye todos los proyectos
- `pnpm test` - Ejecuta todos los tests
- `pnpm lint` - Ejecuta el linter en todos los proyectos

## Agregar Nuevo Cliente
```bash
# Copiar template
cp -r apps/template-base apps/cliente-nombre

# Actualizar package.json del nuevo cliente
# Instalar dependencias
pnpm install

# Agregar una dependencia a un paquete específico
pnpm add <paquete> --filter @pymes/ui-components

# Ver todos los workspaces
pnpm list --depth 0
```