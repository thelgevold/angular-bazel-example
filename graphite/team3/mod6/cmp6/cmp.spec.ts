
import { Cmp6366Component } from './cmp';
describe('Cmp6366Component', () => {
  it('should add', () => {
    expect(new Cmp6366Component().add6366(1)).toBe(6367);
  });
});