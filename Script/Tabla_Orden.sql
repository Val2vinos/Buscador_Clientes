create table orden (
numorden int not null)

update orden set numorden = 1
update orden set numorden = (select max(numorden) + 1 from orden)



select * from orden

select * from consolidado