
import { Cmp8366Component } from './cmp';
describe('Cmp8366Component', () => {
  it('should add', () => {
    expect(new Cmp8366Component().add8366(1)).toBe(8367);
  });
});