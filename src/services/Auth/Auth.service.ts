import { User } from '@types';
import { HTTP } from '../HTTP';

class AuthService {
  public async login(username: string, password: string): Promise<User> {
    if (!this.getToken()) {
      const response = await HTTP.post<{ token: string }>('/login', { username, password });
      if (response) {
        this.saveToken(response.data.token);
      }
    }
    return this.parseJwt(this.getToken())!;
  }

  public logout(): void {
    this.deleteToken();
  }

  get token(): string {
    return this.getToken();
  }

  get currentUser(): User | null {
    return this.parseJwt(this.getToken());
  }

  private parseJwt(token: string): User | null {
    try {
      const { userId, username } = JSON.parse(atob(token.split('.')[1]));
      return { userId, username };
    } catch (e) {
      return null;
    }
  }

  private getToken(): string {
    const token = document.cookie.split(';').find((c) => c.trim().startsWith('token' + '='));
    return token?.replace('token=', '') || '';
  }

  private saveToken(token: string): void {
    document.cookie = `token=${token}; max-age=3600­`;
  }

  private deleteToken(): void {
    document.cookie = 'token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
}

export default new AuthService();
