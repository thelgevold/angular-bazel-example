
import { Cmp8390Component } from './cmp';
describe('Cmp8390Component', () => {
  it('should add', () => {
    expect(new Cmp8390Component().add8390(1)).toBe(8391);
  });
});