//Haz tú validación en javascript acá
function validaCURP(curp)
{
    return  /\w{4}\d{6}\w{3}$/.test(curp);
}
