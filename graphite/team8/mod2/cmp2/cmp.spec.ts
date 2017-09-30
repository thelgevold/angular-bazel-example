
import { Cmp6822Component } from './cmp';
describe('Cmp6822Component', () => {
  it('should add', () => {
    expect(new Cmp6822Component().add6822(1)).toBe(6823);
  });
});