
import { Cmp8057Component } from './cmp';
describe('Cmp8057Component', () => {
  it('should add', () => {
    expect(new Cmp8057Component().add8057(1)).toBe(8058);
  });
});