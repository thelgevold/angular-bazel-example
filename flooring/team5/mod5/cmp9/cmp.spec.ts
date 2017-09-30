
import { Cmp5559Component } from './cmp';
describe('Cmp5559Component', () => {
  it('should add', () => {
    expect(new Cmp5559Component().add5559(1)).toBe(5560);
  });
});