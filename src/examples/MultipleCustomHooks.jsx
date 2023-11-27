import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {
  
  
    const {data,isLoading,hasError}=useFetch('https://pokeapi.co/api/v2/pokemon/130')

    const {name,base_experience,types,sprites} = !!data && data
    console.log(data);

    const [...tipos] = types ??[]




    return (
    <>
    <h1>Pokémon </h1>
    <hr />
     
    {
        isLoading && <div className="alert alert-info text">Cargando...</div>
         
    }

    {
        !isLoading &&(
            
            <div className="pokemondiv">

                <img src={sprites?.front_default}
                alt="Pokémon"
                width={'250px'}
                height={'250px'}></img>

                <h1>Nombre: {name}</h1>

                <h3>Experencia base: {base_experience}</h3>

                {tipos.map(({type}) =>
                    <p key={type.name}>Tipos: {type.name}
                        <br />
                    </p>
                )}

            </div>
            ) 
        
    }
        
            

    </>
  )
}
