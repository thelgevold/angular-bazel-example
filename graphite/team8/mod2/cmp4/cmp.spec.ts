
import { Cmp6824Component } from './cmp';
describe('Cmp6824Component', () => {
  it('should add', () => {
    expect(new Cmp6824Component().add6824(1)).toBe(6825);
  });
});