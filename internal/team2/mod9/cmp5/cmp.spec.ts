
import { Cmp8295Component } from './cmp';
describe('Cmp8295Component', () => {
  it('should add', () => {
    expect(new Cmp8295Component().add8295(1)).toBe(8296);
  });
});