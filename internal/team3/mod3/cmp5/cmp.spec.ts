
import { Cmp8335Component } from './cmp';
describe('Cmp8335Component', () => {
  it('should add', () => {
    expect(new Cmp8335Component().add8335(1)).toBe(8336);
  });
});