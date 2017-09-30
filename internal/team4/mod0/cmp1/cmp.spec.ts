
import { Cmp8401Component } from './cmp';
describe('Cmp8401Component', () => {
  it('should add', () => {
    expect(new Cmp8401Component().add8401(1)).toBe(8402);
  });
});