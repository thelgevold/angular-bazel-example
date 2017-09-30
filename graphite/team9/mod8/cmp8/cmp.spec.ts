
import { Cmp6988Component } from './cmp';
describe('Cmp6988Component', () => {
  it('should add', () => {
    expect(new Cmp6988Component().add6988(1)).toBe(6989);
  });
});