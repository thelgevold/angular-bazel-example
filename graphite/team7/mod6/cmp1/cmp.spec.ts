
import { Cmp6761Component } from './cmp';
describe('Cmp6761Component', () => {
  it('should add', () => {
    expect(new Cmp6761Component().add6761(1)).toBe(6762);
  });
});