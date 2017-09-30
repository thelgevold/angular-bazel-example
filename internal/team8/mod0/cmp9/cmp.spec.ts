
import { Cmp8809Component } from './cmp';
describe('Cmp8809Component', () => {
  it('should add', () => {
    expect(new Cmp8809Component().add8809(1)).toBe(8810);
  });
});