
import { Cmp3800Component } from './cmp';
describe('Cmp3800Component', () => {
  it('should add', () => {
    expect(new Cmp3800Component().add3800(1)).toBe(3801);
  });
});