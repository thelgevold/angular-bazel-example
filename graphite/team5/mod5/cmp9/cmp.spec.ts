
import { Cmp6559Component } from './cmp';
describe('Cmp6559Component', () => {
  it('should add', () => {
    expect(new Cmp6559Component().add6559(1)).toBe(6560);
  });
});