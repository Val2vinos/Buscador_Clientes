select 
per.rut,
per.Name,
s.name 'Sponsor',
prod.code 'codeProducto',
prod.name 'producto',
pol.CertifiedFolio,
pol.ContractDate,
pol.EndDate,
pol.IsDeleted
from person per
join policy pol on pol.PersonId = per.Id
join sponsor s on pol.SponsorId = s.Id
join Product prod on pol.productid = prod.id
where per.rut = @rut