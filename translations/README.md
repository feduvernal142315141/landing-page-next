# Sistema de Traducciones KodeWave Solutions

## Estructura

Este proyecto utiliza un sistema de traducciones centralizado basado en archivos JSON para soportar múltiples idiomas.

### Archivos de traducción

- `es.json` - Traducciones en español (idioma por defecto)
- `en.json` - Traducciones en inglés

### Convención de llaves

Las llaves de traducción siguen una estructura jerárquica usando puntos (.) como separadores:

\`\`\`
seccion.subseccion.elemento
\`\`\`

**Ejemplos:**
- `navbar.services` - Enlace de servicios en el navbar
- `hero.title` - Título principal del hero
- `footer.cta.title` - Título del CTA en el footer

### Uso en componentes

1. Importar el hook de traducción:
\`\`\`tsx
import { useTranslation } from '@/lib/i18n/context'
\`\`\`

2. Usar el hook en el componente:
\`\`\`tsx
const { t, locale, setLocale } = useTranslation()
\`\`\`

3. Obtener traducciones:
\`\`\`tsx
<h1>{t('hero.title')}</h1>
\`\`\`

4. Traducciones con parámetros:
\`\`\`tsx
// En el JSON: "welcome": "Hola {name}, bienvenido"
<p>{t('welcome', { name: 'Juan' })}</p>
\`\`\`

### Cambiar idioma

El idioma se puede cambiar usando el componente `LanguageSwitcher` o programáticamente:

\`\`\`tsx
setLocale('en') // Cambiar a inglés
setLocale('es') // Cambiar a español
\`\`\`

El idioma seleccionado se guarda automáticamente en `localStorage`.

### Agregar nuevos idiomas

1. Crear un nuevo archivo JSON en `/translations/` (ej: `fr.json`)
2. Copiar la estructura de `es.json` o `en.json`
3. Traducir todos los valores manteniendo las mismas llaves
4. Actualizar el tipo `Locale` en `/lib/i18n/context.tsx`:
\`\`\`tsx
type Locale = 'es' | 'en' | 'fr'
\`\`\`
5. Agregar el import y registro en el objeto `translations`:
\`\`\`tsx
import fr from '@/translations/fr.json'

const translations: Record<Locale, Translations> = {
  es,
  en,
  fr,
}
\`\`\`

### Agregar nuevas traducciones

1. Agregar la llave y valor en **todos** los archivos de idioma
2. Mantener la misma estructura jerárquica
3. Usar la llave en los componentes con `t('nueva.llave')`

### Verificación de calidad

Antes de cada despliegue, verificar:

- ✅ Todas las llaves existen en todos los archivos de idioma
- ✅ No hay textos hardcodeados en los componentes
- ✅ Las traducciones mantienen el mismo tono y longitud aproximada
- ✅ Los parámetros dinámicos funcionan correctamente

### Estructura actual de secciones

\`\`\`
navbar.*          - Navegación principal
hero.*            - Sección hero
trustBar.*        - Barra de tecnologías
services.*        - Servicios
features.*        - Características (React, Next.js, etc.)
cases.*           - Casos de éxito
demos.*           - Demos interactivas
resources.*       - Recursos y guías
projectPhases.*   - Fases del proyecto
about.*           - Sobre nosotros
testimonials.*    - Testimonios
whatsappCta.*     - CTA de WhatsApp
faq.*             - Preguntas frecuentes
footer.*          - Footer
\`\`\`

### Responsable

Designar una persona responsable de:
- Revisar coherencia lingüística
- Aprobar nuevas traducciones
- Mantener consistencia de tono y estilo
- Coordinar con traductores externos si es necesario

### Escalabilidad futura

Para proyectos grandes, considerar:
- Dividir archivos por módulo (`/translations/home/es.json`, `/translations/footer/es.json`)
- Integración con plataformas de gestión de traducciones (Lokalise, Crowdin, POEditor)
- Automatización de verificación de llaves faltantes
- Sistema de fallback para traducciones incompletas
