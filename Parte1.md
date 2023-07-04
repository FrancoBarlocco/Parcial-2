Person{
 
	id: Number,
	Name: String,
	Surname: String,
	mail: String,
	tel: Number,
	company : String
}


Company{

	id: Number,
	Name: String,
	web: String
}


POST    /Post/:Person

	Agrega una nueva persona a la lista de contactos

Retorna:         
		200 en caso de éxito.
		404 si :Person no existe	
		
GET	/Persons

	Obtiene todas las personas.

Retorna:
		200 en caso de éxito.

GET	/Persons/:id

	
	Obtiene una persona en base a su id.

Retorna:
		200 en caso de éxito
		404 si :id no existe	
		

GET	/Company

	Obtiene todas las compañias.

Retorna:
		200 en caso de éxito.


GET	/Company/:id

	
	Obtiene una compañia en base a su id.

Retorna:
		200 en caso de éxito
		404 si :id no existe	


