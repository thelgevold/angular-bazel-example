
import { Cmp6702Component } from './cmp';
describe('Cmp6702Component', () => {
  it('should add', () => {
    expect(new Cmp6702Component().add6702(1)).toBe(6703);
  });
});