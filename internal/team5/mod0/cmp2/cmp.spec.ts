
import { Cmp8502Component } from './cmp';
describe('Cmp8502Component', () => {
  it('should add', () => {
    expect(new Cmp8502Component().add8502(1)).toBe(8503);
  });
});