function linkdirective(){

    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {title: '=linkdirectiveTitle',
                number: '@number'},
       
        template: '<div>' +
        '<span>{{title}} la factorielle de {{number}} est :</span>' +
        '<span>{{resultat}}</span>'+'</span>',
        

        link: function(scope, element, attrs){
            
            function factorielle (number) {
                return number <= 1 ? 1 : number * factorielle(number-1);
            }

            scope.resultat=factorielle(attrs.number);

        }
    };
}