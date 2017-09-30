
import { Cmp6367Component } from './cmp';
describe('Cmp6367Component', () => {
  it('should add', () => {
    expect(new Cmp6367Component().add6367(1)).toBe(6368);
  });
});