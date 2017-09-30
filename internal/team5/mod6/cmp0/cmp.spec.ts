
import { Cmp8560Component } from './cmp';
describe('Cmp8560Component', () => {
  it('should add', () => {
    expect(new Cmp8560Component().add8560(1)).toBe(8561);
  });
});