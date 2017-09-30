
import { Cmp8887Component } from './cmp';
describe('Cmp8887Component', () => {
  it('should add', () => {
    expect(new Cmp8887Component().add8887(1)).toBe(8888);
  });
});