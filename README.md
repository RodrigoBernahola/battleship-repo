# 🎮 Batalla Naval (Battleship)

Implementación completa del clásico juego de Batalla Naval usando JavaScript vanilla, siguiendo principios de arquitectura en capas y TDD (Test-Driven Development).

## 🚀 Características

- ⚡ **Arquitectura en Capas** - Separación clara entre Domain, Application y Presentation
- 🎯 **TDD** - Desarrollo guiado por tests con Jest
- 🎨 **UI Moderna** - Interfaz estilo radar/sonar militar
- 🤖 **IA Simple** - CPU con ataques aleatorios inteligentes
- 📱 **Responsive** - Adaptado para desktop y móvil
- 🔥 **Webpack 5** - Build optimizado y hot reload

## 🎯 Reglas del Juego

- Tablero de 10x10 para cada jugador
- 9 barcos por jugador (tamaños: 5, 4, 3, 2, 2, 1, 1, 1, 1)
- Los barcos no pueden estar adyacentes (diagonal incluida)
- Quien acierta un impacto, sigue atacando
- Gana quien hunde todos los barcos enemigos primero

## 📋 Requisitos

- Node.js >= 14.0.0
- npm >= 6.0.0

## 🛠️ Instalación

```bash
git clone <url-del-repositorio>
cd battleship
npm install
```

## 🎮 Uso

### Modo Desarrollo

```bash
npm run dev
```

Abre automáticamente el juego en `http://localhost:8080`

### Build de Producción

```bash
npm run build
```

Genera archivos optimizados en `dist/`

### Tests

```bash
npm run test
```

Ejecuta todos los tests con Jest

## 📁 Estructura del Proyecto

```
src/
├── domain/              # Lógica de negocio
│   ├── Ship.js         # Clase Ship
│   ├── Gameboard.js    # Clase Gameboard
│   └── Player.js       # Clase Player
│
├── application/         # Capa de aplicación
│   └── GameController.js  # Orquestador del flujo del juego
│
├── presentation/        # Capa de presentación
│   ├── boardView.js    # Renderizado de tableros
│   └── UIController.js # Manejo de eventos del DOM
│
├── tests/              # Tests unitarios
│   ├── Ship.test.js
│   ├── Gameboard.test.js
│   └── Player.test.js
│
├── main.js             # Punto de entrada
├── styles.css          # Estilos globales
└── template.html       # Plantilla HTML
```

## 🏗️ Arquitectura

### Domain Layer

Contiene la lógica de negocio pura, sin dependencias del DOM:

- **Ship**: Representa un barco (longitud, hits recibidos, estado hundido)
- **Gameboard**: Gestiona el tablero 10x10, colocación de barcos y ataques
- **Player**: Representa un jugador con su tablero

### Application Layer

Coordina el flujo del juego:

- **GameController**: Orquesta turnos, ataques y condiciones de victoria

### Presentation Layer

Maneja la interfaz de usuario:

- **BoardView**: Renderiza tableros en el DOM
- **UIController**: Captura eventos y actualiza la vista

## 🧪 Testing

Tests implementados con Jest:

- ✅ Ship: Creación, hits, estado hundido
- ✅ Gameboard: Colocación de barcos, validaciones, ataques
- ✅ Player: Creación con tablero asociado

```bash
npm run test          # Ejecutar todos los tests
```

## 🎨 Comandos Disponibles

```bash
npm run dev           # Desarrollo con hot reload
npm run build         # Build de producción
npm run test          # Ejecutar tests
npm run lint          # Analizar código con ESLint
npm run lint:fix      # Corregir errores automáticamente
npm run format        # Formatear código con Prettier
npm run format:check  # Verificar formato
```

## 🔧 Tecnologías

- **JavaScript ES6+** - Lenguaje principal
- **Webpack 5** - Bundler
- **Jest** - Framework de testing
- **ESLint** - Linter
- **Prettier** - Formateador de código
- **CSS3** - Estilos (Grid, Flexbox, Animaciones)

## 📖 Aprendizajes del Proyecto

Este proyecto forma parte del currículo de [The Odin Project](https://www.theodinproject.com/) y demuestra:

- Arquitectura en capas (MVC adaptado)
- Principios SOLID
- Test-Driven Development
- Separación de responsabilidades
- Manejo de estado sin frameworks
- Manipulación del DOM vanilla

## 📄 Licencia

ISC

## ✍️ Autor

Rodrigo Bernahola
