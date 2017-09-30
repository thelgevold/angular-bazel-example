
import { Cmp8212Component } from './cmp';
describe('Cmp8212Component', () => {
  it('should add', () => {
    expect(new Cmp8212Component().add8212(1)).toBe(8213);
  });
});