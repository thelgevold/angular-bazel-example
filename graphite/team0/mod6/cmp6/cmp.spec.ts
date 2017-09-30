
import { Cmp6066Component } from './cmp';
describe('Cmp6066Component', () => {
  it('should add', () => {
    expect(new Cmp6066Component().add6066(1)).toBe(6067);
  });
});