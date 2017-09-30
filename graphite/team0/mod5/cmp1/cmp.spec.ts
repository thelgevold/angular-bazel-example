
import { Cmp6051Component } from './cmp';
describe('Cmp6051Component', () => {
  it('should add', () => {
    expect(new Cmp6051Component().add6051(1)).toBe(6052);
  });
});