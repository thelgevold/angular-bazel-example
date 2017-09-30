
import { Cmp3160Component } from './cmp';
describe('Cmp3160Component', () => {
  it('should add', () => {
    expect(new Cmp3160Component().add3160(1)).toBe(3161);
  });
});