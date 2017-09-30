
import { Cmp8489Component } from './cmp';
describe('Cmp8489Component', () => {
  it('should add', () => {
    expect(new Cmp8489Component().add8489(1)).toBe(8490);
  });
});