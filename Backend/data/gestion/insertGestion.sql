insert into consolidado (orden,ejecutiva,fecha_gestion,hora_gestion,rut_titular,rut_paciente,nombre_paciente,
fecha_nacimiento,id_prevision,direccion,id_comuna,id_ciudad,cod_region,telefono1,telefono2,telefono3,email,
id_tipo_atencion,descripcion_atencion,cod_producto,id_servicio,poliza,sponsor,id_callreason,obs)
values(@orden,@ejecutiva,@fecha_gestion,@hora_gestion,@rut_titular,@rut_paciente,@nombre_paciente,
@fecha_nacimiento,@id_prevision,@direccion,@id_comuna,@id_ciudad,@cod_region,@telefono1,@telefono2,@telefono3,
@email,@id_tipo_atencion,@descripcion_atencion,@cod_producto,@id_servicio,@poliza,
@sponsor,@id_callreason,@obs)