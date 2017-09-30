
import { Cmp6760Component } from './cmp';
describe('Cmp6760Component', () => {
  it('should add', () => {
    expect(new Cmp6760Component().add6760(1)).toBe(6761);
  });
});