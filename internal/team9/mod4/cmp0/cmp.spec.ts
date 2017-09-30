
import { Cmp8940Component } from './cmp';
describe('Cmp8940Component', () => {
  it('should add', () => {
    expect(new Cmp8940Component().add8940(1)).toBe(8941);
  });
});