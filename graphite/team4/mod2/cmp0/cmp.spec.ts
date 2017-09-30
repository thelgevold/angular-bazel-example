
import { Cmp6420Component } from './cmp';
describe('Cmp6420Component', () => {
  it('should add', () => {
    expect(new Cmp6420Component().add6420(1)).toBe(6421);
  });
});