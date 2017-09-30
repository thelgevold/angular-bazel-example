
import { Cmp9191Component } from './cmp';
describe('Cmp9191Component', () => {
  it('should add', () => {
    expect(new Cmp9191Component().add9191(1)).toBe(9192);
  });
});