
import { Cmp4800Component } from './cmp';
describe('Cmp4800Component', () => {
  it('should add', () => {
    expect(new Cmp4800Component().add4800(1)).toBe(4801);
  });
});