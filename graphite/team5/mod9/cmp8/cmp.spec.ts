
import { Cmp6598Component } from './cmp';
describe('Cmp6598Component', () => {
  it('should add', () => {
    expect(new Cmp6598Component().add6598(1)).toBe(6599);
  });
});