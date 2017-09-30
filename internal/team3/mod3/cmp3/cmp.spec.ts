
import { Cmp8333Component } from './cmp';
describe('Cmp8333Component', () => {
  it('should add', () => {
    expect(new Cmp8333Component().add8333(1)).toBe(8334);
  });
});