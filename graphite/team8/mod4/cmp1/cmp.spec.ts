
import { Cmp6841Component } from './cmp';
describe('Cmp6841Component', () => {
  it('should add', () => {
    expect(new Cmp6841Component().add6841(1)).toBe(6842);
  });
});