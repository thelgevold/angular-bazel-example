
import { Cmp8999Component } from './cmp';
describe('Cmp8999Component', () => {
  it('should add', () => {
    expect(new Cmp8999Component().add8999(1)).toBe(9000);
  });
});