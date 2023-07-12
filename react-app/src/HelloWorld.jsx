const hola = {
  Nombre: "Luis",
  Apellido: "de Haro"
}
// eslint-disable-next-line react/prop-types
export const HelloWorld = ({luis, caca}) => {
  return (
    <div className="">
      <h2>First App!! de {caca} daa{luis} gym {hola.Nombre} {hola.Apellido} </h2>
    </div>
  );
};

export default HelloWorld;
