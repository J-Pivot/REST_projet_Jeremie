function celKelFilter(){
    return function(temperature,cel){
        if (cel==true){
        celcuis = temperature - 273,15;
        deg = celcuis.toFixed(2);
        return (deg +"°C");}
        else{
            return (temperature+ "°K");
        }
    };
};