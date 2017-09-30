
import { Cmp8444Component } from './cmp';
describe('Cmp8444Component', () => {
  it('should add', () => {
    expect(new Cmp8444Component().add8444(1)).toBe(8445);
  });
});