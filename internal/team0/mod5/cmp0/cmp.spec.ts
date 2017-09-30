
import { Cmp8050Component } from './cmp';
describe('Cmp8050Component', () => {
  it('should add', () => {
    expect(new Cmp8050Component().add8050(1)).toBe(8051);
  });
});