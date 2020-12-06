alert("Seja bem vindo");
function calcula(value)
{
    por = 0;
    value = parseFloat(value);    
    if (value <=980)
    {
      por = 20;
    }
    else if (value > 980 && value <= 1300)
    {
      por = 15;
    }
    else if (value > 1300 && value <= 1800)
    {
      por = 10;
    }
    else if (value > 1800)
    {
      por = 5;
    }
    resp = value + ((value * por) / 100);
    document.getElementById("valor").innerHTML = "Salário: " + value;
    document.getElementById("calculo").innerHTML = "Cálculo de aumento: " + ((value * por) / 100);
    document.getElementById("porcetagem").innerHTML = "Porcentagem: " + por + "%";    
    document.getElementById("reposta").innerHTML = "Valor Final: " + resp;
    
    return resp;
}