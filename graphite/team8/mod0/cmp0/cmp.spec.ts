
import { Cmp6800Component } from './cmp';
describe('Cmp6800Component', () => {
  it('should add', () => {
    expect(new Cmp6800Component().add6800(1)).toBe(6801);
  });
});