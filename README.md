# PYMEs Platform - Monorepo

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

## 🌳 Estrategia de Branches
```
main (producción)
  ↑
  qa (testing)
    ↑
    dev (desarrollo)
      ↑
      feature/xxx (features)
```

### Flujo de Trabajo

1. **Desarrollo de features:**
```bash
   git checkout dev
   git checkout -b feature/nombre-feature
   # ... hacer cambios ...
   git commit -m "feat: descripción"
   git push origin feature/nombre-feature
   # Crear PR: feature/nombre-feature → dev
```

2. **Release a QA:**
```bash
   # Cuando dev está estable
   # Crear PR: dev → qa
   # Después del merge, automáticamente se despliega a QA
```

3. **Release a Producción:**
```bash
   # Cuando QA está aprobado
   # Crear PR: qa → main
   # Después del merge, automáticamente se despliega a producción
```

### Ambientes

| Branch | Ambiente | URL Storybook | Deploy |
|--------|----------|---------------|--------|
| `main` | Producción | https://tu-usuario.github.io/pymes-platform/ | Automático en merge |
| `qa` | Testing | (configurar) | Automático en merge |
| `dev` | Desarrollo | (configurar) | Automático en merge |

### Hotfixes

Para bugs críticos en producción:
```bash
git checkout main
git checkout -b hotfix/nombre-fix
# ... arreglar bug ...
git commit -m "hotfix: descripción"
# Crear PR: hotfix/nombre-fix → main
# Después hacer cherry-pick o merge de vuelta a qa y dev
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