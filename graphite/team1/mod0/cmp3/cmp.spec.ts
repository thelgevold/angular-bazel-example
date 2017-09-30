
import { Cmp6103Component } from './cmp';
describe('Cmp6103Component', () => {
  it('should add', () => {
    expect(new Cmp6103Component().add6103(1)).toBe(6104);
  });
});