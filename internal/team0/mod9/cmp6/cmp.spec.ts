
import { Cmp8096Component } from './cmp';
describe('Cmp8096Component', () => {
  it('should add', () => {
    expect(new Cmp8096Component().add8096(1)).toBe(8097);
  });
});