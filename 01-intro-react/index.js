const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Iroman",
};

const retornaPersona = ({ clave, nombre, edad, rango = "Capitan" }) => {
  return {
    nombreClave: clave,
    años: edad,
  };
};

const avenger = retornaPersona(persona);

console.log(avenger.años, avenger.nombreClave);
