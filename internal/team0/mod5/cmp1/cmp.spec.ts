
import { Cmp8051Component } from './cmp';
describe('Cmp8051Component', () => {
  it('should add', () => {
    expect(new Cmp8051Component().add8051(1)).toBe(8052);
  });
});