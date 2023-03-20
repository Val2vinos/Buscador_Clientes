update orden set numorden = (select max(numorden) + 1 from orden);

select * from orden;