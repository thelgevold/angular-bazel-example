
import { Cmp6775Component } from './cmp';
describe('Cmp6775Component', () => {
  it('should add', () => {
    expect(new Cmp6775Component().add6775(1)).toBe(6776);
  });
});