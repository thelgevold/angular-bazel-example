
import { Cmp4559Component } from './cmp';
describe('Cmp4559Component', () => {
  it('should add', () => {
    expect(new Cmp4559Component().add4559(1)).toBe(4560);
  });
});