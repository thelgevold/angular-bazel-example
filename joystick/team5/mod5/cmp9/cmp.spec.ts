
import { Cmp9559Component } from './cmp';
describe('Cmp9559Component', () => {
  it('should add', () => {
    expect(new Cmp9559Component().add9559(1)).toBe(9560);
  });
});