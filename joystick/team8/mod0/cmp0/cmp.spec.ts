
import { Cmp9800Component } from './cmp';
describe('Cmp9800Component', () => {
  it('should add', () => {
    expect(new Cmp9800Component().add9800(1)).toBe(9801);
  });
});