
import { Cmp1200Component } from './cmp';
describe('Cmp1200Component', () => {
  it('should add', () => {
    expect(new Cmp1200Component().add1200(1)).toBe(1201);
  });
});