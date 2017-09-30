
import { Cmp6111Component } from './cmp';
describe('Cmp6111Component', () => {
  it('should add', () => {
    expect(new Cmp6111Component().add6111(1)).toBe(6112);
  });
});