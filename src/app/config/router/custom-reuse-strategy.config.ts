import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';

export let LCustomReuseStrategyIntance: CustomReuseStrategy;

export class CustomReuseStrategy implements RouteReuseStrategy {

  private routesToCache: string[] = ['product', 'customer'];

  public storedRouteHandles = new Map<string, DetachedRouteHandle>();

  constructor(
  ) {
    LCustomReuseStrategyIntance = this;
  }

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.routesToCache.indexOf(route.data?.key) > -1;
  }

  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.storedRouteHandles.set(route.data?.key, handle);
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.storedRouteHandles.has(route.data?.key);
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    const detachedRouteHandle = this.storedRouteHandles.get(route.data?.key);
    return detachedRouteHandle ? detachedRouteHandle : false;
  }

  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future?.routeConfig === curr?.routeConfig;
  }

  public removeRouteHandles(): void {
    this.storedRouteHandles.clear();
  }

}
