
import { Cmp8161Component } from './cmp';
describe('Cmp8161Component', () => {
  it('should add', () => {
    expect(new Cmp8161Component().add8161(1)).toBe(8162);
  });
});