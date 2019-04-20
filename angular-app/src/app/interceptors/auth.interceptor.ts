import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service.ts";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = authService.getToken();
    let configObject = {
      headers: req.headers.append(key, value),
      params: req.params.set("auth", token)
    };
    const copiedRequest = req.clone(configObject);
    return next.handle(req);
  }
}
