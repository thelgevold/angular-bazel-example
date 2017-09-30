
import { Cmp8062Component } from './cmp';
describe('Cmp8062Component', () => {
  it('should add', () => {
    expect(new Cmp8062Component().add8062(1)).toBe(8063);
  });
});