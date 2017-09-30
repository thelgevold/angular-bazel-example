
import { Cmp9387Component } from './cmp';
describe('Cmp9387Component', () => {
  it('should add', () => {
    expect(new Cmp9387Component().add9387(1)).toBe(9388);
  });
});