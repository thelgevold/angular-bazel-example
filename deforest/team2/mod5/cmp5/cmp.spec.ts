
import { Cmp3255Component } from './cmp';
describe('Cmp3255Component', () => {
  it('should add', () => {
    expect(new Cmp3255Component().add3255(1)).toBe(3256);
  });
});