
import { Cmp8629Component } from './cmp';
describe('Cmp8629Component', () => {
  it('should add', () => {
    expect(new Cmp8629Component().add8629(1)).toBe(8630);
  });
});