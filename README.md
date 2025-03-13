# Backend en Node js, Express y Mondo DB

## Requisitos 

- Node.js (v14 o superior)
- MongoDB (Puede estar en docker, pero tiene que estar ejecutándose en localhost:27017)

## Instalación

1. Clona este repositorio:
```
git clone <url-del-repositorio>
```

2. Instala las dependencias:
```
npm install
```

3. Iniciar mongo en docker:
```
docker run --name parcial_crud -d -p 27017:27017 mongo:latest
```

4. Inicia el servidor:
```
npm run dev
```
## Características

- Operaciones CRUD completas para Usuarios y Productos
- Conteo automático de documentos en cada colección
- Conteo total de las operaciones realizadas
