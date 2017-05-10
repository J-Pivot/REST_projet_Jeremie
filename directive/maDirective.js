function maDirective(){
    return{
        restrict : "E",
        template : "<p>  {{hello}} <span ng-transclude> </span></p>",
        transclude:true,
        scope:false,
        link: function(scope,element,hello){
            scope.hello="pas hello";
        }
    }
};