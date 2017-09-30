
import { Cmp6587Component } from './cmp';
describe('Cmp6587Component', () => {
  it('should add', () => {
    expect(new Cmp6587Component().add6587(1)).toBe(6588);
  });
});