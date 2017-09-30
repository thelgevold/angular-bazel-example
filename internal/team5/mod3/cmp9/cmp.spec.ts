
import { Cmp8539Component } from './cmp';
describe('Cmp8539Component', () => {
  it('should add', () => {
    expect(new Cmp8539Component().add8539(1)).toBe(8540);
  });
});