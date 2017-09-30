
import { Cmp7800Component } from './cmp';
describe('Cmp7800Component', () => {
  it('should add', () => {
    expect(new Cmp7800Component().add7800(1)).toBe(7801);
  });
});