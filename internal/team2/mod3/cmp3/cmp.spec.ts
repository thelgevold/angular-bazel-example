
import { Cmp8233Component } from './cmp';
describe('Cmp8233Component', () => {
  it('should add', () => {
    expect(new Cmp8233Component().add8233(1)).toBe(8234);
  });
});