
import { Cmp8900Component } from './cmp';
describe('Cmp8900Component', () => {
  it('should add', () => {
    expect(new Cmp8900Component().add8900(1)).toBe(8901);
  });
});