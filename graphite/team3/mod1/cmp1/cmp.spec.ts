
import { Cmp6311Component } from './cmp';
describe('Cmp6311Component', () => {
  it('should add', () => {
    expect(new Cmp6311Component().add6311(1)).toBe(6312);
  });
});