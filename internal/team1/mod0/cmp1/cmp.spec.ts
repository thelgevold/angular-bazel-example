
import { Cmp8101Component } from './cmp';
describe('Cmp8101Component', () => {
  it('should add', () => {
    expect(new Cmp8101Component().add8101(1)).toBe(8102);
  });
});