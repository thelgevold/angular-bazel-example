
import { Cmp6322Component } from './cmp';
describe('Cmp6322Component', () => {
  it('should add', () => {
    expect(new Cmp6322Component().add6322(1)).toBe(6323);
  });
});