
import { Cmp9028Component } from './cmp';
describe('Cmp9028Component', () => {
  it('should add', () => {
    expect(new Cmp9028Component().add9028(1)).toBe(9029);
  });
});