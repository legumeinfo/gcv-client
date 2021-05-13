// Angular
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, mergeMap, tap } from 'rxjs/operators';
// app
import { Brand, Communication, Config, Dashboard, Miscellaneous, Request,
  Server } from '@gcv/core/models';


declare var document: any;


export class ConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConfigError";
  }
}


@Injectable()
export class AppConfig {

  // later frozen to be 'const'
  public static SERVERS: Server[] = [];
  public static TOURS: string[] = [];
  public static BRAND: Brand;
  public static DASHBOARD: Dashboard;
  public static MISCELLANEOUS: Miscellaneous;
  public static COMMUNICATION: Communication;

  constructor(private http: HttpClient) {}

  public static getDefaultServer(): Server {
    if (AppConfig.SERVERS.length > 0) {
      return AppConfig.SERVERS[0];
    }
    return new Server();
  }

  public static getServer(id: string): Server {
    let server;
    AppConfig.SERVERS.forEach((s) => {
      if (s.id === id) {
        server = s;
      }
    });
    return server;
  }

  public static getServerRequest(serverID: string, requestType: string): Request {
    let server: Server;
    const i = AppConfig.SERVERS.map((s) => s.id).indexOf(serverID);
    if (i > -1) {
      server = AppConfig.SERVERS[i];
    } else {
      throw new ConfigError('\'' + serverID + '\' is not a valid server ID');
    }
    if (!server.hasOwnProperty(requestType)) {
      throw new ConfigError('\'' + serverID + '\' does not support requests of type \'' + requestType + '\'');
    }
    return server[requestType];
  }

  public load(): Promise<any> {
    return this.http.get<Config>('config/config.json')
      .pipe(
        tap((config) => this._loadBrand(config.brand)),
        tap((config) => this._loadCommunication(config.communication)),
        tap((config) => this._loadDashboard(config.dashboard)),
        tap((config) => this._loadMiscellaneous(config.miscellaneous)))
      .toPromise()
        .then((config) => Promise.all([
          this._loadTours(config.tours),
          this._loadServers(config.servers)]));
  }

  // general support for namespace function strings
  private _executeFunctionByName(functionName, context, args): any {
    args = [].slice.call(arguments).splice(2);
    const namespaces = functionName.split('.');
    const func = namespaces.pop();
    for (const space of namespaces) {
      context = context[space];
    }
    return context[func].apply(context, args);
  }

  // add JavaScript to document head
  private _loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // load script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      if (script.readyState) {  // IE
        script.onreadystatechange = () => {
          if (script.readyState === 'loaded' ||
              script.readyState === 'complete') {
            script.onreadystatechange = null;
            resolve();
          }
        };
      } else {  // others
        script.onload = resolve;
      }
      script.onerror = reject;
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

  private _setAndFreezeServers(servers: any[]): void {
    AppConfig.SERVERS = servers;
    Object.freeze(AppConfig.SERVERS);
  }

  private _setAndFreezeTours(tours: any[]): void {
    AppConfig.TOURS = tours.map((t) => t.name);
    Object.freeze(AppConfig.TOURS);
  }

  private _loadBrand(brand: any): void {
    if (brand.favicon !== undefined) {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/x-icon';
      link.href = brand.favicon;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    if (brand.hide === undefined) {
      brand.hide = true;
    }
    AppConfig.BRAND = brand;
    Object.freeze(AppConfig.BRAND);
  }

  private _loadCommunication(communication: any): void {
    AppConfig.COMMUNICATION = communication || {};
    Object.freeze(AppConfig.COMMUNICATION);
  }

  private _loadDashboard(dashboard: any): void {
    dashboard.gcvScreenshot = dashboard.gcvScreenshot || {};
    if (dashboard.gcvScreenshot.img == undefined) {
      dashboard.gcvScreenshot.img = '/config/img/instructions-gcv.png';
    }
    dashboard.trackScreenshot = dashboard.trackScreenshot || {};
    if (dashboard.trackScreenshot.img == undefined) {
      dashboard.trackScreenshot.img = '/config/img/instructions-track.png';
    }
    dashboard.microsyntenyScreenshot = dashboard.microsyntenyScreenshot || {};
    if (dashboard.microsyntenyScreenshot.img == undefined) {
      dashboard.microsyntenyScreenshot.img = '/config/img/instructions-microsynteny.png';
    }
    dashboard.dotplotsScreenshot = dashboard.dotplotsScreenshot || {};
    if (dashboard.dotplotsScreenshot.img == undefined) {
      dashboard.dotplotsScreenshot.img = '/config/img/instructions-dotplots.png';
    }
    dashboard.macrosyntenyScreenshot = dashboard.macrosyntenyScreenshot || {};
    if (dashboard.macrosyntenyScreenshot.img == undefined) {
      dashboard.macrosyntenyScreenshot.img = '/config/img/instructions-macrosynteny.png';
    }
    AppConfig.DASHBOARD = dashboard;
    Object.freeze(AppConfig.DASHBOARD);
  }

  private _loadMiscellaneous(miscellaneous: any): void {
    AppConfig.MISCELLANEOUS = miscellaneous;
    Object.freeze(AppConfig.MISCELLANEOUS);
  }

  private _loadServers(servers: any[]): Promise<any> {
    return Promise.all(
      servers
        .filter((s) => {
          return s.macroColors !== undefined &&
                 s.macroColors.scriptUrl !== undefined &&
                 s.macroColors.functionName !== undefined;
        })
        .map((s) => {
          return this._loadScript(s.macroColors.scriptUrl || '').then(
            () => {
              s.macroColors.function = (args) => {
                return this._executeFunctionByName(s.macroColors.functionName, window, args);
              };
            }, (error) => {
              delete s.macroColors;
              console.log('Failed to load macro-synteny colors');
            },
          );
        })
      )
      .then(() => this._setAndFreezeServers(servers))
      .catch((error) => this._setAndFreezeServers(servers));
  }

  private _loadTours(tours: any[]): Promise<any> {
    tours = tours || [];
    return Promise.all(tours.map((t) => this._loadScript('config/tours/' + t.script)))
      .then(() => this._setAndFreezeTours(tours))
      .catch((error) => this._setAndFreezeTours(tours));
  }
}
