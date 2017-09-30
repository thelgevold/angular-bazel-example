
import { Cmp6253Component } from './cmp';
describe('Cmp6253Component', () => {
  it('should add', () => {
    expect(new Cmp6253Component().add6253(1)).toBe(6254);
  });
});