import axios, * as axiosTypes from 'axios';
import { Navigation } from '@services';
import { getEnv } from '@utils';
import { Auth } from '../Auth';

class HTTPService {
  private readonly instance: axiosTypes.AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: getEnv('SERVER_URL'),
    });
  }

  public get<Type>(url: string, withToken = false): Promise<axiosTypes.AxiosResponse<Type> | void> {
    return this.instance.get(url, withToken ? this.getTokenHeader() : {}).catch((error) => {
      this.errorHandler(error);
    });
  }

  public async post<Type>(
    url: string,
    data: Record<string, unknown> | string,
    withToken = false,
  ): Promise<axiosTypes.AxiosResponse<Type> | void> {
    return this.instance.post(url, data, withToken ? this.getTokenHeader() : {}).catch((error) => {
      this.errorHandler(error);
    });
  }

  public delete<Type>(url: string, withToken = false): Promise<axiosTypes.AxiosResponse<Type> | void> {
    return this.instance.delete(url, withToken ? this.getTokenHeader() : {}).catch((error) => {
      this.errorHandler(error);
    });
  }

  private getTokenHeader(): axiosTypes.AxiosRequestConfig {
    const token = Auth.token;
    if (!token) {
      throw new Error('Auth token is missing');
    }
    return { headers: { auth: token } };
  }

  private errorHandler(error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
        case 403:
          Navigation.go('access_denied');
          break;
        default:
          Navigation.go('error');
      }
    }
  }
}

export default new HTTPService();
