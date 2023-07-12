# App de Todo con autenticacion con email, Google

Esta app estare implementando autenticacion con Firebase, con los servicios de email y Google
tambien implementare una base de datos donde cada usuario tendra su lista de tareas, ademas pienso agregar una seccion donde todos los usuarios podran ver mensajes extra de todos los usuarios registrados.

## Tweets

Solo se pueden agregar tweets y ver los demas tweets -> implementare para que los usaurios miren sus porpios tweets y puedan editarlos y eliminarlos.

## Todo

Todas las operacios CRUD se pueden hacer cada usuario puede hacer sus propieas todos y mirarlo en la pestaña de /todo

## Auth

- Los usuarios se pueden registrar en la pagina de /auth/register o ingresar en caso cuente con una cuenta /auth.

- Si no estan Logeados y intentan ingresar a la pagina de /, /todo, /tweets este les rechazara y volvera a la ruta de /auth.

- Si se logean por primera vez este les renviara a otra ruta que es /auth/create donde se creara una cuenta basica en la base de datos Firestore.

* Es posible que al crear cuentas solo diga un solo mensaje ya que no esta implementado cada error que emite firebase solo algunos basicos estan implementados

# Refactor

- El tamaño de los archivos, me percate que al ahcer el build este sobrepasa y muestra una advertencia sobre 500kBs max size en vite. -> Tratar de importar los archivos no tan importantes en la app de forma dinamica para mejor optimización.

- En ciertas ocaciones al navegar sale una advertencia sobre react router. Ver!!

- Estructura de carpetas -> Hacer Clean Architecture

* Posiblemente implemente redux

* Refactorizar los context y sus reducers

* refactor los utils y nombres de exportaciones

* ver la manera de optimizar y bloquear rutas

# reactfire
