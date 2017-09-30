
import { Cmp1800Component } from './cmp';
describe('Cmp1800Component', () => {
  it('should add', () => {
    expect(new Cmp1800Component().add1800(1)).toBe(1801);
  });
});