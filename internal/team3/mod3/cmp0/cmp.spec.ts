
import { Cmp8330Component } from './cmp';
describe('Cmp8330Component', () => {
  it('should add', () => {
    expect(new Cmp8330Component().add8330(1)).toBe(8331);
  });
});