
import { Cmp8148Component } from './cmp';
describe('Cmp8148Component', () => {
  it('should add', () => {
    expect(new Cmp8148Component().add8148(1)).toBe(8149);
  });
});