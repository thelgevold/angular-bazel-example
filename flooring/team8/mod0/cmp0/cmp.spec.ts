
import { Cmp5800Component } from './cmp';
describe('Cmp5800Component', () => {
  it('should add', () => {
    expect(new Cmp5800Component().add5800(1)).toBe(5801);
  });
});