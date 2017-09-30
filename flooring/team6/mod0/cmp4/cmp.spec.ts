
import { Cmp5604Component } from './cmp';
describe('Cmp5604Component', () => {
  it('should add', () => {
    expect(new Cmp5604Component().add5604(1)).toBe(5605);
  });
});