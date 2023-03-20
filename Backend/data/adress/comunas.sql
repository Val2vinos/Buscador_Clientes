select c.id,c.name 
from Commune c
join City r on c.CityId = r.id
where r.id = @idCiudad
order  by c.name