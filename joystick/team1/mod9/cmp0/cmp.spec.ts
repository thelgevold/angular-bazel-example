
import { Cmp9190Component } from './cmp';
describe('Cmp9190Component', () => {
  it('should add', () => {
    expect(new Cmp9190Component().add9190(1)).toBe(9191);
  });
});