
import { Cmp8437Component } from './cmp';
describe('Cmp8437Component', () => {
  it('should add', () => {
    expect(new Cmp8437Component().add8437(1)).toBe(8438);
  });
});