
import { Cmp6054Component } from './cmp';
describe('Cmp6054Component', () => {
  it('should add', () => {
    expect(new Cmp6054Component().add6054(1)).toBe(6055);
  });
});