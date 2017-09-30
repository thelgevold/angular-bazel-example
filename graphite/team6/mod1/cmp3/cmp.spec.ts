
import { Cmp6613Component } from './cmp';
describe('Cmp6613Component', () => {
  it('should add', () => {
    expect(new Cmp6613Component().add6613(1)).toBe(6614);
  });
});