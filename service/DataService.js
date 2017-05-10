var DataService = function ($q,$http) {
    return {
        getTable: function(){
            return  [
                        {
                            nom :       'Minet',
                            prenom :    'Bernard',
                            humain :    'humain'
                        },
                        {
                            nom :       'Balasko',
                            prenom :    'Josiane',
                            humain :    'chat'
                        },
                          {
                            nom :       'jeremie',
                            prenom :    'pivot',
                            humain :    'humain'
                        },
                    ];
        },
       

        getMeteo:function(longitude,lattitude){
            var deferred=$q.defer();
            $http({
                method: "GET",
                url:"http://www.infoclimat.fr/public-api/gfs/json?_ll="+longitude+","+lattitude+"&_auth=ABoFElMtAyFQfVNkBnAAKVY%2BUmcPeQEmB3sAY1o%2FB3oFbl8%2BBGRRN1E%2FA35UewE3Un8GZQA7ADAKYQB4CnhTMgBqBWlTOANkUD9TNgYpACtWeFIzDy8BJgdsAGVaKQdmBWJfOAR5UTFRPQNoVHoBN1JiBmEAIAAnCmgAYwpuUzMAagVoUzIDaVA5UzgGKQArVmBSOw8wAWoHbABiWmYHYQUyXz4EM1E3UTsDZ1R6ATxSZAZkAD0APwpuAGAKZFMvAHwFGFNDA3xQf1NzBmMAclZ4UmcPbgFt&_c=78be7f079be2c363e761b11d36999dc3",
                cache:false
            }).then(function success(response){
                deferred.resolve(response.data);
            },function success(error){
                deferred.reject(error.status);
            });
    return deferred.promise;
    }

    };
}

