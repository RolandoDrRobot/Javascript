try{
  console.log('Supongamos que esto genera un error');
} catch {
  console.log("Aqui yo no pase el error por parametro para catch pero aqui esta " + error);
}