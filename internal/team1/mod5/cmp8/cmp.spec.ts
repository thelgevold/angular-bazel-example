
import { Cmp8158Component } from './cmp';
describe('Cmp8158Component', () => {
  it('should add', () => {
    expect(new Cmp8158Component().add8158(1)).toBe(8159);
  });
});