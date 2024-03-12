// language.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LanguageMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let language = req.headers['accept-language'] || req.query.lang;
    if (!language) {
      language = 'en'; // Langue par défaut
    } else if (language !== 'en' && language !== 'fr') {
      language = 'en'; // Fallback à l'anglais si la langue n'est pas supportée
    }

    //  stocker la langue déterminée où vous le souhaitez, par exemple dans la requête
    req['language'] = language;

    next();
  }
}
