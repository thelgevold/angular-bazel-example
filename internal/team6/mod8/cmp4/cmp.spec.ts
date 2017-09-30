
import { Cmp8684Component } from './cmp';
describe('Cmp8684Component', () => {
  it('should add', () => {
    expect(new Cmp8684Component().add8684(1)).toBe(8685);
  });
});