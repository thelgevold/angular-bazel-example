
import { Cmp8322Component } from './cmp';
describe('Cmp8322Component', () => {
  it('should add', () => {
    expect(new Cmp8322Component().add8322(1)).toBe(8323);
  });
});