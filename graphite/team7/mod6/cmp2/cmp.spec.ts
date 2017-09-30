
import { Cmp6762Component } from './cmp';
describe('Cmp6762Component', () => {
  it('should add', () => {
    expect(new Cmp6762Component().add6762(1)).toBe(6763);
  });
});