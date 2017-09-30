
import { Cmp6109Component } from './cmp';
describe('Cmp6109Component', () => {
  it('should add', () => {
    expect(new Cmp6109Component().add6109(1)).toBe(6110);
  });
});