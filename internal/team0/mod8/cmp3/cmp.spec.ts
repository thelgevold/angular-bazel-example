
import { Cmp8083Component } from './cmp';
describe('Cmp8083Component', () => {
  it('should add', () => {
    expect(new Cmp8083Component().add8083(1)).toBe(8084);
  });
});