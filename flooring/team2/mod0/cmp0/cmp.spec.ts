
import { Cmp5200Component } from './cmp';
describe('Cmp5200Component', () => {
  it('should add', () => {
    expect(new Cmp5200Component().add5200(1)).toBe(5201);
  });
});