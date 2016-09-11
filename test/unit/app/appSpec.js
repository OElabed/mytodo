describe('app module', function () {



    /**
     * dependencies tests
     */
    describe('dependencies', function () {


        var module, deps;

        var hasModule = function (m) {
            return deps.indexOf(m) >= 0;
        };

        beforeEach(function () {
            module = angular.module('app');
            deps = module.value('app').requires;
        });

        it('should be registered', function () {
            expect(module).not.toEqual(null);
        });

        it('should have ui.router as a dependency', function () {
            expect(hasModule('ui.router')).toEqual(true);
        });

        it('should have app.todo as a dependency', function () {
            expect(hasModule('app.todo')).toEqual(true);
        });

        it('should have common.services.todo as a dependency', function () {
            expect(hasModule('common.services.todo')).toEqual(true);
        });

        it('should have common.directives.ngBlur as a dependency', function () {
            expect(hasModule('common.directives.ngBlur')).toEqual(true);
        });

    });

});
