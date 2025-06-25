# Rick and Morty App 🧪

Mi primer proyecto en Angular que consume la API de Rick and Morty para mostrar información de los personajes.

## ¿Qué hace la aplicación?

Básicamente es una app donde puedes ver todos los personajes de Rick and Morty con sus detalles. Cuando haces clic en un personaje se abre una ventana con más información y puedes ver dónde vive y en qué episodios aparece.

## Lo que aprendí haciendo esto

- Como usar Angular 18 con standalone components
- Consumir una API REST (la de Rick and Morty)
- Usar Angular Material para que se vea bonito
- Hacer navegación entre páginas
- Crear dialogs (ventanas emergentes)
- Hacer que funcione en móvil también

## Cómo ejecutar el proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar la app:**
   ```bash
   ng serve
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:4200/
   ```

## Qué funciona

### Página de Personajes
- Se ven todos los personajes en tarjetas
- Tiene paginación (20 personajes por página)
- Al hacer clic en un personaje se abre un dialog con:
  - Foto e info básica del personaje
  - Su ubicación actual (clickeable)
  - Lista de episodios donde aparece (clickeables)

### Dialogs
- **Dialog de personaje:** Muestra toda la info del personaje
- **Dialog de ubicación:** Cuando haces clic en la ubicación del personaje
- **Dialog de episodio:** Cuando haces clic en algún episodio

### Navegación
- Header con botones para ir a Personajes, Ubicaciones y Episodios
- Solo la página de personajes está completa, las otras dos son páginas básicas

## Tecnologías que usé

- Angular 20
- Angular Material (para los componentes)
- TypeScript
- Rick and Morty API

## Estructura del código

```
src/app/
├── components/        # Los componentes como tarjetas y dialogs
├── models/           # Los tipos e interfaces
├── pages/            # Las páginas principales
├── services/         # Para conectar con la API
```

## Lo que me costó más trabajo

- Entender cómo funcionan los standalone components
- Configurar el routing
- Hacer que los dialogs se vean bien en móvil
- Manejar la paginación

## Cosas que se pueden mejorar

- Agregar búsqueda de personajes
- Completar las páginas de ubicaciones y episodios
- Agregar filtros
- Mejorar el diseño

---

**Proyecto realizado para el curso de Angular I en PARQUESOFT**
