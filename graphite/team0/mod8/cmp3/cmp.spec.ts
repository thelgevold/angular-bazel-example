
import { Cmp6083Component } from './cmp';
describe('Cmp6083Component', () => {
  it('should add', () => {
    expect(new Cmp6083Component().add6083(1)).toBe(6084);
  });
});