
import { Cmp8485Component } from './cmp';
describe('Cmp8485Component', () => {
  it('should add', () => {
    expect(new Cmp8485Component().add8485(1)).toBe(8486);
  });
});