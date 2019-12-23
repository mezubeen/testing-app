var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var AppMinimize = /** @class */ (function (_super) {
    __extends(AppMinimize, _super);
    function AppMinimize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppMinimize.prototype.minimize = function () { return cordova(this, "minimize", {}, arguments); };
    AppMinimize.pluginName = "AppMinimize";
    AppMinimize.plugin = "cordova-plugin-appminimize";
    AppMinimize.pluginRef = "plugins.appMinimize";
    AppMinimize.repo = "https://github.com/tomloprod/cordova-plugin-appminimize";
    AppMinimize.platforms = ["Android"];
    AppMinimize = __decorate([
        Injectable()
    ], AppMinimize);
    return AppMinimize;
}(IonicNativePlugin));
export { AppMinimize };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1taW5pbWl6ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUErQlYsK0JBQWlCOzs7O0lBT2hELDhCQUFROzs7Ozs7SUFQRyxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVc7c0JBaEN4QjtFQWdDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgTWluaW1pemVcbiAqIEBkZXNjcmlwdGlvblxuICogQXBwTWluaW1pemUgaXMgYSBwbHVnaW4gdG8gbWluaW1pemUgdGhlIGFwcGxpY2F0aW9uIG9uIGFuZHJvaWQgZGV2aWNlc1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUGxhdGZyb20gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG4gKiBpbXBvcnQgeyBBcHBNaW5pbWl6ZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXBwLW1pbmltaXplL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIGFwcE1pbmltaXplOiBBcHBNaW5pbWl6ZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5wbGF0Zm9ybS5yZWdpc3RlckJhY2tCdXR0b25BY3Rpb24oKCkgPT4ge1xuICogICAgdGhpcy5hcHBNaW5pbWl6ZS5taW5pbWl6ZSgpO1xuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwTWluaW1pemUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHBtaW5pbWl6ZScsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuYXBwTWluaW1pemUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RvbWxvcHJvZC9jb3Jkb3ZhLXBsdWdpbi1hcHBtaW5pbWl6ZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwTWluaW1pemUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIE1pbmltaXplcyB0aGUgYXBwbGljYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBtaW5pbWl6ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=