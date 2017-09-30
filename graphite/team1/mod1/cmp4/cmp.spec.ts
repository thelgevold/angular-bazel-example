
import { Cmp6114Component } from './cmp';
describe('Cmp6114Component', () => {
  it('should add', () => {
    expect(new Cmp6114Component().add6114(1)).toBe(6115);
  });
});