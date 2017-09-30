
import { Cmp6688Component } from './cmp';
describe('Cmp6688Component', () => {
  it('should add', () => {
    expect(new Cmp6688Component().add6688(1)).toBe(6689);
  });
});