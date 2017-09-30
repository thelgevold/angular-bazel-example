
import { Cmp6379Component } from './cmp';
describe('Cmp6379Component', () => {
  it('should add', () => {
    expect(new Cmp6379Component().add6379(1)).toBe(6380);
  });
});